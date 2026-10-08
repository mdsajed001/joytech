export type SupportedLanguage = 'en' | 'bn';

export const TRANSLATIONS = {
  en: {
    // Navigation Tabs
    'tab.preferences': 'Preferences & Account',
    'tab.preferences.short': 'Preferences',
    'tab.rewards': 'Joy Rewards & VIP',
    'tab.rewards.short': 'Rewards',
    'tab.payments': 'Payment Methods',
    'tab.payments.short': 'Payments',

    // Hero Shortcuts
    'shortcut.orders': 'Orders',
    'shortcut.history': 'History',
    'shortcut.wishlist': 'Wishlist',
    'shortcut.reviews': 'Reviews',
    'shortcut.addresses': 'Addresses',
    'shortcut.returns': 'Returns',
    'shortcut.promos': 'Promos',
    'shortcut.request': 'Request',

    // Profile Details
    'profile.verified': 'Verified Customer',
    'profile.memberSince': 'Member since',
    'profile.joyRewards': 'Joy Rewards',

    // Settings Tab
    'settings.appearanceTitle': 'App Preferences & Appearance',
    'settings.appearanceDesc': 'Customize your display theme, interface language, and shopping region.',
    'settings.personalTitle': 'Personal Information',
    'settings.themeTitle': 'Interface Theme',
    'settings.themeDesc': 'Choose light, dark, or sync with your operating system.',
    'settings.theme.light': 'Light',
    'settings.theme.dark': 'Dark',
    'settings.theme.system': 'System',
    'settings.langTitle': 'Preferred Language',
    'settings.langDesc': 'Product details, SMS notifications, and system dialogs.',
    'settings.lang.en': 'English',
    'settings.lang.bn': 'বাংলা',
    'settings.notificationsTitle': 'Notification Channels & Alerts',
    'settings.notificationsDesc': 'Select how you want to receive courier tracking and promo drops.',
    'settings.securityTitle': 'Account Security & Access',
    'settings.securityDesc': 'Manage your password and active security sessions.',
    'settings.save': 'Save Changes',
    'settings.savedSuccess': 'Preferences updated successfully',

    // Rewards Tab
    'rewards.balanceTitle': 'Available Loyalty Balance',
    'rewards.creditWorth': 'instant store credit',
    'rewards.quickRedeem': 'Quick Reward Redemption',
    'rewards.redeemBtn': 'Redeem 500 Pts (৳500 OFF)',
    'rewards.progressTo': 'Progress to Diamond Tier',
    'rewards.perksTitle': 'VIP Platinum Privileges',
    'rewards.ledgerTitle': 'Points Ledger & Activity',

    // Payments Tab
    'payments.title': 'Saved Payment Methods',
    'payments.desc': 'Securely saved bKash, Nagad wallets and debit/credit cards for 1-click checkout.',
    'payments.addBtn': 'Add Payment Method',
    'payments.default': 'Default',
    'payments.setDefault': 'Set as Default',
    'payments.remove': 'Remove',

    // General
    'common.pts': 'Pts'
  },
  bn: {
    // Navigation Tabs
    'tab.preferences': 'পছন্দসমূহ ও অ্যাকাউন্ট',
    'tab.preferences.short': 'পছন্দসমূহ',
    'tab.rewards': 'জয় রিওয়ার্ডস ও ভিআইপি',
    'tab.rewards.short': 'রিওয়ার্ডস',
    'tab.payments': 'পেমেন্ট মাধ্যম',
    'tab.payments.short': 'পেমেন্ট',

    // Hero Shortcuts
    'shortcut.orders': 'অর্ডার',
    'shortcut.history': 'ইতিহাস',
    'shortcut.wishlist': 'উইশলিস্ট',
    'shortcut.reviews': 'রিভিউ',
    'shortcut.addresses': 'ঠিকানা',
    'shortcut.returns': 'রিটার্ন',
    'shortcut.promos': 'প্রোমো',
    'shortcut.request': 'অনুরোধ',

    // Profile Details
    'profile.verified': 'যাচাইকৃত গ্রাহক',
    'profile.memberSince': 'যুক্ত আছেন',
    'profile.joyRewards': 'জয় রিওয়ার্ডস',

    // Settings Tab
    'settings.appearanceTitle': 'অ্যাপ পছন্দসমূহ ও রূপরেখা',
    'settings.appearanceDesc': 'আপনার ডিসপ্লে থিম, ইন্টারফেস ভাষা এবং শপিং সেটিংস পরিবর্তন করুন।',
    'settings.personalTitle': 'ব্যক্তিগত তথ্য',
    'settings.themeTitle': 'ইন্টারফেস থিম',
    'settings.themeDesc': 'হালকা, অন্ধকার বা আপনার ডিভাইসের সিস্টেমের সাথে মানানসই রাখুন।',
    'settings.theme.light': 'হালকা',
    'settings.theme.dark': 'অন্ধকার',
    'settings.theme.system': 'সিস্টেম',
    'settings.langTitle': 'পছন্দের ভাষা',
    'settings.langDesc': 'পণ্যের বিবরণ, এসএমএস বিজ্ঞপ্তি এবং সিস্টেম ডায়ালগ।',
    'settings.lang.en': 'English',
    'settings.lang.bn': 'বাংলা',
    'settings.notificationsTitle': 'বিজ্ঞপ্তি মাধ্যম ও সতর্কতা',
    'settings.notificationsDesc': 'কুরিয়ার ট্র্যাকিং এবং বিশেষ ছাড়ের নোটিফিকেশন কীভাবে পাবেন তা নির্ধারণ করুন।',
    'settings.securityTitle': 'অ্যাকাউন্ট নিরাপত্তা ও অ্যাক্সেস',
    'settings.securityDesc': 'আপনার পাসওয়ার্ড এবং সক্রিয় সেশন পরিচালনা করুন।',
    'settings.save': 'পরিবর্তন সংরক্ষণ করুন',
    'settings.savedSuccess': 'পছন্দসমূহ সফলভাবে হালনাগাদ করা হয়েছে',

    // Rewards Tab
    'rewards.balanceTitle': 'মোট লয়ালটি পয়েন্ট ব্যালেন্স',
    'rewards.creditWorth': 'সমমূল্যের স্টোর ক্রেডিট',
    'rewards.quickRedeem': 'দ্রুত রিওয়ার্ড রিডিম করুন',
    'rewards.redeemBtn': '৫০০ পয়েন্ট রিডিম (৳৫০০ ছাড়)',
    'rewards.progressTo': 'ডায়মন্ড টিয়ারের অগ্রগতি',
    'rewards.perksTitle': 'ভিআইপি প্লাটিনাম বিশেষ সুবিধা',
    'rewards.ledgerTitle': 'পয়েন্টের ইতিহাস ও লেনদেন',

    // Payments Tab
    'payments.title': 'সংরক্ষিত পেমেন্ট মাধ্যম',
    'payments.desc': 'এক-ক্লিক চেকআউটের জন্য সংরক্ষিত বিকাশ, নগদ এবং ব্যাংক কার্ড।',
    'payments.addBtn': 'পেমেন্ট মাধ্যম যোগ করুন',
    'payments.default': 'ডিফল্ট',
    'payments.setDefault': 'ডিফল্ট করুন',
    'payments.remove': 'মুছে ফেলুন',

    // General
    'common.pts': 'পয়েন্ট'
  }
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS['en'];
