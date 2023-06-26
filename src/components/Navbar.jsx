import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    const homeClick = ()=>{
        navigate('home');
    }

    const aboutClick = ()=>{
        navigate('about');
    }

    const contactClick = ()=>{
        navigate('conatc');
    }

    return ( 
        <div className="App">
          <div className='navbar'>
              <h1>User-Auth</h1>
  
              <ul>
                <li onClick={ homeClick } >Home</li>
                <li onClick={ aboutClick } >About</li>
                <li onClick={ contactClick } >Contact Us</li>
              </ul>
          </div>
        </div>
    );
}