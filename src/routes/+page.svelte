<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import CategorySection from '$lib/components/CategorySection.svelte';
  import FlashSaleSection from '$lib/components/FlashSaleSection.svelte';
  import ProductSection from '$lib/components/ProductSection.svelte';
  import AuthenticityBanner from '$lib/components/AuthenticityBanner.svelte';
  import TrustGrid from '$lib/components/TrustGrid.svelte';
  import { PRODUCTS } from '$lib/data/catalog';
  import { cartState } from '$lib/state.svelte';
  import type { Product } from '$lib/types';
  import { SparklesIcon } from '@hugeicons/core-free-icons';
  import StickerFire3D from '$lib/components/StickerFire3D.svelte';

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  function handleAddToCart(product: Product) {
    cartState.addItem(product);
  }

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>Joy Telecom — Authentic Mobile Accessories & Gadgets Bangladesh</title>
  <meta
    name="description"
    content="Shop genuine phone cases, tempered screen protectors, GaN fast chargers, and MagSafe accessories compatible with Apple, Samsung, Google Pixel and Xiaomi."
  />
</svelte:head>

<!-- Hero Section (Desktop Split Slider+FlashSale / Mobile Slider) -->
<Hero
  onShopNow={() => scrollToSection('best-sellers')}
  onAddToCart={handleAddToCart}
/>

<!-- Featured Categories Showcase -->
<CategorySection />

<!-- Flash Sale Section with Countdown (Mobile Only, Desktop featured in Hero) -->
<FlashSaleSection class="lg:hidden" onAddToCart={handleAddToCart} />

<!-- Best Sellers Row -->
<ProductSection
  id="best-sellers"
  title="Best Sellers in Bangladesh"
  kicker="Customer Favorites"
  kickerComponent={StickerFire3D}
  kickerColor="var(--color-accent)"
  viewAllLink={{ href: '#all-products', label: `View all (${PRODUCTS.length})` }}
  bgColor="bg-[var(--color-bg-surface)]"
  products={bestSellers}
  onAddToCart={handleAddToCart}
/>

<!-- Product Discovery Banner -->
<AuthenticityBanner onSearch={(q) => cartState.showToast(`Searching catalog for "${q}"...`)} />

<!-- New Arrivals Row -->
<ProductSection
  id="new-arrivals"
  title="New Arrivals"
  kicker="Latest Additions"
  kickerIcon={SparklesIcon}
  kickerColor="var(--color-brand-primary)"
  bgColor="bg-[var(--color-bg-canvas)]"
  products={newArrivals}
  onAddToCart={handleAddToCart}
/>

<!-- Why Joy Telecom Trust Section -->
<TrustGrid />
