"use client";
import React, { useState } from 'react';
import Modal from './ui/Modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="w-full bg-gradient-to-b from-blue-800 to-blue-100 text-white min-h-screen flex items-center justify-center font-sans">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 text-center md:text-left">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                            Reinsure Smarter: Cut GIC Costs by 40% with AI Simulations
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                            For property managers at ICICI Lombard—forecast flood risks instantly, bypass brokers, and auto-pay claims in hours. End the mandatory cession nightmare.
                        </h2>
                        <button 
                            onClick={openModal}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Start Free Risk Simulation
                        </button>
                        <p className="text-sm mt-4 text-gray-200">
                            Rs 5,000 Cr lost yearly to GIC inefficiencies (Moneycontrol).
                        </p>
                        <p className="text-sm italic mt-2 text-gray-200">
                            "Saved Rs 2 Cr on cyclone treaties—game-changer!" — ICICI Property Lead
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="300" rx="8" fill="#EFF6FF"/>
                            <rect x="20" y="20" width="360" height="40" rx="4" fill="#D1D5DB"/>
                            <path d="M20 80H380" stroke="#9CA3AF" strokeWidth="2"/>
                            <rect x="40" y="100" width="100" height="150" rx="4" fill="#A5B4FC"/>
                            <rect x="160" y="120" width="100" height="130" rx="4" fill="#7C3AED"/>
                            <rect x="280" y="90" width="80" height="160" rx="4" fill="#4F46E5"/>
                        </svg>
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Simulate Your Risk</h3>
                    <p className="text-gray-600 mb-6">Enter a property location to see a sample flood risk analysis.</p>
                    <input type="text" placeholder="Enter Mumbai property" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800">72h Flood Risk: <span className="text-red-500">15%</span></p>
                        <p className="text-gray-700">Potential Savings: <span className="text-green-600">Rs 50L</span></p>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Hero;
