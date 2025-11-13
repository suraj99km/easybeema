"use client";
import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Demo booked! An email has been sent to ${email} with your custom simulation.`);
        setEmail('');
    };

    return (
        <footer id="contact" className="py-20 bg-blue-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Ditch GIC? Book Your Demo.</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 bg-blue-100 text-gray-800 rounded-lg border-2 border-transparent focus:border-blue-300 focus:outline-none" required />
                        <input 
                            type="email" 
                            placeholder="Work Email" 
                            className="w-full p-3 bg-blue-100 text-gray-800 rounded-lg border-2 border-transparent focus:border-blue-300 focus:outline-none" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <input type="text" placeholder="Company" className="w-full p-3 bg-blue-100 text-gray-800 rounded-lg border-2 border-transparent focus:border-blue-300 focus:outline-none" required />
                        <select className="w-full p-3 bg-blue-100 text-gray-800 rounded-lg border-2 border-transparent focus:border-blue-300 focus:outline-none" required>
                            <option value="">Your Top Pain?</option>
                            <option value="delays">Reinsurance Delays</option>
                            <option value="costs">High GIC Costs</option>
                        </select>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                            Book Demo
                        </button>
                    </div>
                </form>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">
                    Watch Full Demo Video
                </a>
                <div className="mt-12 text-sm text-gray-400">
                    <p>IRDAI-compliant | contact@easybeema.com</p>
                    <p>3-person team disrupting reinsurance.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
