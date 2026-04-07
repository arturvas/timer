import { useState } from 'react';
import { ClockPlus, TimerReset } from 'lucide-react';

function Start({ startTimer }) {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  function handleStartTimer() {
    const total = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    startTimer(total);
  }

  function handleChange(e, setter, max) {
    let value = e.target.value;

    value = value.replace(/\D/g, '');
    value = value.slice(0, 2);

    if (max !== undefined && Number(value) > max) {
      value = String(max);
    }
    setter(value);
  }

  function addMissingZero(e, setter) {
    let value = e.target.value;
    if (value.length === 1) {
      value = '0' + value;
    } else if (value === '' || value === null) {
      value = '00';
    }
    setter(value);
  }

  return (
    <section>
      <form className="time-form">
        <div className="hr">
          <label htmlFor="hr">hr</label>
          <input
            type="text"
            id="hr"
            value={hours}
            onChange={(e) => handleChange(e, setHours)}
            onBlur={(e) => addMissingZero(e, setHours)}
          />
        </div>
        <div className="min">
          <label htmlFor="min">min</label>
          <input
            type="text"
            id="min"
            value={minutes}
            onChange={(e) => handleChange(e, setMinutes, 59)}
            onBlur={(e) => addMissingZero(e, setMinutes)}
          />
        </div>
        <div className="sec">
          <label htmlFor="sec">sec</label>
          <input
            type="text"
            id="sec"
            value={seconds}
            onChange={(e) => handleChange(e, setSeconds, 59)}
            onBlur={(e) => addMissingZero(e, setSeconds)}
          />
        </div>
      </form>
      <div className="time-actions">
        <button className="btn-reset">Reset</button>
          <TimerReset size={18} strokeWidth={2} />
          Reset
        </button>
        <button className="btn-start" onClick={handleStartTimer}>
          <ClockPlus size={18} strokeWidth={2} />
          Start
        </button>
      </div>
    </section>
  );
}

export default Start;
