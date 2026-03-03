'use client';

import { useState } from 'react';

export default function ProductivityPage() {
  const [copied, setCopied] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const copyUpiId = () => {
    navigator.clipboard.writeText('anitabishtjune25@okaxis');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    {/* Custom Navbar for Money Page */}
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-[#065f46] z-[100]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-black text-xl">D</span>
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-[#065f46] transition-colors duration-300">
                Dizees
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://x.com/webwithdev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#065f46] transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/webwithdev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#065f46] transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/devansh-bisht-8322842b7" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#065f46] transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main className="bg-gray-50 pt-20 min-h-screen">
    <div className="grid lg:grid-cols-2">
      {/* Left Side - Image (Sticky) */}
      <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-[40vh] lg:min-h-screen lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
        <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
        <img 
          src="/images/ChatGPT Image Feb 23, 2026, 04_12_34 PM.png" 
          alt="Product mockup"
          className="w-full h-full object-contain rounded-2xl shadow-2xl"
        />
        </div>
      </div>

      {/* Right Side - Product Details (Scrollable with Custom Scrollbar) */}
      <div className="p-4 sm:p-6 lg:p-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-2xl mx-auto space-y-6 sm:space-y-8 pb-12 sm:pb-16">
        
        {/* Format Badges */}
        <div className="flex flex-wrap gap-2 animate-fadeIn">
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#065f46] to-[#064e3b] text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            📄 PDF Format
          </span>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            💾 5.01 MB
          </span>
        </div>

        {/* Product Title */}
        <div className="space-y-3">
          <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            From ₹0 to ₹100000 - The Ultimate Guide to Your First Lakh
          </h1>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-[#065f46] to-[#064e3b] rounded-2xl p-6 lg:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
            <div>
              <p className="text-sm font-medium opacity-90 mb-2">🔥 Limited Time Offer</p>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-5xl lg:text-6xl font-black">₹99</span>
                <span className="text-xl lg:text-2xl line-through opacity-60">₹299</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-xl animate-pulse">
              <p className="text-base font-bold">67% OFF</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <span className="text-xl">⚡</span>
            <span className="font-semibold whitespace-nowrap">Instant Access</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <span className="text-xl">🔒</span>
            <span className="font-semibold whitespace-nowrap">Secure Payment</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <span className="text-xl">💯</span>
            <span className="font-semibold whitespace-nowrap">100% Digital</span>
          </div>
        </div>

        {/* Main CTA */}
        <button 
          onClick={() => setShowPayment(!showPayment)}
          className="w-full bg-gradient-to-r from-[#065f46] to-[#064e3b] hover:from-[#064e3b] hover:to-[#065f46] text-white font-bold text-lg sm:text-xl py-5 sm:py-6 px-6 sm:px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transform relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative">🚀 BUY NOW - ₹99</span>
        </button>

        {/* Payment Dropdown - Hidden by default */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
            showPayment ? 'max-h-[2000px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
          }`}
        >
          {/* Google Pay / UPI Payment */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-[#065f46] animate-slideDown">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
                G
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Pay via Google Pay</h3>
                <p className="text-xs sm:text-sm text-gray-500">PhonePe, GPay, Paytm & all UPI apps</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              {/* QR Code */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-2xl border-2 border-dashed border-[#065f46]">
                <img 
                  src="/images/image.png" 
                  alt="Google Pay QR Code"
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 object-contain"
                />
              </div>
              
              {/* UPI ID Section */}
              <div className="w-full space-y-3">
                <p className="text-sm sm:text-base font-bold text-gray-700 text-center">Or copy UPI ID</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-gray-50 px-3 sm:px-5 py-3 sm:py-4 rounded-xl border-2 border-gray-200">
                  <code className="text-xs sm:text-sm lg:text-base font-mono text-gray-900 flex-1 font-bold break-all">anitabishtjune25@okaxis</code>
                  <button
                    onClick={copyUpiId}
                    className="bg-[#065f46] hover:bg-[#064e3b] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg flex-shrink-0 w-full sm:w-auto"
                  >
                    {copied ? (
                      <>
                        <span>✓</span>
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gradient-to-r from-[#065f46] to-[#064e3b] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-center shadow-lg">
                  <p className="text-base sm:text-lg font-bold">Amount to Pay: ₹99</p>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="w-full bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 border-2 border-amber-300 mt-4">
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-amber-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                    📧
                  </div>
                  <div className="space-y-2 min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">After Successful Payment</h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Send screenshot of payment confirmation <span className="font-bold">along with your email address</span> to:
                    </p>
                    <a 
                      href="mailto:bishtdevansh03@gmail.com" 
                      className="inline-block text-[#065f46] hover:text-[#064e3b] font-bold text-sm sm:text-base underline decoration-2 underline-offset-2 break-all"
                    >
                      bishtdevansh03@gmail.com
                    </a>
                    <p className="text-xs sm:text-sm text-gray-700 font-semibold mt-2">
                      ⚡ You'll receive your product within <span className="text-[#065f46] font-bold">25 minutes</span>!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PayPal Payment Option */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-[#0070ba] animate-slideDown mt-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0070ba] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-md flex-shrink-0">
                P
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Pay via PayPal</h3>
                <p className="text-xs sm:text-sm text-gray-500">Credit/Debit cards & international payments</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              <a 
                href="https://paypal.me/devanshbishtcr7/1.2" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="text-xl sm:text-2xl">💳</span>
                <span>Pay ₹99 with PayPal</span>
              </a>

              {/* Payment Instructions for PayPal */}
              <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                    ℹ️
                  </div>
                  <div className="space-y-2 min-w-0 flex-1">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">After PayPal Payment</h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Once your payment is confirmed by PayPal, send your <span className="font-bold">PayPal transaction ID and email address</span> to:
                    </p>
                    <a 
                      href="mailto:bishtdevansh03@gmail.com" 
                      className="inline-block text-[#0070ba] hover:text-[#005ea6] font-bold text-sm sm:text-base underline decoration-2 underline-offset-2 break-all"
                    >
                      bishtdevansh03@gmail.com
                    </a>
                    <p className="text-xs sm:text-sm text-gray-700 font-semibold mt-2">
                      ⚡ You'll receive your product within <span className="text-[#0070ba] font-bold">25 minutes</span>!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Get */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="text-2xl">✨</span> What You'll Get
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
              <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform shadow-md">✓</span>
              <span className="text-gray-700 font-medium leading-relaxed">60-Day Action Blueprint to build your first income stream</span>
            </li>
            <li className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
              <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform shadow-md">✓</span>
              <span className="text-gray-700 font-medium leading-relaxed">Learn to sell digital products with zero investment</span>
            </li>
            <li className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
              <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform shadow-md">✓</span>
              <span className="text-gray-700 font-medium leading-relaxed">Build scalable income streams that work 24/7</span>
            </li>
            <li className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
              <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform shadow-md">✓</span>
              <span className="text-gray-700 font-medium leading-relaxed">Beginner-friendly & easy to implement strategies</span>
            </li>
          </ul>
        </div>

        {/* Detailed Description */}
        <div className="space-y-6 pt-8 border-t-2 border-gray-200 mt-8">
          <div>
            <h2 className="text-2xl font-bold text-[#064E3B] mb-2">From ₹0 to ₹100000 - The Ultimate Guide to Your First Lakh 💸</h2>
            <p className="text-xl font-semibold text-gray-900">The Exact System I Used to Earn My First Lakh</p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700 font-medium">🚫 No fluff. No fake courses. No recycled advice.</p>
            <p className="text-gray-700 font-medium">Only real execution that produced real money.</p>
          </div>

          <p className="text-gray-900 font-semibold">
            This is not theory.<br />
            This is the structured system that took me from ₹0 to ₹100000.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#064E3B]">💰 How I Made My First ₹100000</h3>
            
            <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-900">🔵 Starting from Zero</p>
              <p className="text-gray-700">How I began with no capital, no audience, and no shortcuts.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">🔵 The Method That Worked</p>
              <p className="text-gray-700">The exact income model that generated real results — and why it worked.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">🔵 Mistakes I Made</p>
              <p className="text-gray-700">Time-wasting actions, wrong decisions, and what I would never repeat.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">🔵 Scaling Strategy</p>
              <p className="text-gray-700">How I turned small earnings into consistent income.</p>
            </div>
            </div>

            <p className="text-gray-900 font-semibold">
            This isn't a highlight reel.<br />
            It's the full breakdown.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#064E3B]">⚖ Methods Compared (So You Don't Waste Time)</h3>
            <p className="text-gray-700">Not every method fits everyone. Inside, I compare earning models clearly:</p>
            
            <ul className="space-y-2 text-gray-700">
            <li>🔵 Difficulty level (Beginner / Intermediate / Advanced)</li>
            <li>🔵 Time required to see first results</li>
            <li>🔵 Investment needed (₹0 / Low / Medium)</li>
            <li>🔵 Platforms to use</li>
            <li>🔵 Best option if you're just starting</li>
            </ul>

            <p className="text-gray-900 font-semibold">No confusion. No guessing.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#064E3B]">🚀 Clear Action Plan</h3>
            
            <ul className="space-y-2 text-gray-700">
            <li>🔵 Step-by-step execution framework</li>
            <li>🔵 How to land your first client or sale</li>
            <li>🔵 How to move from ₹0 to consistent income</li>
            <li>🔵 How to reinvest and grow</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>

    {/* Footer - Full Width */}
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <a 
          href="mailto:bishtdevansh03@gmail.com" 
          className="text-gray-600 hover:text-[#065f46] transition-colors duration-200 text-xs sm:text-sm font-medium break-all text-center md:text-left"
        >
          Need Support? Contact Us
        </a>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs sm:text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Dizees</span>
          <span className="hidden md:inline">•</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
    </main>
    </>
  );
}
