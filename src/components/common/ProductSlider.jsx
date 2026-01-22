import React from 'react';

const ProductSlider = ({ title }) => {
  const products = [
    {
      id: 1,
      name: "The Cinnamon Kitchen Cacao, Almond & Berry Rocks Dark Chocolate",
      variant: "50 g",
      price: "₹189",
      originalPrice: "₹210",
      discount: "10% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8f8a93dc-db44-498f-9fae-81ab0ff658da.png",
      hasOffer: true
    },
    {
      id: 2,
      name: "Cremeitalia Cream Cheese",
      variant: "200 g",
      price: "₹289",
      originalPrice: "₹310",
      discount: "6% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bb9464ff-8ffb-4a8d-8306-cf78a2f85c80.png",
      hasOffer: true
    },
    {
      id: 3,
      name: "The Cinnamon Kitchen Sugar-Free Cacao & Berry Rocks Dark Chocolate",
      variant: "50 g",
      price: "₹259",
      originalPrice: "₹285",
      discount: "9% OFF",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/076a5684-8206-48cc-b730-e1c7fe05e5df.png",
      hasOffer: true
    },
    {
      id: 4,
      name: "Kraft Parmesan Grated Cheese",
      variant: "85 g",
      price: "₹649",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3c202ae1-62b7-4789-8876-4800783351b5.png",
      hasOffer: false
    },
    {
      id: 5,
      name: "Old Hill Parmesan Cheese Block",
      variant: "200 g",
      price: "₹555",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cbe0c21d-907e-434b-a815-725fd2869789.png",
      hasOffer: false
    },
    {
      id: 6,
      name: "The Baker's Dozen Rich Chocolate Pound Cake",
      variant: "150 g",
      price: "₹163",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3160c376-c07e-441c-afb8-195eb51a1cc4.png",
      hasOffer: false
    },
    {
      id: 7,
      name: "The Baker's Dozen High Protein Peanut Butter Cookies",
      variant: "150 g",
      price: "₹185",
      originalPrice: null,
      discount: null,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b0f2413b-4082-4703-8de5-94cead0d21ff.png",
      hasOffer: false
    }
  ];

  return (
    <div className="widgets__Container-sc-1aj45no-0 hkfraU">
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
                {title}
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
                  <div className="Product__UpdatedPlpProductContainer-sc-11dk8zk-0 jHQiaC h-full flex flex-col">
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
                              10 mins
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

export default ProductSlider;
