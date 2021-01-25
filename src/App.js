import React,{useState} from 'react';

import './App.css';

const Counter = (_)=>{
  return <div><div className={`count ${_.size}`}>{_.value}</div>
  </div>
}
function App() {
  const [v,setV] = useState({r:0,w:0})
  return (
    <div className="App">
    <div className="flexrow">
      <Counter value={Math.round(((v.r)/(v.w+v.r))*100)+"%"} size="small"/>
      <Counter value={v.r} size="big"/>
      <Counter value={v.w+v.r} size="small"/>
      </div>
      <div className="flexrow">
      <button className="right" onClick={()=>setV({...v, r:v.r+1})}>{v.r} Right</button>
      <button className="wrong" onClick={()=>setV({...v, w:v.w+1})}>{v.w} Wrong</button>
      </div>
    </div>
  );
}

export default App;
