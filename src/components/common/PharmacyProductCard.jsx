import React from 'react';

const PharmacyProductCard = ({ product }) => {
  return (
    <div width="200" className="ProductTypeCard__UpdatedProductTypeCardWrapper-sc-1ly7yxv-0 gWtUBI flex-shrink-0 h-full w-40 sm:w-48 md:w-56 lg:w-48 xl:w-56" style={{ border: '1px solid rgb(229, 231, 235)', borderRadius: '8px', overflow: 'hidden', maxWidth: '200px', minWidth: '160px', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px, rgba(0, 0, 0, 0.04) 0px 1px 2px', transform: 'translateZ(0px) perspective(1000px)' }}>
      <div className="Product__UpdatedPlpProductContainer-sc-11dk8zk-0 jHQiaC h-full flex flex-col">
        {/* Discount Badge */}
        {product.hasOffer && (
          <div className="absolute left-3 top-0 z-10 flex items-center justify-center" style={{ position: 'absolute', left: '12px', top: '0px', zIndex: '10' }}>
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#256fef"></path>
            </svg>
            <div className="text-050 absolute z-20 w-5 text-center text-[9px] font-extrabold text-white-900" style={{ color: 'white', position: 'absolute', zIndex: '20', width: '20px', textAlign: 'center', fontSize: '9px', fontWeight: '800' }}>
              {product.discount}
            </div>
          </div>
        )}
        
        {/* Product Image */}
        <div className="Product__UpdatedImageContainer-sc-11dk8zk-3 cVXeYd flex justify-center items-center p-4">
          <div className="Product__UpdatedImage-sc-11dk8zk-4 kBYCan">
            <div width="140" height="140" className="Imagestyles__ImageContainer-sc-1u3ccmn-0 hwWpYo" style={{ height: '140px', width: '140px', cursor: 'default', borderRadius: '0px', maxWidth: '140px', overflow: 'hidden' }}>
              <img alt={product.name} width="140" height="140" loading="lazy" src={product.image} style={{ borderRadius: '0px', objectFit: 'fill', cursor: 'pointer', width: '100%', height: '100%', maxWidth: '140px' }} />
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="Product__UpdatedDetailContainer-sc-11dk8zk-5 gKEEDb flex-1 flex flex-col">
          {/* ETA Badge */}
          <div className="Product__UpdatedETAContainer-sc-11dk8zk-6 iXistr">
            <div style={{ borderRadius: '4px', borderWidth: '0px', padding: '0px 4px', backgroundColor: 'rgb(248, 248, 248)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div style={{ gap: '0.125rem', alignItems: 'center', display: 'flex' }}>
                <div style={{ width: '11px' }}>
                  <div style={{ width: '100%', height: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" style={{ width: '100%', transitionProperty: 'opacity', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '0.15s', opacity: '1', height: '100%' }} />
                  </div>
                </div>
                <div style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '9px', color: 'rgb(54, 54, 54)' }}>
                  {product.eta}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Content */}
          <div className="Product__UpdatedContentContainer-sc-11dk8zk-7 bFNQxb flex-1 flex flex-col" style={{ boxSizing: 'border-box', padding: '0.5rem 0.75rem 1rem', width: '100%' }}>
            {/* Title and Variant */}
            <div className="Product__UpdatedTitleAndVariantContainer-sc-12rhzht-8 gsHPBC flex-1">
              <div className="Product__UpdatedTitle-sc-12rhzht-9 jXMTAi" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.3', fontSize: '14px', color: 'rgb(31, 31, 31)', fontWeight: '500', minHeight: '36px', marginBottom: '8px' }}>
                {product.name}
              </div>
              <div style={{ color: 'rgb(130, 130, 130)', fontWeight: '400', fontSize: '12px', marginBottom: '8px' }}>
                {product.variant}
              </div>
            </div>
            
            {/* Price and Add to Cart */}
            <div className="Product__UpdatedPriceAndAtcContainer-sc-11dk8zk-10 gLcmqU flex items-end justify-between mt-auto">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 1 0%', minWidth: '0px' }}>
                <div style={{ color: 'rgb(31, 31, 31)', fontWeight: '600', fontSize: '12px' }}>
                  {product.price}
                </div>
                <div style={{ color: 'rgb(130, 130, 130)', fontWeight: '400', fontSize: '12px', textDecorationLine: 'line-through' }}>
                  {product.originalPrice}
                </div>
              </div>
              <div className="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 jLeTBR ml-2" style={{ cursor: 'pointer', width: '45px', border: '1px solid rgb(49, 134, 22)', height: '31px', color: 'rgb(49, 134, 22)', fontWeight: '600', fontSize: '13px', fontFamily: 'Okra', backgroundColor: 'rgb(247, 255, 249)', borderRadius: '0.375rem', gap: '0.125rem', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'center', WebkitBoxAlign: 'center', flexShrink: '0' }}>
                ADD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyProductCard;
