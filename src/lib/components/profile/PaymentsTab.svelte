<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import PaymentGatewayLogo from '$lib/components/checkout/PaymentGatewayLogo.svelte';
  import { cartState } from '$lib/state.svelte';
  import {
    CreditCardIcon,
    Add01Icon,
    Tick02Icon,
    Delete02Icon,
    Shield01Icon,
    CheckmarkBadge01Icon,
    SmartPhone01Icon
  } from '@hugeicons/core-free-icons';

  export interface SavedPaymentMethod {
    id: string;
    type: 'mobile_wallet' | 'card';
    provider: 'bKash' | 'Nagad' | 'Visa' | 'Mastercard' | 'Rocket';
    identifier: string; // e.g. "01712-345678" or "•••• 4242"
    details: string; // e.g. "City Bank • Exp: 08/28"
    isDefault: boolean;
  }

  const DEFAULT_PAYMENTS: SavedPaymentMethod[] = [
    {
      id: 'pay-1',
      type: 'mobile_wallet',
      provider: 'bKash',
      identifier: '+880 1712-345678',
      details: 'bKash Personal Wallet • Instant Checkout Enabled',
      isDefault: true
    },
    {
      id: 'pay-2',
      type: 'mobile_wallet',
      provider: 'Nagad',
      identifier: '+880 1834-567890',
      details: 'Nagad Account • 1.2% Cashback Partner',
      isDefault: false
    },
    {
      id: 'pay-3',
      type: 'card',
      provider: 'Visa',
      identifier: '•••• •••• •••• 4242',
      details: 'City Bank Platinum Credit • Exp: 08/28',
      isDefault: false
    },
    {
      id: 'pay-4',
      type: 'card',
      provider: 'Mastercard',
      identifier: '•••• •••• •••• 8899',
      details: 'BRAC Bank World Mastercard • Exp: 11/27',
      isDefault: false
    }
  ];

  interface Props {
    payments?: SavedPaymentMethod[];
  }

  let { payments: initialPayments }: Props = $props();

  let payments = $state<SavedPaymentMethod[]>(initialPayments ?? DEFAULT_PAYMENTS);
  let isAdding = $state(false);

  $effect(() => {
    if (initialPayments) {
      payments = initialPayments;
    }
  });

  // New payment method form state
  let newType = $state<'mobile_wallet' | 'card'>('mobile_wallet');
  let newProvider = $state<'bKash' | 'Nagad' | 'Visa' | 'Mastercard'>('bKash');
  let newIdentifier = $state('');
  let newDetails = $state('');

  function handleSetDefault(id: string) {
    payments = payments.map((p) => ({
      ...p,
      isDefault: p.id === id
    }));
    cartState.showToast('Default payment method updated!');
  }

  function handleDeletePayment(id: string) {
    const target = payments.find((p) => p.id === id);
    payments = payments.filter((p) => p.id !== id);
    if (target) {
      cartState.showToast(`Removed ${target.provider} payment method.`);
    }
  }

  function handleAddPayment(e: SubmitEvent) {
    e.preventDefault();
    if (!newIdentifier.trim()) return;

    const newPay: SavedPaymentMethod = {
      id: `pay-${Date.now()}`,
      type: newType,
      provider: newProvider,
      identifier: newIdentifier.trim(),
      details: newDetails.trim() || `${newProvider} Account`,
      isDefault: payments.length === 0
    };

    payments = [newPay, ...payments];
    cartState.showToast(`Added ${newPay.provider} to saved payment methods!`);
    newIdentifier = '';
    newDetails = '';
    isAdding = false;
  }
</script>

<div class="max-w-3xl mx-auto space-y-5 sm:space-y-6">
  <!-- Header Card -->
  <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5 sm:p-6 shadow-xs">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <Icon icon={CreditCardIcon} size={20} />
        </div>
        <div>
          <h3 class="text-base font-black text-[var(--color-text-primary)]">
            Saved Payment Methods ({payments.length})
          </h3>
          <p class="text-xs text-[var(--color-text-secondary)]">
            Securely saved bKash, Nagad wallets and debit/credit cards for 1-click checkout.
          </p>
        </div>
      </div>

      <button
        type="button"
        onclick={() => (isAdding = !isAdding)}
        class="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer shrink-0"
      >
        <Icon icon={isAdding ? Delete02Icon : Add01Icon} size={15} />
        <span>{isAdding ? 'Cancel' : 'Add Payment Method'}</span>
      </button>
    </div>

    <!-- Inline Add Payment Form -->
    {#if isAdding}
      <form onsubmit={handleAddPayment} class="mt-5 pt-5 border-t border-[var(--color-border-subtle)] space-y-4">
        <div class="flex items-center gap-2">
          <button
            type="button"
            onclick={() => {
              newType = 'mobile_wallet';
              newProvider = 'bKash';
            }}
            class="h-10 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer {newType === 'mobile_wallet'
              ? 'bg-[var(--color-brand-primary)] text-white'
              : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}"
          >
            Mobile Wallet (bKash/Nagad)
          </button>
          <button
            type="button"
            onclick={() => {
              newType = 'card';
              newProvider = 'Visa';
            }}
            class="h-10 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer {newType === 'card'
              ? 'bg-[var(--color-brand-primary)] text-white'
              : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}"
          >
            Debit / Credit Card
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label for="pay-provider" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Provider</label>
            <select
              id="pay-provider"
              bind:value={newProvider}
              class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
            >
              {#if newType === 'mobile_wallet'}
                <option value="bKash">bKash</option>
                <option value="Nagad">Nagad</option>
              {:else}
                <option value="Visa">Visa Card</option>
                <option value="Mastercard">Mastercard</option>
              {/if}
            </select>
          </div>

          <div>
            <label for="pay-identifier" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">
              {newType === 'mobile_wallet' ? 'Mobile Number *' : 'Card Number *'}
            </label>
            <input
              id="pay-identifier"
              type="text"
              bind:value={newIdentifier}
              placeholder={newType === 'mobile_wallet' ? '01712-345678' : '•••• •••• •••• 1234'}
              required
              class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
            />
          </div>

          <div>
            <label for="pay-details" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">
              {newType === 'mobile_wallet' ? 'Account Label' : 'Bank & Expiry'}
            </label>
            <input
              id="pay-details"
              type="text"
              bind:value={newDetails}
              placeholder={newType === 'mobile_wallet' ? 'Personal Wallet' : 'BRAC Bank • Exp 12/28'}
              class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
            />
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-1">
          <button
            type="button"
            onclick={() => (isAdding = false)}
            class="h-10 px-4 rounded-xl text-xs font-bold border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="h-10 px-5 rounded-xl text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
          >
            Save Method
          </button>
        </div>
      </form>
    {/if}
  </div>

  <!-- Cards Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each payments as pay}
      <div class="p-5 rounded-2xl border transition-all flex flex-col justify-between gap-4 bg-[var(--color-bg-surface)] {pay.isDefault
        ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-xs'
        : 'border-[var(--color-border-default)] hover:border-slate-300 dark:hover:border-slate-700'}">
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="flex items-center gap-2.5">
              <PaymentGatewayLogo method={pay.provider} size="md" />

              <div>
                <span class="text-xs font-bold text-[var(--color-text-primary)] block">
                  {pay.provider}
                </span>
                <span class="text-xs font-mono font-bold text-[var(--color-text-secondary)]">
                  {pay.identifier}
                </span>
              </div>
            </div>

            {#if pay.isDefault}
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-black bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 shrink-0">
                <Icon icon={CheckmarkBadge01Icon} size={12} />
                <span>Default</span>
              </span>
            {/if}
          </div>

          <p class="text-xs text-[var(--color-text-secondary)] font-medium">
            {pay.details}
          </p>
        </div>

        <div class="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
          {#if !pay.isDefault}
            <button
              type="button"
              onclick={() => handleSetDefault(pay.id)}
              class="text-[11px] font-bold text-[var(--color-brand-primary)] hover:underline cursor-pointer"
            >
              Set as Default
            </button>
          {:else}
            <span class="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
              <Icon icon={Tick02Icon} size={12} />
              Default for 1-Click Orders
            </span>
          {/if}

          <button
            type="button"
            onclick={() => handleDeletePayment(pay.id)}
            class="text-[11px] text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 hover:underline cursor-pointer flex items-center gap-1"
          >
            <Icon icon={Delete02Icon} size={12} />
            <span>Remove</span>
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- Security Guarantee Banner -->
  <div class="p-4 sm:p-5 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] flex items-start gap-3.5 shadow-xs">
    <div class="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
      <Icon icon={Shield01Icon} size={20} />
    </div>
    <div class="text-xs space-y-1">
      <h4 class="font-bold text-[var(--color-text-primary)] text-sm">
        256-Bit Bank-Grade Payment Security
      </h4>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        Joy Telecom never stores raw debit card numbers or mobile banking PINs. All transactions are tokenized in compliance with Bangladesh Bank security standards and require two-factor OTP verification.
      </p>
    </div>
  </div>
</div>
