import type { Category, PhoneBrand, PhoneModel, Product, TrustPoint } from '$lib/types';

export const CATEGORIES: Category[] = [
  { id: 'cases', slug: 'cases-covers', name: 'Cases & Covers', nameBn: 'কেস ও ব্যাককভার', iconName: 'Shield01Icon', itemCount: 142 },
  { id: 'screen-glass', slug: 'screen-protectors', name: 'Screen Protectors', nameBn: 'স্ক্রিন প্রটেক্টর ও গ্লাস', iconName: 'SmartPhone01Icon', itemCount: 86 },
  { id: 'chargers', slug: 'chargers-adapters', name: 'Fast Chargers', nameBn: 'ফাস্ট চার্জার ও অ্যাডাপ্টার', iconName: 'FlashIcon', itemCount: 64 },
  { id: 'cables', slug: 'cables', name: 'Cables & Docks', nameBn: 'কেবিল ও কানেক্টর', iconName: 'UsbIcon', itemCount: 53 },
  { id: 'magsafe', slug: 'magsafe-wireless', name: 'MagSafe Accessories', nameBn: 'ম্যাগসেফ ও ওয়্যারলেস', iconName: 'BatteryCharging01Icon', itemCount: 39 },
  { id: 'audio', slug: 'audio-earphones', name: 'Audio & Earphones', nameBn: 'হেডফোন ও ইয়ারবাডস', iconName: 'HeadphonesIcon', itemCount: 48 },
];

export const PHONE_BRANDS: PhoneBrand[] = [
  { id: 'apple', name: 'Apple', slug: 'apple', logo: 'Apple' },
  { id: 'samsung', name: 'Samsung', slug: 'samsung', logo: 'Samsung' },
  { id: 'google', name: 'Google Pixel', slug: 'google-pixel', logo: 'Google' },
  { id: 'xiaomi', name: 'Xiaomi', slug: 'xiaomi', logo: 'Xiaomi' },
];

export const PHONE_MODELS: PhoneModel[] = [
  // Apple
  { id: 'ip-16-pro-max', brandId: 'apple', name: 'iPhone 16 Pro Max', slug: 'iphone-16-pro-max' },
  { id: 'ip-16-pro', brandId: 'apple', name: 'iPhone 16 Pro', slug: 'iphone-16-pro' },
  { id: 'ip-15-pro-max', brandId: 'apple', name: 'iPhone 15 Pro Max', slug: 'iphone-15-pro-max' },
  { id: 'ip-15-pro', brandId: 'apple', name: 'iPhone 15 Pro', slug: 'iphone-15-pro' },
  { id: 'ip-15', brandId: 'apple', name: 'iPhone 15', slug: 'iphone-15' },
  { id: 'ip-14-pro-max', brandId: 'apple', name: 'iPhone 14 Pro Max', slug: 'iphone-14-pro-max' },
  // Samsung
  { id: 'sam-s24-ultra', brandId: 'samsung', name: 'Galaxy S24 Ultra', slug: 'galaxy-s24-ultra' },
  { id: 'sam-s24-plus', brandId: 'samsung', name: 'Galaxy S24+', slug: 'galaxy-s24-plus' },
  { id: 'sam-s23-ultra', brandId: 'samsung', name: 'Galaxy S23 Ultra', slug: 'galaxy-s23-ultra' },
  { id: 'sam-a55', brandId: 'samsung', name: 'Galaxy A55 5G', slug: 'galaxy-a55-5g' },
  // Google
  { id: 'px-9-pro-xl', brandId: 'google', name: 'Pixel 9 Pro XL', slug: 'pixel-9-pro-xl' },
  { id: 'px-9-pro', brandId: 'google', name: 'Pixel 9 Pro', slug: 'pixel-9-pro' },
  { id: 'px-8-pro', brandId: 'google', name: 'Pixel 8 Pro', slug: 'pixel-8-pro' },
  // Xiaomi
  { id: 'xi-14-ultra', brandId: 'xiaomi', name: 'Xiaomi 14 Ultra', slug: 'xiaomi-14-ultra' },
  { id: 'xi-redmi-note-13-pro', brandId: 'xiaomi', name: 'Redmi Note 13 Pro+', slug: 'redmi-note-13-pro-plus' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'spigen-ultra-16pm',
    slug: 'spigen-ultra-hybrid-magsafe-iphone-16-pro-max',
    name: 'Spigen Ultra Hybrid MagSafe Frosted Case',
    nameBn: 'স্পাইজিন আল্ট্রা হাইব্রিড ম্যাগসেফ ফ্রস্টেড কেস',
    brand: 'Spigen',
    categoryId: 'cases',
    compatibleModels: ['iphone-16-pro-max'],
    price: 2450,
    originalPrice: 2850,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 128,
    inStock: true,
    stockCount: 18,
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    isFlashSale: true,
    features: ['Air Cushion Tech', 'Strong MagSafe Magnet', 'Anti-Yellowing TPU'],
    attributes: {
      caseStyle: ['frosted'],
      features: ['magsafe', 'drop-certified']
    }
  },
  {
    id: 'anker-nano3-30w',
    slug: 'anker-511-nano-3-30w-gan-fast-charger',
    name: 'Anker 511 Nano 3 30W GaN Fast Charger',
    nameBn: 'অ্যাঙ্কর ৫১১ ন্যানো ৩ ৩০ওয়াট ফাস্ট চার্জার',
    brand: 'Anker',
    categoryId: 'chargers',
    compatibleModels: ['iphone-16-pro-max', 'iphone-16-pro', 'iphone-15-pro-max', 'iphone-15-pro', 'galaxy-s24-ultra', 'pixel-9-pro'],
    price: 1950,
    originalPrice: 2400,
    discountPercent: 19,
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    stockCount: 4, // low stock test
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    isFlashSale: true,
    features: ['GaN II Technology', 'Ultra-Compact Size', 'PowerIQ 3.0 Fast Charge'],
    attributes: {
      wattage: ['20w-30w'],
      ports: ['single-c'],
      tech: ['gan']
    }
  },
  {
    id: 'esr-armorite-16pm',
    slug: 'esr-armorite-9h-screen-protector-iphone-16-pro-max',
    name: 'ESR Armorite 9H Ultra-Tough Tempered Glass (2-Pack)',
    nameBn: 'ইএসআর আর্মারাইট ৯এইচ টেম্পার্ড গ্লাস (২ প্যাক)',
    brand: 'ESR',
    categoryId: 'screen-glass',
    compatibleModels: ['iphone-16-pro-max'],
    price: 1650,
    originalPrice: 1950,
    discountPercent: 15,
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockCount: 22,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    features: ['110 lb Impact Resistance', 'Auto-Alignment Tray', 'Ultra HD Clarity'],
    attributes: {
      glassType: ['hd-clear'],
      coverage: ['case-friendly'],
      installation: ['auto-align', 'multi-pack']
    }
  },
  {
    id: 'nillkin-camshield-s24u',
    slug: 'nillkin-camshield-pro-magnetic-galaxy-s24-ultra',
    name: 'Nillkin CamShield Pro Armor Magnetic Case',
    nameBn: 'নিলকিন ক্যামশিল্ড প্রো ম্যাগনেটিক কভার',
    brand: 'Nillkin',
    categoryId: 'cases',
    compatibleModels: ['galaxy-s24-ultra'],
    price: 1850,
    originalPrice: 2200,
    discountPercent: 16,
    rating: 4.8,
    reviewCount: 76,
    inStock: true,
    stockCount: 12,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
    isBestSeller: false,
    isNewArrival: true,
    isFlashSale: true,
    features: ['Patented Camera Lens Slider', 'Impact Resistant Bumper', 'Wireless Charge Friendly'],
    attributes: {
      caseStyle: ['armor'],
      features: ['camera-slider', 'magsafe', 'drop-certified']
    }
  },
  {
    id: 'baseus-blade-powerbank',
    slug: 'baseus-blade-100w-ultra-slim-laptop-power-bank',
    name: 'Baseus Blade 100W Ultra-Slim Digital Power Bank (20000mAh)',
    nameBn: 'বেসাস ব্লেড ১০০ওয়াট ডিজিটাল ডিসপ্লে পাওয়ার ব্যাংক',
    brand: 'Baseus',
    categoryId: 'chargers',
    compatibleModels: ['iphone-16-pro-max', 'galaxy-s24-ultra', 'pixel-9-pro-xl'],
    price: 5400,
    originalPrice: 6200,
    discountPercent: 13,
    rating: 4.9,
    reviewCount: 54,
    inStock: true,
    stockCount: 7,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=80',
    isBestSeller: false,
    isNewArrival: true,
    isFlashSale: true,
    features: ['100W PD Output', '18mm Slim Profile', 'Status Display Screen'],
    attributes: {
      wattage: ['100w-plus'],
      ports: ['multi-port'],
      tech: ['gan', 'pps']
    }
  },
  {
    id: 'torras-ostand-16p',
    slug: 'torras-magnetic-ostand-360-spin-iphone-16-pro',
    name: 'TORRAS Magnetic Ostand 360° Rotatable Ring Stand Case',
    nameBn: 'টোরাস ম্যাগনেটিক ওস্ট্যান্ড ৩৬০ ডিগ্রি কেস',
    brand: 'TORRAS',
    categoryId: 'cases',
    compatibleModels: ['iphone-16-pro'],
    price: 3200,
    originalPrice: 3800,
    discountPercent: 16,
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    stockCount: 15,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
    isBestSeller: false,
    isNewArrival: true,
    features: ['360° Foldable Ring Kickstand', 'Mil-Grade Drop Protection', 'Halbach MagSafe Array'],
    attributes: {
      caseStyle: ['clear'],
      features: ['kickstand', 'magsafe', 'drop-certified']
    }
  },
  {
    id: 'ugreen-nexode-65w',
    slug: 'ugreen-nexode-65w-gan-3-port-charger',
    name: 'UGREEN Nexode 65W GaN 3-Port Fast Wall Charger',
    nameBn: 'ইউগ্রীন নেক্সোড ৬৫ওয়াট ৩-পোর্ট ফাস্ট ওয়াল চার্জার',
    brand: 'UGREEN',
    categoryId: 'chargers',
    compatibleModels: ['iphone-16-pro-max', 'galaxy-s24-ultra', 'xiaomi-14-ultra'],
    price: 2950,
    originalPrice: 3500,
    discountPercent: 16,
    rating: 4.8,
    reviewCount: 110,
    inStock: false, // out of stock test
    stockCount: 0,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    isNewArrival: false,
    features: ['2x USB-C + 1x USB-A', 'Thermal Guard Protection', 'Foldable US Pins'],
    attributes: {
      wattage: ['65w-67w'],
      ports: ['multi-port'],
      tech: ['gan', 'pps']
    }
  },
  {
    id: 'spigen-ezfit-s24u',
    slug: 'spigen-ez-fit-tempered-glass-galaxy-s24-ultra',
    name: 'Spigen Glas.tR EZ FIT Tempered Glass (2-Pack)',
    nameBn: 'স্পাইজিন ইজেড ফিট টেম্পার্ড গ্লাস গ্যালাক্সি এস২৪ আল্ট্রা',
    brand: 'Spigen',
    categoryId: 'screen-glass',
    compatibleModels: ['galaxy-s24-ultra'],
    price: 2150,
    originalPrice: 2500,
    discountPercent: 14,
    rating: 4.7,
    reviewCount: 65,
    inStock: true,
    stockCount: 9,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80',
    isBestSeller: false,
    isNewArrival: true,
    features: ['Oleophobic Anti-Fingerprint', 'Innovative Alignment Frame', 'Case Friendly Cut'],
    attributes: {
      glassType: ['hd-clear'],
      coverage: ['case-friendly'],
      installation: ['auto-align', 'multi-pack']
    }
  },
  {
    id: 'ugreen-100w-cable',
    slug: 'ugreen-100w-braided-usb-c-to-usb-c-cable-2m',
    name: 'UGREEN 100W Braided USB-C to USB-C Cable (2M)',
    nameBn: 'ইউগ্রিন ১০০ ওয়াট ব্রেইডেড টাইপ-সি ক্যাবল (২ মিটার)',
    brand: 'UGREEN',
    categoryId: 'cables',
    compatibleModels: ['iphone-16-pro-max', 'iphone-15-pro-max', 'galaxy-s24-ultra'],
    price: 850,
    originalPrice: 1050,
    discountPercent: 19,
    rating: 4.9,
    reviewCount: 88,
    inStock: true,
    stockCount: 30,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    features: ['100W PD 5A Fast Charge', 'Braided High-Tensile Armor', 'E-Marker Smart Chip'],
    attributes: {
      connector: ['c-to-c'],
      length: ['2m'],
      power: ['100w']
    }
  },
  {
    id: 'anker-magsafe-powerbank-622',
    slug: 'anker-622-magsafe-magnetic-battery-5000mah',
    name: 'Anker 622 Magnetic Battery (MagGo) 5000mAh Foldable Stand',
    nameBn: 'অ্যাঙ্কর ৬২২ ম্যাগসেফ ম্যাগনেটিক পাওয়ার ব্যাংক',
    brand: 'Anker',
    categoryId: 'magsafe',
    compatibleModels: ['iphone-16-pro-max', 'iphone-16-pro', 'iphone-15-pro-max', 'iphone-15-pro', 'iphone-14-pro-max'],
    price: 3600,
    originalPrice: 4200,
    discountPercent: 14,
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
    stockCount: 14,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    features: ['Strong Snap-On Magnetic Hold', 'Built-in Foldable Kickstand', 'Slim 12.8mm Design'],
    attributes: {
      subType: ['powerbank'],
      magneticStrength: ['halbach']
    }
  },
  {
    id: 'baseus-bowie-m2-tws',
    slug: 'baseus-bowie-m2-plus-anc-wireless-earbuds',
    name: 'Baseus Bowie M2+ Hybrid -42dB ANC True Wireless Earbuds',
    nameBn: 'বেসাস বোয়ি এম২ প্লাস এএনসি ট্রু ওয়্যারলেস ইয়ারবাডস',
    brand: 'Baseus',
    categoryId: 'audio',
    compatibleModels: ['iphone-16-pro-max', 'galaxy-s24-ultra', 'pixel-9-pro'],
    price: 3450,
    originalPrice: 3950,
    discountPercent: 13,
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    stockCount: 16,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    features: ['-42dB Hybrid Active Noise Cancelling', '4-Mic ENC Clear Calls', '0.038s Ultra-Low Latency'],
    attributes: {
      audioStyle: ['tws'],
      noiseControl: ['anc', 'enc'],
      features: ['low-latency']
    }
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: 'genuine',
    title: '100% Genuine Guaranteed',
    description: 'Direct imports from verified global brands. Zero counterfeits.',
    icon: 'ShieldCheckIcon'
  },
  {
    id: 'delivery',
    title: 'Dhaka 24h & Islandwide Delivery',
    description: 'Same-day dispatch for Dhaka and fast nationwide courier.',
    icon: 'TruckDeliveryIcon'
  },
  {
    id: 'cod',
    title: 'Cash on Delivery Available',
    description: 'Inspect your order on arrival before handing over payment.',
    icon: 'Banknote01Icon'
  },
  {
    id: 'warranty',
    title: '7-Day Replacement Policy',
    description: 'Hassle-free replacement guarantee on manufacturing defects.',
    icon: 'RotateLeft01Icon'
  },
  {
    id: 'support',
    title: 'Dedicated Customer Care',
    description: 'Direct phone & WhatsApp assistance 10 AM to 10 PM daily.',
    icon: 'CustomerService01Icon'
  }
];

export const FLASH_SALE_PRODUCTS: Product[] = PRODUCTS.filter((p) => p.isFlashSale);

export function enrichProduct(p: Product): Product {
  const isCase = p.categoryId === 'cases';
  const isCharger = p.categoryId === 'chargers';
  const isGlass = p.categoryId === 'screen-glass';

  const defaultGallery = isCase
    ? [
        p.image,
        'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&auto=format&fit=crop&q=80'
      ]
    : isCharger
      ? [
          p.image,
          'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&auto=format&fit=crop&q=80'
        ]
      : [
          p.image,
          'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=800&auto=format&fit=crop&q=80'
        ];

  const defaultVideo = isCase
    ? {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-modern-smartphone-with-a-black-screen-42998-large.mp4',
        poster: p.image,
        title: `${p.name} Demonstration & Drop-Test Demo`
      }
    : isCharger
      ? {
          url: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-smartphone-plugged-into-a-charger-41551-large.mp4',
          poster: p.image,
          title: `${p.name} GaN Fast Charging Test`
        }
      : {
          url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-applying-a-screen-protector-to-a-phone-41554-large.mp4',
          poster: p.image,
          title: `${p.name} Zero-Bubble Installation Guide`
        };

  const chargerVariants = [
    {
      id: 'red-64w',
      title: 'Red • 64W Ultra',
      titleBn: 'লাল • ৬৪ ওয়াট আল্ট্রা',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
      price: p.price + 500,
      originalPrice: (p.originalPrice || p.price) + 600,
      inStock: true,
      stockCount: 8
    },
    {
      id: 'blue-64w',
      title: 'Blue • 64W Ultra',
      titleBn: 'নীল • ৬৪ ওয়াট আল্ট্রা',
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=80',
      price: p.price + 500,
      originalPrice: (p.originalPrice || p.price) + 600,
      inStock: true,
      stockCount: 6
    },
    {
      id: 'red-30w',
      title: 'Red • 30W Fast',
      titleBn: 'লাল • ৩০ ওয়াট ফাস্ট',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
      price: p.price,
      originalPrice: p.originalPrice,
      inStock: true,
      stockCount: 14
    },
    {
      id: 'blue-30w',
      title: 'Blue • 30W Fast',
      titleBn: 'নীল • ৩০ ওয়াট ফাস্ট',
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=80',
      price: p.price,
      originalPrice: p.originalPrice,
      inStock: true,
      stockCount: 10
    }
  ];

  const caseVariants = [
    {
      id: 'matte-black-magsafe',
      title: 'Matte Black • MagSafe',
      titleBn: 'ম্যাট ব্ল্যাক • ম্যাগসেফ',
      image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&auto=format&fit=crop&q=80',
      price: p.price,
      originalPrice: p.originalPrice,
      inStock: true,
      stockCount: p.stockCount
    },
    {
      id: 'crystal-clear-magsafe',
      title: 'Crystal Clear • MagSafe',
      titleBn: 'ক্রিস্টাল ক্লিয়ার • ম্যাগসেফ',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80',
      price: p.price,
      originalPrice: p.originalPrice,
      inStock: true,
      stockCount: 12
    },
    {
      id: 'titanium-gray-stand',
      title: 'Titanium Gray • Ring Stand',
      titleBn: 'টাইটানিয়াম গ্রে • রিং স্ট্যান্ড',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
      price: p.price + 350,
      originalPrice: (p.originalPrice || p.price) + 400,
      inStock: true,
      stockCount: 9
    }
  ];

  const glassVariants = [
    {
      id: 'clear-2pack',
      title: 'Ultra HD Clear • 2-Pack',
      titleBn: 'আল্ট্রা এইচডি ক্লিয়ার • ২-প্যাক',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80',
      price: p.price,
      originalPrice: p.originalPrice,
      inStock: true,
      stockCount: p.stockCount
    },
    {
      id: 'privacy-2pack',
      title: 'Anti-Spy Privacy • 2-Pack',
      titleBn: 'অ্যান্টি-স্পাই প্রাইভেসি • ২-প্যাক',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
      price: p.price + 250,
      originalPrice: (p.originalPrice || p.price) + 300,
      inStock: true,
      stockCount: 15
    }
  ];

  const defaultVariants = isCharger ? chargerVariants : isGlass ? glassVariants : caseVariants;

  const defaultColors = isCharger
    ? [
        { id: 'white', name: 'Glacier White', nameBn: 'গ্লেসিয়ার হোয়াইট', hex: '#f8fafc' },
        { id: 'black', name: 'Phantom Black', nameBn: 'ফ্যান্টম ব্ল্যাক', hex: '#0f172a' }
      ]
    : [
        { id: 'black', name: 'Matte Black', nameBn: 'ম্যাট ব্ল্যাক', hex: '#1e293b' },
        { id: 'clear', name: 'Crystal Clear', nameBn: 'ক্রিস্টাল ক্লিয়ার', hex: '#e2e8f0' },
        { id: 'titanium', name: 'Natural Titanium', nameBn: 'ন্যাচারাল টাইটানিয়াম', hex: '#78716c' }
      ];

  const defaultSpecs = [
    { label: 'Brand Origin', labelBn: 'ব্র্যান্ডের উৎস', value: `${p.brand} Official`, valueBn: `${p.brand} অফিসিয়াল` },
    { label: 'Build Material', labelBn: 'তৈরির উপাদান', value: isCase ? 'Bayer TPU & Polycarbonate' : isCharger ? 'GaN II Semiconductor' : '9H Aluminate Glass', valueBn: isCase ? 'বায়ার টিপিইউ ও পলিকার্বোনেট' : isCharger ? 'গ্যালিয়াম নাইট্রাইড II' : '৯এইচ অ্যালুমিনেট গ্লাস' },
    { label: 'MagSafe Support', labelBn: 'ম্যাগসেফ সাপোর্ট', value: isCase ? 'Built-in 36-N52 Neodymium Ring' : 'Universal Wireless / PD', valueBn: isCase ? '৩৬টি এন৫২ নিওডিমিয়াম ম্যাগনেট' : 'ইউনিভার্সাল ওয়্যারলেস / পিডি' },
    { label: 'Warranty Period', labelBn: 'ওয়ারেন্টি মেয়াদ', value: '6 Months Replacement Guarantee', valueBn: '৬ মাস অফিসিয়াল রিপ্লেসমেন্ট' },
    { label: 'Certification', labelBn: 'সার্টিফিকেশন', value: 'CE, RoHS, FCC Certified', valueBn: 'সিই, আরওএইচএস, এফসিসি সার্টিফাইড' }
  ];

  const defaultBox = isCase
    ? ['1x Protective Phone Case', '1x Authenticity Card with Scratch Code', '1x Microfiber Polishing Cloth']
    : isCharger
      ? ['1x Fast Charging Wall Adapter', '1x User Manual & Safety Guide', '1x Warranty Certificate']
      : ['2x 9H Tempered Glass Protectors', '1x Easy Auto-Alignment Installation Frame', '2x Cleaning & Dust Removal Kits'];

  const defaultBoxBn = isCase
    ? ['১টি প্রোটেকটিভ ফোন কেস', '১টি স্ক্র্যাচ কোডযুক্ত প্রমাণীকরণ কার্ড', '১টি মাইক্রোফাইবার ক্লিনিং ক্লথ']
    : isCharger
      ? ['১টি ফাস্ট চার্জার ওয়াল অ্যাডাপ্টার', '১টি ইউজার ম্যানুয়াল ও নির্দেশিকা', '১টি অফিসিয়াল ওয়ারেন্টি কার্ড']
      : ['২টি ৯এইচ টেম্পার্ড গ্লাস প্রটেক্টর', '১টি স্বয়ংক্রিয় এলাইনমেন্ট ফ্রেম', '২টি ডাস্ট রিমুভাল ও ক্লিনিং কিট'];

  const defaultReviews = [
    {
      id: 'rev-1',
      userName: 'Ashraful Islam',
      rating: 5,
      date: '2 days ago',
      comment: 'Super premium quality! The fit on my phone is millimeter perfect. Ordered in Dhaka and received in less than 24 hours.',
      verified: true,
      purchasedVariant: 'Matte Black • iPhone 16 Pro Max',
      helpfulCount: 18
    },
    {
      id: 'rev-2',
      userName: 'Nadia Rahman',
      rating: 5,
      date: '1 week ago',
      comment: 'Authentic product with genuine hologram. Magnets snap onto my car mount with crazy strength. Highly recommend Joy Telecom!',
      verified: true,
      purchasedVariant: 'Frosted Clear • iPhone 16 Pro',
      helpfulCount: 12
    },
    {
      id: 'rev-3',
      userName: 'Tanvir Ahmed',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Original product packaging and excellent tactile button clicks. Delivery outside Dhaka took around 48 hours. Satisfied overall.',
      verified: true,
      purchasedVariant: 'Deep Blue • Galaxy S24 Ultra',
      helpfulCount: 7
    },
    {
      id: 'rev-4',
      userName: 'Mahmudul Hasan',
      rating: 5,
      date: '3 weeks ago',
      comment: '100% genuine accessory. Air cushions at the corners are sturdy and MagSafe charging speed is completely uninterrupted.',
      verified: true,
      purchasedVariant: 'Titanium Gray • iPhone 16 Pro Max',
      helpfulCount: 5
    }
  ];

  return {
    ...p,
    video: p.video ?? defaultVideo,
    galleryImages: p.galleryImages ?? defaultGallery,
    variants: p.variants ?? defaultVariants,
    colors: p.colors ?? defaultColors,
    description: p.description ?? `The ${p.name} engineered by ${p.brand} is built to deliver uncompromising everyday protection and peak performance. Designed specifically with precision cutouts, tactile feedback covers, and elevated bezels to safeguard your camera lenses and display against severe impacts.`,
    descriptionBn: p.descriptionBn ?? `${p.brand}-এর আসল ${p.nameBn ?? p.name} আপনার ডিভাইসের জন্য সর্বোচ্চ সুরক্ষা এবং চমৎকার হ্যান্ডফিল নিশ্চিত করে। নিখুঁত কাটিং, সহজে টিপতে পারা বাটন এবং ক্যামেরা লেন্স সুরক্ষায় বিশেষ রেইজড বেজেল রয়েছে।`,
    specs: p.specs ?? defaultSpecs,
    whatsInTheBox: p.whatsInTheBox ?? defaultBox,
    whatsInTheBoxBn: p.whatsInTheBoxBn ?? defaultBoxBn,
    reviews: p.reviews ?? defaultReviews
  };
}

export function getProductBySlug(slug: string): Product | undefined {
  const found = PRODUCTS.find((p) => p.slug === slug);
  if (!found) return undefined;
  return enrichProduct(found);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aCompat = a.compatibleModels.some((m) => product.compatibleModels.includes(m));
      const bCompat = b.compatibleModels.some((m) => product.compatibleModels.includes(m));
      if (aCompat && !bCompat) return -1;
      if (!aCompat && bCompat) return 1;
      if (a.categoryId === product.categoryId && b.categoryId !== product.categoryId) return -1;
      if (a.categoryId !== product.categoryId && b.categoryId === product.categoryId) return 1;
      return 0;
    })
    .slice(0, limit)
    .map(enrichProduct);
}
