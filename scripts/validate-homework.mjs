import { LISTENING_TASKS, UPGRADED_READINGS } from '../src/homeworks/selin-levelled-content.js';

const errors = [];
for (const day of [1, 2, 3, 4]) {
  const listening = LISTENING_TASKS[day];
  if (!listening?.url?.startsWith('https://')) errors.push(`Day ${day}: listening URL is missing`);
  if ((listening?.questions?.length || 0) < 5) errors.push(`Day ${day}: listening needs at least five questions`);

  const readings = UPGRADED_READINGS[day];
  if ((readings?.length || 0) < 2) errors.push(`Day ${day}: two reading texts are required`);
  for (const reading of readings || []) {
    const wordCount = reading.content.trim().split(/\s+/).length;
    if (wordCount < 150) errors.push(`Day ${day} / ${reading.title}: reading is only ${wordCount} words`);
    if ((reading.questions?.length || 0) < 5) errors.push(`Day ${day} / ${reading.title}: five questions are required`);
  }
}

if (errors.length) {
  console.error(`Selin homework validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('Validated all four days: listening and A2+/early-B1 reading content is complete.');
