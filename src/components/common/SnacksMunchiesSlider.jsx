import React from 'react';

const SnacksMunchiesSlider = () => {
  const products = [
    {
      id: 1,
      name: "Cheetos Flamin' Hot Limon Crunchy Crisps",
      variant: "28.3 g",
      price: "₹210",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/92164819-7277-49ce-9f10-0f18dacd311e.png",
      hasOffer: false
    },
    {
      id: 2,
      name: "Kettle Studio Tabasco Sauce Flavour Potato Chips",
      variant: "113 g",
      price: "₹99",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/65ad539e-1799-4106-a713-fa486c28d965.png",
      hasOffer: false
    },
    {
      id: 3,
      name: "Kettle Studio Homestyle Potato Crisps - Lime & Chilli",
      variant: "125 g",
      price: "₹99",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/de4113ad-02c0-462d-a7e7-dbdd34846d6d.png",
      hasOffer: false
    },
    {
      id: 4,
      name: "Nongshim Shrimp Flavoured Crackers Chips",
      variant: "75 g",
      price: "₹128",
      originalPrice: "₹139",
      discount: "7% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1ae5178b-a790-4ba6-bf12-d1bf355ec09d.png",
      hasOffer: true
    },
    {
      id: 5,
      name: "The Cinnamon Kitchen Methi Milet Crackers",
      variant: "100 g",
      price: "₹129",
      originalPrice: "₹150",
      discount: "14% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ba639d85-0988-4b70-80fd-16a9afda993d.png",
      hasOffer: true
    },
    {
      id: 6,
      name: "Kettle Studio Lightly Salted Wafers",
      variant: "150 g",
      price: "₹80",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2ccf2e15-eb41-41f0-b05e-bf4aa837518b.png",
      hasOffer: false
    },
    {
      id: 7,
      name: "Kettle Studio Lime & Chilli Wafers",
      variant: "140 g",
      price: "₹80",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2ccf2e15-eb41-41f0-b05e-bf4aa837518b.png",
      hasOffer: false
    },
    {
      id: 8,
      name: "Cheetos Smartfood Flamin Hot Flavoured Popcorn",
      variant: "14.1 g",
      price: "₹210",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/92164819-7277-49ce-9f10-0f18dacd311e.png",
      hasOffer: false
    },
    {
      id: 9,
      name: "Bika Honey Prawn Flavoured Munchies",
      variant: "60 g",
      price: "₹90",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/65ad539e-1799-4106-a713-fa486c28d965.png",
      hasOffer: false
    },
    {
      id: 10,
      name: "GetKrrackin Sourdough Garlic Bread Flavour Crackers",
      variant: "150 g",
      price: "₹299",
      originalPrice: "₹311",
      discount: "4% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/de4113ad-02c0-462d-a7e7-dbdd34846d6d.png",
      hasOffer: true
    },
    {
      id: 11,
      name: "Kab's Jackpot Potato Stix Munchies (Aloo Chaat)",
      variant: "50 g",
      price: "₹65",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1ae5178b-a790-4ba6-bf12-d1bf355ec09d.png",
      hasOffer: false
    },
    {
      id: 12,
      name: "Bika Honey Crab Flavoured Munchies",
      variant: "60 g",
      price: "₹100",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ba639d85-0988-4b70-80fd-16a9afda993d.png",
      hasOffer: false
    },
    {
      id: 13,
      name: "Kab's Jackpot Crispy Potato Crackers (Hot & Spicy)",
      variant: "50 g",
      price: "₹65",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2ccf2e15-eb41-41f0-b05e-bf4aa837518b.png",
      hasOffer: false
    },
    {
      id: 14,
      name: "Kepps Cheddar Jowar Puffs",
      variant: "70 g",
      price: "₹119",
      originalPrice: "₹160",
      discount: "25% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/174e703b-cae0-4a22-83de-2edde44b9cb8.png",
      hasOffer: true
    },
    {
      id: 15,
      name: "Nongshim Onion Ring Puffs",
      variant: "50 g",
      price: "₹125",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b08bdf74-16c4-472b-ac65-651b1580b20f.png",
      hasOffer: false
    }
  ];

  return (
    <div className="widgets__Container-sc-1aj45no-0 hkfraU mt-8">
      <div type="77" className="widgets__WidgetContainer-sc-1aj45no-1 gAPTRP">
        <div className="SliderProductHeader__Container-sc-1akjuw0-0 keHQWU">
          <div className="SliderProductHeader__HeaderStripContainer-sc-1akjuw0-1 foXrGE flex items-center justify-between">
            <div className="SliderProductHeader__HeaderContainer-sc-1akjuw0-4 fEGBQG">
              <div 
                className="SliderProductHeader__Heading-sc-1akjuw0-5 jRKLeF"
                style={{
                  color: '#1c1c1c',
                  fontSize: '24px',
                  fontFamily: "'Okra-Medium', sans-serif",
                  fontWeight: '600',
                  lineHeight: '32px'
                }}
              >
                Snacks & Munchies
              </div>
            </div>
            <div className="SliderProductHeader__TextButtonContainer-sc-1akjuw0-2 kzVNbK">
              <div className="SliderProductHeader__ButtonText-sc-1akjuw0-3 eIGyZV cursor-pointer text-green-600 hover:text-green-700 transition-colors font-medium">
                see all
              </div>
            </div>
        </div>
      </div>
      
      <div className="SliderProductList__Wrapper-sc-14wck6y-0 evMhyw">
        <div className="SliderProductList__Container-sc-14wck6y-1 fQqwxr">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 px-4 sm:px-6 lg:px-8 pt-4 pb-6" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: 'none'
          }}>
            {products.map((product) => (
              <div key={product.id} width="200" className="ProductTypeCard__UpdatedProductTypeCardWrapper-sc-1ly7yxv-0 gWtUBI flex-shrink-0 h-full w-40 sm:w-48 md:w-56 lg:w-48 xl:w-56" style={{
                border: '1px solid rgb(229, 231, 235)',
                borderRadius: '8px',
                overflow: 'hidden',
                maxWidth: '200px',
                minWidth: '160px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                transform: 'translateZ(0) perspective(1000px)'
              }}>
                <div className="Product__UpdatedPlpProductContainer-sc-11dk8zk-0 jHQiaC h-full flex flex-col relative">
                  {/* Offer Badge */}
                  {product.hasOffer && (
                    <div className="Product__UpdatedOfferContainer-sc-11dk8zk-1 hMsdbb absolute top-2 left-2 z-10">
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path>
                      </svg>
                      <div className="Product__UpdatedOfferTitle-sc-11dk8zk-2 jYYtXR absolute top-1 left-1 text-white text-xs font-bold">
                        {product.discount}
                      </div>
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <div className="Product__UpdatedImageContainer-sc-11dk8zk-3 cVXeYd flex justify-center items-center p-4">
                    <div className="Product__UpdatedImage-sc-11dk8zk-4 kBYCan">
                      <div width="140" height="140" className="Imagestyles__ImageContainer-sc-1u3ccmn-0 hwWpYo" style={{
                        height: '140px',
                        width: '140px',
                        cursor: 'default',
                        borderRadius: '0',
                        maxWidth: '140px',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={product.image}
                          alt={product.name}
                          width="140"
                          height="140"
                          loading="lazy"
                          style={{
                            borderRadius: '0px',
                            objectFit: 'fill',
                            cursor: 'pointer',
                            width: '100%',
                            height: '100%',
                            maxWidth: '140px'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="Product__UpdatedDetailContainer-sc-11dk8zk-5 gKEEDb flex-1 flex flex-col">
                    {/* ETA Badge */}
                    <div className="Product__UpdatedETAContainer-sc-11dk8zk-6 iXistr">
                      <div style={{
                        borderRadius: '4px',
                        borderWidth: '0px',
                        padding: '0px 4px',
                        backgroundColor: 'rgb(248, 248, 248)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                      }}>
                        <div style={{
                          gap: '0.125rem',
                          alignItems: 'center',
                          display: 'flex'
                        }}>
                          <div style={{ width: '11px' }}>
                            <div style={{
                              width: '100%',
                              height: '100%',
                              aspectRatio: '1 / 1',
                              overflow: 'hidden'
                            }}>
                              <img 
                                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                                style={{
                                  width: '100%',
                                  transitionProperty: 'opacity',
                                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                  transitionDuration: '0.15s',
                                  opacity: '1',
                                  height: '100%'
                                }}
                              />
                            </div>
                          </div>
                          <div style={{
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            fontSize: '9px',
                            color: 'rgb(54, 54, 54)'
                          }}>
                              8 mins
                            </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Content */}
                    <div className="Product__UpdatedContentContainer-sc-11dk8zk-7 bFNQxb flex-1 flex flex-col" style={{
                      boxSizing: 'border-box',
                      paddingLeft: '0.75rem',
                      paddingRight: '0.75rem',
                      paddingTop: '0.5rem',
                      paddingBottom: '1rem',
                      width: '100%'
                    }}>
                      <div className="Product__UpdatedTitleAndVariantContainer-sc-11dk8zk-8 gsHPBC flex-1">
                        <div className="Product__UpdatedTitle-sc-11dk8zk-9 jXMTAi" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          lineHeight: '1.3',
                          fontSize: '14px',
                          color: 'rgb(31, 31, 31)',
                          fontWeight: '500',
                          minHeight: '36px',
                          marginBottom: '8px'
                        }}>
                          {product.name}
                        </div>
                        <div style={{
                          alignItems: 'center',
                          display: 'flex',
                          height: '26px',
                          width: '100%'
                        }}>
                          <span className="bff_variant_text_only plp-product__quantity--box" style={{
                            height: '13px',
                            display: '-webkit-box',
                            WebkitLineClamp: '1',
                            WebkitBoxOrient: 'vertical',
                            fontSize: '12px',
                            color: 'rgb(75, 85, 99)'
                          }}>
                            {product.variant}
                          </span>
                        </div>
                      </div>
                      
                      {/* Price and Add to Cart */}
                      <div className="Product__UpdatedPriceAndAtcContainer-sc-11dk8zk-10 gLcmqU flex items-end justify-between mt-auto">
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                          flex: '1',
                          minWidth: '0'
                        }}>
                          <div style={{
                            color: 'rgb(31, 31, 31)',
                            fontWeight: '600',
                            fontSize: '12px'
                          }}>
                            {product.price}
                          </div>
                          {product.originalPrice && (
                            <div style={{
                              color: 'rgb(130, 130, 130)',
                              fontWeight: '400',
                              fontSize: '12px',
                              textDecorationLine: 'line-through'
                            }}>
                              {product.originalPrice}
                            </div>
                          )}
                        </div>
                        <div className="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 jLeTBR ml-2" style={{
                          cursor: 'pointer',
                          width: '45px',
                          border: '1px solid',
                          height: '31px',
                          color: 'rgb(49 134 22)',
                          fontWeight: '600',
                          fontSize: '13px',
                          fontFamily: 'Okra',
                          backgroundColor: 'rgb(247 255 249)',
                          borderColor: 'rgb(49 134 22)',
                          borderRadius: '0.375rem',
                          gap: '0.125rem',
                          display: '-webkit-box',
                          display: '-webkit-flex',
                          display: '-ms-flexbox',
                          display: 'flex',
                          WebkitBoxPack: 'center',
                          WebkitJustifyContent: 'center',
                          msFlexPack: 'center',
                          justifyContent: 'center',
                          WebkitAlignItems: 'center',
                          WebkitBoxAlign: 'center',
                          msFlexAlign: 'center',
                          alignItems: 'center',
                          flexShrink: '0'
                        }}>
                          ADD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnacksMunchiesSlider;
