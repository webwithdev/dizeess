import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-[#065f46] z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#065f46] to-[#064e3b] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-black text-xl">D</span>
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-[#065f46] transition-colors duration-300">
                Dizees
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/products/money" 
              className="relative text-gray-700 hover:text-[#065f46] transition-all duration-300 font-semibold text-base group"
            >
              <span>Products</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#065f46] to-[#064e3b] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/dashboard" 
              className="relative text-gray-700 hover:text-[#065f46] transition-all duration-300 font-semibold text-base group"
            >
              <span>Dashboard</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#065f46] to-[#064e3b] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
