import React from 'react';

const AIAdvantage = () => {
    return (
        <section id="ai-advantage" className="py-16 md:py-20 bg-blue-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">The AI Advantage: Before & After</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">Before: Traditional Reinsurers</h3>
                        <ul className="text-lg text-gray-700 space-y-2">
                            <li>→ 60-day claim process</li>
                            <li>→ 4% forced cut</li>
                            <li>→ Manual checks</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">After: EasyBeema</h3>
                        <ul className="text-lg text-gray-700 space-y-2">
                            <li>→ 4-hour payouts</li>
                            <li>→ 40% cost savings</li>
                            <li>→ AI + satellite data</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAdvantage;
