<script lang="ts">
  import NotFoundView from '$lib/components/NotFoundView.svelte';
  import { i18nState } from '$lib/state.svelte';
</script>

<svelte:head>
  <title>
    {i18nState.language === 'bn' ? '৪০৪: পেজ খুঁজে পাওয়া যায়নি' : '404: Page Not Found'} — Joy Telecom
  </title>
</svelte:head>

<NotFoundView />
