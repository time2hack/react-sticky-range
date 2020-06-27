import React from 'react';
import Steps from './steps';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Please select your appointment time:
        </p>
        {Steps.map((Step, index) => <Step key={index} />)}
      </header>
    </div>
  );
}

export default App;
