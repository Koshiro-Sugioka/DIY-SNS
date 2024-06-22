import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { authState, logout } = useContext(AuthContext);
    

    return (
        <div className="bg-black text-lg text-gray-100 h-20 w-full fixed z-10">
        <div className="h-full flex items-center px-4">
            <div className="text-5xl">
                <h1>DIY</h1>
            </div>
            <div className='md:ml-auto'>
            <div className="flex space-x-5">
                <a href="/">Home</a>
                <a href="/newpost">New Post</a>
                {authState.isAuthenticated ? (
                <>
                <Link to="/profile">Profile</Link>
                <button onClick={logout}>Logout</button>
                 </>
                ) : (
                <>
                <Link to="/login">Login</Link>
                <Link to="/create">Signup</Link>
                </>
                )}
                
            </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;


