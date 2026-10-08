export interface Category {
  id: string;
  slug: string;
  name: string;
  nameBn: string;
  iconName: string;
  itemCount: number;
}

export interface PhoneBrand {
  id: string;
  name: string;
  slug: string;
  logo: string;
}

export interface PhoneModel {
  id: string;
  brandId: string;
  name: string;
  slug: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  titleBn?: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockCount: number;
}

export interface ProductColor {
  id: string;
  name: string;
  nameBn?: string;
  hex: string;
}

export interface ProductSpec {
  label: string;
  labelBn?: string;
  value: string;
  valueBn?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  purchasedVariant?: string;
  helpfulCount?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameBn?: string;
  brand: string;
  categoryId: string;
  compatibleModels: string[]; // list of phone model slugs or ids
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  image: string;
  galleryImages?: string[];
  video?: {
    url: string;
    poster?: string;
    title?: string;
  };
  variants?: ProductVariant[];
  colors?: ProductColor[];
  description?: string;
  descriptionBn?: string;
  specs?: ProductSpec[];
  whatsInTheBox?: string[];
  whatsInTheBoxBn?: string[];
  reviews?: ProductReview[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFlashSale?: boolean;
  features?: string[];
  attributes?: Record<string, string[]>; // category-specific facets e.g. { wattage: ['65w'], ports: ['dual-c'] }
}

export interface FacetOption {
  id: string;
  label: string;
  badge?: string;
}

export interface CategoryFacetGroup {
  id: string;
  title: string;
  options: FacetOption[];
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type ToastType = 'cart' | 'success' | 'warning' | 'error' | 'info';

export interface ToastAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface ToastPayload {
  id: string;
  title?: string;
  message: string;
  type?: ToastType;
  action?: ToastAction;
  duration?: number;
  product?: Product;
}

export interface DeviceModel {
  id: string;
  name: string;
  slug: string;
  series: string;
  isPopular?: boolean;
  year?: number;
  aliases?: string[];
}

export interface DeviceBrand {
  id: string;
  name: string;
  shortName: string;
  isPopular: boolean;
  colorGradient: string;
  textColor: string;
  aliases?: string[];
  models: DeviceModel[];
}

export interface DeviceTypeNode {
  id: 'phone' | 'tablet' | 'watch' | 'audio' | string;
  label: string;
  sublabel: string;
  badge?: string;
  brands: DeviceBrand[];
}

export type DeviceTree = DeviceTypeNode[];

