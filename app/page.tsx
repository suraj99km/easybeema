'use client';

import { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo booked!');
  };

  return (
    <div className="bg-light-blue font-sans">
      <Head>
        <title>EasyBeema: AI Reinsurance Platform | Beat GIC</title>
        <meta name="description" content="EasyBeema is a B2B AI reinsurance platform disrupting GIC Re in India." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-blue">EasyBeema</div>
          <div>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-blue px-4">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-blue px-4">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-blue to-light-blue text-white text-center py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Reinsure Smarter: Cut GIC Costs by 40% with AI Simulations</h1>
            <h2 className="text-2xl mb-8">
              For property managers at ICICI Lombard—forecast flood risks instantly, bypass brokers, and auto-pay claims in hours. End the mandatory cession nightmare.
            </h2>
            <button
              onClick={handleCtaClick}
              className="bg-white text-primary-blue font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Start Free Risk Simulation
            </button>
            <p className="mt-8 text-sm">Rs 5,000 Cr lost yearly to GIC inefficiencies (Moneycontrol).</p>
            <p className="mt-4 text-sm italic">"Saved Rs 2 Cr on cyclone treaties—game-changer! — ICICI Property Lead"</p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white border-t-4 border-primary-blue">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Stuck in GIC's Bureaucratic Black Hole?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You're buried in paperwork: 4% mandatory cessions bleed your margins by 20%, manual placements take weeks, and claims drag on with 60% denials. Higher premiums for clients? Unacceptable.
            </p>
            <ul className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>30-60 day reinsurance delays inflate your risks.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2v0m0 0v.01m0 0v0m0-2.01V4m0 0V3m0 0V2"></path></svg>
                <span>Opaque GIC processes hide true costs—up to 15% premium hikes.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                <span>No real-time tools for NatCat like floods/cyclones.</span>
              </li>
            </ul>
            <hr className="my-12 border-gray-300" />
          </div>
        </section>

        {/* AI Advantage Section */}
        <section className="py-20 bg-light-blue" id="ai-advantage">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">From GIC Chaos to EasyBeema Clarity—Your AI Edge</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-primary-blue text-white">
                    <th className="py-3 px-4 text-left">Feature</th>
                    <th className="py-3 px-4 text-left">GIC Re (Status Quo)</th>
                    <th className="py-3 px-4 text-left">EasyBeema (AI Disruption)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Risk Assessment</td>
                    <td className="py-3 px-4">Manual spreadsheets, 30-day waits</td>
                    <td className="py-3 px-4 font-semibold text-green-600">AI simulations with satellite/IoT data—instant flood forecasts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Placement</td>
                    <td className="py-3 px-4">Broker fees + forced 4% cessions</td>
                    <td className="py-3 px-4 font-semibold text-green-600">Direct blockchain marketplace—underpriced syndicate bids in minutes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Claims</td>
                    <td className="py-3 px-4">Opaque reviews, 60-day denials</td>
                    <td className="py-3 px-4 font-semibold text-green-600">Parametric triggers: Auto-payout if rain {'>'} 100mm—90% in 24 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Cost Savings</td>
                    <td className="py-3 px-4">Profit drain (no prevention)</td>
                    <td className="py-3 px-4 font-semibold text-green-600">40% lower treaties via proactive simulations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center mt-8 text-sm text-gray-600">Powered by post-2022 multimodal AI—real-time matching impossible before ChatGPT. Switch now: Proactive wins over reactive mess.</p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white" id="how-it-works">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">3 Steps to Reinsurance Freedom</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="max-w-xs text-center cursor-pointer" onClick={handleCtaClick}>
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Simulate Risks</h3>
                <p>Upload property data—AI predicts scenarios (e.g., cyclone impact).</p>
              </div>
              <div className="text-primary-blue hidden md:block text-4xl">→</div>
              <div className="max-w-xs text-center">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Match & Syndicate</h3>
                <p>Our marketplace connects you to global reinsurers—bypass GIC, get 15% cheaper bids.</p>
              </div>
              <div className="text-primary-blue hidden md:block text-4xl">→</div>
              <div className="max-w-xs text-center">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Resolve Instantly</h3>
                <p>Parametric models auto-trigger claims—clear, fast, no disputes.</p>
              </div>
            </div>
            <p className="mt-12 text-lg text-gray-600">Lower costs via prevention. Transparent tools for your team. Scalable for NatCat & agriculture.</p>
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="bg-primary-blue text-white py-20" id="contact">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ditch GIC? Let's Talk.</h2>
            <p className="mb-8">Book a 15-min demo. See 40% savings in action.</p>
            <form className="max-w-xl mx-auto" onSubmit={handleFormSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text" placeholder="Name" className="w-full p-3 rounded-md text-gray-800" required />
                <input type="email" placeholder="Email" className="w-full p-3 rounded-md text-gray-800" required />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text" placeholder="Company" className="w-full p-3 rounded-md text-gray-800" />
                <input type="text" placeholder="Key Pain: e.g., Delays/Costs" className="w-full p-3 rounded-md text-gray-800" />
              </div>
              <button type="submit" className="bg-white text-primary-blue font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">Submit</button>
            </form>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">Watch Demo Video</a>
            <div className="mt-12 text-sm">
              <p>EasyBeema | Disrupting Reinsurance | contact@easybeema.com</p>
              <p>Team: 3 innovators passionate about AI for insurers.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full text-center">
            <h3 className="text-2xl font-bold mb-4">Risk Simulation Dashboard</h3>
            <p className="mb-6">Enter a property location to see a mock risk analysis.</p>
            <div className="mb-4">
              <input type="text" placeholder="Enter property location (e.g., Mumbai, IN)" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <img src="https://i.imgur.com/4gJ4V9J.png" alt="Fake Graph Output" className="w-full h-auto rounded-md" />
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-primary-blue text-white font-bold py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
