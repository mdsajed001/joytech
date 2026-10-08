<script lang="ts">
  import type { Product, ProductVariant } from '$lib/types';
  import { PHONE_MODELS } from '$lib/data/catalog';
  import { i18nState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { Tick02Icon, AlertCircleIcon, SmartPhone01Icon, Layers01Icon } from '@hugeicons/core-free-icons';

  interface Props {
    product: Product;
    selectedModel: string;
    selectedVariant: ProductVariant | null;
    showValidationError?: boolean;
    onSelectModel: (modelSlug: string) => void;
    onSelectVariant: (variant: ProductVariant) => void;
  }

  let {
    product,
    selectedModel = $bindable(''),
    selectedVariant = $bindable(null),
    showValidationError = false,
    onSelectModel,
    onSelectVariant
  }: Props = $props();

  // Resolve compatible models into readable names
  let compatibleModelList = $derived(
    product.compatibleModels.map((slug) => {
      const found = PHONE_MODELS.find((m) => m.slug === slug);
      return {
        slug,
        name: found ? found.name : slug.replace(/-/g, ' ').toUpperCase()
      };
    })
  );

  let variantsList = $derived(product.variants || []);
  let hasOptions = $derived(compatibleModelList.length > 0 || variantsList.length > 0);
</script>

{#if hasOptions}
  <div class="space-y-4 -mx-4 px-4 py-4 sm:mx-0 sm:p-5 rounded-none sm:rounded-2xl bg-[var(--color-bg-surface)] border-y sm:border border-[var(--color-border-default)] shadow-xs transition-colors">
    <!-- 1. Compatible Phone Model Picker -->
  {#if compatibleModelList.length > 0}
    <div class="space-y-2">
      <div class="flex items-center justify-between text-xs">
        <label for="device-model-selector" class="flex items-center gap-1.5 font-bold text-[var(--color-text-primary)]">
          <Icon icon={SmartPhone01Icon} size={15} class="text-[var(--color-brand-primary)]" />
          <span>{i18nState.language === 'bn' ? 'ডিভাইস মডেল নির্বাচন করুন' : 'Select Phone Model'}</span>
          <span class="text-rose-500 font-bold">*</span>
        </label>
        {#if selectedModel}
          <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <Icon icon={Tick02Icon} size={12} strokeWidth={2.5} />
            <span>{compatibleModelList.find((m) => m.slug === selectedModel)?.name}</span>
          </span>
        {/if}
      </div>

      <div
        id="device-model-selector"
        class="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto sm:overflow-visible no-scrollbar touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1 rounded-[var(--radius-sm)] transition-all {showValidationError && !selectedModel
          ? 'ring-2 ring-rose-500 bg-rose-50/50 dark:bg-rose-950/20'
          : ''}"
      >
        {#each compatibleModelList as model}
          {@const isSelected = selectedModel === model.slug}
          <button
            type="button"
            onclick={() => {
              selectedModel = model.slug;
              onSelectModel(model.slug);
            }}
            class="px-3.5 py-2 rounded-[var(--radius-sm)] text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-[0.98] select-none {isSelected
              ? 'bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white shadow-xs'
              : 'bg-[var(--color-bg-subtle)] border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-slate-400 dark:hover:border-slate-500 hover:bg-[var(--color-bg-surface)]'}"
          >
            {#if isSelected}
              <Icon icon={Tick02Icon} size={13} strokeWidth={2.5} />
            {/if}
            <span>{model.name}</span>
          </button>
        {/each}
      </div>

      {#if showValidationError && !selectedModel}
        <p class="text-[11px] font-bold text-rose-500 flex items-center gap-1 animate-pulse">
          <Icon icon={AlertCircleIcon} size={13} />
          <span>{i18nState.language === 'bn' ? 'দয়া করে আপনার ফোন মডেল নির্বাচন করুন' : 'Please select your phone model to continue'}</span>
        </p>
      {/if}
    </div>
  {/if}

  <!-- 2. Unified Single-Thread Visual Variant Selector -->
  {#if variantsList.length > 0}
    <div class="space-y-2.5">
      <div class="flex items-center justify-between text-xs">
        <span class="flex items-center gap-1.5 font-bold text-[var(--color-text-primary)]">
          <Icon icon={Layers01Icon} size={15} class="text-[var(--color-brand-primary)]" />
          <span>{i18nState.language === 'bn' ? 'ভ্যারিয়েন্ট নির্বাচন করুন' : 'Select Option / Variant'}:</span>
          <span class="text-rose-500 font-bold">*</span>
        </span>
        {#if selectedVariant}
          <span class="text-[11px] font-black text-[var(--color-brand-primary)]">
            {i18nState.language === 'bn' && selectedVariant.titleBn ? selectedVariant.titleBn : selectedVariant.title}
          </span>
        {/if}
      </div>

      <!-- Dense Boxy Responsive Variant Cards Grid (2-cols) -->
      <div
        class="grid grid-cols-2 gap-2 p-1 rounded-[var(--radius-sm)] transition-all {showValidationError && !selectedVariant
          ? 'ring-2 ring-rose-500 bg-rose-50/50 dark:bg-rose-950/20'
          : ''}"
      >
        {#each variantsList as variant}
          {@const isSelected = selectedVariant?.id === variant.id}
          {@const isOutOfStock = !variant.inStock || variant.stockCount === 0}
          <button
            type="button"
            disabled={isOutOfStock}
            onclick={() => {
              selectedVariant = variant;
              onSelectVariant(variant);
            }}
            class="relative flex items-center gap-2 p-1.5 sm:p-2 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 select-none {isSelected
              ? 'border-[var(--color-brand-primary)] ring-1.5 ring-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary-subtle)] shadow-xs'
              : 'border-[var(--color-border-default)] hover:border-slate-400 dark:hover:border-slate-500 bg-[var(--color-bg-subtle)] hover:bg-[var(--color-bg-surface)]'}"
          >
            <!-- 32x32px Boxy Variant Thumbnail Image -->
            <div class="w-8 h-8 rounded-[var(--radius-xs)] overflow-hidden border border-[var(--color-border-subtle)] bg-white shrink-0 flex items-center justify-center">
              <img
                src={variant.image}
                alt={variant.title}
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Variant Label and Price -->
            <div class="flex-1 min-w-0 pr-0.5">
              <div class="text-[11px] font-bold text-[var(--color-text-primary)] truncate flex items-center gap-1 leading-tight">
                <span>{i18nState.language === 'bn' && variant.titleBn ? variant.titleBn : variant.title}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5 leading-none">
                <span class="text-[11px] font-black text-[var(--color-brand-primary)]">
                  ৳{variant.price.toLocaleString('en-BD')}
                </span>
                {#if isOutOfStock}
                  <span class="text-[9px] text-rose-500 font-bold shrink-0">
                    {i18nState.language === 'bn' ? 'স্টক শেষ' : 'Sold Out'}
                  </span>
                {/if}
              </div>
            </div>

            <!-- Selected Checkmark Indicator -->
            {#if isSelected}
              <div class="w-4 h-4 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Icon icon={Tick02Icon} size={10} strokeWidth={3} />
              </div>
            {/if}
          </button>
        {/each}
      </div>

      {#if showValidationError && !selectedVariant}
        <p class="text-[11px] font-bold text-rose-500 flex items-center gap-1 animate-pulse">
          <Icon icon={AlertCircleIcon} size={13} />
          <span>{i18nState.language === 'bn' ? 'দয়া করে একটি ভ্যারিয়েন্ট নির্বাচন করুন' : 'Please select a variant option to continue'}</span>
        </p>
      {/if}
    </div>
  {/if}
</div>
{/if}
