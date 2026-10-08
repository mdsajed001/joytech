<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { CATEGORIES, PRODUCTS } from '$lib/data/catalog';
  import { cartState, searchState, autoWizardState } from '$lib/state.svelte';
  import Icon from './Icon.svelte';
  import {
    Menu01Icon,
    Search01Icon,
    ShoppingBag01Icon,
    FavouriteIcon,
    UserIcon,
    PercentCircleIcon,
    ArrowLeft01Icon,
    Cancel01Icon,
    ArrowRight01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    cartCount?: number;
    searchQuery?: string;
    hideMobileSearch?: boolean;
    onToggleMobileMenu?: () => void;
    onSearch?: (query: string) => void;
  }

  let {
    cartCount = 0,
    searchQuery = $bindable(''),
    hideMobileSearch: customHideMobileSearch,
    onToggleMobileMenu,
    onSearch
  }: Props = $props();

  let isProductPage = $derived($page?.url?.pathname?.startsWith('/product/') ?? false);
  let isCartOrProfile = $derived(
    Boolean(
      $page?.url?.pathname?.startsWith('/cart') ||
      $page?.url?.pathname?.startsWith('/profile') ||
      $page?.url?.pathname?.startsWith('/shop-by-phone')
    )
  );
  let shouldHideMobileSearch = $derived(customHideMobileSearch ?? isCartOrProfile);
  let isCartAnimating = $state(false);
  let isBadgePopping = $state(false);

  // Search Interaction States
  let isMobileSearchOpen = $derived(searchState.isMobileOpen);
  let isDesktopFocused = $state(false);
  let mobileInputEl: HTMLInputElement | null = $state(null);
  let desktopFormRef: HTMLFormElement | null = $state(null);

  $effect(() => {
    if (searchState.isMobileOpen) {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
      requestAnimationFrame(() => {
        mobileInputEl?.focus();
      });
    } else {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
      mobileInputEl?.blur();
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });

  const POPULAR_SEARCH_TAGS = [
    'iPhone 16 Pro Max',
    'Anker 30W',
    'MagSafe Case',
    'Fast Charger',
    'Spigen',
    'AirPods',
    'Power Bank',
    'Samsung S24'
  ];

  let filteredProducts = $derived.by(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.categoryId.toLowerCase().includes(q) ||
      p.features?.some((f) => f.toLowerCase().includes(q))
    ).slice(0, 8);
  });

  let desktopFilteredProducts = $derived.by(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.categoryId.toLowerCase().includes(q)
    ).slice(0, 5);
  });

  $effect(() => {
    const ts = cartState.lastAddedTimestamp;
    if (ts > 0) {
      isCartAnimating = false;
      isBadgePopping = false;
      requestAnimationFrame(() => {
        isCartAnimating = true;
        isBadgePopping = true;
      });
      const timer = setTimeout(() => {
        isCartAnimating = false;
        isBadgePopping = false;
      }, 550);
      return () => clearTimeout(timer);
    }
  });

  $effect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });

  $effect(() => {
    if ($page?.url?.pathname === '/search') {
      const q = $page.url.searchParams.get('q');
      if (q !== null && q !== searchQuery) {
        searchQuery = q;
      }
    }
  });

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const q = searchQuery.trim();
    if (isMobileSearchOpen) {
      closeMobileSearch();
    }
    isDesktopFocused = false;
    if (q) {
      goto(`/search?q=${encodeURIComponent(q)}`);
      onSearch?.(q);
    }
  }

  function openMobileSearch() {
    searchState.openMobile();
  }

  function closeMobileSearch() {
    searchState.closeMobile();
  }

  function selectProduct(slug: string) {
    closeMobileSearch();
    isDesktopFocused = false;
    goto(`/product/${slug}`);
  }

  function handleTagClick(tag: string) {
    searchQuery = tag;
    if (isMobileSearchOpen) {
      closeMobileSearch();
    }
    isDesktopFocused = false;
    goto(`/search?q=${encodeURIComponent(tag)}`);
    onSearch?.(tag);
  }

  function handleDesktopBlur(e: FocusEvent) {
    if (desktopFormRef && e.relatedTarget && desktopFormRef.contains(e.relatedTarget as Node)) {
      return;
    }
    setTimeout(() => {
      isDesktopFocused = false;
    }, 200);
  }
</script>

<header class="{isMobileSearchOpen ? 'fixed inset-0 z-50 bg-[var(--color-bg-surface)] flex flex-col md:sticky md:top-0 md:inset-auto md:block md:bg-[var(--color-bg-surface)]/95 md:backdrop-blur-md' : 'sticky top-0 z-50 bg-[var(--color-bg-surface)]/95 backdrop-blur-md'} transition-colors duration-300 border-b border-[var(--color-border-default)] shadow-xs">
  <!-- Main Header Bar (Row 1) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 sm:gap-6 w-full shrink-0">
    <!-- Left: Logo -->
    <div class="flex items-center gap-3">
      <a href="/" class="flex items-center gap-2.5 group select-none">
        <img
          src="/Joy%20tech.svg"
          alt="Joy Telecom"
          class="w-9 h-9 object-contain group-hover:scale-105 transition-transform shrink-0"
        />
        <div class="flex flex-col">
          <span class="text-lg sm:text-xl font-black tracking-tight text-[var(--color-text-primary)] leading-none">
            Joy <span class="text-[var(--color-brand-primary)]">Telecom</span>
          </span>
          <span class="text-[10px] font-bold tracking-widest uppercase text-[var(--color-text-disabled)] mt-0.5">
            Genuine Accessories
          </span>
        </div>
      </a>
    </div>

    <!-- Center: Search Input (Desktop & Tablet) -->
    <form
      bind:this={desktopFormRef}
      onsubmit={handleSubmit}
      class="hidden md:flex flex-1 max-w-xl relative"
      onfocusin={() => isDesktopFocused = true}
      onfocusout={handleDesktopBlur}
    >
      <div class="relative flex items-center w-full h-11 bg-[var(--color-bg-subtle)] border border-[var(--color-border-strong)] rounded-full overflow-hidden focus-within:border-[var(--color-brand-primary)] focus-within:bg-[var(--color-bg-surface)] transition-all shadow-inner">
        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-disabled)] pointer-events-none">
          <Icon icon={Search01Icon} size={18} />
        </span>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search"
          class="flex-1 h-full pl-11 pr-3 bg-transparent text-sm font-medium placeholder:text-[var(--color-text-disabled)] text-[var(--color-text-primary)] outline-none border-none"
        />
        {#if searchQuery.length > 0}
          <button
            type="button"
            onclick={() => searchQuery = ''}
            class="p-1.5 mr-1 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <Icon icon={Cancel01Icon} size={16} />
          </button>
        {/if}
        <button
          type="submit"
          class="h-full px-5 sm:px-6 cta-search-animated text-white text-xs font-bold transition-colors flex items-center justify-center shrink-0 cursor-pointer"
        >
          <span class="relative z-10">Search</span>
        </button>
      </div>

      <!-- Desktop Autocomplete Suggestions Dropdown -->
      {#if isDesktopFocused && searchQuery.trim().length > 0}
        <div class="absolute top-full left-0 right-0 mt-2 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] shadow-2xl z-50 overflow-hidden backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
          <div class="px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] flex items-center justify-between">
            <span>Product Suggestions</span>
            <span>{desktopFilteredProducts.length} results</span>
          </div>

          {#if desktopFilteredProducts.length === 0}
            <div class="p-6 text-center text-xs font-medium text-[var(--color-text-tertiary)]">
              No matching products for "<span class="font-bold text-[var(--color-text-primary)]">{searchQuery}</span>"
            </div>
          {:else}
            <div class="divide-y divide-[var(--color-border-subtle)]">
              {#each desktopFilteredProducts as product (product.id)}
                <a
                  href="/product/{product.slug}"
                  onclick={(e) => {
                    e.preventDefault();
                    selectProduct(product.slug);
                  }}
                  class="flex items-center gap-3 p-3 hover:bg-[var(--color-bg-subtle)] transition-colors group cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    class="w-11 h-11 object-cover rounded-[var(--radius-xs)] border border-[var(--color-border-subtle)] bg-white shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5">
                      <span class="text-[10px] font-bold text-[var(--color-brand-primary)] uppercase tracking-wider">
                        {product.brand}
                      </span>
                    </div>
                    <div class="text-xs font-bold text-[var(--color-text-primary)] truncate group-hover:text-[var(--color-brand-primary)] transition-colors">
                      {product.name}
                    </div>
                  </div>
                  <div class="text-right shrink-0">
                    <div class="text-xs font-bold text-[var(--color-text-primary)]">
                      ৳{product.price.toLocaleString('en-BD')}
                    </div>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <div class="text-[10px] text-[var(--color-text-disabled)] line-through">
                        ৳{product.originalPrice.toLocaleString('en-BD')}
                      </div>
                    {/if}
                  </div>
                </a>
              {/each}
            </div>

            <button
              type="submit"
              class="w-full py-2.5 px-4 text-center text-xs font-bold text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View all matching products</span>
              <Icon icon={ArrowRight01Icon} size={14} />
            </button>
          {/if}
        </div>
      {/if}
    </form>

    <!-- Right: Account/Wishlist + Cart + Mobile Menu Trigger -->
    <div class="flex items-center gap-1 sm:gap-2">
      <!-- Offers page slot -->
      <a
        href="/offers"
        title="Special Offers & Deals"
        class="btn-nod hidden sm:flex p-2.5 rounded-full tap-target items-center justify-center transition-colors cursor-pointer {$page?.url?.pathname?.startsWith('/offers')
          ? 'text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)]'
          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)]'}"
        aria-label="Special Offers & Deals"
      >
        <span class="btn-nod-icon flex items-center justify-center">
          <Icon icon={PercentCircleIcon} size={20} />
        </span>
      </a>

      <!-- Wishlist slot -->
      <a
        href="/profile"
        title="Wishlist & Saved Items"
        class="btn-nod hidden sm:flex p-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] rounded-full tap-target items-center justify-center transition-colors cursor-pointer"
        aria-label="Wishlist"
      >
        <span class="btn-nod-icon flex items-center justify-center">
          <Icon icon={FavouriteIcon} size={20} />
        </span>
      </a>

      <!-- Account profile slot -->
      <a
        href="/profile"
        title="Customer Profile & Orders"
        class="btn-nod hidden sm:flex p-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] rounded-full tap-target items-center justify-center transition-colors cursor-pointer"
        aria-label="Account profile"
      >
        <span class="btn-nod-icon flex items-center justify-center">
          <Icon icon={UserIcon} size={20} />
        </span>
      </a>

      <!-- Desktop Cart Button -->
      <a
        href="/cart"
        class="btn-nod relative hidden sm:flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 bg-[var(--color-brand-primary-subtle)] hover:bg-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:text-white rounded-full transition-all duration-150 tap-target select-none cursor-pointer"
        aria-label="Cart with {cartCount} items"
      >
        <span class="btn-nod-icon flex items-center justify-center {isCartAnimating ? 'nod-lift-active' : ''}">
          <Icon icon={ShoppingBag01Icon} size={20} />
        </span>
        <span class="hidden sm:inline font-bold text-xs">Cart</span>
        {#if cartCount > 0}
          <span class="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-black rounded-full bg-[var(--color-accent)] text-white shadow-xs {isBadgePopping ? 'badge-pop-active' : ''}">
            {cartCount}
          </span>
        {:else}
          <span class="inline-flex items-center justify-center w-5 h-5 text-[11px] font-black rounded-full bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)]">
            0
          </span>
        {/if}
      </a>

      {#if isProductPage && !isMobileSearchOpen}
        <!-- Mobile Cart Button (Visible on < sm on product details page) -->
        <a
          href="/cart"
          class="btn-nod sm:hidden p-2 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] rounded-[var(--radius-sm)] tap-target relative flex items-center justify-center transition-colors cursor-pointer select-none"
          aria-label="Cart with {cartCount} items"
        >
          <span class="btn-nod-icon flex items-center justify-center {isCartAnimating ? 'nod-lift-active' : ''}">
            <Icon icon={ShoppingBag01Icon} size={22} />
          </span>
          {#if cartCount > 0}
            <span
              class="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-[var(--color-accent)] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-xs leading-none pointer-events-none {isBadgePopping ? 'badge-pop-active' : ''}"
            >
              {cartCount}
            </span>
          {/if}
        </a>
      {/if}

      <!-- Mobile Menu Trigger (Right side on mobile/tablet) -->
      {#if !isMobileSearchOpen}
        <button
          type="button"
          onclick={onToggleMobileMenu}
          class="lg:hidden p-2 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] rounded-[var(--radius-sm)] tap-target flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Open mobile navigation"
        >
          <Icon icon={Menu01Icon} size={24} />
        </button>
      {/if}
    </div>
  </div>

  <!-- Mobile Search Row (< md viewports, Row 2: EXACT SAME VERTICAL POSITION, ZERO JUMP) -->
  {#if !shouldHideMobileSearch}
    <div class="md:hidden px-4 pb-3 shrink-0">
      <form onsubmit={handleSubmit} class="w-full flex items-center gap-2">
        {#if isMobileSearchOpen}
          <!-- Back button on the LEFT of the search input in Row 2 -->
          <button
            type="button"
            onclick={closeMobileSearch}
            aria-label="Back to page"
            class="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-default)] active:scale-95 text-[var(--color-text-primary)] border border-[var(--color-border-strong)] transition-all cursor-pointer shrink-0"
          >
            <Icon icon={ArrowLeft01Icon} size={20} />
          </button>
        {/if}

        <!-- Input container: Seamless body background in expanded state, subtle pill in collapsed state -->
        <div
          class="relative flex-1 flex items-center h-11 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] no-focus-ring {isMobileSearchOpen ? 'bg-transparent border-none rounded-[var(--radius-sm)] shadow-none' : 'bg-[var(--color-bg-subtle)] border border-[var(--color-border-strong)] rounded-full shadow-inner'}"
          style="outline: none !important; outline-offset: 0 !important; box-shadow: none !important; {isMobileSearchOpen ? 'background-color: transparent !important; border: none !important;' : ''}"
        >
          
          {#if !isMobileSearchOpen}
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-disabled)] pointer-events-none transition-opacity duration-200">
              <Icon icon={Search01Icon} size={18} />
            </span>
          {/if}

          <!-- Centered text on open, Left on collapsed -->
          <input
            bind:this={mobileInputEl}
            type="text"
            bind:value={searchQuery}
            onfocus={openMobileSearch}
            placeholder="Search"
            class="flex-1 h-full bg-transparent text-sm font-semibold placeholder:text-[var(--color-text-disabled)] text-[var(--color-text-primary)] no-focus-ring outline-none border-none ring-0 transition-all duration-300 {isMobileSearchOpen ? 'text-center placeholder:text-center px-3' : 'pl-11 pr-3 text-left placeholder:text-left'}"
            style="outline: none !important; outline-offset: 0 !important; box-shadow: none !important; border: none !important; background-color: transparent !important; -webkit-tap-highlight-color: transparent !important;"
          />

          {#if isMobileSearchOpen && searchQuery.length > 0}
            <button
              type="button"
              onclick={() => { searchQuery = ''; mobileInputEl?.focus(); }}
              class="p-1.5 mr-1 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer shrink-0"
              aria-label="Clear search"
            >
              <Icon icon={Cancel01Icon} size={16} />
            </button>
          {/if}

          <!-- Search CTA Button: Icon only in expanded state, text in collapsed state -->
          <button
            type="submit"
            aria-label="Search"
            class="h-full cta-search-animated text-white text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center shrink-0 cursor-pointer {isMobileSearchOpen ? 'w-11 px-0 rounded-[var(--radius-sm)]' : 'px-4 sm:px-5 rounded-r-full'}"
          >
            {#if isMobileSearchOpen}
              <Icon icon={Search01Icon} size={18} />
            {:else}
              <span class="relative z-10">Search</span>
            {/if}
          </button>
        </div>
      </form>
    </div>
  {/if}

  <!-- Secondary Category Navigation Bar (Desktop) -->
  <nav class="hidden lg:block border-t border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold py-2">
      <div class="flex items-center gap-6 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onclick={() => (autoWizardState.isDrawerOpen = true)}
          class="flex items-center gap-1.5 font-bold text-[var(--color-accent)] hover:text-[var(--color-brand-primary)] py-1 select-none cursor-pointer active:scale-95 transition-all text-xs"
          title="Open Shop by Phone drawer"
        >
          <span>★</span>
          <span>Shop by Phone</span>
        </button>
        <span class="w-px h-3.5 bg-[var(--color-border-strong)]"></span>
        {#each CATEGORIES as cat}
          <a
            href="/search?category={cat.id}"
            class="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] py-1 transition-colors whitespace-nowrap"
          >
            {cat.name}
          </a>
        {/each}
      </div>

      <div class="text-[var(--color-text-secondary)] font-medium text-[11.5px]">
        Dhaka Delivery: <span class="text-[var(--color-success-text)] font-bold">24-48 Hours</span>
      </div>
    </div>
  </nav>

  <!-- ========================================================================= -->
  <!-- MOBILE SEARCH LOWER RESULTS CANVAS (Flex-1 child, impossible to overlap) -->
  <!-- ========================================================================= -->
  {#if isMobileSearchOpen}
    <div 
      class="md:hidden flex-1 min-h-0 bg-[var(--color-bg-surface)] flex flex-col border-t border-[var(--color-border-subtle)] overflow-hidden animate-in fade-in duration-200"
    >
      <div class="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        <!-- 1. EMPTY QUERY STATE: Popular Searches Tags -->
        {#if !searchQuery.trim()}
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Popular Searches
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each POPULAR_SEARCH_TAGS as tag}
                <button
                  type="button"
                  onclick={() => handleTagClick(tag)}
                  class="px-3.5 py-2 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] hover:bg-[var(--color-brand-primary-subtle)] hover:text-[var(--color-brand-primary)] text-xs font-semibold text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] shadow-2xs active:scale-95 transition-all cursor-pointer"
                >
                  {tag}
                </button>
              {/each}
            </div>
          </div>
        {:else}
          <!-- 2. ACTIVE QUERY STATE: Live Product Matches -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Matching Accessories ({filteredProducts.length})
              </h3>
            </div>

            {#if filteredProducts.length === 0}
              <div class="py-12 text-center space-y-2">
                <div class="text-3xl">🔍</div>
                <div class="text-sm font-bold text-[var(--color-text-primary)]">
                  No accessories found for "{searchQuery}"
                </div>
                <p class="text-xs text-[var(--color-text-tertiary)] max-w-xs mx-auto">
                  Try checking for typos or searching with brand names like "Spigen" or "Anker".
                </p>
              </div>
            {:else}
              <div class="space-y-2.5">
                {#each filteredProducts as product (product.id)}
                  <a
                    href="/product/{product.slug}"
                    onclick={(e) => {
                      e.preventDefault();
                      selectProduct(product.slug);
                    }}
                    class="flex items-center gap-3.5 p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-primary)] active:scale-[0.99] transition-all cursor-pointer group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      class="w-14 h-14 object-cover rounded-[var(--radius-xs)] border border-[var(--color-border-subtle)] bg-white shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div class="flex-1 min-w-0">
                      <span class="text-[10px] font-black text-[var(--color-brand-primary)] uppercase tracking-wider block">
                        {product.brand}
                      </span>
                      <h4 class="text-xs font-bold text-[var(--color-text-primary)] line-clamp-1 group-hover:text-[var(--color-brand-primary)] transition-colors">
                        {product.name}
                      </h4>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="text-xs font-black text-[var(--color-text-primary)]">
                          ৳{product.price.toLocaleString('en-BD')}
                        </span>
                        {#if product.originalPrice && product.originalPrice > product.price}
                          <span class="text-[10px] text-[var(--color-text-disabled)] line-through">
                            ৳{product.originalPrice.toLocaleString('en-BD')}
                          </span>
                        {/if}
                      </div>
                    </div>
                    <Icon icon={ArrowRight01Icon} size={16} class="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-brand-primary)] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</header>
