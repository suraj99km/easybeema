"use client";
import React from 'react';

const Footer = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Demo booked! We will be in touch shortly.');
    };

    return (
        <footer id="contact" className="py-20 bg-blue-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Ditch GIC? Let's Talk.</h2>
                <p className="text-lg text-gray-300 mb-8">Book a 15-min demo. See 40% savings in action.</p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
                        <input type="email" placeholder="Work Email" className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
                        <input type="text" placeholder="Company" className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
                        <input type="text" placeholder="Key Pain: e.g., Delays/Costs" className="w-full p-3 border border-gray-300 rounded-lg text-gray-800" required />
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                            Request a Demo
                        </button>
                    </div>
                </form>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">
                    Watch Demo Video
                </a>
                <div className="mt-12 text-sm text-gray-400">
                    <p>EasyBeema | Disrupting Reinsurance | contact@easybeema.com</p>
                    <p>Team: 3 innovators passionate about AI for insurers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
