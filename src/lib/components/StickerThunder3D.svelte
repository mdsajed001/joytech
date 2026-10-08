<script lang="ts">
  interface Props {
    size?: number;
    class?: string;
  }

  let { size = 20, class: className = '' }: Props = $props();

  // Unique instance ID so SVG gradient defs never collide or break in hidden/duplicated containers
  const uid = 'st-thun-' + Math.random().toString(36).slice(2, 8);
</script>

<span
  class="sticker-3d-wrap {className}"
  style="--sticker-size: {size}px;"
  role="img"
  aria-label="Flash sale 3D sticker"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width={size}
    height={size}
    class="sticker-3d-svg sticker-thunder-svg"
    aria-hidden="true"
  >
    <defs>
      <!-- Front face sunny gold 3D gradient -->
      <linearGradient id="{uid}-front" x1="0.2" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stop-color="#FFFAD0" />
        <stop offset="20%" stop-color="#FFDD00" />
        <stop offset="55%" stop-color="#F59E0B" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <!-- 3D Depth Extrusion bevel (dark amber shadow) -->
      <linearGradient id="{uid}-depth" x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stop-color="#B45309" />
        <stop offset="60%" stop-color="#78350F" />
        <stop offset="100%" stop-color="#451A03" />
      </linearGradient>

      <!-- Top ridge light facet -->
      <linearGradient id="{uid}-facet" x1="0" y1="0" x2="1" y2="0.5">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
        <stop offset="60%" stop-color="#FEF08A" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#FDE047" stop-opacity="0" />
      </linearGradient>
    </defs>

    <!-- Sticker Base: Die-cut Thick White Vinyl Silhouette -->
    <g class="thunder-white-border">
      <path
        d="M 20 4 L 9 17 H 16 L 13 31 L 25 15 H 18.5 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="4.5"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <path
        d="M 20.8 6.2 L 9.8 19.2 H 16.8 L 13.8 33.2 L 25.8 17.2 H 19.3 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="4"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </g>

    <!-- Layer 1: 3D Depth Extrusion Wall (Chunky 3D Bevel) -->
    <g class="thunder-extrusion">
      <path
        d="M 20.8 6.2 L 9.8 19.2 H 16.8 L 13.8 33.2 L 25.8 17.2 H 19.3 Z"
        fill="url(#{uid}-depth)"
      />
      <polygon points="13,31 13.8,33.2 25.8,17.2 25,15" fill="#78350F" />
      <polygon points="9,17 9.8,19.2 16.8,19.2 16,17" fill="#92400E" />
      <polygon points="18.5,15 19.3,17.2 25.8,17.2 25,15" fill="#B45309" />
    </g>

    <!-- Layer 2: Main Front Face with Radiant Gold 3D Gradient -->
    <path
      d="M 20 4 L 9 17 H 16 L 13 31 L 25 15 H 18.5 Z"
      fill="url(#{uid}-front)"
    />

    <!-- Layer 3: Left Bevel Edge Highlight (catching direct sunlight) -->
    <path
      d="M 20 4.5 L 9.8 16.5 M 16 17 L 13.5 30"
      stroke="url(#{uid}-facet)"
      stroke-width="1.3"
      stroke-linecap="round"
    />

    <!-- Layer 4: Glossy Specular Lacquer Sheen Patch -->
    <path
      class="thunder-sheen"
      d="M 19 6 L 12.5 14.5 H 15.5 L 17.8 6 Z"
      fill="#FFFFFF"
    />
    <circle cx="19.2" cy="6" r="1.1" fill="#FFFFFF" opacity="0.95" />

    <!-- Layer 5: Dynamic 4-Point Sparkle Star on Top-Right -->
    <g class="thunder-sparkle">
      <path
        d="M 28 3 Q 28 6 31 6 Q 28 6 28 9 Q 28 6 25 6 Q 28 6 28 3 Z"
        fill="#FFFFFF"
      />
      <circle cx="28" cy="6" r="1" fill="#FEF08A" />
    </g>
  </svg>
</span>

<style>
  .sticker-3d-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: var(--sticker-size);
    height: var(--sticker-size);
    flex-shrink: 0;
    line-height: 1;
  }

  .sticker-3d-svg {
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    animation: sticker-thunder-float 2.8s ease-in-out infinite;
    will-change: transform;
    pointer-events: none;
  }

  /* Hardware-accelerated mobile-safe CSS drop shadow */
  .sticker-thunder-svg {
    filter: drop-shadow(0 2px 3px rgba(217, 119, 6, 0.45)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.16));
  }

  /* 3D Floating and Tilting Wobble */
  @keyframes sticker-thunder-float {
    0%, 100% {
      transform: translateY(0px) rotate(-3deg) scale(1);
    }
    50% {
      transform: translateY(-2px) rotate(3deg) scale(1.06);
    }
  }

  /* Glossy Lacquer Sheen Gleam */
  .thunder-sheen {
    transform-origin: 16px 10px;
    animation: thunder-sheen-pulse 2.8s ease-in-out infinite;
  }

  @keyframes thunder-sheen-pulse {
    0%, 65% {
      opacity: 0.45;
      transform: scale(0.96);
    }
    80% {
      opacity: 0.95;
      transform: scale(1.05);
    }
    100% {
      opacity: 0.45;
      transform: scale(0.96);
    }
  }

  /* Sparkle Star Twinkle & Rotation */
  .thunder-sparkle {
    transform-origin: 28px 6px;
    animation: thunder-twinkle 2.8s ease-in-out infinite;
  }

  @keyframes thunder-twinkle {
    0%, 100% {
      transform: scale(0.7) rotate(0deg);
      opacity: 0.7;
    }
    45% {
      transform: scale(1.25) rotate(45deg);
      opacity: 1;
    }
    65% {
      transform: scale(0.85) rotate(90deg);
      opacity: 0.8;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sticker-3d-svg,
    .thunder-sheen,
    .thunder-sparkle {
      animation: none !important;
    }
  }
</style>
