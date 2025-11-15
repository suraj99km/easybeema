import React from 'react';

const Solution = () => {
    return (
        <section id="solution" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-12">Three Tools to Stop the Bleeding</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    <div className="text-center mb-8 md:mb-0">
                        <div className="flex justify-center mb-4">
                            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Flood Predictor</h3>
                        <p className="text-gray-600">See floods 7 days early → avoid claims.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Investor Matchmaker</h3>
                        <p className="text-gray-600">Connect to global funds → pay 40% less.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Auto-Pay Claims</h3>
                        <p className="text-gray-600">Flood hits → money sent in 4 hours.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Solution;