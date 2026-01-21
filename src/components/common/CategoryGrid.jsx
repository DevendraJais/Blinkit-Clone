import React from 'react';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
      alt: "1 - Paan Corner",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 2,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
      alt: "2 - Dairy, Bread & Eggs",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 3,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
      alt: "3 - Fruits & Vegetables",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 4,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
      alt: "4 - Cold Drinks & Juices",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 5,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
      alt: "5 - Snacks & Munchies",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 6,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
      alt: "6 - Breakfast & Instant Food",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 7,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
      alt: "7 - Sweet Tooth",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 8,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
      alt: "8 - Bakery & Biscuits",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 9,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png",
      alt: "9 - Tea, Coffee & Health Drink",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 10,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
      alt: "10 - Atta, Rice & Dal",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 11,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png",
      alt: "11 - Masala, Oil & More",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 12,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png",
      alt: "12 - Sauces & Spreads",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 13,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png",
      alt: "13 - Chicken, Meat & Fish",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 14,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png",
      alt: "14 - Organic & Healthy Living",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 15,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png",
      alt: "15 - Baby Care",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 16,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png",
      alt: "16 - Pharma & Wellness",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 17,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
      alt: "17 - Cleaning Essentials",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 18,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png",
      alt: "18 - Home & Office",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 19,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png",
      alt: "19 - Personal Care",
      width: 128,
      height: 188.23529411764704
    },
    {
      id: 20,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png",
      alt: "20 - Pet Care",
      width: 128,
      height: 188.23529411764704
    }
  ];

  return (
    <div className="widgets__Container-sc-1aj45no-0 ekKZyU py-4 lg:py-6">
      <div type="52" className="widgets__WidgetContainer-sc-1aj45no-1 gHXgRz">
        <div className="MultiImage__MultiImageContainer-sc-o0ozdb-0 YgniS">
          <div className="MultiImage__Grid-sc-o0ozdb-2 dNVFIP">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 max-w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  width={category.width}
                  height={category.height}
                  className="Imagestyles__ImageContainer-sc-1u3ccmn-0 fKqXrB cursor-pointer overflow-hidden justify-self-center"
                  style={{
                    maxWidth: '128px',
                    width: '100%'
                  }}
                >
                  <img 
                    src={category.image}
                    alt={category.alt}
                    width={category.width}
                    height={category.height}
                    loading="lazy"
                    style={{
                      borderRadius: '0px',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      width: '100%',
                      height: 'auto',
                      maxWidth: '128px'
                    }}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
