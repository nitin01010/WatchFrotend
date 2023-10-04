import React from 'react';
import Home from './compontens/Home';
import About from './compontens/About';
import Contact from './compontens/Contact';
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './compontens/Logo.png';
import './Main.css';
import Footer from './compontens/Footer';
const App = () => {
  console.log('app');
  return (
    <div>
      <nav className="container">
        <span>
          <a href='/'>
            <img src={Logo} className='Logo' />
          </a>
        </span>
        <span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>
        </span>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
