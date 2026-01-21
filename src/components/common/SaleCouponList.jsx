import React from 'react';

const SaleCouponList = () => {
  const saleCoupons = [
    {
      id: 1,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
      alt: "masthead_web_pharma",
      title: "Pharmacy"
    },
    {
      id: 2,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png",
      alt: "masthead_web_pet_care",
      title: "Pet Care"
    },
    {
      id: 3,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png",
      alt: "masthead_web_baby_care",
      title: "Baby Care"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-4 lg:py-6">
      <div className="max-w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {saleCoupons.map((coupon) => (
            <div 
              key={coupon.id}
              className="cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl">
                <img 
                  src={coupon.image}
                  alt={coupon.alt}
                  className="w-full h-auto object-cover"
                  style={{
                    borderRadius: '16px',
                    objectFit: 'cover',
                    maxWidth: '100%'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleCouponList;
