import React from 'react';
import { ArrowRight, Clock, Truck } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Groceries delivered in
                <span className="text-yellow-400 block sm:inline"> 10 minutes</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-100">
                Fresh fruits, vegetables, dairy, and more at your doorstep
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Order Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                View Menu
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 pt-2 lg:pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm lg:text-base">10-Min Delivery</p>
                  <p className="text-xs lg:text-sm text-primary-100">Lightning fast</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Truck className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm lg:text-base">Free Delivery</p>
                  <p className="text-xs lg:text-sm text-primary-100">Above ₹500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <span className="text-lg lg:text-xl">🌟</span>
                </div>
                <div>
                  <p className="font-semibold text-sm lg:text-base">Best Quality</p>
                  <p className="text-xs lg:text-sm text-primary-100">Fresh products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8">
              <img 
                src="https://via.placeholder.com/500x400/ffffff/ef4444?text=Delivery+Illustration"
                alt="Grocery Delivery"
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-2 lg:top-4 right-2 lg:right-4 bg-yellow-400 text-gray-900 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold">
              HOT DEAL 🔥
            </div>
            <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 bg-green-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold">
              FRESH DAILY 🥬
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
