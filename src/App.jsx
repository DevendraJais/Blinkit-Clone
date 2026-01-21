import React from 'react';
import Header from './components/layout/Header';
import PromotionalBanner from './components/common/PromotionalBanner';
import SaleCouponList from './components/common/SaleCouponList';
import CategoryGrid from './components/common/CategoryGrid';
import ProductSlider from './components/common/ProductSlider';
import RollingPaperProductSlider from './components/common/RollingPaperProductSlider';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 sm:pt-18 md:pt-20">
        <PromotionalBanner />
        
        {/* Sale Coupon List - Multiple promotional banners */}
        <SaleCouponList />

        {/* Category Grid - All categories like Blinkit */}
        <CategoryGrid />

        {/* Product Slider - Dairy, Bread & Eggs */}
        <ProductSlider title="Dairy, Bread & Eggs" />
        
        {/* Rolling Paper & Tobacco Section */}
        <RollingPaperProductSlider />
      </main>
    </div>
  );
}

export default App;
