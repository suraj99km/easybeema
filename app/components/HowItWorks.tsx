import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-12">3 Steps to Reinsurance Freedom</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex-1 p-6 text-center">
                        <div className="text-4xl text-blue-800 mb-4">&#10102;</div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">1. Simulate Risks</h3>
                        <p className="text-gray-700">Upload property data—AI predicts scenarios (e.g., cyclone impact).</p>
                    </div>
                    <div className="text-4xl text-blue-800 hidden md:block">&rarr;</div>
                    <div className="flex-1 p-6 text-center">
                        <div className="text-4xl text-blue-800 mb-4">&#10103;</div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">2. Match & Syndicate</h3>
                        <p className="text-gray-700">Our marketplace connects you to global reinsurers—bypass GIC, get 15% cheaper bids.</p>
                    </div>
                    <div className="text-4xl text-blue-800 hidden md:block">&rarr;</div>
                    <div className="flex-1 p-6 text-center">
                        <div className="text-4xl text-blue-800 mb-4">&#10104;</div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">3. Resolve Instantly</h3>
                        <p className="text-gray-700">Parametric models auto-trigger claims—clear, fast, no disputes.</p>
                    </div>
                </div>
                <div className="mt-16 bg-blue-50 p-8 rounded-lg max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">What Happens After Signup?</h3>
                    <ol className="list-decimal list-inside text-left text-gray-700 space-y-2">
                        <li>Instant welcome email with a link to your custom simulation dashboard.</li>
                        <li>A 15-minute onboarding call to tailor the platform to your needs.</li>
                        <li>Within the first week, see a projected 15% drop in your at-risk portfolio.</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
