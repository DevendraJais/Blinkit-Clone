import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square p-3 lg:p-4 bg-gray-50 rounded-t-lg flex items-center justify-center">
          <img 
            src={product.image || 'https://via.placeholder.com/200x200/f3f4f6/9ca3af?text=Product'} 
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Quick Actions on Hover */}
        {isHovered && (
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button className="bg-white p-1.5 lg:p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Star className="h-3 w-3 lg:h-4 lg:w-4 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      <div className="p-3 lg:p-4">
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        {/* Quantity/Size */}
        <p className="text-xs text-gray-500 mb-2">
          {product.quantity || product.size || '1 piece'}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating || 0) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            ({product.reviews || 0})
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-base lg:text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs lg:text-sm text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary-600 text-white py-2 lg:py-2.5 px-3 lg:px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base font-medium"
          >
            <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4" />
            <span>Add</span>
          </button>
        ) : (
          <div className="flex items-center justify-between bg-primary-600 text-white rounded-lg">
            <button
              onClick={handleDecreaseQuantity}
              className="p-1.5 lg:p-2 hover:bg-primary-700 rounded-l-lg transition-colors"
            >
              <Minus className="h-3 w-3 lg:h-4 lg:w-4" />
            </button>
            <span className="font-medium text-sm lg:text-base px-2">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="p-1.5 lg:p-2 hover:bg-primary-700 rounded-r-lg transition-colors"
            >
              <Plus className="h-3 w-3 lg:h-4 lg:w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
