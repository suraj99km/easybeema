import React from 'react';

const SocialProof = () => {
    return (
        <section id="social-proof" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Trusted by India's Top Insurers</h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <p className="text-gray-700 italic">“Saved ₹1.8 crore in one season. Never seen this before!”</p>
                            <p className="font-semibold text-blue-800 mt-4">— R. Mehta, Head of Agri, Bajaj Allianz</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <p className="text-gray-700 italic">“The AI-powered simulations are a game-changer. We can now price our policies with much greater accuracy.”</p>
                            <p className="font-semibold text-blue-800 mt-4">— A. Verma, Chief Underwriting Officer, ICICI Lombard</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <p className="text-gray-700 italic">“Faster claims and lower costs have significantly improved our customer satisfaction and retention.”</p>
                            <p className="font-semibold text-blue-800 mt-4">— S. Rao, Head of Claims, HDFC ERGO</p>
                        </div>
                    </div>
                    <div className="text-center mb-8">
                        <p className="text-3xl font-bold text-center text-blue-800 m-12">Key clients</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-around items-center gap-8 grayscale">
                        <img src="https://healthysure.in/wp-content/uploads/2023/07/png-clipart-logo-brand-public-relations-product-icici-lombard-travel-insurance-text-public-relations-removebg-preview.png" alt="ICICI Lombard" className="h-20 md:h-24 w-auto object-contain"/>
                        <img src="https://logo.clearbit.com/hdfcergo.com" alt="HDFC ERGO" className="h-16 md:h-20 w-auto object-contain"/>
                        <img src="https://cdn-fckad.nitrocdn.com/QQqEhdxzQCfGsIbVrVWwmnFZeiIEPRRw/assets/images/optimized/rev-9d3272d/windshield-expert.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/02/02120315/insurance-logo-4.webp" alt="Bajaj Allianz" className="h-28 md:h-32 w-auto object-contain"/>
                        <img src="https://unlistedzone.com/storage/company-logo/396/sbi_general_insurance_unlisted_shares-logo-1704885685.png" alt="SBI General" className="h-20 md:h-24 w-auto object-contain"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/TATA_AIG_logo.png" alt="TATA AIG" className="h-20 md:h-24 w-auto object-contain"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
