<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { SavedAddress } from '$lib/data/mockProfile';
  import {
    Home01Icon,
    Building01Icon,
    Add01Icon,
    Tick02Icon,
    Call02Icon,
    Delete02Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    addresses: SavedAddress[];
    onSetDefault: (id: string) => void;
    onAddAddress: (newAddr: SavedAddress) => void;
    onDeleteAddress?: (id: string) => void;
  }

  let { addresses, onSetDefault, onAddAddress, onDeleteAddress }: Props = $props();

  let isAddingNew = $state(false);
  let newTag = $state<'Home' | 'Office' | 'Other'>('Home');
  let newName = $state('');
  let newPhone = $state('');
  let newDivision = $state('Dhaka');
  let newDistrict = $state('Dhaka City');
  let newArea = $state('');
  let newFullAddress = $state('');

  function handleSubmitNewAddress(e: SubmitEvent) {
    e.preventDefault();
    if (!newName || !newPhone || !newFullAddress) return;

    const newAddressItem: SavedAddress = {
      id: `addr-${Date.now()}`,
      tag: newTag,
      recipientName: newName,
      phone: newPhone,
      division: newDivision,
      district: newDistrict,
      area: newArea || newDistrict,
      fullAddress: newFullAddress,
      isDefault: addresses.length === 0
    };

    onAddAddress(newAddressItem);
    isAddingNew = false;
    newName = '';
    newPhone = '';
    newArea = '';
    newFullAddress = '';
  }
</script>

<div class="space-y-3.5">
  <!-- Top Action Bar -->
  <div class="flex items-center justify-between">
    <span class="text-xs font-bold text-[var(--color-text-secondary)]">
      {addresses.length} {addresses.length === 1 ? 'saved location' : 'saved locations'}
    </span>

    <button
      type="button"
      onclick={() => (isAddingNew = !isAddingNew)}
      class="inline-flex items-center gap-1.5 h-8.5 px-3.5 rounded-[var(--radius-sm)] text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer"
    >
      <Icon icon={isAddingNew ? Delete02Icon : Add01Icon} size={14} />
      <span>{isAddingNew ? 'Cancel' : 'New Address'}</span>
    </button>
  </div>

  <!-- Add Address Form (Differentiated Subtle Background Container) -->
  {#if isAddingNew}
    <form
      onsubmit={handleSubmitNewAddress}
      class="bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] rounded-[var(--radius-sm)] p-4 sm:p-5 shadow-xs space-y-3.5 animate-fadeIn"
    >
      <div class="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2.5">
        <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-primary)]">
          New Delivery Destination
        </h4>
        <!-- Tag Picker -->
        <div class="flex items-center gap-1.5">
          {#each (['Home', 'Office', 'Other'] as const) as tag}
            <button
              type="button"
              onclick={() => (newTag = tag)}
              class="h-7.5 px-3 text-[11px] font-bold rounded-[var(--radius-xs)] transition-all cursor-pointer {newTag === tag
                ? 'bg-[var(--color-brand-primary)] text-white shadow-2xs'
                : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-default)]'}"
            >
              {tag}
            </button>
          {/each}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label for="profile-addr-recipient" class="text-[11px] font-bold text-[var(--color-text-primary)] block mb-1">
            Recipient Name *
          </label>
          <input
            id="profile-addr-recipient"
            type="text"
            required
            bind:value={newName}
            placeholder="e.g. Tanvir Hossain"
            class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
          />
        </div>

        <div>
          <label for="profile-addr-phone" class="text-[11px] font-bold text-[var(--color-text-primary)] block mb-1">
            Contact Number *
          </label>
          <input
            id="profile-addr-phone"
            type="tel"
            required
            bind:value={newPhone}
            placeholder="e.g. +880 1712-345678"
            class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
          />
        </div>

        <div>
          <label for="profile-addr-division" class="text-[11px] font-bold text-[var(--color-text-primary)] block mb-1">
            Division
          </label>
          <select
            id="profile-addr-division"
            bind:value={newDivision}
            class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
          >
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
        </div>

        <div>
          <label for="profile-addr-area" class="text-[11px] font-bold text-[var(--color-text-primary)] block mb-1">
            Area / Thana
          </label>
          <input
            id="profile-addr-area"
            type="text"
            bind:value={newArea}
            placeholder="e.g. Banani, Dhanmondi"
            class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="profile-addr-street" class="text-[11px] font-bold text-[var(--color-text-primary)] block mb-1">
            Full Street Address *
          </label>
          <textarea
            id="profile-addr-street"
            required
            rows="2"
            bind:value={newFullAddress}
            placeholder="House, Road, Block, Flat details..."
            class="w-full px-3 py-2 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end gap-2.5 pt-2 border-t border-[var(--color-border-subtle)]">
        <button
          type="button"
          onclick={() => (isAddingNew = false)}
          class="h-8.5 px-3.5 text-xs font-bold rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="h-8.5 px-4 text-xs font-bold rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
        >
          Save Address
        </button>
      </div>
    </form>
  {/if}

  <!-- Single-Column Full-Width Address Cards List -->
  <div class="flex flex-col gap-3">
    {#each addresses as addr (addr.id)}
      <div
        class="w-full rounded-[var(--radius-sm)] p-4 shadow-2xs transition-all relative flex flex-col justify-between gap-3 border {addr.isDefault
          ? 'border-[var(--color-brand-primary)]/40 bg-[var(--color-brand-primary-subtle)]/30'
          : 'border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)]/30 hover:border-[var(--color-border-strong)]'}"
      >
        <div>
          <!-- Header: Tag & Default badge -->
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <div
                class="w-6.5 h-6.5 rounded-[var(--radius-xs)] flex items-center justify-center text-[11px] {addr.tag === 'Home'
                  ? 'bg-blue-100 dark:bg-blue-950/60 text-[var(--color-brand-primary)]'
                  : 'bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400'}"
              >
                <Icon icon={addr.tag === 'Home' ? Home01Icon : Building01Icon} size={14} />
              </div>
              <span class="text-xs font-black uppercase tracking-wider text-[var(--color-text-primary)]">
                {addr.tag}
              </span>
            </div>

            {#if addr.isDefault}
              <span
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-[var(--radius-xs)] text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 leading-none"
              >
                <Icon icon={Tick02Icon} size={10} strokeWidth={3} />
                <span>Default</span>
              </span>
            {/if}
          </div>

          <!-- Recipient Name & Phone -->
          <h4 class="text-sm font-black text-[var(--color-text-primary)] leading-tight">
            {addr.recipientName}
          </h4>

          <div class="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] mt-1">
            <Icon icon={Call02Icon} size={12} class="text-[var(--color-brand-primary)] shrink-0" />
            <span>{addr.phone}</span>
          </div>

          <!-- Address Text -->
          <p class="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
            {addr.fullAddress}, {addr.area}, {addr.district}
          </p>
        </div>

        <!-- Footer Actions -->
        <div class="flex items-center justify-between pt-2.5 border-t border-[var(--color-border-subtle)] text-xs">
          {#if !addr.isDefault}
            <button
              type="button"
              onclick={() => onSetDefault(addr.id)}
              class="h-7 px-2.5 rounded-[var(--radius-xs)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)] text-xs font-bold text-[var(--color-brand-primary)] cursor-pointer transition-colors"
            >
              Set as Default
            </button>
          {:else}
            <span class="text-[11px] text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1">
              <Icon icon={Tick02Icon} size={12} />
              Primary Delivery Destination
            </span>
          {/if}

          {#if onDeleteAddress && !addr.isDefault}
            <button
              type="button"
              onclick={() => onDeleteAddress(addr.id)}
              class="w-7.5 h-7.5 rounded-[var(--radius-xs)] flex items-center justify-center text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer transition-colors"
              title="Delete Address"
              aria-label="Delete Address"
            >
              <Icon icon={Delete02Icon} size={15} />
            </button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
