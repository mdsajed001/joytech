<script lang="ts">
  import { autoWizardState } from '$lib/state.svelte';
  import { CATEGORIES, PHONE_BRANDS, PHONE_MODELS } from '$lib/data/catalog';
  import { CATEGORY_FACETS } from '$lib/data/facets';
  import Icon from '$lib/components/Icon.svelte';
  import SearchableSelect, { type SelectOption } from '$lib/components/ui/SearchableSelect.svelte';
  import PriceRangeFilter from '$lib/components/search/PriceRangeFilter.svelte';
  import {
    Cancel01Icon,
    FilterIcon,
    Tick01Icon,
    SmartPhone01Icon,
    FlashIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    open: boolean;
    availableBrands: string[];
    selectedCategories: string[];
    selectedBrands: string[];
    minPrice?: number;
    maxPrice?: number;
    inStockOnly: boolean;
    selectedPhoneBrand: string;
    selectedPhoneModel: string;
    magsafeOnly: boolean;
    onSaleOnly: boolean;
    selectedFacets?: Record<string, string[]>;
    onToggleCategory: (catId: string) => void;
    onToggleBrand: (brand: string) => void;
    onPriceChange: (min: number, max: number) => void;
    onResetPrice?: () => void;
    onToggleInStock: () => void;
    onSelectPhoneBrand: (brandId: string) => void;
    onSelectPhoneModel: (modelSlug: string) => void;
    onToggleMagSafe: () => void;
    onToggleOnSale: () => void;
    onToggleFacet?: (facetGroupId: string, optionId: string) => void;
    onClearCategoryFacets?: () => void;
    onClearAll: () => void;
    onClose: () => void;
    matchingCount: number;
    activeFilterCount: number;
  }

  let {
    open,
    availableBrands,
    selectedCategories,
    selectedBrands,
    minPrice = 0,
    maxPrice = 10000,
    inStockOnly,
    selectedPhoneBrand,
    selectedPhoneModel,
    magsafeOnly,
    onSaleOnly,
    selectedFacets = {},
    onToggleCategory,
    onToggleBrand,
    onPriceChange,
    onResetPrice,
    onToggleInStock,
    onSelectPhoneBrand,
    onSelectPhoneModel,
    onToggleMagSafe,
    onToggleOnSale,
    onToggleFacet,
    onClearCategoryFacets,
    onClearAll,
    onClose,
    matchingCount,
    activeFilterCount
  }: Props = $props();

  let filteredModels = $derived.by(() => {
    if (!selectedPhoneBrand) {
      return PHONE_MODELS;
    }
    return PHONE_MODELS.filter((m) => m.brandId === selectedPhoneBrand);
  });

  let brandOptions = $derived<SelectOption[]>([
    { value: '', label: 'All Brands' },
    ...PHONE_BRANDS.map((b) => ({ value: b.id, label: b.name }))
  ]);

  let modelOptions = $derived<SelectOption[]>([
    { value: '', label: 'All Compatible Models' },
    ...filteredModels.map((m) => {
      const brand = PHONE_BRANDS.find((b) => b.id === m.brandId);
      return {
        value: m.slug,
        label: m.name,
        sublabel: brand ? brand.name : undefined
      };
    })
  ]);

  let activeCategory = $derived(selectedCategories.length === 1 ? selectedCategories[0] : null);
  let activeCategoryName = $derived(
    activeCategory ? CATEGORIES.find((c) => c.id === activeCategory)?.name : ''
  );
  let activeCategoryFacetGroups = $derived(
    activeCategory ? CATEGORY_FACETS[activeCategory] ?? [] : []
  );
  let hasActiveCategoryFacets = $derived(
    activeCategoryFacetGroups.some((g) => (selectedFacets[g.id]?.length ?? 0) > 0)
  );

  $effect(() => {
    if (typeof document !== 'undefined') {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });
</script>

{#if open}
  <div class="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      onclick={onClose}
      aria-hidden="true"
    ></div>

    <!-- Slide-up Modal Panel -->
    <div
      class="relative w-full max-h-[88vh] bg-[var(--color-bg-surface)] rounded-t-2xl shadow-xl flex flex-col z-10 animate-in slide-in-from-bottom duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Filter products"
    >
      <!-- Grab Handle -->
      <div class="w-12 h-1.5 bg-[var(--color-border-strong)] rounded-full mx-auto mt-3 mb-1 shrink-0"></div>

      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border-default)] shrink-0">
        <div class="flex items-center gap-2">
          <Icon icon={FilterIcon} size={20} class="text-[var(--color-brand-primary)]" />
          <h2 class="font-bold text-base text-[var(--color-text-primary)]">Filters</h2>
          {#if activeFilterCount > 0}
            <span class="px-2 py-0.5 text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] rounded-full">
              {activeFilterCount}
            </span>
          {/if}
        </div>
        <div class="flex items-center gap-3">
          {#if activeFilterCount > 0}
            <button
              type="button"
              onclick={onClearAll}
              class="text-xs font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
            >
              Reset
            </button>
          {/if}
          <button
            type="button"
            onclick={onClose}
            class="p-2 rounded-full hover:bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            <Icon icon={Cancel01Icon} size={20} />
          </button>
        </div>
      </div>

      <!-- Body Content (Scrollable) -->
      <div class="flex-1 overflow-y-auto p-5 space-y-6 overscroll-contain">
        <!-- 1. Price Range -->
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold tracking-wider uppercase text-[var(--color-text-secondary)]">Price Range</h3>
            {#if minPrice > 0 || maxPrice < 10000}
              <button
                type="button"
                onclick={onResetPrice}
                class="text-xs font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
              >
                Reset
              </button>
            {/if}
          </div>
          <PriceRangeFilter
            {minPrice}
            {maxPrice}
            {onPriceChange}
            onReset={onResetPrice}
          />
        </div>

        <!-- 2. Device Compatibility -->
        <div class="space-y-3 bg-[var(--color-bg-subtle)] p-3.5 rounded-[var(--radius-md)]">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold tracking-wider uppercase text-[var(--color-text-secondary)] flex items-center gap-1.5">
              <Icon icon={SmartPhone01Icon} size={15} class="text-[var(--color-brand-primary)]" />
              <span>Device Compatibility</span>
            </h3>
            {#if selectedPhoneModel || selectedPhoneBrand}
              <button
                type="button"
                onclick={() => { onSelectPhoneBrand(''); onSelectPhoneModel(''); }}
                class="text-xs font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
              >
                Reset Device
              </button>
            {/if}
          </div>

          {#if selectedPhoneModel || selectedPhoneBrand}
            <!-- Active Device Chip -->
            <div class="flex items-center justify-between p-2.5 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)]">
              <div class="flex flex-col min-w-0">
                <span class="text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Active Device</span>
                <span class="text-xs font-semibold text-[var(--color-text-primary)] truncate">
                  {modelOptions.find(m => m.value === selectedPhoneModel)?.label || brandOptions.find(b => b.value === selectedPhoneBrand)?.label || 'Device Selected'}
                </span>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onclick={() => (autoWizardState.isDrawerOpen = true)}
                  class="text-xs font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
                >
                  Change
                </button>
                <div class="w-px h-3 bg-[var(--color-border-default)]"></div>
                <button
                  type="button"
                  onclick={() => { onSelectPhoneBrand(''); onSelectPhoneModel(''); }}
                  class="text-[var(--color-text-secondary)] hover:text-[var(--color-danger)] transition-colors cursor-pointer tap-target"
                  title="Clear Device"
                >
                  <Icon icon={Cancel01Icon} size={14} />
                </button>
              </div>
            </div>
          {:else}
            <!-- Shop by Phone CTA -->
            <button
              type="button"
              onclick={() => (autoWizardState.isDrawerOpen = true)}
              class="w-full relative overflow-hidden group flex flex-col p-3.5 rounded-[var(--radius-md)] bg-gradient-to-br from-blue-500/10 to-indigo-500/5 hover:from-blue-500/15 hover:to-indigo-500/10 border border-blue-500/20 shadow-sm transition-all text-left cursor-pointer tap-target"
            >
              <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>

              <div class="flex items-center gap-2 mb-1.5 relative z-10">
                <div class="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-[var(--color-brand-primary)] shrink-0">
                  <Icon icon={SmartPhone01Icon} size={14} />
                </div>
                <span class="text-sm font-bold text-[var(--color-text-primary)]">Shop by Phone</span>
              </div>

              <p class="text-[11px] font-medium text-[var(--color-text-secondary)] leading-snug mb-3 relative z-10">
                Find accessories guaranteed to fit your exact model.
              </p>

              <div class="mt-auto flex items-center gap-1 text-[11px] font-bold text-[var(--color-brand-primary)] group-hover:gap-1.5 transition-all relative z-10">
                <span>Select Device</span>
                <span class="text-[14px] leading-none mb-0.5">→</span>
              </div>
            </button>
          {/if}
        </div>

        <!-- 1.5 Dedicated Category Specifics Filter -->
        {#if activeCategoryFacetGroups.length > 0}
          <div class="space-y-4 bg-[var(--color-bg-subtle)] p-3.5 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]">
            <div class="flex items-center justify-between">
              <h3 class="text-xs font-bold tracking-wider uppercase text-[var(--color-brand-primary)] flex items-center gap-1.5">
                <Icon icon={FilterIcon} size={15} />
                <span>{activeCategoryName} Options</span>
              </h3>
              {#if hasActiveCategoryFacets && onClearCategoryFacets}
                <button
                  type="button"
                  onclick={onClearCategoryFacets}
                  class="text-xs font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
                >
                  Reset
                </button>
              {/if}
            </div>

            {#each activeCategoryFacetGroups as group (group.id)}
              <div class="space-y-2">
                <span class="text-xs font-semibold text-[var(--color-text-secondary)] block">
                  {group.title}
                </span>
                <div class="flex flex-wrap gap-1.5">
                  {#each group.options as opt (opt.id)}
                    {@const isSelected = selectedFacets[group.id]?.includes(opt.id)}
                    <button
                      type="button"
                      onclick={() => onToggleFacet?.(group.id, opt.id)}
                      class="px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 select-none tap-target {isSelected ? 'bg-[var(--color-brand-primary)] text-white shadow-xs' : 'bg-[var(--color-bg-surface)] hover:bg-[var(--color-border-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border-default)]'}"
                    >
                      <span>{opt.label}</span>
                      {#if opt.badge && !isSelected}
                        <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-[var(--color-border-subtle)] text-[var(--color-text-tertiary)] font-normal">{opt.badge}</span>
                      {/if}
                    </button>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/if}

        <!-- 2. Special Features & Stock -->
        <div class="space-y-2.5">
          <h3 class="text-xs font-bold tracking-wider uppercase text-[var(--color-text-secondary)]">Special Features</h3>
          
          <!-- MagSafe -->
          <label class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] cursor-pointer select-none">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span class="text-sm font-semibold text-[var(--color-text-primary)]">MagSafe / Magnetic</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={magsafeOnly}
              aria-label="Toggle MagSafe accessories only"
              onclick={onToggleMagSafe}
              class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out {magsafeOnly ? 'bg-[var(--color-brand-primary)]' : 'bg-[var(--color-border-strong)]'}"
            >
              <span
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out {magsafeOnly ? 'translate-x-5' : 'translate-x-0'}"
              ></span>
            </button>
          </label>

          <!-- On Sale -->
          <label class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] cursor-pointer select-none">
            <div class="flex items-center gap-2">
              <Icon icon={FlashIcon} size={16} class="text-[var(--color-accent)]" />
              <span class="text-sm font-semibold text-[var(--color-text-primary)]">On Sale / Deals</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={onSaleOnly}
              aria-label="Toggle on sale items only"
              onclick={onToggleOnSale}
              class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out {onSaleOnly ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border-strong)]'}"
            >
              <span
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out {onSaleOnly ? 'translate-x-5' : 'translate-x-0'}"
              ></span>
            </button>
          </label>

          <!-- In Stock Only -->
          <label class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] cursor-pointer select-none">
            <span class="text-sm font-semibold text-[var(--color-text-primary)]">In Stock Only</span>
            <button
              type="button"
              role="switch"
              aria-checked={inStockOnly}
              aria-label="Toggle in stock only"
              onclick={onToggleInStock}
              class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out {inStockOnly ? 'bg-[var(--color-brand-primary)]' : 'bg-[var(--color-border-strong)]'}"
            >
              <span
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out {inStockOnly ? 'translate-x-5' : 'translate-x-0'}"
              ></span>
            </button>
          </label>
        </div>

        <!-- 3. Categories -->
        <div class="space-y-2.5">
          <h3 class="text-xs font-bold tracking-wider uppercase text-[var(--color-text-secondary)]">Categories</h3>
          <div class="grid grid-cols-1 gap-1.5">
            {#each CATEGORIES as cat (cat.id)}
              {@const isSelected = selectedCategories.includes(cat.id)}
              <label class="flex items-center gap-3 p-2.5 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer select-none {isSelected ? 'bg-[var(--color-brand-primary-subtle)]/40 font-bold' : ''}">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onchange={() => onToggleCategory(cat.id)}
                  class="rounded border-[var(--color-border-strong)] text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)] h-5 w-5 cursor-pointer"
                />
                <span class="text-sm font-medium text-[var(--color-text-primary)] flex-1">
                  {cat.name}
                </span>
              </label>
            {/each}
          </div>
        </div>

        <!-- 4. Brands -->
        {#if availableBrands.length > 0}
          <div class="space-y-2.5">
            <h3 class="text-xs font-bold tracking-wider uppercase text-[var(--color-text-secondary)]">Brands</h3>
            <div class="grid grid-cols-2 gap-1.5">
              {#each availableBrands as brand (brand)}
                {@const isSelected = selectedBrands.includes(brand)}
                <label class="flex items-center gap-2.5 p-2 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer select-none {isSelected ? 'bg-[var(--color-brand-primary-subtle)]/40' : ''}">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onchange={() => onToggleBrand(brand)}
                    class="rounded border-[var(--color-border-strong)] text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)] h-4 w-4 cursor-pointer"
                  />
                  <span class="text-xs font-medium text-[var(--color-text-primary)] truncate">
                    {brand}
                  </span>
                </label>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <!-- Footer Action -->
      <div class="p-4 border-t border-[var(--color-border-default)] bg-[var(--color-bg-surface)] shrink-0">
        <button
          type="button"
          onclick={onClose}
          class="w-full py-3 px-4 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-bold text-sm shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Show Results ({matchingCount})</span>
        </button>
      </div>
    </div>
  </div>
{/if}
