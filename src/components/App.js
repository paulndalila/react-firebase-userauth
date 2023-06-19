import './App.css';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="/home" element = { <Home/> } />
        <Route path='/register' element = { <Register/> } />
        <Route index element = { <Login/> } />
        <Route path="/login" element = { <Login/> } >
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
