"use client";
import React, { useState } from 'react';
import Modal from './Modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
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
                    <img src="/file.svg" alt="Product Dashboard" className="w-full h-auto rounded-lg shadow-2xl"/>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default Hero;