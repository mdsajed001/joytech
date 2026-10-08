<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import {
    Ticket02Icon,
    ArrowRight01Icon,
    ArrowDown01Icon,
    Tick02Icon,
    Cancel01Icon,
    SparklesIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    variant?: 'card' | 'sheet';
    isExpanded?: boolean;
    onToggleExpand?: () => void;
    onProceedToCheckout?: () => void;
  }

  let {
    variant = 'card',
    isExpanded = false,
    onToggleExpand,
    onProceedToCheckout
  }: Props = $props();

  let couponInput = $state('');
  let isApplyingCoupon = $state(false);

  function handleApplyCoupon(code?: string) {
    const targetCode = code || couponInput;
    if (!targetCode) return;
    isApplyingCoupon = true;
    setTimeout(() => {
      const success = cartState.applyCoupon(targetCode);
      if (success) couponInput = '';
      isApplyingCoupon = false;
    }, 200);
  }

  function handleRemoveCoupon(code: string) {
    cartState.removeCoupon(code);
  }


  // Calculate total customer savings across discounts + coupon + delivery
  let totalSavings = $derived(() => {
    let savings = cartState.couponDiscount + cartState.pointsToRedeem;
    if (cartState.isFreeDelivery) savings += 60;
    // Add product item discounts compared to originalPrice
    for (const item of cartState.items) {
      const effPrice = item.selectedVariant?.price ?? item.product.price;
      const effOrigPrice = item.selectedVariant?.originalPrice ?? item.product.originalPrice;
      if (effOrigPrice && effOrigPrice > effPrice) {
        savings += (effOrigPrice - effPrice) * item.quantity;
      }
    }
    return savings;
  });
</script>

{#snippet receiptContent()}
  <!-- Unified Receipt Breakdown (Zero Nested Boxes) -->
  <div class="space-y-3 text-xs sm:text-sm">
    <!-- Subtotal -->
    <div class="flex items-center justify-between text-[var(--color-text-secondary)]">
      <span>{i18nState.language === 'bn' ? 'সাবটোটাল' : 'Subtotal'}</span>
      <span class="font-bold text-[var(--color-text-primary)]">
        ৳{cartState.subtotal.toLocaleString()}
      </span>
    </div>

    <!-- Delivery Fee -->
    <div class="flex items-center justify-between text-[var(--color-text-secondary)]">
      <span>{i18nState.language === 'bn' ? 'ডেলিভারি ফি' : 'Estimated Delivery'}</span>
      <span class="font-bold {cartState.isFreeDelivery ? 'text-[#00B372] dark:text-[#34D399]' : 'text-[var(--color-text-primary)]'}">
        {cartState.deliveryFee === 0 ? (i18nState.language === 'bn' ? 'ফ্রি' : 'FREE') : `৳${cartState.deliveryFee}`}
      </span>
    </div>



    <!-- Applied Coupons list -->
    {#each cartState.appliedCoupons as coupon (coupon.code)}
      <div class="flex items-center justify-between text-[#00B372] dark:text-[#34D399] font-semibold pt-1">
        <span class="flex items-center gap-1.5">
          <span>{i18nState.language === 'bn' ? 'কুপন ছাড়' : 'Coupon'} ({coupon.code})</span>
          <button
            type="button"
            onclick={() => handleRemoveCoupon(coupon.code)}
            class="text-[var(--color-text-muted)] hover:text-rose-500 p-0.5 cursor-pointer transition-colors"
            title="Remove coupon"
            aria-label="Remove coupon"
          >
            <Icon icon={Cancel01Icon} size={14} />
          </button>
        </span>
        <span class="font-black">-৳{coupon.discount.toLocaleString()}</span>
      </div>
    {/each}

    <!-- Total Savings (High Contrast, Accessible, Unboxed) -->
    {#if totalSavings() > 0}
      <div class="flex items-center justify-between text-xs font-bold text-[#00B372] dark:text-[#34D399] pt-1">
        <span class="flex items-center gap-1.5">
          <Icon icon={SparklesIcon} size={14} />
          <span>{i18nState.language === 'bn' ? 'মোট সাশ্রয়' : 'Total Savings'}</span>
        </span>
        <span class="font-black">৳{totalSavings().toLocaleString()}</span>
      </div>
    {/if}

    <!-- Grand Total Section (Full width, zero corner radius, flush to container edges) -->
    <div class="-mx-5 sm:-mx-6 px-5 sm:px-6 py-3.5 sm:py-4 bg-[var(--color-bg-subtle)] flex items-center justify-between rounded-none my-1">
      <div>
        <span class="text-sm sm:text-base font-black text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'সর্বমোট প্রদেয়' : 'Grand Total'}
        </span>
        <p class="text-[10px] text-[var(--color-text-muted)] mt-0.5">
          {i18nState.language === 'bn' ? 'ভ্যাট সহ অন্তর্ভুক্ত' : 'Inclusive of all VAT & taxes'}
        </p>
      </div>
      <span class="text-xl sm:text-2xl font-black text-[var(--color-brand-primary)]">
        ৳{cartState.grandTotal.toLocaleString()}
      </span>
    </div>
  </div>

  <!-- Compact Promo Code Input Group (No line separator) -->
  <div class="space-y-2 pt-1">
      <div class="flex items-center rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] focus-within:border-[var(--color-brand-primary)] overflow-hidden transition-all">
        <span class="pl-3 text-[var(--color-text-muted)]">
          <Icon icon={Ticket02Icon} size={15} />
        </span>
        <input
          id="coupon-code-input"
          type="text"
          bind:value={couponInput}
          placeholder="Promo code"
          class="flex-1 px-2.5 py-2.5 text-xs bg-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none uppercase font-semibold tracking-wider"
          onkeydown={(e) => {
            if (e.key === 'Enter') handleApplyCoupon();
          }}
        />
        <button
          type="button"
          onclick={() => handleApplyCoupon()}
          disabled={!couponInput.trim() || isApplyingCoupon}
          class="px-4 py-2 text-xs font-bold text-[var(--color-brand-primary)] hover:bg-blue-50 dark:hover:bg-blue-950/40 disabled:opacity-40 transition-colors cursor-pointer shrink-0"
        >
          {isApplyingCoupon ? '...' : (i18nState.language === 'bn' ? 'প্রয়োগ' : 'Apply')}
        </button>
      </div>

      <!-- Quick subtle text links -->
      <div class="flex items-center gap-1.5 flex-wrap text-[11px] text-[var(--color-text-muted)]">
        <span>{i18nState.language === 'bn' ? 'অফার:' : 'Try:'}</span>
        <button
          type="button"
          onclick={() => handleApplyCoupon('JOYVIP500')}
          class="font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
        >
          JOYVIP500 (-৳500)
        </button>
        <span>•</span>
        <button
          type="button"
          onclick={() => handleApplyCoupon('EIDGIFT200')}
          class="font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
        >
          EIDGIFT200 (-৳200)
        </button>
      </div>
  </div>

  <!-- Primary Checkout CTA Button -->
  <button
    type="button"
    disabled={cartState.items.length === 0}
    onclick={() => onProceedToCheckout?.()}
    class="w-full min-h-[48px] px-6 rounded-[var(--radius-sm)] font-black text-sm sm:text-base text-white cta-checkout-animated hover:shadow-lg active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
  >
    <span class="relative z-10 flex items-center gap-2">
      <span>{i18nState.language === 'bn' ? 'অর্ডার সম্পন্ন করুন' : 'Proceed to Checkout'}</span>
      <Icon icon={ArrowRight01Icon} size={18} strokeWidth={2.5} />
    </span>
  </button>

{/snippet}

{#if variant === 'card'}
  <!-- Desktop / Standard In-Flow Card -->
  <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5 sm:p-6 shadow-xs space-y-5 overflow-hidden">
    <!-- Card Header -->
    <div class="flex items-center justify-between pb-3 border-b border-[var(--color-border-subtle)]">
      <h2 class="text-base sm:text-lg font-black text-[var(--color-text-primary)]">
        {i18nState.language === 'bn' ? 'অর্ডার সামারি' : 'Order Summary'}
      </h2>
      <span class="text-xs font-bold text-[var(--color-text-secondary)]">
        {cartState.count} {cartState.count === 1 ? (i18nState.language === 'bn' ? 'টি আইটেম' : 'item') : (i18nState.language === 'bn' ? 'টি আইটেম' : 'items')}
      </span>
    </div>

    {@render receiptContent()}
  </div>
{:else}
  <!-- Mobile Full-Bleed Sticky Bottom Sheet (Zero corner radius, continuous smooth CSS Grid drawer) -->
  <div class="w-full bg-[var(--color-bg-surface)]/98 dark:bg-[var(--color-bg-surface)] backdrop-blur-xl border-t border-[var(--color-border-default)] rounded-none shadow-[0_-8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden">
    <!-- Persistent Header Bar (Always mounted, morphs CTA cleanly) -->
    <div class="px-4 py-3 flex items-center justify-between gap-3 border-b transition-colors duration-300 {isExpanded ? 'border-[var(--color-border-subtle)]' : 'border-transparent'}">
      <!-- Tap to Toggle Indicator & Title/Amount -->
      <button
        type="button"
        onclick={() => onToggleExpand?.()}
        class="flex items-center gap-2 text-left cursor-pointer group focus:outline-none shrink-0"
        aria-label={isExpanded ? 'Collapse order summary' : 'Expand order summary'}
      >
        <div>
          <div class="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)] font-medium">
            <span>
              {isExpanded
                ? (i18nState.language === 'bn' ? `অর্ডার সামারি (${cartState.count}টি)` : `Order Summary (${cartState.count} ${cartState.count === 1 ? 'item' : 'items'})`)
                : (i18nState.language === 'bn' ? 'সর্বমোট প্রদেয়' : 'Total Amount')}
            </span>
            <Icon
              icon={ArrowDown01Icon}
              size={12}
              class="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] {isExpanded ? '' : 'rotate-180'} text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-primary)]"
            />
          </div>
          <div class="text-base sm:text-lg font-black text-[var(--color-brand-primary)] leading-tight">
            ৳{cartState.grandTotal.toLocaleString()}
          </div>
        </div>
      </button>

      <!-- Action Button (Checkout CTA when collapsed, Collapse toggle when expanded) -->
      {#if !isExpanded}
        <button
          type="button"
          disabled={cartState.items.length === 0}
          onclick={() => onProceedToCheckout?.()}
          class="flex-1 min-h-[46px] px-5 rounded-[var(--radius-sm)] font-black text-sm text-white cta-checkout-animated active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed animate-in fade-in duration-200"
        >
          <span class="relative z-10 flex items-center gap-2">
            <span>{i18nState.language === 'bn' ? 'চেকআউট করুন' : 'Checkout Now'}</span>
            <Icon icon={ArrowRight01Icon} size={16} strokeWidth={2.5} />
          </span>
        </button>
      {:else}
        <button
          type="button"
          onclick={() => onToggleExpand?.()}
          class="flex items-center gap-1.5 text-xs font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] px-3 py-2 rounded-lg hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer animate-in fade-in duration-200"
          aria-label="Collapse order summary"
        >
          <span>{i18nState.language === 'bn' ? 'সংক্ষিপ্ত করুন' : 'Collapse'}</span>
          <Icon icon={ArrowDown01Icon} size={16} />
        </button>
      {/if}
    </div>

    <!-- Smooth Collapsible Body via CSS Grid -->
    <div
      class="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] {isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}"
    >
      <div class="overflow-hidden">
        <div class="px-5 py-4 space-y-4 max-h-[72vh] overflow-y-auto overscroll-contain">
          {@render receiptContent()}
        </div>
      </div>
    </div>
  </div>
{/if}
