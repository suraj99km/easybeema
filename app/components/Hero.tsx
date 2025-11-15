"use client";
import React, { useState } from 'react';
import Modal from './ui/Modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="w-full bg-gradient-to-b from-blue-800 to-blue-100 pb-12 md:pt-22 md:pb-24 flex items-center justify-center font-sans">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col items-center text-center mb-6">
                            <img src="/logo.png" alt="EasyBeema Logo" className="h-24 mb-4"/>
                            <span className="text-3xl font-bold text-white">EasyBeema</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 [text-shadow:1px_1px_3px_rgb(0_0_0_/_0.4)]">
                            Cut Reinsurance Costs by 40% in 90 Days
                        </h1>
                        <h2 className="text-lg md:text-2xl text-gray-200 mb-8 [text-shadow:1px_1px_3px_rgb(0_0_0_/_0.4)]">
                            AI-powered simulations, instant claims, global capital — for mid-sized insurers tired of reinsurer delays.
                        </h2>
                        <button
                            onClick={openModal}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get a Free Risk Simulation →
                        </button>
                    </div>
                    <div className="md:w-3/5 mt-10 md:mt-0 md:ml-12">
                        <video className="rounded-lg shadow-2xl" autoPlay loop controls playsInline>
                            <source src="/video1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
