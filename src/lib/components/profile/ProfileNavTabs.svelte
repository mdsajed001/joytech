<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { i18nState } from '$lib/state.svelte';
  import {
    Settings02Icon,
    CreditCardIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    activeTab: 'preferences' | 'payments';
    onSelectTab: (tabId: 'preferences' | 'payments') => void;
  }

  let {
    activeTab,
    onSelectTab
  }: Props = $props();

  const tabs = $derived([
    {
      id: 'preferences' as const,
      label: i18nState.t('tab.preferences'),
      shortLabel: i18nState.t('tab.preferences.short'),
      icon: Settings02Icon,
      badge: null
    },
    {
      id: 'payments' as const,
      label: i18nState.t('tab.payments'),
      shortLabel: i18nState.t('tab.payments.short'),
      icon: CreditCardIcon,
      badge: null
    }
  ]);
</script>

<!-- Full-bleed container on mobile (rounded-none, border-x-0), nicely rounded on desktop with 12px internal padding -->
<div class="w-full bg-[var(--color-bg-surface)] sm:border sm:border-[var(--color-border-default)] sm:rounded-2xl sm:shadow-xs p-[12px]">
  <div class="grid grid-cols-2 gap-1 sm:flex sm:items-center sm:gap-2">
    {#each tabs as tab}
      {@const isActive = activeTab === tab.id}
      <button
        type="button"
        onclick={() => onSelectTab(tab.id)}
        class="w-full sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-[4px] text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer min-h-[44px] tap-target {isActive
          ? 'cta-blue-bubble text-white shadow-xs'
          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]'}"
      >
        <Icon icon={tab.icon} size={16} class="shrink-0 {isActive ? 'text-white' : 'text-[var(--color-text-muted)]'}" />

        <!-- Shortened label for phone view, full title for tablet & desktop -->
        <span class="sm:hidden truncate">{tab.shortLabel}</span>
        <span class="hidden sm:inline">{tab.label}</span>

        {#if tab.badge}
          <span
            class="hidden min-[420px]:inline-block px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[10.5px] font-black rounded-full transition-colors shrink-0 {isActive
              ? 'bg-white/20 text-white'
              : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]'}"
          >
            {tab.badge}
          </span>
        {/if}
      </button>
    {/each}
  </div>
</div>
