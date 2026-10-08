<script lang="ts">
  import AutoWizardConfigurator from '$lib/components/AutoWizardConfigurator.svelte';
  import StickerPhone3D from '$lib/components/StickerPhone3D.svelte';
  import { Cancel01Icon } from '@hugeicons/core-free-icons';
  import Icon from '$lib/components/Icon.svelte';
  import { autoWizardState } from '$lib/state.svelte';

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && autoWizardState.isDrawerOpen) {
      autoWizardState.isDrawerOpen = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
<div 
  class="fixed inset-0 bg-black/50 backdrop-blur-xs z-[100] transition-opacity duration-300 {autoWizardState.isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}"
  aria-hidden="true"
  onclick={() => (autoWizardState.isDrawerOpen = false)}
></div>

<!-- Side Drawer (Desktop Only) -->
<div 
  class="fixed top-0 right-0 h-full w-full max-w-[460px] bg-[var(--color-bg-surface)] z-[101] shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-[var(--color-border-default)] {autoWizardState.isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}"
  role="dialog"
  aria-modal="true"
  aria-label="Shop by Phone Drawer"
>
  <!-- Branded Header -->
  <div class="flex items-center justify-between px-5 h-16 border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)] shrink-0">
    <div class="flex items-center gap-3 min-w-0">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-b from-blue-500/10 to-indigo-500/5 border border-blue-200/50 shadow-xs flex items-center justify-center shrink-0">
        <StickerPhone3D size={28} />
      </div>
      <div class="flex flex-col min-w-0 justify-center">
        <div class="flex items-center gap-2">
          <span class="font-black text-base tracking-tight text-[var(--color-text-primary)]">
            Shop by Device
          </span>
          <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-[var(--color-success-bg)] text-[var(--color-success-text)] border border-[var(--color-success-border)]/60">
            <span class="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
            100% Fit
          </span>
        </div>
        <span class="text-[11px] font-medium text-[var(--color-text-secondary)] truncate">
          Select device for verified accessories
        </span>
      </div>
    </div>

    <!-- Tactile Close Button -->
    <button 
      type="button"
      class="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-default)] active:scale-90 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all cursor-pointer shrink-0 -mr-1"
      onclick={() => (autoWizardState.isDrawerOpen = false)}
      aria-label="Close drawer"
    >
      <Icon icon={Cancel01Icon} size={18} />
    </button>
  </div>
  
  <!-- Configurator Body -->
  <div class="flex-1 overflow-y-auto relative bg-[var(--color-bg-canvas)]">
    {#if autoWizardState.isDrawerOpen}
      <AutoWizardConfigurator />
    {/if}
  </div>
</div>
