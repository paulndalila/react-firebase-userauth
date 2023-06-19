import './App.css';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='navbar'>
            <h1>User-Auth</h1>

            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
        </div>
      </div>

      <Routes>
        <Route path="/">
          <Route path="/home" element = { <Home/> } />
          <Route path='/register' element = { <Register/> } />
          <Route path='/' element = { <Login/> } />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
