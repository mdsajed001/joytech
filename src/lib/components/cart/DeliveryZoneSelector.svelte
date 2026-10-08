<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import {
    Location01Icon,
    DeliveryTruck01Icon,
    FlashIcon,
    Tick02Icon
  } from '@hugeicons/core-free-icons';

  function selectZone(zone: 'dhaka' | 'outside_dhaka') {
    cartState.setDeliveryZone(zone);
  }

  function toggleSpeed() {
    cartState.setDeliverySpeed(cartState.deliverySpeed === 'express' ? 'standard' : 'express');
  }
</script>

<div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5 shadow-xs">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[var(--color-brand-primary)] flex items-center justify-center">
        <Icon icon={DeliveryTruck01Icon} size={18} />
      </div>
      <div>
        <h3 class="text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'ডেলিভারি এলাকা ও পদ্ধতি' : 'Delivery Zone & Speed'}
        </h3>
        <p class="text-xs text-[var(--color-text-muted)]">
          {i18nState.language === 'bn' ? 'সঠিক ডেলিভারি চার্জ নির্ধারণে আপনার এলাকা নির্বাচন করুন' : 'Select your location for precise shipping rates'}
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <!-- Inside Dhaka Option -->
    <div
      class="p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between {cartState.deliveryZone === 'dhaka'
        ? 'border-[var(--color-brand-primary)] bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-[var(--color-brand-primary)]/20'
        : 'border-[var(--color-border-default)] hover:border-slate-300 dark:hover:border-slate-700 bg-[var(--color-bg-surface)]'}"
    >
      <button
        type="button"
        onclick={() => selectZone('dhaka')}
        class="w-full text-left cursor-pointer focus:outline-none"
      >
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <div class="w-5 h-5 rounded-full border flex items-center justify-center transition-colors {cartState.deliveryZone === 'dhaka' ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white' : 'border-slate-300 dark:border-slate-600'}">
              {#if cartState.deliveryZone === 'dhaka'}
                <Icon icon={Tick02Icon} size={12} strokeWidth={3} />
              {/if}
            </div>
            <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
              {i18nState.language === 'bn' ? 'ঢাকার ভেতরে' : 'Inside Dhaka'}
            </span>
          </div>
          <span class="text-xs font-black {cartState.isFreeDelivery ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--color-text-primary)]'}">
            {cartState.isFreeDelivery ? (i18nState.language === 'bn' ? 'ফ্রি' : 'FREE') : '৳60'}
          </span>
        </div>

        <div class="text-[11px] text-[var(--color-text-muted)] space-y-1">
          <p>• {i18nState.language === 'bn' ? 'স্ট্যান্ডার্ড ডেলিভারি: ২৪-৪৮ ঘণ্টা' : 'Standard Delivery: 24-48 Hours'}</p>
          <p>• {i18nState.language === 'bn' ? 'হোম ডেলিভারি ক্যাশ অন ডেলিভারি' : 'Cash on Home Delivery'}</p>
        </div>
      </button>

      {#if cartState.deliveryZone === 'dhaka'}
        <!-- Express Option within Dhaka -->
        <div class="mt-3 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between gap-2">
          <span class="text-[11px] font-semibold text-[var(--color-text-secondary)] flex items-center gap-1">
            <Icon icon={FlashIcon} size={13} class="text-amber-500" />
            {i18nState.language === 'bn' ? 'এক্সপ্রেস ডেলিভারি (একই দিন)' : 'Express Same-Day'}
          </span>
          <button
            type="button"
            onclick={toggleSpeed}
            class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer {cartState.deliverySpeed === 'express'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}"
          >
            {cartState.deliverySpeed === 'express' ? (i18nState.language === 'bn' ? 'নির্বাচিত (+৳১২০)' : 'Selected (+৳120)') : '+৳60'}
          </button>
        </div>
      {/if}
    </div>

    <!-- Outside Dhaka Option -->
    <div
      class="p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between {cartState.deliveryZone === 'outside_dhaka'
        ? 'border-[var(--color-brand-primary)] bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-[var(--color-brand-primary)]/20'
        : 'border-[var(--color-border-default)] hover:border-slate-300 dark:hover:border-slate-700 bg-[var(--color-bg-surface)]'}"
    >
      <button
        type="button"
        onclick={() => selectZone('outside_dhaka')}
        class="w-full text-left cursor-pointer focus:outline-none"
      >
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <div class="w-5 h-5 rounded-full border flex items-center justify-center transition-colors {cartState.deliveryZone === 'outside_dhaka' ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white' : 'border-slate-300 dark:border-slate-600'}">
              {#if cartState.deliveryZone === 'outside_dhaka'}
                <Icon icon={Tick02Icon} size={12} strokeWidth={3} />
              {/if}
            </div>
            <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
              {i18nState.language === 'bn' ? 'ঢাকার বাইরে' : 'Outside Dhaka'}
            </span>
          </div>
          <span class="text-xs font-black {cartState.isFreeDelivery ? 'text-emerald-600 dark:text-emerald-400' : 'text-[var(--color-text-primary)]'}">
            {cartState.isFreeDelivery ? (i18nState.language === 'bn' ? 'ফ্রি' : 'FREE') : '৳120'}
          </span>
        </div>

        <div class="text-[11px] text-[var(--color-text-muted)] space-y-1">
          <p>• {i18nState.language === 'bn' ? 'স্টেডফাস্ট / সুন্দরবন কুরিয়ার: ২-৩ দিন' : 'Steadfast / Sundarban Courier: 2-3 Days'}</p>
          <p>• {i18nState.language === 'bn' ? 'কন্ডিশনে বা হোম ডেলিভারি' : 'Condition or Home Delivery'}</p>
        </div>
      </button>

      <div class="mt-3 pt-3 border-t border-[var(--color-border-subtle)]">
        <span class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <Icon icon={Tick02Icon} size={12} />
          {i18nState.language === 'bn' ? '৬৪ জেলায় নির্ভরযোগ্য ডেলিভারি' : 'Reliable delivery across 64 districts'}
        </span>
      </div>
    </div>
  </div>
</div>
