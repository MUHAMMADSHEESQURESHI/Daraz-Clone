import React, { useState, useEffect } from 'react';
import ProductCard from '../components/product/ProuductCard';
import { getProducts } from '../api/api';
import banner from '../assets/banner.avif'
const LandingPage = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
 <div className="bg-[#eff0f5] min-h-screen">
  
      <div className="container mx-auto py-4 px-2">
        {/* Simple Daraz Banner */}
        <div className="flex gap-3 h-[340px]">
          {/* Main Slider */}
          <div className="flex-1 rounded-sm overflow-hidden relative group">
            <img 
              src={banner} 
              className="w-full h-full object-cover" 
              alt="Daraz Banner" 
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-[#f85606]' : 'bg-white opacity-50'}`}></div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Exact Match to Screenshot */}
          <div className="w-[200px] bg-white border border-gray-100 p-3 hidden lg:block rounded-sm shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1_as_ay67gK0jSZFHXXa9jVXa-660-660.png" className="w-6 h-6" alt="app-logo" />
              <span className="text-[11px] font-bold text-[#f85606]">TRY DARAZ APP</span>
            </div>
            <div className="bg-orange-50 p-2 rounded text-[10px] text-orange-600 mb-3 font-semibold text-center leading-tight italic">
              ⭐ 4.8 Rated<br/>Download the App now
            </div>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Daraz" 
              className="w-20 mx-auto mb-4 grayscale opacity-60" 
              alt="qr-code" 
            />
            <div className="flex flex-col gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-7 w-full object-contain cursor-pointer" alt="app-store" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-7 w-full object-contain cursor-pointer" alt="play-store" />
            </div>
          </div>
        </div>
        </div>

        <h2 className="text-lg font-medium mb-4 text-gray-700">Just For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onClick={onProductSelect} />
          ))}
        </div>
      </div>
   
  );
};

export default LandingPage;