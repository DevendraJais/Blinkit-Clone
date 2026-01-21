import React from 'react';
import Header from './components/layout/Header';
import PromotionalBanner from './components/common/PromotionalBanner';
import SaleCouponList from './components/common/SaleCouponList';
import CategoryGrid from './components/common/CategoryGrid';
import ProductSlider from './components/common/ProductSlider';
import RollingPaperProductSlider from './components/common/RollingPaperProductSlider';
import SnacksMunchiesSlider from './components/common/SnacksMunchiesSlider';
import HookahProductSlider from './components/common/HookahProductSlider';
import MouthFreshenersSlider from './components/common/MouthFreshenersSlider';
import ColdDrinksJuicesSlider from './components/common/ColdDrinksJuicesSlider';
import CandiesGumsSlider from './components/common/CandiesGumsSlider';
import Footer from './components/layout/Footer';

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
        
        {/* Snacks & Munchies Section */}
        <SnacksMunchiesSlider />
        
        {/* Hookah Section */}
        <HookahProductSlider />
        
        {/* Mouth Fresheners Section */}
        <MouthFreshenersSlider />
        
        {/* Cold Drinks & Juices Section */}
        <ColdDrinksJuicesSlider />
        
        {/* Candies & Gums Section */}
        <CandiesGumsSlider />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
