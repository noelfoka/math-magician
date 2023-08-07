import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/math-magicians" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/math-magicians/Calculator" element={<Calculator />} />
        <Route path="/math-magicians/Quote" element={<Quote />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
