import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
export default function Welcome() {
    return (
        <div className="welcome">
            <div>
                <Navbar/>
            </div>

            <Outlet/>

        </div>
    );
}