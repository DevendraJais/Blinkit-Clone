import React from 'react';

const ProductSectionHeader = ({ title }) => {
  return (
    <div className="SliderProductHeader__HeaderContainer-sc-1akjuw0-4 fEGBQG py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="SliderProductHeader__Heading-sc-1akjuw0-5 jRKLeF text-2xl lg:text-3xl font-bold text-gray-900">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProductSectionHeader;
