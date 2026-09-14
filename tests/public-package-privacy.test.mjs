import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { assertPublicPackagePrivacy, findPublicPackagePrivacyViolations } from '../scripts/lib/public-package-privacy.mjs';

const normalPublicPackage = {
  id: '2026-09-14-public-safe',
  title: 'Clear prepositions in everyday plans',
  lessonNotes: 'Use the examples to choose the natural phrase.',
  learnerMessage: 'Take your time and check the sentence before you answer.',
  resource: { url: 'https://example.test/listening', source: 'Public learning resource' },
  sections: [{ id: 'practice', questions: [{ q: 'Choose the natural phrase.', opt: ['wait for', 'wait at'], a: 'wait for' }] }]
};

test('normal public Selin package with learner-facing content passes', () => {
  assert.deepEqual(findPublicPackagePrivacyViolations(normalPublicPackage), []);
});

test('meeting UUID is rejected at the root and when nested', () => {
  assert.throws(() => assertPublicPackagePrivacy({ ...normalPublicPackage, meetingUuid: 'private-value' }), /\$\.meetingUuid/);
  assert.throws(() => assertPublicPackagePrivacy({ ...normalPublicPackage, sections: [{ meetingUUID: 'private-value' }] }), /\$\.sections\[0\]\.meetingUUID/);
});

test('teacher notes are rejected at the root and inside learner data', () => {
  assert.throws(() => assertPublicPackagePrivacy({ ...normalPublicPackage, teacherNote: { applied: true } }), /\$\.teacherNote/);
  assert.throws(() => assertPublicPackagePrivacy({ ...normalPublicPackage, sections: [{ questions: [{ teacherNotes: 'private' }] }] }), /teacherNotes/);
});

test('private lesson, router, receipt, planning, and source references are rejected recursively', () => {
  for (const field of ['lessonRecordPath', 'routerState', 'executionReceipt', 'privatePlanningNotes', 'sourcePath', 'sourceLessonId']) {
    assert.throws(() => assertPublicPackagePrivacy({ ...normalPublicPackage, metadata: { [field]: 'private' } }), new RegExp(field));
  }
});

test('the repaired current Selin package is public-safe', async () => {
  const current = JSON.parse(await readFile(new URL('../public/homeworks/2026-08-29-E9573073/homework.json', import.meta.url), 'utf8'));
  assert.deepEqual(findPublicPackagePrivacyViolations(current), []);
});
