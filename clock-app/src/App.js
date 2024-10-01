import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';

function App() {
  const [time, setTime] = useState({
    hour: '00',
    minute: '00',
    second: '00'
  })

  useEffect(() => {
    const date = new Date();
    setTime({
      hour: String(date.getHours()).padStart(2, '0'),
      minute: String(date.getMinutes()).padStart(2, '0'),
      second: String(date.getSeconds()).padStart(2, '0')
    })
  })

  return (
    <div className='App'>
      <Clock time={time}/>
    </div>
  )
}

export default App;
