import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-7xl font-bold text-primary leading-tight">
              Digital Products
              <br />
              <span className="text-black">Made Simple</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Curated tools and resources to boost your productivity and streamline your workflow
            </p>
            <div className="pt-6">
              <Link 
                href="/products/productivity"
                className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Fast & Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant access to all products. No waiting, no hassle.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is carefully crafted to meet your needs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Premium Value</h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality digital products at accessible prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
