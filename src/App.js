import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
