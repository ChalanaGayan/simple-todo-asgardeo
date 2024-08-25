// src/Header.js
import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from 'react-router-dom'; // Make sure to install react-router-dom if not already installed

const Header = () => {
    const navigate = useNavigate();

    const { signOut } = useAuthContext();


    const handleSignOut = () => {
        // Clear user session or token here if needed
        // For example, if using local storage: localStorage.removeItem('user');
        signOut(); // Call the signOut function from useAuthContext
        navigate('/'); // Redirect to home page
    };

    return (
        <header className="bg-gray-900 text-gray-100 py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">TaskMate</h1>
            <button
                onClick={handleSignOut}

                className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                Sign Out
            </button>
        </header>
    );
};

export default Header;
