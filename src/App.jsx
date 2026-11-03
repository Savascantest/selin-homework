import {useState} from 'react';
import Lesson20260823 from './homeworks/2026-08-23-3E8D67CF';
import Lesson20260829 from './homeworks/2026-08-29-E9573073';
import Lesson20261102 from './homeworks/2026-11-02-B383561A';

export default function App() {
  const [lesson,setLesson]=useState('2026-11-02');
  const lessons = [
    ['2026-11-02', 'Current · 2 Nov'],
    ['2026-08-29', 'Previous · 29 Aug'],
    ['2026-08-23', 'Previous · 23 Aug']
  ];
  const Current = lesson === '2026-11-02' ? Lesson20261102 : lesson === '2026-08-29' ? Lesson20260829 : Lesson20260823;
  return <>
    <div style={{position:'sticky',top:0,zIndex:100,padding:8,display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',background:'#111827'}}>
      {lessons.map(([id,label])=><button key={id} onClick={()=>setLesson(id)} aria-pressed={lesson===id} style={{padding:'10px 16px',border:0,borderRadius:10,fontWeight:800,color:lesson===id?'#1e3a8a':'#111827',background:lesson===id?'#dbeafe':'#fff'}}>{label}</button>)}
    </div>
    <Current />
  </>;
}
