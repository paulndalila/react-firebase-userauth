import './App.css';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './WelcomePage';

function App() {

  return (

    <BrowserRouter>   

      <Routes>

        <Route path="/home" element = { <Home/> } />
        <Route path='/register' element = { <Register/> } />
        <Route index element={ <Welcome/> } />
        <Route path="/login" element = { <Login/> } />

      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
