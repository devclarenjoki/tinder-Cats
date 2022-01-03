import React from 'react';
import './App.css';
import AppRoutes from './Router.js';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
      <AppRoutes/>

      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
