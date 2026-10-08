<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { i18nState } from '$lib/state.svelte';
  import { Shield01Icon, AlertCircleIcon, Tick02Icon } from '@hugeicons/core-free-icons';

  interface Props {
    agreed: boolean;
    showValidationError?: boolean;
  }

  let { agreed = $bindable(false), showValidationError = false }: Props = $props();
</script>

<div
  class="p-3.5 sm:p-4 rounded-[var(--radius-md)] border bg-[var(--color-bg-surface)] shadow-2xs transition-all {showValidationError && !agreed
    ? 'border-rose-500 ring-2 ring-rose-500/20 bg-rose-50/30 dark:bg-rose-950/20'
    : 'border-[var(--color-border-default)]'}"
>
  <label class="flex items-start gap-3 cursor-pointer select-none">
    <!-- Custom Checkbox Box -->
    <div class="relative flex items-center justify-center mt-0.5 shrink-0">
      <input
        type="checkbox"
        bind:checked={agreed}
        class="sr-only peer"
      />
      <div
        class="w-5 h-5 rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-bg-canvas)] peer-checked:bg-[var(--color-brand-primary)] peer-checked:border-[var(--color-brand-primary)] transition-all flex items-center justify-center text-white"
      >
        {#if agreed}
          <Icon icon={Tick02Icon} size={13} strokeWidth={3} />
        {/if}
      </div>
    </div>

    <!-- Agreement Text -->
    <div class="flex-1 min-w-0">
      <p class="text-xs sm:text-[13px] font-bold text-[var(--color-text-primary)] leading-snug">
        {#if i18nState.language === 'bn'}
          আমি জয় টেলিকমের <span class="text-[var(--color-brand-primary)] underline">শর্তাবলী</span> ও <span class="text-[var(--color-brand-primary)] underline">৭-দিনের রিপ্লেসমেন্ট পলিসি</span> মেনে নিচ্ছি।
        {:else}
          I have read and agree to the <span class="text-[var(--color-brand-primary)] underline">Terms of Service</span> and <span class="text-[var(--color-brand-primary)] underline">7-Day Replacement Guarantee</span>.
        {/if}
      </p>

      <div class="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)] mt-1">
        <Icon icon={Shield01Icon} size={12} class="text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>100% Genuine Accessories Guaranteed</span>
      </div>
    </div>
  </label>

  <!-- Validation Error -->
  {#if showValidationError && !agreed}
    <p class="text-[11px] font-bold text-rose-500 flex items-center gap-1 mt-2.5 animate-pulse">
      <Icon icon={AlertCircleIcon} size={13} />
      <span>{i18nState.language === 'bn' ? 'অর্ডার করতে অনুগ্রহ করে পলিসিতে সম্মতি দিন' : 'Please check the box to agree to the store policy before placing order'}</span>
    </p>
  {/if}
</div>
