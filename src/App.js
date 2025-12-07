import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Photography from './components/Photography/Photography'
import Saginaw from './components/Photography/Saginaw/Saginaw'
import Detroit from './components/Photography/Detroit/Detroit'
import Houston from './components/Photography/Houston/Houston'
import SanFrancisco from './components/Photography/SanFrancisco/SanFrancisco'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/photography" element={<Photography />}/>
      <Route path="/saginaw" element={<Saginaw />}/>
      <Route path="/detroit" element={<Detroit />}/>
      <Route path="/houston" element={<Houston />}/>
      <Route path="/san-francisco" element={<SanFrancisco />}/>
      <Route path="/resume" element={<Resume />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

//The app.js file consists of the BrowserRouter component nesting the Header, Nav, Routes, and Footer. The home is set as the default routed page and base routes are set for each of the 4 nav link pages. nested links are set for each image gallery within the photography link.

export default App;
