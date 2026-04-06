import { useState } from 'react';
import Header from './components/Header.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start.jsx';

function App() {
  const [timers, setTimers] = useState([]);

  function addTimer(seconds) {
    let id = 0;

    const newTimer = {
      id: id++,
      initialSeconds: seconds,
    };

    setTimers((prevState) => [...prevState, newTimer]);
  }

  return (
    <>
      <div className="container">
        <Header />
        <Start startTimer={addTimer} />
        {timers.length > 0 && (
          <>
            <h2 className={'recents-title'}>Recents</h2>

            {timers.map((timer, index) => (
              <Timer key={index} initialSeconds={timer.initialSeconds} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
