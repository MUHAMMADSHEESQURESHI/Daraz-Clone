import React, { useState, useEffect } from 'react';
import { getSingleProduct } from '../api/api';

const ProductDetail = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(productId).then(setProduct);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) return <div className="p-20 text-center text-[#f85606]">Loading...</div>;

  return (
    <div className="bg-[#eff0f5] min-h-screen py-4 px-2">
      <div className="container mx-auto">
        <button onClick={onBack} className="mb-4 text-sm text-gray-600 hover:text-[#f85606]">← Back to Shopping</button>
        <div className="bg-white p-4 md:p-8 flex flex-col md:flex-row gap-8 shadow-sm">
          <div className="w-full md:w-1/3 p-4 border rounded">
            <img src={product.image} alt={product.title} className="w-full h-80 object-contain" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-normal mb-4">{product.title}</h1>
            <div className="text-[#f85606] text-3xl font-medium mb-6">
              Rs. {Math.round(product.price * 280)}
            </div>
            <div className="flex gap-4 mb-8">
              <button className="bg-[#2abbe8] text-white px-8 md:px-14 py-3 rounded-sm">Buy Now</button>
              <button className="bg-[#f85606] text-white px-8 md:px-14 py-3 rounded-sm">Add to Cart</button>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-bold text-gray-700 mb-2">Product Description</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;