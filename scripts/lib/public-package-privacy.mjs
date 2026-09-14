const EXACT_PRIVATE_FIELD_NAMES = new Set([
  'meetinguuid',
  'meetingid',
  'teacherNote'.toLowerCase(),
  'teachernotes',
  'sourcemeeting',
  'sourcelessons',
  'sourcelessonid',
  'transcript',
  'transcriptid',
  'transcriptpath',
  'transcripthash',
  'lessonrecord',
  'lessonrecordpath',
  'router',
  'routerstate',
  'executionreceipt',
  'receipt',
  'sourcehash',
  'sourcepath',
  'privatepath',
  'privateplanning',
  'privateplanningnotes',
  'planningnotes'
]);

function normalizedFieldName(key) {
  return key.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function isPrivateFieldName(key) {
  const normalized = normalizedFieldName(key);
  return EXACT_PRIVATE_FIELD_NAMES.has(normalized)
    || normalized.includes('meetinguuid')
    || normalized.includes('meetingid')
    || normalized.includes('teachernote')
    || normalized.includes('transcript');
}

export function findPublicPackagePrivacyViolations(value, path = '$') {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => findPublicPackagePrivacyViolations(item, `${path}[${index}]`));
  }

  if (!value || typeof value !== 'object') return [];

  const violations = [];
  for (const [key, child] of Object.entries(value)) {
    const childPath = `${path}.${key}`;
    if (isPrivateFieldName(key)) violations.push(childPath);
    violations.push(...findPublicPackagePrivacyViolations(child, childPath));
  }
  return violations;
}

export function assertPublicPackagePrivacy(value, label = 'public package') {
  const violations = findPublicPackagePrivacyViolations(value);
  if (violations.length) {
    throw new Error(`${label} contains prohibited private field(s): ${violations.join(', ')}`);
  }
}
