import React from 'react';
import './App.css';
import Header from './header';
import BowlerList from './Bowler/BowlerList';

function App() {
  return (
    <div className="App">
      <Header title="Alley Cats 4 Life!" />
      <BowlerList />
    </div>
  );
}

export default App;
