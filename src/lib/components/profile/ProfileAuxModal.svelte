<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState } from '$lib/state.svelte';
  import {
    MOCK_PROMOS,
    MOCK_REVIEWS,
    type Order
  } from '$lib/data/mockProfile';
  import {
    Cancel01Icon,
    StarIcon,
    Ticket02Icon,
    DeliveryReturn01Icon,
    GiftIcon,
    CheckmarkBadge01Icon,
    Copy01Icon,
    WhatsappIcon,
    Clock01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    type: 'reviews' | 'returns' | 'promos' | 'request' | null;
    orders?: Order[];
    isOpen: boolean;
    onClose: () => void;
  }

  let { type, orders = [], isOpen, onClose }: Props = $props();

  // Request form state
  let requestModel = $state('');
  let requestAccessory = $state('');
  let requestPhone = $state('+880 1712-345678');
  let requestNote = $state('');
  let requestSubmitted = $state(false);

  // Return selection state
  let selectedReturnOrderId = $state<string | null>(null);
  let returnReason = $state('Defective / Not functioning');
  let returnSubmitted = $state(false);

  // Review submission state
  let newReviewRating = $state(5);
  let newReviewComment = $state('');
  let reviewSubmitted = $state(false);

  function copyPromo(code: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    cartState.showToast(`Coupon code "${code}" copied to clipboard!`);
  }

  function handleRequestSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!requestModel || !requestAccessory) return;
    requestSubmitted = true;
    cartState.showToast(`Request submitted for ${requestModel} ${requestAccessory}!`);
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
    cartState.showToast(`Return request logged for order #${selectedReturnOrderId || 'latest'}!`);
    setTimeout(() => {
      returnSubmitted = false;
      onClose();
    }, 1400);
  }

  function handleReviewSubmit(e: SubmitEvent) {
    e.preventDefault();
    reviewSubmitted = true;
    cartState.showToast('Thank you for your 5-star review!');
    setTimeout(() => {
      reviewSubmitted = false;
      newReviewComment = '';
      onClose();
    }, 1400);
  }
</script>

{#if isOpen && type}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] rounded-2xl shadow-xl w-full max-w-lg overflow-hidden border border-[var(--color-border-default)] transition-all animate-scale-up"
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-default)] bg-[var(--color-bg-subtle)]/50">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]">
            {#if type === 'reviews'}
              <Icon icon={StarIcon} size={20} />
            {:else if type === 'returns'}
              <Icon icon={DeliveryReturn01Icon} size={20} />
            {:else if type === 'promos'}
              <Icon icon={Ticket02Icon} size={20} />
            {:else if type === 'request'}
              <Icon icon={GiftIcon} size={20} />
            {/if}
          </div>
          <div>
            <h3 class="text-base font-black text-[var(--color-text-primary)]">
              {#if type === 'reviews'}
                My Product Reviews
              {:else if type === 'returns'}
                Returns & Warranty Claims
              {:else if type === 'promos'}
                Active Vouchers & Promos
              {:else if type === 'request'}
                Request an Accessory
              {/if}
            </h3>
            <p class="text-xs text-[var(--color-text-secondary)]">
              {#if type === 'reviews'}
                Verified reviews and feedback
              {:else if type === 'returns'}
                7-day hassle-free Joy Telecom guarantee
              {:else if type === 'promos'}
                Exclusive coupon discounts for your account
              {:else if type === 'request'}
                Can't find your phone model? We'll source it!
              {/if}
            </p>
          </div>
        </div>

        <button
          type="button"
          onclick={onClose}
          class="p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <Icon icon={Cancel01Icon} size={18} />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 max-h-[75vh] overflow-y-auto">
        <!-- 1. PROMOS MODAL -->
        {#if type === 'promos'}
          <div class="space-y-3">
            {#each MOCK_PROMOS as promo}
              <div class="p-4 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] hover:border-[var(--color-brand-primary)] transition-all">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div class="flex items-center gap-2 mb-0.5">
                      <span class="text-sm font-black text-[var(--color-text-primary)]">{promo.discount}</span>
                      {#if promo.badge}
                        <span class="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/40">
                          {promo.badge}
                        </span>
                      {/if}
                    </div>
                    <p class="text-xs font-medium text-[var(--color-text-secondary)]">{promo.title}</p>
                  </div>

                  <button
                    type="button"
                    onclick={() => copyPromo(promo.code)}
                    class="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-xs font-black bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer shrink-0"
                  >
                    <span>{promo.code}</span>
                    <Icon icon={Copy01Icon} size={13} />
                  </button>
                </div>

                <div class="flex items-center justify-between text-[11px] text-[var(--color-text-muted)] pt-2 border-t border-[var(--color-border-subtle)]">
                  <span>Min. Spend: {promo.minSpend}</span>
                  <span class="flex items-center gap-1">
                    <Icon icon={Clock01Icon} size={12} />
                    Expires: {promo.expires}
                  </span>
                </div>
              </div>
            {/each}
          </div>

        <!-- 2. REVIEWS MODAL -->
        {:else if type === 'reviews'}
          <div class="space-y-4">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2.5">
                Past Verified Reviews ({MOCK_REVIEWS.length})
              </h4>
              <div class="space-y-3">
                {#each MOCK_REVIEWS as review}
                  <div class="p-3.5 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)]">
                    <div class="flex items-start justify-between gap-2 mb-1.5">
                      <h5 class="text-xs font-bold text-[var(--color-text-primary)] line-clamp-1">{review.productName}</h5>
                      <span class="text-[11px] text-[var(--color-text-muted)] shrink-0">{review.date}</span>
                    </div>

                    <div class="flex items-center gap-1 text-amber-500 mb-2">
                      {#each Array(review.rating) as _}
                        <Icon icon={StarIcon} size={13} class="fill-amber-400 text-amber-400" />
                      {/each}
                    </div>

                    <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed italic">
                      "{review.comment}"
                    </p>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Add new review form -->
            <form onsubmit={handleReviewSubmit} class="p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-3">
              <h4 class="text-xs font-bold text-[var(--color-brand-primary)]">Write a New Review</h4>
              <div>
                <span class="block text-[11px] font-semibold text-[var(--color-text-secondary)] mb-1">Rating</span>
                <div class="flex items-center gap-2">
                  {#each [1, 2, 3, 4, 5] as star}
                    <button
                      type="button"
                      onclick={() => (newReviewRating = star)}
                      class="text-amber-500 hover:scale-110 transition-transform cursor-pointer p-0.5"
                    >
                      <Icon icon={StarIcon} size={20} class={star <= newReviewRating ? 'text-amber-500 fill-amber-400' : 'text-slate-300 dark:text-slate-600'} />
                    </button>
                  {/each}
                  <span class="text-xs font-bold text-[var(--color-text-primary)] ml-1">{newReviewRating} / 5 Stars</span>
                </div>
              </div>

              <div>
                <label for="review-feedback" class="block text-[11px] font-semibold text-[var(--color-text-secondary)] mb-1">Your Feedback</label>
                <textarea
                  id="review-feedback"
                  bind:value={newReviewComment}
                  placeholder="Share details of your experience with Joy Telecom authentic gadgets..."
                  rows="2"
                  required
                  class="w-full h-20 px-3.5 py-2.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={reviewSubmitted}
                class="w-full h-11 px-4 rounded-xl text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              >
                {reviewSubmitted ? 'Submitted!' : 'Post Review'}
              </button>
            </form>
          </div>

        <!-- 3. RETURNS MODAL -->
        {:else if type === 'returns'}
          <div class="space-y-4">
            <!-- Return Policy Highlights -->
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <p class="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <Icon icon={CheckmarkBadge01Icon} size={15} class="text-amber-600 dark:text-amber-400" />
                7-Day Official Return Guarantee
              </p>
              <p class="text-[11px] text-amber-700 dark:text-amber-300/80 leading-relaxed">
                Accessories in unopened packaging or with manufacturing defects are eligible for instant exchange or 100% refund.
              </p>
            </div>

            <!-- Initiate Return Form -->
            <form onsubmit={handleReturnSubmit} class="space-y-3.5">
              <div>
                <label for="return-order-select" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Select Order to Return</label>
                <select
                  id="return-order-select"
                  bind:value={selectedReturnOrderId}
                  class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
                >
                  {#each orders as order}
                    <option value={order.id}>Order #{order.orderNumber} ({order.date}) — ৳{order.total.toLocaleString('en-BD')}</option>
                  {/each}
                </select>
              </div>

              <div>
                <label for="return-reason-select" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Reason for Return</label>
                <select
                  id="return-reason-select"
                  bind:value={returnReason}
                  class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
                >
                  <option value="Defective / Not functioning">Defective / Not functioning</option>
                  <option value="Wrong product received">Wrong product received</option>
                  <option value="Changed mind / Incompatible model">Changed mind / Incompatible model</option>
                  <option value="Damaged packaging during transit">Damaged packaging during transit</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={returnSubmitted}
                class="w-full h-11 px-4 rounded-xl text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              >
                {returnSubmitted ? 'Claim Submitted!' : 'Initiate Return Request'}
              </button>
            </form>

            <!-- Quick Hotline Support -->
            <div class="p-3.5 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] flex items-center justify-between text-xs">
              <span class="text-[var(--color-text-secondary)]">Need urgent replacement?</span>
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <Icon icon={WhatsappIcon} size={15} />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>

        <!-- 4. REQUEST ACCESSORY MODAL -->
        {:else if type === 'request'}
          <form onsubmit={handleRequestSubmit} class="space-y-3.5">
            <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Looking for a rare tempered glass, phone skin, or MagSafe case that isn't listed in our catalog yet? Tell us what you need and our procurement team will source it for you within 48 hours.
            </p>

            <div>
              <label for="req-phone-model" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Phone Model *</label>
              <input
                id="req-phone-model"
                type="text"
                bind:value={requestModel}
                placeholder="e.g. Google Pixel 9 Pro Fold, iPhone 16 Plus"
                required
                class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
              />
            </div>

            <div>
              <label for="req-accessory-type" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Accessory Type *</label>
              <input
                id="req-accessory-type"
                type="text"
                bind:value={requestAccessory}
                placeholder="e.g. Matte Privacy Screen Protector, Dbrand Skin"
                required
                class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
              />
            </div>

            <div>
              <label for="req-contact-phone" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Contact Phone</label>
              <input
                id="req-contact-phone"
                type="tel"
                bind:value={requestPhone}
                required
                class="w-full h-11 px-3.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
              />
            </div>

            <div>
              <label for="req-notes" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">Additional Notes</label>
              <textarea
                id="req-notes"
                bind:value={requestNote}
                placeholder="Preferred color, brand, or urgent delivery requirements..."
                rows="2"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={requestSubmitted}
              class="w-full h-11 px-4 rounded-xl text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
            >
              {requestSubmitted ? 'Request Sent!' : 'Submit Accessory Request'}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
{/if}
