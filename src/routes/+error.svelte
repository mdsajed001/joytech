<script lang="ts">
  import { page } from '$app/stores';
  import NotFoundView from '$lib/components/NotFoundView.svelte';
  import { i18nState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { AlertCircleIcon, Home01Icon } from '@hugeicons/core-free-icons';

  let status = $derived($page.status);
</script>

<svelte:head>
  <title>
    {status === 404 
      ? (i18nState.language === 'bn' ? '৪০৪: পেজ খুঁজে পাওয়া যায়নি' : '404: Page Not Found') 
      : `${status}: Error`} — Joy Telecom
  </title>
</svelte:head>

{#if status === 404}
  <NotFoundView />
{:else}
  <div class="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
    <div class="max-w-md w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-8 shadow-sm">
      <div class="w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center mx-auto mb-4">
        <Icon icon={AlertCircleIcon} size={28} />
      </div>
      <h1 class="text-2xl font-black text-[var(--color-text-primary)] mb-2">
        {status || 500} — {i18nState.language === 'bn' ? 'কিছু একটা সমস্যা হয়েছে' : 'Something went wrong'}
      </h1>
      <p class="text-sm text-[var(--color-text-secondary)] mb-6">
        {$page.error?.message || (i18nState.language === 'bn' ? 'অনুগ্রহ করে পুনরায় চেষ্টা করুন।' : 'An unexpected error occurred. Please try again.')}
      </p>
      <a
        href="/"
        class="inline-flex items-center gap-2 px-6 py-2.5 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] text-white text-sm font-bold shadow-sm hover:bg-[var(--color-brand-primary-hover)] transition-all"
      >
        <Icon icon={Home01Icon} size={18} />
        <span>{i18nState.language === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
      </a>
    </div>
  </div>
{/if}
