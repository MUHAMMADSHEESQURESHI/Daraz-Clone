import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick(product.id)}
      className="bg-white hover:shadow-lg transition-all cursor-pointer rounded-sm overflow-hidden flex flex-col h-full group border border-transparent hover:border-gray-200"
    >
      <div className="h-40 md:h-48 w-full p-4">
        <img src={product.image} alt={product.title} className="h-full w-full object-contain mx-auto transition-transform group-hover:scale-105" />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-xs md:text-sm line-clamp-2 mb-2 text-gray-800">{product.title}</h3>
        <p className="text-[#f85606] text-base md:text-lg font-semibold mt-auto">Rs. {Math.round(product.price * 280)}</p>
        <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400">
           <span>⭐ {product.rating.rate}</span>
           <span>({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;