<script lang="ts">
  import type { Product } from '$lib/types';
  import { i18nState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    ArrowDown01Icon,
    File01Icon,
    Settings02Icon,
    PackageIcon,
    Tick02Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    product: Product;
  }

  let { product }: Props = $props();

  let openSection = $state<'desc' | 'specs' | 'box' | null>('desc');

  function toggle(section: 'desc' | 'specs' | 'box') {
    openSection = openSection === section ? null : section;
  }
</script>

<div class="rounded-[var(--radius-md)] sm:rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] divide-y divide-[var(--color-border-subtle)] overflow-hidden shadow-xs">
  <!-- 1. Description Accordion -->
  <div>
    <button
      type="button"
      onclick={() => toggle('desc')}
      class="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between text-left hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer"
      aria-expanded={openSection === 'desc'}
    >
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
          <Icon icon={File01Icon} size={15} />
        </div>
        <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'পণ্যের বিস্তারিত বিবরণ' : 'Product Description & Overview'}
        </span>
      </div>
      <div class="transition-transform duration-200 {openSection === 'desc' ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-text-muted)]'}">
        <Icon icon={ArrowDown01Icon} size={16} />
      </div>
    </button>

    {#if openSection === 'desc'}
      <div class="px-4 sm:px-5 pb-4 pt-1 text-xs text-[var(--color-text-secondary)] space-y-3 leading-relaxed animate-in fade-in duration-150">
        <p>
          {i18nState.language === 'bn' && product.descriptionBn ? product.descriptionBn : product.description}
        </p>

        {#if product.features && product.features.length > 0}
          <div class="pt-2">
            <h4 class="font-bold text-[var(--color-text-primary)] mb-2">
              {i18nState.language === 'bn' ? 'প্রধান বৈশিষ্ট্যসমূহ:' : 'Key Highlights:'}
            </h4>
            <ul class="space-y-1.5">
              {#each product.features as feature}
                <li class="flex items-center gap-2 text-[var(--color-text-primary)] font-medium">
                  <Icon icon={Tick02Icon} size={13} class="text-emerald-500 shrink-0" strokeWidth={2.5} />
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <!-- 2. Technical Specifications Table -->
  <div>
    <button
      type="button"
      onclick={() => toggle('specs')}
      class="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between text-left hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer"
      aria-expanded={openSection === 'specs'}
    >
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
          <Icon icon={Settings02Icon} size={15} />
        </div>
        <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'টেকনিক্যাল স্পেসিফিকেশন' : 'Technical Specifications'}
        </span>
      </div>
      <div class="transition-transform duration-200 {openSection === 'specs' ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-text-muted)]'}">
        <Icon icon={ArrowDown01Icon} size={16} />
      </div>
    </button>

    {#if openSection === 'specs'}
      <div class="px-4 sm:px-5 pb-4 pt-1 animate-in fade-in duration-150">
        {#if product.specs && product.specs.length > 0}
          <div class="rounded-xl border border-[var(--color-border-subtle)] divide-y divide-[var(--color-border-subtle)] overflow-hidden text-xs">
            {#each product.specs as spec}
              <div class="flex items-center justify-between p-2.5 bg-[var(--color-bg-subtle)]/40 hover:bg-[var(--color-bg-subtle)] transition-colors">
                <span class="font-bold text-[var(--color-text-muted)]">
                  {i18nState.language === 'bn' && spec.labelBn ? spec.labelBn : spec.label}
                </span>
                <span class="font-bold text-[var(--color-text-primary)] text-right">
                  {i18nState.language === 'bn' && spec.valueBn ? spec.valueBn : spec.value}
                </span>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <!-- 3. What's in the Box -->
  <div>
    <button
      type="button"
      onclick={() => toggle('box')}
      class="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between text-left hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer"
      aria-expanded={openSection === 'box'}
    >
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
          <Icon icon={PackageIcon} size={15} />
        </div>
        <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'বক্সে যা যা পাবেন' : "What's in the Box"}
        </span>
      </div>
      <div class="transition-transform duration-200 {openSection === 'box' ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-text-muted)]'}">
        <Icon icon={ArrowDown01Icon} size={16} />
      </div>
    </button>

    {#if openSection === 'box'}
      <div class="px-4 sm:px-5 pb-4 pt-1 animate-in fade-in duration-150">
        <ul class="space-y-2 text-xs text-[var(--color-text-secondary)]">
          {#each (i18nState.language === 'bn' && product.whatsInTheBoxBn ? product.whatsInTheBoxBn : (product.whatsInTheBox || [])) as item}
            <li class="flex items-center gap-2 text-[var(--color-text-primary)] font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] shrink-0"></span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>
