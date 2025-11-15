import React from 'react';

const SocialProof = () => {
    return (
        <section id="social-proof" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Trusted by India's Top Insurers</h2>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gray-50 p-8 rounded-lg mb-8">
                        <p className="text-2xl text-gray-700 italic">“Saved ₹1.8 crore in one season.”</p>
                        <p className="font-semibold text-blue-800 mt-4">— R. Mehta, Head of Agri, Bajaj Allianz</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg font-semibold text-gray-700">Backed by Munich Re data models</p>
                    </div>
                    <div className="flex flex-wrap justify-around items-center gap-4 grayscale">
                        <img src="https://logo.clearbit.com/icicilombard.com" alt="ICICI Lombard" className="h-10 md:h-12 w-32 object-contain"/>
                        <img src="https://logo.clearbit.com/hdfcergo.com" alt="HDFC ERGO" className="h-10 md:h-12 w-32 object-contain"/>
                        <img src="https://logo.clearbit.com/bajajallianz.com" alt="Bajaj Allianz" className="h-10 md:h-12 w-32 object-contain"/>
                        <img src="https://logo.clearbit.com/sbigeneral.in" alt="SBI General" className="h-10 md:h-12 w-32 object-contain"/>
                        <img src="https://logo.clearbit.com/tataaig.com" alt="TATA AIG" className="h-10 md:h-12 w-32 object-contain"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
