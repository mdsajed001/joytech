<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState } from '$lib/state.svelte';
  import {
    CrownIcon,
    SparklesIcon,
    GiftIcon,
    Tick02Icon,
    Clock01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    points?: number;
    tier?: string;
  }

  let { points = 1250, tier = 'VIP Platinum' }: Props = $props();

  const nextTierPoints = 2500;
  const progressPercent = $derived(Math.min(100, Math.round((points / nextTierPoints) * 100)));

  const perks = [
    {
      title: '5% Instant Cashback',
      desc: 'Automatic discount points credited on every phone case & charger order',
      highlight: true
    },
    {
      title: 'Free Courier Delivery',
      desc: 'Zero delivery fee across all 64 districts in Bangladesh with no minimum spend',
      highlight: true
    },
    {
      title: '2-Hour Priority Dispatch',
      desc: 'Orders are fast-tracked through warehouse packing and handed to couriers first',
      highlight: false
    },
    {
      title: 'Member-Exclusive Drops',
      desc: 'Early 24-hour access to high-demand iPhone & Samsung flagship cases',
      highlight: false
    },
    {
      title: 'Dedicated VIP Hotline',
      desc: 'Direct priority routing on WhatsApp & phone support without waiting queues',
      highlight: false
    }
  ];

  const pointsHistory = [
    {
      id: 'pt-1',
      title: 'Order #JT-9821 Completed',
      date: '18 Sep 2026',
      points: '+150',
      type: 'earned'
    },
    {
      id: 'pt-2',
      title: 'Order #JT-9410 Completed',
      date: '02 Aug 2026',
      points: '+420',
      type: 'earned'
    },
    {
      id: 'pt-3',
      title: 'Summer Gadget Promo Bonus',
      date: '15 Jun 2026',
      points: '+180',
      type: 'earned'
    },
    {
      id: 'pt-4',
      title: 'Voucher Redemption (৳500 OFF)',
      date: '20 Apr 2026',
      points: '-500',
      type: 'redeemed'
    },
    {
      id: 'pt-5',
      title: 'Account Registration Welcome Gift',
      date: '12 Jan 2024',
      points: '+500',
      type: 'earned'
    }
  ];

  function redeemVoucher(pts: number, value: number) {
    if (points >= pts) {
      cartState.showToast(`Redeemed ${pts} Pts for ৳${value} Joy Discount Voucher!`);
    } else {
      cartState.showToast(`Insufficient points. You need ${pts} Pts.`);
    }
  }
</script>

<div class="space-y-5 sm:space-y-6">
  <!-- Loyalty Hero Banner Card -->
  <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-5 sm:p-7 border border-blue-900/60 shadow-lg">
    <!-- Ambient glow decorative blobs -->
    <div class="absolute -top-16 -right-16 w-52 h-52 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-16 -left-16 w-52 h-52 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs font-black tracking-wide uppercase">
          <Icon icon={CrownIcon} size={15} />
          <span>{tier}</span>
        </div>

        <div>
          <span class="text-xs uppercase tracking-wider text-slate-300 font-bold block">Available Loyalty Balance</span>
          <div class="flex items-baseline gap-3 mt-1">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {points.toLocaleString('en-BD')} <span class="text-amber-400 text-2xl sm:text-3xl">Pts</span>
            </h2>
            <span class="text-xs text-slate-300 font-medium">≈ ৳{points} instant store credit</span>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
          Earn 1 Point for every ৳10 spent on authentic mobile accessories. Redeem your points anytime during checkout for instant discounts.
        </p>
      </div>

      <!-- Quick Redeem Action Box -->
      <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 flex flex-col gap-3 min-w-[240px] shrink-0">
        <span class="text-xs font-bold text-slate-200">Quick Reward Redemption</span>
        <button
          type="button"
          onclick={() => redeemVoucher(500, 500)}
          class="w-full h-11 px-4 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <Icon icon={GiftIcon} size={16} />
          <span>Redeem 500 Pts (৳500 OFF)</span>
        </button>
        <span class="text-[11px] text-center text-slate-300">Voucher applies instantly at checkout</span>
      </div>
    </div>

    <!-- Tier Progress Bar -->
    <div class="mt-6 pt-5 border-t border-white/10">
      <div class="flex items-center justify-between text-xs font-bold mb-2">
        <span class="text-slate-300 flex items-center gap-1.5">
          <Icon icon={SparklesIcon} size={14} class="text-amber-300" />
          Progress to Diamond Tier
        </span>
        <span class="text-amber-300">{points} / {nextTierPoints} Pts ({progressPercent}%)</span>
      </div>

      <div class="w-full h-2.5 bg-white/15 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full transition-all duration-500"
          style="width: {progressPercent}%"
        ></div>
      </div>
      <p class="text-[11px] text-slate-400 mt-2">
        Only {nextTierPoints - points} more points needed to unlock Diamond Tier (10% lifetime cashback and free tempered glass replacements).
      </p>
    </div>
  </div>

  <!-- Perks Section: Clean Divided List (No heavy nested mini-boxes) -->
  <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5 sm:p-6 shadow-xs">
    <div class="flex items-center gap-3 mb-5">
      <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
        <Icon icon={CrownIcon} size={20} />
      </div>
      <div>
        <h3 class="text-base font-black text-[var(--color-text-primary)]">
          VIP Platinum Privileges
        </h3>
        <p class="text-xs text-[var(--color-text-secondary)]">
          Exclusive benefits active on your Joy Telecom account
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 divide-y md:divide-y-0 divide-[var(--color-border-subtle)]">
      {#each perks as perk, idx}
        <div class="py-3.5 first:pt-0 flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Icon icon={Tick02Icon} size={14} strokeWidth={2.5} />
          </span>
          <div>
            <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
              {perk.title}
            </h4>
            <p class="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
              {perk.desc}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Points Activity History -->
  <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5 sm:p-6 shadow-xs">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
          <Icon icon={Clock01Icon} size={20} />
        </div>
        <div>
          <h3 class="text-base font-black text-[var(--color-text-primary)]">
            Points Ledger & Activity
          </h3>
          <p class="text-xs text-[var(--color-text-secondary)]">
            Recent point transactions and milestone awards
          </p>
        </div>
      </div>
    </div>

    <div class="divide-y divide-[var(--color-border-subtle)]">
      {#each pointsHistory as tx}
        <div class="py-3 sm:py-3.5 flex items-center justify-between gap-4">
          <div class="min-w-0">
            <p class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate">
              {tx.title}
            </p>
            <span class="text-[11px] text-[var(--color-text-secondary)]">{tx.date}</span>
          </div>

          <span
            class="text-xs sm:text-sm font-black px-2.5 py-1 rounded-lg shrink-0 {tx.type === 'earned'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'}"
          >
            {tx.points} Pts
          </span>
        </div>
      {/each}
    </div>
  </div>
</div>
