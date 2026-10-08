<script lang="ts">
  import Icon from '../Icon.svelte';
  import type { ToastPayload } from '$lib/types';
  import {
    ShoppingBag01Icon,
    CheckmarkCircle02Icon,
    AlertCircleIcon,
    CancelCircleIcon,
    InformationCircleIcon,
    Cancel01Icon,
    ArrowRight01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    toast: ToastPayload;
    onDismiss: (id: string) => void;
  }

  let { toast, onDismiss }: Props = $props();

  const defaultDuration = 4000;
  let duration = $derived(toast.duration ?? defaultDuration);
  let isPaused = $state(false);
  let startTime = $state(Date.now());
  let remainingTime = $state(4000);
  let timeoutId: any = null;

  function startTimer() {
    startTime = Date.now();
    timeoutId = setTimeout(() => {
      onDismiss(toast.id);
    }, remainingTime);
  }

  function pauseTimer() {
    isPaused = true;
    if (timeoutId) {
      clearTimeout(timeoutId);
      remainingTime = Math.max(500, remainingTime - (Date.now() - startTime));
    }
  }

  function resumeTimer() {
    isPaused = false;
    startTimer();
  }

  $effect(() => {
    remainingTime = duration;
    startTimer();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  });

  const typeConfig = {
    cart: {
      icon: ShoppingBag01Icon,
      accentColor: '#0284C7',
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-400/30',
      gradientClass: 'from-blue-500/10 via-sky-400/5 to-transparent dark:from-blue-600/30 dark:via-sky-500/15 dark:to-transparent',
      glowShadow: 'shadow-[0_12px_36px_rgba(29,95,203,0.14)] dark:shadow-[0_14px_36px_rgba(29,95,203,0.32)]',
      defaultTitle: 'Cart Updated'
    },
    success: {
      icon: CheckmarkCircle02Icon,
      accentColor: '#10B981',
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-400/30',
      gradientClass: 'from-emerald-500/10 via-emerald-400/5 to-transparent dark:from-emerald-600/30 dark:via-emerald-500/15 dark:to-transparent',
      glowShadow: 'shadow-[0_12px_36px_rgba(16,185,129,0.14)] dark:shadow-[0_14px_36px_rgba(16,185,129,0.28)]',
      defaultTitle: 'Success'
    },
    warning: {
      icon: AlertCircleIcon,
      accentColor: '#F59E0B',
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-400/30',
      gradientClass: 'from-amber-500/10 via-amber-400/5 to-transparent dark:from-amber-600/30 dark:via-amber-500/15 dark:to-transparent',
      glowShadow: 'shadow-[0_12px_36px_rgba(245,158,11,0.14)] dark:shadow-[0_14px_36px_rgba(245,158,11,0.28)]',
      defaultTitle: 'Attention'
    },
    error: {
      icon: CancelCircleIcon,
      accentColor: '#EF4444',
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-400/30',
      gradientClass: 'from-rose-500/10 via-rose-400/5 to-transparent dark:from-rose-600/30 dark:via-rose-500/15 dark:to-transparent',
      glowShadow: 'shadow-[0_12px_36px_rgba(239,68,68,0.14)] dark:shadow-[0_14px_36px_rgba(239,68,68,0.32)]',
      defaultTitle: 'Notice'
    },
    info: {
      icon: InformationCircleIcon,
      accentColor: '#0284C7',
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-200 dark:bg-sky-500/20 dark:text-sky-400 dark:border-sky-400/30',
      gradientClass: 'from-sky-500/10 via-cyan-400/5 to-transparent dark:from-sky-600/30 dark:via-cyan-500/15 dark:to-transparent',
      glowShadow: 'shadow-[0_12px_36px_rgba(56,189,248,0.12)] dark:shadow-[0_14px_36px_rgba(56,189,248,0.25)]',
      defaultTitle: 'Information'
    }
  };

  const config = $derived(typeConfig[toast.type ?? 'info'] ?? typeConfig.info);
</script>

<div
  role="alert"
  aria-live="polite"
  class="toast-card group relative w-full overflow-hidden rounded-2xl bg-white/95 text-slate-900 border border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.12)] dark:bg-slate-950/94 dark:text-white dark:border-white/18 backdrop-blur-2xl {config.glowShadow} transition-all duration-300 pointer-events-auto select-none"
  onmouseenter={pauseTimer}
  onmouseleave={resumeTimer}
  ontouchstart={pauseTimer}
  ontouchend={resumeTimer}
>
  <!-- Full-Background Dissolving Progress Layer (Slow organic feathered sweep) -->
  <div
    class="toast-dissolve-bg absolute inset-0 pointer-events-none bg-gradient-to-r {config.gradientClass}"
    class:paused={isPaused}
    style="animation-duration: {duration}ms;"
  ></div>

  <!-- Beveled Top Specular Light Rim (Adds luxury glass physical depth) -->
  <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/60 dark:via-white/35 to-transparent pointer-events-none"></div>

  <!-- Toast Content Container -->
  <div class="relative z-10 flex items-center justify-between gap-3 p-3.5 sm:p-4">
    <!-- Left: Semantic Icon or Product Thumbnail -->
    <div class="flex items-center gap-3 min-w-0 flex-1">
      {#if toast.product?.image}
        <div class="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100 border border-slate-200/80 dark:bg-white/10 dark:border-white/15 p-1 shrink-0 overflow-hidden flex items-center justify-center">
          <img
            src={toast.product.image}
            alt={toast.product.name}
            class="w-full h-full object-contain drop-shadow-sm"
          />
        </div>
      {:else}
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl {config.iconBg} flex items-center justify-center shrink-0 toast-icon-pop">
          <Icon icon={config.icon} size={20} strokeWidth={2.2} />
        </div>
      {/if}

      <!-- Message Text -->
      <div class="flex flex-col min-w-0 pr-1">
        <span class="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-white/60 leading-none mb-1 truncate">
          {toast.title ?? config.defaultTitle}
        </span>
        <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
          {toast.message}
        </span>
      </div>
    </div>

    <!-- Right: Contextual Action Button OR Dismiss Cross -->
    <div class="flex items-center gap-1.5 shrink-0">
      {#if toast.action}
        {#if toast.action.href}
          <a
            href={toast.action.href}
            onclick={() => onDismiss(toast.id)}
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-900 dark:border-white/40 text-xs font-black shadow-sm hover:shadow active:scale-[0.98] transition-all shrink-0 cursor-pointer select-none"
          >
            <span>{toast.action.label}</span>
            <Icon icon={ArrowRight01Icon} size={13} strokeWidth={2.5} />
          </a>
        {:else if toast.action.onClick}
          <button
            type="button"
            onclick={() => {
              toast.action?.onClick?.();
              onDismiss(toast.id);
            }}
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-900 dark:border-white/40 text-xs font-black shadow-sm hover:shadow active:scale-[0.98] transition-all shrink-0 cursor-pointer select-none"
          >
            <span>{toast.action.label}</span>
            <Icon icon={ArrowRight01Icon} size={13} strokeWidth={2.5} />
          </button>
        {/if}
      {/if}

      <!-- Quick Dismiss Cross -->
      <button
        type="button"
        onclick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
        class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
      >
        <Icon icon={Cancel01Icon} size={16} strokeWidth={2.2} />
      </button>
    </div>
  </div>
</div>

<style>
  /* Snappy Spring Entry Animation */
  .toast-card {
    animation: toast-spring-in 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  @keyframes toast-spring-in {
    0% {
      opacity: 0;
      transform: translateY(-14px) scale(0.92);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* Tactile Icon Bounce Pop */
  .toast-icon-pop {
    animation: icon-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.08s both;
  }

  @keyframes icon-pop {
    0% {
      transform: scale(0.4) rotate(-15deg);
      opacity: 0;
    }
    70% {
      transform: scale(1.18) rotate(3deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  /* Full-Background Dissolving Expiration Bleed */
  .toast-dissolve-bg {
    transform-origin: left center;
    animation: bg-dissolve linear forwards;
    mask-image: linear-gradient(to right, black 70%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 70%, transparent 100%);
  }

  .toast-dissolve-bg.paused {
    animation-play-state: paused !important;
  }

  @keyframes bg-dissolve {
    0% {
      width: 100%;
      opacity: 1;
    }
    75% {
      opacity: 0.85;
    }
    100% {
      width: 0%;
      opacity: 0.15;
    }
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    .toast-card {
      animation: none !important;
    }
    .toast-icon-pop {
      animation: none !important;
    }
    .toast-dissolve-bg {
      animation: none !important;
    }
  }
</style>
