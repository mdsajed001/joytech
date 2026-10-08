<script lang="ts">
  import { PHONE_BRANDS, PHONE_MODELS, PRODUCTS } from '$lib/data/catalog';
  import type { Product } from '$lib/types';
  import ProductCard from './ProductCard.svelte';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import {
    SmartPhone01Icon,
    CheckmarkCircle01Icon,
    RefreshIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    selectedBrandId?: string;
    onAddToCart?: (product: Product) => void;
  }

  let { selectedBrandId = 'apple', onAddToCart }: Props = $props();

  let activeBrandId = $state<string>('apple');
  let activeModelSlug = $state<string>('iphone-16-pro-max');

  $effect(() => {
    if (selectedBrandId) {
      activeBrandId = selectedBrandId;
      const firstModel = PHONE_MODELS.find(m => m.brandId === selectedBrandId);
      if (firstModel) {
        activeModelSlug = firstModel.slug;
      }
    }
  });

  const availableModels = $derived(
    PHONE_MODELS.filter((m) => m.brandId === activeBrandId)
  );

  const selectedModel = $derived(
    PHONE_MODELS.find((m) => m.slug === activeModelSlug) || availableModels[0]
  );

  const compatibleProducts = $derived(
    PRODUCTS.filter((p) => selectedModel && p.compatibleModels.includes(selectedModel.slug))
  );

  function selectBrand(brandId: string) {
    activeBrandId = brandId;
    const firstModel = PHONE_MODELS.find((m) => m.brandId === brandId);
    if (firstModel) {
      activeModelSlug = firstModel.slug;
    }
  }

  function selectModel(modelSlug: string) {
    activeModelSlug = modelSlug;
  }

  function resetSelection() {
    activeBrandId = 'apple';
    activeModelSlug = 'iphone-16-pro-max';
  }
</script>

<section id="shop-by-phone" class="py-12 sm:py-16 bg-[var(--color-bg-canvas)] border-b border-[var(--color-border-default)]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
      <div>
        <div class="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[var(--color-accent)] mb-1">
          <Icon icon={SmartPhone01Icon} size={16} />
          <span>Flagship Feature (WEB-DEVICE)</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)]">
          Shop by Phone Model
        </h2>
        <p class="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1 max-w-xl">
          Zero guesswork. Select your exact phone model to see only guaranteed compatible protective cases, screen glass, and chargers.
        </p>
      </div>

      <button
        type="button"
        onclick={resetSelection}
        class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] cursor-pointer tap-target transition-colors self-start md:self-auto"
      >
        <Icon icon={RefreshIcon} size={14} />
        <span>Reset Device</span>
      </button>
    </div>

    <!-- Wizard Card -->
    <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-xl)] shadow-sm p-5 sm:p-7 mb-8">
      <!-- Step 1: Brand Selection -->
      <div class="mb-6">
        <div class="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-disabled)] mb-3">
          Step 1: Choose Your Phone Brand
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Phone Brand">
          {#each PHONE_BRANDS as brand}
            {@const isSelected = brand.id === activeBrandId}
            <button
              type="button"
              role="radio"
              aria-checked={isSelected}
              onclick={() => selectBrand(brand.id)}
              class="flex items-center justify-center gap-2 p-3 sm:p-4 rounded-[var(--radius-lg)] border-2 font-black text-sm sm:text-base cursor-pointer tap-target transition-all duration-150 {isSelected
                ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] shadow-xs'
                : 'border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'}"
            >
              <span>{brand.name}</span>
              {#if isSelected}
                <Icon icon={CheckmarkCircle01Icon} size={18} class="text-[var(--color-brand-primary)]" />
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Step 2: Model Pills -->
      <div>
        <div class="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-disabled)] mb-3">
          Step 2: Choose Exact Model ({availableModels.length} models available)
        </div>
        <div class="flex flex-wrap gap-2 sm:gap-2.5" role="radiogroup" aria-label="Phone Model">
          {#each availableModels as model}
            {@const isSelected = model.slug === activeModelSlug}
            <button
              type="button"
              role="radio"
              aria-checked={isSelected}
              onclick={() => selectModel(model.slug)}
              class="px-3.5 py-2 rounded-full text-xs font-bold border transition-all duration-150 cursor-pointer tap-target {isSelected
                ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-xs'
                : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]'}"
            >
              {model.name}
            </button>
          {/each}
        </div>
      </div>

      <!-- Active Confirmation Banner (BR-DEVICE-01) -->
      {#if selectedModel}
        <div class="mt-6 pt-5 border-t border-[var(--color-border-default)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[var(--color-success-bg)]/40 p-4 rounded-[var(--radius-lg)] border-[var(--color-success-border)]">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-[var(--color-success-text)] text-white flex items-center justify-center shrink-0">
              <Icon icon={CheckmarkCircle01Icon} size={20} />
            </div>
            <div>
              <div class="text-xs font-black text-[var(--color-success-text)] uppercase tracking-wide">
                100% Fit Confirmed
              </div>
              <div class="text-sm font-bold text-[var(--color-text-primary)]">
                Showing accessories verified for <span class="text-[var(--color-brand-primary)]">{selectedModel.name}</span>
              </div>
            </div>
          </div>

          <span class="text-xs font-bold text-[var(--color-text-secondary)] self-end sm:self-auto">
            {compatibleProducts.length} items found
          </span>
        </div>
      {/if}
    </div>

    <!-- Compatible Products Grid -->
    <div>
      {#if compatibleProducts.length > 0}
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {#each compatibleProducts as product}
            <ProductCard {product} {onAddToCart} />
          {/each}
        </div>
      {:else}
        <!-- Fallback if specific model has no items in mock DB -->
        <div class="text-center py-12 bg-white rounded-[var(--radius-xl)] border border-[var(--color-border-default)] p-6">
          <p class="text-sm font-bold text-[var(--color-text-primary)] mb-1">
            New accessories arriving soon for {selectedModel?.name}
          </p>
          <p class="text-xs text-[var(--color-text-secondary)] mb-4">
            Try selecting iPhone 16 Pro Max or Galaxy S24 Ultra to view our flagship inventory.
          </p>
          <Button
            size="sm"
            variant="outline"
            onclick={() => {
              activeBrandId = 'apple';
              activeModelSlug = 'iphone-16-pro-max';
            }}
          >
            Switch to iPhone 16 Pro Max
          </Button>
        </div>
      {/if}
    </div>
  </div>
</section>
