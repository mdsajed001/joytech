<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import AuthSplitLayout from '$lib/components/auth/AuthSplitLayout.svelte';
  import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

  let phoneNumber = $state('');

  function handlePhoneContinue(e: Event) {
    e.preventDefault();
    if (phoneNumber.length > 5) {
      goto('/auth/verify');
    }
  }

  function handleGoogleContinue() {
    // Mocking a successful Google login that is missing a phone number
    goto('/auth/verify?from=google');
  }
</script>

<svelte:head>
  <title>Sign In / Sign Up | Joytech</title>
</svelte:head>

<AuthSplitLayout>
  <!-- Form Header -->
  <div class="mb-6 sm:mb-8">
    <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight">
      Sign in or create account
    </h2>
  </div>

  <!-- Form Body -->
  <form onsubmit={handlePhoneContinue} class="space-y-4">
    <!-- Phone Input -->
    <div>
      <label for="phone" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">
        Mobile Number
      </label>
      <div class="flex items-stretch rounded-[var(--radius-sm)] border-2 border-[var(--color-border-default)] bg-[var(--color-bg-surface)] focus-within:border-[var(--color-brand-primary)] focus-within:ring-4 focus-within:ring-[var(--color-brand-primary)]/15 transition-all overflow-hidden shadow-2xs">
        <div class="flex items-center gap-1.5 px-3.5 bg-[var(--color-bg-subtle)] border-r border-[var(--color-border-default)] select-none">
          <span class="text-base leading-none">🇧🇩</span>
          <span class="text-sm font-bold text-[var(--color-text-primary)]">+880</span>
        </div>
        <input
          type="tel"
          id="phone"
          bind:value={phoneNumber}
          placeholder="17XX-XXXXXX"
          class="flex-1 w-full bg-transparent px-3.5 py-3 text-base sm:text-sm font-semibold text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none"
          autocomplete="tel-national"
        />
      </div>
      <p class="text-[11px] text-[var(--color-text-tertiary)] mt-1.5 font-medium flex items-center gap-1">
        <span>💬</span>
        <span>We'll send you an SMS with a one-time verification code.</span>
      </p>
    </div>

    <Button 
      type="submit" 
      variant="primary" 
      size="lg"
      fullWidth
      disabled={phoneNumber.length < 5}
      class="btn-nod shadow-sm font-bold"
    >
      <span>Continue</span>
      <Icon icon={ArrowRight01Icon} size={18} class="btn-nod-icon" />
    </Button>
  </form>

  <!-- OR Divider -->
  <div class="my-5 sm:my-7 flex items-center gap-3">
    <div class="flex-1 h-px bg-[var(--color-border-subtle)]"></div>
    <span class="text-[11px] font-black text-[var(--color-text-tertiary)] uppercase tracking-wider">OR</span>
    <div class="flex-1 h-px bg-[var(--color-border-subtle)]"></div>
  </div>

  <!-- Google Sign In -->
  <Button 
    type="button" 
    variant="outline" 
    size="lg"
    fullWidth
    onclick={handleGoogleContinue}
    class="hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] transition-all font-bold shadow-2xs"
  >
    <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>
    <span>Continue with Google</span>
  </Button>

  <!-- Legal Disclaimer -->
  <div class="mt-6 sm:mt-8 text-center">
    <p class="text-[11px] leading-relaxed font-medium text-[var(--color-text-tertiary)]">
      By signing in or registering, you agree to Joytech's <br class="hidden sm:inline" />
      <a href="#" class="text-[var(--color-brand-primary)] hover:underline font-semibold">Terms of Service</a> and 
      <a href="#" class="text-[var(--color-brand-primary)] hover:underline font-semibold">Privacy Policy</a>.
    </p>
  </div>
</AuthSplitLayout>
