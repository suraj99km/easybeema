"use client";
import React from 'react';

const StickyCTA = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-0 w-full bg-blue-800 text-white p-4 text-center z-40">
            <button onClick={scrollToContact} className="font-bold underline">
                Claim 40% Savings—Demo Now
            </button>
        </div>
    );
};

export default StickyCTA;
