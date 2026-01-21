import React from 'react';

const PromotionalBanner = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full cursor-pointer max-w-full">
        <img 
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg"
          alt="FNV Banner"
          className="w-full h-auto object-cover"
          style={{
            borderRadius: '0px',
            objectFit: 'cover',
            maxWidth: '100%',
            display: 'block'
          }}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default PromotionalBanner;
