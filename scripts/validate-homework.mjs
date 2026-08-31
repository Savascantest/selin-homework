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
const current=JSON.parse(await (await import('node:fs/promises')).readFile('public/homeworks/2026-08-29-E9573073/homework.json','utf8'));
if(current.meetingUuid!=='E9573073-2D66-49A3-93A2-E3B20E8629D9'||!current.teacherNote?.applied)throw new Error('Current lesson identity or teacher note mismatch');
for(const id of['notes','grammar','practice','reading','listening','quiz'])if(!current.sections.some(x=>x.id===id))throw new Error(`Current ${id} tab is missing`);
console.log('Validated the new dated package, all current tabs and applied teacher note.');
const currentComponent=await (await import('node:fs/promises')).readFile('src/homeworks/2026-08-29-E9573073.jsx','utf8');
for(const day of [1,2,3,4]){
  const start=currentComponent.indexOf(`${day}: {`,currentComponent.indexOf('const CURRENT_CURRICULUM'));
  const end=day<4?currentComponent.indexOf(`${day+1}: {`,start):currentComponent.indexOf('\n};',start);
  const block=currentComponent.slice(start,end);
  const count=(block.match(/^      \['/gm)||[]).length;
  if(count!==15)errors.push(`Current Day ${day}: expected 15 mixed exercises, found ${count}`);
  if(day<4&&(!block.includes('rules: []')||block.includes("label: '")))errors.push(`Current Day ${day}: repeated grammar explanation found`);
  if(day===4&&!block.includes('New Rule: Learn the Whole Phrase'))errors.push('Current Day 4: new-rule explanation is missing');
}
if(/\bSelin\b/.test(currentComponent))errors.push('Student name appears inside current learning material');
if(errors.length){console.error(`Current revision validation failed:\n- ${errors.join('\n- ')}`);process.exit(1)}
console.log('Validated four current days, 15 exercises per day, review-only Days 1–3, and new rules only on Day 4.');
