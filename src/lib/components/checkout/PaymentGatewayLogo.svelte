<script lang="ts">
  interface Props {
    method: 'cod' | 'bkash' | 'nagad' | 'card' | 'rocket' | string;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  }

  let { method, size = 'md', class: className = '' }: Props = $props();

  // Normalize method name for resilient lookup
  const normalizedMethod = $derived.by(() => {
    const m = (method || '').toLowerCase().trim();
    if (m === 'bkash') return 'bkash';
    if (m === 'nagad') return 'nagad';
    if (m === 'card' || m === 'visa' || m === 'mastercard') return 'card';
    if (m === 'rocket') return 'rocket';
    return 'cod';
  });

  // Size dimensions
  const sizeClasses = $derived.by(() => {
    switch (size) {
      case 'sm':
        return 'w-7 h-7 p-1';
      case 'lg':
        return 'w-11 h-11 p-2';
      case 'md':
      default:
        return 'w-9 h-9 p-1.5';
    }
  });
</script>

<div
  class="relative flex items-center justify-center shrink-0 rounded-[var(--radius-xs)] border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-2xs overflow-hidden select-none transition-transform duration-150 {sizeClasses} {className}"
  title={normalizedMethod.toUpperCase()}
>
  {#if normalizedMethod === 'bkash'}
    <!-- Authentic bKash Origami Bird Emblem -->
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Facet: Top-right Head & Beak -->
      <polygon points="21,5 29.5,13.5 24.2,15 21,5" fill="#C70F5E" />
      <polygon points="27.5,11.5 32,12.8 29.5,14" fill="#9E0B49" />
      <!-- Facet: Upper Right Wing Fold -->
      <polygon points="24.2,15 32.5,16.5 22.8,22.8 24.2,15" fill="#E2136E" />
      <!-- Facet: Main Left Wing -->
      <polygon points="12,8 22.8,16.5 8,18.5 12,8" fill="#F43389" />
      <!-- Facet: Central Body Triangle -->
      <polygon points="8,18.5 22.8,16.5 19,28 8,18.5" fill="#E2136E" />
      <!-- Facet: Lower Right Tail / Wing -->
      <polygon points="22.8,16.5 31,22.5 22,26.5 19,28 22.8,16.5" fill="#D41165" />
      <!-- Facet: Bottom Wing Tip -->
      <polygon points="19,28 22,26.5 20,31 19,28" fill="#A8074B" />
    </svg>
  {:else if normalizedMethod === 'nagad'}
    <!-- Authentic Nagad Swirl / Dynamic Flame Emblem -->
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Outer Swirl / Red-Orange Flame -->
      <path
        d="M18 4C24.5 4 30.5 9.5 30.5 17C30.5 23.5 25.5 29 18.5 31.5C21.8 28.5 23.8 23.5 22.5 19.5C21.2 15.5 17 11.5 18 4Z"
        fill="#ED1C24"
      />
      <!-- Dynamic Middle Flame (Nagad Brand Orange) -->
      <path
        d="M16.5 7C22 10.5 25.5 15.8 24.2 21C23 25.8 18.5 28.5 14 29C17.5 26.5 19.2 22 18 17.5C16.8 13.5 13.8 10.5 16.5 7Z"
        fill="#F7941D"
      />
      <!-- Inner Core Petal (Warm Gold) -->
      <path
        d="M15.5 14C19 16.8 20.5 20.8 19 24C17.5 27 13.5 27.5 11 25.5C13.5 24.8 15 22 14.5 19C14 16.5 13.2 15 15.5 14Z"
        fill="#FFBA00"
      />
      <!-- Small Dynamic Vortex Seed -->
      <circle cx="16" cy="21.5" r="2.2" fill="#ED1C24" />
    </svg>
  {:else if normalizedMethod === 'card'}
    <!-- Authentic Visa & Mastercard Dual Badge -->
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Mastercard Overlapping Circles (Top Half) -->
      <g transform="translate(0, -1)">
        <!-- Left Red Circle -->
        <circle cx="13" cy="14" r="6.2" fill="#EB001B" />
        <!-- Right Yellow-Orange Circle -->
        <circle cx="21" cy="14" r="6.2" fill="#F79E1B" fill-opacity="0.95" />
        <!-- Overlap Intersection -->
        <path
          d="M17 9.8A6.2 6.2 0 0 1 19.2 14 6.2 6.2 0 0 1 17 18.2 6.2 6.2 0 0 1 14.8 14 6.2 6.2 0 0 1 17 9.8Z"
          fill="#FF5F00"
        />
      </g>
      <!-- Visa Wordmark (Bottom Half) -->
      <g transform="translate(0, 1)">
        <text
          x="18"
          y="27.5"
          text-anchor="middle"
          font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          font-size="7.5"
          font-weight="900"
          font-style="italic"
          letter-spacing="0.8"
          fill="#1A1F71"
          class="dark:fill-blue-400"
        >
          VISA
        </text>
        <!-- Golden Accent Wing on Visa 'V' -->
        <path d="M10.8 22.8L12.5 22.8L11.8 25L10.8 22.8Z" fill="#F7B600" />
      </g>
    </svg>
  {:else if normalizedMethod === 'rocket'}
    <!-- DBBL Rocket Purple Badge -->
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <rect x="4" y="6" width="28" height="24" rx="3" fill="#8C3494" />
      <!-- Rocket Silhouette -->
      <path
        d="M18 10C18 10 22 14 22 19L24 22L21 21.5L19 25L18 23L17 25L15 21.5L12 22L14 19C14 14 18 10 18 10Z"
        fill="#FFFFFF"
      />
      <circle cx="18" cy="15" r="1.5" fill="#8C3494" />
    </svg>
  {:else}
    <!-- Cash on Delivery (Bangladeshi Taka ৳ Emerald Emblem) -->
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Banknote Outline Body -->
      <rect
        x="4" y="8"
        width="28" height="20"
        rx="2.5"
        fill="#ECFDF5"
        stroke="#059669"
        stroke-width="1.8"
        class="dark:fill-emerald-950/60 dark:stroke-emerald-500"
      />
      <!-- Security Watermark Corner Dots -->
      <circle cx="8" cy="18" r="1.5" fill="#059669" class="dark:fill-emerald-400" opacity="0.7" />
      <circle cx="28" cy="18" r="1.5" fill="#059669" class="dark:fill-emerald-400" opacity="0.7" />
      <!-- Center Emblem Circle -->
      <circle cx="18" cy="18" r="6.5" fill="#059669" class="dark:fill-emerald-600" />
      <!-- Bangladeshi Taka Symbol ৳ -->
      <text
        x="18"
        y="21.8"
        text-anchor="middle"
        font-family="system-ui, -apple-system, 'Segoe UI', 'Noto Sans Bengali', sans-serif"
        font-size="10.5"
        font-weight="900"
        fill="#FFFFFF"
      >
        ৳
      </text>
    </svg>
  {/if}
</div>
