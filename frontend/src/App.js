import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import TradeForm from './components/TradeForm';
import Portfolio from './components/Portfolio';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [view, setView] = useState('dashboard'); // Default to the dashboard

  return (
    <div className="app-container">
      <header>
        <h1>Solana Meme Coin Trading Bot</h1>
        <nav>
          <button onClick={() => setView('dashboard')}>Dashboard</button>
          <button onClick={() => setView('trade')}>Trade</button>
          <button onClick={() => setView('portfolio')}>Portfolio</button>
          <button onClick={() => setView('settings')}>Settings</button>
        </nav>
      </header>

      <main>
        {view === 'dashboard' && <Dashboard />}
        {view === 'trade' && <TradeForm />}
        {view === 'portfolio' && <Portfolio />}
        {view === 'settings' && <Settings />}
      </main>
    </div>
  );
};

export default App;