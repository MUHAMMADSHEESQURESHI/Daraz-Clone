import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#eff0f5]">
      <Navbar />
      
      <main className="grow">
        {selectedProductId ? (
          <ProductDetail 
            productId={selectedProductId} 
            onBack={() => setSelectedProductId(null)} 
          />
        ) : (
          <LandingPage onProductSelect={(id) => setSelectedProductId(id)} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;