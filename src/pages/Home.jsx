import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import Footer from '../components/Footer'; // Adjust the path as needed
import '../App.css';

const Home = () => {
    const navigate = useNavigate();
    const { on, state, signIn, signOut } = useAuthContext();

    useEffect(() => {
        on("sign-in", () => {
            navigate("/home");
        });
    }, [on, navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 flex flex-col items-center justify-center">
            {/* Title and Logo */}
            <div className="w-full text-center py-16">
                <img
                    src="/taskmate-high-resolution-logo-transparent.png" // Replace with your logo image path
                    alt="TaskMate Logo"
                    width={300}
                    className="mx-auto mb-4"
                />
            </div>

            {/* Typing Animation */}
            <div className="typing-container mb-8 text-2xl font-semibold animate-pulse">
                Turning plans into progress
            </div>

            {/* Main Container */}
            <div className="bg-gradient-to-b from-blue-950 via-black to-blue-950 text-white rounded-lg shadow-lg overflow-hidden w-full max-w-md p-8 text-center">
                <div className="button-container mb-4">
                    {state?.isAuthenticated ? (
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform active:scale-95"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform active:scale-95"
                            onClick={() => signIn()}
                        >
                            Sign In / Register
                        </button>
                    )}
                </div>
            </div>



        </div>
    );
};

export default Home;
