import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [time,setTime]=useState(0);
  const [isRunning,setIsRunning]=useState(false);


  useEffect(()=>{
    let timer;

    if(isRunning){
      timer=setInterval(()=>setTime(p=>p+1),1000);

    }
    return ()=>clearInterval(timer);
  },[isRunning]);
  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime()}</div>
      <div className="buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => { setTime(0); setIsRunning(false); }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
