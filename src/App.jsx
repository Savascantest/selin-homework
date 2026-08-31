import {useState} from 'react';
import Lesson20260823 from './homeworks/2026-08-23-3E8D67CF';
import Lesson20260829 from './homeworks/2026-08-29-E9573073';

export default function App() {
  const [current,setCurrent]=useState(true);
  if(current)return <><div style={{position:'sticky',top:0,zIndex:100,padding:8,textAlign:'center',background:'#111827'}}><button onClick={()=>setCurrent(false)} style={{padding:'10px 16px',border:0,borderRadius:10,fontWeight:800,color:'#111827'}}>Previous homework · 23 Aug</button></div><Lesson20260829 /></>;
  return <><div style={{position:'sticky',top:0,zIndex:100,padding:8,textAlign:'center',background:'#111827'}}><button onClick={()=>setCurrent(true)} style={{padding:'10px 16px',border:0,borderRadius:10,fontWeight:800,color:'#111827'}}>Return to current lesson · 29 Aug</button></div><Lesson20260823 /></>;
}
