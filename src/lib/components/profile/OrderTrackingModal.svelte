<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { Order } from '$lib/data/mockProfile';
  import {
    Cancel01Icon,
    Tick02Icon,
    ContainerTruck01Icon,
    Clock01Icon,
    Location01Icon,
    Copy01Icon
  } from '@hugeicons/core-free-icons';
  import { fade, fly } from 'svelte/transition';

  interface Props {
    order: Order | null;
    isOpen: boolean;
    onClose: () => void;
  }

  let { order, isOpen, onClose }: Props = $props();

  let copied = $state(false);

  function copyTrackingNumber(num: string) {
    navigator.clipboard?.writeText(num);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen && order}
  <div
    class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
    role="dialog"
    aria-modal="true"
  >
    <!-- Backdrop Scrim -->
    <button
      type="button"
      aria-label="Close modal backdrop"
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity cursor-default border-none w-full h-full"
      onclick={onClose}
      transition:fade={{ duration: 200 }}
    ></button>

    <!-- Modal Card -->
    <div
      class="relative w-full sm:max-w-lg bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] rounded-t-[var(--radius-md)] sm:rounded-[var(--radius-md)] shadow-2xl border border-[var(--color-border-default)] z-10 overflow-hidden max-h-[90vh] flex flex-col"
      transition:fly={{ y: 40, duration: 250 }}
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]/50">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-primary)]">
            Live Courier Tracking
          </span>
          <h2 class="text-lg font-black text-[var(--color-text-primary)]">
            Order #{order.orderNumber}
          </h2>
        </div>
        <button
          type="button"
          onclick={onClose}
          class="p-2 rounded-[var(--radius-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close tracking modal"
        >
          <Icon icon={Cancel01Icon} size={20} />
        </button>
      </div>

      <!-- Scrollable Content -->
      <div class="p-5 overflow-y-auto space-y-5 flex-1 [scrollbar-width:thin]">
        <!-- Courier Info Banner -->
        <div class="p-4 rounded-[var(--radius-sm)] bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex flex-col gap-2.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white flex items-center justify-center shadow-xs">
                <Icon icon={ContainerTruck01Icon} size={18} />
              </div>
              <div>
                <span class="text-xs font-semibold text-[var(--color-text-secondary)] block">Carrier Service</span>
                <span class="text-sm font-black text-[var(--color-text-primary)]">{order.courierName}</span>
              </div>
            </div>

            <span class="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white shadow-xs">
              {order.statusLabel}
            </span>
          </div>

          <div class="flex flex-wrap items-center justify-between pt-2.5 border-t border-blue-200/50 dark:border-blue-900/40 text-xs">
            <div class="flex items-center gap-1.5 font-medium">
              <span class="text-[var(--color-text-secondary)]">Waybill:</span>
              <span class="font-mono font-bold text-[var(--color-text-primary)]">{order.trackingNumber}</span>
              <button
                type="button"
                onclick={() => copyTrackingNumber(order.trackingNumber)}
                class="ml-1 text-[var(--color-brand-primary)] hover:opacity-80 transition-opacity p-1 cursor-pointer"
                title="Copy tracking number"
              >
                <Icon icon={Copy01Icon} size={14} />
              </button>
              {#if copied}
                <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold ml-1 animate-pulse">Copied!</span>
              {/if}
            </div>

            <div class="flex items-center gap-1.5 font-medium">
              <Icon icon={Clock01Icon} size={14} class="text-[var(--color-brand-primary)]" />
              <span class="text-[var(--color-text-secondary)]">ETA: <strong class="text-[var(--color-text-primary)]">{order.estimatedDelivery}</strong></span>
            </div>
          </div>
        </div>

        <!-- 6-Stage Timeline Stepper -->
        <div class="pt-1">
          <h3 class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
            Shipment Milestone History
          </h3>

          <div class="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--color-border-default)]">
            {#each order.stages as stage, i}
              {@const isDone = stage.completed}
              {@const isCurrent = stage.current}

              <div class="relative flex items-start gap-3">
                <!-- Milestone Indicator -->
                <div
                  class="absolute -left-6 w-6 h-6 rounded-full flex items-center justify-center transition-all {isDone
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : isCurrent
                      ? 'bg-[var(--color-brand-primary)] text-white ring-4 ring-blue-100 dark:ring-blue-900/60 shadow-xs animate-pulse'
                      : 'bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-default)] text-[var(--color-text-muted)]'}"
                >
                  {#if isDone}
                    <Icon icon={Tick02Icon} size={13} strokeWidth={2.5} />
                  {:else if isCurrent}
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  {:else}
                    <div class="w-1.5 h-1.5 rounded-full bg-[var(--color-border-default)]"></div>
                  {/if}
                </div>

                <!-- Stage Details -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-sm font-bold {isCurrent ? 'text-[var(--color-brand-primary)]' : isDone ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}">
                      {stage.label}
                    </span>
                    {#if stage.timestamp}
                      <span class="text-[11px] text-[var(--color-text-muted)] font-medium">
                        {stage.timestamp}
                      </span>
                    {/if}
                  </div>
                  <p class="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Destination Address Block -->
        <div class="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs">
          <div class="p-2 rounded-[var(--radius-xs)] bg-[var(--color-bg-surface)] text-[var(--color-brand-primary)] border border-[var(--color-border-subtle)] shadow-2xs flex-shrink-0">
            <Icon icon={Location01Icon} size={16} />
          </div>
          <div>
            <span class="font-bold text-[var(--color-text-primary)] block">Delivery Address</span>
            <span class="text-[var(--color-text-secondary)] mt-0.5 block leading-relaxed">{order.deliveryAddress}</span>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]/30 flex justify-end">
        <button
          type="button"
          onclick={onClose}
          class="w-full sm:w-auto h-10 px-6 rounded-[var(--radius-sm)] text-xs font-bold uppercase tracking-wider bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  </div>
{/if}
