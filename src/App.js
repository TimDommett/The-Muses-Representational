import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlowerSpinner from './Components/Navbar/Loader/Loader';
import NavBar from './Components/Navbar/NavBar';
import About from './Components/About.js/About';
import ChatBot from './Components/ChatBot/ChatBot';




function App() {
  return (
    <div className="App">
      <NavBar className="navBar"></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be The Muses
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          An open source data repository
        </a>
        <FlowerSpinner></FlowerSpinner>
      </header>
      <About></About>

      <ChatBot />
    </div>
  );
}

export default App;
