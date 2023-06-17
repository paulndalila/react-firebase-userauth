import './loginRegister.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential)=>{
                alert(userCredential.user.email+ " successfully registered!");   
                setPassword('');
                setEmail('');
            }).catch((error) => {
                alert(error);
                setPassword('');
                setEmail('');
            })

    }
    return (
        <div className='container'>
            <form onSubmit={ register } className='form'>
                <h3>Register</h3>

                <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <input type="password" placeholder='Confirm password'/>
                <button id='register' type='submit' >Register</button>
                
                <div>Already have an account? <Link to="/"> Login </Link></div>
            </form>
        </div>
    );
}