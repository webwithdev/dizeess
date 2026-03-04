import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-20 overflow-hidden">
      {/* Hero Section with Animation */}
      <section className="relative pt-16 pb-32 px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#065f46]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#065f46]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#065f46] to-[#064e3b] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-fadeIn">
              <span className="animate-bounce">🚀</span>
              <span>Your Journey to Financial Freedom Starts Here</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight animate-fadeIn">
              Turn Your Skills Into
              <br />
              <span className="bg-gradient-to-r from-[#065f46] to-[#064e3b] bg-clip-text text-transparent">
                Real Income
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
              Learn the exact system that helped me go from <span className="font-bold text-[#065f46]">₹0 to ₹1,00,000</span>. 
              No fluff, no theory - just actionable strategies that work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fadeIn">
              <Link 
                href="/products/money"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#065f46] to-[#064e3b] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">Get Started Now</span>
                <span className="relative text-2xl">→</span>
              </Link>
              
              <a 
                href="#features"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-[#065f46]"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 animate-fadeIn">
              <div className="text-center">
                <div className="text-4xl font-black text-[#065f46]">₹99</div>
                <div className="text-sm text-gray-600 font-semibold">One-Time Payment</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#065f46]">60 Days</div>
                <div className="text-sm text-gray-600 font-semibold">Action Blueprint</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#065f46]">100%</div>
                <div className="text-sm text-gray-600 font-semibold">Beginner Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#065f46] to-[#064e3b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Featured Product
            </h2>
            <p className="text-xl text-white/90">
              Start your journey to financial independence today
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image Side */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-gradient-to-br from-[#065f46]/20 to-[#064e3b]/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-8xl lg:text-9xl">💰</div>
                </div>
              </div>

              {/* Product Details Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#065f46] to-[#064e3b] text-white text-xs font-bold rounded-full">
                    📄 PDF
                  </span>
                  <span className="px-4 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-full">
                    5.01 MB
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                  From ₹0 to ₹100000
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  The Ultimate Guide to Your First Lakh
                </p>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-black text-[#065f46]">₹99</span>
                  <span className="text-2xl line-through text-gray-400">₹299</span>
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-lg">67% OFF</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-[#065f46] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">✓</span>
                    <span className="font-medium">60-Day Action Blueprint</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-[#065f46] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">✓</span>
                    <span className="font-medium">Zero Investment Required</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-[#065f46] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">✓</span>
                    <span className="font-medium">Beginner Friendly</span>
                  </li>
                </ul>

                <Link 
                  href="/products/money"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#065f46] to-[#064e3b] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>View Details</span>
                  <span className="text-2xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Why Choose Dizees?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real strategies, real results. No shortcuts, no gimmicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Get immediate access to all materials. Start implementing strategies within minutes of purchase.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven System</h3>
              <p className="text-gray-600 leading-relaxed">
                Follow the exact blueprint that took me from zero to my first lakh. No guesswork involved.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Actionable Steps</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear, step-by-step instructions. Know exactly what to do from day 1 to day 60.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Zero Investment</h3>
              <p className="text-gray-600 leading-relaxed">
                Start building your income streams without spending a single rupee on tools or software.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Beginner Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                No prior experience needed. Everything is explained in simple, easy-to-understand language.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#065f46] transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#065f46] to-[#064e3b] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🔥
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Real Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Based on real experience, not theoretical concepts. Learn from actual wins and mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#065f46] to-[#064e3b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of others who have transformed their financial future with actionable strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products/money"
              className="group relative inline-flex items-center gap-2 bg-white text-[#065f46] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Get Started for ₹99</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Support Available</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
