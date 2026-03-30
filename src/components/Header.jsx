import { Timer } from 'lucide-react';

function Header() {
  return (
    <header className={'header-timer'}>
      <h1>
        <Timer size={34} color={'orange'} /> Timers
      </h1>
    </header>
  );
}

export default Header;
