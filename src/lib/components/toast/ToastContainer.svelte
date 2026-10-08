<script lang="ts">
  import { cartState } from '$lib/state.svelte';
  import ToastItem from './ToastItem.svelte';
</script>

<!-- Global Toast Container with Responsive Header Clearance & Stacking -->
{#if cartState.toasts.length > 0}
  <aside
    aria-label="Notifications"
    class="fixed top-[136px] md:top-[88px] lg:top-[120px] left-0 right-0 sm:left-auto sm:right-6 z-[100] px-3.5 sm:px-0 w-full sm:max-w-md pointer-events-none flex flex-col gap-2.5 items-center sm:items-end"
  >
    {#each cartState.toasts as toast (toast.id)}
      <div class="w-full max-w-sm sm:max-w-md pointer-events-auto transition-all duration-300">
        <ToastItem
          {toast}
          onDismiss={(id) => cartState.dismissToast(id)}
        />
      </div>
    {/each}
  </aside>
{/if}
