import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlowerSpinner from './Components/Navbar/Loader/Loader';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be The Muses.
        </p>
        <FlowerSpinner></FlowerSpinner>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          An open source data repository
        </a>
      </header>
    </div>
  );
}

export default App;
