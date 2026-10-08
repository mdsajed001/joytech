<script lang="ts">
  import { TRUST_POINTS } from '$lib/data/catalog';
  import Icon from './Icon.svelte';
  import {
    ShieldCheckIcon,
    TruckDeliveryIcon,
    BanknoteIcon,
    RotateLeft01Icon,
    CustomerService01Icon
  } from '@hugeicons/core-free-icons';

  const iconMap = {
    ShieldCheckIcon,
    TruckDeliveryIcon,
    Banknote01Icon: BanknoteIcon,
    RotateLeft01Icon,
    CustomerService01Icon
  };
</script>

<section class="py-10 bg-[var(--color-bg-surface)] border-y border-[var(--color-border-default)]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-8">
      <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-primary)] mb-1 block">
        Joy Telecom Promise
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
        Why Shop With Us?
      </h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {#each TRUST_POINTS as point, i}
        {@const iconDef = iconMap[point.icon as keyof typeof iconMap]}
        <div
          class="flex flex-col items-center justify-center text-center p-5 rounded-[var(--radius-lg)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-bg-surface)] transition-all duration-200"
          class:col-span-2={i === 4}
          class:sm:col-span-1={i === 4}
        >
          <div
            class="w-12 h-12 rounded-xl bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] flex items-center justify-center mb-3.5"
          >
            {#if iconDef}
              <Icon icon={iconDef} size={24} />
            {/if}
          </div>
          <h3 class="text-sm font-bold text-[var(--color-text-primary)] mb-1.5">
            {point.title}
          </h3>
          <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed hidden sm:block">
            {point.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
