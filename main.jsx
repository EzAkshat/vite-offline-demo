import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>DeployMe routing test</h1>} />
        <Route path="/about" element={<h1>About this deployment</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
