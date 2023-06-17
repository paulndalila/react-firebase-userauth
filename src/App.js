import './App.css';
import React from 'react';
import Login, { logInSuccess } from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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

          <Routes>
            <Route path='/register' element = { <Register/> } />
            <Route path='/' element = { <Login/> } />
          </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
