<script lang="ts">
  import type { Product } from '$lib/types';
  import Badge from '$lib/components/Badge.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    Shield01Icon,
    ArrowLeft01Icon,
    ArrowRight01Icon,
    Cancel01Icon,
    ExpandIcon,
    PlayIcon,
    PauseIcon,
    VolumeHighIcon,
    VolumeMute01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    product: Product;
    activeImageOverride?: string | null;
  }

  interface MediaItem {
    id: string;
    type: 'image' | 'video';
    url: string;
    poster?: string;
    title?: string;
  }

  let { product, activeImageOverride = null }: Props = $props();

  let heroContainer: HTMLDivElement | null = $state(null);
  let thumbnailRail: HTMLDivElement | null = $state(null);
  let videoElement: HTMLVideoElement | null = $state(null);
  let lightboxVideoElement: HTMLVideoElement | null = $state(null);

  let activeIndex = $state(0);

  // Video playback states
  let isVideoPlaying = $state(false);
  let isVideoMuted = $state(true);

  // Desktop Hover-Zoom State
  let isHoverZooming = $state(false);
  let zoomOriginX = $state(50);
  let zoomOriginY = $state(50);

  // Full-Screen Lightbox State
  let isLightboxOpen = $state(false);

  // Thumbnail rail scroll indicators for desktop
  let canScrollLeft = $state(false);
  let canScrollRight = $state(false);

  // Directional Touch & Pointer Swipe Engine for Main Preview Stage
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartTime = 0;
  let dragOffset = $state(0);
  let isDragging = $state(false);
  let isSwipeGesture = false;
  let hasMoved = false;
  let activePointerId: number | null = null;

  // Directional Touch & Pointer Swipe Engine for Full-Screen Lightbox Modal
  let lightboxDragStartX = 0;
  let lightboxDragStartY = 0;
  let lightboxDragStartTime = 0;
  let lightboxDragOffset = $state(0);
  let isLightboxDragging = $state(false);
  let isLightboxSwipeGesture = false;
  let hasLightboxMoved = false;
  let activeLightboxPointerId: number | null = null;

  // Array of thumbnail button references for auto-centering
  let thumbnailButtons: (HTMLButtonElement | null)[] = [];

  // Base gallery images
  let baseImages = $derived(
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.image]
  );

  // If a variant provides an activeImageOverride not in baseImages, insert it at the beginning
  let displayImages = $derived.by(() => {
    if (!activeImageOverride) return baseImages;
    if (baseImages.includes(activeImageOverride)) return baseImages;
    return [activeImageOverride, ...baseImages];
  });

  // Unified Media Items collection (Image 1, Video demo if present, then remaining photos)
  let mediaItems = $derived.by<MediaItem[]>(() => {
    const items: MediaItem[] = [];
    const primaryImg = activeImageOverride || displayImages[0] || product.image;

    // 1. Primary Hero Image
    items.push({
      id: 'media-primary',
      type: 'image',
      url: primaryImg,
      title: `${product.name} - Primary View`
    });

    // 2. Product Video (if available) placed directly after primary photo
    if (product.video && product.video.url) {
      items.push({
        id: 'media-video',
        type: 'video',
        url: product.video.url,
        poster: product.video.poster || primaryImg,
        title: product.video.title || `${product.name} Demonstration Video`
      });
    }

    // 3. Remaining gallery images
    displayImages.slice(1).forEach((imgUrl, i) => {
      items.push({
        id: `media-img-${i + 1}`,
        type: 'image',
        url: imgUrl,
        title: `${product.name} - View ${i + 2}`
      });
    });

    return items;
  });

  let currentMedia = $derived(mediaItems[activeIndex] ?? mediaItems[0]);

  // Check thumbnail rail overflow to show/hide desktop chevron controls
  function updateThumbnailScrollState() {
    if (!thumbnailRail) return;
    const { scrollLeft, scrollWidth, clientWidth } = thumbnailRail;
    canScrollLeft = scrollLeft > 8;
    canScrollRight = scrollLeft + clientWidth < scrollWidth - 8;
  }

  // Scroll thumbnail rail by offset on desktop button clicks
  function scrollThumbnailRail(direction: 'left' | 'right') {
    if (!thumbnailRail) return;
    const amount = direction === 'left' ? -240 : 240;
    thumbnailRail.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(updateThumbnailScrollState, 350);
  }

  // Core navigation function to jump to any slide
  function goToSlide(index: number) {
    const targetIdx = Math.max(0, Math.min(index, mediaItems.length - 1));
    handleIndexChange(targetIdx);
  }

  function handleIndexChange(newIdx: number) {
    // If switching away from video, pause it
    if (currentMedia?.type === 'video' && videoElement) {
      videoElement.pause();
      isVideoPlaying = false;
    }
    activeIndex = newIdx;
    autoCenterActiveThumbnail(newIdx);
  }

  // Auto-scroll active thumbnail into center of the rail without scrolling the page
  function autoCenterActiveThumbnail(index: number) {
    const targetThumb = thumbnailButtons[index];
    if (targetThumb && thumbnailRail) {
      const railRect = thumbnailRail.getBoundingClientRect();
      const thumbRect = targetThumb.getBoundingClientRect();
      const currentScroll = thumbnailRail.scrollLeft;
      const targetScroll = currentScroll + (thumbRect.left - railRect.left) - (railRect.width / 2) + (thumbRect.width / 2);
      thumbnailRail.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
      setTimeout(updateThumbnailScrollState, 350);
    }
  }

  // React to variant override changes
  $effect(() => {
    if (activeImageOverride) {
      const idx = mediaItems.findIndex((m) => m.url === activeImageOverride);
      if (idx !== -1 && idx !== activeIndex) {
        goToSlide(idx);
      }
    }
  });

  function handleResize() {
    updateThumbnailScrollState();
  }

  $effect(() => {
    updateThumbnailScrollState();
  });

  // Video Controls
  function toggleVideoPlay() {
    if (!videoElement) return;
    if (videoElement.paused) {
      videoElement.play();
      isVideoPlaying = true;
    } else {
      videoElement.pause();
      isVideoPlaying = false;
    }
  }

  function toggleVideoMute(e: MouseEvent) {
    e.stopPropagation();
    if (!videoElement) return;
    videoElement.muted = !videoElement.muted;
    isVideoMuted = videoElement.muted;
  }

  // Desktop Mouse Move Handler for Dynamic Pan Zoom
  function handleMouseMove(e: MouseEvent) {
    if (!heroContainer || isDragging || currentMedia?.type === 'video') return;
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const rect = heroContainer.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        zoomOriginX = Math.max(0, Math.min(100, Math.round(x * 10) / 10));
        zoomOriginY = Math.max(0, Math.min(100, Math.round(y * 10) / 10));
        isHoverZooming = true;
      }
    }
  }

  function handleMouseEnter(e: MouseEvent) {
    if (currentMedia?.type === 'video') return;
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      handleMouseMove(e);
      isHoverZooming = true;
    }
  }

  function handleMouseLeave() {
    isHoverZooming = false;
  }

  // Lightbox Modal Controls
  function openLightbox() {
    isHoverZooming = false;
    if (videoElement) {
      videoElement.pause();
      isVideoPlaying = false;
    }
    isLightboxOpen = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    isLightboxOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!isLightboxOpen) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToSlide(activeIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToSlide(activeIndex + 1);
    }
  }

  // Main Stage Gesture Engine
  function onGestureStart(clientX: number, clientY: number, pointerId?: number) {
    dragStartX = clientX;
    dragStartY = clientY;
    dragStartTime = Date.now();
    isDragging = false;
    isSwipeGesture = false;
    hasMoved = false;
    dragOffset = 0;
    if (pointerId !== undefined) activePointerId = pointerId;
  }

  function onGestureMove(clientX: number, clientY: number) {
    const dx = clientX - dragStartX;
    const dy = clientY - dragStartY;

    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      hasMoved = true;
    }

    // Horizontal angle lock: horizontal movement dominates vertical movement
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isSwipeGesture = true;
      isDragging = true;
      isHoverZooming = false;
      // Resistance at bounds
      if ((activeIndex === 0 && dx > 0) || (activeIndex === mediaItems.length - 1 && dx < 0)) {
        dragOffset = dx * 0.3;
      } else {
        dragOffset = dx;
      }
    }
  }

  function onGestureEnd(clientX: number, clientY: number) {
    const dx = clientX - dragStartX;
    const dy = clientY - dragStartY;
    const elapsed = Date.now() - dragStartTime;

    isDragging = false;
    dragOffset = 0;
    activePointerId = null;

    const isQuickFlick = elapsed < 250 && Math.abs(dx) > 25;
    if (isSwipeGesture && (Math.abs(dx) > 35 || isQuickFlick)) {
      if (dx < 0 && activeIndex < mediaItems.length - 1) {
        goToSlide(activeIndex + 1);
      } else if (dx > 0 && activeIndex > 0) {
        goToSlide(activeIndex - 1);
      }
      setTimeout(() => {
        hasMoved = false;
        isSwipeGesture = false;
      }, 200);
      return;
    }

    // Stationary quick tap (< 250ms, < 8px) opens lightbox
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8 && elapsed < 250) {
      if (currentMedia?.type !== 'video') {
        openLightbox();
      }
    }

    setTimeout(() => {
      hasMoved = false;
      isSwipeGesture = false;
    }, 200);
  }

  // Mobile Touch Listeners for Main Preview
  function handleTouchStart(e: TouchEvent) {
    if (e.touches.length > 0) {
      onGestureStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function handleTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      onGestureMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function handleTouchEnd(e: TouchEvent) {
    if (e.changedTouches.length > 0) {
      onGestureEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
  }

  // Desktop Mouse Drag Listeners for Main Preview
  function handlePointerDown(e: PointerEvent) {
    if (e.pointerType === 'mouse' && e.button === 0) {
      onGestureStart(e.clientX, e.clientY, e.pointerId);
      (e.currentTarget as HTMLElement)?.setPointerCapture?.(e.pointerId);
    }
  }

  function handlePointerMove(e: PointerEvent) {
    if (activePointerId === e.pointerId) {
      onGestureMove(e.clientX, e.clientY);
    }
  }

  function handlePointerUp(e: PointerEvent) {
    if (activePointerId === e.pointerId) {
      (e.currentTarget as HTMLElement)?.releasePointerCapture?.(e.pointerId);
      onGestureEnd(e.clientX, e.clientY);
    }
  }

  function handlePointerCancel(e: PointerEvent) {
    if (activePointerId === e.pointerId) {
      (e.currentTarget as HTMLElement)?.releasePointerCapture?.(e.pointerId);
      isDragging = false;
      dragOffset = 0;
      activePointerId = null;
    }
  }

  function handleSlideClick(e: MouseEvent) {
    if (hasMoved || isSwipeGesture || isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    openLightbox();
  }

  // Lightbox Modal Gesture Engine
  function onLightboxGestureStart(clientX: number, clientY: number, pointerId?: number) {
    lightboxDragStartX = clientX;
    lightboxDragStartY = clientY;
    lightboxDragStartTime = Date.now();
    isLightboxDragging = false;
    isLightboxSwipeGesture = false;
    hasLightboxMoved = false;
    lightboxDragOffset = 0;
    if (pointerId !== undefined) activeLightboxPointerId = pointerId;
  }

  function onLightboxGestureMove(clientX: number, clientY: number) {
    const dx = clientX - lightboxDragStartX;
    const dy = clientY - lightboxDragStartY;

    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      hasLightboxMoved = true;
    }

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isLightboxSwipeGesture = true;
      isLightboxDragging = true;
      if ((activeIndex === 0 && dx > 0) || (activeIndex === mediaItems.length - 1 && dx < 0)) {
        lightboxDragOffset = dx * 0.3;
      } else {
        lightboxDragOffset = dx;
      }
    }
  }

  function onLightboxGestureEnd(clientX: number, clientY: number) {
    const dx = clientX - lightboxDragStartX;
    const dy = clientY - lightboxDragStartY;
    const elapsed = Date.now() - lightboxDragStartTime;

    isLightboxDragging = false;
    lightboxDragOffset = 0;
    activeLightboxPointerId = null;

    const isQuickFlick = elapsed < 250 && Math.abs(dx) > 25;
    if (isLightboxSwipeGesture && (Math.abs(dx) > 35 || isQuickFlick)) {
      if (dx < 0 && activeIndex < mediaItems.length - 1) {
        goToSlide(activeIndex + 1);
      } else if (dx > 0 && activeIndex > 0) {
        goToSlide(activeIndex - 1);
      }
    }

    setTimeout(() => {
      hasLightboxMoved = false;
      isLightboxSwipeGesture = false;
    }, 200);
  }

  function handleLightboxTouchStart(e: TouchEvent) {
    if (e.touches.length > 0) {
      onLightboxGestureStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function handleLightboxTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      onLightboxGestureMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function handleLightboxTouchEnd(e: TouchEvent) {
    if (e.changedTouches.length > 0) {
      onLightboxGestureEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
  }

  function handleLightboxPointerDown(e: PointerEvent) {
    if (e.pointerType === 'mouse' && e.button === 0) {
      onLightboxGestureStart(e.clientX, e.clientY, e.pointerId);
      (e.currentTarget as HTMLElement)?.setPointerCapture?.(e.pointerId);
    }
  }

  function handleLightboxPointerMove(e: PointerEvent) {
    if (activeLightboxPointerId === e.pointerId) {
      onLightboxGestureMove(e.clientX, e.clientY);
    }
  }

  function handleLightboxPointerUp(e: PointerEvent) {
    if (activeLightboxPointerId === e.pointerId) {
      (e.currentTarget as HTMLElement)?.releasePointerCapture?.(e.pointerId);
      onLightboxGestureEnd(e.clientX, e.clientY);
    }
  }

  function handleLightboxPointerCancel(e: PointerEvent) {
    if (activeLightboxPointerId === e.pointerId) {
      (e.currentTarget as HTMLElement)?.releasePointerCapture?.(e.pointerId);
      isLightboxDragging = false;
      lightboxDragOffset = 0;
      activeLightboxPointerId = null;
    }
  }

  // Restore scroll on unmount
  $effect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });
</script>

<svelte:window onresize={handleResize} onkeydown={handleKeydown} />

<!-- Unified Media Module: Zero Gap (gap-0) connecting Main Big Pic and Thumbnails -->
<div class="flex flex-col gap-0 w-full select-none">
  <!-- 1. Hero Preview Stage (Flush top unit with rounded top corners on desktop) -->
  <div
    bind:this={heroContainer}
    onmouseenter={handleMouseEnter}
    onmousemove={handleMouseMove}
    onmouseleave={handleMouseLeave}
    role="region"
    aria-label="Product media gallery preview"
    class="-mx-4 sm:mx-0 relative w-auto sm:w-full aspect-square sm:aspect-[4/3] md:aspect-square rounded-none sm:rounded-t-2xl sm:rounded-b-none bg-gradient-to-b from-[var(--color-bg-subtle)] to-[var(--color-border-subtle)] border-y sm:border border-[var(--color-border-default)] overflow-hidden flex items-center justify-center group {currentMedia?.type === 'image' ? 'sm:cursor-zoom-in' : ''}"
  >
    <!-- Overlay Badges (Top Left) -->
    <div class="absolute top-3 left-4 sm:left-3 z-20 flex flex-col gap-1.5 items-start pointer-events-none transition-opacity duration-200 {isHoverZooming ? 'opacity-0 sm:opacity-20' : 'opacity-100'}">
      {#if product.discountPercent && product.discountPercent > 0}
        <Badge variant="accent" size="md">
          <span class="font-black">-{product.discountPercent}% OFF</span>
        </Badge>
      {/if}

      {#if !product.inStock || product.stockCount === 0}
        <Badge variant="danger" size="sm">Out of Stock</Badge>
      {:else if product.stockCount <= 5}
        <Badge variant="warning" size="sm">Only {product.stockCount} left in stock</Badge>
      {:else}
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>In Stock</span>
        </span>
      {/if}
    </div>

    <!-- Official Guarantee & Media Count Badge (Top Right) -->
    <div class="absolute top-3 right-4 sm:right-3 z-20 pointer-events-none flex items-center gap-2 transition-opacity duration-200 {isHoverZooming ? 'opacity-0 sm:opacity-20' : 'opacity-100'}">
      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-slate-900/80 dark:bg-white/90 text-white dark:text-slate-900 shadow-sm backdrop-blur-xs">
        <Icon icon={Shield01Icon} size={13} class="text-blue-400 dark:text-blue-600" />
        <span>100% Genuine</span>
      </span>
      <span class="px-2 py-1 rounded-full text-[10.5px] font-bold bg-black/40 text-white backdrop-blur-xs">
        {activeIndex + 1} / {mediaItems.length}
      </span>
    </div>

    <!-- Expand to Full-Screen Lightbox Button -->
    <button
      type="button"
      onclick={(e) => {
        e.stopPropagation();
        openLightbox();
      }}
      class="absolute bottom-3 right-4 sm:right-3 z-20 w-8 h-8 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 {isHoverZooming ? 'opacity-0 sm:opacity-20' : 'opacity-90'}"
      aria-label="View full screen"
      title="View full screen"
    >
      <Icon icon={ExpandIcon} size={15} strokeWidth={2.5} />
    </button>

    <!-- Hardware-Accelerated Sliding Track Container -->
    <div
      ontouchstart={handleTouchStart}
      ontouchmove={handleTouchMove}
      ontouchend={handleTouchEnd}
      onpointerdown={handlePointerDown}
      onpointermove={handlePointerMove}
      onpointerup={handlePointerUp}
      onpointercancel={handlePointerCancel}
      class="w-full h-full overflow-hidden relative cursor-grab active:cursor-grabbing"
      style="touch-action: pan-y;"
      role="region"
      aria-label="Product media gallery"
    >
      <div
        class="flex w-full h-full"
        style="transform: translate3d(calc(-{activeIndex * 100}% + {dragOffset}px), 0, 0); transition: {isDragging ? 'none' : 'transform 320ms cubic-bezier(0.25, 1, 0.5, 1)'}; will-change: transform;"
      >
        {#each mediaItems as item, idx}
          <div
            class="w-full h-full shrink-0 flex items-center justify-center relative overflow-hidden bg-transparent select-none"
          >
            {#if item.type === 'video'}
              <!-- Inline Video Stage Player -->
              <div class="relative w-full h-full flex items-center justify-center bg-black/90">
                <video
                  bind:this={videoElement}
                  src={item.url}
                  poster={item.poster}
                  playsinline
                  preload="metadata"
                  muted={isVideoMuted}
                  class="w-full h-full object-contain cursor-pointer"
                  onclick={toggleVideoPlay}
                  onended={() => (isVideoPlaying = false)}
                >
                  <track kind="captions" />
                </video>

                <!-- Central Play / Pause Floating Overlay -->
                <button
                  type="button"
                  onclick={toggleVideoPlay}
                  class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all cursor-pointer group/vid"
                  aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                >
                  <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900/85 text-white flex items-center justify-center shadow-xl backdrop-blur-md transform transition-transform group-hover/vid:scale-110 active:scale-95 {isVideoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}">
                    {#if isVideoPlaying}
                      <Icon icon={PauseIcon} size={28} strokeWidth={2.5} />
                    {:else}
                      <Icon icon={PlayIcon} size={28} strokeWidth={2.5} class="ml-1" />
                    {/if}
                  </div>
                </button>

                <!-- Audio Mute / Unmute Toggle Button -->
                <button
                  type="button"
                  onclick={toggleVideoMute}
                  class="absolute bottom-3 left-4 sm:left-3 z-30 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer shadow-md"
                  aria-label={isVideoMuted ? 'Unmute video audio' : 'Mute video audio'}
                  title={isVideoMuted ? 'Unmute' : 'Mute'}
                >
                  <Icon icon={isVideoMuted ? VolumeMute01Icon : VolumeHighIcon} size={15} />
                </button>
              </div>
            {:else}
              <!-- Image Slide with Desktop Hover-Zoom -->
              <div
                role="button"
                tabindex="0"
                onclick={handleSlideClick}
                onkeydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox();
                  }
                }}
                class="w-full h-full flex items-center justify-center relative overflow-hidden bg-transparent border-none p-0 cursor-default sm:cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
                aria-label="Open image {idx + 1} in full-screen"
              >
                <img
                  src={item.url}
                  alt="{product.name} - view {idx + 1}"
                  class="w-full h-full object-cover select-none pointer-events-none transition-transform duration-200 ease-out"
                  style={idx === activeIndex && isHoverZooming
                    ? `transform: scale(2.3); transform-origin: ${zoomOriginX}% ${zoomOriginY}%; will-change: transform, transform-origin;`
                    : 'transform: scale(1); transform-origin: center center;'}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  draggable="false"
                />
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <!-- Main Stage Left / Right Navigation Chevrons -->
    {#if mediaItems.length > 1}
      <button
        type="button"
        onclick={(e) => {
          e.stopPropagation();
          goToSlide(activeIndex - 1);
        }}
        disabled={activeIndex === 0}
        class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover:opacity-85 hover:!opacity-100 shadow-md active:scale-95"
        aria-label="Previous media"
      >
        <Icon icon={ArrowLeft01Icon} size={18} strokeWidth={2.5} />
      </button>

      <button
        type="button"
        onclick={(e) => {
          e.stopPropagation();
          goToSlide(activeIndex + 1);
        }}
        disabled={activeIndex === mediaItems.length - 1}
        class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover:opacity-85 hover:!opacity-100 shadow-md active:scale-95"
        aria-label="Next media"
      >
        <Icon icon={ArrowRight01Icon} size={18} strokeWidth={2.5} />
      </button>
    {/if}
  </div>

  <!-- 2. Horizontally Scrollable Thumbnail Rail (Flush directly below hero with gap-0, 12px gap between tiles) -->
  {#if mediaItems.length > 1}
    <div
      class="-mx-4 sm:mx-0 relative w-auto sm:w-full border-b sm:border-x sm:border-b border-[var(--color-border-default)] sm:rounded-b-2xl bg-[var(--color-bg-surface)] py-2.5 px-3 sm:px-3 overflow-hidden group/rail"
      role="region"
      aria-label="Media thumbnails carousel"
    >
      <!-- Desktop Left Scroll Chevron -->
      {#if canScrollLeft}
        <button
          type="button"
          onclick={() => scrollThumbnailRail('left')}
          class="hidden sm:flex absolute left-1.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white shadow-md backdrop-blur-xs items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Scroll thumbnails left"
        >
          <Icon icon={ArrowLeft01Icon} size={14} strokeWidth={2.5} />
        </button>
      {/if}

      <!-- Horizontal Scrollable Track (exact 12px gap = gap-3) -->
      <div
        bind:this={thumbnailRail}
        onscroll={updateThumbnailScrollState}
        class="flex items-center gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth px-1 sm:px-0"
        style="touch-action: pan-x;"
      >
        {#each mediaItems as item, idx}
          <button
            type="button"
            bind:this={thumbnailButtons[idx]}
            onclick={() => goToSlide(idx)}
            class="relative w-16 h-16 sm:w-18 sm:h-18 rounded-[var(--radius-sm)] border-2 overflow-hidden shrink-0 snap-start transition-all cursor-pointer {idx === activeIndex
              ? 'border-[var(--color-brand-primary)] ring-2 ring-[var(--color-brand-primary)]/25 shadow-sm scale-102 opacity-100 z-10'
              : 'border-[var(--color-border-default)] hover:border-slate-400 opacity-65 hover:opacity-100'}"
            aria-label="Select {item.type === 'video' ? 'video' : 'photo'} {idx + 1} of {product.name}"
          >
            {#if item.type === 'video'}
              <!-- Video Thumbnail with Poster & [▶ VIDEO] Badge -->
              <img
                src={item.poster || product.image}
                alt="Video preview thumbnail"
                class="w-full h-full object-cover brightness-90"
              />
              <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-0.5">
                <span class="px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black tracking-wider flex items-center gap-0.5 shadow-sm leading-none">
                  <Icon icon={PlayIcon} size={8} class="fill-current" />
                  <span>VIDEO</span>
                </span>
              </div>
            {:else}
              <!-- Standard Photo Thumbnail -->
              <img src={item.url} alt="Thumbnail {idx + 1}" class="w-full h-full object-cover" />
            {/if}
          </button>
        {/each}
      </div>

      <!-- Desktop Right Scroll Chevron -->
      {#if canScrollRight}
        <button
          type="button"
          onclick={() => scrollThumbnailRail('right')}
          class="hidden sm:flex absolute right-1.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white shadow-md backdrop-blur-xs items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Scroll thumbnails right"
        >
          <Icon icon={ArrowRight01Icon} size={14} strokeWidth={2.5} />
        </button>
      {/if}
    </div>
  {/if}
</div>

<!-- ==================================================================== -->
<!-- FULL-SCREEN LIGHTBOX MODAL (Phone view tap & Desktop full inspection) -->
<!-- ==================================================================== -->
{#if isLightboxOpen}
  <div
    class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-200"
    role="dialog"
    aria-modal="true"
    aria-label="Full-screen image gallery"
  >
    <!-- Top Header Bar -->
    <div class="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 text-white z-30 shrink-0">
      <div class="flex items-center gap-3">
        <span class="text-xs sm:text-sm font-extrabold tracking-wider bg-white/15 px-3 py-1 rounded-full text-white/95 backdrop-blur-xs">
          {activeIndex + 1} / {mediaItems.length}
        </span>
        <span class="text-xs font-semibold text-white/70 truncate max-w-[200px] sm:max-w-md hidden min-[400px]:inline">
          {product.name}
        </span>
      </div>

      <!-- Close Button -->
      <button
        type="button"
        onclick={closeLightbox}
        class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
        aria-label="Close full-screen image preview"
      >
        <Icon icon={Cancel01Icon} size={20} strokeWidth={2.5} />
      </button>
    </div>

    <!-- Centered Full-Screen Carousel Track -->
    <div
      ontouchstart={handleLightboxTouchStart}
      ontouchmove={handleLightboxTouchMove}
      ontouchend={handleLightboxTouchEnd}
      onpointerdown={handleLightboxPointerDown}
      onpointermove={handleLightboxPointerMove}
      onpointerup={handleLightboxPointerUp}
      onpointercancel={handleLightboxPointerCancel}
      class="relative flex-1 w-full min-h-0 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
      style="touch-action: none;"
      role="region"
      aria-label="Full-screen media slider"
    >
      <div
        class="flex w-full h-full"
        style="transform: translate3d(calc(-{activeIndex * 100}% + {lightboxDragOffset}px), 0, 0); transition: {isLightboxDragging ? 'none' : 'transform 320ms cubic-bezier(0.25, 1, 0.5, 1)'}; will-change: transform;"
      >
        {#each mediaItems as item, idx}
          <!-- Backdrop click dismisses (only on stationary click/tap, not swipe) -->
          <div
            class="w-full h-full shrink-0 flex items-center justify-center p-3 sm:p-8 cursor-pointer select-none"
            onclick={(e) => {
              if (e.target === e.currentTarget && !hasLightboxMoved && !isLightboxSwipeGesture) {
                closeLightbox();
              }
            }}
            role="presentation"
          >
            {#if item.type === 'video'}
              <video
                bind:this={lightboxVideoElement}
                src={item.url}
                poster={item.poster}
                controls
                playsinline
                class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              >
                <track kind="captions" />
              </video>
            {:else}
              <img
                src={item.url}
                alt="{product.name} - high resolution view {idx + 1}"
                class="max-w-full max-h-full object-contain pointer-events-auto rounded-lg shadow-2xl transition-transform duration-200 cursor-default select-none"
                draggable="false"
              />
            {/if}
          </div>
        {/each}
      </div>

      <!-- Prev / Next Navigation Arrows in Lightbox -->
      {#if mediaItems.length > 1}
        <button
          type="button"
          onclick={() => goToSlide(activeIndex - 1)}
          disabled={activeIndex === 0}
          class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer disabled:opacity-0 disabled:pointer-events-none shadow-lg active:scale-95"
          aria-label="Previous media"
        >
          <Icon icon={ArrowLeft01Icon} size={22} strokeWidth={2.5} />
        </button>

        <button
          type="button"
          onclick={() => goToSlide(activeIndex + 1)}
          disabled={activeIndex === mediaItems.length - 1}
          class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer disabled:opacity-0 disabled:pointer-events-none shadow-lg active:scale-95"
          aria-label="Next media"
        >
          <Icon icon={ArrowRight01Icon} size={22} strokeWidth={2.5} />
        </button>
      {/if}
    </div>

    <!-- Bottom Thumbnail Strip inside Lightbox (12px gap = gap-3) -->
    {#if mediaItems.length > 1}
      <div class="px-4 py-3 sm:py-4 border-t border-white/10 z-30 flex items-center justify-center gap-3 overflow-x-auto scrollbar-none shrink-0 bg-black/50 backdrop-blur-xs">
        {#each mediaItems as item, idx}
          <button
            type="button"
            onclick={() => goToSlide(idx)}
            class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 overflow-hidden shrink-0 transition-all cursor-pointer {idx === activeIndex
              ? 'border-[var(--color-brand-primary)] ring-2 ring-[var(--color-brand-primary)]/50 scale-105 opacity-100'
              : 'border-white/20 opacity-40 hover:opacity-80'}"
            aria-label="Jump to media {idx + 1}"
          >
            {#if item.type === 'video'}
              <img src={item.poster || product.image} alt="Video thumbnail" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Icon icon={PlayIcon} size={12} class="text-white fill-current" />
              </div>
            {:else}
              <img src={item.url} alt="Thumbnail {idx + 1}" class="w-full h-full object-cover" />
            {/if}
          </button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
