import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPath() {
    return ( 
        <div className='error-container'>
            <h1>Path Error!</h1>
            <p>Go back to homepage? <Link to='home' >Click here</Link> </p>
        </div>
     );
}