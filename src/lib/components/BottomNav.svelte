<script lang="ts">
  import { page } from '$app/stores';
  import Icon from './Icon.svelte';
  import {
    Home01Icon,
    PercentCircleIcon,
    ShoppingBag01Icon,
    UserIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    cartCount?: number;
  }

  let { cartCount = 0 }: Props = $props();

  const navItems = [
    { label: 'Home', href: '/', icon: Home01Icon },
    { label: 'Offers', href: '/offers', icon: PercentCircleIcon },
    { label: 'Cart', href: '/cart', icon: ShoppingBag01Icon, isCart: true },
    { label: 'Profile', href: '/profile', icon: UserIcon }
  ];

  function isActive(href: string, currentPath: string): boolean {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }
</script>

{#if !$page.url.pathname.startsWith('/checkout')}
<nav
  aria-label="Mobile navigation"
  class="fixed bottom-0 left-0 right-0 z-40 sm:hidden flex items-center bg-[var(--color-bg-surface)] border-t border-[var(--color-border-default)] rounded-none shadow-[var(--shadow-top)] pb-[env(safe-area-inset-bottom)]"
>
  {#each navItems as item}
    {@const active = isActive(item.href, $page.url.pathname)}
    <a
      href={item.href}
      aria-current={active ? 'page' : undefined}
      class="btn-nod flex-1 flex flex-col items-center justify-center gap-1 py-3 px-1 min-h-[58px] text-[10px] font-bold tracking-tight transition-colors duration-150 select-none tap-target {active ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-text-disabled)] hover:text-[var(--color-text-primary)]'}"
    >
      <div class="btn-nod-icon relative flex items-center justify-center">
        <Icon icon={item.icon} size={20} />
        {#if item.isCart && cartCount > 0}
          <span
            class="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-[var(--color-accent)] text-white text-[9px] font-extrabold flex items-center justify-center leading-none shadow-xs"
          >
            {cartCount}
          </span>
        {/if}
      </div>
      <span class="leading-none">{item.label}</span>
    </a>
  {/each}
</nav>
{/if}
