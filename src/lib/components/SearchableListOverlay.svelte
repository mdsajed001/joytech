<script lang="ts">
  import { Search01Icon, ArrowLeft01Icon, Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
  import Icon from '$lib/components/Icon.svelte';

  interface ListItem {
    id: string;
    label: string;
    image?: string;
    group?: string;
    aliases?: string[];
  }

  interface Props {
    title: string;
    items: ListItem[];
    placeholder?: string;
    onSelect: (item: ListItem) => void;
    onClose: () => void;
  }

  let {
    title,
    items,
    placeholder = 'Search...',
    onSelect,
    onClose
  }: Props = $props();

  let searchQuery = $state('');

  const filteredItems = $derived(
    searchQuery.trim() === ''
      ? items
      : items.filter(item => {
          const q = searchQuery.toLowerCase().trim();
          return item.label.toLowerCase().includes(q) ||
            item.aliases?.some(a => a.toLowerCase().includes(q));
        })
  );

  // Group items if they have a 'group' property
  const groupedItems = $derived(() => {
    const groups: Record<string, ListItem[]> = {};
    for (const item of filteredItems) {
      const g = item.group || 'All';
      if (!groups[g]) groups[g] = [];
      groups[g].push(item);
    }
    return groups;
  });

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<div class="fixed inset-0 z-[110] bg-[var(--color-bg-surface)] flex flex-col animate-in slide-in-from-right-8 duration-200">
  <!-- Header -->
  <header class="flex-none bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)] sticky top-0 z-10 shadow-xs">
    <!-- Top Bar -->
    <div class="flex items-center h-14 px-4 gap-3">
      <button 
        type="button" 
        class="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-default)] active:scale-90 transition-all cursor-pointer -ml-1 text-[var(--color-text-primary)]"
        onclick={onClose}
        aria-label="Back"
      >
        <Icon icon={ArrowLeft01Icon} size={20} />
      </button>
      <h2 class="text-base font-black text-[var(--color-text-primary)] flex-1 truncate">{title}</h2>
    </div>

    <!-- Search Bar -->
    <div class="px-4 pb-3">
      <div class="relative flex items-center">
        <span class="absolute left-3.5 text-[var(--color-text-disabled)] pointer-events-none">
          <Icon icon={Search01Icon} size={18} />
        </span>
        <input 
          type="search"
          bind:value={searchQuery}
          placeholder={placeholder}
          class="w-full h-11 pl-10 pr-9 bg-[var(--color-bg-subtle)] border border-[var(--color-border-strong)] rounded-full text-xs font-semibold text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:border-[var(--color-brand-primary)] focus:bg-[var(--color-bg-surface)] outline-none transition-all shadow-inner"
        />
        {#if searchQuery}
          <button
            type="button"
            onclick={() => (searchQuery = '')}
            class="absolute right-3 p-1 rounded-full text-[var(--color-text-disabled)] hover:text-[var(--color-text-primary)] cursor-pointer"
            aria-label="Clear search"
          >
            <Icon icon={Cancel01Icon} size={15} />
          </button>
        {/if}
      </div>
    </div>
  </header>

  <!-- List Area -->
  <div class="flex-1 overflow-hidden relative flex bg-[var(--color-bg-canvas)]">
    <!-- Scrollable Content -->
    <div class="flex-1 overflow-y-auto px-4 py-3">
      {#if filteredItems.length === 0}
        <div class="text-center py-12 text-xs font-semibold text-[var(--color-text-secondary)]">
          No results found for "<span class="text-[var(--color-text-primary)]">{searchQuery}</span>"
        </div>
      {:else}
        {#each Object.entries(groupedItems()) as [group, groupItems]}
          <div class="mb-5">
            {#if group !== 'All'}
              <h3 class="text-[10px] font-black text-[var(--color-text-disabled)] uppercase tracking-wider mb-2 sticky top-0 bg-[var(--color-bg-canvas)]/95 backdrop-blur-xs py-1">
                {group}
              </h3>
            {/if}
            <div class="bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border-default)] divide-y divide-[var(--color-border-subtle)] overflow-hidden shadow-2xs">
              {#each groupItems as item}
                <button
                  type="button"
                  class="w-full flex items-center justify-between px-4 py-3.5 hover:bg-[var(--color-bg-subtle)] active:bg-[var(--color-border-subtle)] transition-colors text-left group cursor-pointer"
                  onclick={() => onSelect(item)}
                >
                  <div class="flex flex-col min-w-0 pr-3">
                    <span class="text-xs sm:text-sm font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors truncate">
                      {item.label}
                    </span>
                    {#if item.aliases && item.aliases.length > 0}
                      <span class="inline-flex items-center gap-1 mt-1 text-[10.5px] font-bold text-[var(--color-brand-primary)]">
                        <span class="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-800/50 truncate">
                          aka {item.aliases.join(', ')}
                        </span>
                      </span>
                    {/if}
                  </div>
                  <div class="w-7 h-7 rounded-full bg-[var(--color-bg-subtle)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 transition-all duration-150 group-hover:scale-105 shadow-2xs">
                    <Icon icon={ArrowRight01Icon} size={14} />
                  </div>
                </button>
              {/each}
            </div>
          </div>
        {/each}
      {/if}
    </div>

    <!-- Quick A-Z Alphabet Strip -->
    <div class="w-6 flex-none flex flex-col items-center justify-center py-4 bg-[var(--color-bg-surface)] border-l border-[var(--color-border-default)] select-none">
      {#each letters as letter}
        <button
          type="button"
          onclick={() => { searchQuery = letter; }}
          class="text-[9.5px] font-black text-[var(--color-text-disabled)] hover:text-[var(--color-brand-primary)] py-[1px] leading-none hover:scale-125 transition-transform cursor-pointer"
        >
          {letter}
        </button>
      {/each}
    </div>
  </div>
</div>
