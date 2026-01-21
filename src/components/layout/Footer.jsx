import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Useful Links Section */}
          <div className="flex-1">
            <div className="FooterLinks__ListHeading-sc-12rhzht-1 jfUyGl text-lg font-semibold text-gray-900 mb-4">
              Useful Links
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              {/* First Column */}
              <ul type="col" className="FooterLinks__List-sc-12rhzht-2 gxYWei space-y-2">
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/blog" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Privacy
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/terms" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Terms
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/faq" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    FAQs
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/security" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Security
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/contactUs" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Second Column */}
              <ul type="col" className="FooterLinks__List-sc-12rhzht-2 gxYWei space-y-2">
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/partner" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Partner
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/franchise" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Franchise
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/seller" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Seller
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/warehouse-partner" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Warehouse
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/delivery" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Deliver
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/resources" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Resources
                  </a>
                </li>
              </ul>

              {/* Third Column */}
              <ul type="col" className="FooterLinks__List-sc-12rhzht-2 gxYWei space-y-2">
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="/recipes" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Recipes
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="https://bistro.blinkit.com" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    Bistro
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a 
                    href="https://www.district.in/" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    District
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories Section */}
          <div className="flex-1">
            <div className="FooterLinks__HeadingContainer-sc-12rhzht-5 biwbBe flex items-center justify-between mb-4">
              <div className="FooterLinks__ListHeading-sc-12rhzht-1 jfUyGl text-lg font-semibold text-gray-900">
                Categories
              </div>
              <a className="FooterLinks__SeeAll-sc-12rhzht-4 jeIpJS text-green-600 hover:text-green-700 transition-colors text-sm font-medium" href="/categories">
                see all
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              {/* First Column - 10 links */}
              <ul type="col" className="FooterLinks__List-sc-12rhzht-2 lbPrGO space-y-2">
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/fresh-vegetables/cid/1487/1489" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Vegetables &amp; Fruits
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/milk/cid/14/922" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Dairy &amp; Breakfast
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/chips-crisps/cid/1237/940" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Munchies
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/beverages-gift-packs/cid/332/1323" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Cold Drinks &amp; Juices
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/noodles/cid/15/962" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Instant &amp; Frozen Food
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/tea/cid/12/957" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Tea, Coffee &amp; Milk Drinks
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/biscuit-gift-pack/cid/888/2380" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Bakery &amp; Biscuits
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/indian-sweets/cid/9/943" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Sweet Tooth
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/atta/cid/16/1165" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Atta, Rice &amp; Dal
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/oil/cid/1557/917" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Dry Fruits, Masala &amp; Oil
                  </a>
                </li>
              </ul>

              {/* Second Column - 10 links */}
              <ul type="col" className="FooterLinks__List-sc-12rhzht-2 lbPrGO space-y-2">
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/tomato-chilli-ketchup/cid/972/277" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Sauces &amp; Spreads
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/fresh-meat/cid/4/1201" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Chicken, Meat &amp; Fish
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/cigarettes/cid/229/1948" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Paan Corner
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/oil-ghee/cid/175/799" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Organic &amp; Premium
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/diapers-more/cid/7/1000" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Baby Care
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/sexual-wellness/cid/287/741" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Pharma &amp; Wellness
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/fabric-conditioner-additives/cid/18/985" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Cleaning Essentials
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/spiritual-religious-needs/cid/1379/1048" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Home Furnishing &amp; Decor
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/face-body-moisturizers/cid/163/690" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Personal Care
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/accessories-other-supplies/cid/5/3609" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Pet Care
                  </a>
                </li>
              </ul>

              {/* Third Column - 8 links */}
              <ul type="col" className="FooterLinks__List-sc-12rhzht-2 lbPrGO space-y-2">
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/body-skin-care/cid/13/206" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Beauty &amp; Cosmetics
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/current-affairs-business/cid/851/1015" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Magazines
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/juicers-mixers-grinders/cid/8058/1882" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Kitchen &amp; Dining
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/bags/cid/5305/120" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Fashion &amp; Accessories
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/appliances/cid/5159/1886" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Electronics &amp; Electricals
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/arts-crafts/cid/5515/5516" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Stationery Needs
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/activity-books-for-adults/cid/1559/516" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Books
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/action-figures/cid/675/397" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Toys &amp; Games
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/print" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Print Store
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/cn/e-cards/cid/416/4301" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    E-Gift Cards
                  </a>
                </li>
                <li className="FooterLinks__ListItem-sc-12rhzht-3 gSeiIJ">
                  <a href="/dc/?collection_uuid=4981b5da-20ea-439a-bd29-4a13e3b59f82" className="FooterLinkshelpers__FooterLink-sc-f4rm2u-0 text-gray-600 hover:text-green-600 transition-colors text-sm">
                    Rakhi Gifts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="DownloadAndFollowRow__Wrapper-sc-ixdkfr-4 ihQZhT">
            <div className="DownloadAndFollowRow__Grid-sc-ixdkfr-5 gEOXhn flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8" style={{display: 'flex'}}>
              <div className="DownloadAndFollowRow__Item-sc-ixdkfr-3 ejwnoL mb-4 lg:mb-0" style={{display: 'flex', alignItems: 'center'}}>
                <span className="text-sm text-gray-600">&copy; Blink Commerce Private Limited, 2016-2026</span>
              </div>
              <div className="DownloadAndFollowRow__Item-sc-ixdkfr-3 kPSEib flex flex-col lg:flex-row items-center gap-4 lg:gap-6" style={{display: 'flex', alignItems: 'center'}}>
                <div className="DownloadAndFollowRow__Font-sc-ixdkfr-0 hzNCUR text-sm font-medium text-gray-900 mb-2 lg:mb-0">Download App</div>
                <div className="DownloadAndFollowRow__Flex-sc-ixdkfr-1 fWaVPc flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-4" style={{display: 'flex', alignItems: 'center'}}>
                  <div className="Imagestyles__ImageContainer-sc-1u3ccmn-0 iNFuxY flex-shrink-0" style={{display: 'flex', alignItems: 'center'}}>
                    <img 
                      src="https://blinkit.com/d61019073b700ca49d22.png" 
                      alt="App Store" 
                      width="92" 
                      height="30" 
                      loading="lazy" 
                      style={{borderRadius: '4px', objectFit: 'contain', cursor: 'pointer'}} 
                    />
                  </div>
                  <div className="Imagestyles__ImageContainer-sc-1u3ccmn-0 iNFuxY flex-shrink-0" style={{display: 'flex', alignItems: 'center'}}>
                    <img 
                      src="https://blinkit.com/8ed033800ea38f24c4f0.png" 
                      alt="Play Store" 
                      width="92" 
                      height="30" 
                      loading="lazy" 
                      style={{borderRadius: '4px', objectFit: 'contain', cursor: 'pointer'}} 
                    />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="DownloadAndFollowRow__SocialIcon-sc-ixdkfr-2 bZfEex hover:opacity-80 transition-opacity" style={{display: 'flex'}}>
                      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" fill="white"></rect>
                        <path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path>
                      </svg>
                    </div>
                    <div className="DownloadAndFollowRow__SocialIcon-sc-ixdkfr-2 bZfEex hover:opacity-80 transition-opacity" style={{display: 'flex'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
                        <circle cx="25" cy="25" r="25" fill="black"></circle>
                        <path d="M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" fill="white"></path>
                      </svg>
                    </div>
                    <div className="DownloadAndFollowRow__SocialIcon-sc-ixdkfr-2 bZfEex hover:opacity-80 transition-opacity" style={{display: 'flex'}}>
                      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6973_248115)">
                          <rect width="100" height="100" rx="50" fill="white"></rect>
                          <path d="M49.5935 59.3496C54.5326 59.3496 58.5366 55.3456 58.5366 50.4065C58.5366 45.4674 54.5326 41.4634 49.5935 41.4634C44.6544 41.4634 40.6504 45.4674 40.6504 50.4065C40.6504 55.3456 44.6544 59.3496 49.5935 59.3496Z" fill="#1F1F1F"></path>
                          <path d="M60.7724 28.4553H38.4146C35.1626 28.4553 32.3171 29.4716 30.4878 31.3008C28.6585 33.1301 27.6423 35.9756 27.6423 39.2276V61.5854C27.6423 64.8374 28.6585 67.6829 30.6911 69.7155C32.7236 71.5447 35.3659 72.561 38.6179 72.561H60.7724C64.0244 72.561 66.8699 71.5447 68.6992 69.7155C70.7317 67.8862 71.748 65.0407 71.748 61.7886V39.4309C71.748 36.1789 70.7317 33.5366 68.9024 31.5041C66.8699 29.4716 64.2276 28.4553 60.7724 28.4553ZM49.5935 64.2276C41.8699 64.2276 35.7724 57.9268 35.7724 50.4065C35.7724 42.6829 42.0732 36.5854 49.5935 36.5854C57.1138 36.5854 63.6179 42.6829 63.6179 50.4065C63.6179 58.1301 57.3171 64.2276 49.5935 64.2276ZM64.0244 39.2276C62.1951 39.2276 60.7724 37.8049 60.7724 35.9756C60.7724 34.1463 62.1951 32.7236 64.0244 32.7236C65.8537 32.7236 67.2764 34.1463 67.2764 35.9756C67.2764 37.8049 65.8537 39.2276 64.0244 39.2276Z" fill="#1F1F1F"></path>
                          <path d="M50 0C22.3577 0 0 22.3577 0 50C0 77.6423 22.3577 100 50 100C77.6423 100 100 77.6423 100 50C100.203 22.3577 77.6423 0 50 0ZM76.626 61.7886C76.626 66.4634 75 70.5285 72.1545 73.374C69.3089 76.2195 65.2439 77.6423 60.7724 77.6423H38.6179C34.1463 77.6423 30.0813 76.2195 27.2358 73.374C24.187 70.5285 22.7642 66.4634 22.7642 61.7886V39.4309C22.7642 30.0813 29.065 23.5772 38.6179 23.5772H60.9756C65.6504 23.5772 69.5122 25.2033 72.3577 28.0488C75.2032 30.8943 76.626 34.7561 76.626 39.4309V61.7886V61.7886Z" fill="#1F1F1F"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_6973_248115">
                            <rect width="100" height="100" rx="50" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="DownloadAndFollowRow__SocialIcon-sc-ixdkfr-2 bZfEex hover:opacity-80 transition-opacity" style={{display: 'flex'}}>
                      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" fill="#1F1F1F"></rect>
                        <path d="M38.5 37.5H28V72H38.5V37.5Z" fill="white"></path>
                        <path d="M64.0045 37.5C58 37.5 56.335 39.468 55 42V37.5H44.5V72H55V52.5C55 49.5 55 46.5 60.25 46.5C65.5 46.5 65.5 49.5 65.5 52.5V72H76V52.5C76 43.5 74.5 37.5 64.0045 37.5Z" fill="white"></path>
                        <path d="M33.25 34.5C36.1495 34.5 38.5 32.1495 38.5 29.25C38.5 26.3505 36.1495 24 33.25 24C30.3505 24 28 26.3505 28 29.25C28 32.1495 30.3505 34.5 33.25 34.5Z" fill="white"></path>
                      </svg>
                    </div>
                    <div className="DownloadAndFollowRow__SocialIcon-sc-ixdkfr-2 bZfEex hover:opacity-80 transition-opacity" style={{display: 'flex'}}>
                      <img 
                        src="https://blinkit.com/f01e50d66f4eddb1a1da.svg" 
                        alt="Social Media" 
                        style={{width: '40px', height: '40px', borderRadius: '50%', display: 'flex', cursor: 'pointer'}} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
