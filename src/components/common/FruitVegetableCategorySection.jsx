import React, { useState } from 'react';
import FruitVegetableProductCard from './FruitVegetableProductCard';

const FruitVegetableCategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('fresh-vegetables');

  const categories = [
    {
      id: 'fresh-vegetables',
      name: 'Fresh Vegetables',
      image: 'http://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702463308432-3',
      isActive: true
    },
    {
      id: 'fresh-fruits',
      name: 'Fresh Fruits',
      image: 'http://cdn.grofers.com/app/images/collections/groupings/grouping_asset_apple_1767792472422',
      isActive: false
    },
    {
      id: 'exotics',
      name: 'Exotics',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/278_1678705041060.png',
      isActive: false
    },
    {
      id: 'seasonal',
      name: 'Seasonal',
      image: 'http://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702734004998-3',
      isActive: false
    },
    {
      id: 'trusted-organic',
      name: 'Trusted Organic',
      image: 'http://cdn.grofers.com/app/images/category/cms_images/e953c670-78ef-4929-b8b5-0e97a79a5f25.',
      isActive: false
    },
    {
      id: 'leafies-herbs',
      name: 'Leafies & Herbs',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/66acfb51-c5fe-4718-a200-61efaf773556.png',
      isActive: false
    },
    {
      id: 'eggs',
      name: 'Eggs',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1200_1657599895699.png',
      isActive: false
    },
    {
      id: 'milk',
      name: 'Milk',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/922_1643384380004.png',
      isActive: false
    }
  ];

  const vegetableProducts = [
    {
      id: '530158',
      name: 'Onion (Pyaz)',
      variant: '1 kg',
      price: '₹31',
      originalPrice: '₹38',
      discount: '18% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f53c1ea1-cfa0-438b-a14c-b4f5ebeed7dd.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '3889',
      name: 'Coriander Bunch (Dhaniya Patta)',
      variant: '100 g',
      price: '₹1',
      originalPrice: '₹7',
      discount: '85% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/cc8401ed-66f1-4d31-9e89-d5eace0a9665.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '423735',
      name: 'Green Chilli (Hari Mirch)',
      variant: '100 g',
      price: '₹13',
      originalPrice: '₹15',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9b4cd95e-3f9e-4305-92a0-16d9875c6b4d.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '95032',
      name: 'Ginger (Adrak)',
      variant: '200 g',
      price: '₹27',
      originalPrice: '₹32',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/e7c9461c-4a81-46cc-8215-5f9155026a6e.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '339153',
      name: 'Cauliflower (Phool Gobhi)',
      variant: '400 g',
      price: '₹27',
      originalPrice: '₹31',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9cb3146c-eaf7-434d-9743-99708a9d9b15.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '344277',
      name: 'Red Carrot - 500 g (Gajar)',
      variant: '500 g',
      price: '₹16',
      originalPrice: '₹19',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/fb326622-ff7c-4c01-8705-778e458b67fe.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '199435',
      name: 'Potato - New Crop (Aloo)',
      variant: '1 kg',
      price: '₹17',
      originalPrice: '₹25',
      discount: '32% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/097061a9-9b7e-4d7e-88d1-4e3f58fc51e0.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '229627',
      name: 'Lemon',
      variant: '200 g',
      price: '₹21',
      originalPrice: '₹26',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/2d79def7-60ff-4d91-a80d-c99112fd2639.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '3888',
      name: 'Green Capsicum (Shimla Mirch)',
      variant: '250 g',
      price: '₹24',
      originalPrice: '₹29',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/0908a205-26bf-4135-969a-9002b302069c.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '366032',
      name: 'Desi Tomato (Tamatar)',
      variant: '500 g',
      price: '₹27',
      originalPrice: '₹37',
      discount: '27% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/27a22d9c-469e-483d-bebf-7a2b1e86a64c.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const fruitProducts = [
    {
      id: '534991',
      name: 'Banana - Pack of 2',
      variant: '2 x 3 pcs',
      price: '₹82',
      originalPrice: '₹106',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/006bc118-2653-4c5a-a97b-fd440b2575a6.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '534992',
      name: 'Baby Banana - Pack of 2',
      variant: '2 x 4 pcs',
      price: '₹72',
      originalPrice: '₹98',
      discount: '26% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9587012e-704c-4639-9f55-94cc9d060601.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '444357',
      name: 'Strawberry (Mahabaleshwar)',
      variant: '200 g',
      price: '₹129',
      originalPrice: '₹156',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/328f0e2b-e6c0-4abc-956a-ed67cae29df4.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '480907',
      name: 'Blueberry - Imported',
      variant: '125 g',
      price: '₹199',
      originalPrice: '₹238',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/28319e0f-9d16-493f-b399-ce672366ff0f.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '190306',
      name: 'Avocado Hass - Tanzania',
      variant: '150 g',
      price: '₹99',
      originalPrice: '₹122',
      discount: '18% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1f88e07e-0cda-431d-b5ac-bf62c33a864c.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '540193',
      name: 'Tender Coconut - Pack of 2',
      variant: '2 x 1 pc',
      price: '₹130',
      originalPrice: '₹162',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/7af565fe-c87a-4d99-887d-7050fb040a66.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '540461',
      name: 'Thai Pink Guava (Amrud)',
      variant: '400 g',
      price: '₹97',
      originalPrice: '₹118',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/9ebc2cb4-44ff-440d-8679-af5133943f63.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '355051',
      name: 'Papaya (Papita)',
      variant: '700 g',
      price: '₹65',
      originalPrice: '₹77',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/4163704e-109e-4fa2-8a39-517e7c95cd1c.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '421756',
      name: 'Tender Coconut (Nariyal)',
      variant: '1 pc',
      price: '₹65',
      originalPrice: '₹81',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/44f4882c-a276-4350-a178-fef548d73f38.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '339128',
      name: 'Nagpur - Orange (Santra)',
      variant: '(500-600) g',
      price: '₹94',
      originalPrice: '₹113',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/da/cms-assets/cms/product/e284d5d5-bac3-4aa8-9df3-6413175730e0.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const exoticProducts = [
    {
      id: '444357',
      name: 'Strawberry (Mahabaleshwar)',
      variant: '200 g',
      price: '₹129',
      originalPrice: '₹157',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/328f0e2b-e6c0-4abc-956a-ed67cae29df4.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '559078',
      name: 'Broccoli',
      variant: '300 g',
      price: '₹31',
      originalPrice: '₹39',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/079cdbf5-0e6e-4de4-ad0a-447e56ae8016.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '480907',
      name: 'Blueberry - Imported',
      variant: '125 g',
      price: '₹199',
      originalPrice: '₹234',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/28319e0f-9d16-493f-b399-ce672366ff0f.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '39394',
      name: 'Red Bell Pepper',
      variant: '125 g',
      price: '₹42',
      originalPrice: '₹51',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/b6aa0ba8-3dbc-4d8f-aaf8-1b99ed8911b3.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '190306',
      name: 'Avocado Hass - Tanzania',
      variant: '150 g',
      price: '₹99',
      originalPrice: '₹128',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1f88e07e-0cda-431d-b5ac-bf62c33a864c.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '39395',
      name: 'Yellow Bell Pepper',
      variant: '125 g',
      price: '₹38',
      originalPrice: '₹43',
      discount: '11% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a6731bbf-c3aa-476e-b488-1fd5ff2da89f.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '540461',
      name: 'Thai Pink Guava (Amrud)',
      variant: '400 g',
      price: '₹97',
      originalPrice: '₹125',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9ebc2cb4-44ff-440d-8679-af5133943f63.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '440230',
      name: 'Italian Basil Leaves',
      variant: '50 g',
      price: '₹49',
      originalPrice: '₹62',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a8e3395a-19df-4cec-8de1-8b754a8d3206.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '355016',
      name: 'Green Lettuce',
      variant: '100 g',
      price: '₹28',
      originalPrice: '₹35',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/083c2cf1-36a0-4328-98a1-fbe6e0ec1d0a.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '458760',
      name: 'Thai Guava',
      variant: '500 g',
      price: '₹107',
      originalPrice: '₹130',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/284ca37b-8827-4588-a3ca-d5cbe17619ab.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const seasonalProducts = [
    {
      id: '339153',
      name: 'Cauliflower (Phool Gobhi)',
      variant: '400 g',
      price: '₹25',
      originalPrice: '₹29',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9cb3146c-eaf7-434d-9743-99708a9d9b15.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '344277',
      name: 'Red Carrot - 500 g (Gajar)',
      variant: '500 g',
      price: '₹16',
      originalPrice: '₹20',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/fb326622-ff7c-4c01-8705-778e458b67fe.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '540191',
      name: 'Spinach - Pack of 2 (Palak)',
      variant: '2 x 200 g',
      price: '₹18',
      originalPrice: '₹33',
      discount: '45% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/8d04d424-e34f-4433-99d0-3bc1841ecb8d.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '444357',
      name: 'Strawberry (Mahabaleshwar)',
      variant: '200 g',
      price: '₹129',
      originalPrice: '₹159',
      discount: '18% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/328f0e2b-e6c0-4abc-956a-ed67cae29df4.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '3923',
      name: 'Green Peas (Matar)',
      variant: '250 g',
      price: '₹18',
      originalPrice: '₹22',
      discount: '18% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/182833d3-85c8-44fe-aaf8-48908c525a4e.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '421747',
      name: 'Radish (Mooli)',
      variant: '500 g',
      price: '₹30',
      originalPrice: '₹39',
      discount: '23% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/91c82f53-42d3-4d32-853b-9bd057aba60a.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '742770',
      name: 'Lady Finger - Pack of 2 (Bhindi)',
      variant: '2 x 250 g',
      price: '₹71',
      originalPrice: '₹91',
      discount: '21% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1db0277f-9207-41f0-80c7-2e87171cc45d.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '3952',
      name: 'Sweet Potato (450-600) g (Shakarkandi)',
      variant: '450 g',
      price: '₹45',
      originalPrice: '₹56',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/ace455d8-8133-4a03-9d7b-d65795b005ed.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '3916',
      name: 'Fenugreek (Methi)',
      variant: '250 g',
      price: '₹14',
      originalPrice: '₹16',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0524b219-f269-46a3-9c82-e5efb17f5e69.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '540461',
      name: 'Thai Pink Guava (Amrud)',
      variant: '400 g',
      price: '₹97',
      originalPrice: '₹118',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9ebc2cb4-44ff-440d-8679-af5133943f63.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const trustedOrganicProducts = [
    {
      id: '602584',
      name: 'Organically Grown Ginger (Adrak)',
      variant: '100 g',
      price: '₹29',
      originalPrice: '₹34',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6d5e4c9a-0e9a-46e8-8b84-d7cb1f4b5fc7.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '599226',
      name: 'Organically Grown Potato (Aloo)',
      variant: '1 kg',
      price: '₹33',
      originalPrice: '₹37',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a5a8eed9-63b3-4d8a-abd7-2be2b9a55781.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '604360',
      name: 'Organically Grown Red Carrot (Gajar)',
      variant: '500 g',
      price: '₹32',
      originalPrice: '₹40',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1c5a3b5b-90dd-47c8-a4bc-39a137634dfb.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '595308',
      name: 'Organically Grown Onion (Pyaz)',
      variant: '500 g',
      price: '₹33',
      originalPrice: '₹39',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3b76bfb9-031c-4ae8-bf4b-2906f035cf10.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '595293',
      name: 'Organically Grown Garlic (Lehsun)',
      variant: '100 g',
      price: '₹35',
      originalPrice: '₹45',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4c55ff43-6030-4f6f-ab9b-fd597214a4ac.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '602590',
      name: 'Organically Grown Tomato (Hybrid) (Tamatar)',
      variant: '500 g',
      price: '₹53',
      originalPrice: '₹61',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6739bad6-97d6-44fa-af22-94091a51fbe4.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '650368',
      name: 'Organically Grown Coriander (without Roots) (Dhaniya Patta)',
      variant: '100 g',
      price: '₹24',
      originalPrice: '₹28',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/40ab7ac0-710d-48b4-9e00-08eb7837b7b8.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '595303',
      name: 'Organically Grown Lemon',
      variant: '220 g',
      price: '₹26',
      originalPrice: '₹33',
      discount: '21% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2caf53dc-1175-4335-b282-bb109e6bee89.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '609555',
      name: 'Organically Grown Tomato (Desi) (Tamatar)',
      variant: '500 g',
      price: '₹55',
      originalPrice: '₹69',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e3c73bd1-a0b8-4fa8-994d-0365272c8968.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '602182',
      name: 'Organically Grown Cauliflower (Phool Gobhi)',
      variant: '300 g',
      price: '₹42',
      originalPrice: '₹49',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c59da32a-cb09-4dbc-b42b-3007cd7a781b.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const leafiesHerbsProducts = [
    {
      id: '3889',
      name: 'Coriander Bunch (Dhaniya Patta)',
      variant: '100 g',
      price: '₹1',
      originalPrice: '₹7',
      discount: '85% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cc8401ed-66f1-4d31-9e89-d5eace0a9665.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '540191',
      name: 'Spinach - Pack of 2 (Palak)',
      variant: '2 x 200 g',
      price: '₹20',
      originalPrice: '₹36',
      discount: '44% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8d04d424-e34f-4433-99d0-3bc1841ecb8d.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '421744',
      name: 'Spring Onion (Hari Pyaz)',
      variant: '150 g',
      price: '₹24',
      originalPrice: '₹29',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1d2f9e6b-138d-4daf-8cd3-8b50b71e917a.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '3916',
      name: 'Fenugreek (Methi)',
      variant: '250 g',
      price: '₹14',
      originalPrice: '₹18',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0524b219-f269-46a3-9c82-e5efb17f5e69.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '270200',
      name: 'Curry Leaves (Kadi Patta)',
      variant: '50 g',
      price: '₹27',
      originalPrice: '₹32',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/32952877-6299-40a6-8ade-4095cd02667a.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '446707',
      name: 'Mint Leaves (Pudina)',
      variant: '100 g',
      price: '₹19',
      originalPrice: '₹23',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f20bf9d3-fe3b-4339-a25d-c8ce092280e2.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '686512',
      name: 'Coriander (Without Roots) - Pack of 2 (Dhaniya)',
      variant: '2 x 100 g',
      price: '₹51',
      originalPrice: '₹60',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/06872ca9-b277-4432-a5a6-23542fe097fa.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '355016',
      name: 'Green Lettuce',
      variant: '100 g',
      price: '₹28',
      originalPrice: '₹35',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/083c2cf1-36a0-4328-98a1-fbe6e0ec1d0a.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '312160',
      name: 'Spinach (without roots) (Palak)',
      variant: '200 g',
      price: '₹28',
      originalPrice: '₹36',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e6119688-845c-4a9b-89e5-40341226f8a6.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '438225',
      name: 'Chenopodium (Bathua)',
      variant: '250 g',
      price: '₹24',
      originalPrice: '₹27',
      discount: '11% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7a23699b-c475-4c48-b956-cfdc925e0232.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const eggsProducts = [
    {
      id: '487728',
      name: 'Table White White Eggs',
      variant: '10 pcs',
      price: '₹94',
      originalPrice: '₹140',
      discount: '32% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4bf10560-0335-4667-b125-5c7b1c653c60.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '519485',
      name: 'Nature Good White Eggs (6 pieces)',
      variant: '6 pcs',
      price: '₹51',
      originalPrice: '₹90',
      discount: '43% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d769413d-8708-46b7-a203-41b1290558e6.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '498143',
      name: 'Licious Farm Fresh Classic White Protein Rich Eggs',
      variant: '6 pcs',
      price: '₹81',
      originalPrice: '₹90',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3c389611-62c8-4db5-845b-84999aaddabf.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '477482',
      name: 'Eggoz Nutrition White Protein Rich Eggs (10 pieces)',
      variant: '10 pcs',
      price: '₹148',
      originalPrice: '₹155',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63dcc3da-46e1-4f92-8be8-6c7dfe60b5eb.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '396899',
      name: 'Farm Made Free Range Eggs',
      variant: '6 pcs',
      price: '₹143',
      originalPrice: '₹149',
      discount: '4% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/388e48ce-a97f-4fd4-82e3-3f6b7189afd9.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '538077',
      name: 'The Urban Eggs Farm Fresh White Eggs',
      variant: '30 pcs',
      price: '₹256',
      originalPrice: '₹330',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2b020950-acb0-40b4-8d5b-8f97b92f0688.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '487729',
      name: 'Table White Eggs (6 pcs)',
      variant: '6 pcs',
      price: '₹61',
      originalPrice: '₹85',
      discount: '28% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/85328b8b-c5e3-4573-90a9-70ba6daaec6f.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '557477',
      name: 'Licious White Protein Rich Eggs',
      variant: '12 pcs',
      price: '₹160',
      originalPrice: '₹177',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7550db46-987d-4978-8543-1acefda9ccd3.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '483705',
      name: 'Table White White Eggs',
      variant: '30 pcs',
      price: '₹283',
      originalPrice: '₹350',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bbe589e1-d5bf-43dc-8e3b-20233f564537.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '477485',
      name: 'Eggoz Nutrition Protein Rich Brown Eggs (10 pieces)',
      variant: '10 pcs',
      price: '₹193',
      originalPrice: '₹205',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ee34a8ea-1cd8-4488-adc2-ab876c90426b.png',
      hasOffer: true,
      eta: '8 mins'
    }
  ];

  const milkProducts = [
    {
      id: '19512',
      name: 'Amul Taaza Toned Milk',
      variant: '500 ml',
      price: '₹29',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '12872',
      name: 'Amul Gold Full Cream Milk',
      variant: '500 ml',
      price: '₹35',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '19925',
      name: 'Mother Dairy Toned Milk',
      variant: '500 ml',
      price: '₹29',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a538dae1-f4a3-49c9-aaf0-586b2855f825.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '160704',
      name: 'Amul Cow Milk',
      variant: '500 ml',
      price: '₹30',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3148adda-43a0-432c-9424-e2e3d6e3e1b1.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '176',
      name: 'Amul Taaza Homogenised Toned Milk',
      variant: '1 ltr',
      price: '₹75',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '206314',
      name: 'Amul Lactose Free Milk',
      variant: '250 ml',
      price: '₹25',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/87c1c525-750e-475f-91d1-f155026ddaa1.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '339309',
      name: 'Mother Dairy Cow Milk',
      variant: '500 ml',
      price: '₹30',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/60065a08-2486-4f67-b2ae-e03670b2c8f3.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '637875',
      name: 'Country Delight Cow Fresh Milk',
      variant: '450 ml',
      price: '₹44',
      originalPrice: '₹48',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b91b3590-34ae-4f9b-a53a-6951452fb937.png',
      hasOffer: true,
      eta: '8 mins'
    },
    {
      id: '560899',
      name: 'Mother Dairy Full Cream Milk',
      variant: '1 ltr',
      price: '₹69',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3458cf39-8792-4240-b954-4bac79414cf4.png',
      hasOffer: false,
      eta: '8 mins'
    },
    {
      id: '113945',
      name: 'Amul Taaza Toned Milk',
      variant: '200 ml',
      price: '₹16',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/852a402a-54ac-41d5-9263-187f4b077171.png',
      hasOffer: false,
      eta: '8 mins'
    }
  ];

  // Get products based on selected category
  const getProductsByCategory = (categoryId) => {
    switch (categoryId) {
      case 'fresh-vegetables':
        return vegetableProducts;
      case 'fresh-fruits':
        return fruitProducts;
      case 'exotics':
        return exoticProducts;
      case 'seasonal':
        return seasonalProducts;
      case 'trusted-organic':
        return trustedOrganicProducts;
      case 'leafies-herbs':
        return leafiesHerbsProducts;
      case 'eggs':
        return eggsProducts;
      case 'milk':
        return milkProducts;
      default:
        return vegetableProducts;
    }
  };

  const currentProducts = getProductsByCategory(selectedCategory);

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
      {/* Category Sidebar - Show on all devices */}
      <div style={{ width: '76px', minWidth: '76px' }}>
        <div className="BffPlpFeedContainer__NavContainer-sc-12wcdtn-1 TaszR" style={{ overflowY: 'auto', height: 'calc(100vh - 80px)' }}>
          <div style={{ background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 0' }}>
            {categories.map((category) => (
              <div key={category.id} style={{ padding: '6px 0px', width: '100%' }}>
                <div data-pf="reset" style={{ gridColumn: 'span 12', width: '100%', height: '100%' }}>
                  <div
                    id={`category_${category.id}`}
                    className={`tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-0.5 ${selectedCategory === category.id ? 'tw-font-bold' : 'tw-font-regular'}`}
                    tabIndex="0"
                    role="button"
                    data-pf="reset"
                    onClick={() => handleCategoryClick(category.id)}
                    style={{ 
                      cursor: 'pointer',
                      backgroundColor: selectedCategory === category.id ? '#dcfce7' : 'transparent',
                      borderLeft: selectedCategory === category.id ? '3px solid #22c55e' : 'none'
                    }}
                  >
                    <div className="tw-relative tw-h-5 tw-w-5 tw-overflow-y-hidden tw-rounded" data-pf="reset">
                      <div className="tw-flex tw-h-full tw-items-center tw-justify-center tw-rounded tw-bg-grey-100" data-pf="reset">
                        <div className="tw-overflow-hidden tw-flex tw-flex-col" data-pf="reset" style={{ width: '100%', height: '100%', aspectRatio: '1 / 1' }}>
                          <img className="tw-h-full tw-w-full tw-transition-opacity tw-opacity-100" width="100%" src={category.image} data-pf="reset" style={{ transform: 'scale(0.6)' }} />
                        </div>
                      </div>
                    </div>
                    <div className={`tw-text-50 tw-text-center tw-w-full tw-break-words tw-flex tw-justify-center ${selectedCategory === category.id ? 'tw-font-bold' : 'tw-font-regular'}`} data-pf="reset" style={{ color: selectedCategory === category.id ? 'var(--colors-black-900)' : 'var(--colors-grey-700)', fontSize: '8px', lineHeight: '1', textAlign: 'center' }}>
                      {category.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid - Responsive for all devices */}
      <div id="plpContainer" className="BffPlpFeedContainer__ItemsContainer-sc-12wcdtn-2 jkPwTA flex-1" style={{ overflowY: 'scroll' }}>
        <div className="BffPlpFeedContainer__BlurredContainer-sc-12wcdtn-8 hZbapl">
          <div className="grid grid-cols-2 max-[405px]:flex max-[405px]:flex-col max-[405px]:items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 p-1 max-[405px]:gap-2 max-[405px]:p-2">
            {currentProducts.map((product) => (
              <div key={product.id} data-pf="reset" style={{ width: '100%', maxWidth: '300px' }} className="max-[405px]:w-full max-[405px]:flex max-[405px]:justify-center">
                <FruitVegetableProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitVegetableCategorySection;
