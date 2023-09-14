// Clock.js
import React, { useState, useEffect } from 'react';
import './style.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  const hours12 = (hours % 12) || 12;

  return (
    <div className='main-div'>
      <div className='secondary-div'>
        <h1 className='h1'>Digital Clock</h1>
        <div className='clock'>
          <div className='time'>
            <div className='hr'>{hours12}</div>
            <div className='colon'>:</div>
            <div className='mn'>{minutes}</div>
            <div className='colon'>:</div>
            <div className='sc'>{seconds}</div>
            <div className='ampm'>{ampm}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
