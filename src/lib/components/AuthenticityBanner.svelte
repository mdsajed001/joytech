<script lang="ts">
  import { goto } from '$app/navigation';
  import { searchState } from '$lib/state.svelte';
  import Icon from './Icon.svelte';
  import {
    Search01Icon,
    HeadphonesIcon,
    SmartWatch01Icon,
    FlashIcon,
    UsbIcon,
    BatteryCharging01Icon,
    SmartPhone01Icon,
    Shield01Icon,
    BluetoothIcon,
    GameController01Icon,
    Navigation01Icon,
    Camera01Icon,
    VolumeHighIcon,
    BookmarkIcon,
    ComputerIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    onSearch?: (query: string) => void;
  }

  let { onSearch }: Props = $props();

  let searchQuery = $state('');
  let bannerElement: HTMLElement | null = $state(null);

  $effect(() => {
    if (!bannerElement || typeof window === 'undefined') return;

    let ticking = false;

    function updateScrollDepth() {
      if (!bannerElement) return;
      const rect = bannerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when banner enters bottom of viewport, 1 when past center
      const totalDistance = windowHeight + rect.height * 0.7;
      const currentPos = windowHeight - rect.top;
      const rawProgress = currentPos / totalDistance;
      // Clamp between 0 (far deep) and 1.15 (full foreground arrival)
      const clamped = Math.max(0, Math.min(1.2, rawProgress));

      bannerElement.style.setProperty('--scroll-depth', clamped.toFixed(4));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    }

    updateScrollDepth();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  });

  function handleMobileSearchTrigger(e: Event) {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      e.preventDefault();
      if (e.target instanceof HTMLElement) {
        e.target.blur();
      }
      searchState.openMobile();
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      searchState.openMobile();
      return;
    }
    const q = searchQuery.trim();
    if (q) {
      goto(`/search?q=${encodeURIComponent(q)}`);
      onSearch?.(q);
    }
  }

  // 14 Rich accessory items with spatial coordinates, depth multipliers, and responsive scaling
  const accessoryIcons = [
    {
      icon: HeadphonesIcon,
      label: 'Headphones',
      posClass: 'top-5 sm:top-10 left-3 sm:left-8',
      boxSize: 'w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11',
      colorClass: 'text-cyan-300/40',
      depthMult: 1.25,
      minScale: 0.25,
      maxScale: 1.2,
      minOp: 0.08,
      maxOp: 0.42,
      minBlur: 6,
      floatAnim: 'anim-float-1',
      hideClass: 'block'
    },
    {
      icon: FlashIcon,
      label: 'Fast GaN Charger',
      posClass: 'top-6 sm:top-10 right-3 sm:right-10',
      boxSize: 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10',
      colorClass: 'text-amber-300/40',
      depthMult: 1.2,
      minScale: 0.3,
      maxScale: 1.15,
      minOp: 0.08,
      maxOp: 0.4,
      minBlur: 5,
      floatAnim: 'anim-float-2',
      hideClass: 'block'
    },
    {
      icon: SmartWatch01Icon,
      label: 'Smartwatch',
      posClass: 'top-[44%] -translate-y-1/2 right-3 sm:right-8',
      boxSize: 'w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10',
      colorClass: 'text-emerald-300/40',
      depthMult: 1.25,
      minScale: 0.25,
      maxScale: 1.2,
      minOp: 0.08,
      maxOp: 0.4,
      minBlur: 6,
      floatAnim: 'anim-float-4',
      hideClass: 'block'
    },
    {
      icon: SmartPhone01Icon,
      label: 'Smartphone Armor Case',
      posClass: 'top-[44%] -translate-y-1/2 left-3 sm:left-8',
      boxSize: 'w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10',
      colorClass: 'text-blue-300/35',
      depthMult: 1.15,
      minScale: 0.25,
      maxScale: 1.15,
      minOp: 0.08,
      maxOp: 0.38,
      minBlur: 6,
      floatAnim: 'anim-float-3',
      hideClass: 'block'
    },
    {
      icon: UsbIcon,
      label: 'Braided USB Cable',
      posClass: 'bottom-20 sm:bottom-16 left-5 sm:left-16',
      boxSize: 'w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9',
      colorClass: 'text-indigo-300/35',
      depthMult: 1.1,
      minScale: 0.3,
      maxScale: 1.1,
      minOp: 0.08,
      maxOp: 0.35,
      minBlur: 5,
      floatAnim: 'anim-float-2',
      hideClass: 'block'
    },
    {
      icon: BatteryCharging01Icon,
      label: 'MagSafe Power Bank',
      posClass: 'bottom-20 sm:bottom-16 right-5 sm:right-16',
      boxSize: 'w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10',
      colorClass: 'text-sky-300/35',
      depthMult: 1.15,
      minScale: 0.25,
      maxScale: 1.15,
      minOp: 0.08,
      maxOp: 0.38,
      minBlur: 6,
      floatAnim: 'anim-float-1',
      hideClass: 'block'
    },
    {
      icon: Shield01Icon,
      label: 'Screen Shield',
      posClass: 'top-5 right-[24%]',
      boxSize: 'w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9',
      colorClass: 'text-teal-300/30',
      depthMult: 0.95,
      minScale: 0.2,
      maxScale: 1.0,
      minOp: 0.05,
      maxOp: 0.32,
      minBlur: 7,
      floatAnim: 'anim-float-3',
      hideClass: 'hidden sm:block'
    },
    {
      icon: BluetoothIcon,
      label: 'TWS Wireless Earbuds',
      posClass: 'top-5 left-[24%]',
      boxSize: 'w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9',
      colorClass: 'text-violet-300/30',
      depthMult: 0.9,
      minScale: 0.2,
      maxScale: 0.95,
      minOp: 0.05,
      maxOp: 0.3,
      minBlur: 7,
      floatAnim: 'anim-float-4',
      hideClass: 'hidden sm:block'
    },
    {
      icon: GameController01Icon,
      label: 'Gaming Triggers',
      posClass: 'top-26 left-[17%]',
      boxSize: 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10',
      colorClass: 'text-rose-300/30',
      depthMult: 1.3,
      minScale: 0.25,
      maxScale: 1.2,
      minOp: 0.06,
      maxOp: 0.35,
      minBlur: 6,
      floatAnim: 'anim-float-1',
      hideClass: 'hidden md:block'
    },
    {
      icon: Navigation01Icon,
      label: 'Car Phone Mount',
      posClass: 'top-26 right-[17%]',
      boxSize: 'w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9',
      colorClass: 'text-orange-300/30',
      depthMult: 1.2,
      minScale: 0.25,
      maxScale: 1.15,
      minOp: 0.06,
      maxOp: 0.35,
      minBlur: 5,
      floatAnim: 'anim-float-2',
      hideClass: 'hidden md:block'
    },
    {
      icon: Camera01Icon,
      label: 'Lens Protector',
      posClass: 'bottom-26 left-[22%]',
      boxSize: 'w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9',
      colorClass: 'text-pink-300/30',
      depthMult: 0.85,
      minScale: 0.2,
      maxScale: 0.95,
      minOp: 0.05,
      maxOp: 0.3,
      minBlur: 8,
      floatAnim: 'anim-float-3',
      hideClass: 'hidden lg:block'
    },
    {
      icon: VolumeHighIcon,
      label: 'Bluetooth Speaker',
      posClass: 'bottom-26 right-[22%]',
      boxSize: 'w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9',
      colorClass: 'text-cyan-300/30',
      depthMult: 1.05,
      minScale: 0.25,
      maxScale: 1.05,
      minOp: 0.05,
      maxOp: 0.32,
      minBlur: 6,
      floatAnim: 'anim-float-4',
      hideClass: 'hidden lg:block'
    },
    {
      icon: BookmarkIcon,
      label: 'Magnetic Ring Stand',
      posClass: 'bottom-6 left-[33%]',
      boxSize: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
      colorClass: 'text-yellow-300/25',
      depthMult: 0.8,
      minScale: 0.2,
      maxScale: 0.85,
      minOp: 0.04,
      maxOp: 0.25,
      minBlur: 8,
      floatAnim: 'anim-float-1',
      hideClass: 'hidden xl:block'
    },
    {
      icon: ComputerIcon,
      label: 'USB-C Dock / Hub',
      posClass: 'bottom-6 right-[33%]',
      boxSize: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
      colorClass: 'text-slate-300/25',
      depthMult: 0.8,
      minScale: 0.2,
      maxScale: 0.85,
      minOp: 0.04,
      maxOp: 0.25,
      minBlur: 8,
      floatAnim: 'anim-float-2',
      hideClass: 'hidden xl:block'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      label: 'Follow Joy Telecom on Facebook',
      href: 'https://facebook.com/joytelecombd',
      bgClass: 'bg-[#1877F2]',
      svgPath:
        'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
      name: 'WhatsApp',
      label: 'Chat with Joy Telecom on WhatsApp',
      href: 'https://wa.me/8801700000000',
      bgClass: 'bg-[#25D366]',
      svgPath:
        'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'
    },
    {
      name: 'Instagram',
      label: 'Follow Joy Telecom on Instagram',
      href: 'https://instagram.com/joytelecombd',
      bgClass: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]',
      svgPath:
        'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
      name: 'YouTube',
      label: 'Watch Joy Telecom on YouTube',
      href: 'https://youtube.com/@joytelecombd',
      bgClass: 'bg-[#FF0000]',
      svgPath:
        'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    }
  ];
</script>

<section
  bind:this={bannerElement}
  class="relative pt-16 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-[#0B111E] to-[#0F2557] text-white"
  style="--scroll-depth: 0.35;"
>
  <!-- Background Floating Accessory Icons with Bidirectional Real-Time Scroll-to-Depth 3D Parallax -->
  <div class="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
    {#each accessoryIcons as item}
      <div
        class="parallax-icon-wrapper {item.posClass} {item.hideClass}"
        style="
          --depth-mult: {item.depthMult};
          --min-scale: {item.minScale};
          --max-scale: {item.maxScale};
          --min-op: {item.minOp};
          --max-op: {item.maxOp};
          --min-blur: {item.minBlur}px;
        "
      >
        <div class="ambient-float {item.floatAnim}">
          <div class="{item.boxSize} flex items-center justify-center {item.colorClass} drop-shadow-[0_0_14px_rgba(56,189,248,0.28)]">
            <Icon icon={item.icon} size="100%" strokeWidth={2} />
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

    <!-- Eyebrow -->
    <span class="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
      Authentic Accessories
    </span>

    <!-- Headline -->
    <h2 class="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 tracking-tight">
      Find Your Perfect Accessory
    </h2>

    <!-- Subline -->
    <p class="text-sm sm:text-base text-white/70 leading-relaxed mb-10 max-w-md">
      Official brands. Real stock.
    </p>

    <!-- Search form -->
    <form
      onsubmit={handleSubmit}
      class="w-full max-w-2xl flex flex-col md:flex-row items-stretch gap-3 md:gap-0"
    >
      <!-- Input -->
      <div class="relative flex-1">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
          <Icon icon={Search01Icon} size={18} />
        </span>
        <input
          type="text"
          bind:value={searchQuery}
          onfocus={handleMobileSearchTrigger}
          onclick={handleMobileSearchTrigger}
          placeholder="Search phones, chargers, cases..."
          class="w-full min-h-[52px] pl-12 pr-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm font-medium outline-none transition-all duration-150 focus:bg-white/15 focus:border-white/40 rounded-full md:rounded-l-full md:rounded-r-none cursor-pointer md:cursor-text"
        />
      </div>

      <!-- Search button -->
      <button
        type="submit"
        onclick={handleMobileSearchTrigger}
        class="min-h-[52px] px-7 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-black tracking-wide transition-colors duration-150 shrink-0 cursor-pointer rounded-full md:rounded-l-none md:rounded-r-full w-full md:w-auto"
      >
        Search
      </button>
    </form>

  </div>

  <!-- Floating Social Badges (Half In, Half Out across bottom seam) -->
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex items-center justify-center gap-3.5 sm:gap-6"
  >
    {#each socialLinks as social}
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        title={social.label}
        class="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-4 ring-white shadow-xl hover:shadow-2xl flex items-center justify-center {social.bgClass} transition-all duration-200 hover:scale-110 hover:-translate-y-1 active:scale-95 group select-none"
      >
        <svg
          viewBox="0 0 24 24"
          class="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d={social.svgPath} />
        </svg>
      </a>
    {/each}
  </div>
</section>

<style>
  /* Real-Time Scroll-to-Depth Parallax Engine */
  .parallax-icon-wrapper {
    position: absolute;
    pointer-events: none;
    user-select: none;
    /* Calculated real-time depth factor based on user scroll position */
    --effective-p: clamp(0, calc(var(--scroll-depth, 0.4) * var(--depth-mult, 1)), 1.25);
    transform: scale(calc(var(--min-scale) + (var(--max-scale) - var(--min-scale)) * var(--effective-p))) translateZ(0);
    opacity: clamp(0, calc(var(--min-op) + (var(--max-op) - var(--min-op)) * var(--effective-p)), 0.48);
    filter: blur(calc(var(--min-blur) * (1 - min(1, var(--effective-p)))));
    will-change: transform, opacity, filter;
    transition:
      transform 0.08s ease-out,
      opacity 0.08s ease-out,
      filter 0.08s ease-out;
  }

  /* Ambient Multi-Axis Continuous Drift */
  .ambient-float {
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform;
  }

  .anim-float-1 {
    animation: float-drift-1 8s ease-in-out infinite alternate;
  }
  .anim-float-2 {
    animation: float-drift-2 10.5s ease-in-out infinite alternate;
  }
  .anim-float-3 {
    animation: float-drift-3 12s ease-in-out infinite alternate;
  }
  .anim-float-4 {
    animation: float-drift-4 9.5s ease-in-out infinite alternate;
  }

  @keyframes float-drift-1 {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-11px) translateX(6px) rotate(5deg);
    }
    100% {
      transform: translateY(5px) translateX(-5px) rotate(-3deg);
    }
  }

  @keyframes float-drift-2 {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(12px) translateX(-7px) rotate(-6deg);
    }
    100% {
      transform: translateY(-7px) translateX(6px) rotate(4deg);
    }
  }

  @keyframes float-drift-3 {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-9px) translateX(-8px) rotate(7deg);
    }
    100% {
      transform: translateY(8px) translateX(8px) rotate(-5deg);
    }
  }

  @keyframes float-drift-4 {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(10px) translateX(8px) rotate(-4deg);
    }
    100% {
      transform: translateY(-10px) translateX(-6px) rotate(6deg);
    }
  }

  /* Accessibility: Prefers Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .parallax-icon-wrapper {
      transition: none !important;
      opacity: 0.3 !important;
      transform: scale(1) !important;
      filter: none !important;
    }
    .ambient-float {
      animation: none !important;
      transform: none !important;
    }
  }
</style>
