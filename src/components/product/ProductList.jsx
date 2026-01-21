import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Filter, Grid, List } from 'lucide-react';

const ProductList = ({ products, title }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'priceLow', label: 'Price: Low to High' },
    { value: 'priceHigh', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' },
    { value: 'discount', label: 'Discount' }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'priceLow':
        return a.price - b.price;
      case 'priceHigh':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'discount':
        const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
        const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
        return discountB - discountA;
      default:
        return 0;
    }
  });

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-3 lg:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-600 mt-1">
              {products.length} products found
            </p>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 lg:px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-0 flex-shrink-0"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 lg:p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'} rounded-l-lg transition-colors`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 lg:p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'} rounded-r-lg transition-colors`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="p-3 lg:p-4">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4'
              : 'space-y-3 lg:space-y-4'
          }>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Load More */}
      {sortedProducts.length > 0 && (
        <div className="p-3 lg:p-4 text-center">
          <button className="bg-primary-600 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm lg:text-base">
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
