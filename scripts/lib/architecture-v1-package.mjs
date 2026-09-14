import { findPublicPackagePrivacyViolations } from './public-package-privacy.mjs';

export const SELIN_ARCHITECTURE_V1_EFFECTIVE_DATE = '2026-09-14';
export const APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT = Object.freeze({
  policyVersion: 'selin-four-day-retrieval-and-progression@1',
  templateContractVersion: 'selin-four-day-interactive@1',
  assessmentPolicyVersion: 'selin-section-and-daily-checks@1',
  learnerFacingLanguage: 'ENGLISH_ONLY',
  cadence: 'FOUR_DAY',
  assessment: 'SECTION_AND_DAILY_CHECKS_FEEDBACK_ONLY'
});

const LEARNER_FACING_STRING_FIELDS = new Set([
  'title', 'subtitle', 'label', 'intro', 'text', 'description', 'instructions', 'lessonNotes',
  'examples', 'example', 'q', 'question', 'opt', 'options', 'feedback', 'content',
  'prompt', 'heading', 'message'
]);
const TURKISH_PHRASES = /\b(lütfen|türkçe|bu bir|doğru cevap|yanlış cevap|açıklama|örnek cümle|soru|cevap|ödev|ders|kelime|dinleme|okuma|yazma|dilbilgisi)\b/i;
const TURKISH_CHARACTERS = /[çğıöşüÇĞİÖŞÜ]/;

function isFuturePackage(packageData) {
  return typeof packageData?.date === 'string' && packageData.date >= SELIN_ARCHITECTURE_V1_EFFECTIVE_DATE;
}

function isIsoCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function collectEnglishOnlyErrors(value, path = '$', fieldName = '') {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectEnglishOnlyErrors(item, `${path}[${index}]`, fieldName));
  }
  if (!value || typeof value !== 'object') {
    if (typeof value === 'string' && LEARNER_FACING_STRING_FIELDS.has(fieldName) && !/^https?:\/\//i.test(value)) {
      if (TURKISH_CHARACTERS.test(value) || TURKISH_PHRASES.test(value)) return [`${path}: unexpected Turkish learner-facing content`];
    }
    return [];
  }
  return Object.entries(value).flatMap(([key, child]) => collectEnglishOnlyErrors(child, `${path}.${key}`, key));
}

function collectQuestionRecords(value, path = '$', records = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectQuestionRecords(item, `${path}[${index}]`, records));
    return records;
  }
  if (!value || typeof value !== 'object') return records;

  const options = value.opt ?? value.options;
  const answer = value.a ?? value.answer;
  if (Array.isArray(options)) records.push({ path, id: value.id, options, answer, prompt: value.q ?? value.question });
  Object.entries(value).forEach(([key, child]) => collectQuestionRecords(child, `${path}.${key}`, records));
  return records;
}

function collectQuestionErrors(packageData) {
  const records = collectQuestionRecords(packageData);
  const errors = [];
  const ids = new Set();
  const indexed = [];

  for (const question of records) {
    if (!Array.isArray(question.options) || question.options.length < 2) errors.push(`${question.path}: malformed options`);
    if (typeof question.prompt !== 'string' || !question.prompt.trim()) errors.push(`${question.path}: missing learner-facing question prompt`);
    if (question.id !== undefined) {
      if (ids.has(question.id)) errors.push(`${question.path}: duplicate question id ${question.id}`);
      ids.add(question.id);
    }
    if (typeof question.answer === 'number') {
      if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
        errors.push(`${question.path}: answer index is outside option range`);
      } else {
        indexed.push(question);
      }
    }
  }

  if (indexed.length >= 3 && indexed.every(question => question.answer === 0)) errors.push('multiple-choice answers are all option 0');
  if (indexed.length >= 6) {
    const counts = new Map();
    indexed.forEach(question => counts.set(question.answer, (counts.get(question.answer) ?? 0) + 1));
    if (Math.max(...counts.values()) / indexed.length >= 0.8) errors.push('multiple-choice answer position is materially dominant');
    if (indexed.length >= 8) {
      const positions = indexed.map(question => question.answer);
      const alternating = positions[0] !== positions[1] && positions.every((position, index) => position === positions[index % 2]);
      if (alternating) errors.push('multiple-choice answers use an obvious fixed alternating pattern');
    }
  }

  const fourChoice = indexed.filter(question => question.options.length === 4);
  if (fourChoice.length >= 8) {
    const counts = [0, 1, 2, 3].map(position => fourChoice.filter(question => question.answer === position).length);
    if (Math.max(...counts) - Math.min(...counts) > Math.max(2, Math.ceil(fourChoice.length * 0.35))) {
      errors.push('four-choice assessment answer positions are materially unbalanced');
    }
  }
  return errors;
}

export function collectSelinArchitectureV1PackageErrors(packageData) {
  if (!packageData || typeof packageData !== 'object') return ['package must be an object'];
  if (typeof packageData.date !== 'string' || !isIsoCalendarDate(packageData.date)) return ['package must declare an ISO calendar date'];
  if (!isFuturePackage(packageData)) return [];

  const errors = [];
  for (const key of ['policyVersion', 'templateContractVersion', 'assessmentPolicyVersion']) {
    const value = APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT[key];
    if (packageData[key] !== value) errors.push(`${key} must equal ${value}`);
  }
  errors.push(...findPublicPackagePrivacyViolations(packageData).map(path => `${path}: prohibited private field`));
  errors.push(...collectEnglishOnlyErrors(packageData));
  errors.push(...collectQuestionErrors(packageData));
  return errors;
}

export function assertSelinArchitectureV1Package(packageData, label = 'Selin package') {
  const errors = collectSelinArchitectureV1PackageErrors(packageData);
  if (errors.length) throw new Error(`${label} failed Architecture v1 validation:\n- ${errors.join('\n- ')}`);
}
