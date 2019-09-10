import React from 'react';
import './App.css';
import InputBox from './components/InputBox.js';
import GraphBox from './components/GraphBox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <InputBox />
      <GraphBox />
        <p>
          To be filled with components for displaying and analyzing stock data...
        </p>

      </header>
    </div>
  );
}

export default App;
