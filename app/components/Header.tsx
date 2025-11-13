"use client";
import React from 'react';

const Header = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-blue-800">EasyBeema</div>
                <nav className="hidden md:flex space-x-6">
                    <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-blue-800">How It Works</button>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-800">Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
