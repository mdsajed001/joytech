<script lang="ts">
  import AutoWizardConfigurator from '$lib/components/AutoWizardConfigurator.svelte';
</script>

<svelte:head>
  <title>Shop by Phone — Joy Telecom</title>
  <meta name="description" content="Find 100% verified compatible genuine accessories for your exact phone or tablet model." />
</svelte:head>

<div class="min-h-screen bg-[var(--color-bg-canvas)] flex flex-col">
  <!-- Main Configurator Area -->
  <main class="flex-1 flex flex-col justify-start max-w-4xl w-full mx-auto p-0 sm:p-6 lg:p-8">
    <div class="w-full bg-[var(--color-bg-surface)] border-0 sm:border border-[var(--color-border-default)] rounded-none sm:rounded-[var(--radius-xl)] shadow-none sm:shadow-xs overflow-hidden flex-1 flex flex-col">
      <AutoWizardConfigurator />
    </div>
  </main>
</div>
