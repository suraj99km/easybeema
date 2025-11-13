import React from 'react';

const AIAdvantage = () => {
    return (
        <section id="ai-advantage" className="py-20 bg-blue-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">From GIC Chaos to EasyBeema Clarity—Your AI Edge</h2>
                
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg">
                        <iframe 
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-blue-800 text-white">
                                <th className="py-3 px-4 border-b">Feature</th>
                                <th className="py-3 px-4 border-b">GIC Re (Status Quo)</th>
                                <th className="py-3 px-4 border-b">EasyBeema (AI Disruption)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Risk Assessment</td>
                                <td className="py-3 px-4 border-b">Manual spreadsheets, 30-day waits</td>
                                <td className="py-3 px-4 border-b">AI simulations with satellite/IoT data—instant flood forecasts</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Placement</td>
                                <td className="py-3 px-4 border-b">Broker fees + forced 4% cessions</td>
                                <td className="py-3 px-4 border-b">Direct blockchain marketplace—underpriced syndicate bids in minutes</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Claims</td>
                                <td className="py-3 px-4 border-b">Opaque reviews, 60-day denials</td>
                                <td className="py-3 px-4 border-b">Parametric triggers: Auto-payout if rain &gt;100mm—90% in 24 hours</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">Cost Savings</td>
                                <td className="py-3 px-4 border-b">Profit drain (no prevention)</td>
                                <td className="py-3 px-4 border-b">40% lower treaties via proactive simulations</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-sm text-gray-600 mt-6">
                    From GIC's reactive mess to your proactive dashboard—a leap impossible before ChatGPT. Switch now: Proactive wins.
                </p>
            </div>
        </section>
    );
};

export default AIAdvantage;
