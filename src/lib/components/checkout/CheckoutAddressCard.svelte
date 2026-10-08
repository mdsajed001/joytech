<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { SavedAddress } from '$lib/data/mockProfile';
  import { i18nState } from '$lib/state.svelte';
  import {
    Location01Icon,
    Call02Icon,
    Home01Icon,
    Building01Icon,
    Tick02Icon,
    Cancel01Icon,
    Add01Icon,
    PencilEdit02Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    selectedAddress: SavedAddress;
    savedAddresses: SavedAddress[];
    onSelectAddress: (addr: SavedAddress) => void;
    onAddAddress: (addr: SavedAddress) => void;
  }

  let {
    selectedAddress = $bindable(),
    savedAddresses,
    onSelectAddress,
    onAddAddress
  }: Props = $props();

  let isModalOpen = $state(false);
  let isAddingNew = $state(false);

  // New address form state
  let newTag = $state<'Home' | 'Office' | 'Other'>('Home');
  let newName = $state('');
  let newPhone = $state('');
  let newDivision = $state('Dhaka');
  let newDistrict = $state('Dhaka City');
  let newArea = $state('');
  let newFullAddress = $state('');

  function handleSaveNewAddress(e: SubmitEvent) {
    e.preventDefault();
    if (!newName || !newPhone || !newFullAddress) return;

    const newAddr: SavedAddress = {
      id: `addr-${Date.now()}`,
      tag: newTag,
      recipientName: newName,
      phone: newPhone,
      division: newDivision,
      district: newDistrict,
      area: newArea || newDistrict,
      fullAddress: newFullAddress,
      isDefault: false
    };

    onAddAddress(newAddr);
    onSelectAddress(newAddr);
    isAddingNew = false;
    isModalOpen = false;
    newName = '';
    newPhone = '';
    newArea = '';
    newFullAddress = '';
  }
</script>

<div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] shadow-2xs overflow-hidden transition-all">
  <!-- Card Header -->
  <div class="px-4 py-3 bg-[var(--color-bg-subtle)]/40 border-b border-[var(--color-border-subtle)] flex items-center justify-between gap-3">
    <div class="flex items-center gap-2.5 min-w-0">
      <div class="w-7 h-7 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
        <Icon icon={Location01Icon} size={16} />
      </div>
      <div class="flex items-center gap-2 min-w-0">
        <h3 class="text-xs sm:text-sm font-black text-[var(--color-text-primary)] leading-tight">
          {i18nState.language === 'bn' ? 'ডেলিভারি ঠিকানা' : 'Shipping Destination'}
        </h3>
        <span class="px-2 py-0.5 text-[10px] font-black uppercase rounded-[var(--radius-xs)] bg-slate-100 dark:bg-slate-800 text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] leading-none shrink-0">
          {selectedAddress.tag}
        </span>
      </div>
    </div>

    <!-- Prominent "Change" Button -->
    <button
      type="button"
      onclick={() => (isModalOpen = true)}
      class="inline-flex items-center gap-1 h-7 px-2.5 rounded-[var(--radius-xs)] text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white active:scale-98 transition-all shrink-0 cursor-pointer shadow-2xs"
    >
      <Icon icon={PencilEdit02Icon} size={13} />
      <span>{i18nState.language === 'bn' ? 'পরিবর্তন' : 'Change'}</span>
    </button>
  </div>

  <!-- Selected Address Body -->
  <div class="p-3.5 sm:p-4">
    <div class="flex items-center justify-between gap-2">
      <h4 class="text-xs sm:text-sm font-black text-[var(--color-text-primary)] leading-tight">
        {selectedAddress.recipientName}
      </h4>
      <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--color-text-secondary)]">
        <Icon icon={Call02Icon} size={12} class="text-[var(--color-brand-primary)]" />
        <span>{selectedAddress.phone}</span>
      </span>
    </div>

    <p class="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
      {selectedAddress.fullAddress}, {selectedAddress.area}, {selectedAddress.district}, {selectedAddress.division}
    </p>
  </div>
</div>

<!-- Address Switcher Modal / Sheet -->
{#if isModalOpen}
  <div
    class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="w-full sm:max-w-lg bg-[var(--color-bg-surface)] rounded-t-[var(--radius-md)] sm:rounded-[var(--radius-md)] shadow-2xl border border-[var(--color-border-default)] flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
    >
      <!-- Modal Header -->
      <div class="px-4 py-3.5 border-b border-[var(--color-border-default)] flex items-center justify-between gap-2 bg-[var(--color-bg-subtle)]/40">
        <h4 class="text-sm font-black text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'ঠিকানা পরিবর্তন করুন' : 'Select Delivery Address'}
        </h4>
        <button
          type="button"
          onclick={() => {
            isModalOpen = false;
            isAddingNew = false;
          }}
          class="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] cursor-pointer"
          aria-label="Close"
        >
          <Icon icon={Cancel01Icon} size={16} />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-4 overflow-y-auto space-y-3">
        {#if !isAddingNew}
          <!-- Saved Address List -->
          <div class="space-y-2">
            {#each savedAddresses as addr (addr.id)}
              {@const isSelected = selectedAddress.id === addr.id}
              <button
                type="button"
                onclick={() => {
                  onSelectAddress(addr);
                  isModalOpen = false;
                }}
                class="w-full text-left p-3 rounded-[var(--radius-sm)] border transition-all cursor-pointer flex items-start justify-between gap-3 {isSelected
                  ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)]/40 ring-1 ring-[var(--color-brand-primary)] shadow-2xs'
                  : 'border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:border-slate-300'}"
              >
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5 mb-1">
                    <span class="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-[var(--radius-xs)] bg-slate-100 dark:bg-slate-800 text-[var(--color-text-secondary)]">
                      {addr.tag}
                    </span>
                    <span class="text-xs font-black text-[var(--color-text-primary)]">
                      {addr.recipientName}
                    </span>
                    <span class="text-[11px] text-[var(--color-text-muted)]">• {addr.phone}</span>
                  </div>
                  <p class="text-[11px] text-[var(--color-text-secondary)] leading-snug line-clamp-2">
                    {addr.fullAddress}, {addr.area}, {addr.district}
                  </p>
                </div>

                {#if isSelected}
                  <div class="w-5 h-5 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center shrink-0">
                    <Icon icon={Tick02Icon} size={12} strokeWidth={3} />
                  </div>
                {/if}
              </button>
            {/each}
          </div>

          <button
            type="button"
            onclick={() => (isAddingNew = true)}
            class="w-full h-9 rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border-strong)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)]/30 text-xs font-bold text-[var(--color-brand-primary)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Icon icon={Add01Icon} size={15} />
            <span>{i18nState.language === 'bn' ? 'নতুন ঠিকানা যোগ করুন' : 'Add New Address'}</span>
          </button>
        {:else}
          <!-- Inline New Address Form -->
          <form onsubmit={handleSaveNewAddress} class="space-y-2.5">
            <div class="flex items-center justify-between pb-1 border-b border-[var(--color-border-subtle)]">
              <span class="text-xs font-bold text-[var(--color-text-primary)]">Enter Destination Details</span>
              <div class="flex items-center gap-1">
                {#each (['Home', 'Office', 'Other'] as const) as tag}
                  <button
                    type="button"
                    onclick={() => (newTag = tag)}
                    class="h-6 px-2 text-[10px] font-bold rounded cursor-pointer {newTag === tag
                      ? 'bg-[var(--color-brand-primary)] text-white'
                      : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)]'}"
                  >
                    {tag}
                  </button>
                {/each}
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div>
                <label for="new-recipient" class="text-[10.5px] font-bold text-[var(--color-text-primary)] block mb-1">Recipient Name *</label>
                <input
                  id="new-recipient"
                  type="text"
                  required
                  bind:value={newName}
                  placeholder="e.g. Tanvir"
                  class="w-full h-8.5 px-2.5 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]"
                />
              </div>

              <div>
                <label for="new-phone" class="text-[10.5px] font-bold text-[var(--color-text-primary)] block mb-1">Phone Number *</label>
                <input
                  id="new-phone"
                  type="tel"
                  required
                  bind:value={newPhone}
                  placeholder="01XXXXXXXXX"
                  class="w-full h-8.5 px-2.5 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]"
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div>
                <label for="new-division" class="text-[10.5px] font-bold text-[var(--color-text-primary)] block mb-1">Division</label>
                <select
                  id="new-division"
                  bind:value={newDivision}
                  class="w-full h-8.5 px-2.5 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]"
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barisal">Barisal</option>
                </select>
              </div>

              <div>
                <label for="new-area" class="text-[10.5px] font-bold text-[var(--color-text-primary)] block mb-1">Area / City *</label>
                <input
                  id="new-area"
                  type="text"
                  required
                  bind:value={newArea}
                  placeholder="e.g. Banani"
                  class="w-full h-8.5 px-2.5 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]"
                />
              </div>
            </div>

            <div>
              <label for="new-street" class="text-[10.5px] font-bold text-[var(--color-text-primary)] block mb-1">Full Street Address *</label>
              <textarea
                id="new-street"
                required
                rows="2"
                bind:value={newFullAddress}
                placeholder="House, Road, Flat details..."
                class="w-full px-2.5 py-1.5 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]"
              ></textarea>
            </div>

            <div class="flex justify-end gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
              <button
                type="button"
                onclick={() => (isAddingNew = false)}
                class="h-8 px-3 text-xs font-bold rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)]"
              >
                Back
              </button>
              <button
                type="submit"
                class="h-8 px-4 text-xs font-bold rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] text-white"
              >
                Save & Use
              </button>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
{/if}
