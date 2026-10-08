<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import AuthSplitLayout from '$lib/components/auth/AuthSplitLayout.svelte';
  import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

  let fromGoogle = $state(false);
  let linkPhoneNumber = $state('');
  let otpValues = $state(['', '', '', '']);
  let step = $state<'link' | 'otp'>('otp'); // Default to otp

  let otpInputs: HTMLInputElement[] = [];

  onMount(() => {
    // Check URL search params
    const query = new URLSearchParams($page.url.search);
    if (query.get('from') === 'google') {
      fromGoogle = true;
      step = 'link';
    }
  });

  function goBack() {
    if (step === 'otp' && fromGoogle) {
      step = 'link';
    } else {
      window.history.back();
    }
  }

  function handleSendOtp(e: Event) {
    e.preventDefault();
    if (linkPhoneNumber.length > 5) {
      step = 'otp';
    }
  }

  function handleVerify(e: Event) {
    e.preventDefault();
    const otp = otpValues.join('');
    if (otp.length === 4) {
      // Mock successful login
      goto('/profile');
    }
  }

  function focusNext(index: number) {
    if (otpValues[index].length === 1 && index < 3) {
      otpInputs[index + 1]?.focus();
    }
  }

  function handleKeydown(e: KeyboardEvent, index: number) {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      otpInputs[index - 1]?.focus();
    }
  }
</script>

<svelte:head>
  <title>{step === 'link' ? 'Link Mobile Number' : 'Verify OTP'} | Joytech</title>
</svelte:head>

<AuthSplitLayout onBack={goBack}>
  {#if step === 'link'}
    <!-- Link Phone Number State (After Google login) -->
    <div class="mb-5 sm:mb-6">
      <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight mb-1.5">
        Link mobile number
      </h2>
      <p class="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium">
        Required for order delivery and courier updates
      </p>
    </div>

    <!-- Google Account Preview Box -->
    <div class="mb-5 p-3.5 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] flex items-center gap-3 shadow-2xs">
      <div class="w-10 h-10 rounded-[var(--radius-sm)] bg-blue-500/10 text-blue-600 flex items-center justify-center font-black text-sm shrink-0 border border-blue-500/20">
        G
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-xs font-bold text-[var(--color-text-primary)] truncate">sajid@gmail.com</div>
        <div class="text-[10px] text-[var(--color-text-tertiary)] uppercase font-bold tracking-wider">Connected Google Account</div>
      </div>
    </div>

    <form onsubmit={handleSendOtp} class="space-y-4">
      <div>
        <label for="linkPhone" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">
          Mobile Number
        </label>
        <div class="flex items-stretch rounded-[var(--radius-sm)] border-2 border-[var(--color-border-default)] bg-[var(--color-bg-surface)] focus-within:border-[var(--color-brand-primary)] focus-within:ring-4 focus-within:ring-[var(--color-brand-primary)]/15 transition-all overflow-hidden shadow-2xs">
          <div class="flex items-center gap-1.5 px-3.5 bg-[var(--color-bg-subtle)] border-r border-[var(--color-border-default)] select-none">
            <span class="text-base leading-none">🇧🇩</span>
            <span class="text-sm font-bold text-[var(--color-text-primary)]">+880</span>
          </div>
          <input
            type="tel"
            id="linkPhone"
            bind:value={linkPhoneNumber}
            placeholder="17XX-XXXXXX"
            class="flex-1 w-full bg-transparent px-3.5 py-3 text-base sm:text-sm font-semibold text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none"
            autocomplete="tel-national"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg"
        fullWidth
        disabled={linkPhoneNumber.length < 5}
        class="btn-nod shadow-sm font-bold"
      >
        <span>Send Verification Code</span>
        <Icon icon={ArrowRight01Icon} size={18} class="btn-nod-icon" />
      </Button>
    </form>

  {:else}
    <!-- OTP Verification State -->
    <div class="mb-6 sm:mb-8">
      <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight mb-1.5">
        Enter verification code
      </h2>
      <p class="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium">
        Sent to <span class="font-bold text-[var(--color-text-primary)]">+880 {fromGoogle ? linkPhoneNumber : '17XX-XXXXXX'}</span>
        <button type="button" class="text-[var(--color-brand-primary)] font-bold ml-1.5 hover:underline cursor-pointer" onclick={goBack}>
          Change
        </button>
      </p>
    </div>

    <form onsubmit={handleVerify} class="space-y-6">
      <div class="flex justify-center gap-3 sm:gap-4">
        {#each otpValues as val, i}
          <input
            bind:this={otpInputs[i]}
            bind:value={otpValues[i]}
            type="text"
            inputmode="numeric"
            maxlength="1"
            class="w-13 h-15 sm:w-16 sm:h-18 text-center text-2xl font-black text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-strong)] rounded-[var(--radius-sm)] focus:border-[var(--color-brand-primary)] focus:ring-4 focus:ring-[var(--color-brand-primary)]/15 focus:outline-none shadow-2xs transition-all"
            oninput={() => focusNext(i)}
            onkeydown={(e) => handleKeydown(e, i)}
          />
        {/each}
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg"
        fullWidth
        disabled={otpValues.join('').length < 4}
        class="btn-nod shadow-sm font-bold"
      >
        <span>Verify & Proceed</span>
        <Icon icon={ArrowRight01Icon} size={18} class="btn-nod-icon" />
      </Button>
    </form>

    <div class="mt-6 sm:mt-8 text-center">
      <p class="text-xs font-semibold text-[var(--color-text-tertiary)]">
        Didn't receive the code? 
        <button type="button" class="text-[var(--color-brand-primary)] font-bold hover:underline ml-1 cursor-pointer">
          Resend in 0:45
        </button>
      </p>
    </div>
  {/if}
</AuthSplitLayout>
