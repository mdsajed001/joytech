<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { UserPreferences } from '$lib/data/mockProfile';
  import { cartState, themeState, i18nState, type AppTheme } from '$lib/state.svelte';
  import type { SupportedLanguage } from '$lib/i18n/translations';
  import {
    Logout01Icon,
    Tick02Icon,
    Sun03Icon,
    Moon02Icon,
    ComputerIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    preferences: UserPreferences;
    onSavePreferences?: (prefs: UserPreferences) => void;
  }

  let { preferences, onSavePreferences }: Props = $props();

  let prefs = $state<UserPreferences>({
    language: 'en',
    notifications: {
      smsDeliveryUpdates: true,
      whatsappUpdates: true,
      emailPromotions: false,
      restockAlerts: true
    }
  });

  $effect(() => {
    prefs.language = preferences.language;
    prefs.notifications = { ...preferences.notifications };
  });

  let savedMessage = $state<string | null>(null);

  let fullName = $state('Tanvir Hossain');
  let mobilePhone = $state('+880 1712-345678');
  let emailAddress = $state('tanvir.joytech@gmail.com');
  let isSavingProfile = $state(false);

  function handleSaveProfile() {
    isSavingProfile = true;
    setTimeout(() => {
      isSavingProfile = false;
      cartState.showToast(
        i18nState.language === 'bn'
          ? 'ব্যক্তিগত তথ্য সফলভাবে সংরক্ষিত হয়েছে'
          : 'Personal information saved successfully'
      );
      triggerUpdate();
    }, 350);
  }

  function triggerUpdate() {
    if (onSavePreferences) {
      onSavePreferences(prefs);
    }
    savedMessage = i18nState.t('settings.savedSuccess');
    setTimeout(() => {
      savedMessage = null;
    }, 2500);
  }

  function handleThemeChange(theme: AppTheme) {
    themeState.setTheme(theme);
    cartState.showToast(
      theme === 'dark'
        ? (i18nState.language === 'bn' ? 'অন্ধকার থিম সক্রিয় হয়েছে' : 'Dark theme activated')
        : theme === 'light'
          ? (i18nState.language === 'bn' ? 'হালকা থিম সক্রিয় হয়েছে' : 'Light theme activated')
          : (i18nState.language === 'bn' ? 'সিস্টেম থিম সক্রিয় হয়েছে' : 'System theme synchronized')
    );
    triggerUpdate();
  }

  function handleLanguageChange(lang: SupportedLanguage) {
    prefs.language = lang;
    i18nState.setLanguage(lang);
    cartState.showToast(lang === 'en' ? 'Language switched to English' : 'ভাষা বাংলায় পরিবর্তন করা হয়েছে');
    triggerUpdate();
  }
</script>

<div class="max-w-3xl mx-auto space-y-9 sm:space-y-11">
  <!-- 1. Appearance Section -->
  <section class="space-y-3">
    <h2 class="text-sm sm:text-base font-black text-[var(--color-text-primary)] tracking-tight">
      {i18nState.t('settings.appearanceTitle')}
    </h2>

    <div class="space-y-1">
      <!-- Theme Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.t('settings.themeTitle')}
        </span>

        <div class="inline-flex items-center p-1 bg-[var(--color-bg-subtle)] rounded-full border border-[var(--color-border-default)] shrink-0">
          <div class="flex items-center gap-1">
            <button
              type="button"
              aria-label={i18nState.t('settings.theme.light')}
              title={i18nState.t('settings.theme.light')}
              onclick={() => handleThemeChange('light')}
              class="w-9 h-9 sm:w-10 sm:h-10 min-w-9 sm:min-w-10 inline-flex items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer {themeState.theme === 'light'
                ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'}"
            >
              <Icon icon={Sun03Icon} size={15} />
            </button>

            <button
              type="button"
              aria-label={i18nState.t('settings.theme.dark')}
              title={i18nState.t('settings.theme.dark')}
              onclick={() => handleThemeChange('dark')}
              class="w-9 h-9 sm:w-10 sm:h-10 min-w-9 sm:min-w-10 inline-flex items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer {themeState.theme === 'dark'
                ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'}"
            >
              <Icon icon={Moon02Icon} size={15} />
            </button>

            <button
              type="button"
              onclick={() => handleThemeChange('system')}
              class="inline-flex items-center justify-center gap-1.5 h-9 sm:h-10 px-3.5 sm:px-4 rounded-full text-xs font-bold transition-all cursor-pointer {themeState.theme === 'system'
                ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'}"
            >
              <Icon icon={ComputerIcon} size={14} />
              <span>{i18nState.t('settings.theme.system')}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Language Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.t('settings.langTitle')}
        </span>

        <div class="inline-flex items-center p-1 bg-[var(--color-bg-subtle)] rounded-full border border-[var(--color-border-default)] shrink-0">
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick={() => handleLanguageChange('en')}
              class="inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 rounded-full text-xs font-bold transition-all cursor-pointer {i18nState.language === 'en'
                ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'}"
            >
              <span>{i18nState.t('settings.lang.en')}</span>
            </button>

            <button
              type="button"
              onclick={() => handleLanguageChange('bn')}
              class="inline-flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 rounded-full text-xs font-bold font-bengali transition-all cursor-pointer {i18nState.language === 'bn'
                ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'}"
            >
              <span>{i18nState.t('settings.lang.bn')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. Personal Information Section -->
  <section class="space-y-3">
    <h2 class="text-sm sm:text-base font-black text-[var(--color-text-primary)] tracking-tight">
      {i18nState.t('settings.personalTitle')}
    </h2>

    <form onsubmit={(e) => { e.preventDefault(); handleSaveProfile(); }} class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Full Name -->
        <div>
          <label for="profile-name" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">
            {i18nState.language === 'bn' ? 'পূর্ণ নাম' : 'Full Name'}
          </label>
          <input
            id="profile-name"
            type="text"
            bind:value={fullName}
            placeholder="Tanvir Hossain"
            class="w-full h-11 px-3.5 text-xs sm:text-sm rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] font-medium focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
          />
        </div>

        <!-- Mobile Number -->
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label for="profile-phone" class="block text-xs font-bold text-[var(--color-text-primary)]">
              {i18nState.language === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}
            </label>
            <span class="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
              <Icon icon={Tick02Icon} size={12} strokeWidth={2.5} />
              <span>{i18nState.language === 'bn' ? 'যাচাইকৃত' : 'Verified'}</span>
            </span>
          </div>
          <input
            id="profile-phone"
            type="tel"
            value={mobilePhone}
            disabled
            class="w-full h-11 px-3.5 text-xs sm:text-sm rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] font-medium cursor-not-allowed opacity-80"
          />
        </div>

        <!-- Email Address -->
        <div class="sm:col-span-2">
          <label for="profile-email" class="block text-xs font-bold text-[var(--color-text-primary)] mb-1.5">
            {i18nState.language === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}
          </label>
          <input
            id="profile-email"
            type="email"
            bind:value={emailAddress}
            placeholder="tanvir.joytech@gmail.com"
            class="w-full h-11 px-3.5 text-xs sm:text-sm rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] font-medium focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
          />
        </div>
      </div>

      <!-- Action Button -->
      <div class="pt-0.5 flex items-center justify-start">
        <button
          type="submit"
          disabled={isSavingProfile}
          class="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl text-xs font-bold bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white shadow-sm transition-all cursor-pointer disabled:opacity-50"
        >
          {#if isSavingProfile}
            <span class="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>{i18nState.language === 'bn' ? 'সংরক্ষণ করা হচ্ছে...' : 'Saving...'}</span>
          {:else}
            <span>{i18nState.language === 'bn' ? 'তথ্য সংরক্ষণ করুন' : 'Save Changes'}</span>
          {/if}
        </button>
      </div>
    </form>
  </section>

  <!-- 3. Notifications Section -->
  <section class="space-y-3">
    <h2 class="text-sm sm:text-base font-black text-[var(--color-text-primary)] tracking-tight">
      {i18nState.t('settings.notificationsTitle')}
    </h2>

    <div class="space-y-1">
      <!-- SMS Updates Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'এসএমএস ডেলিভারি আপডেট' : 'SMS Delivery Updates'}
        </span>
        <button
          type="button"
          role="switch"
          aria-label="Toggle SMS Delivery Updates"
          aria-checked={prefs.notifications.smsDeliveryUpdates}
          onclick={() => {
            prefs.notifications.smsDeliveryUpdates = !prefs.notifications.smsDeliveryUpdates;
            triggerUpdate();
          }}
          class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] {prefs.notifications.smsDeliveryUpdates
            ? 'bg-[var(--color-brand-primary)]'
            : 'bg-[var(--color-border-strong)] dark:bg-slate-700'}"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out {prefs.notifications.smsDeliveryUpdates
              ? 'translate-x-5'
              : 'translate-x-0'}"
          ></span>
        </button>
      </div>

      <!-- WhatsApp Updates Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'হোয়াটসঅ্যাপ ট্র্যাকিং লিংক' : 'WhatsApp Live Tracking'}
        </span>
        <button
          type="button"
          role="switch"
          aria-label="Toggle WhatsApp Live Tracking Links"
          aria-checked={prefs.notifications.whatsappUpdates}
          onclick={() => {
            prefs.notifications.whatsappUpdates = !prefs.notifications.whatsappUpdates;
            triggerUpdate();
          }}
          class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] {prefs.notifications.whatsappUpdates
            ? 'bg-[var(--color-brand-primary)]'
            : 'bg-[var(--color-border-strong)] dark:bg-slate-700'}"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out {prefs.notifications.whatsappUpdates
              ? 'translate-x-5'
              : 'translate-x-0'}"
          ></span>
        </button>
      </div>

      <!-- Wishlist Restocks Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'উইশলিস্ট রিস্টক অ্যালার্ট' : 'Wishlist Restock Alerts'}
        </span>
        <button
          type="button"
          role="switch"
          aria-label="Toggle Wishlist Restock Notifications"
          aria-checked={prefs.notifications.restockAlerts}
          onclick={() => {
            prefs.notifications.restockAlerts = !prefs.notifications.restockAlerts;
            triggerUpdate();
          }}
          class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] {prefs.notifications.restockAlerts
            ? 'bg-[var(--color-brand-primary)]'
            : 'bg-[var(--color-border-strong)] dark:bg-slate-700'}"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out {prefs.notifications.restockAlerts
              ? 'translate-x-5'
              : 'translate-x-0'}"
          ></span>
        </button>
      </div>
    </div>
  </section>

  <!-- 4. Security & Authentication Section -->
  <section class="space-y-3">
    <h2 class="text-sm sm:text-base font-black text-[var(--color-text-primary)] tracking-tight">
      {i18nState.t('settings.securityTitle')}
    </h2>

    <div class="space-y-2">
      <!-- Two-Factor Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'দ্বি-স্তর টু-ফ্যাক্টর নিরাপত্তা' : 'Two-Factor Authentication'}
        </span>
        <span class="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg shrink-0">
          <Icon icon={Tick02Icon} size={14} strokeWidth={2.5} />
          <span>{i18nState.language === 'bn' ? 'সক্রিয় • ওটিপি' : 'Active • SMS OTP'}</span>
        </span>
      </div>

      <!-- Account Session Row -->
      <div class="min-h-[48px] py-2 flex items-center justify-between gap-4">
        <span class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'অ্যাকাউন্ট সেশন' : 'Account Session'}
        </span>
        <a
          href="/auth"
          class="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-[var(--radius-sm)] text-xs font-bold border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100/60 dark:hover:bg-rose-900/40 transition-colors cursor-pointer shrink-0"
        >
          <Icon icon={Logout01Icon} size={14} />
          <span>{i18nState.language === 'bn' ? 'লগআউট' : 'Sign Out'}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Feedback Toast -->
  {#if savedMessage}
    <div class="fixed bottom-20 sm:bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
      <Icon icon={Tick02Icon} size={15} class="text-emerald-400 dark:text-emerald-600" />
      <span>{savedMessage}</span>
    </div>
  {/if}
</div>
