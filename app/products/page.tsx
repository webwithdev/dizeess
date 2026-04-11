import Link from 'next/link';

const products = [
  {
    title: 'Money Guide',
    description: 'From ₹0 to ₹100000 - The Ultimate Guide to Your First Lakh.',
    href: '/products/money',
    cta: 'Open Money Product',
  },
  {
    title: 'Productivity Toolkit',
    description: 'The Complete Anti-Procrastination System for Busy Students.',
    href: '/products/productivity',
    cta: 'Open Productivity Product',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Products</h1>
        <p className="text-gray-700 text-lg mb-10">Choose a product to continue.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.href} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-3">{product.title}</h2>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <Link
                href={product.href}
                className="inline-flex items-center justify-center rounded-2xl bg-primary text-white px-6 py-3 font-semibold hover:opacity-95 transition"
              >
                {product.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}