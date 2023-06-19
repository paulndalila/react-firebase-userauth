import './loginRegister.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

export default function Login(){
      
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential)=>{
                alert(userCredential.user.email+ " successfully logged in!");    
                setPassword('');
                setEmail('');
                navigate('/home');
            }).catch((error) => {
                alert(error);
                setPassword('');
                setEmail('');
            })

    }

    return (
        <div className='container'>
            <form onSubmit={ signin } className='form'>
                <h3>Login</h3>

                <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <button id='signin' type='submit' >Sign In</button>

                <div>Don't have an account? <Link to="/register" > Register </Link></div>
            </form>
        </div>
    );
}