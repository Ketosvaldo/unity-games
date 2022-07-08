import React from 'react';
import './App.css';
//import Runnerverse from './Runnerverse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../shared/img/LogoReact.png')} className="App-logo" alt="logo" />
        <h1>KG.React</h1>
        <div className="App-routes">
          <a href="./" className="Text">Home</a>
          <a href="./about" className="Text">About</a>
        </div>
      </header>
    </div>
  );
}

export default App;
