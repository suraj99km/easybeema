"use client";
import React, { useState } from 'react';
import Modal from './ui/Modal';

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <section id="pricing" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-12">
                        <video id="video2" className="rounded-lg shadow-2xl mx-auto" loop controls playsInline>
                            <source src="/video2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Pay Only When You Save</h2>
                    <p className="text-lg text-gray-700 mb-8">40% lower. Zero upfront.</p>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 md:mb-0">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Traditional Reinsurers</h3>
                            <p className="text-lg text-gray-600">₹100 crore → You pay <span className="font-bold">₹4 crore</span> cession</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-green-800 mb-2">EasyBeema</h3>
                            <p className="text-lg text-green-600">₹100 crore → You pay <span className="font-bold">₹2.4 crore</span></p>
                        </div>
                    </div>
                    <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg mt-12 text-lg transition duration-300">
                        Start Your Free Simulation
                    </button>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="text-center p-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Your Free Flood Risk Report</h3>
                    <p className="text-gray-600 mb-6">Enter a crop location to get a flood risk report in 2 minutes.</p>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Enter crop location (e.g., 'Nashik, Maharashtra')" className="w-full p-3 border border-gray-300 rounded-lg" />
                        <button onClick={() => alert('Simulating flood risk... Report will be ready in 2 minutes.')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                            Get Report
                        </button>
                        <button onClick={closeModal} className="text-sm text-gray-600 hover:underline">
                            Book call with AI expert
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Pricing;
