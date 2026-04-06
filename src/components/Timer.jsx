import { Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';

function Timer({ initialSeconds }) {
  const [remainingTime, setRemainingTime] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  function handlePause() {
    setIsRunning(!isRunning);
  }

  function pad(n) {
    return n.toString().padStart(2, '0');
  }

  let h = pad(Math.floor(remainingTime / 3600));
  let m = pad(Math.floor((remainingTime % 3600) / 60));
  let s = pad(remainingTime % 60);

  const formatedTime = `${h}:${m}:${s}`;
  console.log(remainingTime);

  function timeDescriptionLabel() {
    let h = Math.floor(initialSeconds / 3600);
    let m = Math.floor((initialSeconds % 3600) / 60);
    let s = initialSeconds % 60;

    let parts = [];

    if (h > 0) parts.push(`${h}h`);
    if (m > 0) parts.push(`${m}min`);
    if (s > 0) parts.push(`${s}sec`);

    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return `${parts[0]} and ${parts[1]}`;
  }

  useEffect(() => {
    if (remainingTime === 0 || isRunning === false) return;

    const timeOut = setTimeout(() => {
      setRemainingTime((prevState) => prevState - 1);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [remainingTime, isRunning]);

  return (
    <section>
      <div className="line" />
      <div className="display">
        <time>{formatedTime}</time>
        <button className={isRunning ? 'btn-pause' : 'btn-start'} onClick={handlePause}>
          {isRunning ? <Pause size={16} strokeWidth={2} /> : <Play size={16} strokeWidth={2} />}
        </button>
      </div>
      <time className="time-description">{timeDescriptionLabel()}</time>
      <div className="line" />
    </section>
  );
}

export default Timer;
