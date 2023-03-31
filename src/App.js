App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Education, Projects, Resume, More } from './pages';
import { Navbar } from './components';
import { Footer } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/more" element={<More />} />
        </Routes>
        <Footer />
      </Router>
      <div className="gradient__background">
      </div>
    </div>
  )
}

export default App
