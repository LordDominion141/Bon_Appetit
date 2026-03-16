import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home, { NavBar } from './pages/Home';
import Menu from './pages/Menu';
import Search from './pages/Search'
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
         <Route path="/search" element={<Search />} />
        <Route path="*" element={<div style={{color: 'red', fontSize: '30px'}}>Lord Dominion has not finished this page yet!</div>} />
      </Routes>
      <NavBar/>
    </Router>
  );
}
