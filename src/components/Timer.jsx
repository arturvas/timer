import { useState, useEffect } from 'react';

function Timer({ initialSeconds }) {
  const [remainingTime, setRemainingTime] = useState(initialSeconds);

  function pad(n) {
    return n.toString().padStart(2, '0');
  }

  let h = pad(Math.floor(remainingTime / 3600));
  let m = pad(Math.floor((remainingTime % 3600) / 60));
  let s = pad(remainingTime % 60);

  const formatedTime = `${h}:${m}:${s}`;
  console.log(remainingTime);

  useEffect(() => {
    const interval = setTimeout(() => {
      setRemainingTime(remainingTime - 1);
    }, 1000);
    if (remainingTime === 0) {
      clearTimeout(interval);
    }
  }, [remainingTime]);

  return (
    <section>
      <div className="line-top" />
      <div className="display">
        <time>{formatedTime}</time>
        <button className="btn-pause">Pause</button>
      </div>
      <time className="time-description">5 min</time>
      <div className="line-bot" />
    </section>
  );
}

export default Timer;
