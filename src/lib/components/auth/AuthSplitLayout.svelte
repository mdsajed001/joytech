<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    ArrowLeft01Icon,
    HeadphonesIcon,
    SmartPhone01Icon,
    SmartWatchIcon,
    BatteryCharging01Icon,
    UsbIcon,
    Gamepad01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    children: Snippet;
    onBack?: () => void;
  }

  let { children, onBack }: Props = $props();

  let isInputFocused = $state(false);
  let blurTimeout: ReturnType<typeof setTimeout> | null = null;

  function handleBack() {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  }

  function handleFocusIn(e: FocusEvent) {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
      blurTimeout = null;
    }
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      isInputFocused = true;
    }
  }

  function handleFocusOut() {
    if (blurTimeout) clearTimeout(blurTimeout);
    blurTimeout = setTimeout(() => {
      const active = document.activeElement;
      if (!active || !(active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
        isInputFocused = false;
      }
    }, 80);
  }
</script>

<div class="min-h-screen w-full flex flex-col bg-[var(--color-bg-canvas)]">
  
  <!-- ============================================== -->
  <!-- DESKTOP SPLIT VIEW (lg:grid >= 1024px)         -->
  <!-- ============================================== -->
  <div class="hidden lg:grid grid-cols-2 min-h-screen">
    
    <!-- LEFT COLUMN: Minimal Tech Brand Visuals (Desktop only) -->
    <div class="relative overflow-hidden bg-gradient-to-br from-[#0066FF] via-[#0055D4] to-[#003E9E] text-white flex items-center justify-center p-12 select-none">
      
      <!-- Ambient Animated White Bubbles -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
        <div class="bubble bubble-4"></div>
        <div class="bubble bubble-5"></div>
      </div>

      <!-- Floating Tech Category Icons -->
      <div class="pointer-events-none absolute inset-0">
        <!-- Headphones -->
        <div class="floating-icon icon-1 top-[15%] left-[16%] text-white/20">
          <Icon icon={HeadphonesIcon} size={48} strokeWidth={1.5} />
        </div>
        <!-- Smart Watch -->
        <div class="floating-icon icon-2 top-[20%] right-[18%] text-white/25">
          <Icon icon={SmartWatchIcon} size={44} strokeWidth={1.5} />
        </div>
        <!-- Smart Phone -->
        <div class="floating-icon icon-3 bottom-[26%] left-[15%] text-white/20">
          <Icon icon={SmartPhone01Icon} size={50} strokeWidth={1.5} />
        </div>
        <!-- Fast Charger / Battery -->
        <div class="floating-icon icon-4 top-[48%] right-[12%] text-white/25">
          <Icon icon={BatteryCharging01Icon} size={46} strokeWidth={1.5} />
        </div>
        <!-- USB / Cable -->
        <div class="floating-icon icon-5 bottom-[16%] left-[30%] text-white/20">
          <Icon icon={UsbIcon} size={42} strokeWidth={1.5} />
        </div>
        <!-- Gamepad -->
        <div class="floating-icon icon-6 bottom-[18%] right-[24%] text-white/20">
          <Icon icon={Gamepad01Icon} size={40} strokeWidth={1.5} />
        </div>
      </div>

      <!-- Centered Minimal Bold Branding -->
      <div class="relative z-10 text-center">
        <a href="/" class="inline-flex flex-col items-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-transform">
          <img src="/Joy%20tech.svg" alt="Joy Telecom" class="w-24 h-24 md:w-32 md:h-32 object-contain brightness-0 invert" />
          <h1 class="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white drop-shadow-md">
            JOYTECH
          </h1>
        </a>
      </div>
    </div>

    <!-- RIGHT COLUMN: Centered Auth Form (Desktop) -->
    <div class="flex flex-col justify-between p-8 lg:p-12 bg-[var(--color-bg-surface)] min-h-screen">
      
      <!-- Top Navigation Bar -->
      <div class="flex items-center justify-between w-full max-w-md mx-auto mb-8">
        <button 
          type="button" 
          onclick={handleBack}
          aria-label="Go back"
          class="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-2xs hover:bg-[var(--color-bg-subtle)] active:scale-95 transition-all cursor-pointer"
        >
          <Icon icon={ArrowLeft01Icon} size={20} class="text-[var(--color-text-primary)]" />
        </button>
      </div>

      <!-- Main Form Container -->
      <div class="w-full max-w-md mx-auto my-auto py-6">
        {@render children()}
      </div>

      <!-- Desktop Bottom Help Reference -->
      <div class="w-full max-w-md mx-auto text-center pt-6 pb-2">
        <p class="text-[11px] font-medium text-[var(--color-text-tertiary)]">
          Need help? <a href="/contact" class="text-[var(--color-brand-primary)] font-semibold hover:underline">Contact Customer Support</a>
        </p>
      </div>

    </div>

  </div>

  <!-- ============================================== -->
  <!-- MOBILE VIEW (< 1024px): Canopy + Sliding Sheet -->
  <!-- ============================================== -->
  <div 
    class="flex flex-col lg:hidden min-h-screen bg-gradient-to-br from-[#0066FF] via-[#0055D4] to-[#003E9E] relative overflow-hidden"
    onfocusin={handleFocusIn}
    onfocusout={handleFocusOut}
  >
    <!-- TOP MOBILE BLUE CANOPY -->
    <div 
      class="relative overflow-hidden text-white select-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 z-0 {isInputFocused ? 'h-16' : 'h-48'}"
    >
      <!-- Ambient Animated White Bubbles for Mobile -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="bubble bubble-m1"></div>
        <div class="bubble bubble-m2"></div>
        <div class="bubble bubble-m3"></div>
      </div>

      <!-- Floating Tech Category Icons for Mobile -->
      <div class="pointer-events-none absolute inset-0 transition-opacity duration-200 {isInputFocused ? 'opacity-0' : 'opacity-100'}">
        <div class="floating-icon icon-1 top-[18%] left-[10%] text-white/20">
          <Icon icon={HeadphonesIcon} size={30} strokeWidth={1.5} />
        </div>
        <div class="floating-icon icon-2 top-[20%] right-[12%] text-white/25">
          <Icon icon={SmartWatchIcon} size={28} strokeWidth={1.5} />
        </div>
        <div class="floating-icon icon-3 bottom-[26%] left-[28%] text-white/20">
          <Icon icon={SmartPhone01Icon} size={32} strokeWidth={1.5} />
        </div>
        <div class="floating-icon icon-4 bottom-[22%] right-[26%] text-white/20">
          <Icon icon={BatteryCharging01Icon} size={26} strokeWidth={1.5} />
        </div>
      </div>

      <!-- Top Nav Bar: Back Button & JOYTECH Logo -->
      <div class="relative z-10 flex items-center justify-between px-4 h-full">
        <button 
          type="button" 
          onclick={handleBack}
          aria-label="Go back"
          class="w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-xs border border-white/20 shadow-xs transition-all cursor-pointer"
        >
          <Icon icon={ArrowLeft01Icon} size={18} class="text-white" />
        </button>

        <a href="/" class="text-xl font-black tracking-tight text-white drop-shadow-xs transition-all flex flex-col items-center gap-1.5 {isInputFocused ? 'scale-90' : 'scale-100'}">
          <img src="/Joy%20tech.svg" alt="Joy Telecom" class="w-8 h-8 object-contain brightness-0 invert" />
          JOYTECH
        </a>

        <div class="w-9"></div> <!-- Spacer for symmetry -->
      </div>
    </div>

    <!-- BOTTOM SLIDING FORM CONTAINER (Flush straight boundary, top-aligned content) -->
    <div 
      class="flex-1 flex flex-col justify-between bg-[var(--color-bg-surface)] rounded-none shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border-t border-[var(--color-border-subtle)] px-5 pt-4 pb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto {isInputFocused ? '-translate-y-2' : 'translate-y-0'}"
    >
      <!-- Main Form Container: Top-aligned to redline, surplus space pushed to bottom -->
      <div class="w-full max-w-md mx-auto mt-1 mb-auto">
        {@render children()}
      </div>

      <!-- Mobile Footer Help -->
      <div class="w-full max-w-md mx-auto text-center pt-4 pb-1">
        <p class="text-[11px] font-medium text-[var(--color-text-tertiary)]">
          Need help? <a href="/contact" class="text-[var(--color-brand-primary)] font-semibold hover:underline">Contact Customer Support</a>
        </p>
      </div>
    </div>

  </div>

</div>

<style>
  /* Ambient White Bubbles */
  .bubble {
    position: absolute;
    border-radius: 9999px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%);
    backdrop-filter: blur(2px);
    pointer-events: none;
  }

  .bubble-1 {
    width: 240px;
    height: 240px;
    top: 5%;
    left: 20%;
    animation: floatBubble1 16s ease-in-out infinite alternate;
  }

  .bubble-2 {
    width: 180px;
    height: 180px;
    top: 60%;
    left: 10%;
    animation: floatBubble2 20s ease-in-out infinite alternate;
  }

  .bubble-3 {
    width: 280px;
    height: 280px;
    bottom: 5%;
    right: 15%;
    animation: floatBubble1 18s ease-in-out infinite alternate-reverse;
  }

  .bubble-4 {
    width: 120px;
    height: 120px;
    top: 35%;
    right: 25%;
    animation: floatBubble2 14s ease-in-out infinite alternate;
  }

  .bubble-5 {
    width: 160px;
    height: 160px;
    top: 15%;
    right: 5%;
    animation: floatBubble1 22s ease-in-out infinite alternate-reverse;
  }

  /* Mobile specific ambient bubbles */
  .bubble-m1 {
    width: 140px;
    height: 140px;
    top: -20px;
    left: 8%;
    animation: floatBubble1 12s ease-in-out infinite alternate;
  }

  .bubble-m2 {
    width: 110px;
    height: 110px;
    bottom: -15px;
    right: 10%;
    animation: floatBubble2 14s ease-in-out infinite alternate;
  }

  .bubble-m3 {
    width: 70px;
    height: 70px;
    top: 35%;
    right: 40%;
    animation: floatBubble1 10s ease-in-out infinite alternate-reverse;
  }

  @keyframes floatBubble1 {
    0% {
      transform: translateY(0px) translateX(0px) scale(1);
    }
    50% {
      transform: translateY(-24px) translateX(12px) scale(1.06);
    }
    100% {
      transform: translateY(16px) translateX(-16px) scale(0.96);
    }
  }

  @keyframes floatBubble2 {
    0% {
      transform: translateY(0px) translateX(0px) scale(1);
    }
    50% {
      transform: translateY(20px) translateX(-12px) scale(1.04);
    }
    100% {
      transform: translateY(-16px) translateX(12px) scale(0.94);
    }
  }

  /* Floating Accessory Icons */
  .floating-icon {
    position: absolute;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  }

  .icon-1 { animation: floatIcon1 12s ease-in-out infinite alternate; }
  .icon-2 { animation: floatIcon2 14s ease-in-out infinite alternate; }
  .icon-3 { animation: floatIcon1 16s ease-in-out infinite alternate-reverse; }
  .icon-4 { animation: floatIcon2 13s ease-in-out infinite alternate-reverse; }
  .icon-5 { animation: floatIcon1 15s ease-in-out infinite alternate; }
  .icon-6 { animation: floatIcon2 17s ease-in-out infinite alternate-reverse; }

  @keyframes floatIcon1 {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-14px) rotate(4deg);
    }
    100% {
      transform: translateY(10px) rotate(-4deg);
    }
  }

  @keyframes floatIcon2 {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(14px) rotate(-5deg);
    }
    100% {
      transform: translateY(-12px) rotate(3deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bubble, .floating-icon {
      animation: none !important;
    }
  }
</style>
