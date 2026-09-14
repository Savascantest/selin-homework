import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT,
  SELIN_ARCHITECTURE_V1_EFFECTIVE_DATE,
  collectSelinArchitectureV1PackageErrors
} from '../scripts/lib/architecture-v1-package.mjs';

const futurePackage = (overrides = {}) => ({
  id: '2026-09-15-synthetic-selin',
  date: '2026-09-15',
  title: 'Connected practice for everyday plans',
  lessonNotes: 'Use the examples to choose the most natural phrase.',
  policyVersion: APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT.policyVersion,
  templateContractVersion: APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT.templateContractVersion,
  assessmentPolicyVersion: APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT.assessmentPolicyVersion,
  sections: [{ id: 'practice', questions: [
    { id: 'q1', q: 'Choose the natural phrase.', opt: ['wait for', 'wait at', 'wait on', 'wait with'], a: 0 },
    { id: 'q2', q: 'Choose the correct phrase.', opt: ['listen at', 'listen to', 'listen for', 'listen with'], a: 1 },
    { id: 'q3', q: 'Choose the natural phrase.', opt: ['look for it', 'look to it', 'look at it', 'look with it'], a: 2 },
    { id: 'q4', q: 'Choose the natural phrase.', opt: ['go out on', 'go out at', 'go out for', 'go out with'], a: 3 }
  ] }],
  ...overrides
});

const errors = value => collectSelinArchitectureV1PackageErrors(value).join('\n');

test('approved Selin Architecture v1 contract loads with the approved effective date', () => {
  assert.equal(SELIN_ARCHITECTURE_V1_EFFECTIVE_DATE, '2026-09-14');
  assert.equal(APPROVED_SELIN_ARCHITECTURE_V1_CONTRACT.policyVersion, 'selin-four-day-retrieval-and-progression@1');
});

test('future packages require all exact Selin metadata and reject other student identifiers', () => {
  for (const [key, value] of Object.entries({
    policyVersion: 'sumeyye-weekend-monday@1',
    templateContractVersion: 'eugenia-interactive-hybrid@1',
    assessmentPolicyVersion: 'eugenia-section-and-final-checks@1'
  })) assert.match(errors(futurePackage({ [key]: value })), new RegExp(key));
  for (const key of ['policyVersion', 'templateContractVersion', 'assessmentPolicyVersion']) assert.match(errors(futurePackage({ [key]: undefined })), new RegExp(key));
  assert.match(errors(futurePackage({ date: '2026-09-99' })), /ISO calendar date/);
});

test('historical packages remain valid without v1 metadata, including historical Turkish content', async () => {
  const historical = JSON.parse(await readFile(new URL('../public/homeworks/2026-08-29-E9573073/homework.json', import.meta.url), 'utf8'));
  assert.deepEqual(collectSelinArchitectureV1PackageErrors(historical), []);
});

test('future Selin packages accept non-Monday dates and English learner content', () => {
  assert.deepEqual(collectSelinArchitectureV1PackageErrors(futurePackage({ date: '2026-09-15' })), []);
});

test('future Turkish learner-facing content fails while metadata and URLs are not language-scanned', () => {
  assert.match(errors(futurePackage({ lessonNotes: 'Bu bir açıklama.' })), /Turkish learner-facing/);
  assert.deepEqual(collectSelinArchitectureV1PackageErrors(futurePackage({ resource: { url: 'https://example.test/açıklama' } })), []);
});

test('future packages reject pathological answer positions and accept balanced distribution', () => {
  const questions = futurePackage().sections[0].questions;
  assert.match(errors(futurePackage({ sections: [{ id: 'x', questions: questions.slice(0, 3).map((question, index) => ({ ...question, id: `all${index}`, a: 0 })) }] })), /all option 0/);
  assert.match(errors(futurePackage({ sections: [{ id: 'x', questions: Array.from({ length: 8 }, (_, index) => ({ ...questions[index % 4], id: `dominant${index}`, a: index === 7 ? 1 : 0 })) }] })), /materially dominant|materially unbalanced/);
  assert.match(errors(futurePackage({ sections: [{ id: 'x', questions: Array.from({ length: 8 }, (_, index) => ({ ...questions[index % 4], id: `repeat${index}`, a: index % 2 })) }] })), /fixed alternating/);
  assert.match(errors(futurePackage({ sections: [{ id: 'x', questions: [
    ...Array.from({ length: 7 }, (_, index) => ({ ...questions[index % 4], id: `unbalanced0${index}`, a: 0 })),
    ...Array.from({ length: 2 }, (_, index) => ({ ...questions[index % 4], id: `unbalanced1${index}`, a: 1 })),
    ...Array.from({ length: 2 }, (_, index) => ({ ...questions[index % 4], id: `unbalanced2${index}`, a: 2 })),
    { ...questions[0], id: 'unbalanced3', a: 3 }
  ] }] })), /four-choice assessment answer positions are materially unbalanced/);
  assert.deepEqual(collectSelinArchitectureV1PackageErrors(futurePackage({ sections: [{ id: 'x', questions: Array.from({ length: 8 }, (_, index) => ({ ...questions[index % 4], id: `balanced${index}`, a: index % 4 })) }] })), []);
});

test('future packages reject duplicate question ids, invalid answer indexes, and private fields', () => {
  const questions = futurePackage().sections[0].questions;
  assert.match(errors(futurePackage({ sections: [{ id: 'x', questions: [{ ...questions[0], id: 'same' }, { ...questions[1], id: 'same' }] }] })), /duplicate question id/);
  assert.match(errors(futurePackage({ sections: [{ id: 'x', questions: [{ ...questions[0], a: 4 }] }] })), /outside option range/);
  assert.match(errors(futurePackage({ meetingUuid: 'private', sections: [{ id: 'x', questions }] })), /prohibited private field/);
});

test('Selin does not inherit Eugenia final-assessment counts or a Monday cadence', () => {
  assert.deepEqual(collectSelinArchitectureV1PackageErrors(futurePackage({ date: '2026-09-16', finalQuiz: { questionCount: 5, learnerTarget: '3/5' } })), []);
});
