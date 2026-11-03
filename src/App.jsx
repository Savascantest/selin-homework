import {useState} from 'react';
import Lesson20260823 from './homeworks/2026-08-23-3E8D67CF';
import Lesson20260829 from './homeworks/2026-08-29-E9573073';
import Lesson20260920 from './homeworks/2026-09-20-B0C4CA35';
import Lesson20260927 from './homeworks/2026-09-27-3F26ED00';
import Lesson20261102 from './homeworks/2026-11-02-B383561A';

export default function App() {
  const [lesson,setLesson]=useState('2026-11-02');
  const lessons = [
    ['2026-11-02', 'Current · 2 Nov'],
    ['2026-09-27', 'Previous · 27 Sep'],
    ['2026-09-20', 'Previous · 20 Sep'],
    ['2026-08-29', 'Previous · 29 Aug'],
    ['2026-08-23', 'Previous · 23 Aug']
  ];
  const lessonComponents = {
    '2026-11-02': Lesson20261102,
    '2026-09-27': Lesson20260927,
    '2026-09-20': Lesson20260920,
    '2026-08-29': Lesson20260829,
    '2026-08-23': Lesson20260823
  };
  const Current = lessonComponents[lesson];
  return <>
    <div style={{position:'sticky',top:0,zIndex:100,padding:8,display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',background:'#111827'}}>
      {lessons.map(([id,label])=><button key={id} onClick={()=>setLesson(id)} aria-pressed={lesson===id} style={{padding:'10px 16px',border:0,borderRadius:10,fontWeight:800,color:lesson===id?'#1e3a8a':'#111827',background:lesson===id?'#dbeafe':'#fff'}}>{label}</button>)}
    </div>
    <Current />
  </>;
}
