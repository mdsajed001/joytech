<script lang="ts">
  import { PROMO_COUPONS, type PromoCoupon } from '$lib/data/offers';
  import { cartState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { Copy01Icon, CheckmarkCircle01Icon, Ticket02Icon } from '@hugeicons/core-free-icons';

  let copiedCode = $state<string | null>(null);
  let resetTimer: any = null;

  async function handleCopy(coupon: PromoCoupon) {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(coupon.code);
      }
    } catch {
      // Fallback
    }

    copiedCode = coupon.code;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      copiedCode = null;
    }, 2500);

    cartState.showToast({
      message: `Coupon "${coupon.code}" copied! Apply at checkout for ${coupon.discount}.`,
      type: 'success'
    });
  }
</script>

<!-- Full-bleed Edge-to-Edge Container with Brand Primary Blue & Drifting Ambient White Bubbles -->
<div class="w-full profile-hero-bubble text-white border-b border-blue-600/30 py-4 px-4 sm:px-6 shadow-sm">
  <div class="max-w-7xl mx-auto relative z-10">
    <!-- Header row -->
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2 text-xs sm:text-sm font-black text-white tracking-tight drop-shadow-xs">
        <span class="p-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
          <Icon icon={Ticket02Icon} size={15} />
        </span>
        <span>Active Coupons & Vouchers</span>
        <span class="text-[11px] font-medium text-white/80 hidden sm:inline">
          — Tap any coupon to copy & apply
        </span>
      </div>

      <!-- Available Badge in Frosted Glass Pill -->
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-sm)] text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-2xs"
      >
        {PROMO_COUPONS.length} Available
      </span>
    </div>

    <!-- Scrollable White Bubble Coupon Chips -->
    <div
      class="flex gap-2.5 sm:gap-3 overflow-x-auto pb-1 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0"
    >
      {#each PROMO_COUPONS as coupon}
        {@const isCopied = copiedCode === coupon.code}
        <button
          type="button"
          onclick={() => handleCopy(coupon)}
          class="shrink-0 group relative flex items-center gap-3 px-3.5 py-2.5 rounded-[var(--radius-sm)] border text-left transition-all duration-150 active:scale-[0.98] tap-target select-none cursor-pointer {isCopied
            ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/40 text-emerald-900 shadow-md'
            : 'bg-white border-white/90 hover:border-white shadow-sm hover:shadow-md text-slate-900'}"
        >
          <!-- Details Column -->
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-xs font-black tracking-wider text-slate-950">
                {coupon.code}
              </span>
              <span
                class="text-[10px] font-black uppercase px-2 py-0.5 rounded-[var(--radius-xs)] shadow-2xs {isCopied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[var(--color-brand-primary)] text-white'}"
              >
                {coupon.discount}
              </span>
            </div>
            <span class="text-[10.5px] font-medium text-slate-500 mt-0.5">
              {coupon.minSpend}
            </span>
          </div>

          <!-- Copy Button Boxy Square -->
          <div
            class="flex items-center justify-center w-7 h-7 rounded-[var(--radius-xs)] transition-all duration-150 {isCopied
              ? 'bg-emerald-600 text-white scale-105'
              : 'bg-blue-50 border border-blue-200/80 text-[var(--color-brand-primary)] group-hover:scale-105 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white'}"
          >
            {#if isCopied}
              <Icon icon={CheckmarkCircle01Icon} size={15} />
            {:else}
              <Icon icon={Copy01Icon} size={13} />
            {/if}
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>
