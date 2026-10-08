<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import {
    ArrowDown01Icon,
    Search01Icon,
    Cancel01Icon,
    Tick01Icon
  } from '@hugeicons/core-free-icons';

  export interface SelectOption {
    value: string;
    label: string;
    sublabel?: string;
    badge?: string;
  }

  interface Props {
    id?: string;
    options: SelectOption[];
    value: string;
    placeholder?: string;
    searchPlaceholder?: string;
    searchable?: boolean;
    clearable?: boolean;
    align?: 'left' | 'right';
    variant?: 'default' | 'ghost';
    disabled?: boolean;
    class?: string;
    triggerClass?: string;
    menuWidthClass?: string;
    onSelect: (value: string) => void;
  }

  let {
    id,
    options = [],
    value = '',
    placeholder = 'Select an option...',
    searchPlaceholder = 'Search options...',
    searchable = true,
    clearable = true,
    align = 'left',
    variant = 'default',
    disabled = false,
    class: containerClass = '',
    triggerClass = '',
    menuWidthClass = 'w-full min-w-[200px]',
    onSelect
  }: Props = $props();

  let isOpen = $state(false);
  let searchQuery = $state('');
  let containerRef: HTMLDivElement | null = $state(null);
  let searchInputRef: HTMLInputElement | null = $state(null);

  // Selected Option
  let selectedOption = $derived(options.find((opt) => opt.value === value));

  // Trigger base styling
  let triggerBaseStyle = $derived.by(() => {
    if (disabled) {
      return 'opacity-50 cursor-not-allowed bg-[var(--color-bg-subtle)] border-[var(--color-border-default)] px-3 py-2 border';
    }
    if (variant === 'ghost') {
      return `bg-transparent hover:bg-[var(--color-bg-subtle)] border border-transparent px-2 py-1.5 text-xs font-bold text-[var(--color-text-primary)] ${isOpen ? 'bg-[var(--color-bg-subtle)] text-[var(--color-brand-primary)]' : ''}`;
    }
    return `bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-subtle)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] px-3 py-2 text-xs font-medium ${isOpen ? 'border-[var(--color-brand-primary)] ring-1 ring-[var(--color-brand-primary)]' : ''}`;
  });

  // Filtered options based on search query
  let filteredOptions = $derived.by(() => {
    if (!searchable || !searchQuery.trim()) {
      return options;
    }
    const q = searchQuery.toLowerCase().trim();
    return options.filter((opt) => {
      const matchLabel = opt.label.toLowerCase().includes(q);
      const matchSub = opt.sublabel ? opt.sublabel.toLowerCase().includes(q) : false;
      return matchLabel || matchSub;
    });
  });

  function toggleOpen() {
    if (disabled) return;
    isOpen = !isOpen;
    if (isOpen) {
      searchQuery = '';
      if (searchable) {
        requestAnimationFrame(() => {
          searchInputRef?.focus();
        });
      }
    }
  }

  function handleSelect(val: string) {
    onSelect(val);
    isOpen = false;
    searchQuery = '';
  }

  function handleClear(e: MouseEvent) {
    e.stopPropagation();
    onSelect('');
    searchQuery = '';
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      isOpen = false;
    }
  }

  // Click outside to close
  $effect(() => {
    if (!isOpen) return;

    function handlePointerDown(e: PointerEvent) {
      if (containerRef && !containerRef.contains(e.target as Node)) {
        isOpen = false;
      }
    }

    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  });
  let randomId = Math.random().toString(36).substring(2, 7);
  let listboxId = $derived(id ? `${id}-listbox` : `select-listbox-${randomId}`);
</script>

<div
  bind:this={containerRef}
  class="relative text-left {containerClass}"
  onkeydown={handleKeyDown}
  role="none"
>
  <!-- Trigger Button -->
  <button
    {id}
    type="button"
    role="combobox"
    aria-expanded={isOpen}
    aria-controls={listboxId}
    aria-haspopup="listbox"
    {disabled}
    onclick={toggleOpen}
    class="w-full flex items-center justify-between gap-1.5 rounded-[var(--radius-xs)] transition-all text-left cursor-pointer focus:outline-none select-none {triggerBaseStyle} {triggerClass}"
  >
    <div class="flex items-center gap-1.5 truncate flex-1 min-w-0">
      {#if selectedOption}
        <span class="truncate text-[var(--color-text-primary)] font-semibold">{selectedOption.label}</span>
        {#if selectedOption.sublabel}
          <span class="text-[10px] text-[var(--color-text-tertiary)] truncate">({selectedOption.sublabel})</span>
        {/if}
      {:else}
        <span class="text-[var(--color-text-tertiary)] truncate">{placeholder}</span>
      {/if}
    </div>

    <div class="flex items-center gap-1 shrink-0 ml-1.5">
      {#if value && !disabled && clearable}
        <span
          role="button"
          tabindex={0}
          aria-label="Clear selection"
          onclick={handleClear}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClear(e as any); } }}
          class="p-0.5 rounded-full hover:bg-[var(--color-border-strong)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <Icon icon={Cancel01Icon} size={12} />
        </span>
      {/if}
      <div class="text-[var(--color-text-secondary)] transition-transform duration-200 {isOpen ? 'rotate-180 text-[var(--color-brand-primary)]' : ''}">
        <Icon icon={ArrowDown01Icon} size={14} />
      </div>
    </div>
  </button>

  <!-- Popover Menu -->
  {#if isOpen}
    <div
      id={listboxId}
      role="listbox"
      class="absolute z-50 {align === 'right' ? 'right-0' : 'left-0'} top-full mt-1.5 {menuWidthClass} bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
    >
      <!-- Optional Typeahead Search Field -->
      {#if searchable}
        <div class="p-2 border-b border-[var(--color-border-default)] bg-[var(--color-bg-subtle)]/60 sticky top-0 z-10">
          <div class="relative flex items-center">
            <Icon icon={Search01Icon} size={14} class="absolute left-2.5 text-[var(--color-text-tertiary)] pointer-events-none" />
            <input
              bind:this={searchInputRef}
              type="text"
              bind:value={searchQuery}
              placeholder={searchPlaceholder}
              class="w-full bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] text-xs rounded-[var(--radius-xs)] pl-8 pr-7 py-1.5 border border-[var(--color-border-default)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
            />
            {#if searchQuery}
              <button
                type="button"
                aria-label="Clear search"
                onclick={() => { searchQuery = ''; searchInputRef?.focus(); }}
                class="absolute right-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] p-0.5 rounded cursor-pointer"
              >
                <Icon icon={Cancel01Icon} size={12} />
              </button>
            {/if}
          </div>
        </div>
      {/if}

      <!-- Options List -->
      <div class="max-h-60 overflow-y-auto overscroll-contain py-1 divide-y divide-[var(--color-border-subtle)]/40">
        {#if filteredOptions.length > 0}
          {#each filteredOptions as opt (opt.value)}
            {@const isSelected = opt.value === value}
            <button
              type="button"
              role="option"
              aria-selected={isSelected}
              onclick={() => handleSelect(opt.value)}
              class="w-full text-left px-3 py-2 text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer select-none {isSelected ? 'bg-[var(--color-brand-primary-subtle)] font-bold text-[var(--color-brand-primary)]' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]'}"
            >
              <div class="flex flex-col min-w-0 flex-1">
                <div class="flex items-center gap-1.5 truncate">
                  <span class="truncate">{opt.label}</span>
                  {#if opt.badge}
                    <span class="text-[9px] px-1.5 py-0.2 bg-[var(--color-border-subtle)] rounded-full text-[var(--color-text-secondary)] font-normal">{opt.badge}</span>
                  {/if}
                </div>
                {#if opt.sublabel}
                  <span class="text-[10px] text-[var(--color-text-secondary)] font-normal truncate mt-0.5">{opt.sublabel}</span>
                {/if}
              </div>
              {#if isSelected}
                <Icon icon={Tick01Icon} size={14} class="text-[var(--color-brand-primary)] shrink-0" />
              {/if}
            </button>
          {/each}
        {:else}
          <div class="py-6 px-3 text-center space-y-1.5">
            <p class="text-xs text-[var(--color-text-secondary)] font-medium">No matches found</p>
            {#if searchQuery}
              <button
                type="button"
                onclick={() => { searchQuery = ''; searchInputRef?.focus(); }}
                class="text-[11px] font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
              >
                Clear search
              </button>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
