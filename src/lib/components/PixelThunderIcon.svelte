<script lang="ts">
  interface Props {
    size?: number;
    class?: string;
  }

  let { size = 18, class: className = '' }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  width={size}
  height={size}
  class="pixel-thunder {className}"
  style="shape-rendering: crispEdges; image-rendering: pixelated;"
  aria-hidden="true"
>
  <!-- Frame 1: Standard strike charge with amber shadows and top-right sparks -->
  <g class="f1">
    <!-- Amber shadow / outer edge -->
    <rect x="8" y="1" width="3" height="1" fill="#D97706" />
    <rect x="7" y="2" width="4" height="1" fill="#D97706" />
    <rect x="6" y="3" width="4" height="1" fill="#D97706" />
    <rect x="5" y="4" width="4" height="1" fill="#D97706" />
    <rect x="4" y="5" width="4" height="1" fill="#D97706" />
    <rect x="3" y="6" width="4" height="1" fill="#D97706" />
    <rect x="2" y="7" width="11" height="1" fill="#D97706" />
    <rect x="5" y="8" width="7" height="1" fill="#D97706" />
    <rect x="5" y="9" width="6" height="1" fill="#D97706" />
    <rect x="5" y="10" width="5" height="1" fill="#D97706" />
    <rect x="6" y="11" width="4" height="1" fill="#D97706" />
    <rect x="6" y="12" width="3" height="1" fill="#D97706" />
    <rect x="7" y="13" width="2" height="1" fill="#D97706" />
    <rect x="7" y="14" width="2" height="1" fill="#D97706" />
    <rect x="8" y="15" width="1" height="1" fill="#D97706" />

    <!-- Bright Yellow body -->
    <rect x="9" y="1" width="1" height="1" fill="#FACC15" />
    <rect x="8" y="2" width="2" height="1" fill="#FACC15" />
    <rect x="7" y="3" width="2" height="1" fill="#FACC15" />
    <rect x="6" y="4" width="2" height="1" fill="#FACC15" />
    <rect x="5" y="5" width="2" height="1" fill="#FACC15" />
    <rect x="4" y="6" width="2" height="1" fill="#FACC15" />
    <rect x="3" y="7" width="9" height="1" fill="#FACC15" />
    <rect x="6" y="8" width="5" height="1" fill="#FACC15" />
    <rect x="6" y="9" width="4" height="1" fill="#FACC15" />
    <rect x="6" y="10" width="3" height="1" fill="#FACC15" />
    <rect x="7" y="11" width="2" height="1" fill="#FACC15" />
    <rect x="7" y="12" width="2" height="1" fill="#FACC15" />
    <rect x="8" y="13" width="1" height="1" fill="#FACC15" />
    <rect x="8" y="14" width="1" height="1" fill="#FACC15" />

    <!-- Pure White glint / core -->
    <rect x="9" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="8" y="3" width="1" height="1" fill="#FFFFFF" />
    <rect x="7" y="4" width="1" height="1" fill="#FFFFFF" />
    <rect x="6" y="5" width="1" height="1" fill="#FFFFFF" />
    <rect x="5" y="7" width="4" height="1" fill="#FFFFFF" />
    <rect x="8" y="8" width="2" height="1" fill="#FFFFFF" />
    <rect x="7" y="9" width="2" height="1" fill="#FFFFFF" />

    <!-- Small electric sparks -->
    <rect x="13" y="2" width="1" height="1" fill="#38BDF8" />
    <rect x="1" y="9" width="1" height="1" fill="#FDE047" />
  </g>

  <!-- Frame 2: Max surge / electric white flash with outward blue sparks -->
  <g class="f2">
    <!-- Outer high voltage aura -->
    <rect x="7" y="0" width="4" height="1" fill="#FEF08A" />
    <rect x="6" y="1" width="5" height="1" fill="#FACC15" />
    <rect x="5" y="2" width="6" height="1" fill="#FACC15" />
    <rect x="4" y="3" width="6" height="1" fill="#FACC15" />
    <rect x="3" y="4" width="6" height="1" fill="#FACC15" />
    <rect x="2" y="5" width="6" height="1" fill="#FACC15" />
    <rect x="1" y="6" width="13" height="2" fill="#FACC15" />
    <rect x="5" y="8" width="7" height="1" fill="#FACC15" />
    <rect x="5" y="9" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="10" width="5" height="1" fill="#FACC15" />
    <rect x="6" y="11" width="4" height="1" fill="#FACC15" />
    <rect x="6" y="12" width="4" height="1" fill="#FACC15" />
    <rect x="7" y="13" width="3" height="1" fill="#FACC15" />
    <rect x="7" y="14" width="2" height="1" fill="#FACC15" />
    <rect x="8" y="15" width="2" height="1" fill="#FACC15" />

    <!-- Brilliant White core flash -->
    <rect x="8" y="1" width="2" height="1" fill="#FFFFFF" />
    <rect x="7" y="2" width="3" height="1" fill="#FFFFFF" />
    <rect x="6" y="3" width="3" height="1" fill="#FFFFFF" />
    <rect x="5" y="4" width="3" height="1" fill="#FFFFFF" />
    <rect x="4" y="5" width="3" height="1" fill="#FFFFFF" />
    <rect x="3" y="6" width="9" height="2" fill="#FFFFFF" />
    <rect x="7" y="8" width="3" height="1" fill="#FFFFFF" />
    <rect x="7" y="9" width="3" height="1" fill="#FFFFFF" />
    <rect x="6" y="10" width="3" height="1" fill="#FFFFFF" />
    <rect x="7" y="11" width="2" height="1" fill="#FFFFFF" />
    <rect x="7" y="12" width="2" height="1" fill="#FFFFFF" />
    <rect x="8" y="13" width="1" height="1" fill="#FFFFFF" />

    <!-- Discharging sparks -->
    <rect x="14" y="1" width="1" height="1" fill="#38BDF8" />
    <rect x="12" y="4" width="1" height="1" fill="#FFFFFF" />
    <rect x="0" y="8" width="1" height="1" fill="#38BDF8" />
    <rect x="2" y="12" width="1" height="1" fill="#38BDF8" />
    <rect x="11" y="12" width="1" height="1" fill="#FDE047" />
  </g>

  <!-- Frame 3: Arc discharge shift with side sparks -->
  <g class="f3">
    <!-- Amber edge -->
    <rect x="8" y="1" width="3" height="1" fill="#EA580C" />
    <rect x="7" y="2" width="4" height="1" fill="#EA580C" />
    <rect x="6" y="3" width="4" height="1" fill="#EA580C" />
    <rect x="5" y="4" width="4" height="1" fill="#EA580C" />
    <rect x="4" y="5" width="4" height="1" fill="#EA580C" />
    <rect x="3" y="6" width="4" height="1" fill="#EA580C" />
    <rect x="2" y="7" width="11" height="1" fill="#EA580C" />
    <rect x="5" y="8" width="7" height="1" fill="#EA580C" />
    <rect x="6" y="9" width="5" height="1" fill="#EA580C" />
    <rect x="6" y="10" width="4" height="1" fill="#EA580C" />
    <rect x="7" y="11" width="3" height="1" fill="#EA580C" />
    <rect x="7" y="12" width="3" height="1" fill="#EA580C" />
    <rect x="8" y="13" width="2" height="1" fill="#EA580C" />
    <rect x="8" y="14" width="2" height="1" fill="#EA580C" />

    <!-- Gold center -->
    <rect x="9" y="1" width="1" height="1" fill="#FBBF24" />
    <rect x="8" y="2" width="2" height="1" fill="#FBBF24" />
    <rect x="7" y="3" width="2" height="1" fill="#FBBF24" />
    <rect x="6" y="4" width="2" height="1" fill="#FBBF24" />
    <rect x="5" y="5" width="2" height="1" fill="#FBBF24" />
    <rect x="4" y="6" width="2" height="1" fill="#FBBF24" />
    <rect x="4" y="7" width="7" height="1" fill="#FBBF24" />
    <rect x="6" y="8" width="5" height="1" fill="#FBBF24" />
    <rect x="7" y="9" width="3" height="1" fill="#FBBF24" />
    <rect x="7" y="10" width="2" height="1" fill="#FBBF24" />
    <rect x="8" y="11" width="1" height="1" fill="#FBBF24" />
    <rect x="8" y="12" width="1" height="1" fill="#FBBF24" />

    <!-- White core glint -->
    <rect x="8" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="7" y="3" width="1" height="1" fill="#FFFFFF" />
    <rect x="6" y="7" width="3" height="1" fill="#FFFFFF" />
    <rect x="7" y="8" width="2" height="1" fill="#FFFFFF" />

    <!-- Spark particles jumping -->
    <rect x="13" y="5" width="1" height="1" fill="#38BDF8" />
    <rect x="1" y="5" width="1" height="1" fill="#FDE047" />
    <rect x="10" y="14" width="1" height="1" fill="#38BDF8" />
    <rect x="4" y="14" width="1" height="1" fill="#FEF08A" />
  </g>

  <!-- Frame 4: Residue glow before next cycle -->
  <g class="f4">
    <!-- Amber body -->
    <rect x="8" y="1" width="2" height="1" fill="#B45309" />
    <rect x="7" y="2" width="3" height="1" fill="#D97706" />
    <rect x="6" y="3" width="3" height="1" fill="#D97706" />
    <rect x="5" y="4" width="3" height="1" fill="#D97706" />
    <rect x="4" y="5" width="3" height="1" fill="#D97706" />
    <rect x="3" y="6" width="3" height="1" fill="#D97706" />
    <rect x="3" y="7" width="9" height="1" fill="#D97706" />
    <rect x="6" y="8" width="5" height="1" fill="#D97706" />
    <rect x="6" y="9" width="4" height="1" fill="#D97706" />
    <rect x="6" y="10" width="3" height="1" fill="#D97706" />
    <rect x="7" y="11" width="2" height="1" fill="#D97706" />
    <rect x="7" y="12" width="2" height="1" fill="#D97706" />
    <rect x="8" y="13" width="1" height="1" fill="#D97706" />
    <rect x="8" y="14" width="1" height="1" fill="#D97706" />

    <!-- Yellow core -->
    <rect x="8" y="2" width="1" height="1" fill="#FACC15" />
    <rect x="7" y="3" width="1" height="1" fill="#FACC15" />
    <rect x="6" y="4" width="1" height="1" fill="#FACC15" />
    <rect x="5" y="5" width="1" height="1" fill="#FACC15" />
    <rect x="5" y="7" width="4" height="1" fill="#FACC15" />
    <rect x="7" y="8" width="2" height="1" fill="#FACC15" />
    <rect x="7" y="9" width="1" height="1" fill="#FACC15" />
    <rect x="7" y="11" width="1" height="1" fill="#FFFFFF" />

    <!-- Single floating ember spark -->
    <rect x="12" y="8" width="1" height="1" fill="#38BDF8" />
  </g>
</svg>

<style>
  .pixel-thunder {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }

  .f1 { animation: p-thun-1 0.5s steps(1) infinite; }
  .f2 { animation: p-thun-2 0.5s steps(1) infinite; }
  .f3 { animation: p-thun-3 0.5s steps(1) infinite; }
  .f4 { animation: p-thun-4 0.5s steps(1) infinite; }

  @keyframes p-thun-1 {
    0% { opacity: 1; }
    25% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes p-thun-2 {
    0% { opacity: 0; }
    25% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes p-thun-3 {
    0% { opacity: 0; }
    50% { opacity: 1; }
    75% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes p-thun-4 {
    0% { opacity: 0; }
    75% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
