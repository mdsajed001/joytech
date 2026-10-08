<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { SavedAddress } from '$lib/data/mockProfile';
  import type { CartItem } from '$lib/state.svelte';
  import { i18nState } from '$lib/state.svelte';
  import {
    CheckmarkCircle02Icon,
    Home01Icon,
    ShoppingBag01Icon,
    Calendar03Icon,
    Location01Icon,
    CreditCardIcon,
    CrownIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    orderNumber: string;
    selectedAddress: SavedAddress;
    paymentMethod: string;
    totalAmount: number;
    items: CartItem[];
    onContinueShopping: () => void;
  }

  let {
    orderNumber,
    selectedAddress,
    paymentMethod,
    totalAmount,
    items,
    onContinueShopping
  }: Props = $props();

  const pointsEarned = $derived(Math.floor(totalAmount / 100));

  function getPaymentLabel(method: string): string {
    switch (method) {
      case 'cod':
        return 'Cash on Delivery';
      case 'bkash':
        return 'bKash Online';
      case 'nagad':
        return 'Nagad';
      case 'card':
        return 'Credit / Debit Card';
      default:
        return method;
    }
  }
</script>

<div class="max-w-2xl mx-auto py-8 sm:py-12 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
  <!-- Success Icon & Header -->
  <div class="space-y-3">
    <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
      <Icon icon={CheckmarkCircle02Icon} size={36} strokeWidth={2.5} />
    </div>

    <h1 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight">
      {i18nState.language === 'bn' ? 'অর্ডার সফলভাবে সম্পন্ন হয়েছে!' : 'Order Placed Successfully!'}
    </h1>

    <p class="text-xs sm:text-sm text-[var(--color-text-secondary)]">
      {i18nState.language === 'bn'
        ? `আপনার অর্ডার #${orderNumber} নিশ্চিত করা হয়েছে। খুব শীঘ্রই আমাদের প্রতিনিধি যোগাযোগ করবেন।`
        : `Thank you! Your order #${orderNumber} is confirmed and will be dispatched shortly.`}
    </p>
  </div>

  <!-- Points Earned VIP Banner -->
  <div class="p-3.5 rounded-[var(--radius-sm)] bg-amber-50 dark:bg-amber-950/40 border border-amber-300/50 flex items-center justify-between text-xs text-amber-900 dark:text-amber-200 shadow-2xs">
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 rounded-[var(--radius-xs)] bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
        <Icon icon={CrownIcon} size={16} />
      </div>
      <span class="font-bold">
        {i18nState.language === 'bn'
          ? `এই অর্ডারে আপনি ${pointsEarned} জয় পয়েন্ট অর্জন করেছেন!`
          : `You earned ${pointsEarned} Joy VIP Club Points!`}
      </span>
    </div>
    <span class="text-[11px] font-black uppercase text-amber-700 dark:text-amber-300">
      ৳{pointsEarned} Off Next Order
    </span>
  </div>

  <!-- Itemized Confirmation Card -->
  <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] shadow-xs overflow-hidden text-left divide-y divide-[var(--color-border-subtle)]">
    <!-- Meta Info Grid -->
    <div class="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
      <div>
        <span class="text-[11px] font-bold text-[var(--color-text-muted)] flex items-center gap-1 mb-1">
          <Icon icon={Location01Icon} size={13} class="text-[var(--color-brand-primary)]" />
          <span>Delivery Destination:</span>
        </span>
        <p class="font-bold text-[var(--color-text-primary)]">
          {selectedAddress.recipientName} ({selectedAddress.phone})
        </p>
        <p class="text-[var(--color-text-secondary)] mt-0.5 leading-snug">
          {selectedAddress.fullAddress}, {selectedAddress.area}, {selectedAddress.district}
        </p>
      </div>

      <div>
        <span class="text-[11px] font-bold text-[var(--color-text-muted)] flex items-center gap-1 mb-1">
          <Icon icon={CreditCardIcon} size={13} class="text-[var(--color-brand-primary)]" />
          <span>Payment Details:</span>
        </span>
        <p class="font-bold text-[var(--color-text-primary)]">
          {getPaymentLabel(paymentMethod)}
        </p>
        <div class="flex items-center gap-1 mt-1 text-[var(--color-text-secondary)]">
          <Icon icon={Calendar03Icon} size={13} class="text-emerald-600" />
          <span>Est. Delivery: 24–48 Hours</span>
        </div>
      </div>
    </div>

    <!-- Items list -->
    <div class="p-4 sm:p-5 space-y-2.5">
      <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
        Purchased Gear ({items.length})
      </h4>
      {#each items as item}
        <div class="flex items-center justify-between text-xs py-1">
          <div class="flex items-center gap-2 min-w-0">
            <span class="font-bold text-[var(--color-text-primary)] truncate max-w-[240px] sm:max-w-md">
              {item.product.name}
            </span>
            <span class="text-[var(--color-text-muted)]">× {item.quantity}</span>
          </div>
          <span class="font-black text-[var(--color-text-primary)] shrink-0">
            ৳{((item.selectedVariant?.price ?? item.product.price) * item.quantity).toLocaleString('en-BD')}
          </span>
        </div>
      {/each}

      <div class="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
        <span class="text-xs font-bold text-[var(--color-text-primary)]">Grand Total:</span>
        <span class="text-base font-black text-[var(--color-brand-primary)]">
          ৳{totalAmount.toLocaleString('en-BD')}
        </span>
      </div>
    </div>
  </div>

  <!-- Action CTAs -->
  <div class="flex items-center justify-center gap-3 pt-2">
    <button
      type="button"
      onclick={onContinueShopping}
      class="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[var(--radius-sm)] cta-checkout-animated text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer"
    >
      <Icon icon={ShoppingBag01Icon} size={16} />
      <span>{i18nState.language === 'bn' ? 'আরও কেনাকাটা করুন' : 'Continue Shopping'}</span>
    </button>
  </div>
</div>
