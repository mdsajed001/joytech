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
  class="pixel-fire {className}"
  style="shape-rendering: crispEdges; image-rendering: pixelated;"
  aria-hidden="true"
>
  <!-- Frame 1: Center flame peak with rising embers -->
  <g class="f1">
    <!-- Crimson outer flame silhouette -->
    <rect x="7" y="3" width="2" height="1" fill="#DC2626" />
    <rect x="6" y="4" width="4" height="1" fill="#DC2626" />
    <rect x="5" y="5" width="6" height="1" fill="#DC2626" />
    <rect x="4" y="6" width="8" height="1" fill="#DC2626" />
    <rect x="4" y="7" width="8" height="1" fill="#DC2626" />
    <rect x="3" y="8" width="10" height="1" fill="#DC2626" />
    <rect x="3" y="9" width="10" height="1" fill="#DC2626" />
    <rect x="2" y="10" width="12" height="1" fill="#DC2626" />
    <rect x="2" y="11" width="12" height="1" fill="#DC2626" />
    <rect x="3" y="12" width="10" height="1" fill="#DC2626" />
    <rect x="4" y="13" width="8" height="1" fill="#DC2626" />
    <rect x="5" y="14" width="6" height="1" fill="#B91C1C" />

    <!-- Orange flame body -->
    <rect x="7" y="4" width="2" height="1" fill="#F97316" />
    <rect x="6" y="5" width="4" height="1" fill="#F97316" />
    <rect x="5" y="6" width="6" height="1" fill="#F97316" />
    <rect x="5" y="7" width="6" height="1" fill="#F97316" />
    <rect x="4" y="8" width="8" height="1" fill="#F97316" />
    <rect x="4" y="9" width="8" height="1" fill="#F97316" />
    <rect x="3" y="10" width="10" height="1" fill="#F97316" />
    <rect x="3" y="11" width="10" height="1" fill="#F97316" />
    <rect x="4" y="12" width="8" height="1" fill="#F97316" />
    <rect x="5" y="13" width="6" height="1" fill="#EA580C" />

    <!-- Radiant Yellow Core -->
    <rect x="7" y="6" width="2" height="1" fill="#FACC15" />
    <rect x="6" y="7" width="4" height="1" fill="#FACC15" />
    <rect x="6" y="8" width="4" height="1" fill="#FACC15" />
    <rect x="5" y="9" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="10" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="11" width="6" height="1" fill="#FACC15" />
    <rect x="6" y="12" width="4" height="1" fill="#FACC15" />

    <!-- White Heat Center -->
    <rect x="7" y="8" width="2" height="1" fill="#FFFFFF" />
    <rect x="6" y="9" width="4" height="1" fill="#FFFFFF" />
    <rect x="7" y="10" width="2" height="1" fill="#FFFFFF" />

    <!-- Rising Embers -->
    <rect x="6" y="1" width="1" height="1" fill="#FACC15" />
    <rect x="10" y="2" width="1" height="1" fill="#F97316" />
    <rect x="3" y="4" width="1" height="1" fill="#EF4444" />
  </g>

  <!-- Frame 2: Left flicker, detached spark leaping -->
  <g class="f2">
    <!-- Crimson outer -->
    <rect x="6" y="3" width="2" height="1" fill="#DC2626" />
    <rect x="5" y="4" width="4" height="1" fill="#DC2626" />
    <rect x="4" y="5" width="6" height="1" fill="#DC2626" />
    <rect x="4" y="6" width="7" height="1" fill="#DC2626" />
    <rect x="3" y="7" width="9" height="1" fill="#DC2626" />
    <rect x="3" y="8" width="10" height="1" fill="#DC2626" />
    <rect x="2" y="9" width="11" height="1" fill="#DC2626" />
    <rect x="2" y="10" width="12" height="1" fill="#DC2626" />
    <rect x="3" y="11" width="11" height="1" fill="#DC2626" />
    <rect x="4" y="12" width="9" height="1" fill="#DC2626" />
    <rect x="5" y="13" width="7" height="1" fill="#DC2626" />
    <rect x="5" y="14" width="6" height="1" fill="#B91C1C" />

    <!-- Orange body -->
    <rect x="6" y="4" width="2" height="1" fill="#F97316" />
    <rect x="5" y="5" width="4" height="1" fill="#F97316" />
    <rect x="5" y="6" width="5" height="1" fill="#F97316" />
    <rect x="4" y="7" width="7" height="1" fill="#F97316" />
    <rect x="4" y="8" width="8" height="1" fill="#F97316" />
    <rect x="3" y="9" width="9" height="1" fill="#F97316" />
    <rect x="3" y="10" width="10" height="1" fill="#F97316" />
    <rect x="4" y="11" width="9" height="1" fill="#F97316" />
    <rect x="5" y="12" width="7" height="1" fill="#F97316" />
    <rect x="6" y="13" width="5" height="1" fill="#EA580C" />

    <!-- Yellow Core shifted left -->
    <rect x="6" y="6" width="3" height="1" fill="#FACC15" />
    <rect x="5" y="7" width="4" height="1" fill="#FACC15" />
    <rect x="5" y="8" width="5" height="1" fill="#FACC15" />
    <rect x="4" y="9" width="6" height="1" fill="#FACC15" />
    <rect x="4" y="10" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="11" width="5" height="1" fill="#FACC15" />
    <rect x="6" y="12" width="4" height="1" fill="#FACC15" />

    <!-- White core -->
    <rect x="6" y="8" width="3" height="1" fill="#FFFFFF" />
    <rect x="5" y="9" width="3" height="1" fill="#FFFFFF" />
    <rect x="6" y="10" width="2" height="1" fill="#FFFFFF" />

    <!-- Embers leaping upward -->
    <rect x="6" y="0" width="1" height="1" fill="#FACC15" />
    <rect x="11" y="1" width="1" height="1" fill="#F97316" />
    <rect x="9" y="3" width="1" height="1" fill="#EF4444" />
    <rect x="1" y="8" width="1" height="1" fill="#F97316" />
  </g>

  <!-- Frame 3: Right flick swirl with high secondary tongue -->
  <g class="f3">
    <!-- Crimson outer -->
    <rect x="8" y="3" width="2" height="1" fill="#DC2626" />
    <rect x="7" y="4" width="4" height="1" fill="#DC2626" />
    <rect x="6" y="5" width="6" height="1" fill="#DC2626" />
    <rect x="5" y="6" width="7" height="1" fill="#DC2626" />
    <rect x="4" y="7" width="9" height="1" fill="#DC2626" />
    <rect x="3" y="8" width="10" height="1" fill="#DC2626" />
    <rect x="3" y="9" width="11" height="1" fill="#DC2626" />
    <rect x="2" y="10" width="12" height="1" fill="#DC2626" />
    <rect x="2" y="11" width="12" height="1" fill="#DC2626" />
    <rect x="3" y="12" width="10" height="1" fill="#DC2626" />
    <rect x="4" y="13" width="8" height="1" fill="#DC2626" />
    <rect x="5" y="14" width="6" height="1" fill="#B91C1C" />

    <!-- Left secondary crest -->
    <rect x="3" y="6" width="1" height="2" fill="#DC2626" />

    <!-- Orange body -->
    <rect x="8" y="4" width="2" height="1" fill="#F97316" />
    <rect x="7" y="5" width="4" height="1" fill="#F97316" />
    <rect x="6" y="6" width="5" height="1" fill="#F97316" />
    <rect x="5" y="7" width="7" height="1" fill="#F97316" />
    <rect x="4" y="8" width="8" height="1" fill="#F97316" />
    <rect x="4" y="9" width="9" height="1" fill="#F97316" />
    <rect x="3" y="10" width="10" height="1" fill="#F97316" />
    <rect x="3" y="11" width="10" height="1" fill="#F97316" />
    <rect x="4" y="12" width="8" height="1" fill="#F97316" />
    <rect x="5" y="13" width="6" height="1" fill="#EA580C" />

    <!-- Yellow Core shifted right -->
    <rect x="7" y="6" width="3" height="1" fill="#FACC15" />
    <rect x="6" y="7" width="5" height="1" fill="#FACC15" />
    <rect x="6" y="8" width="5" height="1" fill="#FACC15" />
    <rect x="5" y="9" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="10" width="6" height="1" fill="#FACC15" />
    <rect x="6" y="11" width="5" height="1" fill="#FACC15" />
    <rect x="6" y="12" width="4" height="1" fill="#FACC15" />

    <!-- White core -->
    <rect x="7" y="8" width="3" height="1" fill="#FFFFFF" />
    <rect x="7" y="9" width="3" height="1" fill="#FFFFFF" />
    <rect x="7" y="10" width="2" height="1" fill="#FFFFFF" />

    <!-- Embers -->
    <rect x="8" y="1" width="1" height="1" fill="#FACC15" />
    <rect x="4" y="2" width="1" height="1" fill="#F97316" />
    <rect x="13" y="6" width="1" height="1" fill="#F97316" />
    <rect x="2" y="4" width="1" height="1" fill="#FDE047" />
  </g>

  <!-- Frame 4: Dual crest flare & floating embers -->
  <g class="f4">
    <!-- Crimson twin tongues -->
    <rect x="5" y="4" width="2" height="1" fill="#DC2626" />
    <rect x="9" y="4" width="2" height="1" fill="#DC2626" />
    <rect x="5" y="5" width="6" height="1" fill="#DC2626" />
    <rect x="4" y="6" width="8" height="1" fill="#DC2626" />
    <rect x="4" y="7" width="8" height="1" fill="#DC2626" />
    <rect x="3" y="8" width="10" height="1" fill="#DC2626" />
    <rect x="3" y="9" width="10" height="1" fill="#DC2626" />
    <rect x="2" y="10" width="12" height="1" fill="#DC2626" />
    <rect x="3" y="11" width="11" height="1" fill="#DC2626" />
    <rect x="4" y="12" width="9" height="1" fill="#DC2626" />
    <rect x="4" y="13" width="8" height="1" fill="#DC2626" />
    <rect x="5" y="14" width="6" height="1" fill="#B91C1C" />

    <!-- Orange body -->
    <rect x="5" y="5" width="2" height="1" fill="#F97316" />
    <rect x="9" y="5" width="2" height="1" fill="#F97316" />
    <rect x="5" y="6" width="6" height="1" fill="#F97316" />
    <rect x="5" y="7" width="6" height="1" fill="#F97316" />
    <rect x="4" y="8" width="8" height="1" fill="#F97316" />
    <rect x="4" y="9" width="8" height="1" fill="#F97316" />
    <rect x="3" y="10" width="10" height="1" fill="#F97316" />
    <rect x="4" y="11" width="9" height="1" fill="#F97316" />
    <rect x="5" y="12" width="7" height="1" fill="#F97316" />
    <rect x="5" y="13" width="6" height="1" fill="#EA580C" />

    <!-- Wide Yellow Core -->
    <rect x="6" y="7" width="4" height="1" fill="#FACC15" />
    <rect x="5" y="8" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="9" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="10" width="6" height="1" fill="#FACC15" />
    <rect x="5" y="11" width="5" height="1" fill="#FACC15" />
    <rect x="6" y="12" width="4" height="1" fill="#FACC15" />

    <!-- White core -->
    <rect x="6" y="8" width="4" height="1" fill="#FFFFFF" />
    <rect x="6" y="9" width="4" height="1" fill="#FFFFFF" />
    <rect x="7" y="10" width="2" height="1" fill="#FFFFFF" />

    <!-- Popping Sparks / Floating high embers -->
    <rect x="7" y="1" width="1" height="1" fill="#FACC15" />
    <rect x="7" y="2" width="1" height="1" fill="#F97316" />
    <rect x="12" y="2" width="1" height="1" fill="#FACC15" />
    <rect x="3" y="3" width="1" height="1" fill="#EF4444" />
  </g>
</svg>

<style>
  .pixel-fire {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }

  .f1 { animation: p-fire-1 0.52s steps(1) infinite; }
  .f2 { animation: p-fire-2 0.52s steps(1) infinite; }
  .f3 { animation: p-fire-3 0.52s steps(1) infinite; }
  .f4 { animation: p-fire-4 0.52s steps(1) infinite; }

  @keyframes p-fire-1 {
    0% { opacity: 1; }
    25% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes p-fire-2 {
    0% { opacity: 0; }
    25% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes p-fire-3 {
    0% { opacity: 0; }
    50% { opacity: 1; }
    75% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes p-fire-4 {
    0% { opacity: 0; }
    75% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
