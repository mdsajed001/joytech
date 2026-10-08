import type { Product } from '$lib/types';
import { PRODUCTS } from './catalog';

export interface OfferEvent {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  subtitle: string;
  badge: string;
  discountHighlight: string;
  theme: 'orange' | 'purple' | 'blue' | 'emerald';
  gradient: string;
  countdownHours?: number;
  productIds: string[];
}

export interface PromoCoupon {
  code: string;
  discount: string;
  minSpend: string;
  desc: string;
}

export const PROMO_COUPONS: PromoCoupon[] = [
  {
    code: 'JOY200',
    discount: '৳200 OFF',
    minSpend: 'Min. spend ৳2,000',
    desc: 'Valid on all premium Spigen & ESR accessories'
  },
  {
    code: 'FREESHIP',
    discount: 'Free Delivery',
    minSpend: 'Orders over ৳1,500',
    desc: 'Instant nationwide door-to-door courier'
  },
  {
    code: 'COMBO500',
    discount: '৳500 OFF',
    minSpend: 'Buy Case + Screen Protector',
    desc: 'Automatic bundle savings at checkout'
  },
  {
    code: 'ANKER10',
    discount: '10% Extra',
    minSpend: 'Anker GaN products',
    desc: 'Official 18-month warranty guarantee'
  }
];

// Additional exclusive promotional products for the offers hub
export const EXTRA_OFFER_PRODUCTS: Product[] = [
  {
    id: 'ugreen-silicone-cable-100w',
    slug: 'ugreen-100w-liquid-silicone-type-c-cable',
    name: 'UGREEN 100W PD Liquid Silicone Fast Charging Cable (1.5m)',
    nameBn: 'ইউগ্রীন ১০০ওয়াট লিকুইড সিলিকন ফাস্ট চার্জিং ক্যাবল',
    brand: 'UGREEN',
    categoryId: 'cables',
    compatibleModels: ['iphone-16-pro-max', 'iphone-15-pro-max', 'galaxy-s24-ultra', 'pixel-9-pro-xl'],
    price: 850,
    originalPrice: 1250,
    discountPercent: 32,
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    stockCount: 25,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    isFlashSale: true,
    features: ['100W Power Delivery', 'Tangle-Free Soft Silicone', 'E-Marker Smart Chip']
  },
  {
    id: 'esr-lens-protector-16pm',
    slug: 'esr-camera-lens-protectors-iphone-16-pro-max',
    name: 'ESR Armorite Camera Lens Protectors (Individual Rings)',
    nameBn: 'ইএসআর ক্যামেরা লেন্স প্রটেক্টর রিং',
    brand: 'ESR',
    categoryId: 'screen-glass',
    compatibleModels: ['iphone-16-pro-max', 'iphone-16-pro'],
    price: 950,
    originalPrice: 1400,
    discountPercent: 32,
    rating: 4.9,
    reviewCount: 68,
    inStock: true,
    stockCount: 16,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80',
    isBestSeller: false,
    isNewArrival: true,
    features: ['HD Ultra Clarity', 'Aviation Titanium Rim', 'Zero Glare Reflection']
  },
  {
    id: 'spigen-arcpack-magsafe',
    slug: 'spigen-arcpack-magsafe-power-bank-5000mah',
    name: 'Spigen ArcPack MagSafe Wireless 5000mAh Power Bank',
    nameBn: 'স্পাইজিন আর্কপ্যাক ম্যাগসেফ ৫০০০ মিলিঅ্যাম্পিয়ার পাওয়ার ব্যাংক',
    brand: 'Spigen',
    categoryId: 'magsafe',
    compatibleModels: ['iphone-16-pro-max', 'iphone-16-pro', 'iphone-15-pro-max'],
    price: 3600,
    originalPrice: 4500,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    stockCount: 11,
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    features: ['Strong Magnetic Grip', 'Foldable Kickstand', 'Pass-Through Charging']
  },
  {
    id: 'baseus-cleaning-kit-7in1',
    slug: 'baseus-7-in-1-electronic-cleaning-kit',
    name: 'Baseus 7-in-1 Multifunctional Gadget & Earphone Cleaning Kit',
    nameBn: 'বেসাস ৭-ইন-১ মাল্টিফাংশনাল গ্যাজেট ক্লিনিং কিট',
    brand: 'Baseus',
    categoryId: 'cables',
    compatibleModels: ['iphone-16-pro-max', 'galaxy-s24-ultra'],
    price: 650,
    originalPrice: 950,
    discountPercent: 31,
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    stockCount: 30,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80',
    isBestSeller: true,
    features: ['Flocking Sponge Tip', 'High-Density Soft Brush', 'Keycap Puller Included']
  }
];

// Unified catalog reference mapping
export const ALL_OFFER_PRODUCTS: Product[] = [...PRODUCTS, ...EXTRA_OFFER_PRODUCTS];

export const OFFER_EVENTS: OfferEvent[] = [
  {
    id: 'flash-sale-madness',
    slug: 'flash-sale',
    title: 'Flash Sale Madness',
    titleBn: 'ফ্ল্যাশ সেল ম্যাডনেস',
    subtitle: 'Lightning deals on top authentic gear — limited quantities remaining',
    badge: 'Limited Time Rush',
    discountHighlight: 'Up to 45% OFF',
    theme: 'orange',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    countdownHours: 18,
    productIds: [
      'spigen-ultra-16pm',
      'anker-nano3-30w',
      'esr-armorite-16pm',
      'ugreen-silicone-cable-100w',
      'nillkin-camshield-s24u',
      'baseus-blade-powerbank'
    ]
  },
  {
    id: 'protection-combos',
    slug: 'combos',
    title: 'All-in-One Protection Packs',
    titleBn: 'অল-ইন-ওয়ান প্রোটেকশন কম্বো',
    subtitle: 'Bundle Case + 9H Screen Guard + Camera Lens Rings for 360° armor',
    badge: 'High-Value Bundles',
    discountHighlight: 'Save Flat 30%',
    theme: 'purple',
    gradient: 'from-purple-700 via-indigo-700 to-blue-700',
    countdownHours: 36,
    productIds: [
      'spigen-ultra-16pm',
      'esr-armorite-16pm',
      'esr-lens-protector-16pm',
      'torras-ostand-16p',
      'spigen-ezfit-s24u'
    ]
  },
  {
    id: 'anker-power-week',
    slug: 'anker-fest',
    title: 'Anker Power & Charging Fest',
    titleBn: 'অ্যাঙ্কর পাওয়ার ও চার্জিং ফেস্ট',
    subtitle: 'Next-gen GaN chargers, braided silicone cords & MagSafe wireless power',
    badge: 'Official Brand Fest',
    discountHighlight: 'Up to 30% OFF',
    theme: 'blue',
    gradient: 'from-blue-600 via-cyan-600 to-sky-700',
    countdownHours: 48,
    productIds: [
      'anker-nano3-30w',
      'ugreen-silicone-cable-100w',
      'spigen-arcpack-magsafe',
      'baseus-blade-powerbank',
      'ugreen-nexode-65w'
    ]
  },
  {
    id: 'budget-clearance-under-999',
    slug: 'under-999',
    title: 'Mega Clearance Under ৳999',
    titleBn: 'মেগা ক্লিয়ারেন্স ৯৯৯ টাকার নিচে',
    subtitle: 'Everyday essentials, high-speed cables, and protective guards at rock-bottom prices',
    badge: 'Budget Corner',
    discountHighlight: 'Everything Under ৳999',
    theme: 'emerald',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    productIds: [
      'baseus-cleaning-kit-7in1',
      'ugreen-silicone-cable-100w',
      'esr-lens-protector-16pm',
      'esr-armorite-16pm',
      'nillkin-camshield-s24u'
    ]
  }
];

export function getEventProducts(event: OfferEvent): Product[] {
  return event.productIds
    .map((id) => ALL_OFFER_PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}

export function getEventBySlug(slug: string): OfferEvent | undefined {
  return OFFER_EVENTS.find((e) => e.slug === slug);
}
