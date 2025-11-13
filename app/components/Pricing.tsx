"use client";
import React, { useState } from 'react';
import Modal from './ui/Modal';

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section id="pricing" className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-12">Pricing That Beats GIC's Fees—40% Savings Built In.</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* GIC Card */}
                        <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">GIC (The Old Way)</h3>
                            <p className="flex-grow">Rs 5-10L per Rs 1Cr treaty + 20% margin bleed—opaque bureaucracy.</p>
                        </div>

                        {/* Starter Card */}
                        <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg flex flex-col border-4 border-blue-300">
                            <h3 className="text-2xl font-bold mb-4">Starter</h3>
                            <p className="text-4xl font-bold mb-4">Free</p>
                            <p className="flex-grow">Rs 2L/treaty basics—30% instant savings, no setup fees.</p>
                        </div>

                        {/* Pro Card */}
                        <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">Pro</h3>
                            <p className="text-4xl font-bold mb-4">Rs 50K<span className="text-lg font-normal">/mo</span></p>
                            <p className="flex-grow">Rs 1.5L/treaty unlimited—40% ROI via AI syndicates.</p>
                        </div>
                    </div>
                    <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg mt-12 text-lg transition duration-300">
                        Get ICICI Quote
                    </button>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Get Your Custom ICICI Quote</h3>
                <form>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                        <input type="email" placeholder="Your ICICI Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                            Request Quote
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Pricing;
