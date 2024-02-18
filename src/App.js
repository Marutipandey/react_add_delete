// App.js
import React from 'react';
import './App.css';
import About from './components/About.js';
import NoteState from './context/notes/noteState.js';  // Adjust the import path accordingly
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <NoteState>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </NoteState>
  );
}

export default App;
