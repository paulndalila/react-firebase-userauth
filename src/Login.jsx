import './loginRegister.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    return (
        <div className='container'>
            <div className='form'>
                <h3>Login</h3>

                <input type="email" name='email' placeholder='Email address' />
                <input type="password" name='password' placeholder='Password'/>
                <button id='signin' name='signin'>Sign In</button>
                
                <div>Don't have an account? <Link to="/register" > Register </Link></div>
            </div>
        </div>
    );
}