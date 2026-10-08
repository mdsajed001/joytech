<script lang="ts">
  import Icon from './Icon.svelte';
  import { Cancel01Icon, DeliveryTruck01Icon } from '@hugeicons/core-free-icons';

  let visible = $state(true);

  function dismiss() {
    visible = false;
  }
</script>

{#if visible}
  <aside
    aria-label="Announcement"
    class="bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] px-4 py-2 text-xs font-semibold flex items-center justify-between border-b border-white/10 transition-all duration-200"
  >
    <div class="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
      <span class="inline-flex items-center text-[var(--color-accent)]">
        <Icon icon={DeliveryTruck01Icon} size={16} />
      </span>
      <p class="truncate">
        <span class="text-[var(--color-accent)] font-bold">Special Offer:</span>
        Free islandwide delivery on orders over <span class="font-extrabold text-white">৳999</span> | Same-day dispatch in Dhaka
      </p>
    </div>

    <button
      type="button"
      onclick={dismiss}
      class="text-white/60 hover:text-white transition-colors p-1 -mr-1 rounded tap-target flex items-center justify-center cursor-pointer"
      aria-label="Close announcement"
    >
      <Icon icon={Cancel01Icon} size={14} />
    </button>
  </aside>
{/if}
