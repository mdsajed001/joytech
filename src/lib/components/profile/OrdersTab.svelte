<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { Order } from '$lib/data/mockProfile';
  import {
    ContainerTruck01Icon,
    ShoppingBag01Icon,
    RefreshIcon,
    CheckmarkCircle02Icon,
    PackageIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    orders: Order[];
    isHistory?: boolean;
    onTrackOrder: (order: Order) => void;
    onReorder?: (order: Order) => void;
  }

  let { orders, isHistory = false, onTrackOrder, onReorder }: Props = $props();

  // Active Orders Sub-Tab State (Processing vs Ready to Ship vs Shipped)
  let ordersSubTab = $state<'processing' | 'ready_to_ship' | 'shipped'>('processing');

  const processingCount = $derived(orders.filter((o) => o.status === 'processing').length);
  const readyToShipCount = $derived(orders.filter((o) => o.status === 'ready_to_ship').length);
  const shippedCount = $derived(orders.filter((o) => o.status === 'shipped').length);

  const displayedOrders = $derived(
    isHistory ? orders : orders.filter((o) => o.status === ordersSubTab)
  );

  function getStatusBadgeClass(status: Order['status']): string {
    switch (status) {
      case 'delivered':
        return 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'shipped':
        return 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'ready_to_ship':
        return 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'processing':
        return 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'cancelled':
        return 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      default:
        return 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800';
    }
  }
</script>

<div class="space-y-3.5">
  {#if !isHistory}
    <!-- Full-Bleed Edge-to-Edge Active Orders 3-Stage Control Bar -->
    <div class="-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4 grid grid-cols-3 border-b border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] overflow-hidden">
      <button
        type="button"
        onclick={() => (ordersSubTab = 'processing')}
        class="h-11 sm:h-12 px-1 sm:px-3 text-[11px] sm:text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 border-b-2 {ordersSubTab === 'processing'
          ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-2xs'
          : 'bg-transparent text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'}"
      >
        <span class="truncate">Processing</span>
        <span class="px-1.5 py-0.2 text-[9.5px] sm:text-[10px] rounded-full {ordersSubTab === 'processing' ? 'bg-white/25 text-white' : 'bg-[var(--color-border-default)] text-[var(--color-text-primary)]'}">
          {processingCount}
        </span>
      </button>

      <button
        type="button"
        onclick={() => (ordersSubTab = 'ready_to_ship')}
        class="h-11 sm:h-12 px-1 sm:px-3 text-[11px] sm:text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 border-b-2 {ordersSubTab === 'ready_to_ship'
          ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-2xs'
          : 'bg-transparent text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'}"
      >
        <span class="truncate">Ready to Ship</span>
        <span class="px-1.5 py-0.2 text-[9.5px] sm:text-[10px] rounded-full {ordersSubTab === 'ready_to_ship' ? 'bg-white/25 text-white' : 'bg-[var(--color-border-default)] text-[var(--color-text-primary)]'}">
          {readyToShipCount}
        </span>
      </button>

      <button
        type="button"
        onclick={() => (ordersSubTab = 'shipped')}
        class="h-11 sm:h-12 px-1 sm:px-3 text-[11px] sm:text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 border-b-2 {ordersSubTab === 'shipped'
          ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-2xs'
          : 'bg-transparent text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'}"
      >
        <span class="truncate">Shipped</span>
        <span class="px-1.5 py-0.2 text-[9.5px] sm:text-[10px] rounded-full {ordersSubTab === 'shipped' ? 'bg-white/25 text-white' : 'bg-[var(--color-border-default)] text-[var(--color-text-primary)]'}">
          {shippedCount}
        </span>
      </button>
    </div>
  {/if}

  {#if displayedOrders.length === 0}
    <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] p-8 sm:p-10 text-center space-y-2">
      <div class="w-10 h-10 rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] flex items-center justify-center mx-auto">
        <Icon icon={ShoppingBag01Icon} size={20} />
      </div>
      <h4 class="text-sm font-black text-[var(--color-text-primary)]">
        {#if isHistory}
          No Order History
        {:else}
          No orders in {ordersSubTab === 'processing' ? 'Processing' : ordersSubTab === 'ready_to_ship' ? 'Ready to Ship' : 'Shipped'}
        {/if}
      </h4>
      <p class="text-xs text-[var(--color-text-secondary)]">
        {#if isHistory}
          Delivered and past completed orders will appear here.
        {:else}
          All active orders in this stage will appear here automatically.
        {/if}
      </p>
    </div>
  {:else}
    {#each displayedOrders as order (order.id)}
      <!-- Full-Width Modular Card with Tone-on-Tone Background Banding -->
      <div class="w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] shadow-2xs overflow-hidden transition-all hover:border-[var(--color-border-strong)]">
        <!-- Tone-on-Tone Header Band: Subtle Background -->
        <div class="px-4 py-2.5 sm:py-3 bg-[var(--color-bg-subtle)] flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
              #{order.orderNumber}
            </span>
            <span class="text-[11px] text-[var(--color-text-disabled)]">•</span>
            <span class="text-[11px] font-medium text-[var(--color-text-secondary)] truncate">
              {order.date}
            </span>
          </div>

          <!-- Boxy Status Badge -->
          <span
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-xs)] text-[10px] font-black uppercase tracking-wider border shrink-0 {getStatusBadgeClass(
              order.status
            )}"
          >
            {#if order.status === 'delivered'}
              <Icon icon={CheckmarkCircle02Icon} size={11} strokeWidth={2.5} />
            {:else if order.status === 'shipped'}
              <Icon icon={ContainerTruck01Icon} size={11} />
            {:else if order.status === 'ready_to_ship'}
              <Icon icon={PackageIcon} size={11} />
            {/if}
            <span>{order.statusLabel}</span>
          </span>
        </div>

        <!-- High-Density Items Surface: Canvas Background with Internal Padding -->
        <div class="px-4 py-3 bg-[var(--color-bg-surface)] divide-y divide-[var(--color-border-subtle)]">
          {#each order.items as item (item.id)}
            <div class="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <img
                  src={item.image}
                  alt={item.name}
                  class="w-12 h-12 rounded-[var(--radius-xs)] object-cover bg-slate-100 dark:bg-slate-800 shrink-0"
                  loading="lazy"
                />
                <div class="min-w-0">
                  <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate leading-snug">
                    {item.name}
                  </h4>
                  <p class="text-[11px] text-[var(--color-text-secondary)] mt-0.5 leading-none">
                    {item.variant} • Qty: {item.quantity}
                  </p>
                </div>
              </div>

              <div class="text-right shrink-0">
                <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
                  ৳{(item.price * item.quantity).toLocaleString('en-BD')}
                </span>
              </div>
            </div>
          {/each}
        </div>

        <!-- Tone-on-Tone Footer Band: Subtle Background with Boxy CTAs -->
        <div class="px-4 py-2.5 sm:py-3 bg-[var(--color-bg-subtle)] flex items-center justify-between gap-3">
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="text-xs font-semibold text-[var(--color-text-secondary)]">Total:</span>
            <span class="text-xs sm:text-sm font-black text-[var(--color-brand-primary)]">
              ৳{order.total.toLocaleString('en-BD')}
            </span>
            <span class="text-[11px] text-[var(--color-text-disabled)] hidden sm:inline">
              ({order.paymentMethod})
            </span>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            {#if onReorder}
              <button
                type="button"
                onclick={() => onReorder(order)}
                class="inline-flex items-center justify-center gap-1 h-8 px-2.5 sm:px-3 rounded-[var(--radius-sm)] text-xs font-bold border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all cursor-pointer"
              >
                <Icon icon={RefreshIcon} size={13} />
                <span class="hidden sm:inline">Buy Again</span>
              </button>
            {/if}

            <button
              type="button"
              onclick={() => onTrackOrder(order)}
              class="inline-flex items-center justify-center gap-1 h-8 px-3.5 rounded-[var(--radius-sm)] text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer"
            >
              <Icon icon={ContainerTruck01Icon} size={14} />
              <span>Track</span>
            </button>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
