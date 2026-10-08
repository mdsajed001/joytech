<script lang="ts">
  interface Props {
    minPrice: number;
    maxPrice: number;
    onPriceChange: (min: number, max: number) => void;
    onReset?: () => void;
  }

  let { minPrice = 0, maxPrice = 10000, onPriceChange, onReset }: Props = $props();

  const MIN_LIMIT = 0;
  const MAX_LIMIT = 10000;
  const STEP = 50;

  const PRESETS = [
    { label: 'Under ৳1k', min: 0, max: 1000 },
    { label: '৳1k – ৳2.5k', min: 1000, max: 2500 },
    { label: '৳2.5k – ৳5k', min: 2500, max: 5000 },
    { label: '৳5k+', min: 5000, max: 10000 }
  ];

  // Local state synced from props
  let localMin = $state(MIN_LIMIT);
  let localMax = $state(MAX_LIMIT);
  let inputMinText = $state(String(MIN_LIMIT));
  let inputMaxText = $state(String(MAX_LIMIT));

  // Sync incoming props down to local state
  $effect(() => {
    localMin = minPrice;
    localMax = maxPrice;
    inputMinText = String(minPrice);
    inputMaxText = String(maxPrice);
  });

  // Track percentage for highlight fill
  let leftPercent = $derived(
    Math.min(100, Math.max(0, ((localMin - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100))
  );
  let rightPercent = $derived(
    Math.min(100, Math.max(0, 100 - ((localMax - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100))
  );


  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  function debouncePriceChange(min: number, max: number) {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onPriceChange(min, max);
    }, 150);
  }

  function handleSliderMin(e: Event) {
    const val = Number((e.target as HTMLInputElement).value);
    if (val > localMax) {
      localMin = localMax;
    } else {
      localMin = val;
    }
    inputMinText = String(localMin);
    onPriceChange(localMin, localMax);
  }

  function handleSliderMax(e: Event) {
    const val = Number((e.target as HTMLInputElement).value);
    if (val < localMin) {
      localMax = localMin;
    } else {
      localMax = val;
    }
    inputMaxText = String(localMax);
    onPriceChange(localMin, localMax);
  }

  function handleMinInput(e: Event) {
    const text = (e.target as HTMLInputElement).value;
    inputMinText = text;
    const parsed = Number(text);
    if (!isNaN(parsed)) {
      const clamped = Math.max(MIN_LIMIT, Math.min(parsed, localMax));
      localMin = clamped;
      debouncePriceChange(clamped, localMax);
    }
  }

  function handleMaxInput(e: Event) {
    const text = (e.target as HTMLInputElement).value;
    inputMaxText = text;
    const parsed = Number(text);
    if (!isNaN(parsed)) {
      const clamped = Math.min(MAX_LIMIT, Math.max(parsed, localMin));
      localMax = clamped;
      debouncePriceChange(localMin, clamped);
    }
  }

  function handleMinBlur() {
    let parsed = Number(inputMinText);
    if (isNaN(parsed) || parsed < MIN_LIMIT) parsed = MIN_LIMIT;
    if (parsed > localMax) parsed = localMax;
    localMin = parsed;
    inputMinText = String(parsed);
    onPriceChange(localMin, localMax);
  }

  function handleMaxBlur() {
    let parsed = Number(inputMaxText);
    if (isNaN(parsed) || parsed > MAX_LIMIT) parsed = MAX_LIMIT;
    if (parsed < localMin) parsed = localMin;
    localMax = parsed;
    inputMaxText = String(parsed);
    onPriceChange(localMin, localMax);
  }

  function applyPreset(min: number, max: number) {
    localMin = min;
    localMax = max;
    inputMinText = String(min);
    inputMaxText = String(max);
    onPriceChange(min, max);
  }

  function handleReset() {
    localMin = MIN_LIMIT;
    localMax = MAX_LIMIT;
    inputMinText = String(MIN_LIMIT);
    inputMaxText = String(MAX_LIMIT);
    if (onReset) {
      onReset();
    } else {
      onPriceChange(MIN_LIMIT, MAX_LIMIT);
    }
  }
</script>

<div class="space-y-3 pt-1">
  <!-- Dual Range Slider Track -->
  <div class="relative py-2 select-none">
    <div class="relative w-full h-2 bg-[var(--color-border-strong)]/60 rounded-full">
      <!-- Active Highlight Fill -->
      <div
        class="absolute top-0 bottom-0 bg-[var(--color-brand-primary)] rounded-full transition-all duration-75"
        style="left: {leftPercent}%; right: {rightPercent}%;"
      ></div>

      <!-- Min Slider Input -->
      <input
        type="range"
        min={MIN_LIMIT}
        max={MAX_LIMIT}
        step={STEP}
        value={localMin}
        oninput={handleSliderMin}
        class="range-slider-input absolute inset-0 w-full h-full z-20 cursor-pointer"
        aria-label="Minimum price filter"
      />

      <!-- Max Slider Input -->
      <input
        type="range"
        min={MIN_LIMIT}
        max={MAX_LIMIT}
        step={STEP}
        value={localMax}
        oninput={handleSliderMax}
        class="range-slider-input absolute inset-0 w-full h-full z-20 cursor-pointer"
        aria-label="Maximum price filter"
      />
    </div>

    <!-- Tick Boundaries -->
    <div class="flex justify-between text-[10px] font-medium text-[var(--color-text-disabled)] mt-1.5 px-0.5">
      <span>৳0</span>
      <span>৳5k</span>
      <span>৳10k+</span>
    </div>
  </div>

  <!-- Manual Numeric Min & Max Inputs -->
  <div class="flex items-center gap-2 pt-0.5">
    <div class="flex-1">
      <label for="price-input-min" class="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
        Min (৳)
      </label>
      <div class="relative flex items-center">
        <input
          id="price-input-min"
          type="number"
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          step={STEP}
          value={inputMinText}
          oninput={handleMinInput}
          onblur={handleMinBlur}
          class="w-full px-2.5 py-1.5 text-xs font-bold bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] focus:bg-[var(--color-bg-surface)] focus:border-[var(--color-brand-primary)] focus:outline-none transition-colors"
          placeholder="0"
        />
      </div>
    </div>

    <span class="text-[var(--color-text-disabled)] text-xs font-bold mt-4 shrink-0">–</span>

    <div class="flex-1">
      <label for="price-input-max" class="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
        Max (৳)
      </label>
      <div class="relative flex items-center">
        <input
          id="price-input-max"
          type="number"
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          step={STEP}
          value={inputMaxText}
          oninput={handleMaxInput}
          onblur={handleMaxBlur}
          class="w-full px-2.5 py-1.5 text-xs font-bold bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] focus:bg-[var(--color-bg-surface)] focus:border-[var(--color-brand-primary)] focus:outline-none transition-colors"
          placeholder="10000"
        />
      </div>
    </div>
  </div>

  <!-- Quick Preset Chips -->
  <div class="pt-1.5">
    <div class="flex flex-wrap gap-1.5">
      {#each PRESETS as preset}
        {@const isActive = minPrice === preset.min && maxPrice === preset.max}
        <button
          type="button"
          onclick={() => applyPreset(preset.min, preset.max)}
          class="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer select-none tap-target {isActive ? 'bg-[var(--color-brand-primary)] text-white shadow-2xs font-bold' : 'bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-default)]'}"
        >
          {preset.label}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .range-slider-input {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    pointer-events: none;
    margin: 0;
  }

  .range-slider-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--color-brand-primary, #0284c7);
    border: 2px solid #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    cursor: grab;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
  }

  .range-slider-input::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }

  .range-slider-input::-webkit-slider-thumb:active {
    cursor: grabbing;
    transform: scale(1.25);
    box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.25);
  }

  .range-slider-input::-moz-range-thumb {
    pointer-events: auto;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--color-brand-primary, #0284c7);
    border: 2px solid #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    cursor: grab;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
  }

  .range-slider-input::-moz-range-thumb:hover {
    transform: scale(1.15);
  }

  .range-slider-input::-moz-range-thumb:active {
    cursor: grabbing;
    transform: scale(1.25);
    box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.25);
  }
</style>
