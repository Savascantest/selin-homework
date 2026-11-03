import React from 'react';
import { LessonShell } from './2026-08-29-E9573073';
import { NOVEMBER_CURRICULUM, NOVEMBER_LISTENING, NOVEMBER_READINGS } from './selin-2026-11-02-content';

export default function Lesson20261102() {
  return (
    <LessonShell
      curriculum={NOVEMBER_CURRICULUM}
      readings={NOVEMBER_READINGS}
      listening={NOVEMBER_LISTENING}
      lessonLabel="2 November 2026 · Short cumulative review · No new grammar"
    />
  );
}
