<script lang="ts">
  import type { OfferEvent } from '$lib/data/offers';
  import Icon from '$lib/components/Icon.svelte';
  import {
    FlashIcon,
    PackageIcon,
    BatteryCharging01Icon,
    Tag01Icon,
    ArrowRight01Icon,
    Clock01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    event: OfferEvent;
    compact?: boolean;
    showSeeAll?: boolean;
    productCount?: number;
    onSeeAll?: () => void;
  }

  let { event, compact = false, showSeeAll = false, productCount, onSeeAll }: Props = $props();

  const targetTime = $derived(
    event.countdownHours ? Date.now() + event.countdownHours * 60 * 60 * 1000 : null
  );

  let timeLeft = $state({ hours: '18', minutes: '00', seconds: '00', ended: false });

  $effect(() => {
    if (!targetTime) return;

    function update() {
      if (!targetTime) return;
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        timeLeft = { hours: '00', minutes: '00', seconds: '00', ended: true };
        return;
      }
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      timeLeft = {
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0'),
        ended: false
      };
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  });

  const iconMap: Record<string, any> = {
    'flash-sale-madness': FlashIcon,
    'protection-combos': PackageIcon,
    'anker-power-week': BatteryCharging01Icon,
    'budget-clearance-under-999': Tag01Icon
  };

  const currentIcon = $derived(iconMap[event.id] ?? FlashIcon);
</script>

<div
  class="relative overflow-hidden rounded-none sm:rounded-[var(--radius-md)] text-white shadow-md bg-gradient-to-r {event.gradient} {compact
    ? 'py-8 px-5 sm:py-10 sm:px-8 min-h-[220px] sm:min-h-[240px] flex flex-col justify-center'
    : 'py-10 px-5 sm:py-14 sm:px-10 min-h-[270px] sm:min-h-[310px] flex flex-col justify-center'}"
>
  <!-- Background subtle ambient glow and pattern overlay -->
  <div class="absolute inset-0 bg-black/15 pointer-events-none"></div>
  <div
    class="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
  ></div>

  <div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-8">
    <!-- Left Column: Details -->
    <div class="flex-1 min-w-0">
      <!-- Badge row -->
      <div class="flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3">
        <span
          class="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 tracking-wide text-white"
        >
          <Icon icon={currentIcon} size={14} />
          <span>{event.badge}</span>
        </span>
        <span
          class="text-[11px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 shadow-xs"
        >
          {event.discountHighlight}
        </span>
      </div>

      <!-- Main Title -->
      <h2 class="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white mb-2">
        {event.title}
      </h2>

      <!-- Subtitle / Description -->
      <p class="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
        {event.subtitle}
      </p>
    </div>

    <!-- Right Column: Countdown + Action -->
    <div class="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0">
      {#if event.countdownHours}
        <div class="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-[var(--radius-sm)] border border-white/15">
          <span class="text-white/80">
            <Icon icon={Clock01Icon} size={14} />
          </span>
          <span class="text-[11px] font-semibold text-white/90 hidden sm:inline">Ends in:</span>
          <div class="flex items-center gap-1 font-mono text-xs font-bold text-white tracking-wider">
            <span class="px-1.5 py-0.5 rounded bg-black/40 text-amber-300">{timeLeft.hours}h</span>
            <span>:</span>
            <span class="px-1.5 py-0.5 rounded bg-black/40 text-amber-300">{timeLeft.minutes}m</span>
            <span>:</span>
            <span class="px-1.5 py-0.5 rounded bg-black/40 text-white">{timeLeft.seconds}s</span>
          </div>
        </div>
      {/if}

      {#if showSeeAll && onSeeAll}
        <button
          type="button"
          onclick={onSeeAll}
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-sm)] bg-white text-slate-900 font-bold text-xs shadow-md hover:bg-slate-100 active:scale-[0.98] transition-all tap-target"
        >
          <span>See All {productCount ? `(${productCount})` : ''}</span>
          <Icon icon={ArrowRight01Icon} size={14} />
        </button>
      {/if}
    </div>
  </div>
</div>
