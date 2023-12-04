import React from 'react';
import './App.css';
import Home from './views/home'
import { BrowserRouter, Router, Routes, Route, } from 'react-router-dom'
import BookShowPage from './views/bookShowPage';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
            <Route path="/books" element={<Home />}/>
            <Route path="/view" element={<BookShowPage />}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

  
