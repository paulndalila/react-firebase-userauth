import './App.css';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Welcome from './WelcomePage';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
        
    <BrowserRouter>      
    
      <Routes>
          <Route path="/home" element = { <Home/> } />
          <Route index element={ <Welcome/> } />
          <Route path='/register' element = { <Register/> } />
          <Route path="/login" element = { <Login/> } />
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
