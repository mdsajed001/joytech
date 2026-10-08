<script lang="ts">
  import { goto } from '$app/navigation';
  import { cartState, i18nState, type CartItem } from '$lib/state.svelte';
  import { MOCK_ADDRESSES, type SavedAddress } from '$lib/data/mockProfile';
  import Icon from '$lib/components/Icon.svelte';
  import CheckoutTrustBar from '$lib/components/checkout/CheckoutTrustBar.svelte';
  import CheckoutOrderReview from '$lib/components/checkout/CheckoutOrderReview.svelte';
  import CheckoutAddressCard from '$lib/components/checkout/CheckoutAddressCard.svelte';
  import CheckoutPaymentMethods from '$lib/components/checkout/CheckoutPaymentMethods.svelte';
  import CheckoutPolicyAgreement from '$lib/components/checkout/CheckoutPolicyAgreement.svelte';
  import CheckoutSuccess from '$lib/components/checkout/CheckoutSuccess.svelte';
  import {
    ArrowRight01Icon,
    Shield01Icon,
    CheckmarkBadge01Icon,
    ShoppingBag01Icon
  } from '@hugeicons/core-free-icons';

  // Addresses state
  let savedAddresses = $state<SavedAddress[]>([...MOCK_ADDRESSES]);
  let selectedAddress = $state<SavedAddress>(
    MOCK_ADDRESSES.find((a) => a.isDefault) ?? MOCK_ADDRESSES[0]
  );

  // Form & checkout state
  let selectedPayment = $state<'cod' | 'bkash' | 'nagad' | 'card'>('cod');
  let agreedToPolicy = $state(false);
  let showPolicyError = $state(false);
  let isSubmitting = $state(false);

  // Order success state
  let isOrderPlaced = $state(false);
  let placedOrderNumber = $state('');
  let placedItems = $state<CartItem[]>([]);
  let placedTotal = $state(0);
  // Redirect to cart if empty
  $effect(() => {
    if (cartState.items.length === 0 && !isOrderPlaced) {
      goto('/cart');
    }
  });

  // Automatically sync delivery zone based on selected address district
  $effect(() => {
    if (selectedAddress) {
      const addrStr = `${selectedAddress.district || ''} ${selectedAddress.division || ''} ${selectedAddress.area || ''} ${selectedAddress.fullAddress || ''}`.toLowerCase();
      const isDhaka = addrStr.includes('dhaka');
      cartState.setDeliveryZone(isDhaka ? 'dhaka' : 'outside_dhaka');
    }
  });

  function handleSelectAddress(addr: SavedAddress) {
    selectedAddress = addr;
  }

  function handleAddAddress(newAddr: SavedAddress) {
    savedAddresses = [newAddr, ...savedAddresses];
    selectedAddress = newAddr;
  }

  function handlePlaceOrder() {
    if (!agreedToPolicy) {
      showPolicyError = true;
      cartState.showToast(
        i18nState.language === 'bn'
          ? 'অনুগ্রহ করে পলিসিতে সম্মতি দিন'
          : 'Please accept the store terms & policy to place order'
      );
      return;
    }

    showPolicyError = false;
    isSubmitting = true;

    // Simulate order placement
    setTimeout(() => {
      placedOrderNumber = `JOY-${Math.floor(100000 + Math.random() * 900000)}`;
      placedItems = [...cartState.items];
      placedTotal = cartState.grandTotal;
      cartState.clearCart();
      isOrderPlaced = true;
      isSubmitting = false;
    }, 900);
  }

  function handleContinueShopping() {
    goto('/');
  }
</script>

<svelte:head>
  <title>Secure Checkout — Joy Telecom</title>
  <meta
    name="description"
    content="Complete your Joy Telecom order securely. Genuine mobile accessories with 7-day replacement guarantee and fast delivery across Bangladesh."
  />
</svelte:head>

<main class="min-h-screen bg-[var(--color-bg-canvas)]">
  <!-- Trust Bar Header -->
  <CheckoutTrustBar />

  {#if isOrderPlaced}
    <!-- Order Success In-Page Receipt View -->
    <CheckoutSuccess
      orderNumber={placedOrderNumber}
      {selectedAddress}
      paymentMethod={selectedPayment}
      totalAmount={placedTotal}
      items={placedItems}
      onContinueShopping={handleContinueShopping}
    />
  {:else if cartState.items.length > 0}
    <!-- Main Checkout Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-32 lg:pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <!-- LEFT COLUMN: Sequential Steps (Order Summary -> Address -> Payment -> Policy) -->
        <div class="lg:col-span-7 space-y-4 sm:space-y-5">
          <!-- Step 1: Full Order Review Summary -->
          <CheckoutOrderReview />

          <!-- Step 2: Selected Delivery Address (with Change Option) -->
          <CheckoutAddressCard
            bind:selectedAddress
            {savedAddresses}
            onSelectAddress={handleSelectAddress}
            onAddAddress={handleAddAddress}
          />

          <!-- Step 3: Payment Method Selection -->
          <CheckoutPaymentMethods
            bind:selectedMethod={selectedPayment}
            onSelect={(method) => (selectedPayment = method)}
          />

          <!-- Step 4: Terms and Policy Agreement -->
          <CheckoutPolicyAgreement
            bind:agreed={agreedToPolicy}
            showValidationError={showPolicyError}
          />
        </div>

        <!-- RIGHT COLUMN: Sticky Order Summary & Submission Sidebar -->
        <div class="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
          <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] p-4 sm:p-5 shadow-xs space-y-4">
            <h3 class="text-sm font-black text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)] pb-3">
              {i18nState.language === 'bn' ? 'মূল্য বিবরণী' : 'Payment Summary'}
            </h3>

            <!-- Price Breakdown -->
            <div class="space-y-2 text-xs">
              <div class="flex items-center justify-between text-[var(--color-text-secondary)]">
                <span>{i18nState.language === 'bn' ? 'সাবটোটাল' : 'Subtotal'}:</span>
                <span class="font-bold text-[var(--color-text-primary)]">
                  ৳{cartState.subtotal.toLocaleString('en-BD')}
                </span>
              </div>

              <div class="flex items-center justify-between text-[var(--color-text-secondary)]">
                <span>{i18nState.language === 'bn' ? 'ডেলিভারি চার্জ' : 'Delivery Fee'}:</span>
                {#if cartState.isFreeDelivery}
                  <span class="font-bold text-emerald-600 dark:text-emerald-400">
                    {i18nState.language === 'bn' ? 'ফ্রি' : 'FREE'}
                  </span>
                {:else}
                  <span class="font-bold text-[var(--color-text-primary)]">
                    ৳{cartState.deliveryFee.toLocaleString('en-BD')}
                  </span>
                {/if}
              </div>

              {#if cartState.couponDiscount > 0}
                <div class="flex items-center justify-between text-rose-600 dark:text-rose-400">
                  <span>{i18nState.language === 'bn' ? 'কুপন ডিসকাউন্ট' : 'Voucher Discount'}:</span>
                  <span class="font-bold">-৳{cartState.couponDiscount.toLocaleString('en-BD')}</span>
                </div>
              {/if}

              <div class="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-sm">
                <span class="font-black text-[var(--color-text-primary)]">
                  {i18nState.language === 'bn' ? 'সর্বমোট' : 'Grand Total'}:
                </span>
                <span class="text-lg font-black text-[var(--color-brand-primary)]">
                  ৳{cartState.grandTotal.toLocaleString('en-BD')}
                </span>
              </div>
            </div>

            <!-- Desktop Proceed Button -->
            <button
              type="button"
              disabled={isSubmitting}
              onclick={handlePlaceOrder}
              class="hidden lg:flex w-full h-12 px-6 rounded-[var(--radius-sm)] font-black text-sm text-white cta-checkout-animated items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer disabled:opacity-50"
            >
              {#if isSubmitting}
                <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>{i18nState.language === 'bn' ? 'অর্ডার প্রক্রিয়াধীন...' : 'Processing Order...'}</span>
              {:else}
                <span>{i18nState.language === 'bn' ? 'অর্ডার নিশ্চিত করুন' : 'Confirm & Place Order'}</span>
                <Icon icon={ArrowRight01Icon} size={16} strokeWidth={2.5} />
              {/if}
            </button>

            <!-- Trust Grid Badges -->
            <div class="pt-3 border-t border-[var(--color-border-subtle)] grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold text-[var(--color-text-secondary)]">
              <div class="p-1 rounded-[var(--radius-xs)] bg-[var(--color-bg-subtle)]/50">
                <span>100% Authentic</span>
              </div>
              <div class="p-1 rounded-[var(--radius-xs)] bg-[var(--color-bg-subtle)]/50">
                <span>7-Day Return</span>
              </div>
              <div class="p-1 rounded-[var(--radius-xs)] bg-[var(--color-bg-subtle)]/50">
                <span>Fast Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE STICKY BOTTOM PROCEED BAR -->
    <div
      class="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[var(--color-bg-surface)]/95 backdrop-blur-md border-t border-[var(--color-border-default)] shadow-top px-4 py-2.5 transition-transform"
      style="padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));"
    >
      <div class="max-w-md mx-auto flex items-center justify-between gap-3">
        <div>
          <span class="text-[10px] text-[var(--color-text-secondary)] block leading-none mb-0.5">
            {i18nState.language === 'bn' ? 'সর্বমোট পরিশোধ' : 'Grand Total'}
          </span>
          <span class="text-base sm:text-lg font-black text-[var(--color-brand-primary)] leading-none">
            ৳{cartState.grandTotal.toLocaleString('en-BD')}
          </span>
        </div>

        <button
          type="button"
          disabled={isSubmitting}
          onclick={handlePlaceOrder}
          class="flex-1 max-w-[220px] h-11 px-4 rounded-[var(--radius-sm)] font-black text-xs sm:text-sm text-white cta-checkout-animated flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer disabled:opacity-50"
        >
          {#if isSubmitting}
            <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <span>{i18nState.language === 'bn' ? 'প্রসেসিং...' : 'Processing...'}</span>
          {:else}
            <span>{i18nState.language === 'bn' ? 'অর্ডার নিশ্চিত করুন' : 'Confirm Order'}</span>
            <Icon icon={ArrowRight01Icon} size={15} strokeWidth={2.5} />
          {/if}
        </button>
      </div>
    </div>
  {/if}
</main>
