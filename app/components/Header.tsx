"use client";
import React, { useState } from 'react';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsSidebarOpen(false);
    };

    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-40">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="EasyBeema Logo" className="h-8 mr-2"/>
                        <div className="text-2xl font-bold text-blue-800">EasyBeema</div>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <button onClick={() => scrollToSection('solution')} className="text-gray-600 hover:text-blue-800">How It Works</button>
                        <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-800">Pricing</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-800">Contact</button>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600 hover:text-blue-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-blue-800 text-white w-64 p-8 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <nav className="flex flex-col space-y-6 mt-8">
                    <button onClick={() => scrollToSection('solution')} className="text-lg hover:underline">How It Works</button>
                    <button onClick={() => scrollToSection('pricing')} className="text-lg hover:underline">Pricing</button>
                    <button onClick={() => scrollToSection('contact')} className="text-lg hover:underline">Contact</button>
                </nav>
            </div>
        </>
    );
};

export default Header;
