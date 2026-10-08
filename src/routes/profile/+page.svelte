<script lang="ts">
  import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
  import ProfileNavTabs from '$lib/components/profile/ProfileNavTabs.svelte';
  import SettingsTab from '$lib/components/profile/SettingsTab.svelte';
  import PaymentsTab from '$lib/components/profile/PaymentsTab.svelte';
  import ProfileDrawer, { type DrawerType } from '$lib/components/profile/ProfileDrawer.svelte';
  import OrderTrackingModal from '$lib/components/profile/OrderTrackingModal.svelte';
  import {
    MOCK_PROFILE,
    MOCK_ORDERS,
    MOCK_ADDRESSES,
    MOCK_WISHLIST,
    DEFAULT_PREFERENCES,
    type Order,
    type SavedAddress
  } from '$lib/data/mockProfile';
  import { PRODUCTS } from '$lib/data/catalog';
  import type { Product } from '$lib/types';
  import { cartState } from '$lib/state.svelte';

  // Svelte 5 Runes for reactive state (2 core account tabs)
  let activeTab = $state<'preferences' | 'payments'>('preferences');
  let profile = $state(MOCK_PROFILE);
  let orders = $state<Order[]>(MOCK_ORDERS);
  let addresses = $state<SavedAddress[]>(MOCK_ADDRESSES);
  let wishlist = $state<Product[]>(MOCK_WISHLIST);
  let preferences = $state(DEFAULT_PREFERENCES);

  // Tracking modal state
  let trackingModalOpen = $state(false);
  let selectedOrderForTracking = $state<Order | null>(null);

  // Profile Drawer state (Bottom Sheet on mobile, Side Drawer on PC)
  let activeDrawerType = $state<DrawerType>(null);
  let isDrawerOpen = $derived(activeDrawerType !== null);

  function handleOpenDrawer(drawerType: DrawerType) {
    activeDrawerType = drawerType;
  }

  function handleCloseDrawer() {
    activeDrawerType = null;
  }

  function handleTrackOrder(order: Order) {
    selectedOrderForTracking = order;
    trackingModalOpen = true;
  }

  function handleCloseTracking() {
    trackingModalOpen = false;
  }

  function handleSetDefaultAddress(id: string) {
    addresses = addresses.map((a) => ({
      ...a,
      isDefault: a.id === id
    }));
  }

  function handleAddAddress(newAddr: SavedAddress) {
    if (newAddr.isDefault) {
      addresses = addresses.map((a) => ({ ...a, isDefault: false }));
    }
    addresses = [newAddr, ...addresses];
  }

  function handleDeleteAddress(id: string) {
    addresses = addresses.filter((a) => a.id !== id);
  }

  function handleAddToCart(product: Product) {
    cartState.addItem(product);
  }

  function handleRemoveWishlist(productId: string) {
    wishlist = wishlist.filter((item) => item.id !== productId);
  }

  function handleReorder(order: Order) {
    let count = 0;
    for (const item of order.items) {
      const catalogItem = PRODUCTS.find((p) => p.id === item.productId);
      if (catalogItem) {
        cartState.addItem(catalogItem);
        count++;
      }
    }
    if (count > 0) {
      cartState.showToast(`Re-added ${count} items to cart from order #${order.orderNumber}!`);
    }
  }
</script>

<svelte:head>
  <title>Account & Preferences — Joy Telecom</title>
  <meta
    name="description"
    content="Manage your Joy Telecom account preferences, display theme, VIP loyalty rewards, and saved bKash/Nagad payment methods."
  />
</svelte:head>

<main class="min-h-screen bg-[var(--color-bg-canvas)]">
  <!-- Profile Identity Hero Section (Edge-to-Edge Full-Bleed) -->
  <ProfileHeader
    {profile}
    ordersCount={orders.length}
    addressesCount={addresses.length}
    wishlistCount={wishlist.length}
    promosCount={3}
    {activeDrawerType}
    onOpenDrawer={handleOpenDrawer}
  />

  <!-- Full-Bleed Edge-to-Edge Tab Bar (Starts directly underneath blue hero on mobile with 0 gap) -->
  <div class="w-full bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)] shadow-xs">
    <div class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
      <ProfileNavTabs
        {activeTab}
        onSelectTab={(tabId) => (activeTab = tabId)}
      />
    </div>
  </div>

  <!-- Main Content Grid Area -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-28 sm:pb-16">
    <!-- Account Tab Panels -->
    {#if activeTab === 'preferences'}
      <SettingsTab
        {preferences}
        onSavePreferences={(newPrefs) => (preferences = newPrefs)}
      />
    {:else if activeTab === 'payments'}
      <PaymentsTab />
    {/if}
  </div>

  <!-- Real-Time Order Tracking Stepper Modal -->
  <OrderTrackingModal
    order={selectedOrderForTracking}
    isOpen={trackingModalOpen}
    onClose={handleCloseTracking}
  />

  <!-- Responsive Slide-Over Drawer: Bottom Sheet on Phone, Side Drawer on PC -->
  <ProfileDrawer
    type={activeDrawerType}
    isOpen={isDrawerOpen}
    {orders}
    {addresses}
    {wishlist}
    onClose={handleCloseDrawer}
    onTrackOrder={handleTrackOrder}
    onReorder={handleReorder}
    onSetDefaultAddress={handleSetDefaultAddress}
    onAddAddress={handleAddAddress}
    onDeleteAddress={handleDeleteAddress}
    onAddToCart={handleAddToCart}
    onRemoveWishlist={handleRemoveWishlist}
  />
</main>
