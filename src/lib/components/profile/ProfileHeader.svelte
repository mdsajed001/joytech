<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { CustomerProfile } from '$lib/data/mockProfile';
  import { i18nState } from '$lib/state.svelte';
  import {
    CheckmarkBadge01Icon,
    CrownIcon,
    Call02Icon,
    Mail01Icon,
    ShoppingBag01Icon,
    Clock01Icon,
    FavouriteIcon,
    StarIcon,
    Notebook01Icon,
    DeliveryReturn01Icon,
    Ticket02Icon,
    GiftIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    profile: CustomerProfile;
    ordersCount: number;
    addressesCount: number;
    wishlistCount: number;
    promosCount?: number;
    activeDrawerType?: string | null;
    onOpenDrawer: (drawerType: 'orders' | 'history' | 'wishlist' | 'reviews' | 'addresses' | 'returns' | 'promos' | 'request') => void;
  }

  let {
    profile,
    ordersCount,
    addressesCount,
    wishlistCount,
    promosCount = 3,
    activeDrawerType = null,
    onOpenDrawer
  }: Props = $props();

  const shortcuts = $derived([
    // Row 1
    {
      id: 'orders' as const,
      label: i18nState.t('shortcut.orders'),
      icon: ShoppingBag01Icon,
      count: ordersCount,
      action: () => onOpenDrawer('orders'),
      isActive: activeDrawerType === 'orders'
    },
    {
      id: 'history' as const,
      label: i18nState.t('shortcut.history'),
      icon: Clock01Icon,
      count: null,
      action: () => onOpenDrawer('history'),
      isActive: activeDrawerType === 'history'
    },
    {
      id: 'wishlist' as const,
      label: i18nState.t('shortcut.wishlist'),
      icon: FavouriteIcon,
      count: wishlistCount,
      action: () => onOpenDrawer('wishlist'),
      isActive: activeDrawerType === 'wishlist'
    },
    {
      id: 'reviews' as const,
      label: i18nState.t('shortcut.reviews'),
      icon: StarIcon,
      count: null,
      action: () => onOpenDrawer('reviews'),
      isActive: activeDrawerType === 'reviews'
    },
    // Row 2
    {
      id: 'addresses' as const,
      label: i18nState.t('shortcut.addresses'),
      icon: Notebook01Icon,
      count: addressesCount,
      action: () => onOpenDrawer('addresses'),
      isActive: activeDrawerType === 'addresses'
    },
    {
      id: 'returns' as const,
      label: i18nState.t('shortcut.returns'),
      icon: DeliveryReturn01Icon,
      count: null,
      action: () => onOpenDrawer('returns'),
      isActive: activeDrawerType === 'returns'
    },
    {
      id: 'promos' as const,
      label: i18nState.t('shortcut.promos'),
      icon: Ticket02Icon,
      count: promosCount,
      action: () => onOpenDrawer('promos'),
      isActive: activeDrawerType === 'promos'
    },
    {
      id: 'request' as const,
      label: i18nState.t('shortcut.request'),
      icon: GiftIcon,
      count: null,
      action: () => onOpenDrawer('request'),
      isActive: activeDrawerType === 'request'
    }
  ]);
</script>

<!-- Full-bleed Edge-to-Edge Hero Banner with Brand Primary Blue & Ambient White Bubbles -->
<div class="w-full profile-hero-bubble text-white border-b border-blue-600/30">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 relative z-10">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
      <!-- Left: User Identity Block -->
      <div class="flex items-center gap-3.5 sm:gap-5 min-w-0">
        <div class="relative flex-shrink-0">
          <img
            src={profile.avatar}
            alt={profile.name}
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-3 ring-white/60 shadow-md"
          />
          <span
            class="absolute -bottom-1 -right-1 bg-white text-[var(--color-brand-primary)] p-1 rounded-full shadow-sm flex items-center justify-center"
            title={i18nState.t('profile.verified')}
          >
            <Icon icon={CheckmarkBadge01Icon} size={14} />
          </span>
        </div>

        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight truncate drop-shadow-xs">
              {profile.name}
            </h1>
            <span
              class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[var(--radius-xs)] text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-2xs"
            >
              <Icon icon={CrownIcon} size={12} class="text-amber-300" />
              <span>{profile.tier}</span>
            </span>
          </div>

          <div class="flex flex-col items-start gap-1 text-xs sm:text-[13px] text-white/90">
            <span class="inline-flex items-center gap-1.5">
              <Icon icon={Call02Icon} size={14} class="text-white/80 shrink-0" />
              <span>{profile.phone}</span>
            </span>
            <span class="inline-flex items-center gap-1.5">
              <Icon icon={Mail01Icon} size={14} class="text-white/80 shrink-0" />
              <span class="truncate max-w-[220px] sm:max-w-none">{profile.email}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Right / Below: 8-Item Action Shortcuts Grid (4 Columns x 2 Rows) -->
      <div class="pt-4 lg:pt-0 border-t lg:border-t-0 border-white/15 shrink-0">
        <div class="grid grid-cols-4 gap-x-2.5 sm:gap-x-5 gap-y-3 sm:gap-y-3.5 max-w-sm sm:max-w-md mx-auto lg:mx-0">
          {#each shortcuts as item}
            <button
              type="button"
              onclick={item.action}
              class="btn-nod group flex flex-col items-center justify-center p-1 cursor-pointer tap-target min-w-0 text-center transition-transform"
            >
              <!-- Circular White Button -->
              <div class="relative flex items-center justify-center">
                <div
                  class="btn-nod-icon w-11 h-11 sm:w-12 sm:h-12 rounded-[var(--radius-sm)] bg-white text-[var(--color-brand-primary)] shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-150 {item.isActive
                    ? 'ring-3 ring-white ring-offset-2 ring-offset-[var(--color-brand-primary)]'
                    : ''}"
                >
                  <Icon icon={item.icon} size={20} class="sm:w-[22px] sm:h-[22px]" />
                </div>

                <!-- Count Badge -->
                {#if item.count !== null && item.count !== undefined}
                  <span
                    class="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[var(--color-accent)] text-white text-[10px] font-black rounded-[var(--radius-xs)] flex items-center justify-center shadow-xs border border-white leading-none pointer-events-none"
                  >
                    {item.count}
                  </span>
                {/if}
              </div>

              <!-- Centered Text Label -->
              <span
                class="text-[11px] sm:text-xs font-semibold text-white/90 group-hover:text-white text-center truncate max-w-[64px] sm:max-w-[76px] mt-1.5 transition-colors"
              >
                {item.label}
              </span>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
