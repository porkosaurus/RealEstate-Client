import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './routes/contact/contact';
import Map from './routes/map/map';
import Home from './routes/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/map/:searchQuery?"element={<Map/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
