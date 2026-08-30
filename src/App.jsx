import {useState} from 'react';
import Lesson20260823 from './homeworks/2026-08-23-3E8D67CF';
import CurrentLesson from './CurrentLesson';

export default function App() {
  const [current,setCurrent]=useState(true);
  if(current)return <CurrentLesson student="Selin" url={`${import.meta.env.BASE_URL}homeworks/2026-08-29-E9573073/homework.json`} onArchive={()=>setCurrent(false)}/>;
  return <><div style={{position:'sticky',top:0,zIndex:100,padding:8,textAlign:'center',background:'#111827'}}><button onClick={()=>setCurrent(true)} style={{padding:'10px 16px',border:0,borderRadius:10,fontWeight:800,color:'#111827'}}>Return to current lesson · 29 Aug</button></div><Lesson20260823 /></>;
}
