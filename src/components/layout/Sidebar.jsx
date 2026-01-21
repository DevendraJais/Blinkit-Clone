import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const categories = [
    {
      name: "Fruits & Vegetables",
      items: ["Fresh Fruits", "Fresh Vegetables", "Herbs & Seasonings", "Organic Produce"],
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Dairy & Bakery",
      items: ["Milk & Dairy", "Bread & Buns", "Cookies & Rusk", "Cakes & Pastries"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Staples",
      items: ["Atta & Flours", "Rice & Grains", "Pulses & Lentils", "Oils & Ghee"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Snacks & Branded Foods",
      items: ["Chips & Namkeens", "Biscuits & Cookies", "Noodles & Pasta", "Breakfast Cereals"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Beverages",
      items: ["Tea & Coffee", "Fruit Juices", "Soft Drinks", "Energy Drinks"],
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Personal Care",
      items: ["Hair Care", "Skin Care", "Oral Care", "Bath & Body"],
      color: "bg-pink-100 text-pink-800"
    },
    {
      name: "Home Care",
      items: ["Detergents", "Dishwash", "All Purpose Cleaners", "Fresheners & Repellents"],
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      name: "Baby Care",
      items: ["Diapers & Wipes", "Baby Food", "Baby Bath & Hygiene", "Baby Health Care"],
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <div className="hidden lg:block w-64 bg-white border-r border-gray-200 h-full sticky top-16">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <nav className="space-y-1">
          {categories.map((category, index) => (
            <div key={index} className="group">
              <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200">
                <span className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${category.color}`}>
                    {category.name.split(' ')[0]}
                  </span>
                  <span>{category.name}</span>
                </span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
              </button>
              
              {/* Submenu - shown on hover */}
              <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="p-2">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary-600 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
        
        {/* Offers Section */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white">
          <h3 className="font-semibold mb-2">Special Offers!</h3>
          <p className="text-sm mb-3">Get up to 50% off on selected items</p>
          <button className="w-full bg-white text-primary-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            View All Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
