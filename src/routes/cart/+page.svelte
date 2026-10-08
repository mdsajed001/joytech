<script lang="ts">
  import { goto } from '$app/navigation';
  import Icon from '$lib/components/Icon.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import CartItemCard from '$lib/components/cart/CartItemCard.svelte';
  import DeliveryProgressBar from '$lib/components/cart/DeliveryProgressBar.svelte';
  import OrderSummary from '$lib/components/cart/OrderSummary.svelte';
  import CrossSellRail from '$lib/components/cart/CrossSellRail.svelte';
  import EmptyCartView from '$lib/components/cart/EmptyCartView.svelte';

  let isMobileSummaryExpanded = $state(false);
  let crossSellSentinel: HTMLElement | null = $state(null);

  $effect(() => {
    if (!crossSellSentinel || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isMobileSummaryExpanded = true;
          } else {
            if (entry.boundingClientRect.top > 0) {
              // Sentinel is below the viewport -> user is above in items
              isMobileSummaryExpanded = false;
            } else {
              // Sentinel is above the viewport -> user has scrolled past it
              isMobileSummaryExpanded = true;
            }
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -160px 0px',
        threshold: 0
      }
    );

    observer.observe(crossSellSentinel);

    return () => {
      observer.disconnect();
    };
  });
</script>

<svelte:head>
  <title>{i18nState.language === 'bn' ? 'শপিং কার্ট ও চেকআউট' : 'Shopping Cart & Checkout'} — Joy Telecom</title>
</svelte:head>

<div class="min-h-[80vh] bg-[var(--color-bg-canvas)] pb-[420px] sm:pb-28 lg:pb-16 transition-all duration-300">
  <!-- 1st Order Free Delivery Announcement Banner (Full-Width, Zero Top Gap) -->
  {#if cartState.items.length > 0}
    <DeliveryProgressBar />
  {/if}

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">

    <!-- Main Content Area -->
    {#if cartState.items.length === 0}
      <EmptyCartView />
    {:else}
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <!-- Left Column: Items, Cross-sells -->
        <div class="lg:col-span-7 space-y-5">
          <!-- Items List -->
          <div class="space-y-3">
            {#each cartState.items as item (item.product.id)}
              <CartItemCard {item} />
            {/each}
          </div>

          <!-- You Might Also Like Discovery Rail -->
          <CrossSellRail />

          <!-- Clearance buffer gap below recommendations before scroll trigger -->
          <div class="h-28 lg:hidden pointer-events-none" aria-hidden="true"></div>

          <!-- Scroll Sentinel for mobile Order Summary auto-expansion -->
          <div bind:this={crossSellSentinel} class="h-2 lg:hidden pointer-events-none" aria-hidden="true"></div>
        </div>

        <!-- Right Column: Sticky Order Summary & Checkout (Desktop Only) -->
        <div class="hidden lg:block lg:col-span-5">
          <div class="lg:sticky lg:top-24 space-y-4">
            <OrderSummary onProceedToCheckout={() => goto('/checkout')} />
          </div>
        </div>
      </div>

      <!-- Mobile Full-Bleed Sticky Bottom Sheet Order Summary (Single Mobile CTA) -->
      <div class="fixed bottom-14 sm:bottom-0 lg:hidden left-0 right-0 z-30">
        <OrderSummary
          variant="sheet"
          isExpanded={isMobileSummaryExpanded}
          onToggleExpand={() => (isMobileSummaryExpanded = !isMobileSummaryExpanded)}
          onProceedToCheckout={() => goto('/checkout')}
        />
      </div>
    {/if}
  </div>
</div>
