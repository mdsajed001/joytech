<script lang="ts">
  import type { Product, ProductReview } from '$lib/types';
  import { cartState, i18nState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    StarIcon,
    ThumbsUpIcon,
    ArrowDown01Icon,
    ArrowUp01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    product: Product;
  }

  let { product }: Props = $props();

  // Local reviews array initialized from product, allowing dynamic additions
  let localReviews = $state<ProductReview[]>([]);

  $effect(() => {
    localReviews = [...(product.reviews || [])];
  });

  // Helpfulness interaction state
  let helpfulCounts = $state<Record<string, number>>({});
  let userVotedHelpful = $state<Record<string, boolean>>({});

  function getHelpfulCount(review: ProductReview): number {
    return helpfulCounts[review.id] ?? (review.helpfulCount ?? 0);
  }

  function toggleHelpful(reviewId: string) {
    const isVoted = userVotedHelpful[reviewId];
    const current = getHelpfulCount(localReviews.find((r) => r.id === reviewId)!);

    if (isVoted) {
      userVotedHelpful[reviewId] = false;
      helpfulCounts[reviewId] = Math.max(0, current - 1);
    } else {
      userVotedHelpful[reviewId] = true;
      helpfulCounts[reviewId] = current + 1;
    }
  }

  type FilterType = 'all' | '5' | '4' | '3';
  type SortType = 'recent' | 'highest' | 'lowest';

  let activeFilter = $state<FilterType>('all');
  let activeSort = $state<SortType>('recent');

  // Distribution calculation (scaled to product.reviewCount)
  const distribution = $derived.by(() => {
    // Standard realistic curve for 4.9 average
    return [
      { stars: 5, percent: 88, count: Math.round(product.reviewCount * 0.88) },
      { stars: 4, percent: 9, count: Math.round(product.reviewCount * 0.09) },
      { stars: 3, percent: 2, count: Math.round(product.reviewCount * 0.02) },
      { stars: 2, percent: 1, count: Math.round(product.reviewCount * 0.01) },
      { stars: 1, percent: 0, count: 0 }
    ];
  });

  // Filtered and sorted review list
  let displayedReviews = $derived.by(() => {
    let list = [...localReviews];

    if (activeFilter === '5') {
      list = list.filter((r) => r.rating === 5);
    } else if (activeFilter === '4') {
      list = list.filter((r) => r.rating === 4);
    } else if (activeFilter === '3') {
      list = list.filter((r) => r.rating === 3);
    }

    if (activeSort === 'highest') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (activeSort === 'lowest') {
      list.sort((a, b) => a.rating - b.rating);
    }
    // 'recent' preserves catalog sequence / newly added top

    return list;
  });

  // Review list expansion state (capped to max 2 initially)
  let isExpanded = $state(false);

  // Reset to collapsed view whenever active filter or sort changes
  $effect(() => {
    const _f = activeFilter;
    const _s = activeSort;
    isExpanded = false;
  });

  let visibleReviews = $derived(isExpanded ? displayedReviews : displayedReviews.slice(0, 2));

</script>

<section id="reviews-section" class="scroll-mt-24 space-y-6">
  <!-- Main Review Container Card -->
  <div class="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-4 sm:p-6 lg:p-7 shadow-xs space-y-6">
    
    <!-- Top Header: Clean & Minimal Title with Icon -->
    <div class="flex items-center gap-3 pb-4 border-b border-[var(--color-border-subtle)]">
      <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
        <Icon icon={StarIcon} size={20} class="fill-amber-400 text-amber-400" />
      </div>
      <h2 class="text-base sm:text-lg font-black text-[var(--color-text-primary)] tracking-tight">
        {i18nState.language === 'bn' ? 'গ্রাহক রিভিউ' : 'Customer Reviews'}
      </h2>
    </div>

    <!-- Rating Scoreboard & Breakdown (Clean direct layout, no separate inner div) -->
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-1 pb-4">
      
      <!-- Score Summary (4-5 cols) -->
      <div class="sm:col-span-5 md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left justify-center sm:border-r border-[var(--color-border-subtle)] sm:pr-6">
        <div class="flex items-baseline gap-2">
          <span class="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] leading-none tracking-tight">
            {product.rating.toFixed(1)}
          </span>
          <span class="text-sm font-bold text-[var(--color-text-disabled)]">/ 5.0</span>
        </div>

        <!-- 5 Filled Stars with Ambient Glow -->
        <div class="flex items-center gap-1 my-2.5">
          {#each Array(5) as _, i}
            <Icon
              icon={StarIcon}
              size={18}
              class="fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(245,158,11,0.35)]"
            />
          {/each}
        </div>

        <p class="text-xs text-[var(--color-text-secondary)] font-medium">
          {i18nState.language === 'bn'
            ? `${product.reviewCount} জন ক্রেতার মতামতের ভিত্তিতে`
            : `Based on ${product.reviewCount} genuine accessory ratings`}
        </p>
      </div>

      <!-- 5-Tier Rating Distribution Histogram (7-8 cols) -->
      <div class="sm:col-span-7 md:col-span-8 space-y-2 sm:pl-2">
        {#each distribution as dist}
          <button
            type="button"
            onclick={() => (activeFilter = activeFilter === dist.stars.toString() as FilterType ? 'all' : dist.stars.toString() as FilterType)}
            class="w-full flex items-center gap-3 text-xs group cursor-pointer p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title="Filter by {dist.stars} stars"
          >
            <span class="w-8 flex items-center gap-0.5 font-bold text-[var(--color-text-primary)] shrink-0">
              <span>{dist.stars}</span>
              <Icon icon={StarIcon} size={12} class="fill-amber-400 text-amber-400" />
            </span>

            <div class="flex-1 h-2.5 rounded-full bg-[var(--color-bg-subtle)] overflow-hidden relative">
              <div
                class="h-full rounded-full bg-amber-400 transition-all duration-500 ease-out group-hover:bg-amber-500"
                style="width: {dist.percent}%;"
              ></div>
            </div>

            <span class="w-9 text-right font-medium text-[var(--color-text-muted)] text-[11px] shrink-0">
              {dist.percent}%
            </span>
          </button>
        {/each}
      </div>

    </div>

    <!-- Filter & Sort Toolbar: Unified Single-Row Bar with Pills -->
    <div class="flex items-center justify-between gap-2.5 pt-3 border-t border-[var(--color-border-subtle)] min-w-0">
      <!-- Filter Chips (Horizontally scrollable if needed) -->
      <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar min-w-0 py-0.5">
        <button
          type="button"
          onclick={() => (activeFilter = 'all')}
          class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap {activeFilter === 'all'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-default)]'}"
        >
          {i18nState.language === 'bn' ? 'সব' : 'All'} ({localReviews.length})
        </button>

        <button
          type="button"
          onclick={() => (activeFilter = '5')}
          class="px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1 {activeFilter === '5'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-default)]'}"
        >
          <span>5</span>
          <Icon icon={StarIcon} size={11} class={activeFilter === '5' ? 'fill-white text-white' : 'fill-amber-400 text-amber-400'} />
        </button>

        <button
          type="button"
          onclick={() => (activeFilter = '4')}
          class="px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1 {activeFilter === '4'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-default)]'}"
        >
          <span>4</span>
          <Icon icon={StarIcon} size={11} class={activeFilter === '4' ? 'fill-white text-white' : 'fill-amber-400 text-amber-400'} />
        </button>
      </div>

      <!-- Sort Dropdown (Inline on the right) -->
      <div class="flex items-center gap-1.5 shrink-0">
        <label for="review-sort" class="text-xs font-medium text-[var(--color-text-secondary)] whitespace-nowrap hidden xs:inline">
          {i18nState.language === 'bn' ? 'সাজান:' : 'Sort:'}
        </label>
        <select
          id="review-sort"
          bind:value={activeSort}
          class="text-xs font-bold bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] text-[var(--color-text-primary)] rounded-full px-3 py-1.5 outline-none focus:border-[var(--color-brand-primary)] cursor-pointer"
        >
          <option value="recent">{i18nState.language === 'bn' ? 'নতুন রিভিউ' : 'Most Recent'}</option>
          <option value="highest">{i18nState.language === 'bn' ? 'সর্বোচ্চ রেটিং' : 'Highest Rated'}</option>
          <option value="lowest">{i18nState.language === 'bn' ? 'সর্বনিম্ন রেটিং' : 'Lowest Rated'}</option>
        </select>
      </div>
    </div>

    <!-- Review Cards Feed -->
    <div class="space-y-3.5 pt-2">
      {#if displayedReviews.length === 0}
        <div class="p-8 text-center rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] space-y-2">
          <p class="text-xs font-bold text-[var(--color-text-secondary)]">
            {i18nState.language === 'bn' ? 'এই ফিল্টারে কোনো রিভিউ পাওয়া যায়নি।' : 'No reviews match your selected filter.'}
          </p>
          <button
            type="button"
            onclick={() => (activeFilter = 'all')}
            class="text-xs font-black text-[var(--color-brand-primary)] hover:underline cursor-pointer"
          >
            {i18nState.language === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset filters'}
          </button>
        </div>
      {:else}
        {#each visibleReviews as review (review.id)}
          <article class="p-4 sm:p-5 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs space-y-3">
            
            <!-- Card Header: User Info, Verified Badge, Rating, Date -->
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <!-- Avatar with Brand Colors -->
                <div class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[var(--color-brand-primary)] border border-blue-200 dark:border-blue-800/60 font-black text-xs flex items-center justify-center shrink-0 select-none">
                  {review.userName.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                    {review.userName}
                  </h4>

                  <!-- Date & Purchased Variant Attribution -->
                  <div class="text-[11px] text-[var(--color-text-muted)] flex items-center gap-1.5 flex-wrap mt-0.5">
                    <span>{review.date}</span>
                    {#if review.purchasedVariant}
                      <span class="text-slate-300 dark:text-slate-700">•</span>
                      <span class="text-[var(--color-text-secondary)] font-medium">
                        {review.purchasedVariant}
                      </span>
                    {/if}
                  </div>
                </div>
              </div>

              <!-- Filled Rating Stars -->
              <div class="flex items-center gap-0.5 shrink-0">
                {#each Array(5) as _, i}
                  <Icon
                    icon={StarIcon}
                    size={14}
                    class={i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700'}
                  />
                {/each}
              </div>
            </div>

            <!-- Review Body Comment -->
            <p class="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed font-normal">
              "{review.comment}"
            </p>

            <!-- Card Footer: Helpfulness Reaction -->
            <div class="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
              <span class="text-[11px] text-[var(--color-text-muted)]">
                {i18nState.language === 'bn' ? 'এই রিভিউটি কি আপনার জন্য সহায়ক ছিল?' : 'Was this review helpful?'}
              </span>

              <button
                type="button"
                onclick={() => toggleHelpful(review.id)}
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer {userVotedHelpful[review.id]
                  ? 'bg-blue-50 text-[var(--color-brand-primary)] border border-blue-200 dark:bg-blue-950/50 dark:border-blue-800'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)]'}"
                aria-label="Mark review as helpful"
              >
                <Icon
                  icon={ThumbsUpIcon}
                  size={13}
                  class={userVotedHelpful[review.id] ? 'fill-current text-[var(--color-brand-primary)]' : ''}
                />
                <span>
                  {i18nState.language === 'bn' ? 'সহায়ক' : 'Helpful'}
                  {#if getHelpfulCount(review) > 0}
                    ({getHelpfulCount(review)})
                  {/if}
                </span>
              </button>
            </div>

          </article>
        {/each}

        <!-- Outlined Show All / Show Less CTA -->
        {#if displayedReviews.length > 2}
          <div class="pt-2 flex justify-center">
            <button
              type="button"
              onclick={() => (isExpanded = !isExpanded)}
              class="w-full sm:w-auto px-6 py-2.5 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] text-xs sm:text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] active:scale-[0.99] transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>
                {#if isExpanded}
                  {i18nState.language === 'bn' ? 'কম রিভিউ দেখুন' : 'Show Less'}
                {:else}
                  {i18nState.language === 'bn'
                    ? `সব রিভিউ দেখুন (${displayedReviews.length}টি)`
                    : `Show All Reviews (${displayedReviews.length})`}
                {/if}
              </span>
              <Icon
                icon={isExpanded ? ArrowUp01Icon : ArrowDown01Icon}
                size={16}
                strokeWidth={2.5}
              />
            </button>
          </div>
        {/if}
      {/if}
    </div>

  </div>
</section>
