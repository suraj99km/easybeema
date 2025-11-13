import React from 'react';

const Problem = () => {
    return (
        <section id="problem" className="py-20 bg-white border-t-4 border-blue-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Stuck in GIC's Bureaucratic Black Hole?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                    You're buried in paperwork: 4% mandatory cessions bleed your margins by 20%, manual placements take weeks, and claims drag on with 60% denials. Higher premiums for clients? Unacceptable.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
                    <div className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-blue-800 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p className="text-gray-700">30-60 day reinsurance delays inflate your risks.</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-blue-800 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0-1v-.01M12 18v-1m0-1v.01m0-1V14m0-1v.01M12 5V4a1 1 0 00-1-1H9a1 1 0 00-1 1v1h4zm10 0v1a1 1 0 001 1h2a1 1 0 001-1V5h-4zM4 5v1a1 1 0 001 1h2a1 1 0 001-1V5H4zm15 14v-1a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h4zm-1-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h4v-1zM4 19v-1a1 1 0 00-1-1H1a1 1 0 00-1 1v1h4z"></path></svg>
                        <p className="text-gray-700">Opaque GIC processes hide true costs—up to 15% premium hikes.</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <svg className="w-6 h-6 text-blue-800 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.99A5.002 5.002 0 109.5 5H6a4 4 0 00-4 4v1m0 4h.01M21 15h.01"></path></svg>
                        <p className="text-gray-700">No real-time tools for NatCat like floods/cyclones.</p>
                    </div>
                </div>
                <hr className="my-12 border-t border-gray-200" />
            </div>
        </section>
    );
};

export default Problem;
