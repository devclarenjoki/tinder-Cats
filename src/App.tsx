import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Header from './components/Header';
import {Home, Product} from './Pages';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className='flex justify-center space-x-2 text-2xl'>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
          </nav>
          <Routes>
            <Route  path="/" element={Home} />
            <Route  path="/product" element={Product} />
          </Routes>
        </div>
      </Router>

      <Header/>
    </div>
  );
}

export default App;
