import React from 'react';

const SocialProof = () => {
    return (
        <section id="social-proof" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Insurers Like You Are Switching</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 italic">"Saved Rs 2 Cr on cyclone treaties—game-changer!"</p>
                        <p className="font-semibold text-blue-800 mt-4">— ICICI Property Lead</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 italic">"Bypassed brokers—15% cheaper bids for cyclones!"</p>
                        <p className="font-semibold text-blue-800 mt-4">— Raj, Bajaj Allianz</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 italic">"Auto-claims saved us 35% on floods."</p>
                        <p className="font-semibold text-blue-800 mt-4">— Neha, HDFC ERGO</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-8 grayscale">
                    {/* Placeholder logos */}
                    <svg className="w-24 h-12 text-gray-400 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 100 30"><text x="0" y="20">IRDAI</text></svg>
                    <svg className="w-24 h-12 text-gray-400 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 100 30"><text x="0" y="20">Moneycontrol</text></svg>
                    <svg className="w-24 h-12 text-gray-400 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 100 30"><text x="0" y="20">I. I. I.</text></svg>
                    <svg className="w-24 h-12 text-gray-400 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 100 30"><text x="0" y="20">FICCI</text></svg>
                    <svg className="w-24 h-12 text-gray-400 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 100 30"><text x="0" y="20">LinkedIn</text></svg>
                </div>
                <div className="bg-blue-800 text-white p-8 rounded-lg mt-16 text-center">
                    <h3 className="text-2xl font-bold">Shocking: Rs 5,000 Cr lost to GIC yearly—claim yours back.</h3>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
