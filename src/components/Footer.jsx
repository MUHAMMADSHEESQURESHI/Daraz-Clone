import React from 'react';
import footerlogo from '../assets/footerlogo.png'
const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-[#0f136d] pt-10 pb-6 mt-12 border-t border-gray-200 font-sans">
      <div className="container mx-auto px-4 md:px-10">
        {/* Upper Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          <div>
            <h4 className="text-[16px] font-medium mb-3 text-[#0f136d]">Customer Care</h4>
            <ul className="text-[12px] space-y-1 text-[#0f136d]">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">How to Buy</li>
              <li className="hover:underline cursor-pointer">Corporate & Bulk Purchasing</li>
              <li className="hover:underline cursor-pointer">Returns & Refunds</li>
              <li className="hover:underline cursor-pointer">Daraz Shop</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
              <li className="hover:underline cursor-pointer">Purchase Protection</li>
              <li className="hover:underline cursor-pointer">Daraz Pick up Points</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-medium mb-3 text-[#0f136d]">Daraz</h4>
            <ul className="text-[12px] space-y-1 text-[#0f136d]">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Digital Payments</li>
              <li className="hover:underline cursor-pointer">Daraz Donates</li>
              <li className="hover:underline cursor-pointer">Daraz Blog</li>
              <li className="hover:underline cursor-pointer">Terms & Conditions</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">NTN Number : 4012118-6</li>
              <li className="hover:underline cursor-pointer">Online Shopping App</li>
            </ul>
          </div>

          {/* App Download Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className=" p-2 rounded-lg">
                 <img src={footerlogo} className="w-8 h-8 invert" alt="logo" />
              </div>
              <div>
                <p className="text-[#f85606] text-sm font-bold italic">Happy Shopping</p>
                <p className="text-[#0f136d] text-xs">Download App</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="w-32 cursor-pointer" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="w-32 cursor-pointer" alt="Play Store" />
          </div>
        </div>

        {/* Lower Footer (Payment & Verification) */}
        <div className="border-t border-gray-300 pt-8 flex flex-wrap justify-between items-start gap-8">
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#0f136d]">Payment Methods</h4>
            <div className="flex flex-wrap gap-2">
               {/* Placeholder for Payment Icons from your image */}
               <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
               <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-bold">MASTERCARD</div>
               <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-bold">CASH</div>
               <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-bold">JAZZCASH</div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-[#0f136d]">Verified by</h4>
            <div className="h-8 w-20 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-green-700 italic">
               PCI DSS
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Message Button (Bottom Right) */}
      <div className="fixed bottom-4 right-4 bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer z-[100]">
         <span className="text-[#0f136d] font-semibold text-sm">Messages</span>
      </div>
    </footer>
  );
};

export default Footer;