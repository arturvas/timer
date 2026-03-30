import { useState } from 'react';

function Start(props) {
  const [hours, setHours] = useState(props.hr);
  const [minutes, setMinutes] = useState(props.min);
  const [seconds, setSeconds] = useState(props.sec);

  function handleChange(e, setter, max) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 2);

    if (max !== undefined && Number(value) > max) {
      value = String(max);
    }
    setter(value);
  }

  function addLeftZero(e, setter) {
    let value = e.target.value;
    if (value.length === 1) {
      value = '0' + value;
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
            onBlur={(e) => addLeftZero(e, setHours)}
          />
        </div>
        <div className="min">
          <label htmlFor="min">min</label>
          <input
            type="text"
            id="min"
            value={minutes}
            onChange={(e) => handleChange(e, setMinutes, 59)}
            onBlur={(e) => addLeftZero(e, setMinutes)}
          />
        </div>
        <div className="sec">
          <label htmlFor="sec">sec</label>
          <input
            type="text"
            id="sec"
            value={seconds}
            onChange={(e) => handleChange(e, setSeconds, 59)}
            onBlur={(e) => addLeftZero(e, setSeconds)}
          />
        </div>
      </form>
      <div className="time-actions">
        <button className="btn-reset">Reset</button>
        <button className="btn-start">Start</button>
      </div>
    </section>
  );
}

export default Start;
