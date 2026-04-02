import { useState } from 'react';
import Header from './components/Header.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start.jsx';
import Recents from './components/Recents.jsx';

function App() {
  const [initialSeconds, setInitialSeconds] = useState(null);

  return (
    <>
      <div className="container">
        <Header />
        <Start startTimer={setInitialSeconds} />
        {initialSeconds !== null && <Timer initialSeconds={initialSeconds} />}
        <Recents />
      </div>
    </>
  );
}

export default App;
