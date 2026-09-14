import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('active Selin UI does not depend on leaked package fields', async () => {
  const [app, component] = await Promise.all([
    read('../src/App.jsx'),
    read('../src/homeworks/2026-08-29-E9573073.jsx')
  ]);
  assert.match(app, /Lesson20260829/);
  assert.doesNotMatch(`${app}\n${component}`, /meetingUuid|teacherNote/);
});

test('active Selin component preserves four days, seven tabs, and prior-lesson navigation', async () => {
  const [app, component] = await Promise.all([
    read('../src/App.jsx'),
    read('../src/homeworks/2026-08-29-E9573073.jsx')
  ]);
  for (const label of ['Day 1:', 'Day 2:', 'Day 3:', 'Day 4:', 'Grammar', 'Vocabulary', 'Flashcards', 'Vocab Exercises', 'Reading', 'Listening', 'Final Test']) {
    assert.match(component, new RegExp(label));
  }
  assert.match(app, /Previous homework/);
});
