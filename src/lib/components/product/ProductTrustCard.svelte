<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { i18nState } from '$lib/state.svelte';
  import {
    DeliveryTruck01Icon,
    BanknoteIcon,
    ShieldCheckIcon,
    RotateLeft01Icon
  } from '@hugeicons/core-free-icons';
</script>

<div class="rounded-[var(--radius-md)] sm:rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-4 sm:p-5 space-y-3.5 shadow-xs">
  <div class="flex items-center gap-2 pb-2.5 border-b border-[var(--color-border-subtle)]">
    <Icon icon={DeliveryTruck01Icon} size={18} class="text-[var(--color-brand-primary)]" />
    <h3 class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
      {i18nState.language === 'bn' ? 'ডেলিভারি ও সেবা সংক্রান্ত তথ্য' : 'Delivery & Fulfillment Guarantees'}
    </h3>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
    <!-- Dhaka Delivery -->
    <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]">
      <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
        <Icon icon={DeliveryTruck01Icon} size={16} />
      </div>
      <div>
        <div class="font-extrabold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'ঢাকা শহর: ২৪-৪৮ ঘণ্টা' : 'Dhaka Metro: 24–48 Hours'}
        </div>
        <div class="text-[11px] text-[var(--color-text-secondary)]">
          {i18nState.language === 'bn' ? 'ডেলিভারি চার্জ মাত্র ৳৬০' : 'Express delivery at ৳60'}
        </div>
      </div>
    </div>

    <!-- Outside Dhaka -->
    <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]">
      <div class="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
        <Icon icon={DeliveryTruck01Icon} size={16} />
      </div>
      <div>
        <div class="font-extrabold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'ঢাকার বাইরে: ৪৮-৭২ ঘণ্টা' : 'Outside Dhaka: 48–72 Hours'}
        </div>
        <div class="text-[11px] text-[var(--color-text-secondary)]">
          {i18nState.language === 'bn' ? 'সারা দেশে কুরিয়ার চার্জ ৳১২০' : 'Nationwide courier at ৳120'}
        </div>
      </div>
    </div>

    <!-- Cash on Delivery -->
    <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]">
      <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
        <Icon icon={BanknoteIcon} size={16} />
      </div>
      <div>
        <div class="font-extrabold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? 'ক্যাশ অন ডেলিভারি' : 'Cash on Delivery (COD)'}
        </div>
        <div class="text-[11px] text-[var(--color-text-secondary)]">
          {i18nState.language === 'bn' ? 'পণ্য দেখে টাকা পরিশোধের সুবিধা' : 'Inspect product before paying'}
        </div>
      </div>
    </div>

    <!-- Warranty & Return -->
    <div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]">
      <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
        <Icon icon={ShieldCheckIcon} size={16} />
      </div>
      <div>
        <div class="font-extrabold text-[var(--color-text-primary)]">
          {i18nState.language === 'bn' ? '৬ মাসের ওয়ারেন্টি ও রিপ্লেসমেন্ট' : '6 Months Official Warranty'}
        </div>
        <div class="text-[11px] text-[var(--color-text-secondary)]">
          {i18nState.language === 'bn' ? '৭ দিনে সহজ পণ্য পরিবর্তন গ্যারান্টি' : '7-Day replacement guarantee'}
        </div>
      </div>
    </div>
  </div>
</div>
