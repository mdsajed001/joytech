import type { Product, ProductVariant, ToastPayload } from '$lib/types';
import { TRANSLATIONS, type SupportedLanguage, type TranslationKey } from '$lib/i18n/translations';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
  selectedModel?: string;
  selectedModelName?: string;
}

export class CartState {
  items = $state<CartItem[]>([
    {
      id: 'spigen-ultra-16pm__base__iphone-16-pro-max',
      product: {
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
        features: ['Air Cushion Tech', 'Strong MagSafe Magnet', 'Anti-Yellowing TPU']
      },
      quantity: 1,
      selectedModel: 'iphone-16-pro-max',
      selectedModelName: 'iPhone 16 Pro Max'
    },
    {
      id: 'anker-gan-30w__30w-white__iphone-16-pro-max',
      product: {
        id: 'anker-gan-30w',
        slug: 'anker-nano-30w-gan-fast-charger',
        name: 'Anker 511 Nano 30W GaN Fast Wall Charger',
        nameBn: 'অ্যাংকার ন্যানো ৩০ ওয়াট ফাস্ট ওয়াল চার্জার',
        brand: 'Anker',
        categoryId: 'chargers',
        compatibleModels: ['iphone-16-pro-max', 'galaxy-s24-ultra', 'pixel-9-pro-xl'],
        price: 1850,
        originalPrice: 2200,
        discountPercent: 16,
        rating: 4.9,
        reviewCount: 94,
        inStock: true,
        stockCount: 24,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80',
        isBestSeller: true,
        features: ['GaN II Tech', 'Ultra Compact', 'ActiveShield 2.0']
      },
      quantity: 1,
      selectedVariant: {
        id: '30w-white',
        title: '30W White',
        price: 1850,
        originalPrice: 2200,
        inStock: true,
        stockCount: 24,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80'
      },
      selectedModel: 'iphone-16-pro-max',
      selectedModelName: 'iPhone 16 Pro Max'
    }
  ]);

  deliveryZone = $state<'dhaka' | 'outside_dhaka'>('dhaka');
  deliverySpeed = $state<'standard' | 'express'>('standard');
  appliedCoupons = $state<{code: string, discount: number}[]>([]);
  
  get couponDiscount(): number {
    return this.appliedCoupons.reduce((sum, coupon) => sum + coupon.discount, 0);
  }
  pointsToRedeem = $state<number>(0);
  
  toasts = $state<ToastPayload[]>([]);
  toastMessage = $state<string | null>(null);
  toastTimeout = $state<any>(null);
  lastAddedTimestamp = $state<number>(0);

  get count(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + (item.selectedVariant?.price ?? item.product.price) * item.quantity, 0);
  }

  get isFreeDelivery(): boolean {
    return true; // 1st Order Free Delivery active
  }

  get freeDeliveryRemaining(): number {
    return Math.max(0, 2500 - this.subtotal);
  }

  get freeDeliveryProgressPercent(): number {
    return Math.min(100, Math.round((this.subtotal / 2500) * 100));
  }

  get deliveryFee(): number {
    if (this.items.length === 0) return 0;
    if (this.isFreeDelivery) return 0;
    return 60;
  }

  get grandTotal(): number {
    return Math.max(0, this.subtotal + this.deliveryFee - this.couponDiscount - this.pointsToRedeem);
  }

  addItem(
    product: Product,
    quantity = 1,
    selectedVariant?: ProductVariant | null,
    selectedModel?: string,
    selectedModelName?: string
  ) {
    const variantId = selectedVariant?.id ?? 'base';
    const modelKey = selectedModel ?? 'any';
    const itemId = `${product.id}__${variantId}__${modelKey}`;

    const existing = this.items.find(i => i.id === itemId);
    if (existing) {
      existing.quantity = Math.min(10, existing.quantity + quantity);
    } else {
      this.items.push({
        id: itemId,
        product,
        quantity: Math.min(10, Math.max(1, quantity)),
        selectedVariant: selectedVariant ?? undefined,
        selectedModel,
        selectedModelName
      });
    }
    this.lastAddedTimestamp = Date.now();
    this.showToast({
      title: 'Added to Cart',
      message: selectedVariant ? `${product.name} (${selectedVariant.title})` : product.name,
      type: 'cart',
      product,
      action: {
        label: 'View Cart',
        href: '/cart'
      },
      duration: 4500
    });
  }

  updateQuantity(itemId: string, quantity: number) {
    const item = this.items.find(i => i.id === itemId || i.product.id === itemId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(item.id);
      } else {
        item.quantity = Math.min(10, Math.max(1, quantity));
      }
    }
  }

  removeItem(itemId: string) {
    const target = this.items.find(i => i.id === itemId || i.product.id === itemId);
    if (target) {
      this.items = this.items.filter(i => i.id !== target.id);
      this.showToast(`Removed "${target.product.name}" from cart.`);
    }
  }

  applyCoupon(code: string): boolean {
    const clean = code.trim().toUpperCase();
    if (!clean) return false;
    
    if (this.appliedCoupons.find(c => c.code === clean)) {
      this.showToast('Coupon already applied!');
      return false;
    }

    if (clean === 'JOYVIP500') {
      this.appliedCoupons.push({ code: clean, discount: 500 });
      this.showToast('Coupon "JOYVIP500" applied: ৳500 OFF!');
      return true;
    } else if (clean === 'EIDGIFT200') {
      this.appliedCoupons.push({ code: clean, discount: 200 });
      this.showToast('Coupon "EIDGIFT200" applied: ৳200 OFF!');
      return true;
    } else if (clean === 'FREEDELIVERY') {
      this.appliedCoupons.push({ code: clean, discount: this.deliveryFee });
      this.showToast('Coupon "FREEDELIVERY" applied: Free Shipping!');
      return true;
    } else {
      this.appliedCoupons.push({ code: clean, discount: 100 });
      this.showToast(`Coupon "${clean}" applied: ৳100 OFF!`);
      return true;
    }
  }

  removeCoupon(code: string) {
    this.appliedCoupons = this.appliedCoupons.filter(c => c.code !== code);
    this.showToast('Coupon removed.');
  }

  redeemPoints(pts: number) {
    this.pointsToRedeem = Math.max(0, Math.min(pts, this.subtotal));
    if (pts > 0) {
      this.showToast(`Redeemed ${pts} points for ৳${pts} store credit!`);
    }
  }

  setDeliveryZone(zone: 'dhaka' | 'outside_dhaka') {
    this.deliveryZone = zone;
  }

  setDeliverySpeed(speed: 'standard' | 'express') {
    this.deliverySpeed = speed;
  }

  clearCart() {
    this.items = [];
    this.appliedCoupons = [];
    this.pointsToRedeem = 0;
  }

  showToast(
    payloadOrMsg: string | Omit<ToastPayload, 'id'>,
    options?: Partial<Omit<ToastPayload, 'id' | 'message'>>
  ): string {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    let payload: ToastPayload;

    if (typeof payloadOrMsg === 'string') {
      payload = {
        id,
        message: payloadOrMsg,
        type: options?.type ?? 'info',
        title: options?.title,
        action: options?.action,
        duration: options?.duration ?? 4000,
        product: options?.product
      };
    } else {
      payload = {
        id,
        ...payloadOrMsg,
        type: payloadOrMsg.type ?? 'info',
        duration: payloadOrMsg.duration ?? 4000
      };
    }

    this.toastMessage = payload.message;

    // Maintain max 3 toasts in stack for clean visual flow
    if (this.toasts.length >= 3) {
      this.toasts = this.toasts.slice(-2);
    }
    this.toasts = [...this.toasts, payload];
    return id;
  }

  dismissToast(id: string) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    if (this.toasts.length === 0) {
      this.toastMessage = null;
    }
  }
}

export const cartState = new CartState();

export type AppTheme = 'light' | 'dark' | 'system';

export class ThemeState {
  theme = $state<AppTheme>('light');
  isDark = $state(false);

  init() {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('joy_theme') as AppTheme | null;
    this.setTheme(saved || 'light');

    // Listen for OS scheme changes if system mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.theme === 'system') {
        this.applyTheme();
      }
    });
  }

  setTheme(theme: AppTheme) {
    this.theme = theme;
    if (typeof window !== 'undefined') {
      localStorage.setItem('joy_theme', theme);
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (typeof document === 'undefined') return;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = this.theme === 'dark' || (this.theme === 'system' && prefersDark);
    this.isDark = shouldBeDark;

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}

export const themeState = new ThemeState();

export class I18nState {
  language = $state<SupportedLanguage>('en');

  init() {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('joy_lang') as SupportedLanguage | null;
    this.setLanguage(saved || 'en');
  }

  setLanguage(lang: SupportedLanguage) {
    this.language = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('joy_lang', lang);
      document.documentElement.lang = lang;
      if (lang === 'bn') {
        document.documentElement.classList.add('font-bengali');
      } else {
        document.documentElement.classList.remove('font-bengali');
      }
    }
  }

  t(key: TranslationKey): string {
    const langDict = TRANSLATIONS[this.language];
    return (langDict && (langDict as any)[key]) || TRANSLATIONS['en'][key] || key;
  }
}

export const i18nState = new I18nState();

export class SearchState {
  isMobileOpen = $state(false);

  openMobile() {
    this.isMobileOpen = true;
  }

  closeMobile() {
    this.isMobileOpen = false;
  }
}

export const searchState = new SearchState();

export class AutoWizardState {
  isDrawerOpen = $state(false);
  step = $state<'type' | 'brand' | 'model' | 'done'>('type');
  deviceType = $state<string | null>(null);
  brand = $state<string | null>(null);
  model = $state<string | null>(null);

  get canGoBack(): boolean {
    return this.step !== 'type';
  }

  goBack() {
    if (this.step === 'brand') {
      this.step = 'type';
      this.brand = null;
      this.model = null;
    } else if (this.step === 'model') {
      this.step = 'brand';
      this.model = null;
    } else if (this.step === 'done') {
      this.step = 'model';
    }
  }

  selectType(type: string) {
    this.deviceType = type;
    this.step = 'brand';
  }
  
  selectBrand(brand: string) {
    this.brand = brand;
    this.step = 'model';
  }

  selectModel(model: string) {
    this.model = model;
    this.step = 'done';
  }
  
  editStep(target: 'type' | 'brand' | 'model') {
    this.step = target;
    if (target === 'type') {
      this.brand = null;
      this.model = null;
    }
    if (target === 'brand') {
      this.model = null;
    }
  }

  reset() {
    this.step = 'type';
    this.deviceType = null;
    this.brand = null;
    this.model = null;
  }
}

export const autoWizardState = new AutoWizardState();
