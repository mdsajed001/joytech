<script lang="ts">
  interface Props {
    size?: number;
    class?: string;
  }

  let { size = 36, class: className = '' }: Props = $props();

  // Unique instance ID so SVG gradient defs never collide
  const uid = 'st-phone-' + Math.random().toString(36).slice(2, 8);
</script>

<div
  class="sticker-phone-wrap {className}"
  style="--phone-size: {size}px;"
  role="img"
  aria-label="3D Smartphone sticker"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    class="sticker-phone-svg"
    aria-hidden="true"
  >
    <defs>
      <!-- Drop Shadow Filter for 3D Pop -->
      <filter id="{uid}-shadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#0f172a" flood-opacity="0.35" />
      </filter>

      <!-- Outer Bevel Metallic Rim Gradient -->
      <linearGradient id="{uid}-rim" x1="0.2" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stop-color="#E2E8F0" />
        <stop offset="25%" stop-color="#94A3B8" />
        <stop offset="60%" stop-color="#475569" />
        <stop offset="100%" stop-color="#1E293B" />
      </linearGradient>

      <!-- Glossy Screen Gradient -->
      <linearGradient id="{uid}-screen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0F172A" />
        <stop offset="45%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0B0F19" />
      </linearGradient>

      <!-- Glass Screen Diagonal Sheen -->
      <linearGradient id="{uid}-glare" x1="0" y1="0" x2="0.8" y2="0.9">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.45" />
        <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.12" />
        <stop offset="60%" stop-color="#38BDF8" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#2563EB" stop-opacity="0" />
      </linearGradient>

      <!-- Wallpaper Nebula Glow (Subtle Brand Color Inside Screen) -->
      <radialGradient id="{uid}-wallpaper" cx="50%" cy="65%" r="60%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.85" />
        <stop offset="50%" stop-color="#2563EB" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#1E1B4B" stop-opacity="0" />
      </radialGradient>

      <!-- Camera Lens Bezel Gradient -->
      <linearGradient id="{uid}-lens-rim" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#64748B" />
        <stop offset="50%" stop-color="#334155" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <!-- Camera Lens Glass Reflection -->
      <radialGradient id="{uid}-lens-glass" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#67E8F9" stop-opacity="0.9" />
        <stop offset="40%" stop-color="#0284C7" stop-opacity="0.7" />
        <stop offset="100%" stop-color="#082F49" />
      </radialGradient>

      <!-- Inner Die-Cut Border -->
      <linearGradient id="{uid}-border" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#F1F5F9" />
      </linearGradient>
    </defs>

    <!-- 1. White Vinyl Die-Cut Sticker Outline -->
    <rect
      x="8"
      y="3"
      width="32"
      height="42"
      rx="9.5"
      fill="url(#{uid}-border)"
      stroke="#CBD5E1"
      stroke-width="1"
      filter="url(#{uid}-shadow)"
    />

    <!-- 2. Phone Outer Chassis / Titanium Frame -->
    <rect
      x="10.5"
      y="5.5"
      width="27"
      height="37"
      rx="7.5"
      fill="url(#{uid}-rim)"
    />

    <!-- 3. Screen Bezel -->
    <rect
      x="12"
      y="7"
      width="24"
      height="34"
      rx="6"
      fill="#050811"
    />

    <!-- 4. Active Screen Display -->
    <rect
      x="12.75"
      y="7.75"
      width="22.5"
      height="32.5"
      rx="5.25"
      fill="url(#{uid}-screen)"
    />

    <!-- Screen Wallpaper Glow -->
    <rect
      x="12.75"
      y="7.75"
      width="22.5"
      height="32.5"
      rx="5.25"
      fill="url(#{uid}-wallpaper)"
    />

    <!-- 5. Diagonal Gloss Sheen -->
    <path
      d="M12.75 14 L28 7.75 L35.25 7.75 L12.75 32 Z"
      fill="url(#{uid}-glare)"
    />

    <!-- 6. Dynamic Island Pill at Top -->
    <rect
      x="20.5"
      y="9.2"
      width="7"
      height="2.3"
      rx="1.15"
      fill="#000000"
    />
    <!-- Front Camera Dot -->
    <circle cx="26" cy="10.35" r="0.65" fill="#1E293B" />

    <!-- 7. Minimal App Dock / Home Bar on Screen -->
    <rect
      x="20"
      y="37.5"
      width="8"
      height="1.2"
      rx="0.6"
      fill="#FFFFFF"
      fill-opacity="0.8"
    />

    <!-- 8. Floating Mini 3D Camera Module Accent (Top Left) -->
    <g transform="translate(14.5, 14.5)">
      <!-- Main Lens -->
      <circle cx="3" cy="3" r="2.6" fill="url(#{uid}-lens-rim)" />
      <circle cx="3" cy="3" r="2" fill="url(#{uid}-lens-glass)" />
      <circle cx="2.3" cy="2.3" r="0.75" fill="#FFFFFF" fill-opacity="0.85" />

      <!-- Secondary Lens -->
      <circle cx="3" cy="8.2" r="2.6" fill="url(#{uid}-lens-rim)" />
      <circle cx="3" cy="8.2" r="2" fill="url(#{uid}-lens-glass)" />
      <circle cx="2.3" cy="7.5" r="0.75" fill="#FFFFFF" fill-opacity="0.85" />
    </g>

    <!-- 9. Sparkle / Specular Glint Top Corner -->
    <path
      d="M32 10 L33 13 L36 14 L33 15 L32 18 L31 15 L28 14 L31 13 Z"
      fill="#FFFFFF"
      fill-opacity="0.85"
    />
  </svg>
</div>

<style>
  .sticker-phone-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--phone-size);
    height: var(--phone-size);
    flex-shrink: 0;
    transform-origin: center bottom;
    animation: phone-wiggle-5s 5s ease-in-out infinite;
    will-change: transform;
    user-select: none;
  }

  .sticker-phone-svg {
    display: block;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
  }

  /* 5-Second Attention Wiggle:
     - 0% - 88% (0s - 4.4s): Poised floating rest
     - 88% - 98% (4.4s - 4.9s): Energetic attention-grabbing wiggle burst
     - 98% - 100% (4.9s - 5.0s): Smooth settle back to rest
  */
  @keyframes phone-wiggle-5s {
    0%,
    87% {
      transform: translateY(0) rotate(0deg) scale(1);
    }
    89% {
      transform: translateY(-2px) rotate(-14deg) scale(1.12);
    }
    91% {
      transform: translateY(-3px) rotate(12deg) scale(1.14);
    }
    93% {
      transform: translateY(-2px) rotate(-10deg) scale(1.1);
    }
    95% {
      transform: translateY(-1px) rotate(8deg) scale(1.06);
    }
    97% {
      transform: translateY(0) rotate(-4deg) scale(1.02);
    }
    98.5%,
    100% {
      transform: translateY(0) rotate(0deg) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sticker-phone-wrap {
      animation: none;
    }
  }
</style>
