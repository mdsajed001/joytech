<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { PRODUCTS, CATEGORIES, PHONE_BRANDS, PHONE_MODELS } from '$lib/data/catalog';
  import type { Product } from '$lib/types';
  import { cartState } from '$lib/state.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import SearchSidebar from '$lib/components/search/SearchSidebar.svelte';
  import SearchMobileFilterDrawer from '$lib/components/search/SearchMobileFilterDrawer.svelte';
  import SearchableSelect, { type SelectOption } from '$lib/components/ui/SearchableSelect.svelte';
  import { CATEGORY_FACETS } from '$lib/data/facets';
  import Icon from '$lib/components/Icon.svelte';
  import {
    Search01Icon,
    FilterIcon,
    Sorting01Icon,
    Cancel01Icon,
    ArrowRight01Icon,
    ShoppingBag01Icon,
    CheckmarkCircle01Icon
  } from '@hugeicons/core-free-icons';

  // Read active query, category, and phoneModel from URL
  let queryParam = $derived($page.url.searchParams.get('q') ?? '');
  let categoryParam = $derived(
    $page.url.searchParams.get('category') ?? $page.url.searchParams.get('cat') ?? ''
  );
  let phoneModelParam = $derived($page.url.searchParams.get('phoneModel') ?? '');

  let decodedQuery = $derived.by(() => {
    try {
      return decodeURIComponent(queryParam).trim();
    } catch {
      return queryParam.trim();
    }
  });

  // Filter States
  let selectedCategories = $state<string[]>([]);
  let selectedBrands = $state<string[]>([]);
  let selectedPhoneBrand = $state('');
  let selectedPhoneModel = $state('');
  let magsafeOnly = $state(false);
  let onSaleOnly = $state(false);
  let minPrice = $state(0);
  let maxPrice = $state(10000);
  let isPriceFiltered = $derived(minPrice > 0 || maxPrice < 10000);
  let inStockOnly = $state(false);
  let sortBy = $state<'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'discount'>('relevance');

  // Dedicated Category Specific Facets (e.g. { wattage: ['65w'], caseStyle: ['frosted'] })
  let selectedFacets = $state<Record<string, string[]>>({});

  // Sync categoryParam from URL to selectedCategories
  $effect(() => {
    if (categoryParam && !selectedCategories.includes(categoryParam)) {
      selectedCategories = [categoryParam];
      selectedFacets = {};
    }
  });

  // Sync phoneModelParam from URL to selectedPhoneModel
  $effect(() => {
    if (phoneModelParam && selectedPhoneModel !== phoneModelParam) {
      selectedPhoneModel = phoneModelParam;
      const matched = PHONE_MODELS.find((m) => m.slug === phoneModelParam || m.id === phoneModelParam);
      if (matched && !selectedPhoneBrand) {
        selectedPhoneBrand = matched.brandId;
      }
    }
  });

  // Derived device metadata helpers for fit reassurance
  let selectedModelData = $derived(
    selectedPhoneModel
      ? PHONE_MODELS.find((m) => m.slug === selectedPhoneModel || m.id === selectedPhoneModel)
      : null
  );

  let selectedBrandData = $derived(
    selectedModelData
      ? PHONE_BRANDS.find((b) => b.id === selectedModelData.brandId)
      : selectedPhoneBrand
      ? PHONE_BRANDS.find((b) => b.id === selectedPhoneBrand)
      : null
  );

  let modelDisplayName = $derived(
    selectedModelData?.name ||
      (selectedPhoneModel
        ? selectedPhoneModel
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ')
        : '')
  );

  let brandDisplayName = $derived(selectedBrandData?.name || '');

  // Reassurance bar is only shown when arriving from wizard with phoneModel in the URL
  let isWizardFitSession = $derived(
    Boolean(phoneModelParam && selectedPhoneModel === phoneModelParam)
  );

  function handleDismissFitSession() {
    selectedPhoneModel = '';
    const url = new URL($page.url);
    url.searchParams.delete('phoneModel');
    goto(url.pathname + (url.search ? url.search : ''), { replaceState: true, noScroll: true, keepFocus: true });
  }

  const SORT_OPTIONS: SelectOption[] = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'discount', label: 'Highest Discount' }
  ];

  // Mobile Drawer State
  let isMobileFilterOpen = $state(false);

  // Suggested tags for zero-results or quick exploration
  const SUGGESTED_TAGS = [
    'iPhone 16 Pro Max',
    'Spigen',
    'Anker 30W',
    'MagSafe',
    'Fast Charger',
    'Galaxy S24',
    'Screen Protector'
  ];

  // Multi-token query matching on the entire catalog
  let queryMatchedProducts = $derived.by(() => {
    const q = decodedQuery.toLowerCase();
    if (!q) {
      // If query is empty, show all catalog products
      return [...PRODUCTS];
    }

    const tokens = q.split(/\s+/).filter(Boolean);

    return PRODUCTS.filter((p) => {
      const pName = p.name.toLowerCase();
      const pNameBn = p.nameBn?.toLowerCase() ?? '';
      const pBrand = p.brand.toLowerCase();
      const pCat = p.categoryId.toLowerCase();
      const pFeatures = p.features?.map((f) => f.toLowerCase()) ?? [];
      const pModels = p.compatibleModels?.map((m) => m.toLowerCase()) ?? [];

      return tokens.every((token) => {
        return (
          pName.includes(token) ||
          pNameBn.includes(token) ||
          pBrand.includes(token) ||
          pCat.includes(token) ||
          pModels.some((m) => m.includes(token) || token.includes(m)) ||
          pFeatures.some((f) => f.includes(token))
        );
      });
    });
  });

  // Available brands derived from currently query-matched products
  let availableBrands = $derived.by(() => {
    const brandsSet = new Set<string>();
    queryMatchedProducts.forEach((p) => {
      if (p.brand) brandsSet.add(p.brand);
    });
    return Array.from(brandsSet).sort();
  });

  // Available categories
  let availableCategories = $derived.by(() => {
    const catSet = new Set<string>();
    queryMatchedProducts.forEach((p) => {
      if (p.categoryId) catSet.add(p.categoryId);
    });
    return Array.from(catSet);
  });

  // Filtered & Sorted Results
  let displayedProducts = $derived.by(() => {
    let list = [...queryMatchedProducts];

    // Filter: Device Compatibility
    if (selectedPhoneModel) {
      list = list.filter((p) => p.compatibleModels?.includes(selectedPhoneModel));
    } else if (selectedPhoneBrand) {
      const brandModelSlugs = PHONE_MODELS.filter((m) => m.brandId === selectedPhoneBrand).map((m) => m.slug);
      list = list.filter((p) => p.compatibleModels?.some((m) => brandModelSlugs.includes(m)));
    }

    // Filter: MagSafe / Magnetic
    if (magsafeOnly) {
      list = list.filter(
        (p) =>
          p.features?.some((f) => /magsafe|magnetic/i.test(f)) ||
          p.name.toLowerCase().includes('magsafe')
      );
    }

    // Filter: On Sale / Deals
    if (onSaleOnly) {
      list = list.filter((p) => Boolean((p.discountPercent && p.discountPercent > 0) || p.isFlashSale));
    }

    // Filter: Categories
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.categoryId));
    }

    // Filter: Brands
    if (selectedBrands.length > 0) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }

    // Filter: Price Range
    if (isPriceFiltered) {
      list = list.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    }

    // Filter: In-Stock Only
    if (inStockOnly) {
      list = list.filter((p) => p.inStock && p.stockCount > 0);
    }

    // Filter: Dedicated Category Facets
    const activeFacetEntries = Object.entries(selectedFacets).filter(
      ([_, options]) => options && options.length > 0
    );
    if (activeFacetEntries.length > 0) {
      list = list.filter((p) => {
        return activeFacetEntries.every(([groupId, requiredOpts]) => {
          const productAttrs = p.attributes?.[groupId] ?? [];
          return requiredOpts.some(
            (opt) =>
              productAttrs.includes(opt) ||
              p.features?.some((f) => f.toLowerCase().includes(opt.toLowerCase()))
          );
        });
      });
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'discount') {
      list.sort((a, b) => (b.discountPercent ?? 0) - (a.discountPercent ?? 0));
    }

    return list;
  });

  // Count active filters
  let activeFilterCount = $derived.by(() => {
    let count = 0;
    if (selectedPhoneModel || selectedPhoneBrand) count += 1;
    if (magsafeOnly) count += 1;
    if (onSaleOnly) count += 1;
    if (selectedCategories.length > 0) count += selectedCategories.length;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (isPriceFiltered) count += 1;
    if (inStockOnly) count += 1;
    Object.values(selectedFacets).forEach((opts) => {
      count += opts.length;
    });
    return count;
  });

  // Best seller fallback items for empty state
  let fallbackRecommendations = $derived.by(() => {
    return PRODUCTS.filter((p) => p.isBestSeller || p.isFlashSale).slice(0, 4);
  });

  // Toggle Handlers
  function toggleCategory(catId: string) {
    if (selectedCategories.includes(catId)) {
      selectedCategories = selectedCategories.filter((id) => id !== catId);
    } else {
      selectedCategories = [...selectedCategories, catId];
    }
    selectedFacets = {};
  }

  function toggleBrand(brand: string) {
    if (selectedBrands.includes(brand)) {
      selectedBrands = selectedBrands.filter((b) => b !== brand);
    } else {
      selectedBrands = [...selectedBrands, brand];
    }
  }

  function handlePriceChange(min: number, max: number) {
    minPrice = min;
    maxPrice = max;
  }

  function handleResetPrice() {
    minPrice = 0;
    maxPrice = 10000;
  }

  function handleSelectPhoneBrand(b: string) {
    selectedPhoneBrand = b;
    selectedPhoneModel = '';
  }

  function handleSelectPhoneModel(m: string) {
    selectedPhoneModel = m;
  }

  function toggleFacet(facetGroupId: string, optionId: string) {
    const current = selectedFacets[facetGroupId] ?? [];
    if (current.includes(optionId)) {
      const updated = current.filter((id) => id !== optionId);
      if (updated.length === 0) {
        const copy = { ...selectedFacets };
        delete copy[facetGroupId];
        selectedFacets = copy;
      } else {
        selectedFacets = { ...selectedFacets, [facetGroupId]: updated };
      }
    } else {
      selectedFacets = {
        ...selectedFacets,
        [facetGroupId]: [...current, optionId]
      };
    }
  }

  function clearCategoryFacets() {
    selectedFacets = {};
  }

  function clearAllFilters() {
    selectedCategories = [];
    selectedBrands = [];
    selectedPhoneBrand = '';
    selectedPhoneModel = '';
    magsafeOnly = false;
    onSaleOnly = false;
    minPrice = 0;
    maxPrice = 10000;
    inStockOnly = false;
    selectedFacets = {};
  }

  function handleQuickSearch(tag: string) {
    clearAllFilters();
    goto(`/search?q=${encodeURIComponent(tag)}`);
  }
</script>

<svelte:head>
  {#if decodedQuery}
    <title>Search: {decodedQuery} — Joy Telecom</title>
    <meta name="description" content="Search results for {decodedQuery} at Joy Telecom. Genuine mobile accessories, chargers, cases, and protectors." />
  {:else}
    <title>Search Catalog — Joy Telecom</title>
    <meta name="description" content="Explore genuine phone accessories, GaN chargers, MagSafe cases, and tempered glass at Joy Telecom." />
  {/if}
</svelte:head>

<div class="min-h-screen bg-[var(--color-bg-canvas)] flex flex-col">
  <!-- Wizard Fit Session Hero Banner (Full Bleed) -->
  {#if isWizardFitSession}
    <div class="w-full fit-session-hero-bubble pt-6 pb-8 md:pt-8 md:pb-12 border-b border-[var(--color-border-default)] shadow-sm relative z-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Top Row: Breadcrumb & Dismiss -->
        <div class="flex items-center justify-between gap-4 mb-6 md:mb-8">
          <!-- Breadcrumb inside Hero -->
          <nav class="flex items-center gap-2 text-xs font-semibold text-white/80">
            <a href="/" class="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span class="text-white">Search</span>
          </nav>
          
          <!-- Dismiss Action (Clean text + cross icon, no button/capsule styling) -->
          <button
            type="button"
            onclick={handleDismissFitSession}
            class="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
            title="Clear device filter and view all products"
          >
            <Icon icon={Cancel01Icon} size={13} />
            <span>Show All Devices</span>
          </button>
        </div>
        
        <!-- Hero Content: Device Name & Reassurance (Centered on mobile, left-aligned on desktop) -->
        <div class="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl mx-auto md:mx-0">
          <h1 class="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm mb-2 text-center md:text-left">
            {brandDisplayName ? `${brandDisplayName} ` : ''}{modelDisplayName}
          </h1>
          
          <div class="flex items-center justify-center md:justify-start gap-1.5 text-xs md:text-sm text-white/90">
            <Icon icon={CheckmarkCircle01Icon} size={15} class="text-white shrink-0" />
            <span>
              <strong class="font-bold text-white">100% Fit Guaranteed:</strong> Verified for your device
            </span>
          </div>
        </div>
        
      </div>
    </div>
  {/if}

  <div class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
    <!-- Breadcrumb (if NO hero banner) -->
    {#if !isWizardFitSession}
      <nav class="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)] mb-4">
        <a href="/" class="hover:text-[var(--color-brand-primary)] transition-colors">Home</a>
        <span>/</span>
        <span class="text-[var(--color-text-primary)]">Search</span>
        {#if decodedQuery}
          <span>/</span>
          <span class="text-[var(--color-brand-primary)] truncate max-w-xs font-bold">"{decodedQuery}"</span>
        {/if}
      </nav>
    {/if}

    <!-- Main Content Container with Desktop Sidebar -->
    <div class="flex flex-col md:flex-row gap-6 items-start">
      <!-- Left Sidebar (Desktop) -->
      <SearchSidebar
        {availableCategories}
        {availableBrands}
        {selectedCategories}
        {selectedBrands}
        {minPrice}
        {maxPrice}
        {inStockOnly}
        {selectedPhoneBrand}
        {selectedPhoneModel}
        {magsafeOnly}
        {onSaleOnly}
        {selectedFacets}
        onToggleCategory={toggleCategory}
        onToggleBrand={toggleBrand}
        onPriceChange={handlePriceChange}
        onResetPrice={handleResetPrice}
        onToggleInStock={() => (inStockOnly = !inStockOnly)}
        onSelectPhoneBrand={handleSelectPhoneBrand}
        onSelectPhoneModel={handleSelectPhoneModel}
        onToggleMagSafe={() => (magsafeOnly = !magsafeOnly)}
        onToggleOnSale={() => (onSaleOnly = !onSaleOnly)}
        onToggleFacet={toggleFacet}
        onClearCategoryFacets={clearCategoryFacets}
        onClearAll={clearAllFilters}
        {activeFilterCount}
      />

      <!-- Right Column: Results & Controls -->
      <div class="flex-1 w-full space-y-4">

        <!-- Top Controls Bar -->
        <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] p-3.5 sm:p-4 shadow-xs space-y-3">
          <!-- Top Row: Query title on Left, Count on Right -->
          <div class="flex items-center justify-between gap-3">
            <div>
              {#if decodedQuery}
                <h1 class="text-base sm:text-lg font-black text-[var(--color-text-primary)] tracking-tight">
                  Results for <span class="text-[var(--color-brand-primary)]">"{decodedQuery}"</span>
                </h1>
              {:else if selectedCategories.length === 1}
                {@const activeCatObj = CATEGORIES.find(c => c.id === selectedCategories[0])}
                <h1 class="text-base sm:text-lg font-black text-[var(--color-text-primary)] tracking-tight">
                  {activeCatObj ? activeCatObj.name : 'All Products'}
                </h1>
              {:else}
                <h1 class="text-base sm:text-lg font-black text-[var(--color-text-primary)] tracking-tight">
                  All Products
                </h1>
              {/if}
            </div>

            <div class="text-xs font-semibold text-[var(--color-text-secondary)] shrink-0">
              <span>Showing {displayedProducts.length} {displayedProducts.length === 1 ? 'item' : 'items'}</span>
            </div>
          </div>

          <!-- Bottom Row: Sort on Left (Minimal Ghost Style), Filters Button on Right -->
          <div class="flex items-center justify-between gap-3 pt-2 border-t border-[var(--color-border-subtle)]/60">
            <!-- Left: Minimalist Sort Selector -->
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-semibold text-[var(--color-text-tertiary)] flex items-center gap-1 shrink-0">
                <Icon icon={Sorting01Icon} size={14} />
                <span>Sort:</span>
              </span>
              <SearchableSelect
                id="search-sort"
                options={SORT_OPTIONS}
                value={sortBy}
                searchable={false}
                clearable={false}
                variant="ghost"
                align="left"
                class="min-w-[130px] sm:min-w-[150px]"
                triggerClass="!px-2 !py-1 hover:!bg-[var(--color-bg-subtle)]"
                menuWidthClass="w-48 sm:w-52"
                onSelect={(val) => (sortBy = val as any)}
              />
            </div>

            <!-- Right: Mobile Filter Trigger Button -->
            <button
              type="button"
              onclick={() => (isMobileFilterOpen = true)}
              class="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-subtle)] text-xs font-bold text-[var(--color-text-primary)] active:scale-95 transition-all cursor-pointer tap-target"
            >
              <Icon icon={FilterIcon} size={15} class="text-[var(--color-brand-primary)]" />
              <span>Filters</span>
              {#if activeFilterCount > 0}
                <span class="w-5 h-5 rounded-full bg-[var(--color-brand-primary)] text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              {/if}
            </button>
          </div>
        </div>

        <!-- Active Filter Pills (Desktop and Mobile) -->
        {#if activeFilterCount > 0}
          <div class="flex flex-wrap items-center gap-2 pt-1">
            <span class="text-xs font-semibold text-[var(--color-text-secondary)]">Active Filters:</span>
            
            {#if selectedPhoneModel}
              {@const modelName = PHONE_MODELS.find(m => m.slug === selectedPhoneModel)?.name ?? selectedPhoneModel}
              <button
                type="button"
                onclick={() => (selectedPhoneModel = '')}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer"
              >
                <span>Device: {modelName}</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {:else if selectedPhoneBrand}
              {@const brandName = PHONE_BRANDS.find(b => b.id === selectedPhoneBrand)?.name ?? selectedPhoneBrand}
              <button
                type="button"
                onclick={() => (selectedPhoneBrand = '')}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer"
              >
                <span>Brand: {brandName}</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/if}

            {#if magsafeOnly}
              <button
                type="button"
                onclick={() => (magsafeOnly = false)}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              >
                <span>MagSafe Only</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/if}

            {#if onSaleOnly}
              <button
                type="button"
                onclick={() => (onSaleOnly = false)}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
              >
                <span>On Sale</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/if}

            {#each selectedCategories as catId}
              {@const catName = CATEGORIES.find(c => c.id === catId)?.name ?? catId}
              <button
                type="button"
                onclick={() => toggleCategory(catId)}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Category: {catName}</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/each}

            {#each Object.entries(selectedFacets) as [groupId, options]}
              {#each options as optId}
                {@const group = CATEGORY_FACETS[selectedCategories[0]]?.find((g) => g.id === groupId)}
                {@const optLabel = group?.options.find((o) => o.id === optId)?.label ?? optId}
                <button
                  type="button"
                  onclick={() => toggleFacet(groupId, optId)}
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer group"
                >
                  <span>{group?.title ?? 'Option'}: {optLabel}</span>
                  <Icon icon={Cancel01Icon} size={12} />
                </button>
              {/each}
            {/each}

            {#each selectedBrands as brand}
              <button
                type="button"
                onclick={() => toggleBrand(brand)}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer group"
              >
                <span>{brand}</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/each}

            {#if isPriceFiltered}
              <button
                type="button"
                onclick={handleResetPrice}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer"
              >
                <span>Price: ৳{minPrice.toLocaleString()} – ৳{maxPrice.toLocaleString()}{maxPrice >= 10000 ? '+' : ''}</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/if}

            {#if inStockOnly}
              <button
                type="button"
                onclick={() => (inStockOnly = false)}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer"
              >
                <span>In Stock Only</span>
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/if}

            <button
              type="button"
              onclick={clearAllFilters}
              class="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-danger)] underline ml-1 cursor-pointer"
            >
              Reset All
            </button>
          </div>
        {/if}

        <!-- Product Grid or Empty State -->
        {#if displayedProducts.length > 0}
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
            {#each displayedProducts as product (product.id)}
              <ProductCard {product} />
            {/each}
          </div>
        {:else}
          <!-- Zero Results Empty State -->
          <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-lg)] p-8 sm:p-12 text-center shadow-xs">
            <div class="w-16 h-16 rounded-full bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] flex items-center justify-center mx-auto mb-4">
              <Icon icon={Search01Icon} size={32} />
            </div>

            <h2 class="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-2">
              No products found {decodedQuery ? `for "${decodedQuery}"` : ''}
            </h2>
            <p class="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-md mx-auto mb-6">
              {#if activeFilterCount > 0}
                None of the products satisfy your active filters. Try resetting or loosening your filter criteria.
              {:else}
                We couldn't find any products matching your query. Check your spelling or try searching with different keywords.
              {/if}
            </p>

            {#if activeFilterCount > 0}
              <button
                type="button"
                onclick={clearAllFilters}
                class="px-5 py-2.5 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] text-white text-xs font-bold hover:bg-[var(--color-brand-primary-hover)] transition-colors mb-8 cursor-pointer"
              >
                Clear All Filters
              </button>
            {/if}

            <!-- Suggested Searches -->
            <div class="border-t border-[var(--color-border-default)] pt-6 max-w-xl mx-auto">
              <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-disabled)] block mb-3">
                Popular Searches
              </span>
              <div class="flex flex-wrap justify-center gap-2">
                {#each SUGGESTED_TAGS as tag}
                  <button
                    type="button"
                    onclick={() => handleQuickSearch(tag)}
                    class="px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-bg-subtle)] hover:bg-[var(--color-brand-primary-subtle)] text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] border border-[var(--color-border-default)] transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                {/each}
              </div>
            </div>

            <!-- Fallback Recommendations Rail -->
            {#if fallbackRecommendations.length > 0}
              <div class="border-t border-[var(--color-border-default)] pt-8 mt-8 text-left">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-black uppercase tracking-wider text-[var(--color-text-primary)]">
                      Popular Genuine Accessories
                    </span>
                  </div>
                  <a href="/" class="text-xs font-bold text-[var(--color-brand-primary)] hover:underline flex items-center gap-1">
                    <span>View full store</span>
                    <Icon icon={ArrowRight01Icon} size={14} />
                  </a>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                  {#each fallbackRecommendations as product (product.id)}
                    <ProductCard {product} />
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Mobile Filter Drawer Modal -->
<SearchMobileFilterDrawer
  open={isMobileFilterOpen}
  {availableBrands}
  {selectedCategories}
  {selectedBrands}
  {minPrice}
  {maxPrice}
  {inStockOnly}
  {selectedPhoneBrand}
  {selectedPhoneModel}
  {magsafeOnly}
  {onSaleOnly}
  {selectedFacets}
  onToggleCategory={toggleCategory}
  onToggleBrand={toggleBrand}
  onPriceChange={handlePriceChange}
  onResetPrice={handleResetPrice}
  onToggleInStock={() => (inStockOnly = !inStockOnly)}
  onSelectPhoneBrand={handleSelectPhoneBrand}
  onSelectPhoneModel={handleSelectPhoneModel}
  onToggleMagSafe={() => (magsafeOnly = !magsafeOnly)}
  onToggleOnSale={() => (onSaleOnly = !onSaleOnly)}
  onToggleFacet={toggleFacet}
  onClearCategoryFacets={clearCategoryFacets}
  onClearAll={clearAllFilters}
  onClose={() => (isMobileFilterOpen = false)}
  matchingCount={displayedProducts.length}
  {activeFilterCount}
/>
