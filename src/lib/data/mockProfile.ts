import type { Product } from '$lib/types';
import { PRODUCTS } from '$lib/data/catalog';

export type TrackingStatusStage =
  | 'placed'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered';

export interface TrackingStage {
  key: TrackingStatusStage;
  label: string;
  timestamp?: string;
  description: string;
  completed: boolean;
  current: boolean;
}

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'processing' | 'ready_to_ship' | 'shipped' | 'delivered' | 'cancelled';
  statusLabel: string;
  total: number;
  subtotal: number;
  deliveryFee: number;
  paymentMethod: string;
  courierName: string;
  trackingNumber: string;
  estimatedDelivery: string;
  deliveryAddress: string;
  items: OrderItem[];
  stages: TrackingStage[];
}

export interface SavedAddress {
  id: string;
  tag: 'Home' | 'Office' | 'Other';
  recipientName: string;
  phone: string;
  division: string;
  district: string;
  area: string;
  fullAddress: string;
  isDefault: boolean;
}

export interface CustomerProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
  memberSince: string;
  tier: string;
  loyaltyPoints: number;
}

export interface NotificationSettings {
  smsDeliveryUpdates: boolean;
  whatsappUpdates: boolean;
  emailPromotions: boolean;
  restockAlerts: boolean;
}

export interface UserPreferences {
  language: 'en' | 'bn';
  notifications: NotificationSettings;
}

export const MOCK_PROFILE: CustomerProfile = {
  id: 'cust-78192',
  name: 'Tanvir Hossain',
  phone: '+880 1712-345678',
  email: 'tanvir.joytech@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  memberSince: 'March 2024',
  tier: 'VIP Platinum',
  loyaltyPoints: 1450
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ord-10501',
    orderNumber: 'JT-98215',
    date: '22 Sep 2026',
    status: 'processing',
    statusLabel: 'Packed at Hub',
    total: 1850,
    subtotal: 1750,
    deliveryFee: 100,
    paymentMethod: 'bKash Online Payment',
    courierName: 'Steadfast Courier',
    trackingNumber: 'ST-92810501',
    estimatedDelivery: 'Tomorrow by 4:00 PM',
    deliveryAddress: 'House 42, Road 11, Block D, Banani, Dhaka 1213',
    items: [
      {
        id: 'item-101',
        productId: 'esr-halolock-16pm',
        name: 'ESR HaloLock MagSafe Armor Case',
        variant: 'Cyber Armor / iPhone 16 Pro Max',
        price: 1750,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?w=600&auto=format&fit=crop&q=80'
      }
    ],
    stages: [
      {
        key: 'placed',
        label: 'Order Placed',
        timestamp: '22 Sep, 02:10 PM',
        description: 'Order confirmed & payment verified.',
        completed: true,
        current: false
      },
      {
        key: 'processing',
        label: 'Packed at Hub',
        timestamp: '22 Sep, 04:30 PM',
        description: 'Packed securely in bubble wrap at Tejgaon warehouse.',
        completed: true,
        current: true
      },
      {
        key: 'shipped',
        label: 'Awaiting Courier',
        timestamp: 'Pending pickup',
        description: 'Waiting for courier dispatch.',
        completed: false,
        current: false
      }
    ]
  },
  {
    id: 'ord-10502',
    orderNumber: 'JT-98216',
    date: '22 Sep 2026',
    status: 'ready_to_ship',
    statusLabel: 'Ready for Pickup',
    total: 3200,
    subtotal: 3100,
    deliveryFee: 100,
    paymentMethod: 'Cash on Delivery (COD)',
    courierName: 'Pathao Courier',
    trackingNumber: 'PTH-9938102',
    estimatedDelivery: 'Tomorrow by 2:00 PM',
    deliveryAddress: 'House 42, Road 11, Block D, Banani, Dhaka 1213',
    items: [
      {
        id: 'item-102',
        productId: 'baseus-gan-65w',
        name: 'Baseus GaN3 Pro 65W Fast Charger',
        variant: 'Matte Black / 3-Port GaN',
        price: 3100,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80'
      }
    ],
    stages: [
      {
        key: 'placed',
        label: 'Order Placed',
        timestamp: '22 Sep, 01:15 PM',
        description: 'COD order confirmed via phone call.',
        completed: true,
        current: false
      },
      {
        key: 'processing',
        label: 'Packed at Hub',
        timestamp: '22 Sep, 03:00 PM',
        description: 'Item sanitized, sealed & shipping label attached.',
        completed: true,
        current: false
      },
      {
        key: 'shipped',
        label: 'Ready for Courier Pickup',
        timestamp: '22 Sep, 05:00 PM',
        description: 'Manifest created, awaiting Pathao rider pickup.',
        completed: true,
        current: true
      }
    ]
  },
  {
    id: 'ord-10492',
    orderNumber: 'JT-98214',
    date: '21 Sep 2026',
    status: 'shipped',
    statusLabel: 'Out for Delivery',
    total: 3950,
    subtotal: 3850,
    deliveryFee: 100,
    paymentMethod: 'Cash on Delivery (COD)',
    courierName: 'Steadfast Courier',
    trackingNumber: 'ST-92810482',
    estimatedDelivery: 'Today by 6:00 PM',
    deliveryAddress: 'House 42, Road 11, Block D, Banani, Dhaka 1213',
    items: [
      {
        id: 'item-1',
        productId: 'spigen-ultra-16pm',
        name: 'Spigen Ultra Hybrid MagSafe Case',
        variant: 'Frosted Black / iPhone 16 Pro Max',
        price: 2450,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'item-2',
        productId: 'anker-30w-nano',
        name: 'Anker 30W Nano III GaN Fast Charger',
        variant: 'Phantom Black / Type-C',
        price: 1400,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80'
      }
    ],
    stages: [
      {
        key: 'placed',
        label: 'Order Placed',
        timestamp: '21 Sep, 10:14 AM',
        description: 'Order received via online guest checkout.',
        completed: true,
        current: false
      },
      {
        key: 'confirmed',
        label: 'Order Confirmed',
        timestamp: '21 Sep, 11:30 AM',
        description: 'Inventory reserved & payment method verified.',
        completed: true,
        current: false
      },
      {
        key: 'processing',
        label: 'Packed at Hub',
        timestamp: '21 Sep, 02:45 PM',
        description: 'Inspected for authenticity & packed with bubble wrap.',
        completed: true,
        current: false
      },
      {
        key: 'shipped',
        label: 'Handed to Courier',
        timestamp: '22 Sep, 09:20 AM',
        description: 'Dispatched via Steadfast Courier Hub (Tejgaon).',
        completed: true,
        current: false
      },
      {
        key: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: '23 Sep, 08:30 AM',
        description: 'Rider is on the way to Banani delivery address.',
        completed: true,
        current: true
      },
      {
        key: 'delivered',
        label: 'Delivered',
        timestamp: 'Pending delivery',
        description: 'Package handed to recipient.',
        completed: false,
        current: false
      }
    ]
  },
  {
    id: 'ord-10381',
    orderNumber: 'JT-97421',
    date: '14 Aug 2026',
    status: 'delivered',
    statusLabel: 'Delivered',
    total: 2150,
    subtotal: 2050,
    deliveryFee: 100,
    paymentMethod: 'bKash Online',
    courierName: 'Pathao Courier',
    trackingNumber: 'PTH-6638192',
    estimatedDelivery: '16 Aug 2026',
    deliveryAddress: 'House 42, Road 11, Block D, Banani, Dhaka 1213',
    items: [
      {
        id: 'item-3',
        productId: 'torras-glass-16pm',
        name: 'Torras Diamond Shield Screen Protector (2-Pack)',
        variant: 'Ultra Clear / iPhone 16 Pro Max',
        price: 2050,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80'
      }
    ],
    stages: [
      {
        key: 'placed',
        label: 'Order Placed',
        timestamp: '14 Aug, 04:12 PM',
        description: 'Order placed with bKash pre-payment.',
        completed: true,
        current: false
      },
      {
        key: 'confirmed',
        label: 'Confirmed',
        timestamp: '14 Aug, 04:20 PM',
        description: 'Payment authorized.',
        completed: true,
        current: false
      },
      {
        key: 'processing',
        label: 'Processing',
        timestamp: '14 Aug, 06:10 PM',
        description: 'QC inspected.',
        completed: true,
        current: false
      },
      {
        key: 'shipped',
        label: 'Shipped',
        timestamp: '15 Aug, 10:00 AM',
        description: 'Handed to Pathao Courier.',
        completed: true,
        current: false
      },
      {
        key: 'out_for_delivery',
        label: 'Out for Delivery',
        timestamp: '16 Aug, 11:30 AM',
        description: 'Rider reached destination zone.',
        completed: true,
        current: false
      },
      {
        key: 'delivered',
        label: 'Delivered',
        timestamp: '16 Aug, 02:45 PM',
        description: 'Successfully received by customer.',
        completed: true,
        current: true
      }
    ]
  }
];

export const MOCK_ADDRESSES: SavedAddress[] = [
  {
    id: 'addr-1',
    tag: 'Home',
    recipientName: 'Tanvir Hossain',
    phone: '+880 1712-345678',
    division: 'Dhaka',
    district: 'Dhaka City',
    area: 'Banani',
    fullAddress: 'House 42, Road 11, Block D, Flat 4B',
    isDefault: true
  },
  {
    id: 'addr-2',
    tag: 'Office',
    recipientName: 'Tanvir Hossain (Joy Tech Partner)',
    phone: '+880 1819-876543',
    division: 'Dhaka',
    district: 'Dhaka City',
    area: 'Gulshan 2',
    fullAddress: 'Level 7, Platinum Tower, Gulshan North Avenue',
    isDefault: false
  }
];

export const MOCK_WISHLIST: Product[] = [
  PRODUCTS[0], // Spigen case
  PRODUCTS[2], // Charger
  PRODUCTS[4]  // Cable / protector
].filter(Boolean);

export const DEFAULT_PREFERENCES: UserPreferences = {
  language: 'en',
  notifications: {
    smsDeliveryUpdates: true,
    whatsappUpdates: true,
    emailPromotions: false,
    restockAlerts: true
  }
};

export interface PromoCoupon {
  code: string;
  discount: string;
  title: string;
  minSpend: string;
  expires: string;
  badge?: string;
}

export interface CustomerReview {
  id: string;
  productName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const MOCK_PROMOS: PromoCoupon[] = [
  {
    code: 'JOY100',
    discount: '৳100 OFF',
    title: 'First Order Special Discount',
    minSpend: '৳999',
    expires: '31 Oct 2026',
    badge: 'Popular'
  },
  {
    code: 'FREEDEL',
    discount: 'Free Delivery',
    title: 'Dhaka Metro Free Shipping',
    minSpend: '৳1,499',
    expires: '15 Nov 2026'
  },
  {
    code: 'VIPPLATINUM',
    discount: '15% OFF',
    title: 'Exclusive VIP Tier Voucher',
    minSpend: '৳2,500',
    expires: '31 Dec 2026',
    badge: 'Exclusive'
  }
];

export const MOCK_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    productName: 'Spigen Ultra Hybrid MagFit Case — iPhone 16 Pro Max',
    rating: 5,
    date: '18 Aug 2026',
    comment: 'Authentic Spigen case! Perfect magnet alignment with my Apple MagSafe battery pack.',
    verified: true
  },
  {
    id: 'rev-2',
    productName: 'Anker 65W GaN Fast Charger 3-Port (Nano II)',
    rating: 5,
    date: '10 Jul 2026',
    comment: 'Runs very cool even under high wattage load. Fast charges both my laptop and phone.',
    verified: true
  }
];

export interface PendingReviewItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  orderNumber: string;
  deliveredDate: string;
}

export const MOCK_PENDING_REVIEWS: PendingReviewItem[] = [
  {
    id: 'pend-1',
    productId: 'p-charger-45w',
    name: 'Anker 313 45W GaN Fast Charger (Ace 2)',
    brand: 'Anker',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80',
    price: 1850,
    originalPrice: 2200,
    rating: 4.8,
    reviewCount: 42,
    orderNumber: 'JT-98214',
    deliveredDate: 'Delivered 21 Sep'
  },
  {
    id: 'pend-2',
    productId: 'p-powerbank-100w',
    name: 'Baseus Blade 100W Fast Power Bank 20000mAh',
    brand: 'Baseus',
    image: 'https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=500&auto=format&fit=crop&q=80',
    price: 3450,
    originalPrice: 3990,
    rating: 4.9,
    reviewCount: 88,
    orderNumber: 'JT-97401',
    deliveredDate: 'Delivered 14 Sep'
  }
];

