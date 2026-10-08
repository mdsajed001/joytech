<script lang="ts">
  interface Props {
    size?: number;
    class?: string;
  }

  let { size = 20, class: className = '' }: Props = $props();

  // Unique instance ID so SVG gradient defs never collide or break in hidden/duplicated containers
  const uid = 'st-fire-' + Math.random().toString(36).slice(2, 8);
</script>

<span
  class="sticker-3d-wrap {className}"
  style="--sticker-size: {size}px;"
  role="img"
  aria-label="Customer favorites 3D flame sticker"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width={size}
    height={size}
    class="sticker-3d-svg sticker-fire-svg"
    aria-hidden="true"
  >
    <defs>
      <!-- Outer Flame 3D Gradient: Crimson to Blazing Tangerine -->
      <linearGradient id="{uid}-outer" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stop-color="#FF3838" />
        <stop offset="35%" stop-color="#FF6B00" />
        <stop offset="75%" stop-color="#F97316" />
        <stop offset="100%" stop-color="#EA580C" />
      </linearGradient>

      <!-- 3D Extrusion Wall: Deep Crimson Shadow Bevel -->
      <linearGradient id="{uid}-depth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B91C1C" />
        <stop offset="60%" stop-color="#7F1D1D" />
        <stop offset="100%" stop-color="#450A0A" />
      </linearGradient>

      <!-- Mid Flame Lobe Gradient: Warm Golden Orange -->
      <linearGradient id="{uid}-mid" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stop-color="#FEF08A" />
        <stop offset="40%" stop-color="#FBBF24" />
        <stop offset="100%" stop-color="#F97316" />
      </linearGradient>

      <!-- Inner White-Hot Core Gradient -->
      <linearGradient id="{uid}-core" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="60%" stop-color="#FEF08A" />
        <stop offset="100%" stop-color="#FACC15" />
      </linearGradient>
    </defs>

    <!-- Sticker Base: Die-cut Thick White Vinyl Silhouette -->
    <g class="fire-white-border">
      <path
        d="M 18 2.5
           C 19 7 22.5 11 22.5 15.5
           C 24 13.5 25.5 11.5 26.5 11.5
           C 27 14 27.5 19 27.5 23
           C 27.5 28 23 31.5 18 31.5
           C 13 31.5 8.5 28 8.5 23
           C 8.5 19 9.5 14 9.5 12.5
           C 10.5 12.5 12.5 14.5 14 16.5
           C 14 12.5 17 7 18 2.5
           Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="4.2"
        stroke-linejoin="round"
      />
      <path
        d="M 18 4.8
           C 19 9.3 22.5 13.3 22.5 17.8
           C 24 15.8 25.5 13.8 26.5 13.8
           C 27 16.3 27.5 21.3 27.5 25.3
           C 27.5 30.3 23 33.8 18 33.8
           C 13 33.8 8.5 30.3 8.5 25.3
           C 8.5 21.3 9.5 16.3 9.5 14.8
           C 10.5 14.8 12.5 16.8 14 18.8
           C 14 14.8 17 9.3 18 4.8
           Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        stroke-width="3.6"
        stroke-linejoin="round"
      />
    </g>

    <!-- Layer 1: 3D Depth Extrusion Wall (Deep Ruby/Crimson Relief) -->
    <path
      class="fire-extrusion"
      d="M 18 4.8
         C 19 9.3 22.5 13.3 22.5 17.8
         C 24 15.8 25.5 13.8 26.5 13.8
         C 27 16.3 27.5 21.3 27.5 25.3
         C 27.5 30.3 23 33.8 18 33.8
         C 13 33.8 8.5 30.3 8.5 25.3
         C 8.5 21.3 9.5 16.3 9.5 14.8
         C 10.5 14.8 12.5 16.8 14 18.8
         C 14 14.8 17 9.3 18 4.8
         Z"
      fill="url(#{uid}-depth)"
    />

    <!-- Layer 2: Main Outer Flame Body with Vibrant 3D Gradient -->
    <path
      d="M 18 2.5
         C 19 7 22.5 11 22.5 15.5
         C 24 13.5 25.5 11.5 26.5 11.5
         C 27 14 27.5 19 27.5 23
         C 27.5 28 23 31.5 18 31.5
         C 13 31.5 8.5 28 8.5 23
         C 8.5 19 9.5 14 9.5 12.5
         C 10.5 12.5 12.5 14.5 14 16.5
         C 14 12.5 17 7 18 2.5
         Z"
      fill="url(#{uid}-outer)"
    />

    <!-- Layer 3: Middle Volumetric Flame Lobe (Layered Depth) -->
    <path
      class="fire-mid-lobe"
      d="M 18 9.5
         C 19.5 12.5 22 15.5 22 18.5
         C 22 23.5 20 26.5 18 26.5
         C 16 26.5 14 23.5 14 18.5
         C 14 15.5 16.5 12.5 18 9.5
         Z"
      fill="url(#{uid}-mid)"
    />

    <!-- Layer 4: Glowing White-Hot Core Teardrop -->
    <path
      class="fire-core-drop"
      d="M 18 16
         C 19 18 20.2 20 20.2 22
         C 20.2 24.5 19.2 25.8 18 25.8
         C 16.8 25.8 15.8 24.5 15.8 22
         C 15.8 20 17 18 18 16
         Z"
      fill="url(#{uid}-core)"
    />

    <!-- Layer 5: Glossy Specular Lacquer Sheen (Curved highlight bubble on left dome) -->
    <path
      class="fire-sheen"
      d="M 11 17
         C 10 19 10 21.5 11 23.5
         C 10.5 22 10.5 19.5 11.5 17.5
         Z"
      fill="#FFFFFF"
      opacity="0.8"
    />
    <ellipse cx="16" cy="7" rx="1.1" ry="2" transform="rotate(-15 16 7)" fill="#FFFFFF" opacity="0.65" />

    <!-- Layer 6: Animated Dancing Ember Stars -->
    <g class="fire-sparkle-1">
      <path
        d="M 25 3 Q 25 5 27 5 Q 25 5 25 7 Q 25 5 23 5 Q 25 5 25 3 Z"
        fill="#FFFFFF"
      />
      <circle cx="25" cy="5" r="0.8" fill="#FDE047" />
    </g>
    <circle class="fire-sparkle-2" cx="10" cy="8" r="1" fill="#FBBF24" />
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
    transform-origin: 18px 28px;
    animation: sticker-fire-float 2.6s ease-in-out infinite;
    will-change: transform;
    pointer-events: none;
  }

  /* Hardware-accelerated mobile-safe CSS drop shadow */
  .sticker-fire-svg {
    filter: drop-shadow(0 2px 3px rgba(220, 38, 38, 0.45)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.16));
  }

  /* 3D Flame Floating, Swaying, and Organic Stretch */
  @keyframes sticker-fire-float {
    0%, 100% {
      transform: translateY(0px) rotate(-2deg) scale(1, 1);
    }
    35% {
      transform: translateY(-2px) rotate(2deg) scale(0.97, 1.05);
    }
    70% {
      transform: translateY(-0.8px) rotate(-1.5deg) scale(1.03, 0.98);
    }
  }

  /* Hot Core Pulsing Glow */
  .fire-core-drop {
    transform-origin: 18px 22px;
    animation: fire-core-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes fire-core-pulse {
    0% {
      transform: scale(0.92);
      opacity: 0.9;
    }
    100% {
      transform: scale(1.08);
      opacity: 1;
    }
  }

  .fire-mid-lobe {
    transform-origin: 18px 20px;
    animation: fire-mid-sway 2.6s ease-in-out infinite;
  }

  @keyframes fire-mid-sway {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.04, 1.02);
    }
  }

  /* Specular Sheen Pulse */
  .fire-sheen {
    animation: fire-sheen-pulse 2.6s ease-in-out infinite;
  }

  @keyframes fire-sheen-pulse {
    0%, 65% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.95;
    }
    100% {
      opacity: 0.5;
    }
  }

  /* Dancing Ember Sparkles */
  .fire-sparkle-1 {
    transform-origin: 25px 5px;
    animation: fire-ember-dance 2.2s ease-in-out infinite;
  }

  @keyframes fire-ember-dance {
    0%, 100% {
      transform: translateY(0px) scale(0.7) rotate(0deg);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-2px) scale(1.2) rotate(45deg);
      opacity: 1;
    }
  }

  .fire-sparkle-2 {
    animation: fire-ember-float 2.8s ease-in-out infinite;
  }

  @keyframes fire-ember-float {
    0%, 100% {
      transform: translateY(0px) scale(0.8);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-2.5px) scale(1.2);
      opacity: 0.95;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sticker-3d-svg,
    .fire-core-drop,
    .fire-mid-lobe,
    .fire-sheen,
    .fire-sparkle-1,
    .fire-sparkle-2 {
      animation: none !important;
    }
  }
</style>
