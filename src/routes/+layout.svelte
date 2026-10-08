<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
  import Header from '$lib/components/Header.svelte';
  import MobileDrawer from '$lib/components/MobileDrawer.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BottomNav from '$lib/components/BottomNav.svelte';
  import SupportWidget from '$lib/components/SupportWidget.svelte';
  import ToastContainer from '$lib/components/toast/ToastContainer.svelte';
  import SplashScreen from '$lib/components/SplashScreen.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { dev } from '$app/environment';
  import { onMount } from 'svelte';
  import { cartState, themeState, i18nState } from '$lib/state.svelte';
  import ShopByPhoneDrawer from '$lib/components/ShopByPhoneDrawer.svelte';

  let { children } = $props();

  let mobileDrawerOpen = $state(false);
  let searchQuery = $state('');
  let showSplash = $state(false);

  onMount(() => {
    if (dev || !sessionStorage.getItem('splash_shown')) {
      if (!dev) {
        sessionStorage.setItem('splash_shown', '1');
      }
      showSplash = true;
    }
  });

  $effect(() => {
    themeState.init();
    i18nState.init();

    function triggerNod(e: Event) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const btn = target.closest('.btn-nod');
      if (!btn) return;

      const icon = (btn.querySelector('.btn-nod-icon') || btn) as HTMLElement;
      if (!icon) return;

      // Force animation restart on rapid repeated clicks
      icon.classList.remove('nod-lift-active');
      void icon.offsetWidth;
      icon.classList.add('nod-lift-active');

      const onEnd = () => {
        icon.classList.remove('nod-lift-active');
        icon.removeEventListener('animationend', onEnd);
      };
      icon.addEventListener('animationend', onEnd, { once: true });
    }

    // Capture phase ensures immediate feedback before any routing or bubbling interruption
    window.addEventListener('pointerdown', triggerNod, { capture: true, passive: true });
    return () => {
      window.removeEventListener('pointerdown', triggerNod, { capture: true });
    };
  });

  function handleSearch(q: string) {
    const trimmed = q.trim();
    if (trimmed) {
      goto(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <script>
    try {
      const t = localStorage.getItem('joy_theme');
      const dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (dark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      const l = localStorage.getItem('joy_lang');
      if (l === 'bn') {
        document.documentElement.lang = 'bn';
        document.documentElement.classList.add('font-bengali');
      }
    } catch (_) {}
  </script>
</svelte:head>

{#if showSplash}
  <SplashScreen ondismiss={() => (showSplash = false)} />
{/if}

<div class="min-h-screen flex flex-col bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
  <!-- Top Announcement & Header (hidden on /checkout and /auth) -->
  {#if !$page.url.pathname.startsWith('/checkout') && !$page.url.pathname.startsWith('/auth')}
    <AnnouncementBar />

    <!-- Global Header -->
    <Header
      cartCount={cartState.count}
      bind:searchQuery
      onToggleMobileMenu={() => (mobileDrawerOpen = true)}
      onSearch={handleSearch}
    />

    <!-- Mobile Drawer Menu -->
    <MobileDrawer
      open={mobileDrawerOpen}
      onClose={() => (mobileDrawerOpen = false)}
    />
  {/if}

  <!-- Main Content Slot -->
  <main class="flex-1 {$page.url.pathname.startsWith('/auth') ? '' : 'pb-16 sm:pb-0'}">
    {@render children()}
  </main>

  <!-- Global Footer (hidden on phone view in /cart and /checkout) -->
  <div class={$page.url.pathname === '/cart' || $page.url.pathname === '/checkout' ? 'hidden sm:block' : ''}>
    <Footer />
  </div>

  <!-- Mobile Bottom Navigation Bar (hidden on product detail pages, checkout, and auth) -->
  {#if !$page.url.pathname.startsWith('/product/') && !$page.url.pathname.startsWith('/checkout') && !$page.url.pathname.startsWith('/auth')}
    <BottomNav cartCount={cartState.count} />
  {/if}

  <!-- Floating Customer Care Widget (hidden on /cart, /checkout, and /auth) -->
  {#if $page.url.pathname !== '/cart' && $page.url.pathname !== '/checkout' && !$page.url.pathname.startsWith('/auth')}
    <SupportWidget />
  {/if}

  <!-- Global Stacked Toast System -->
  <ToastContainer />
  
  <!-- Global Shop by Phone Side Drawer (Desktop Only) -->
  <div class="hidden sm:block">
    <ShopByPhoneDrawer />
  </div>
</div>
