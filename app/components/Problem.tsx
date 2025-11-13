import React from 'react';

const Problem = () => {
    return (
        <section id="problem" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Hey, ICICI Manager—Last Monsoon, GIC Cost You Weeks. Let's Fix That.</h2>
                <div className="max-w-4xl mx-auto text-left text-lg text-gray-700 space-y-6">
                    <p>
                        Picture this: you're staring at delayed treaties while floodwaters are rising. You're buried in paperwork for the mandatory 4% GIC cession, a process that bleeds your margins by up to 20%. Manual placements take weeks, and when claims finally come through, they're often met with 60% denial rates. This isn't just inefficient; it's a direct hit to your profitability and forces you to offer higher, uncompetitive premiums to your clients.
                    </p>
                    <p>
                        You're not alone. A recent Verisk study found that 70% of private insurers call GIC their #1 profitability killer. The opaque processes, the inflated risks from 30-60 day delays, and the lack of real-time tools for natural catastrophes are creating a bureaucratic black hole. It's time to reclaim that lost revenue.
                    </p>
                </div>
                <div className="flex justify-center gap-12 mt-10">
                    <div className="flex items-center gap-4 text-blue-800">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-semibold">Weeks of Delays</span>
                    </div>
                    <div className="flex items-center gap-4 text-blue-800">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0-1v-.01M12 18v-1m0-1v.01m0-1V14m0-1v.01M12 5V4a1 1 0 00-1-1H9a1 1 0 00-1 1v1h4zm10 0v1a1 1 0 001 1h2a1 1 0 001-1V5h-4zM4 5v1a1 1 0 001 1h2a1 1 0 001-1V5H4zm15 14v-1a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h4zm-1-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h4v-1zM4 19v-1a1 1 0 00-1-1H1a1 1 0 00-1 1v1h4z"></path></svg>
                        <span className="font-semibold">Hidden Costs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
