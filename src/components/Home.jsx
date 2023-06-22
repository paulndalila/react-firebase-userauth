import React from 'react';
import Navbar from './Navbar';

export default function Home() {
    return ( 
        <>
            <Navbar/>

            <div className='container' >
                <h1>Welcome Home!</h1>
            </div>
        </>
    );
}