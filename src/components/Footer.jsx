import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full -mt-10 bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 text-center border-t-2 border-blue-800 mt-8">
            <p className="text-sm font-light">
                Designed and Developed by{" "}
                <a
                    href="https://www.linkedin.com/in/chalana-gayan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                >
                    Chalana Gayan
                </a>
            </p>
        </footer>
    );
};

export default Footer;
