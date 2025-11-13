"use client";
import React from 'react';

const HowItWorks = () => {
    const openModal = () => {
        // In a real app, you'd have a global modal state here.
        // For this prototype, we'll just alert.
        alert("This would open a modal with a fake dashboard graph.");
    };

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-12">3 Steps to Reinsurance Freedom</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 p-6 border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition-shadow" onClick={openModal}>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">1. Simulate Risks</h3>
                        <p className="text-gray-700">Upload property data—AI predicts scenarios (e.g., cyclone impact).</p>
                    </div>
                    <div className="flex-1 p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">2. Match & Syndicate</h3>
                        <p className="text-gray-700">Our marketplace connects you to global reinsurers—bypass GIC, get 15% cheaper bids.</p>
                    </div>
                    <div className="flex-1 p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Resolve Instantly</h3>
                        <p className="text-gray-700">Parametric models auto-trigger claims—clear, fast, no disputes.</p>
                    </div>
                </div>
                <div className="mt-12 text-left max-w-2xl mx-auto">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Lower costs via prevention.</li>
                        <li>Transparent tools for your team.</li>
                        <li>Scalable for NatCat & agriculture.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;