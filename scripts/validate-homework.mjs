import { LISTENING_TASKS, UPGRADED_READINGS } from '../src/homeworks/selin-levelled-content.js';
import { NOVEMBER_CURRICULUM, NOVEMBER_LISTENING, NOVEMBER_READINGS } from '../src/homeworks/selin-2026-11-02-content.js';
import { SEP20_CURRICULUM, SEP20_LISTENING, SEP20_READINGS, SEP27_CURRICULUM, SEP27_LISTENING, SEP27_READINGS } from '../src/homeworks/selin-september-archive-content.js';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { assertPublicPackagePrivacy } from './lib/public-package-privacy.mjs';
import { collectSelinArchitectureV1PackageErrors } from './lib/architecture-v1-package.mjs';

async function findHomeworkPackages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findHomeworkPackages(path);
    return entry.isFile() && entry.name === 'homework.json' ? [path] : [];
  }));
  return nested.flat();
}

const errors = [];
function validateAnswerBalance(label, questions) {
  const indexed = questions.filter(question => question.options?.length === 4 && Number.isInteger(question.answer));
  if (indexed.length < 5) return;
  const counts = [0, 1, 2, 3].map(position => indexed.filter(question => question.answer === position).length);
  if (Math.max(...counts) - Math.min(...counts) > 2) errors.push(`${label}: answer positions are unbalanced (${counts.join('/')})`);
}
function validateLevelledContent(label, listeningSet, readingSet) {
  for (const day of [1, 2, 3, 4]) {
    const listening = listeningSet[day];
    if (!listening?.url?.startsWith('https://')) errors.push(`${label} Day ${day}: listening URL is missing`);
    if ((listening?.questions?.length || 0) < 5) errors.push(`${label} Day ${day}: listening needs at least five questions`);
    if (label === '2 Nov') validateAnswerBalance(`${label} Day ${day} listening`, listening?.questions || []);

    const readings = readingSet[day];
    if ((readings?.length || 0) < 2) errors.push(`${label} Day ${day}: two reading texts are required`);
    for (const reading of readings || []) {
      const wordCount = reading.content.trim().split(/\s+/).length;
      if (wordCount < 150) errors.push(`${label} Day ${day} / ${reading.title}: reading is only ${wordCount} words`);
      if ((reading.questions?.length || 0) < 5) errors.push(`${label} Day ${day} / ${reading.title}: five questions are required`);
      if (label === '2 Nov') validateAnswerBalance(`${label} Day ${day} / ${reading.title}`, reading.questions || []);
    }
  }
}
validateLevelledContent('29 Aug', LISTENING_TASKS, UPGRADED_READINGS);
validateLevelledContent('2 Nov', NOVEMBER_LISTENING, NOVEMBER_READINGS);

function validateArchiveLesson(label, curriculum, listeningSet, readingSet) {
  for (const day of [1, 2, 3, 4]) {
    const dayData = curriculum[day];
    if (dayData.grammarExercises.length !== 15) errors.push(`${label} Day ${day}: expected 15 grammar questions`);
    if (dayData.vocabExercises.length < 8) errors.push(`${label} Day ${day}: expected at least 8 vocabulary questions`);
    if (dayData.test.length < 10) errors.push(`${label} Day ${day}: expected at least 10 final-test questions`);
    validateAnswerBalance(`${label} Day ${day} grammar`, dayData.grammarExercises);
    validateAnswerBalance(`${label} Day ${day} vocabulary`, dayData.vocabExercises);
    validateAnswerBalance(`${label} Day ${day} final test`, dayData.test);
    const listeningTask = listeningSet[day];
    if (!listeningTask?.url?.startsWith('https://') || listeningTask.questions.length < 5) errors.push(`${label} Day ${day}: listening task is incomplete`);
    const readings = readingSet[day] || [];
    if (!readings.length) errors.push(`${label} Day ${day}: reading is missing`);
    for (const item of readings) {
      const wordCount = item.content.trim().split(/\s+/).length;
      if (wordCount < 150) errors.push(`${label} Day ${day} / ${item.title}: reading is only ${wordCount} words`);
      if (item.questions.length < 5) errors.push(`${label} Day ${day} / ${item.title}: reading questions are incomplete`);
    }
  }
  if (/\bSelin\b/.test(JSON.stringify({ curriculum, listeningSet, readingSet }))) errors.push(`${label}: student name appears inside learning material`);
}

validateArchiveLesson('20 Sep', SEP20_CURRICULUM, SEP20_LISTENING, SEP20_READINGS);
validateArchiveLesson('27 Sep', SEP27_CURRICULUM, SEP27_LISTENING, SEP27_READINGS);

if (errors.length) {
  console.error(`Selin homework validation failed:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('Validated all four days: listening and A2+/early-B1 reading content is complete.');
for (const packagePath of await findHomeworkPackages('public/homeworks')) {
  const publicPackage = JSON.parse(await readFile(packagePath, 'utf8'));
  assertPublicPackagePrivacy(publicPackage, packagePath);
  for (const error of collectSelinArchitectureV1PackageErrors(publicPackage)) errors.push(`${packagePath}: ${error}`);
}
const current=JSON.parse(await readFile('public/homeworks/2026-11-02-B383561A/homework.json','utf8'));
assertPublicPackagePrivacy(current, 'Current Selin public package');
for(const id of['day-1','day-2','day-3','day-4'])if(!current.sections.some(x=>x.id===id))throw new Error(`Current ${id} package section is missing`);
console.log('Validated the current dated package, all four days, and its public privacy boundary.');
for(const day of [1,2,3,4]){
  const dayData=NOVEMBER_CURRICULUM[day];
  if(dayData.grammarExercises.length!==15)errors.push(`Current Day ${day}: expected 15 mixed exercises, found ${dayData.grammarExercises.length}`);
  validateAnswerBalance(`Current Day ${day} grammar`,dayData.grammarExercises);
  validateAnswerBalance(`Current Day ${day} vocabulary`,dayData.vocabExercises);
  validateAnswerBalance(`Current Day ${day} final test`,dayData.test);
  if(day<4&&dayData.grammar.rules.length)errors.push(`Current Day ${day}: repeated grammar explanation found`);
  if(day===4&&(!dayData.grammar.rules.length||!dayData.grammar.tables?.length))errors.push('Current Day 4: new-rule explanation or verb-family table is missing');
  if(current.sections.find(section=>section.id===`day-${day}`)?.questionCount!==15)errors.push(`Current Day ${day}: public package question count is not 15`);
}
if(/\bSelin\b/.test(JSON.stringify({NOVEMBER_CURRICULUM,NOVEMBER_LISTENING,NOVEMBER_READINGS})))errors.push('Student name appears inside current learning material');
if(errors.length){console.error(`Current revision validation failed:\n- ${errors.join('\n- ')}`);process.exit(1)}
console.log('Validated four current days, 15 exercises per day, review-only Days 1–3, and new rules only on Day 4.');
