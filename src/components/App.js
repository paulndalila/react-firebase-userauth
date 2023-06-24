import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {

  return (
    <div>
      <Navbar/>

      <div className='main' >
        <Outlet/>
      </div>
    </div>
    
    
  );
}

export default App;
