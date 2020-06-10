import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Please select your appointment time:
        </p>
        <Step1 />
        <Step2 />
      </header>
    </div>
  );
}

export default App;
