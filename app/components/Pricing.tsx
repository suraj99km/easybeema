"use client";
import React, { useState } from 'react';
import Modal from './ui/Modal';

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section id="pricing" className="py-20 bg-blue-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-12">Why EasyBeema Costs Less Than GIC's Hidden Fees</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-800">GIC</h3>
                            <p className="text-gray-600 mt-2">"Rs 5-10L per Rs1Cr treaty + 20% margin hit"</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-800">
                            <h3 className="text-xl font-bold text-blue-800">Starter</h3>
                            <p className="text-gray-600 mt-2">"Rs 2L/treaty, basic sims—30% savings"</p>
                            <p className="font-bold text-lg text-blue-800 mt-4">Free Pilot</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-800">Pro</h3>
                            <p className="text-gray-600 mt-2">"Rs 1.5L/treaty unlimited, full syndicates—40% ROI in 3mo"</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 mt-8 max-w-md mx-auto">
                        <li>Transparent, scalable, 14-day trial.</li>
                    </ul>
                    <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-8">
                        Get Starter Quote
                    </button>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Your Starter Quote</h3>
                <form>
                    <input type="email" placeholder="Work Email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                        Submit
                    </button>
                </form>
            </Modal>
        </>
    );
};

export default Pricing;
