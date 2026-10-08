<script lang="ts">
  import Icon from './Icon.svelte';
  import {
    CustomerService01Icon,
    Call02Icon,
    Cancel01Icon,
    Message01Icon,
    AiMagicIcon,
    WhatsappIcon,
    Facebook01Icon,
    ArrowRight01Icon
  } from '@hugeicons/core-free-icons';
  import { page } from '$app/stores';

  let expanded = $state(false);
  let isProductPage = $derived($page.url.pathname.startsWith('/product/'));

  function toggle() {
    expanded = !expanded;
  }

  function openJoyboyAi() {
    // Joyboy AI action trigger (can be connected to AI chat drawer / window)
    expanded = false;
  }
</script>

<div class="fixed {isProductPage ? 'bottom-24 sm:bottom-5' : 'bottom-20 sm:bottom-5'} right-4 sm:right-5 z-40 flex flex-col items-end pointer-events-auto transition-all duration-200">
  <!-- Expanded popover -->
  {#if expanded}
    <div
      class="mb-3 w-80 sm:w-84 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-2xl rounded-[var(--radius-sm)] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150"
    >
      <!-- Structured Header -->
      <div class="bg-[var(--color-bg-subtle)] px-4 py-3 border-b border-[var(--color-border-default)] flex items-center justify-between">
        <div>
          <h4 class="text-xs font-black tracking-wide uppercase text-[var(--color-text-primary)]">Need Support?</h4>
          <p class="text-[11px] text-[var(--color-text-secondary)]">Instant help from Joy Telecom & Joyboy AI</p>
        </div>
        <button
          type="button"
          onclick={() => (expanded = false)}
          class="text-[var(--color-text-disabled)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] p-1 rounded-[var(--radius-xs)] border border-transparent hover:border-[var(--color-border-default)] transition-colors tap-target flex items-center justify-center cursor-pointer"
          aria-label="Close support dialog"
        >
          <Icon icon={Cancel01Icon} size={16} />
        </button>
      </div>

      <!-- Action Items List -->
      <div class="p-3 space-y-2">
        <!-- 1. WhatsApp Support -->
        <a
          href="https://wa.me/8801700000000"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between p-2.5 rounded-[var(--radius-sm)] border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/12 transition-all group tap-target"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-[var(--radius-xs)] bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Icon icon={WhatsappIcon} size={18} color="white" />
            </div>
            <div>
              <div class="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</div>
              <div class="text-[10px] text-[var(--color-text-secondary)]">Fast response within 5 mins</div>
            </div>
          </div>
          <Icon icon={ArrowRight01Icon} size={14} class="text-[#25D366] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </a>

        <!-- 2. Messenger Support -->
        <a
          href="https://m.me/joytelecom"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between p-2.5 rounded-[var(--radius-sm)] border border-[#0084FF]/30 bg-[#0084FF]/5 hover:bg-[#0084FF]/12 transition-all group tap-target"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-[var(--radius-xs)] bg-[#0084FF] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Icon icon={Facebook01Icon} size={18} color="white" />
            </div>
            <div>
              <div class="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-[#0084FF] transition-colors">Chat on Messenger</div>
              <div class="text-[10px] text-[var(--color-text-secondary)]">Connect via Facebook Messenger</div>
            </div>
          </div>
          <Icon icon={ArrowRight01Icon} size={14} class="text-[#0084FF] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </a>

        <!-- 3. Joyboy AI Chatbot -->
        <button
          type="button"
          onclick={openJoyboyAi}
          class="w-full flex items-center justify-between p-2.5 rounded-[var(--radius-sm)] border border-[var(--color-brand-primary)]/40 bg-[var(--color-brand-primary-subtle)] hover:bg-[var(--color-brand-primary)]/15 transition-all group tap-target text-left cursor-pointer"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Icon icon={AiMagicIcon} size={18} color="white" />
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors">Joyboy AI Chatbot</span>
                <span class="px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white">⚡ AI</span>
              </div>
              <div class="text-[10px] text-[var(--color-text-secondary)]">24/7 instant order & product help</div>
            </div>
          </div>
          <Icon icon={ArrowRight01Icon} size={14} class="text-[var(--color-brand-primary)] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </button>

        <!-- 4. Direct Phone Call -->
        <a
          href="tel:+8801700000000"
          class="flex items-center justify-between p-2.5 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-subtle)] transition-all group tap-target"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-[var(--radius-xs)] bg-[var(--color-text-primary)] text-[var(--color-bg-surface)] flex items-center justify-center shrink-0 shadow-xs">
              <Icon icon={Call02Icon} size={18} />
            </div>
            <div>
              <div class="text-xs font-bold text-[var(--color-text-primary)] transition-colors">Direct Phone Call</div>
              <div class="text-[10px] text-[var(--color-text-secondary)]">+880 1700-000000 (10 AM - 10 PM)</div>
            </div>
          </div>
          <Icon icon={ArrowRight01Icon} size={14} class="text-[var(--color-text-secondary)] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>
    </div>
  {/if}

  <!-- Floating trigger button -->
  <button
    type="button"
    onclick={toggle}
    class="w-13 h-13 rounded-full bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white ring-4 ring-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center cursor-pointer tap-target group select-none relative overflow-hidden"
    aria-label="Toggle customer support menu"
    aria-expanded={expanded}
  >
    {#if expanded}
      <Icon icon={Cancel01Icon} size={24} color="white" />
    {:else}
      <div class="relative w-6 h-6 flex items-center justify-center pointer-events-none">
        <div class="absolute inset-0 flex items-center justify-center motion-headphone">
          <Icon icon={CustomerService01Icon} size={24} color="white" />
        </div>
        <div class="absolute inset-0 flex items-center justify-center motion-ai-magic">
          <Icon icon={AiMagicIcon} size={24} color="white" />
        </div>
      </div>
    {/if}
  </button>
</div>

<style>
  .motion-headphone {
    animation: headphoneCycle 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    will-change: transform, opacity;
  }

  .motion-ai-magic {
    animation: aiMagicCycle 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    will-change: transform, opacity;
  }

  @keyframes headphoneCycle {
    0%,
    64% {
      transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
      opacity: 1;
    }
    /* Radial curved exit toward top-left */
    68% {
      transform: translate3d(-10px, -24px, 0) scale(0.85) rotate(-10deg);
      opacity: 0.6;
    }
    72% {
      transform: translate3d(-34px, -34px, 0) scale(0.5) rotate(-22deg);
      opacity: 0;
    }
    /* Reposition off-screen at bottom-right while hidden */
    73%,
    90% {
      transform: translate3d(34px, 34px, 0) scale(0.5) rotate(22deg);
      opacity: 0;
    }
    /* Radial curved return from bottom-right */
    94% {
      transform: translate3d(10px, 20px, 0) scale(0.88) rotate(8deg);
      opacity: 0.7;
    }
    98%,
    100% {
      transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes aiMagicCycle {
    0%,
    66% {
      transform: translate3d(34px, 34px, 0) scale(0.5) rotate(22deg);
      opacity: 0;
    }
    /* Radial curved entry from bottom-right */
    70% {
      transform: translate3d(8px, 18px, 0) scale(0.85) rotate(10deg);
      opacity: 0.8;
    }
    73% {
      transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
      opacity: 1;
    }
    /* Gentle shimmer wobble rotation in center */
    76% {
      transform: translate3d(0, 0, 0) scale(1.08) rotate(-14deg);
      opacity: 1;
    }
    79% {
      transform: translate3d(0, 0, 0) scale(1.08) rotate(14deg);
      opacity: 1;
    }
    82% {
      transform: translate3d(0, 0, 0) scale(1.04) rotate(-6deg);
      opacity: 1;
    }
    85% {
      transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
      opacity: 1;
    }
    /* Radial curved exit toward top-left */
    89% {
      transform: translate3d(-10px, -24px, 0) scale(0.85) rotate(-10deg);
      opacity: 0.6;
    }
    93%,
    100% {
      transform: translate3d(-34px, -34px, 0) scale(0.5) rotate(-22deg);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .motion-headphone {
      animation: none;
      transform: none;
      opacity: 1;
    }
    .motion-ai-magic {
      display: none;
      animation: none;
    }
  }
</style>
