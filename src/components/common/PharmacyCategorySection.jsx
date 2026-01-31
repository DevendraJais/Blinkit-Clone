import React, { useState } from 'react';
import PharmacyProductCard from './PharmacyProductCard';

const PharmacyCategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('sexual-wellness');

  const categories = [
    { 
      id: 'sexual-wellness', 
      name: 'Sexual Wellness', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/741_1697295733939.png' 
    },
    { 
      id: 'adult-diapers', 
      name: 'Adult Diapers', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/629_1643447524816.png' 
    },
    { 
      id: 'health-wellness-supplements', 
      name: 'Health & Wellness Supplements', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/293_1681475109894.png' 
    },
    { 
      id: 'protein-workout-supplements', 
      name: 'Protein and Workout Supplements', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/308_1681837991970.png' 
    },
    { 
      id: 'antiseptic-liquid', 
      name: 'Antiseptic Liquid', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/1121_1643447561911.png' 
    },
    { 
      id: 'masks-sanitizers', 
      name: 'Masks & Sanitizers', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/1826_1643447577409.png' 
    },
    { 
      id: 'milk-drinks', 
      name: 'Milk Drinks', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/960_1689245796579.png' 
    },
    { 
      id: 'smoking-cessation', 
      name: 'Smoking Cessation', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/290_1643962132067.png' 
    },
    { 
      id: 'herbal-drinks', 
      name: 'Herbal Drinks', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/1109_1643445639946.png' 
    },
    { 
      id: 'chyawanprash', 
      name: 'Chyawanprash', 
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/1135_1643884256823.png' 
    },
    { 
      id: 'hangover-cure', 
      name: 'Hangover Cure', 
      image: 'https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1710432257090-3' 
    },
    { 
      id: 'prescription-medicines', 
      name: 'Prescription Medicines', 
      image: 'https://cdn.grofers.com/app/images/category/cms_images/a10850f8-6fe7-4e0b-978b-5ab1696e27bc.' 
    },
    { 
      id: 'non-prescription-medicines', 
      name: 'Non-Prescription Medicines', 
      image: 'https://cdn.grofers.com/app/images/category/cms_images/7c0aad18-b238-4283-9bfc-464a4310dbdd.' 
    },
    { 
      id: 'pure-otc', 
      name: 'Pure OTC', 
      image: 'https://cdn.grofers.com/app/images/category/cms_images/0a3a4700-5dae-4ec7-8cc1-f81a08753a6a.' 
    },
    { 
      id: 'health-ortho-supports', 
      name: 'Health & Ortho Supports', 
      image: 'https://cdn.grofers.com/app/images/category/cms_images/9854af59-ffea-4134-9fb5-c4af6131827d.' 
    }
  ];

  // Real data for Sexual Wellness products
  const sexualWellnessProducts = [
    {
      id: '1',
      name: 'Bold Care Ecstasy Naturally Lubricated Thin Condom',
      variant: '12 pcs',
      price: '₹96',
      originalPrice: '₹299',
      discount: '67% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fd9dad10-55e8-4379-ac2a-147ed8f6f1a8.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '2',
      name: 'Durex Extra Time Longer Lasting Condom',
      variant: '3 pcs',
      price: '₹90',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5395b1f3-0abe-4427-ae0a-523d118f2281.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '3',
      name: 'Durex Air Ultra Thin Condom',
      variant: '3 pcs',
      price: '₹90',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/450a9a9d-f08e-4991-9df2-cf35be4599cb.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '4',
      name: 'Manforce Xotic Extra Dotted Condom - Strawberry Flavour',
      variant: '10 pcs',
      price: '₹69',
      originalPrice: '₹99',
      discount: '30% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b2f7f904-5d36-4ef8-91d2-7e65bfb944d7.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '5',
      name: 'MyMuse Edge Lifelike Vibrating Stroker Personal Massager for Men',
      variant: '1 pc',
      price: '₹4,215',
      originalPrice: '₹4,649',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6781f6cd-ac58-43e2-b772-2c4060775f8c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '6',
      name: 'Plush Preg-Oh Basic Pregnancy Test Kit',
      variant: '1 pack',
      price: '₹68',
      originalPrice: '₹69',
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1e836202-69f0-411b-8d9b-ea86ce6041c3.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '7',
      name: 'Kapiva Him Foods Shilajit Gold Resin',
      variant: '20 g',
      price: '₹1,400',
      originalPrice: '₹1,549',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/de50f0f4-6d75-498a-99ed-8d6b28f1a645.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '8',
      name: 'Durex Mutual Climax Dotted Condom',
      variant: '3 pcs',
      price: '₹153',
      originalPrice: '₹159',
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/53b0bc40-397b-4be7-afa6-08c4374abd1d.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '9',
      name: 'Durex Extra Time Ultra Thin Condom',
      variant: '10 pcs',
      price: '₹348',
      originalPrice: '₹420',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a8fab21c-46f2-462f-ab62-9343588b8a19.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '10',
      name: 'Manforce Xotic Dotted Condom - Chocolate Flavour',
      variant: '10 pcs',
      price: '₹69',
      originalPrice: '₹99',
      discount: '30% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ab28fa30-7b7e-4864-be48-d1454129c94c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '11',
      name: 'Kapiva Himalaya Shilajit Resin',
      variant: '20 g',
      price: '₹1,100',
      originalPrice: '₹1,499',
      discount: '26% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a1456959-1538-4864-abbb-e9511db120e5.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '12',
      name: 'Prega News One Step Urine HCG Pregnancy Test Kit',
      variant: '1 pc',
      price: '₹56',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f6db2c05-55bb-4b73-86eb-0a8b313477c6.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '13',
      name: 'Durex Skin-on-Skin Real Feel Condom',
      variant: '10 pcs',
      price: '₹472',
      originalPrice: '₹599',
      discount: '21% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c19e5f5b-a035-4f49-b3f3-7acd674ec2d5.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '14',
      name: 'Bold Care Ultra Thin Delay Condom',
      variant: '10 pcs',
      price: '₹149',
      originalPrice: '₹300',
      discount: '50% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/73609d7f-6631-4dcd-971f-9b9056915803.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '15',
      name: 'Durex Real Feel Long-Lasting Lubricant',
      variant: '50 ml',
      price: '₹332',
      originalPrice: '₹399',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/88823d44-44cc-4c6e-b3f8-4bcfeee2dfd6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '16',
      name: 'Durex Close Fit Invisible Condom',
      variant: '10 pcs',
      price: '₹480',
      originalPrice: '₹599',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5e4668a0-63ff-4ae9-9229-ad7f91b8dc37.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '17',
      name: 'Durex Intense Condom -For Her Extra Pleasure',
      variant: '10 pcs',
      price: '₹468',
      originalPrice: '₹550',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f73f07f3-091d-496d-b476-1242fa466d5f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '18',
      name: 'Durex Invisible 003 Condom - Pack of 10',
      variant: '10 pcs',
      price: '₹495',
      originalPrice: '₹650',
      discount: '23% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '19',
      name: 'Durex Intense Condom -For Her Extra Pleasure',
      variant: '3 pcs',
      price: '₹173',
      originalPrice: '₹180',
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '20',
      name: 'I-know One Step Pregnancy Test Kit',
      variant: '1 pc',
      price: '₹60',
      originalPrice: null,
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '21',
      name: 'Dabur Immunity Booster Ashwagandha',
      variant: '60 pcs',
      price: '₹173',
      originalPrice: '₹223',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '22',
      name: 'Durex Assorted Condom Pack',
      variant: '4 packs',
      price: '₹488',
      originalPrice: '₹590',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: '23',
      name: 'Durex Invisible Super Ultra Thin Condom',
      variant: '3 pcs',
      price: '₹173',
      originalPrice: '₹180',
      discount: null,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: '24',
      name: 'Kapiva Ashwagandha Gold Capsules',
      variant: '60 pcs',
      price: '₹516',
      originalPrice: '₹562',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/18f451b7-e4a7-45e8-9233-cd5e528aec96.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  // Sample data for other categories
  const medicinesProducts = [
    {
      id: '7',
      name: 'Dolo 650 Tablet',
      variant: '15 tablets',
      price: '₹45',
      originalPrice: '₹55',
      discount: '18% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dolo-650.jpg',
      hasOffer: true,
      eta: '20 mins'
    },
    {
      id: '8',
      name: 'Crocin Advance Tablet',
      variant: '15 tablets',
      price: '₹39',
      originalPrice: '₹49',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/crocin-advance.jpg',
      hasOffer: true,
      eta: '20 mins'
    }
  ];

  const adultDiapersProducts = [
    {
      id: 'ad1',
      name: 'CIR Premium Adult Diaper Pants, M (30" – 40")',
      variant: '10 pcs',
      price: '₹220',
      originalPrice: '₹467',
      discount: '52% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/36532eb4-d554-4588-9167-e010e71fdac7.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad2',
      name: 'CIR Premium Adult Diaper Pants, L (35" - 47")',
      variant: '10 pcs',
      price: '₹239',
      originalPrice: '₹514',
      discount: '53% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8e51e706-c96a-4c39-89e7-ff170bf8be17.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad3',
      name: 'Friends Classic Adult Diaper Pant Style (M, 25-48")',
      variant: '10 pcs',
      price: '₹289',
      originalPrice: '₹520',
      discount: '44% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6056f9d2-94e3-4a0f-a911-c03e85b8adba.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad4',
      name: 'Friends Classic Adult Diaper Pants Style (L, 30-56")',
      variant: '10 pcs',
      price: '₹309',
      originalPrice: '₹570',
      discount: '45% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0cd1c148-630a-4429-a655-6c8054f9fc94.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad5',
      name: 'CIR Premium Adult Diaper Pants, XL(40" - 59")',
      variant: '10 pcs',
      price: '₹258',
      originalPrice: '₹561',
      discount: '54% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4f3a190c-7138-471d-b1de-d87894217621.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad6',
      name: 'Kare In Classic Underpad - L',
      variant: '10 pcs',
      price: '₹152',
      originalPrice: '₹1,030',
      discount: '85% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71d9f869-a2cb-45a1-96e4-b11797bdc15d.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad7',
      name: 'Kare In Classic Adult Diaper Pants, Medium (75 - 100 cm)',
      variant: '10 pcs',
      price: '₹228',
      originalPrice: '₹470',
      discount: '51% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/aea3001c-2363-43b4-afbc-d898146f3c54.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad8',
      name: 'Friends Classic Underpad 60x90 cm',
      variant: '10 pcs',
      price: '₹165',
      originalPrice: '₹399',
      discount: '58% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5538443a-45a4-4faa-9772-665536ddebb2.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad9',
      name: 'Friends Easy Adult Diaper Tape Style (M, 27.56-49.21")',
      variant: '10 pcs',
      price: '₹369',
      originalPrice: '₹575',
      discount: '35% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2d45d7ff-8679-4a28-ab10-271670137846.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad10',
      name: 'Friends Classic Adult Diaper Pant Style (XL, 30-56")',
      variant: '10 pcs',
      price: '₹319',
      originalPrice: '₹615',
      discount: '48% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/be8e7437-39bc-41e9-8171-6a5c585049cb.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad11',
      name: 'B-FIT Adult Diaper Pant Style (M, 25-48")',
      variant: '10 pcs',
      price: '₹209',
      originalPrice: '₹535',
      discount: '60% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/abf12c84-0325-450d-8e99-1dcc72b49659.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad12',
      name: 'Kare In Classic Adult Diaper Pants, Large (90 - 120 cm)',
      variant: '10 pcs',
      price: '₹246',
      originalPrice: '₹515',
      discount: '52% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2330bb3e-c344-48f5-b4cb-4d43df75814e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad13',
      name: 'Friends Easy Adult Diaper Tape Style (XL, 29.53-62.99")',
      variant: '10 pcs',
      price: '₹409',
      originalPrice: '₹615',
      discount: '33% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9c93cb04-1e3b-4ff1-8512-991e1e925346.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad14',
      name: 'Kare In Bed Wipes',
      variant: '10 pcs',
      price: '₹85',
      originalPrice: '₹950',
      discount: '91% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c8de1b8e-d5c9-49b7-ac08-7dd840dc9e3d.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad15',
      name: 'Friends Easy Adult Diaper Tape Style (L, 29.53-57.09")',
      variant: '10 pcs',
      price: '₹389',
      originalPrice: '₹600',
      discount: '35% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/e8975f30-5301-4f8e-bf84-7a961878b28e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad16',
      name: 'Friends Premium Adult Diaper Pant Style (XL, 30-56")',
      variant: '10 pcs',
      price: '₹449',
      originalPrice: '₹670',
      discount: '32% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/279c7c6e-6e16-47dd-aae8-9ad82a385b77.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad17',
      name: 'Friends Premium Adult Diaper Pant Style (L, 30-56")',
      variant: '10 pcs',
      price: '₹454',
      originalPrice: '₹660',
      discount: '31% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bad52bcc-0e3e-47b9-8279-c0cd4332a8c3.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad18',
      name: 'DIGNITY Premium Pant Style Adult Diaper -L',
      variant: '10 pcs',
      price: '₹353',
      originalPrice: '₹660',
      discount: '46% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4e5bfb99-e22b-4bda-ba95-c333b446203a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad19',
      name: 'DIGNITY Premium Pant Style Adult Diaper -XL/XXL',
      variant: '10 pcs',
      price: '₹369',
      originalPrice: '₹669',
      discount: '44% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b980de4a-203d-46c3-b649-369ae86656ec.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ad20',
      name: 'Kare In Classic Adult Diaper Tape Style, Extra Large (127 - 165 cm)',
      variant: '10 pcs',
      price: '₹286',
      originalPrice: '₹565',
      discount: '49% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/79f70bdf-506c-452d-8ab2-b38dbaa6f14e.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  // Real data for Health and Wellness Supplements products
  const healthSupplementsProducts = [
    {
      id: 'hs1',
      name: 'Baidyanath Ayurvedant Shatavari Lactation Supplement Granules',
      variant: '500 g',
      price: '₹279',
      originalPrice: '₹328',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f841a107-a220-410b-acb5-9ffee23bfb7c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs2',
      name: 'Fast&Up Reload Energy & Electrolyte (Lime Lemon)',
      variant: '20 tabs',
      price: '₹244',
      originalPrice: '₹265',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/aa9c5d4b-a0d1-4dac-acbf-b5d583349325.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs3',
      name: 'Vicks ZzzQuil Natura Melatonin Sleep Supplement (Strawberry Lavender)',
      variant: '10 x 3 g',
      price: '₹180',
      originalPrice: '₹199',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1869f24f-84a8-4039-a18d-235ad69d6c33.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs4',
      name: 'OZiva Bioactive Glutathione Effervescent Tablets for Skin Glow (Strawberry)',
      variant: '10 tabs',
      price: '₹600',
      originalPrice: '₹999',
      discount: '39% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/47d33990-4de4-45ff-b8a7-9dcae9262f83.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs5',
      name: 'Centrum Men Multivitamin (For 18+ Years)',
      variant: '30 tabs',
      price: '₹418',
      originalPrice: '₹440',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/70cf05cd-370d-40f2-9c37-08c12641612e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs6',
      name: 'OZiva Moringa Apple Cider Vinegar Effervescent Tablets (Green Apple)',
      variant: '15 tabs',
      price: '₹309',
      originalPrice: '₹400',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3d2dc132-b5d0-4668-8bb6-903eb63d8c8b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs7',
      name: 'Plix Bubbly Strawberry Flavour Glutathione Effervescent Tablets for Glowy Skin',
      variant: '15 tabs',
      price: '₹560',
      originalPrice: '₹575',
      discount: '2% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d2923e8e-4eaf-41fc-9038-73f2d2c6a0b7.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hs8',
      name: 'Man Matters Pure Himalayan Shilajit Gummies',
      variant: '30 pcs',
      price: '₹549',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/67ec683f-505a-46a9-81f5-60df2410e306.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hs9',
      name: 'Centrum Women Multivitamin (For 18+ Years)',
      variant: '30 tabs',
      price: '₹440',
      originalPrice: '₹463',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/53a1d163-4da8-4c5b-862b-8c2e35d59824.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs10',
      name: 'Hk Vitals Skin Radiance Collagen Supplement (Orange)',
      variant: '200 g',
      price: '₹849',
      originalPrice: '₹889',
      discount: '4% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ede22812-44ae-46f9-8999-d4e41806cdc2.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hs11',
      name: 'Plix Apple Cider Vinegar Effervescent Tablets (Apple Burst)',
      variant: '15 tabs',
      price: '₹299',
      originalPrice: '₹310',
      discount: '3% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b02b8a81-78d7-498c-a391-c65ba54183d4.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hs12',
      name: 'Fast&Up Reload Energy & Electrolyte Drink (Orange)',
      variant: '20 tabs',
      price: '₹244',
      originalPrice: '₹265',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6a5b9b24-36bc-4ede-8287-d0034a1cf16a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs13',
      name: 'Centrum Adults 50+ Multivitamin',
      variant: '30 tabs',
      price: '₹494',
      originalPrice: '₹520',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/88358cd6-d8f6-453a-8136-374735c0ca5c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs14',
      name: 'Kapiva Him Foods Shilajit Gold Resin (20 g)',
      variant: '20 g',
      price: '₹1,400',
      originalPrice: '₹1,549',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/de50f0f4-6d75-498a-99ed-8d6b28f1a645.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs15',
      name: 'Dabur 100% Ayurvedic Immunity Booster Tulsi Drops',
      variant: '30 ml',
      price: '₹119',
      originalPrice: '₹182',
      discount: '34% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b3f2dd04-dd47-4bde-823a-9933263e57b6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs16',
      name: 'Hk Vitals Glutathione (Orange)',
      variant: '15 pcs',
      price: '₹699',
      originalPrice: '₹759',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71079be2-d50b-4a9b-8cbd-08dbaf670c85.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs17',
      name: 'Tata 1mg Probiotics 30 Billion CFUs+ with 100 mg Prebiotic Fibre Capsules',
      variant: '60 pcs',
      price: '₹342',
      originalPrice: '₹529',
      discount: '35% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e1b8c6df-8e3e-4f4d-be17-d690bf88adb1.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs18',
      name: 'Hk Vitals Skin Radiance Collagen Supplement (Watermelon)',
      variant: '200 g',
      price: '₹849',
      originalPrice: '₹909',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71be2bc1-9f94-49f5-854a-0349555d415d.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs19',
      name: 'Hk Vitals Biotin for Strong, Thick & Shiny Hair',
      variant: '90 pcs',
      price: '₹510',
      originalPrice: '₹659',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d4e8f7dd-b129-4fc2-8c1f-76a8fab06bc0.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs20',
      name: 'Fast&Up L-Carnitine 2000mg Weight Loss Effervescent Tablets (Orange)',
      variant: '20 tabs',
      price: '₹534',
      originalPrice: '₹580',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ce0dc83e-9c0f-496b-8d0a-b8ad0117a811.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs21',
      name: 'Tata 1mg Milk Thistle Veg Capsule Detox Supplement for Liver',
      variant: '60 pcs',
      price: '₹388',
      originalPrice: '₹495',
      discount: '21% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d28151e9-92e7-452c-b1ee-71465fa8c525.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs22',
      name: 'Himalaya Liv. 52 Liver Care Supplement',
      variant: '100 pcs',
      price: '₹207',
      originalPrice: '₹220',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2cfa3732-53f9-499f-8e1e-7105e3d966e3.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs23',
      name: 'Plix Deep Sleep Melatonin Mini Mints',
      variant: '30 tabs',
      price: '₹336',
      originalPrice: '₹355',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f615b661-aa11-4d3d-a17c-351e9f2be88f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs24',
      name: 'Wellbeing Nutrition Plant-based Melts Melatonin for Better Sleep',
      variant: '30 pcs',
      price: '₹599',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/00250bd3-a307-427b-8f3b-07770378fc42.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hs25',
      name: 'Be. Sexy Collagen Supplement Powder for Healthy Skin',
      variant: '300 g',
      price: '₹2,399',
      originalPrice: '₹3,000',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4f74e77a-0dc4-468a-babe-6cf6f7b12d00.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs26',
      name: 'Hamdard Safi Blood Purifier',
      variant: '200 ml',
      price: '₹112',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b3a77464-716f-47e7-b3c1-a40cf50ccd07.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hs27',
      name: 'Himalaya Shilajit Capsules',
      variant: '60 pcs',
      price: '₹327',
      originalPrice: '₹375',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/91b5f805-62ff-4594-9cba-e46ea4701eea.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs28',
      name: 'Kapiva Shilajit Gold Capsules with Ashwagandha',
      variant: '60 pcs',
      price: '₹1,200',
      originalPrice: '₹1,499',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/063ab4cd-531f-4703-b593-9c3579c65052.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs29',
      name: 'Vlado\'s Himalayan organics Calcium Magnesium Zinc Vitamin D3 Supplement',
      variant: '120 pcs',
      price: '₹690',
      originalPrice: '₹896',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/80775dee-7842-43ee-bc19-1b5f9eb6bd42.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hs30',
      name: 'Fast&Up Vitamin C with Amla Extract Immunity Booster Effervescent Tablets',
      variant: '20 tabs',
      price: '₹357',
      originalPrice: '₹379',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6ab7dd0b-2b4b-413b-b173-c8458635adee.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  // Real data for Protein and Workout Supplements products
  const proteinWorkoutSupplementsProducts = [
    {
      id: 'pw1',
      name: 'BeastLife Performance Protein Powder',
      variant: '500 g',
      price: '₹999',
      originalPrice: '₹1,422',
      discount: '29% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/efe0ab30-6d1a-4465-9732-c5e32a5aa869.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw2',
      name: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Double Rich Chocolate',
      variant: '152 g',
      price: '₹709',
      originalPrice: '₹799',
      discount: '11% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/088d26fb-eaa7-4570-8f11-5c1295f6e9da.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw3',
      name: 'Fuel One Dead-Lift Pre Workout Powder (Deadly Fruit)',
      variant: '100 g',
      price: '₹449',
      originalPrice: '₹669',
      discount: '32% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/163a5ae5-e431-4cb5-b1e6-9b146b62a10c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw4',
      name: 'MuscleBlaze Fruit Punch Pre Workout 200 Xtreme (Fruit Punch Flavour)',
      variant: '100 g',
      price: '₹549',
      originalPrice: '₹669',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bfee1080-3a57-400f-95ba-0b96d7110f16.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw5',
      name: 'MuscleBlaze Cola Frost Pre Workout WrathX with Creapure®, Nitroblaze & BioPerine (Cola Frost)',
      variant: '5 x 17 g',
      price: '₹349',
      originalPrice: '₹449',
      discount: '22% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/29ef6c38-a6c7-41b6-8c2e-ae8d203fbc35.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw6',
      name: 'Wellcore Micronised Fruit Fusion Creatine Monohydrate',
      variant: '122 g',
      price: '₹499',
      originalPrice: '₹749',
      discount: '33% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5ad946d5-b6bb-4d2f-bfee-20bff36f8896.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw7',
      name: 'Man Matters Mixed Fruit Creatine Monohydrate',
      variant: '150 g',
      price: '₹549',
      originalPrice: '₹699',
      discount: '21% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4c457255-5ba3-4484-aeb4-2b50fa4f9d72.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw8',
      name: 'Wellcore Micronised Tropical Tango Creatine Monohydrate',
      variant: '122 g',
      price: '₹499',
      originalPrice: '₹749',
      discount: '33% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a818aa80-5dfc-4e70-b4bc-bd08f5be3e9d.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw9',
      name: 'MuscleBlaze WrathX Fruit Fury Pre Workout with Creapure, Nitroblaze & BioPerine',
      variant: '5 x 17 g',
      price: '₹349',
      originalPrice: '₹499',
      discount: '30% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0a0d637c-bf49-43b8-bbe9-aeac7942cce8.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw10',
      name: 'Cosmix No - Nonsense Plant Protein Chikmagalur Mocha',
      variant: '38 g',
      price: '₹139',
      originalPrice: '₹147',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0616df17-1ccf-4d71-8a38-f39e608df04b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw11',
      name: 'Cosmix No - Nonsense Plant Protein Indonesian Cacao',
      variant: '38 g',
      price: '₹139',
      originalPrice: '₹147',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cb9c13fe-45b2-44ba-b770-8944736769bc.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw12',
      name: 'GNC Pro 100% Whey Protein Powder Chocolate Fudge',
      variant: '907 g',
      price: '₹2,599',
      originalPrice: '₹3,099',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3879c9d3-088e-4a44-99b0-9063f33a9eb4.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw13',
      name: 'MuscleBlaze Micronised Creatine Monohydrate CreAMP Powder (Citrus Blast)',
      variant: '120 g',
      price: '₹509',
      originalPrice: '₹719',
      discount: '29% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a4a1920-a862-41b9-ace4-19bceeefe6c7.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw14',
      name: 'MuscleBlaze Biozyme Performance Whey Protein Powder (Rich Chocolate)',
      variant: '500 g',
      price: '₹1,549',
      originalPrice: '₹1,579',
      discount: '1% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c1d7c3ac-dbb5-41c1-9c8a-425b0ac90d6e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw15',
      name: 'OZiva Bioactive Plant Protein Malabar Vanilla',
      variant: '500 g',
      price: '₹1,527',
      originalPrice: '₹1,549',
      discount: '1% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66beec38-fb90-4e99-82e2-e010126a061f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw16',
      name: 'Fuel One Whey Max (Chocolate)',
      variant: '1 kg',
      price: '₹2,599',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a69b1f9c-728a-4192-ac2b-c451f96790f0.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'pw17',
      name: 'Fuel One Whey Protein (Rich Chocolate)',
      variant: '1 kg',
      price: '₹2,131',
      originalPrice: '₹2,299',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1a539e22-5d9f-46c3-9fce-ab4e5eff0cb2.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw18',
      name: 'OZiva Whey Protein & Herbs for Women (Chocolate)',
      variant: '453 g',
      price: '₹1,646',
      originalPrice: '₹1,699',
      discount: '3% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a580311-97eb-454c-9f01-085e57306da6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw19',
      name: 'Optimum Nutrition (ON) Micronised Unflavoured Creatine',
      variant: '100 g',
      price: '₹489',
      originalPrice: '₹699',
      discount: '30% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/edc9f935-c547-4f6b-8d30-90016faf75f5.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw20',
      name: 'AS-IT-IS ATOM PWR Whey Protein Powder with DigeZyme (Double Rich Chocolate)',
      variant: '1 kg',
      price: '₹1,736',
      originalPrice: '₹2,516',
      discount: '31% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2b22981b-79db-4166-8b58-05a971c75a6c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw21',
      name: 'AS-IT-IS ATOM Protein with DigeZyme Whey Protein (Double Rich Chocolate)',
      variant: '2 kg',
      price: '₹4,375',
      originalPrice: '₹6,633',
      discount: '34% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f2ff2f66-2422-40db-8dd0-e85cb6dc50ba.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw22',
      name: 'AS-IT-IS Nutrition ATOM Whey Protein Powder with Enzymes, Choco Hazel Fusion',
      variant: '1 kg',
      price: '₹2,230',
      originalPrice: '₹3,385',
      discount: '34% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/458cb3c8-6dfb-41ed-9387-43e4a23e1433.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw23',
      name: 'AS-IT-IS Nutrition ATOM Whey Protein Powder with Enzymes, Double Rich Chocolate',
      variant: '1 kg',
      price: '₹2,230',
      originalPrice: '₹3,385',
      discount: '34% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8ddfbdf5-a29e-490b-8373-93245caf725d.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw24',
      name: 'AS-IT-IS ONE Whey Protein Concentrate (Unflavoured)',
      variant: '1 kg',
      price: '₹2,230',
      originalPrice: '₹3,272',
      discount: '31% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2133eaaa-14a9-44c4-ad76-265e1a17a33f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw25',
      name: 'AS-IT-IS Unflavoured Creatine Monohydrate',
      variant: '250 g',
      price: '₹518',
      originalPrice: '₹738',
      discount: '29% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/41588906-fc76-416e-b357-1b30b048d752.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw26',
      name: 'Ace Blend Chocolate Hazelnut Intense Plant Protein',
      variant: '45 g',
      price: '₹84',
      originalPrice: '₹159',
      discount: '47% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e0d4694a-cad9-46f8-9233-af3ced70ea09.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw27',
      name: 'Avvatar Performance Whey Protein (Cold Coffee)',
      variant: '1 kg',
      price: '₹2,656',
      originalPrice: '₹3,999',
      discount: '33% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d7ec1fb5-1249-4ba4-a391-5a74d6b3763f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw28',
      name: 'BeastLife 2:1:1 Blend + Electrolytes Cola BCAA Powder',
      variant: '120 g',
      price: '₹536',
      originalPrice: '₹849',
      discount: '36% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66c83273-abf9-4f77-abb8-613fa4950594.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pw29',
      name: 'BeastLife Butterscotch Protein Concentrate',
      variant: '924 g',
      price: '₹2,749',
      originalPrice: '₹3,999',
      discount: '31% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4b02e1b5-4cce-4b41-ab38-de5852133fad.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  // Real data for Antiseptic Liquid products
  const antisepticLiquidProducts = [
    {
      id: 'al1',
      name: 'Dettol Antiseptic Liquid - 250 ml',
      variant: '250 ml',
      price: '₹159',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/28e22703-546d-4db7-a48a-6011c455a24d.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'al2',
      name: 'Savlon Disinfectant Antiseptic Liquid',
      variant: '500 ml',
      price: '₹154',
      originalPrice: '₹210',
      discount: '26% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1b910c22-e151-4bb2-aec8-2d7b83dc9b64.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'al3',
      name: 'Boroline Suthol Skin Antiseptic Liquid - Neem',
      variant: '100 ml',
      price: '₹50',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2602f114-e5de-4677-b094-afb5c8899415.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'al4',
      name: 'Boroline Suthol Antiseptic Liquid Spray - Neem',
      variant: '100 ml',
      price: '₹90',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ff087202-26ce-415c-b391-a51882532f06.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'al5',
      name: 'Dettol Germ Defence Antiseptic Liquid 750 ml',
      variant: '750 ml',
      price: '₹331',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7af0c564-6176-4f1c-b23f-19aaa7cd2013.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'al6',
      name: 'Dettol Germ Defence Antiseptic Liquid',
      variant: '1300 ml',
      price: '₹537',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8860ae2b-6809-422e-9628-249b6c810a35.png',
      hasOffer: false,
      eta: '15 mins'
    }
  ];

  // Real data for Masks & Sanitizers products
  const masksSanitizersProducts = [
    {
      id: 'ms1',
      name: 'Dettol Original Instant Hand Sanitizer',
      variant: '50 ml',
      price: '₹34',
      originalPrice: '₹35',
      discount: '3% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5e861d97-44d7-4cd5-a579-17d5b8933e63.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms2',
      name: 'Control D N95 Mask',
      variant: '1 pc',
      price: '₹40',
      originalPrice: '₹50',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ccb62ad0-369d-4abb-813f-598b8c74ac8b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms3',
      name: 'Filixtrue Disposable 3 Ply Mask',
      variant: '50 pcs',
      price: '₹194',
      originalPrice: '₹499',
      discount: '61% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2c07d99b-14f5-49dd-9100-0e25aaeb5ab0.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms4',
      name: 'Control D N95 Mask (5 pcs)',
      variant: '5 pcs',
      price: '₹170',
      originalPrice: '₹250',
      discount: '32% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/df994cd0-39b9-4394-8b23-18d54df38cc0.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms5',
      name: 'Filixtrue Disposable Surgical 3 Ply Mask (Blue)',
      variant: '100 pcs',
      price: '₹219',
      originalPrice: '₹990',
      discount: '77% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2ba27a03-84df-4eab-ae59-0e1790011185.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms6',
      name: 'Am Safe-X Disposable Bouffant Caps',
      variant: '100 pcs',
      price: '₹299',
      originalPrice: '₹599',
      discount: '50% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/89a250c9-68f8-4536-ab15-cd607fd0a351.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms7',
      name: 'Am Safe-X Disposable Bouffant Caps (Blue)',
      variant: '100 pcs',
      price: '₹299',
      originalPrice: '₹599',
      discount: '50% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b07b00b8-b03c-4d2d-ba60-b3d174273e90.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms8',
      name: 'Am Safe-X Disposable Surgical 3 Ply Mask (Sky Blue)',
      variant: '50 pcs',
      price: '₹239',
      originalPrice: '₹699',
      discount: '65% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5c05e238-2ac2-45cb-ae60-b6bed33bd3ba.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms9',
      name: 'Am Safe-X Medium Disposable Gloves (Blue)',
      variant: '50 pcs',
      price: '₹278',
      originalPrice: '₹999',
      discount: '72% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2002f95c-4e7d-41d6-a5ba-d942d3b09fb4.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms10',
      name: 'Brij-S-Care Safety Hand Gloves (Blue, White)',
      variant: '100 pcs',
      price: '₹330',
      originalPrice: '₹1,380',
      discount: '76% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b64dc39d-19c4-48f5-a49e-cc723ec4dad6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms11',
      name: 'Dettol Original Alcohol Based Hand Sanitizer',
      variant: '200 ml',
      price: '₹119',
      originalPrice: '₹125',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/238efac8-845d-434e-bd32-af67514484eb.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms12',
      name: 'MasQ 3 Ply Mask (Black)',
      variant: '20 pcs',
      price: '₹249',
      originalPrice: '₹599',
      discount: '58% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/edaa7b53-b24a-4276-9281-f9647d39172b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms13',
      name: 'QUARANT 4 Ply Activated Carbon Disposable Mask',
      variant: '50 pcs',
      price: '₹349',
      originalPrice: '₹1,000',
      discount: '65% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ff547746-bd1a-489d-9c1e-9d6ae1cee506.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms14',
      name: 'QUARANT 80% Alcohol Based Instant Spray Hand Sanitizer',
      variant: '3 x 100 ml',
      price: '₹229',
      originalPrice: '₹240',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4df6a729-aacc-41de-8a0a-62d7c27beb2e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms15',
      name: 'QUARANT Disposable 3 Ply Mask (Black)',
      variant: '50 pcs',
      price: '₹299',
      originalPrice: '₹600',
      discount: '50% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f10d7e9e-c6cc-4455-b776-7cc2f4d9cacd.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms16',
      name: 'QUARANT Disposable 3 Ply Mask (Blue)',
      variant: '50 pcs',
      price: '₹279',
      originalPrice: '₹600',
      discount: '53% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/01ea5eb6-5840-432f-a58c-74d190e33e6e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms17',
      name: 'QUARANT Instant Hand Sanitizer',
      variant: '500 ml',
      price: '₹259',
      originalPrice: '₹300',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a94628fd-eb89-4a92-8441-c8cfba8d8e50.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms18',
      name: 'QUARANT Kids Disposable 3 Ply Mask (Blue)',
      variant: '50 pcs',
      price: '₹279',
      originalPrice: '₹500',
      discount: '44% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/872ee5f9-533d-43cd-973a-5fbd9e126c15.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms19',
      name: 'QUARANT Kids Disposable 3 Ply Mask (Multicolour)',
      variant: '50 pcs',
      price: '₹299',
      originalPrice: '₹500',
      discount: '40% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/59f6357c-3537-4dd5-bdba-361b2dcde435.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms20',
      name: 'QUARANT N95 Mask (White)',
      variant: '10 pcs',
      price: '₹279',
      originalPrice: '₹1,000',
      discount: '72% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4f57fdce-4d09-4389-bc59-3af14e7f74d3.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms21',
      name: 'Romsons Comfit 3D Disposable Face Mask (with 4 Layer Protection)',
      variant: '1 pack',
      price: '₹212',
      originalPrice: '₹375',
      discount: '43% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ff29c727-e5ce-4a1e-81a9-f6c90b8c9915.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms22',
      name: 'Romsons Dispo Guard 3 Ply Mask',
      variant: '1 pack',
      price: '₹192',
      originalPrice: '₹500',
      discount: '61% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/48f05316-d56c-4081-b476-ea0b4b1943f4.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms23',
      name: 'Romsons Kare Kids N95 Mask (with 6 Layer Protection)',
      variant: '1 pc',
      price: '₹43',
      originalPrice: '₹53',
      discount: '18% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71816621-2103-4eb8-b38c-d0dba0d95ce6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms24',
      name: 'Romsons Kare Mask Plus, N95 (6-Layer Protection, White)',
      variant: '1 pc',
      price: '₹57',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3aa5f64d-116e-4911-ab58-fa9870399826.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'ms25',
      name: 'Romsons Kare Respirator N95 Mask',
      variant: '1 pc',
      price: '₹44',
      originalPrice: '₹53',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71816621-2103-4eb8-b38c-d0dba0d95ce6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms26',
      name: 'Romsons Kare Respirator N95 Mask - Pack of 3',
      variant: '3 x 1 pc',
      price: '₹90',
      originalPrice: '₹159',
      discount: '43% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71816621-2103-4eb8-b38c-d0dba0d95ce6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms27',
      name: 'Savlon BIS Certified FFP2 Mask',
      variant: '4 pcs',
      price: '₹255',
      originalPrice: '₹280',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4f57fdce-4d09-4389-bc59-3af14e7f74d3.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms28',
      name: 'Savlon BIS Certified FFP2 Mask (Black)',
      variant: '1 pc',
      price: '₹93',
      originalPrice: '₹95',
      discount: '2% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4f57fdce-4d09-4389-bc59-3af14e7f74d3.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms29',
      name: 'Savlon Small N95 Mask (Adjustable Ear-loops & Nose Foam Pad, Black)',
      variant: '4 pcs',
      price: '₹255',
      originalPrice: '₹280',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4f57fdce-4d09-4389-bc59-3af14e7f74d3.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'ms30',
      name: 'SynoCare 3-Ply Disposable Surgical Mask (Black)',
      variant: '50 pcs',
      price: '₹289',
      originalPrice: '₹500',
      discount: '42% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f10d7e9e-c6cc-4455-b776-7cc2f4d9cacd.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  const milkDrinksProducts = [
    {
      id: 'md1',
      name: 'Horlicks Lite, Regular Malt Drink Mix',
      variant: '450 g',
      price: '₹289',
      originalPrice: '₹310',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/94b0b82d-5e7b-4756-8b5f-be2079cf69fd.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md2',
      name: 'Bournvita Chocolate Drink Mix (Jar)',
      variant: '500 g',
      price: '₹250',
      originalPrice: '₹263',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/30bf92bc-03e0-4928-a793-a0453fcffb3c.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md3',
      name: 'Bournvita Chocolate Drink Mix (Pouch)',
      variant: '500 g',
      price: '₹241',
      originalPrice: '₹249',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/22c1a0a6-0249-42c6-a3f1-12bb139af00f.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md4',
      name: 'Horlicks Classic Malt Drink Mix',
      variant: '1 kg',
      price: '₹489',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ac8c42f5-89a2-40a3-9205-9bb202805d61.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md5',
      name: 'Horlicks Women\'s Plus Chocolate Flavour Drink Mix',
      variant: '400 g',
      price: '₹304',
      originalPrice: '₹324',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2e9fd32f-ffeb-4190-bdee-762056984715.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md6',
      name: 'Bournvita Chocolate Drink Mix (Pouch)',
      variant: '1 kg',
      price: '₹385',
      originalPrice: '₹458',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/70da53e5-9008-45d8-8662-5a39a8759d33.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md7',
      name: 'Horlicks Chocolate Delight Drink Mix',
      variant: '500 g',
      price: '₹229',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9ff16ec3-1cb0-4c5a-b46b-80abf2844120.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md8',
      name: 'Little Joys Nutrimix 2+ Years Chocolate Drink Mix',
      variant: '350 g',
      price: '₹649',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8e8b18e8-a54f-4aef-b437-98c74f43771e.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md9',
      name: 'Bournvita Zero Added Sugar Drink Mix',
      variant: '500 g',
      price: '₹261',
      originalPrice: '₹307',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/eae70498-de97-427b-903b-8b18e9c896e8.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md10',
      name: 'Horlicks Women\'s Plus Caramel Drink Mix (Jar)',
      variant: '400 g',
      price: '₹295',
      originalPrice: '₹315',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bfc712e3-d1bc-4e71-af6a-c24071ed3404.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md11',
      name: 'Complan Royale Chocolate Drink Mix (500 g)',
      variant: '500 g',
      price: '₹294',
      originalPrice: '₹306',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4026e1a2-b204-4394-9b49-00793d455310.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md12',
      name: 'Alt Co Oat Beverage',
      variant: '1 ltr',
      price: '₹245',
      originalPrice: '₹266',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/94e135f3-96cd-4f67-8a8d-ab5e205c1589.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md13',
      name: 'Complan Royale Chocolate Drink Mix (1 kg)',
      variant: '1 kg',
      price: '₹549',
      originalPrice: '₹577',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61be4663-6b7c-4258-bf43-69505c9b1477.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md14',
      name: 'Little Joys NutriMix 7+ Years Chocolate Drink Mix',
      variant: '350 g',
      price: '₹699',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f96613c8-8c97-41b7-8ebc-ccebba7b1b47.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md15',
      name: 'PediaSure Vanilla Delight Drink Mix Refill',
      variant: '375 g',
      price: '₹648',
      originalPrice: '₹685',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9a5a5a86-9a26-41b6-869c-35adbcae36bb.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md16',
      name: 'Gritzo SuperMilk Boy Growth+ Drink Mix (7 - 12 years, Double Chocolate)',
      variant: '400 g',
      price: '₹849',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/00b8f778-4e07-40c5-9f22-8424831edfb8.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md17',
      name: 'Gritzo SuperMilk Boy Growth+ Drink Mix (13+ Years, Double Chocolate)',
      variant: '400 g',
      price: '₹899',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/02830a6a-6a47-43db-b437-c9d3c906e323.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md18',
      name: 'Gritzo SuperMilk Girl Growth+ Drink Mix (7 - 9 years, Double Chocolate)',
      variant: '400 g',
      price: '₹849',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cce769c-f976-49fb-b360-e6047dc6f37b.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md19',
      name: 'Gritzo SuperMilk Girl Growth+ Drink Mix (13+ years, Double Chocolate)',
      variant: '400 g',
      price: '₹899',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71c725fe-9316-4e85-a0a3-dd7b98dde298.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md20',
      name: 'Gritzo Supermilk Overall Growth with 6 g Protein Drink Mix (Double Chocolate, 2-6 years)',
      variant: '400 g',
      price: '₹629',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/764a0f0a-3a3c-4cf6-928b-1a0f89dfc0e0.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md21',
      name: 'Protinex Adults Nutritional and Drink Mix (Chocolate Flavour)',
      variant: '400 g',
      price: '₹526',
      originalPrice: '₹599',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3ca3fe44-e610-4e52-85be-d9b17f14f687.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md22',
      name: 'Nestle Milo RTD Malt Drink with Millets',
      variant: '180 ml',
      price: '₹34',
      originalPrice: '₹42',
      discount: '19% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63c2f85b-c6e3-4455-a587-dc48b857376a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md23',
      name: 'Nestle Milo Kaw Milk Drink',
      variant: '240 ml',
      price: '₹109',
      originalPrice: '₹149',
      discount: '26% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/911b7a37-aa54-495c-9aa5-d2023cc59c6c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md24',
      name: 'Gritzo SuperMilk Height+ 7 g Protein Drink Mix (2 - 6 years, Double Chocolate)',
      variant: '400 g',
      price: '₹749',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/740d536f-2413-4f28-9a64-7abb0037d3e2.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md25',
      name: 'Complan Kesar Badam Drink Mix',
      variant: '500 g',
      price: '₹320',
      originalPrice: '₹333',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/af5f17f4-11e3-4a33-9b37-46988ddca6a2.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md26',
      name: 'Bournvita Chocolate Drink Mix (Jar)',
      variant: '1 kg',
      price: '₹485',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/95bff8c1-fc27-43df-bb5c-1239a5ac0720.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md27',
      name: 'Ensure Diabetes Care Drink Mix - Vanilla Delight',
      variant: '950 g',
      price: '₹2,015',
      originalPrice: '₹2,105',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e9027499-cfb2-47f2-9bcc-1ab1deed570b.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md28',
      name: 'Ensure Diabetes Care Milk Drink Mix',
      variant: '375 g',
      price: '₹880',
      originalPrice: '₹920',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1b837af2-822b-4265-9941-42a10161feea.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'md29',
      name: 'Protinex Adults Drink Mix (Creamy Vanilla Flavour)',
      variant: '400 g',
      price: '₹526',
      originalPrice: '₹599',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6b46a9c1-0d6f-4ecc-8a5b-36dfa433903d.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'md30',
      name: 'Ensure Adult Milk Drink',
      variant: '375 g',
      price: '₹685',
      originalPrice: '₹710',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/32ccb15e-f388-4098-a221-744469d09020.png',
      hasOffer: false,
      eta: '15 mins'
    }
  ];

  const smokingCessationProducts = [
    {
      id: 'sc1',
      name: 'Nicotex Mint Plus Flavour Nicotine Gum',
      variant: '12 pcs',
      price: '₹115',
      originalPrice: '₹123',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e37e32e6-ccf5-43ee-bab4-6d1a274f176f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc2',
      name: 'Nicotex Fruit Burst Nicotine Gum',
      variant: '9 pcs',
      price: '₹86',
      originalPrice: '₹92',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/395833d3-68c2-4777-8362-c2194ee08e7c.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc3',
      name: 'Nicotex Paan Flavour Nicotine Gum',
      variant: '12 pcs',
      price: '₹115',
      originalPrice: '₹123',
      discount: '6% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d4653715-a3bd-4265-83b2-08b86a30163b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc4',
      name: 'Nicotex Mint Plus Nicotine Gum',
      variant: '44 pcs',
      price: '₹356',
      originalPrice: '₹412',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8bb7ba34-ac5f-48e4-95df-268bcfb51d8b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc5',
      name: 'Ryze Nicotine Gum (2 mg, Fresh Fennel)',
      variant: '9 pcs',
      price: '₹76',
      originalPrice: '₹80',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c885f9b0-2bec-4855-952c-3ef491c9dfa4.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc6',
      name: 'Ryze Nicotine Gum (2 mg, Frosty Mint)',
      variant: '9 pcs',
      price: '₹67',
      originalPrice: '₹80',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a067c816-a08e-4110-80dd-69033bbc10af.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc7',
      name: 'Ryze Nicotine Gum (2 mg, Fruit Blast)',
      variant: '9 pcs',
      price: '₹76',
      originalPrice: '₹80',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3ea6b36c-fa6b-4376-a493-d67bab6a9d25.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc8',
      name: 'Sanfe Anti Smoking Patches',
      variant: '5 pcs',
      price: '₹212',
      originalPrice: '₹249',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ce3a6006-615a-499e-a5a0-9c7b97d67ded.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc9',
      name: 'Ryze Nicotine Gum (2 mg, Frosty Mint) - Pack of 2',
      variant: '2 x 9 pcs',
      price: '₹133',
      originalPrice: '₹160',
      discount: '16% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7d5d587f-479e-4d47-b6af-95af85a62d29.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc10',
      name: 'Cigibud Nanoclean Anti Smoking Filter',
      variant: '30 pcs',
      price: '₹350',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/063686c6-f139-4895-946b-5b45e16d8a8f.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'sc11',
      name: 'Fast&Up Lung Detox Supplement Effervescent Tablets for Easy Breathing (Strawberry)',
      variant: '20 tabs',
      price: '₹344',
      originalPrice: '₹365',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ed9466d7-6c66-4b0c-a0de-59bd990fc18a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc12',
      name: 'Nicotex Fruit Burst Nicotine Gum - Pack of 2',
      variant: '2 x 9 pcs',
      price: '₹166',
      originalPrice: '₹185',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6e5da729-87a6-421a-85ce-d221f2f5b6a2.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc13',
      name: 'Nicotex Mint Plus Nicotine Gum - Pack of 2',
      variant: '2 x 44 pcs',
      price: '₹704',
      originalPrice: '₹824',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8bb7ba34-ac5f-48e4-95df-268bcfb51d8b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc14',
      name: 'Nicotex Paan Flavour Nicotine Gum - Pack of 2',
      variant: '2 x 12 pcs',
      price: '₹222',
      originalPrice: '₹246',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d4653715-a3bd-4265-83b2-08b86a30163b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc15',
      name: 'Nicotex Ultra Mint Nicotine Gum',
      variant: '9 pcs',
      price: '₹67',
      originalPrice: '₹92',
      discount: '27% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e37e32e6-ccf5-43ee-bab4-6d1a274f176f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'sc16',
      name: 'Nicotex Ultra Mint Nicotine Gum - Pack of 2',
      variant: '2 x 9 pcs',
      price: '₹133',
      originalPrice: '₹185',
      discount: '28% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e37e32e6-ccf5-43ee-bab4-6d1a274f176f.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  const herbalDrinksProducts = [
    {
      id: 'hd1',
      name: 'Careus Karela Jamun Ras Herbal Juice',
      variant: '1 ltr',
      price: '₹199',
      originalPrice: '₹260',
      discount: '23% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9dff01ca-ba06-4f1b-abc6-e6160974011a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd2',
      name: 'Patanjali Amla Herbal Juice',
      variant: '1 ltr',
      price: '₹140',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a3fdb27-f7ce-4f3a-b894-574d42c84c17.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd3',
      name: 'Patanjali Aloe Vera with Fibre Herbal Juice',
      variant: '1 ltr',
      price: '₹206',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b908782a-8e1a-4f34-bbb1-c6e939ffa3f0.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd4',
      name: 'Dabur Jamun Neem Karela Health Juice',
      variant: '1 ltr',
      price: '₹252',
      originalPrice: '₹315',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/70d220d5-87f7-4142-b034-f66fb535bbe0.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd5',
      name: 'Honitus Hot Sip Ayurvedic Kaadha',
      variant: '30 pcs',
      price: '₹297',
      originalPrice: '₹330',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/220fcf29-16f0-413c-aee4-5f8b46e9e933.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd6',
      name: 'Kapiva Thar Aloe Vera Herbal Juice',
      variant: '1 ltr',
      price: '₹244',
      originalPrice: '₹280',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/15f60ee2-3e14-436c-9060-bb0725202b9b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd7',
      name: 'Kapiva Dia Free Herbal Juice',
      variant: '1 ltr',
      price: '₹562',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ed04eb52-eb83-4e1a-a5c0-ca124861e41f.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd8',
      name: 'Raw Pressery Sugarcane Juice',
      variant: '250 ml',
      price: '₹73',
      originalPrice: '₹75',
      discount: '3% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/231ce19a-c2b9-4e56-89ea-ad9d2feb6769.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd9',
      name: 'Patanjali Giloy Herbal Juice',
      variant: '500 ml',
      price: '₹84',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a535df5b-09a2-42c6-8b9f-a26ae969ec14.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd10',
      name: 'Raw Pressery Pomegranate Juice (250 ml)',
      variant: '250 ml',
      price: '₹135',
      originalPrice: '₹140',
      discount: '4% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/22a489fc-625a-4223-89e1-0bddd7716ed8.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd11',
      name: 'Dabur Giloy Neem with Tulsi Immunity Booster Herbal Juice',
      variant: '1 ltr',
      price: '₹206',
      originalPrice: '₹285',
      discount: '27% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c93c6d82-7335-4487-9d67-350a48709a5e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd12',
      name: 'Kapiva Ayurveda Tulsi Giloy Herbal Juice (Natural Healer)',
      variant: '1 ltr',
      price: '₹272',
      originalPrice: '₹375',
      discount: '27% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fcedf1cd-1cf9-4ca2-89b6-18b08cc0bd3a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd13',
      name: 'Zandu Amla Plus 5 Herbs Immunity & Health Juice',
      variant: '1 ltr',
      price: '₹189',
      originalPrice: '₹248',
      discount: '23% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dd1d95ca-a5ed-411f-870f-75309c7ec1dc.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd14',
      name: 'Dabur Himalayan Apple Cider Vinegar',
      variant: '500 ml',
      price: '₹249',
      originalPrice: '₹450',
      discount: '44% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ea192c8b-b1e8-4c5a-bd15-763291b1c6fe.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd15',
      name: 'Kapiva Wild Amla Herbal Juice',
      variant: '1 ltr',
      price: '₹280',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f75dd2b8-0f20-47bb-bc7e-ae134e2f2cb0.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd16',
      name: 'Health Fields Organic Liv Detox Herbal Tea',
      variant: '25 pcs',
      price: '₹150',
      originalPrice: '₹225',
      discount: '33% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/08a51cc0-ded3-4b20-940f-2c94903f1ef9.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd17',
      name: 'Kapiva Ayurveda BP Sure Herbal Juice (Controls Blood Pressure)',
      variant: '1 ltr',
      price: '₹931',
      originalPrice: '₹983',
      discount: '5% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/67a98eaf-08c5-4221-b8db-27d4a4058144.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd18',
      name: 'Kapiva Ayurveda Karela Jamun Herbal Juice (Sugar & Diabetic Special)',
      variant: '1 ltr',
      price: '₹316',
      originalPrice: '₹374',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/478eeb54-4f3a-46c2-91d8-5b3181fec0b5.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd19',
      name: 'Kapiva Ayurveda Triphala Laxative Herbal Juice',
      variant: '1 ltr',
      price: '₹174',
      originalPrice: '₹279',
      discount: '37% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/15f60ee2-3e14-436c-9060-bb0725202b9b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd20',
      name: 'Krishna\'s Aloe Amla Juice',
      variant: '1 ltr',
      price: '₹262',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a3fdb27-f7ce-4f3a-b894-574d42c84c17.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd21',
      name: 'Krishna\'s High Fibre Fresh Amla Juice',
      variant: '1 ltr',
      price: '₹234',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a3fdb27-f7ce-4f3a-b894-574d42c84c17.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd22',
      name: 'Qava Relaxation Shot Herbal Juice',
      variant: '4 x 60 ml',
      price: '₹1,396',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/231ce19a-c2b9-4e56-89ea-ad9d2feb6769.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'hd23',
      name: 'Zandu Organic Apple Cider Vinegar',
      variant: '500 ml',
      price: '₹298',
      originalPrice: '₹515',
      discount: '42% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ea192c8b-b1e8-4c5a-bd15-763291b1c6fe.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hd24',
      name: 'yourG Buransh Petals Herbal Tea, Digestive Care',
      variant: '20 g',
      price: '₹299',
      originalPrice: '₹349',
      discount: '14% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/08a51cc0-ded3-4b20-940f-2c94903f1ef9.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  const chyawanprashProducts = [
    {
      id: 'cp1',
      name: 'Multani Chyawanprash Special',
      variant: '1 kg',
      price: '₹249',
      originalPrice: '₹410',
      discount: '39% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/47ae6852-e456-4374-821a-305db6e9f37a.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp2',
      name: 'Dabur Chyawanprash',
      variant: '250 g',
      price: '₹99',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d1f9729c-856d-43d9-a54e-be6c10c64a57.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'cp3',
      name: 'Dabur Chyawanprash Awaleha (950 g) - 3x Immunity Action with 40+ Ayurvedic Herbs',
      variant: '950 g',
      price: '₹401',
      originalPrice: '₹450',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e662ac3b-3410-49d8-92fc-75cb3c6521a6.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp4',
      name: 'Dabur Chyawanprash Sugar Free - Safe for Diabetics with 40+ Ayurvedic Herbs',
      variant: '900 g',
      price: '₹374',
      originalPrice: '₹440',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/19ecee33-5159-43c5-ba85-52fdc2cecd78.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp5',
      name: 'Zandu Shilajit Chyawanprash',
      variant: '450 g',
      price: '₹184',
      originalPrice: '₹422',
      discount: '56% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f9cdfbde-37c6-4ee1-8106-5a0a0bcd81f0.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp6',
      name: 'Patanjali Special Chyawanprash (With Saffron)',
      variant: '500 g',
      price: '₹173',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e456fe72-2d1b-49d9-8f7a-2acc3755270a.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'cp7',
      name: 'Patanjali Chyawanprash',
      variant: '1 kg',
      price: '₹262',
      originalPrice: '',
      discount: '',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3712eeb7-204d-4b04-80b2-ef18e050541c.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'cp8',
      name: 'Dabur Chyawanprash Awaleha (Gur)',
      variant: '900 g',
      price: '₹268',
      originalPrice: '₹450',
      discount: '40% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/64b1a760-fc0c-47a3-a2df-0fec1d8c56bc.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp9',
      name: 'Zandu Avaleha Jaggery Chyawanprash For Immunity',
      variant: '910 g',
      price: '₹440',
      originalPrice: '₹500',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7c24c5de-8230-4c58-88f6-59167330d6d9.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp10',
      name: 'Dabur Khajurprash Khajur Delight',
      variant: '900 g',
      price: '₹368',
      originalPrice: '₹525',
      discount: '29% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ad51abed-6caf-46e9-9568-ffee5ae4f32f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp11',
      name: 'Dabur Chyawanprash Awaleha (2 kg) - 3x Immunity Action with 40+ Ayurvedic Herbs',
      variant: '2 kg',
      price: '₹716',
      originalPrice: '₹895',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ee4be22c-1a39-4c79-a702-1f2d0c56ea38.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp12',
      name: 'Dabur Chyawanprash Awaleha - 3x Immunity Action with 40+ Ayurvedic Herbs',
      variant: '500 g',
      price: '₹240',
      originalPrice: '₹260',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c20c1312-b256-4161-8f56-1c12763e42cd.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'cp13',
      name: 'Baidyanath Special Chyawanprash 500 g',
      variant: '500 g',
      price: '₹220',
      originalPrice: '₹247',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d1f9729c-856d-43d9-a54e-be6c10c64a57.png',
      hasOffer: true,
      eta: '15 mins',
      outOfStock: true
    },
    {
      id: 'cp14',
      name: 'Baidyanath Special Chyawanprash 1 kg',
      variant: '1 kg',
      price: '₹279',
      originalPrice: '₹430',
      discount: '35% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/47ae6852-e456-4374-821a-305db6e9f37a.png',
      hasOffer: true,
      eta: '15 mins',
      outOfStock: true
    },
    {
      id: 'cp15',
      name: 'Zandu Kesari Jivan Chyawanprash for Immunity',
      variant: '900 g',
      price: '₹719',
      originalPrice: '₹825',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f9cdfbde-37c6-4ee1-8106-5a0a0bcd81f0.png',
      hasOffer: true,
      eta: '15 mins',
      outOfStock: true
    }
  ];

  const hangoverCureProducts = [
    {
      id: 'hc1',
      name: 'Himalaya PartySmart Hangover Solution (Pack)',
      variant: '5 pcs',
      price: '₹101',
      originalPrice: '₹112',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b4daf933-35fa-4237-9cf3-0e22d3f9fc84.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc2',
      name: 'Fast&Up Nightout Instant Hangover Solution (Lemon Effervescent Tablets) - 10 pieces',
      variant: '10 pcs',
      price: '₹296',
      originalPrice: '₹311',
      discount: '4% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b361227d-caec-4d7f-871b-517528d684a1.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc3',
      name: 'Rebound Hangover fix Lime Hangover Solution (Bottle)',
      variant: '60 ml',
      price: '₹88',
      originalPrice: '₹100',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e7a539ee-b369-4325-9c33-999194798b1b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc4',
      name: 'Morning Fresh Hangover Solution (Cola)',
      variant: '60 ml',
      price: '₹100',
      originalPrice: '₹111',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b0cabd75-088e-41fb-a270-3bdd4e5110ae.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc5',
      name: 'Morning Fresh Strawberry Hangover Solution (Strawberry)',
      variant: '60 ml',
      price: '₹100',
      originalPrice: '₹111',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/eac1e04b-626d-4d21-88b4-00515db28c39.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc6',
      name: 'Fast&Up Nightout Instant Hangover Solution (Lemon)',
      variant: '4 tabs',
      price: '₹126',
      originalPrice: '₹132',
      discount: '4% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bd2e017c-66c9-48fd-bb6a-6c82b98536ac.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc7',
      name: 'Fast&Up Nightout Instant Hangover Solution (Orange)',
      variant: '10 tabs',
      price: '₹287',
      originalPrice: '₹311',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0b427202-7293-4f0d-b01c-d81ab74008e2.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc8',
      name: 'Himalaya Wellness Gummies Hangover Solution (Box)',
      variant: '10 pcs',
      price: '₹168',
      originalPrice: '₹210',
      discount: '20% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e5a31554-da94-43cb-9ee0-74dcfdb46963.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc9',
      name: 'Morning Fresh Hangover Solution (Assorted) - Pack of 4',
      variant: '4 x 60 ml',
      price: '₹352',
      originalPrice: '₹400',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f1576fae-161e-42d1-a00d-f6a027871e4e.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc10',
      name: 'Morning Fresh POP Hangover Solution (Orange)',
      variant: '3 pcs',
      price: '₹120',
      originalPrice: '₹133',
      discount: '9% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/db8339a8-b53a-482b-a56f-2a2f65b58104.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'hc11',
      name: 'Rebound Hangover fix Assorted Hangover Solution (Box)',
      variant: '240 ml',
      price: '₹311',
      originalPrice: '₹370',
      discount: '15% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4b289e6e-3955-4630-8935-2ec8479b2a57.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  const prescriptionMedicinesProducts = [
    {
      id: 'pm1',
      name: '8x Bottle of 120ml Shampoo',
      variant: '120 ml',
      price: '₹435',
      originalPrice: '₹505',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/46a5fc2c-944e-44d1-ba5a-af1b13e8ec27.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm2',
      name: '8x Kt Bottle Of 60ml Shampoo',
      variant: '60 ml',
      price: '₹269',
      originalPrice: '₹304',
      discount: '11% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ad844097-8231-4e8a-95b3-aa3dd628b93b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm3',
      name: 'A Ret 0.1% Tube Of 20gm Gel',
      variant: '20 g',
      price: '₹199',
      originalPrice: '₹224',
      discount: '11% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6c89d46e-ad63-4ee9-a38f-81750519cf36.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm4',
      name: 'ABD 400mg Strip Of 1 Tablet',
      variant: '1 strip',
      price: '₹7',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d235113a-1fa1-489c-9f50-7f4c2812cbb7.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'pm5',
      name: 'AFK Lotion Bottle of 100 ml Lotion',
      variant: '100 ml',
      price: '₹203',
      originalPrice: '₹228',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2951b7df-e812-4678-a38e-14f69446d989.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm6',
      name: 'Ab Phylline SR 200mg Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹246',
      originalPrice: '₹284',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/856cb580-9696-47b3-a600-9e41812bb97f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm7',
      name: 'Acceclowoc SP Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹138',
      originalPrice: '₹150',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e2f5c631-e1b0-4878-a1ca-87b010ad4f27.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm8',
      name: 'Aceclo MR Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹91',
      originalPrice: '₹104',
      discount: '12% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a217825-c313-4c7d-ad51-206102f2fb0b.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm9',
      name: 'Aceclo Plus Strip of 15 Tablets',
      variant: '15 tabs',
      price: '₹91',
      originalPrice: '₹98',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c12c1f86-6ea0-4e7e-aa69-73682858c599.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm10',
      name: 'Aceflam P Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹70',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66fa7f25-8f82-4e2d-a8ed-4130905c1261.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'pm11',
      name: 'Acemiz Mr Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹114',
      originalPrice: '₹124',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a2304f6a-bb76-4110-b8d2-53740d7fd244.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm12',
      name: 'Acemiz S Strip of 10 Tablets',
      variant: '10 tabs',
      price: '₹132',
      originalPrice: '₹144',
      discount: '8% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2086f6a5-21ad-4ebd-a95d-2564c85aad68.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm13',
      name: 'Acenac P Strip of 15 Tablets',
      variant: '15 tabs',
      price: '₹103',
      originalPrice: '₹111',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/856cb580-9696-47b3-a600-9e41812bb97f.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm14',
      name: 'Aciloc 150mg Strip Of 30 Tablets',
      variant: '30 tabs',
      price: '₹50',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e2f5c631-e1b0-4878-a1ca-87b010ad4f27.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'pm15',
      name: 'Aciloc 300mg Strip Of 20 Tablets',
      variant: '20 tabs',
      price: '₹56',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a217825-c313-4c7d-ad51-206102f2fb0b.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'pm16',
      name: 'Aciloc RD 20mg Strip Of 15 Tablets',
      variant: '15 tabs',
      price: '₹86',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c12c1f86-6ea0-4e7e-aa69-73682858c599.png',
      hasOffer: false,
      eta: '15 mins'
    },
    {
      id: 'pm17',
      name: 'Acivir 5% Tube Of 10gm Cream',
      variant: '10 g',
      price: '₹163',
      originalPrice: '₹182',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66fa7f25-8f82-4e2d-a8ed-4130905c1261.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm18',
      name: 'Acivir DT 400mg Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹130',
      originalPrice: '₹145',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a2304f6a-bb76-4110-b8d2-53740d7fd244.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm19',
      name: 'Acnedap 5% Tube Of 15gm Gel',
      variant: '15 g',
      price: '₹456',
      originalPrice: '₹530',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2086f6a5-21ad-4ebd-a95d-2564c85aad68.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm20',
      name: 'Acnesol 1% Tube of 20 gm Gel',
      variant: '20 g',
      price: '₹105',
      originalPrice: '₹113',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6c89d46e-ad63-4ee9-a38f-81750519cf36.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm21',
      name: 'Acnestar Tube Of 22gm Gel',
      variant: '22 g',
      price: '₹112',
      originalPrice: '₹121',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm22',
      name: 'Acnetoin I 20mg Strip Of 10 Capsules',
      variant: '10 pcs',
      price: '₹145',
      originalPrice: '₹175',
      discount: '17% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm23',
      name: 'Acutret 20mg Strip Of 10 Capsules',
      variant: '10 pcs',
      price: '₹269',
      originalPrice: '₹311',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm24',
      name: 'Adaferin 0.1% Tube Of 15gm Gel',
      variant: '15 g',
      price: '₹299',
      originalPrice: '₹346',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm25',
      name: 'Adalene Nano Gel',
      variant: '15 g',
      price: '₹328',
      originalPrice: '₹380',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm26',
      name: 'Add Tears Bottle Of 10ml Eye Drops',
      variant: '10 ml',
      price: '₹119',
      originalPrice: '₹129',
      discount: '7% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm27',
      name: 'Admenta 5mg Strip Of 10 Tablets',
      variant: '10 tabs',
      price: '₹114',
      originalPrice: '₹132',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm28',
      name: 'Advent 228.5mg Tangy Orang Flavour Kids Dry Syrup 30ml',
      variant: '30 ml',
      price: '₹66',
      originalPrice: '₹67',
      discount: '1% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm29',
      name: 'Advent Forte 457mg Tangy Orange Flavour Bottle Of 30ml Dry Syrup',
      variant: '30 ml',
      price: '₹195',
      originalPrice: '₹219',
      discount: '10% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    },
    {
      id: 'pm30',
      name: 'Aerocort 50/50mcg Cfc Free Box Of 200md Metered Dose Inhaler',
      variant: '1 pc',
      price: '₹268',
      originalPrice: '₹310',
      discount: '13% OFF',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/placeholder.png',
      hasOffer: true,
      eta: '15 mins'
    }
  ];

  const getProductsByCategory = (categoryId) => {
    switch (categoryId) {
      case 'sexual-wellness':
        return sexualWellnessProducts;
      case 'adult-diapers':
        return adultDiapersProducts;
      case 'health-wellness-supplements':
        return healthSupplementsProducts;
      case 'protein-workout-supplements':
        return proteinWorkoutSupplementsProducts;
      case 'antiseptic-liquid':
        return antisepticLiquidProducts;
      case 'masks-sanitizers':
        return masksSanitizersProducts;
      case 'milk-drinks':
        return milkDrinksProducts;
      case 'smoking-cessation':
        return smokingCessationProducts;
      case 'herbal-drinks':
        return herbalDrinksProducts;
      case 'chyawanprash':
        return chyawanprashProducts;
      case 'hangover-cure':
        return hangoverCureProducts;
      case 'prescription-medicines':
        return prescriptionMedicinesProducts;
      case 'non-prescription-medicines':
        return medicinesProducts;
      case 'pure-otc':
        return medicinesProducts;
      case 'health-ortho-supports':
        return [];
      default:
        return sexualWellnessProducts;
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const currentProducts = getProductsByCategory(selectedCategory);

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 80px)', marginTop: '80px' }}>
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
                          {category.image ? (
                            <img className="tw-h-full tw-w-full tw-transition-opacity tw-opacity-100" width="100%" src={category.image} data-pf="reset" style={{ transform: 'scale(0.6)' }} />
                          ) : (
                            <div className="tw-bg-gradient-to-r tw-from-grey-100 tw-to-grey-200 motion-safe:tw-animate-pulse tw-overflow-hidden tw-flex tw-flex-col" data-pf="reset" style={{ width: '100%', height: '100%', aspectRatio: '1 / 1' }}></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`tw-text-50 tw-text-center tw-w-full tw-break-words tw-flex tw-justify-center ${selectedCategory === category.id ? 'tw-font-bold' : 'tw-font-regular'}`} data-pf="reset" style={{ color: selectedCategory === category.id ? 'var(--colors-black-900)' : 'var(--colors-grey-700)', fontSize: '8px', lineHeight: '1', textAlign: 'center', paddingTop: category.id === 'herbal-drinks' ? '19px' : '16px' }}>
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
                <PharmacyProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCategorySection;
