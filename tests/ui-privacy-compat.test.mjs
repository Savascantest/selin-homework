import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('active UI does not depend on leaked package fields', async () => {
  const [app, component, content] = await Promise.all([
    read('../src/App.jsx'),
    read('../src/homeworks/2026-11-02-B383561A.jsx'),
    read('../src/homeworks/selin-2026-11-02-content.js')
  ]);
  assert.match(app, /Lesson20261102/);
  assert.doesNotMatch(`${app}\n${component}\n${content}`, /meetingUuid|teacherNote/);
});

test('active component preserves four days, all learning tabs, and every prior lesson', async () => {
  const [app, shell, content] = await Promise.all([
    read('../src/App.jsx'),
    read('../src/homeworks/2026-08-29-E9573073.jsx'),
    read('../src/homeworks/selin-2026-11-02-content.js')
  ]);
  for (const label of ['Day 1:', 'Day 2:', 'Day 3:', 'Day 4:']) assert.match(content, new RegExp(label));
  for (const label of ['Grammar', 'Flashcards', 'Vocab Exercises', 'Reading', 'Listening', 'Final Test']) {
    assert.match(shell, new RegExp(label));
  }
  for (const date of ['2026-11-02', '2026-08-29', '2026-08-23']) assert.match(app, new RegExp(date));
});
