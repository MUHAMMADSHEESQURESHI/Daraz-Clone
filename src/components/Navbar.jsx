import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import darazLogo from '../assets/darazlogo.png'
const Navbar = () => {
  return (
    <header className="w-full bg-[#f85606] sticky top-0 z-50 shadow-md">
      {/* Top Bar (Transparent White Text) */}
      <div className="container mx-auto px-10 py-1 flex justify-end items-center gap-6 text-white text-[12px] font-medium">
        <span className="hover:underline cursor-pointer">SAVE MORE ON APP</span>
        <span className="hover:underline cursor-pointer">SELL ON DARAZ</span>
        <span className="hover:underline cursor-pointer">HELP & SUPPORT</span>
        <span className="hover:underline cursor-pointer">LOGIN</span>
        <span className="hover:underline cursor-pointer">SIGN UP</span>
        <span className="hover:underline cursor-pointer text-sm">زبان تبدیل کریں</span>
      </div>

      {/* Main Search Bar Section */}
      <div className="container mx-auto px-10 py-4 flex items-center gap-10">
        {/* Exact Logo from Image */}
        <div className="flex-shrink-0 cursor-pointer">
          <img 
            src={darazLogo} 
            alt="Daraz Logo" 
            className="h-10 w-auto brightness-0 invert" // Makes the logo white
          />
        </div>

        {/* Search Container */}
        <div className="flex-1 flex items-center shadow-sm">
          <input 
            type="text" 
            placeholder="Search in Daraz" 
            className="w-full bg-white py-3 px-5 outline-none rounded-l-sm text-[14px] text-gray-700 placeholder-gray-400" 
          />
          <button className="bg-[#fee1d1] hover:bg-[#fdd0b8] text-[#f85606] py-3 px-6 rounded-r-sm transition-colors">
            <Search size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center cursor-pointer text-white pl-4">
          <ShoppingCart size={32} strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;