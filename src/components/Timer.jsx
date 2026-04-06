import { useState, useEffect } from 'react';

function Timer({ initialSeconds }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [formatedTime, setFormatedTime] = useState('');

  function formatTimer() {
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;

    const time = `${h}:${m}:${s}`;
    console.log(timeLeft);

    return time;
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearTimeout(interval);
    }
  }, [timeLeft]);

  useEffect(() => {
    const timeFormated = formatTimer();
    setFormatedTime(timeFormated);
  }, [timeLeft]);

  return (
    <section>
      <h2 className={'recents-title'}>Recents</h2>
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
