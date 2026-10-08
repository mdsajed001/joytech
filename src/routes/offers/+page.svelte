<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { OFFER_EVENTS, getEventBySlug, type OfferEvent } from '$lib/data/offers';
  import PromoCouponBar from '$lib/components/offers/PromoCouponBar.svelte';
  import OfferEventRail from '$lib/components/offers/OfferEventRail.svelte';
  import DedicatedEventView from '$lib/components/offers/DedicatedEventView.svelte';

  const activeEventSlug = $derived($page.url.searchParams.get('event'));
  const activeEvent = $derived(activeEventSlug ? getEventBySlug(activeEventSlug) : undefined);

  function handleSelectEvent(event: OfferEvent) {
    goto(`/offers?event=${event.slug}`, { keepFocus: true });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleBackToHub() {
    goto('/offers', { keepFocus: true });
  }
</script>

<svelte:head>
  {#if activeEvent}
    <title>{activeEvent.title} — Joy Telecom Offers</title>
    <meta name="description" content={activeEvent.subtitle} />
  {:else}
    <title>Special Offers & Deals — Joy Telecom</title>
    <meta
      name="description"
      content="Exclusive discounts on authentic phone accessories, fast GaN chargers, MagSafe cases, and tempered glass."
    />
  {/if}
</svelte:head>

<main class="min-h-screen bg-[var(--color-bg-base)] pb-16 sm:pb-24">
  {#if activeEvent}
    <!-- Dedicated Single Event Campaign View (Full Page with Banner on Top) -->
    <DedicatedEventView event={activeEvent} onBack={handleBackToHub} />
  {:else}
    <!-- Main Offers Hub -->

    <!-- Active Promo Coupons Quick-Claim Bar -->
    <PromoCouponBar />

    <!-- Repeating Event Sections with Horizontal Scroll Rails -->
    <div class="space-y-0 sm:space-y-4">
      {#each OFFER_EVENTS as event (event.id)}
        <OfferEventRail {event} onSelectEvent={handleSelectEvent} />
      {/each}
    </div>
  {/if}
</main>
