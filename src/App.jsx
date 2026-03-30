import Header from './components/Header.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start.jsx';
import Recents from './components/Recents.jsx';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Start hr={'00'} min={'00'} sec={'00'} />
        <Timer />
        <Recents />
      </div>
    </>
  );
}

export default App;
