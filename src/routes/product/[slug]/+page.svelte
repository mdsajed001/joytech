<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { getProductBySlug, getRelatedProducts, CATEGORIES, PHONE_MODELS } from '$lib/data/catalog';
  import type { Product, ProductVariant } from '$lib/types';
  import { cartState, i18nState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import ProductGallery from '$lib/components/product/ProductGallery.svelte';
  import ProductVariantSelector from '$lib/components/product/ProductVariantSelector.svelte';
  import ProductTrustCard from '$lib/components/product/ProductTrustCard.svelte';
  import ProductAccordion from '$lib/components/product/ProductAccordion.svelte';
  import ProductReviews from '$lib/components/product/ProductReviews.svelte';
  import ProductStickyBar from '$lib/components/product/ProductStickyBar.svelte';
  import {
    StarIcon,
    ShoppingBag01Icon,
    FlashIcon,
    ArrowLeft01Icon,
    Home01Icon,
    MinusSignIcon,
    PlusSignIcon,
    Shield01Icon,
    Tick02Icon
  } from '@hugeicons/core-free-icons';

  let slug = $derived($page.params.slug);
  let product = $derived(slug ? getProductBySlug(slug) : undefined);
  let relatedProducts = $derived(product ? getRelatedProducts(product, 4) : []);

  // Form states
  let selectedModel = $state('');
  let selectedVariant = $state<ProductVariant | null>(null);
  let quantity = $state(1);
  let showValidationError = $state(false);

  // Auto-select first model and first variant when product loads
  $effect(() => {
    if (product) {
      if (product.compatibleModels.length > 0 && !selectedModel) {
        selectedModel = product.compatibleModels[0];
      }
      if (product.variants && product.variants.length > 0 && !selectedVariant) {
        selectedVariant = product.variants[0];
      }
      quantity = 1;
      showValidationError = false;
    }
  });

  // Dynamic price, savings, and photo derived from active single-thread variant
  let activePrice = $derived(selectedVariant?.price ?? product?.price ?? 0);
  let activeOriginalPrice = $derived(selectedVariant?.originalPrice ?? product?.originalPrice);
  let activeImageOverride = $derived(selectedVariant?.image ?? null);

  let categoryName = $derived.by(() => {
    if (!product) return 'Accessories';
    const found = CATEGORIES.find((c) => c.id === product.categoryId);
    if (!found) return 'Accessories';
    return i18nState.language === 'bn' ? found.nameBn : found.name;
  });

  let isOutOfStock = $derived(!product?.inStock || product?.stockCount === 0);

  function validateSelection(): boolean {
    if (!product) return false;
    if (product.compatibleModels.length > 0 && !selectedModel) {
      showValidationError = true;
      cartState.showToast(
        i18nState.language === 'bn'
          ? 'দয়া করে আপনার ফোন মডেল নির্বাচন করুন'
          : 'Please select a compatible phone model'
      );
      return false;
    }
    if (product.variants && product.variants.length > 0 && !selectedVariant) {
      showValidationError = true;
      cartState.showToast(
        i18nState.language === 'bn'
          ? 'দয়া করে একটি ভ্যারিয়েন্ট নির্বাচন করুন'
          : 'Please select a variant option'
      );
      return false;
    }
    showValidationError = false;
    return true;
  }

  function getPreparedProduct(): Product | null {
    if (!product) return null;
    if (selectedVariant) {
      return {
        ...product,
        price: selectedVariant.price,
        originalPrice: selectedVariant.originalPrice ?? product.originalPrice,
        image: selectedVariant.image
      };
    }
    return product;
  }

  function handleAddToCart() {
    if (!product || isOutOfStock) return;
    if (!validateSelection()) return;

    const itemToAdd = getPreparedProduct()!;
    const resolvedModelName = selectedModel
      ? (PHONE_MODELS.find((m) => m.slug === selectedModel)?.name ?? selectedModel.replace(/-/g, ' ').toUpperCase())
      : undefined;

    cartState.addItem(itemToAdd, quantity, selectedVariant, selectedModel, resolvedModelName);
  }

  function handleBuyNow() {
    if (!product || isOutOfStock) return;
    if (!validateSelection()) return;

    const itemToAdd = getPreparedProduct()!;
    const resolvedModelName = selectedModel
      ? (PHONE_MODELS.find((m) => m.slug === selectedModel)?.name ?? selectedModel.replace(/-/g, ' ').toUpperCase())
      : undefined;

    cartState.addItem(itemToAdd, quantity, selectedVariant, selectedModel, resolvedModelName);
    goto('/checkout');
  }

  function scrollToReviews() {
    const el = document.getElementById('reviews-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>{product ? `${product.name} | Joytech` : 'Product Not Found | Joytech'}</title>
</svelte:head>

{#if !product}
  <!-- 404 / Missing Product State -->
  <div class="max-w-xl mx-auto py-20 px-4 text-center space-y-4">
    <div class="w-16 h-16 mx-auto rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center">
      <Icon icon={ShoppingBag01Icon} size={32} />
    </div>
    <h1 class="text-xl sm:text-2xl font-black text-[var(--color-text-primary)]">
      {i18nState.language === 'bn' ? 'পণ্যটি খুঁজে পাওয়া যায়নি' : 'Product Not Found'}
    </h1>
    <p class="text-xs sm:text-sm text-[var(--color-text-secondary)]">
      {i18nState.language === 'bn'
        ? 'যে পণ্যটি খুঁজছেন তা বর্তমানে অনুপলব্ধ বা সরিয়ে নেওয়া হয়েছে।'
        : 'The accessory you are looking for is currently unavailable or has been removed.'}
    </p>
    <a
      href="/"
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-brand-primary)] text-white text-xs font-bold shadow-xs hover:opacity-95 cursor-pointer"
    >
      <Icon icon={Home01Icon} size={15} />
      <span>{i18nState.language === 'bn' ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
    </a>
  </div>
{:else}
  <!-- Main PDP Container (Extra bottom padding on mobile for sticky bar) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 pb-28 sm:pb-16 space-y-8">
    <!-- Breadcrumb Bar -->
    <nav class="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] overflow-x-auto pb-1 scrollbar-none" aria-label="Breadcrumb">
      <a href="/" class="hover:text-[var(--color-brand-primary)] flex items-center gap-1 shrink-0">
        <Icon icon={Home01Icon} size={13} />
        <span>{i18nState.language === 'bn' ? 'হোম' : 'Home'}</span>
      </a>
      <span>/</span>
      <span class="hover:text-[var(--color-text-primary)] shrink-0">{categoryName}</span>
      <span>/</span>
      <span class="hover:text-[var(--color-text-primary)] shrink-0">{product.brand}</span>
      <span>/</span>
      <span class="text-[var(--color-text-primary)] font-bold truncate">{product.name}</span>
    </nav>

    <!-- Desktop 2-Column Split Layout / Mobile Purchase-First Stacked Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- SECTION 1: Product Media Gallery (First on both mobile and desktop) -->
      <div class="lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-6">
        <!-- Interactive Media Gallery -->
        <ProductGallery {product} {activeImageOverride} />
      </div>

      <!-- SECTION 2: Purchase Box & Variants (Directly under image on mobile; sticky right sidebar on desktop) -->
      <div class="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 space-y-6 lg:sticky lg:top-24">
        <!-- Product Brand, Status, Reviews & Title -->
        <div class="space-y-2">
          <!-- Top Metadata Row: Brand + Status on Left, Reviews on Right -->
          <div class="flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-black tracking-wider text-[var(--color-brand-primary)] uppercase">
                {product.brand}
              </span>
              {#if product.isBestSeller}
                <span class="text-[var(--color-text-disabled)]">•</span>
                <span class="font-bold text-amber-600 dark:text-amber-400">
                  {i18nState.language === 'bn' ? 'বেস্ট সেলার' : 'Best Seller'}
                </span>
              {:else if product.isNewArrival}
                <span class="text-[var(--color-text-disabled)]">•</span>
                <span class="font-bold text-[var(--color-brand-primary)]">
                  {i18nState.language === 'bn' ? 'নতুন পণ্য' : 'New Arrival'}
                </span>
              {/if}
            </div>

            <!-- Social Proof: Retained Clickable Reviews Link -->
            <button
              type="button"
              onclick={scrollToReviews}
              class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors cursor-pointer shrink-0"
            >
              <div class="flex items-center text-[var(--color-rating-star)]">
                {#each Array(5) as _, i}
                  <Icon icon={StarIcon} size={13} class={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                {/each}
              </div>
              <span class="font-black">{product.rating.toFixed(1)}</span>
              <span class="text-[var(--color-text-secondary)] font-medium underline underline-offset-2">
                ({product.reviewCount} {i18nState.language === 'bn' ? 'রিভিউ' : 'reviews'})
              </span>
            </button>
          </div>

          <!-- Product Title -->
          <h1 class="text-lg sm:text-2xl font-black text-[var(--color-text-primary)] leading-snug pt-0.5">
            {i18nState.language === 'bn' && product.nameBn ? product.nameBn : product.name}
          </h1>

          <!-- Pricing Row: Stacked Crossed Price Above Real Price on Left, Save Text on Right -->
          <div class="flex items-end justify-between gap-3 pt-1">
            <!-- Left: Stacked Original Strikethrough & Active Price -->
            <div class="flex flex-col">
              {#if activeOriginalPrice && activeOriginalPrice > activePrice}
                <span class="text-xs sm:text-sm font-semibold text-[var(--color-text-disabled)] line-through leading-none mb-1">
                  ৳{activeOriginalPrice.toLocaleString('en-BD')}
                </span>
              {/if}
              <span class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight leading-none">
                ৳{activePrice.toLocaleString('en-BD')}
              </span>
            </div>

            <!-- Right: Discount & Savings Text -->
            {#if activeOriginalPrice && activeOriginalPrice > activePrice}
              {@const saveAmount = activeOriginalPrice - activePrice}
              {@const discountPercent = Math.round((saveAmount / activeOriginalPrice) * 100)}
              <div class="text-right pb-0.5">
                <span class="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400">
                  -{discountPercent}% ({i18nState.language === 'bn' ? `সাশ্রয় ৳${saveAmount.toLocaleString('en-BD')}` : `Save ৳${saveAmount.toLocaleString('en-BD')}`})
                </span>
              </div>
            {/if}
          </div>
        </div>

        <!-- Variant & Phone Compatibility Pickers -->
        <ProductVariantSelector
          {product}
          bind:selectedModel
          bind:selectedVariant
          {showValidationError}
          onSelectModel={(m) => {
            selectedModel = m;
            showValidationError = false;
          }}
          onSelectVariant={(v) => {
            selectedVariant = v;
            showValidationError = false;
          }}
        />

        <!-- Desktop Direct Purchase Actions (Hidden on mobile where sticky bar rules) -->
        <div class="hidden sm:block space-y-3 pt-2 border-t border-[var(--color-border-subtle)]">
          <div class="flex items-center gap-3">
            <!-- Quantity Stepper -->
            <div class="inline-flex items-center border border-[var(--color-border-default)] rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] h-12 px-1.5 shrink-0">
              <button
                type="button"
                onclick={() => (quantity = Math.max(1, quantity - 1))}
                disabled={quantity <= 1 || isOutOfStock}
                aria-label="Decrease quantity"
                class="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                <Icon icon={MinusSignIcon} size={15} />
              </button>
              <span class="w-8 text-center text-xs font-black text-[var(--color-text-primary)] select-none">
                {quantity}
              </span>
              <button
                type="button"
                onclick={() => (quantity = Math.min(product.stockCount, quantity + 1))}
                disabled={quantity >= product.stockCount || isOutOfStock}
                aria-label="Increase quantity"
                class="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                <Icon icon={PlusSignIcon} size={15} />
              </button>
            </div>

            <!-- Add to Cart CTA (Accent Outlined) -->
            <button
              type="button"
              disabled={isOutOfStock}
              onclick={handleAddToCart}
              class="flex-1 inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[var(--radius-sm)] border-2 border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] dark:hover:bg-[var(--color-accent)]/10 active:scale-98 transition-all text-sm font-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-2xs"
            >
              <Icon icon={ShoppingBag01Icon} size={18} />
              <span>{i18nState.language === 'bn' ? 'কার্টে যুক্ত করুন' : 'Add to Cart'}</span>
            </button>
          </div>

          <!-- Primary Buy Now CTA -->
          <button
            type="button"
            disabled={isOutOfStock}
            onclick={handleBuyNow}
            class="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[var(--radius-sm)] cta-checkout-animated text-white active:scale-98 transition-all text-sm font-black shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon icon={FlashIcon} size={18} />
            <span>
              {isOutOfStock
                ? (i18nState.language === 'bn' ? 'স্টক শেষ' : 'Sold Out')
                : (i18nState.language === 'bn' ? 'সরাসরি অর্ডার করুন' : 'Buy Now with 1-Click')}
            </span>
          </button>
        </div>
      </div>

      <!-- SECTION 3: Trust & In-Depth Specifications (After purchase section on mobile; left col row 2 on desktop) -->
      <div class="lg:col-span-7 lg:col-start-1 lg:row-start-2 space-y-6">
        <!-- Trust & Fulfillment Guarantees -->
        <ProductTrustCard />

        <!-- Collapsible Specifications Accordion -->
        <ProductAccordion {product} />
      </div>
    </div>

    <!-- Customer Reviews Section Anchor -->
    <div id="reviews-section" class="pt-6">
      <ProductReviews {product} />
    </div>

    <!-- Related Products ("You May Also Like") -->
    {#if relatedProducts.length > 0}
      <div class="space-y-4 pt-6 border-t border-[var(--color-border-subtle)]">
        <div class="flex items-center justify-between">
          <h2 class="text-base sm:text-lg font-black text-[var(--color-text-primary)]">
            {i18nState.language === 'bn' ? 'আপনার ডিভাইসের সাথে মানানসই আরও পণ্য' : 'You May Also Like'}
          </h2>
          <span class="text-xs font-bold text-[var(--color-brand-primary)]">
            {relatedProducts.length} {i18nState.language === 'bn' ? 'টি পণ্য' : 'accessories'}
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {#each relatedProducts as relatedProduct (relatedProduct.id)}
            <ProductCard
              product={relatedProduct}
              onAddToCart={() => {
                cartState.addItem(relatedProduct);
              }}
            />
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- Mobile-First Sticky Action Bar (Active on small screens, bottom nav suppressed) -->
  <div class="sm:hidden">
    <ProductStickyBar
      {product}
      bind:quantity
      currentPrice={activePrice}
      currentOriginalPrice={activeOriginalPrice}
      variantTitle={selectedVariant?.title}
      onIncrement={() => (quantity = Math.min(product.stockCount, quantity + 1))}
      onDecrement={() => (quantity = Math.max(1, quantity - 1))}
      onAddToCart={handleAddToCart}
      onBuyNow={handleBuyNow}
    />
  </div>
{/if}
