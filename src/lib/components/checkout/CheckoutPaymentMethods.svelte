<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import PaymentGatewayLogo from '$lib/components/checkout/PaymentGatewayLogo.svelte';
  import { i18nState } from '$lib/state.svelte';
  import {
    CreditCardIcon,
    Tick02Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    selectedMethod: 'cod' | 'bkash' | 'nagad' | 'card';
    onSelect: (method: 'cod' | 'bkash' | 'nagad' | 'card') => void;
  }

  let { selectedMethod = $bindable('cod'), onSelect }: Props = $props();

  const methods = [
    {
      id: 'cod' as const,
      name: 'Cash on Delivery',
      nameBn: 'ক্যাশ অন ডেলিভারি',
      desc: 'Pay upon physical delivery',
      descBn: 'পণ্য হাতে পেয়ে মূল্য পরিশোধ'
    },
    {
      id: 'bkash' as const,
      name: 'bKash Online',
      nameBn: 'বিকাশ অনলাইন',
      desc: 'Instant 1.5% cashback eligible',
      descBn: 'তাত্ক্ষণিক বিকাশ গেটওয়ে'
    },
    {
      id: 'nagad' as const,
      name: 'Nagad Gateway',
      nameBn: 'নগদ গেটওয়ে',
      desc: 'Instant direct payment',
      descBn: 'সহজ নগদ পেমেন্ট'
    },
    {
      id: 'card' as const,
      name: 'Visa / Mastercard',
      nameBn: 'কার্ড পেমেন্ট',
      desc: 'Debit or Credit Cards accepted',
      descBn: 'সকল ব্যাংক কার্ড সাপোর্টেড'
    }
  ];
</script>

<div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] shadow-2xs overflow-hidden transition-all">
  <!-- Section Header -->
  <div class="px-4 py-3 bg-[var(--color-bg-subtle)]/40 border-b border-[var(--color-border-subtle)] flex items-center justify-between">
    <div class="flex items-center gap-2.5">
      <div class="w-7 h-7 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
        <Icon icon={CreditCardIcon} size={16} />
      </div>
      <h3 class="text-xs sm:text-sm font-black text-[var(--color-text-primary)] leading-tight">
        {i18nState.language === 'bn' ? 'পেমেন্ট মেথড নির্বাচন করুন' : 'Payment Method'}
      </h3>
    </div>

    <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
      100% Secure
    </span>
  </div>

  <!-- 2x2 Payment Method Cards Grid -->
  <div class="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    {#each methods as m}
      {@const isSelected = selectedMethod === m.id}
      <button
        type="button"
        onclick={() => {
          selectedMethod = m.id;
          onSelect(m.id);
        }}
        class="relative flex items-center gap-3 p-3 rounded-[var(--radius-sm)] border text-left transition-all cursor-pointer active:scale-98 select-none {isSelected
          ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)]/50 ring-1 ring-[var(--color-brand-primary)] shadow-2xs'
          : 'border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:border-slate-300 dark:hover:border-slate-700'}"
      >
        <PaymentGatewayLogo method={m.id} size="md" />

        <div class="flex-1 min-w-0 pr-1">
          <div class="text-xs font-black text-[var(--color-text-primary)] truncate leading-tight">
            {i18nState.language === 'bn' ? m.nameBn : m.name}
          </div>
          <p class="text-[10.5px] text-[var(--color-text-secondary)] mt-0.5 leading-none truncate">
            {i18nState.language === 'bn' ? m.descBn : m.desc}
          </p>
        </div>

        {#if isSelected}
          <div class="w-5 h-5 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Icon icon={Tick02Icon} size={11} strokeWidth={3} />
          </div>
        {/if}
      </button>
    {/each}
  </div>
</div>
