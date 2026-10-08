<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import { DeliveryTruck01Icon, SparklesIcon } from '@hugeicons/core-free-icons';
</script>

<div class="w-full bg-[#E0EDFF] [.dark_&]:bg-[#0F1E36] border-b border-[#C2DAFF] [.dark_&]:border-[rgba(29,95,203,0.35)] text-[var(--color-text-primary)] transition-all">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3">
    <div class="flex items-center gap-2.5 min-w-0">
      <div class="w-8 h-8 rounded-xl bg-[#1D5FCB] text-white flex items-center justify-center shrink-0 shadow-xs">
        <Icon icon={DeliveryTruck01Icon} size={18} strokeWidth={2} />
      </div>

      <div class="min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <div class="flex items-center gap-2">
          <p class="text-xs sm:text-sm font-black text-[#0F295E] [.dark_&]:text-blue-100 truncate">
            {i18nState.language === 'bn' ? '১ম অর্ডারে ফ্রি ডেলিভারি' : '1st Order Delivery FREE'}
          </p>
          <span class="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C2DAFF] [.dark_&]:bg-[rgba(29,95,203,0.4)] text-[#103D8A] [.dark_&]:text-blue-200">
            <Icon icon={SparklesIcon} size={10} />
            {i18nState.language === 'bn' ? 'অফার' : 'Offer'}
          </span>
        </div>
        <span class="text-[11px] text-[#244A8E] [.dark_&]:text-blue-300/90 hidden xs:inline truncate">
          {i18nState.language === 'bn' ? 'বাংলাদেশব্যাপী সকল ৬৪ জেলায় বিনামূল্যে ডেলিভারি।' : 'Free delivery across all 64 districts nationwide.'}
        </span>
      </div>
    </div>

    <div class="flex items-center gap-1.5 shrink-0 text-[11px] font-black text-[#00B372] dark:text-[#34D399]">
      <span class="w-2 h-2 rounded-full bg-[#00B372] animate-pulse"></span>
      <span class="hidden sm:inline">{i18nState.language === 'bn' ? '৳০ প্রদেয়' : '৳0 Delivery'}</span>
      <span class="sm:hidden">{i18nState.language === 'bn' ? 'ফ্রি' : 'FREE'}</span>
    </div>
  </div>
</div>

