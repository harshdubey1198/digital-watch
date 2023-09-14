import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clock from './Components/Watch/Clock';
function App() {
  return (
    <BrowserRouter>
     {/* Include the Navbar component */}
      <Routes>
        <Route exact path="/" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
