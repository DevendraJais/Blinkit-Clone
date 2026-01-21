import React from 'react';

const CandiesGumsSlider = () => {
  const products = [
    {
      id: 1,
      name: "Haribo Starmix Candy With Fruit Juice",
      variant: "140 g",
      price: "₹260",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e067603b-5bda-4971-a67f-0c17e97998d3.png",
      hasOffer: false
    },
    {
      id: 2,
      name: "Swad Mixed Fruit Candy",
      variant: "2 x 50 pcs",
      price: "₹200",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d8054f9a-05f8-4047-91f6-e96f6af723ed.png",
      hasOffer: false
    },
    {
      id: 3,
      name: "Gud Gum Natural Sugar Free Chewing Gum",
      variant: "4 x 21 g",
      price: "₹352",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2f20e102-ef13-44ec-bb5c-4294760a7bbf.png",
      hasOffer: false
    },
    {
      id: 4,
      name: "Nature Vit Aam Papad/ Mango Candy",
      variant: "300 g",
      price: "₹250",
      originalPrice: "₹500",
      discount: "50% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f2745605-9e89-42b0-8e27-0c95ac5c244d.png",
      hasOffer: true
    },
    {
      id: 5,
      name: "Nature Vit Paan Flavour Candy",
      variant: "200 g",
      price: "₹179",
      originalPrice: "₹300",
      discount: "40% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c0ca4a61-71cd-442e-b925-fcac53cba139.png",
      hasOffer: true
    },
    {
      id: 6,
      name: "Nature Vit Mix Fruit Candy",
      variant: "200 g",
      price: "₹150",
      originalPrice: "₹300",
      discount: "50% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fb0b7d13-b69d-49c3-8895-fe90ca878c1e.png",
      hasOffer: true
    },
    {
      id: 7,
      name: "Yuvika Dried Indian Gooseberry",
      variant: "100 g",
      price: "₹169",
      originalPrice: "₹299",
      discount: "43% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bff21d08-ad7d-45e7-9f56-4796db7f771d.png",
      hasOffer: true
    },
    {
      id: 8,
      name: "Dry Fruit Hub Aam Papad Mango Slice",
      variant: "400 g",
      price: "₹249",
      originalPrice: "₹450",
      discount: "44% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4fc0acc6-5d29-4cb5-8a09-ab80c9df3045.png",
      hasOffer: true
    },
    {
      id: 9,
      name: "Chaska Bite Aam Chaska Mango Candy",
      variant: "250 g",
      price: "₹195",
      originalPrice: "₹300",
      discount: "35% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/96d19257-23dc-46fb-93a4-cac1e3612b5b.png",
      hasOffer: true
    },
    {
      id: 10,
      name: "Swad Aam Papad Candy",
      variant: "400 g",
      price: "₹449",
      originalPrice: "₹599",
      discount: "25% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3111e367-8856-4509-900f-8c80cdf77114.png",
      hasOffer: true
    },
    {
      id: 11,
      name: "Swad Digestive Candy Jar",
      variant: "200 pcs",
      price: "₹399",
      originalPrice: "₹400",
      discount: "0% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1d9d2910-6212-45a9-948c-5c81a79ec877.png",
      hasOffer: true
    },
    {
      id: 12,
      name: "Swad Mixed Fruit Flavours Candies",
      variant: "200 pcs",
      price: "₹399",
      originalPrice: "₹400",
      discount: "0% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d8054f9a-05f8-4047-91f6-e96f6af723ed.png",
      hasOffer: true
    },
    {
      id: 13,
      name: "Nature Vit Khatti Mithi Orange Candy",
      variant: "200 g",
      price: "₹179",
      originalPrice: "₹300",
      discount: "40% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fb0b7d13-b69d-49c3-8895-fe90ca878c1e.png",
      hasOffer: true
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
                Candies & Gums
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
                  minWidth: '160px'
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

export default CandiesGumsSlider;
