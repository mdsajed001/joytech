<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState } from '$lib/state.svelte';
  import type { Order, SavedAddress, PromoCoupon, CustomerReview, PendingReviewItem } from '$lib/data/mockProfile';
  import { MOCK_PROMOS, MOCK_REVIEWS, MOCK_PENDING_REVIEWS } from '$lib/data/mockProfile';
  import type { Product } from '$lib/types';
  import OrdersTab from './OrdersTab.svelte';
  import AddressesTab from './AddressesTab.svelte';
  import WishlistTab from './WishlistTab.svelte';
  import {
    Cancel01Icon,
    ShoppingBag01Icon,
    Clock01Icon,
    FavouriteIcon,
    StarIcon,
    Notebook01Icon,
    DeliveryReturn01Icon,
    Ticket02Icon,
    GiftIcon,
    Copy01Icon,
    CheckmarkBadge01Icon,
    PencilEdit02Icon,
    WhatsappIcon
  } from '@hugeicons/core-free-icons';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export type DrawerType =
    | 'orders'
    | 'history'
    | 'wishlist'
    | 'reviews'
    | 'addresses'
    | 'returns'
    | 'promos'
    | 'request'
    | null;

  interface Props {
    type: DrawerType;
    isOpen: boolean;
    orders: Order[];
    addresses: SavedAddress[];
    wishlist: Product[];
    onClose: () => void;
    onTrackOrder: (order: Order) => void;
    onReorder: (order: Order) => void;
    onSetDefaultAddress: (id: string) => void;
    onAddAddress: (newAddr: SavedAddress) => void;
    onDeleteAddress: (id: string) => void;
    onAddToCart: (product: Product) => void;
    onRemoveWishlist: (productId: string) => void;
  }

  let {
    type,
    isOpen,
    orders,
    addresses,
    wishlist,
    onClose,
    onTrackOrder,
    onReorder,
    onSetDefaultAddress,
    onAddAddress,
    onDeleteAddress,
    onAddToCart,
    onRemoveWishlist
  }: Props = $props();

  // Auxiliary forms state
  let requestModel = $state('');
  let requestAccessory = $state('');
  let requestPhone = $state('+880 1712-345678');
  let requestNote = $state('');
  let requestSubmitted = $state(false);

  let selectedReturnOrderId = $state<string | null>(null);
  let returnReason = $state('Defective / Not functioning');
  let returnSubmitted = $state(false);

  // Reviews & Ratings 2-Tab State (Pending vs Past)
  let reviewsSubTab = $state<'pending' | 'past'>('pending');
  let pendingReviews = $state<PendingReviewItem[]>(MOCK_PENDING_REVIEWS);
  let pastReviews = $state<CustomerReview[]>(MOCK_REVIEWS);
  let activeReviewingId = $state<string | null>(null);
  let newReviewRating = $state(5);
  let newReviewComment = $state('');
  // Editing Past Review State
  let editingPastReviewId = $state<string | null>(null);
  let editingRating = $state(5);
  let editingComment = $state('');

  function startEditPastReview(review: CustomerReview) {
    editingPastReviewId = review.id;
    editingRating = review.rating;
    editingComment = review.comment;
  }

  function handleUpdatePastReview(reviewId: string, e: SubmitEvent) {
    e.preventDefault();
    if (!editingComment.trim()) return;

    pastReviews = pastReviews.map((r) =>
      r.id === reviewId
        ? { ...r, rating: editingRating, comment: editingComment.trim() }
        : r
    );

    editingPastReviewId = null;
    editingComment = '';
    editingRating = 5;

    cartState.showToast('Review updated successfully!');
  }

  function handlePostReview(pendingItem: PendingReviewItem, e: SubmitEvent) {
    e.preventDefault();
    if (!newReviewComment.trim()) return;

    const newReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      productName: pendingItem.name,
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment.trim(),
      verified: true
    };

    pastReviews = [newReview, ...pastReviews];
    pendingReviews = pendingReviews.filter((item) => item.id !== pendingItem.id);
    activeReviewingId = null;
    newReviewComment = '';
    newReviewRating = 5;

    cartState.showToast(`Thank you! Your review for "${pendingItem.name}" has been published.`);
    reviewsSubTab = 'past';
  }

  function copyPromo(code: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    cartState.showToast(`Coupon code "${code}" copied!`);
  }

  function handleRequestSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!requestModel || !requestAccessory) return;
    requestSubmitted = true;
    cartState.showToast(`Request received for ${requestModel}!`);
    setTimeout(() => {
      requestSubmitted = false;
      requestModel = '';
      requestAccessory = '';
      requestNote = '';
      onClose();
    }, 1400);
  }

  function handleReturnSubmit(e: SubmitEvent) {
    e.preventDefault();
    returnSubmitted = true;
    cartState.showToast('Return claim logged successfully!');
    setTimeout(() => {
      returnSubmitted = false;
      onClose();
    }, 1400);
  }

  // Keydown listener for Escape
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  }

  // Prevent background body scroll when open
  $effect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  });

  const drawerTitles = $derived<Record<string, { title: string; count?: number | null; icon: any }>>({
    orders: {
      title: 'My Active Orders',
      count: orders.filter((o) => o.status !== 'delivered').length,
      icon: ShoppingBag01Icon
    },
    history: {
      title: 'Order History',
      count: orders.filter((o) => o.status === 'delivered').length,
      icon: Clock01Icon
    },
    wishlist: {
      title: 'Saved Wishlist',
      count: wishlist.length,
      icon: FavouriteIcon
    },
    reviews: {
      title: 'Reviews & Ratings',
      count: pendingReviews.length + pastReviews.length,
      icon: StarIcon
    },
    addresses: {
      title: 'Delivery Addresses',
      count: addresses.length,
      icon: Notebook01Icon
    },
    returns: {
      title: 'Returns & Guarantee',
      count: null,
      icon: DeliveryReturn01Icon
    },
    promos: {
      title: 'Coupons & Promos',
      count: MOCK_PROMOS.length,
      icon: Ticket02Icon
    },
    request: {
      title: 'Request Accessory',
      count: null,
      icon: GiftIcon
    }
  });

  const currentMeta = $derived(type ? drawerTitles[type] : null);

  // Responsive slide: Bottom sheet on phone (y: 100%), side drawer on desktop (x: 100%)
  function responsiveFly(node: Element) {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
    return fly(node, {
      x: isMobile ? 0 : '100%',
      y: isMobile ? '100%' : 0,
      duration: isMobile ? 360 : 300,
      easing: cubicOut,
      opacity: 1
    });
  }

  // Mobile pull-down-to-dismiss gesture
  let touchStartY = 0;
  let dragOffset = $state(0);

  function handleTouchStart(e: TouchEvent) {
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchMove(e: TouchEvent) {
    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 0) {
      dragOffset = deltaY;
    }
  }

  function handleTouchEnd() {
    if (dragOffset > 80) {
      onClose();
    }
    dragOffset = 0;
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen && type && currentMeta}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
    transition:fade={{ duration: 250, easing: cubicOut }}
    onclick={onClose}
    aria-hidden="true"
  ></div>

  <!-- Slide-Over Panel: Bottom Sheet on Phone (max 82vh), Side Drawer on PC -->
  <div
    class="fixed bottom-0 inset-x-0 z-50 max-h-[82vh] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] rounded-t-[var(--radius-md)] shadow-2xl flex flex-col pb-[env(safe-area-inset-bottom)] overflow-hidden sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto sm:w-full sm:max-w-xl sm:max-h-full sm:rounded-none sm:border-l sm:border-[var(--color-border-default)]"
    transition:responsiveFly
    style={dragOffset > 0 ? `transform: translateY(${dragOffset}px); transition: none;` : undefined}
    role="dialog"
    aria-modal="true"
  >
    <!-- Mobile Drag / Grab Handle (with pull-to-dismiss gesture) -->
    <div
      role="presentation"
      class="sm:hidden w-full pt-2.5 pb-1 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none shrink-0"
      ontouchstart={handleTouchStart}
      ontouchmove={handleTouchMove}
      ontouchend={handleTouchEnd}
    >
      <div class="w-10 h-1 bg-[var(--color-border-strong)] rounded-[var(--radius-xs)]"></div>
    </div>

    <!-- Sticky Sleek Header -->
    <div class="px-4 sm:px-5 py-3 border-b border-[var(--color-border-default)] flex items-center justify-between gap-3 shrink-0 bg-[var(--color-bg-surface)]">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
          <Icon icon={currentMeta.icon} size={18} />
        </div>
        <div class="flex items-center gap-2 min-w-0">
          <h2 class="text-base font-black text-[var(--color-text-primary)] leading-tight truncate">
            {currentMeta.title}
          </h2>
          {#if currentMeta.count !== null && currentMeta.count !== undefined}
            <span class="px-2 py-0.5 text-[11px] font-black rounded-[var(--radius-xs)] bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/20 shrink-0 leading-none">
              {currentMeta.count}
            </span>
          {/if}
        </div>
      </div>

      <button
        type="button"
        onclick={onClose}
        class="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] rounded-[var(--radius-sm)] cursor-pointer transition-colors shrink-0"
        aria-label="Close drawer"
      >
        <Icon icon={Cancel01Icon} size={18} />
      </button>
    </div>

    <!-- Scrollable Drawer Body -->
    <div class="flex-1 overflow-y-auto p-4 sm:p-5">
      {#if type === 'orders'}
        <OrdersTab
          orders={orders.filter((o) => o.status !== 'delivered')}
          isHistory={false}
          onTrackOrder={onTrackOrder}
          onReorder={onReorder}
        />
      {:else if type === 'history'}
        <OrdersTab
          orders={orders.filter((o) => o.status === 'delivered')}
          isHistory={true}
          onTrackOrder={onTrackOrder}
          onReorder={onReorder}
        />
      {:else if type === 'wishlist'}
        <WishlistTab
          items={wishlist}
          onAddToCart={onAddToCart}
          onRemoveWishlist={onRemoveWishlist}
        />
      {:else if type === 'addresses'}
        <AddressesTab
          {addresses}
          onSetDefault={onSetDefaultAddress}
          onAddAddress={onAddAddress}
          onDeleteAddress={onDeleteAddress}
        />
      {:else if type === 'reviews'}
        <div class="space-y-4">
          <!-- Full-Bleed Edge-to-Edge Sub-Tab Control Bar -->
          <div class="-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4 grid grid-cols-2 border-b border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] overflow-hidden">
            <button
              type="button"
              onclick={() => (reviewsSubTab = 'pending')}
              class="h-11 sm:h-12 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 border-b-2 {reviewsSubTab === 'pending'
                ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-2xs'
                : 'bg-transparent text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'}"
            >
              <span>Pending Reviews</span>
              <span class="px-1.5 py-0.2 text-[10px] rounded-full {reviewsSubTab === 'pending' ? 'bg-white/25 text-white' : 'bg-[var(--color-border-default)] text-[var(--color-text-primary)]'}">
                {pendingReviews.length}
              </span>
            </button>

            <button
              type="button"
              onclick={() => (reviewsSubTab = 'past')}
              class="h-11 sm:h-12 px-3 text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 border-b-2 {reviewsSubTab === 'past'
                ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-2xs'
                : 'bg-transparent text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]'}"
            >
              <span>Past Reviews</span>
              <span class="px-1.5 py-0.2 text-[10px] rounded-full {reviewsSubTab === 'past' ? 'bg-white/25 text-white' : 'bg-[var(--color-border-default)] text-[var(--color-text-primary)]'}">
                {pastReviews.length}
              </span>
            </button>
          </div>

          {#if reviewsSubTab === 'pending'}
            {#if pendingReviews.length === 0}
              <div class="p-8 text-center rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] space-y-2">
                <div class="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Icon icon={CheckmarkBadge01Icon} size={20} />
                </div>
                <h4 class="text-sm font-black text-[var(--color-text-primary)]">All Caught Up!</h4>
                <p class="text-xs text-[var(--color-text-secondary)]">You have reviewed all your recent delivered orders.</p>
              </div>
            {:else}
              <!-- 2-Column Pending Product Grid (Same visual architecture as ProductCard.svelte) -->
              <div class="grid grid-cols-2 gap-2.5 sm:gap-3">
                {#each pendingReviews as item (item.id)}
                  {@const isEditing = activeReviewingId === item.id}

                  <article
                    class="group relative flex flex-col w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] transition-all rounded-[var(--radius-sm)] overflow-hidden shadow-2xs"
                  >
                    <!-- Thumbnail area: 130px height matching ProductCard -->
                    <div class="relative w-full h-[120px] sm:h-[130px] bg-gradient-to-b from-[var(--color-bg-subtle)] to-[var(--color-border-default)] overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-[var(--radius-xs)] text-[9px] font-black uppercase bg-slate-900/80 text-white backdrop-blur-xs">
                        {item.deliveredDate}
                      </span>
                    </div>

                    <!-- Card Body -->
                    <div class="p-2 sm:p-3 flex flex-col flex-1">
                      <span class="text-[10px] font-bold tracking-wider text-[var(--color-text-disabled)] uppercase">
                        {item.brand}
                      </span>
                      <h4
                        class="text-[12px] sm:text-[12.5px] font-bold text-[var(--color-text-primary)] leading-[1.35] line-clamp-2 mt-0.5 mb-1.5 min-h-[32px]"
                        title={item.name}
                      >
                        {item.name}
                      </h4>

                      <div class="mt-auto pt-2 border-t border-[var(--color-border-default)] flex flex-col gap-2">
                        <div class="flex items-center justify-between">
                          <span class="text-xs sm:text-sm font-extrabold text-[var(--color-text-primary)]">
                            ৳{item.price.toLocaleString('en-BD')}
                          </span>
                          <span class="text-[10px] font-medium text-[var(--color-text-disabled)]">
                            #{item.orderNumber}
                          </span>
                        </div>

                        <!-- Review Now CTA Button (In place of Buy Now) -->
                        <button
                          type="button"
                          onclick={() => (activeReviewingId = isEditing ? null : item.id)}
                          class="w-full h-8 px-2 inline-flex items-center justify-center gap-1 bg-[var(--color-brand-primary)] text-white text-[11px] sm:text-xs font-black rounded-[var(--radius-sm)] shadow-2xs hover:opacity-90 active:scale-98 transition-all cursor-pointer"
                        >
                          <Icon icon={StarIcon} size={13} class="fill-current" />
                          <span>{isEditing ? 'Close' : 'Review Now'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                {/each}
              </div>

              <!-- Expanded Active Review Composer Box -->
              {#if activeReviewingId}
                {@const activeItem = pendingReviews.find((p) => p.id === activeReviewingId)}
                {#if activeItem}
                  <form
                    onsubmit={(e) => handlePostReview(activeItem, e)}
                    class="p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-brand-primary)]/40 space-y-3 shadow-md animate-fadeIn"
                  >
                    <div class="flex items-center justify-between">
                      <div>
                        <span class="text-[10px] font-black uppercase tracking-wider text-[var(--color-brand-primary)] block">Writing Review</span>
                        <h4 class="text-xs font-bold text-[var(--color-text-primary)] truncate max-w-[200px] sm:max-w-none">
                          {activeItem.name}
                        </h4>
                      </div>

                      <!-- 5-Star Picker -->
                      <div class="flex items-center gap-1">
                        {#each [1, 2, 3, 4, 5] as star}
                          <button
                            type="button"
                            onclick={() => (newReviewRating = star)}
                            class="text-amber-500 hover:scale-115 transition-transform cursor-pointer p-0.5"
                            aria-label={`Rate ${star} stars`}
                          >
                            <Icon
                              icon={StarIcon}
                              size={16}
                              class={star <= newReviewRating ? 'text-amber-500 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}
                            />
                          </button>
                        {/each}
                        <span class="px-1.5 py-0.5 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white text-[10px] font-black ml-1">
                          {newReviewRating}★
                        </span>
                      </div>
                    </div>

                    <textarea
                      bind:value={newReviewComment}
                      placeholder={`Share your experience with ${activeItem.name}...`}
                      rows="2"
                      required
                      class="w-full px-3 py-2 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
                    ></textarea>

                    <div class="flex justify-end gap-2">
                      <button
                        type="button"
                        onclick={() => (activeReviewingId = null)}
                        class="h-8 px-3 text-xs font-bold rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="h-8 px-4 rounded-[var(--radius-sm)] text-xs font-bold uppercase tracking-wider bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer"
                      >
                        Post Review
                      </button>
                    </div>
                  </form>
                {/if}
              {/if}
            {/if}
          {:else if reviewsSubTab === 'past'}
            <!-- Published Reviews List -->
            <div class="space-y-2.5">
              {#each pastReviews as review}
                <div class="w-full p-3.5 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] space-y-2 shadow-2xs transition-all">
                  <div class="flex items-center justify-between gap-2">
                    <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate">
                      {review.productName}
                    </h4>
                    <div class="flex items-center gap-1.5 shrink-0">
                      <span class="text-[10.5px] font-medium text-[var(--color-text-disabled)]">{review.date}</span>
                      <button
                        type="button"
                        onclick={() => startEditPastReview(review)}
                        class="p-1 rounded-[var(--radius-xs)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer"
                        title="Edit Review"
                      >
                        <Icon icon={PencilEdit02Icon} size={14} />
                      </button>
                    </div>
                  </div>

                  {#if editingPastReviewId === review.id}
                    <!-- Inline Edit Review Form -->
                    <form
                      onsubmit={(e) => handleUpdatePastReview(review.id, e)}
                      class="mt-2 p-3 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-brand-primary)]/40 space-y-2.5 shadow-2xs"
                    >
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-black uppercase tracking-wider text-[var(--color-brand-primary)]">Edit Rating</span>
                        <!-- 5-Star Picker -->
                        <div class="flex items-center gap-1">
                          {#each [1, 2, 3, 4, 5] as star}
                            <button
                              type="button"
                              onclick={() => (editingRating = star)}
                              class="text-amber-500 hover:scale-115 transition-transform cursor-pointer p-0.5"
                              aria-label={`Rate ${star} stars`}
                            >
                              <Icon
                                icon={StarIcon}
                                size={15}
                                class={star <= editingRating ? 'text-amber-500 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}
                              />
                            </button>
                          {/each}
                          <span class="px-1.5 py-0.5 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white text-[10px] font-black ml-1">
                            {editingRating}★
                          </span>
                        </div>
                      </div>

                      <textarea
                        bind:value={editingComment}
                        rows="2"
                        required
                        class="w-full px-3 py-2 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
                      ></textarea>

                      <div class="flex justify-end gap-2">
                        <button
                          type="button"
                          onclick={() => (editingPastReviewId = null)}
                          class="h-7.5 px-3 text-xs font-bold rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          class="h-7.5 px-3.5 rounded-[var(--radius-sm)] text-xs font-bold uppercase tracking-wider bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  {:else}
                    <div class="flex items-center gap-0.5 text-amber-500">
                      {#each Array(5) as _, i}
                        <Icon
                          icon={StarIcon}
                          size={13}
                          class={i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'}
                        />
                      {/each}
                    </div>

                    <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {review.comment}
                    </p>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {:else if type === 'returns'}
        <div class="space-y-4">
          <!-- Full-Width Returns Module Container -->
          <div class="w-full p-4 sm:p-5 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] shadow-xs space-y-4">
            <!-- Integrated Guarantee Trust Header -->
            <div class="flex items-center gap-3 pb-3 border-b border-[var(--color-border-subtle)]">
              <div class="w-8 h-8 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
                <Icon icon={CheckmarkBadge01Icon} size={18} />
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-primary)] leading-tight">
                  7-Day Hassle-Free Replacement
                </h4>
                <p class="text-[11px] text-[var(--color-text-secondary)] mt-0.5 leading-snug">
                  Exchange or refund for unopened items & defects within 7 days.
                </p>
              </div>
            </div>

            <!-- Return Claim Form -->
            <form onsubmit={handleReturnSubmit} class="space-y-3.5">
              <!-- Order Selector Chips -->
              <div>
                <span class="block text-[11px] font-bold text-[var(--color-text-primary)] mb-1.5">Select Order:</span>
                <div class="flex flex-wrap gap-1.5">
                  {#each orders as order}
                    {@const isSelected = (selectedReturnOrderId || orders[0]?.id) === order.id}
                    <button
                      type="button"
                      onclick={() => (selectedReturnOrderId = order.id)}
                      class="h-7.5 px-3 text-[11px] font-bold rounded-[var(--radius-xs)] transition-all cursor-pointer flex items-center gap-1.5 {isSelected
                        ? 'bg-[var(--color-brand-primary)] text-white shadow-2xs'
                        : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'}"
                    >
                      <span>#{order.orderNumber}</span>
                      <span class="opacity-75">• ৳{order.total.toLocaleString('en-BD')}</span>
                    </button>
                  {/each}
                </div>
              </div>

              <!-- Reason Selector Chips -->
              <div>
                <span class="block text-[11px] font-bold text-[var(--color-text-primary)] mb-1.5">Reason for Claim:</span>
                <div class="flex flex-wrap gap-1.5">
                  {#each ['Defective item', 'Wrong product', 'Phone fit issue', 'Damaged package'] as reason}
                    {@const isSelected = returnReason === reason}
                    <button
                      type="button"
                      onclick={() => (returnReason = reason)}
                      class="h-7.5 px-3 text-[11px] font-bold rounded-[var(--radius-xs)] transition-all cursor-pointer {isSelected
                        ? 'bg-[var(--color-brand-primary)] text-white shadow-2xs'
                        : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'}"
                    >
                      {reason}
                    </button>
                  {/each}
                </div>
              </div>

              <button
                type="submit"
                disabled={returnSubmitted}
                class="w-full h-9 px-4 rounded-[var(--radius-sm)] text-xs font-bold uppercase tracking-wider bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer mt-1"
              >
                {returnSubmitted ? 'Claim Received!' : 'Submit Return Claim'}
              </button>
            </form>
          </div>

          <!-- WhatsApp VIP Hotline Action Card -->
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noreferrer"
            class="w-full p-3.5 rounded-[var(--radius-sm)] border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-between hover:bg-emerald-100/70 dark:hover:bg-emerald-950/60 transition-colors shadow-2xs"
          >
            <div class="flex items-center gap-2">
              <Icon icon={WhatsappIcon} size={18} class="text-emerald-600 dark:text-emerald-400" />
              <span>Need instant replacement?</span>
            </div>
            <span class="text-[11px] font-black underline underline-offset-2">WhatsApp Live Hotline &rarr;</span>
          </a>
        </div>
      {:else if type === 'promos'}
        <div class="space-y-3">
          {#each MOCK_PROMOS as promo}
            <div class="w-full p-4 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)]/30 hover:border-[var(--color-border-strong)] shadow-2xs transition-all flex items-center justify-between gap-3.5">
              <!-- Left: Discount & Conditions -->
              <div class="min-w-0 pr-1">
                <div class="flex items-center gap-2">
                  <span class="text-base sm:text-lg font-black text-[var(--color-brand-primary)] leading-none">
                    {promo.discount}
                  </span>
                  {#if promo.badge}
                    <span class="px-2 py-0.5 text-[10px] font-black uppercase rounded-[var(--radius-xs)] bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/40 leading-none">
                      {promo.badge}
                    </span>
                  {/if}
                </div>

                <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] leading-snug mt-1.5 truncate">
                  {promo.title}
                </h4>

                <p class="text-[11px] text-[var(--color-text-secondary)] mt-1 flex items-center gap-1.5 leading-none">
                  <span>Min. {promo.minSpend}</span>
                  <span class="text-[var(--color-text-disabled)]">•</span>
                  <span>Till {promo.expires}</span>
                </p>
              </div>

              <!-- Right: 1-Tap Copy Action -->
              <button
                type="button"
                onclick={() => copyPromo(promo.code)}
                class="inline-flex items-center gap-1.5 h-8.5 px-3.5 rounded-[var(--radius-sm)] text-xs font-black bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white active:scale-98 transition-all shrink-0 cursor-pointer shadow-2xs"
                title={`Copy code ${promo.code}`}
              >
                <span>{promo.code}</span>
                <Icon icon={Copy01Icon} size={14} />
              </button>
            </div>
          {/each}
        </div>
      {:else if type === 'request'}
        <div class="space-y-4">
          <!-- Integrated Concierge Header Banner -->
          <div class="p-3.5 sm:p-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
                <Icon icon={GiftIcon} size={16} />
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-wider text-[var(--color-text-primary)]">Custom Sourcing Concierge</h4>
                <p class="text-[11px] text-[var(--color-text-secondary)]">Can't find a rare gadget? We source it for you.</p>
              </div>
            </div>
            <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] shrink-0">
              24–48h SLA
            </span>
          </div>

          <!-- Direct Sourcing Request Form -->
          <form onsubmit={handleRequestSubmit} class="space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="drawer-req-model" class="block text-[11px] font-bold text-[var(--color-text-primary)] mb-1">Phone Model *</label>
                <input
                  id="drawer-req-model"
                  type="text"
                  bind:value={requestModel}
                  placeholder="e.g. Pixel 9 Pro, iPhone 16 Plus"
                  required
                  class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
                />
              </div>

              <div>
                <label for="drawer-req-accessory" class="block text-[11px] font-bold text-[var(--color-text-primary)] mb-1">Accessory Needed *</label>
                <input
                  id="drawer-req-accessory"
                  type="text"
                  bind:value={requestAccessory}
                  placeholder="e.g. Matte Privacy Glass, Skin"
                  required
                  class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="drawer-req-phone" class="block text-[11px] font-bold text-[var(--color-text-primary)] mb-1">Contact Number *</label>
                <input
                  id="drawer-req-phone"
                  type="tel"
                  bind:value={requestPhone}
                  required
                  class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
                />
              </div>

              <div>
                <label for="drawer-req-notes" class="block text-[11px] font-bold text-[var(--color-text-primary)] mb-1">Notes / Preferences</label>
                <input
                  id="drawer-req-notes"
                  type="text"
                  bind:value={requestNote}
                  placeholder="Color, brand or rush delivery..."
                  class="w-full h-9 px-3 text-xs rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:outline-none focus:border-[var(--color-brand-primary)] shadow-2xs"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={requestSubmitted}
              class="w-full h-9 px-4 rounded-[var(--radius-sm)] text-xs font-bold uppercase tracking-wider bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer mt-1"
            >
              {requestSubmitted ? 'Request Sent!' : 'Submit Sourcing Request'}
            </button>
          </form>
        </div>
      {/if}
    </div>
  </div>
{/if}
