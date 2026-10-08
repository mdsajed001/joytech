<script lang="ts">
  import { goto } from '$app/navigation';
  import { autoWizardState } from '$lib/state.svelte';
  import {
    getDeviceTypes,
    getBrandsForType,
    getModelsForBrand,
    getSeriesChipsForBrand,
    filterModelsWithAliases,
    getBrandLogo
  } from '$lib/data/devices';
  import {
    CheckmarkCircle01Icon,
    ArrowRight01Icon,
    Search01Icon,
    Edit01Icon,
    ArrowLeft01Icon
  } from '@hugeicons/core-free-icons';
  import Icon from '$lib/components/Icon.svelte';
  import StickerThunder3D from '$lib/components/StickerThunder3D.svelte';

  // 1. Dynamic Device Types loaded from the complete tree
  const deviceTypes = getDeviceTypes();

  // 2. Active Brands for the selected device type with in-place live search
  let currentBrands = $derived(getBrandsForType(autoWizardState.deviceType));
  let brandSearchQuery = $state('');

  // Live filtered brands supporting brand name, shortName, and aliases
  let filteredBrands = $derived(
    brandSearchQuery.trim() === ''
      ? currentBrands
      : currentBrands.filter(b => {
          const q = brandSearchQuery.toLowerCase().trim();
          return (
            b.name.toLowerCase().includes(q) ||
            (b.shortName && b.shortName.toLowerCase().includes(q)) ||
            b.aliases?.some(a => a.toLowerCase().includes(q))
          );
        })
  );

  // 3. Active Models & Filtering
  let currentModels = $derived(getModelsForBrand(autoWizardState.deviceType, autoWizardState.brand));
  let seriesChips = $derived(getSeriesChipsForBrand(currentModels));

  let activeSeriesFilter = $state('All');
  let modelSearchQuery = $state('');

  // Filtered models including alias matching
  let filteredModelEntries = $derived(
    filterModelsWithAliases(currentModels, modelSearchQuery, activeSeriesFilter)
  );

  // 4. Labels for summaries & chips
  const typeLabel = $derived(
    deviceTypes.find(d => d.id === autoWizardState.deviceType)?.label || autoWizardState.deviceType || 'Device'
  );
  const currentBrandObj = $derived(
    currentBrands.find(b => b.id === autoWizardState.brand)
  );
  const brandLabel = $derived(
    currentBrandObj?.name || autoWizardState.brand || 'Brand'
  );
  const currentModelObj = $derived(
    currentModels.find(m => m.slug === autoWizardState.model || m.id === autoWizardState.model)
  );
  const modelLabel = $derived(
    currentModelObj?.name || autoWizardState.model || 'Model'
  );

  function handleSelectType(typeId: string) {
    autoWizardState.selectType(typeId);
    brandSearchQuery = '';
    activeSeriesFilter = 'All';
    modelSearchQuery = '';
  }

  function handleSelectBrand(brandId: string) {
    autoWizardState.selectBrand(brandId);
    activeSeriesFilter = 'All';
    modelSearchQuery = '';
  }

  function handleSelectModel(modelSlug: string) {
    autoWizardState.selectModel(modelSlug);
  }

  function handleBrowseAccessories() {
    autoWizardState.isDrawerOpen = false;
    const modelSlug = autoWizardState.model || 'iphone-16-pro-max';
    goto(`/search?phoneModel=${encodeURIComponent(modelSlug)}`);
  }

  function handleCategoryClick(categoryId: string) {
    autoWizardState.isDrawerOpen = false;
    const modelSlug = autoWizardState.model || 'iphone-16-pro-max';
    goto(`/search?phoneModel=${encodeURIComponent(modelSlug)}&category=${encodeURIComponent(categoryId)}`);
  }
</script>

<div class="flex flex-col h-full bg-[var(--color-bg-canvas)] relative">

  <!-- Interactive 3-Step Visual Progress Rail -->
  <div class="px-4 sm:px-6 pt-4 pb-3.5 border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)] shrink-0">
    <div class="flex items-center gap-3 max-w-md mx-auto">
      
      {#if autoWizardState.canGoBack}
        <button
          type="button"
          onclick={() => autoWizardState.goBack()}
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--color-bg-surface)] hover:bg-[var(--color-brand-primary-subtle)] active:scale-90 text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] flex items-center justify-center transition-all cursor-pointer shrink-0 border border-[var(--color-border-default)] shadow-2xs hover:shadow-xs hover:border-[var(--color-brand-primary)]/40 -ml-1"
          aria-label="Back to previous step"
          title="Back to previous step"
        >
          <Icon icon={ArrowLeft01Icon} size={18} />
        </button>
      {/if}

      <div class="flex-1 flex items-center justify-between">
        <!-- Step 1: Device -->
        <button
          type="button"
          onclick={() => autoWizardState.editStep('type')}
          class="flex items-center gap-2 text-xs sm:text-sm font-bold transition-all cursor-pointer {autoWizardState.step === 'type' ? 'text-[var(--color-brand-primary)] font-black' : autoWizardState.deviceType ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-disabled)]'}"
        >
          <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-black transition-all shrink-0 {autoWizardState.step === 'type' ? 'cta-blue-bubble text-white shadow-sm ring-4 ring-blue-500/15 scale-105' : autoWizardState.deviceType ? 'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-2 border-[var(--color-success-border)] shadow-2xs' : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-disabled)] border border-[var(--color-border-default)]'}">
            {#if autoWizardState.deviceType && autoWizardState.step !== 'type'}
              <Icon icon={CheckmarkCircle01Icon} size={18} />
            {:else}
              1
            {/if}
          </span>
          <span class="hidden sm:inline font-extrabold tracking-tight">Device</span>
        </button>

        <!-- Connecting line -->
        <div class="flex-1 h-1 mx-2 sm:mx-3 rounded-full {autoWizardState.step !== 'type' ? 'bg-[var(--color-brand-primary)]' : 'bg-[var(--color-border-default)]'} transition-colors"></div>

        <!-- Step 2: Brand -->
        <button
          type="button"
          onclick={() => { if (autoWizardState.deviceType) autoWizardState.editStep('brand'); }}
          disabled={!autoWizardState.deviceType}
          class="flex items-center gap-2 text-xs sm:text-sm font-bold transition-all {autoWizardState.step === 'brand' ? 'text-[var(--color-brand-primary)] font-black' : autoWizardState.brand ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-disabled)]'} {!autoWizardState.deviceType ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}"
        >
          <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-black transition-all shrink-0 {autoWizardState.step === 'brand' ? 'cta-blue-bubble text-white shadow-sm ring-4 ring-blue-500/15 scale-105' : autoWizardState.brand ? 'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-2 border-[var(--color-success-border)] shadow-2xs' : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-disabled)] border border-[var(--color-border-default)]'}">
            {#if autoWizardState.brand && autoWizardState.step !== 'brand' && autoWizardState.step !== 'type'}
              <Icon icon={CheckmarkCircle01Icon} size={18} />
            {:else}
              2
            {/if}
          </span>
          <span class="hidden sm:inline font-extrabold tracking-tight">Brand</span>
        </button>

        <!-- Connecting line -->
        <div class="flex-1 h-1 mx-2 sm:mx-3 rounded-full {autoWizardState.step === 'model' || autoWizardState.step === 'done' ? 'bg-[var(--color-brand-primary)]' : 'bg-[var(--color-border-default)]'} transition-colors"></div>

        <!-- Step 3: Model -->
        <button
          type="button"
          onclick={() => { if (autoWizardState.brand) autoWizardState.editStep('model'); }}
          disabled={!autoWizardState.brand}
          class="flex items-center gap-2 text-xs sm:text-sm font-bold transition-all {autoWizardState.step === 'model' ? 'text-[var(--color-brand-primary)] font-black' : autoWizardState.model ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-disabled)]'} {!autoWizardState.brand ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}"
        >
          <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-black transition-all shrink-0 {autoWizardState.step === 'model' ? 'cta-blue-bubble text-white shadow-sm ring-4 ring-blue-500/15 scale-105' : autoWizardState.model ? 'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-2 border-[var(--color-success-border)] shadow-2xs' : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-disabled)] border border-[var(--color-border-default)]'}">
            {#if autoWizardState.step === 'done'}
              <Icon icon={CheckmarkCircle01Icon} size={18} />
            {:else}
              3
            {/if}
          </span>
          <span class="hidden sm:inline font-extrabold tracking-tight">Model</span>
        </button>
      </div>

    </div>
  </div>

  <!-- Main Scrollable Content -->
  <div class="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
    
    <!-- Active Selection Summary Chips (Click to Edit) -->
    {#if autoWizardState.step !== 'type' && autoWizardState.step !== 'done'}
      <div class="flex flex-wrap items-center gap-2 pt-0.5 pb-1">
        <button
          type="button"
          onclick={() => autoWizardState.editStep('type')}
          class="inline-flex items-center gap-2 px-3.5 py-1.5 min-h-[36px] rounded-full text-xs font-extrabold bg-[var(--color-brand-primary-subtle)]/80 hover:bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/30 shadow-2xs hover:border-[var(--color-brand-primary)] active:scale-95 transition-all cursor-pointer group"
          title="Click to change device type"
        >
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-[var(--color-brand-primary)]/75">Type:</span>
          <span class="font-black text-xs">{typeLabel}</span>
          <span class="w-5 h-5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon icon={Edit01Icon} size={12} />
          </span>
        </button>

        {#if autoWizardState.brand && autoWizardState.step === 'model'}
          <button
            type="button"
            onclick={() => autoWizardState.editStep('brand')}
            class="inline-flex items-center gap-2 px-3.5 py-1.5 min-h-[36px] rounded-full text-xs font-extrabold bg-[var(--color-brand-primary-subtle)]/80 hover:bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/30 shadow-2xs hover:border-[var(--color-brand-primary)] active:scale-95 transition-all cursor-pointer group"
            title="Click to change brand"
          >
            <span class="text-[10.5px] font-bold uppercase tracking-wider text-[var(--color-brand-primary)]/75">Brand:</span>
            <span class="font-black text-xs">{brandLabel}</span>
            <span class="w-5 h-5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon icon={Edit01Icon} size={12} />
            </span>
          </button>
        {/if}
      </div>
    {/if}

    <!-- STEP 1: DEVICE TYPE -->
    {#if autoWizardState.step === 'type'}
      <div class="space-y-3.5 animate-in fade-in duration-200">
        <div class="flex items-center justify-between">
          <span class="text-xs font-extrabold uppercase tracking-wider text-[var(--color-text-disabled)]">
            Select Device Type
          </span>
          <span class="text-xs font-extrabold text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] px-2.5 py-0.5 rounded-full">
            Step 1 of 3
          </span>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          {#each deviceTypes as type}
            <button
              type="button"
              onclick={() => handleSelectType(type.id)}
              class="relative group p-4 sm:p-5 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:shadow-md active:scale-[0.98] transition-all flex flex-col items-center justify-center text-center gap-3 cursor-pointer"
            >
              {#if type.badge}
                <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/20 shadow-2xs">
                  {type.badge}
                </span>
              {/if}

              <!-- Tactile Frosted Icon Pod (min 48px) -->
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-b from-blue-500/15 via-blue-500/8 to-indigo-500/10 border border-blue-200/60 shadow-xs flex items-center justify-center text-[var(--color-brand-primary)] group-hover:scale-110 group-hover:border-[var(--color-brand-primary)]/40 transition-all duration-200">
                <Icon icon={type.icon} size={30} />
              </div>

              <div>
                <span class="block text-sm sm:text-base font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {type.label}
                </span>
                <span class="block text-xs font-medium text-[var(--color-text-secondary)] mt-0.5">
                  {type.sublabel}
                </span>
                <span class="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] group-hover:bg-[var(--color-brand-primary-subtle)] group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {type.brandCount} Brands
                </span>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/if}

    <!-- STEP 2: BRAND SELECTION (In-Place Search & Unified Visual Tiles) -->
    {#if autoWizardState.step === 'brand'}
      <div class="space-y-3.5 animate-in fade-in duration-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-extrabold uppercase tracking-wider text-[var(--color-text-disabled)]">
              Choose Brand ({typeLabel})
            </span>
          </div>
          <span class="text-xs font-extrabold text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] px-2.5 py-0.5 rounded-full">
            Step 2 of 3
          </span>
        </div>

        <!-- In-Place Brand Search Input with rounded-full pill design and clear button -->
        <div class="relative flex items-center">
          <span class="absolute left-3.5 text-[var(--color-text-disabled)] pointer-events-none flex items-center justify-center">
            <Icon icon={Search01Icon} size={18} />
          </span>
          <input
            type="text"
            bind:value={brandSearchQuery}
            placeholder="Search {typeLabel} brands (e.g. Samsung, OnePlus, Poco)..."
            class="w-full h-11 pl-10 pr-9 text-xs sm:text-sm font-semibold bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-full text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-blue-500/15 outline-none shadow-xs transition-all"
          />
          {#if brandSearchQuery}
            <button
              type="button"
              onclick={() => (brandSearchQuery = '')}
              class="absolute right-3.5 w-5 h-5 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] flex items-center justify-center text-xs font-black transition-colors cursor-pointer"
              aria-label="Clear brand search query"
            >
              ×
            </button>
          {/if}
        </div>

        <!-- Direct Brand Grid: All Brands rendered directly with 1-tap selection -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {#if filteredBrands.length === 0}
            <div class="col-span-full py-10 text-center rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] p-6 space-y-2">
              <div class="w-12 h-12 mx-auto rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-disabled)] flex items-center justify-center">
                <Icon icon={Search01Icon} size={22} />
              </div>
              <p class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                No brands matching "{brandSearchQuery}"
              </p>
              <p class="text-xs text-[var(--color-text-secondary)]">
                Try searching by common alias (e.g. "Pixel" or "Poco") or clear your search query.
              </p>
              <button
                type="button"
                onclick={() => (brandSearchQuery = '')}
                class="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          {:else}
            {#each filteredBrands as b}
              {@const logoUrl = getBrandLogo(b.id)}
              <button
                type="button"
                onclick={() => handleSelectBrand(b.id)}
                class="group p-4 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:shadow-md active:scale-[0.97] transition-all flex flex-col items-center justify-center text-center gap-2.5 cursor-pointer"
              >
                <!-- Authentic Brand Logo Pod -->
                <div class="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-[var(--color-border-default)] shadow-xs flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:shadow-sm group-hover:border-[var(--color-brand-primary)]/40 transition-all duration-200 relative overflow-hidden">
                  <img
                    src={logoUrl}
                    alt="{b.name} logo"
                    class="w-full h-full object-contain select-none pointer-events-none drop-shadow-2xs"
                    loading="lazy"
                    onerror={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    class="hidden w-full h-full items-center justify-center font-black text-sm text-[var(--color-text-primary)]"
                    aria-hidden="true"
                  >
                    {b.name.charAt(0)}
                  </div>
                </div>

                <div class="w-full">
                  <span class="block text-xs sm:text-sm font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors truncate">
                    {b.name}
                  </span>
                  <span class="block text-[11px] font-semibold text-[var(--color-text-secondary)] truncate mt-0.5">
                    {b.models.length} Models
                  </span>
                </div>
              </button>
            {/each}
          {/if}
        </div>
      </div>
    {/if}

    <!-- STEP 3: MODEL SELECTION (Series Filter Chips + Model Tiles) -->
    {#if autoWizardState.step === 'model'}
      <div class="space-y-3.5 animate-in fade-in duration-200">
        <div class="flex items-center justify-between">
          <span class="text-xs font-extrabold uppercase tracking-wider text-[var(--color-text-disabled)]">
            Select Your {brandLabel} Model
          </span>
          <span class="text-xs font-extrabold text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] px-2.5 py-0.5 rounded-full">
            Step 3 of 3
          </span>
        </div>

        <!-- Search Input with rounded-full pill design and tactile clear button -->
        <div class="relative flex items-center">
          <span class="absolute left-3.5 text-[var(--color-text-disabled)] pointer-events-none flex items-center justify-center">
            <Icon icon={Search01Icon} size={18} />
          </span>
          <input
            type="text"
            bind:value={modelSearchQuery}
            placeholder="Search model or alias (e.g. 16 Pro Max, Ace 3, K70)..."
            class="w-full h-11 pl-10 pr-9 text-xs sm:text-sm font-semibold bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-full text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-blue-500/15 outline-none shadow-xs transition-all"
          />
          {#if modelSearchQuery}
            <button
              type="button"
              onclick={() => (modelSearchQuery = '')}
              class="absolute right-3.5 w-5 h-5 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] flex items-center justify-center text-xs font-black transition-colors cursor-pointer"
              aria-label="Clear search query"
            >
              ×
            </button>
          {/if}
        </div>

        <!-- Series Filter Chips matching CategorySection.svelte pill standards -->
        {#if seriesChips.length > 2}
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 touch-pan-x">
            {#each seriesChips as series}
              {@const isActive = activeSeriesFilter === series}
              <button
                type="button"
                onclick={() => (activeSeriesFilter = series)}
                class="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 min-h-[38px] rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 shrink-0 select-none cursor-pointer {isActive ? 'cta-blue-bubble text-white shadow-xs font-extrabold scale-102' : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)] hover:text-[var(--color-brand-primary)] shadow-2xs'}"
              >
                <span>{series}</span>
              </button>
            {/each}
          </div>
        {/if}

        <!-- Model Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {#if filteredModelEntries.length === 0}
            <div class="col-span-full py-10 text-center rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] p-6 space-y-2">
              <div class="w-12 h-12 mx-auto rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-disabled)] flex items-center justify-center">
                <Icon icon={Search01Icon} size={22} />
              </div>
              <p class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                No models matching "{modelSearchQuery}"
              </p>
              <p class="text-xs text-[var(--color-text-secondary)]">
                Try searching by common alias or clearing the series filter.
              </p>
              <button
                type="button"
                onclick={() => { modelSearchQuery = ''; activeSeriesFilter = 'All'; }}
                class="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          {:else}
            {#each filteredModelEntries as { model: m, matchedAlias }}
              <button
                type="button"
                onclick={() => handleSelectModel(m.slug || m.id)}
                class="p-3.5 min-h-[56px] rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:shadow-sm active:scale-[0.98] transition-all flex items-center justify-between text-left group cursor-pointer"
              >
                <div class="min-w-0 pr-3">
                  <div class="flex items-center gap-1.5 truncate">
                    <span class="text-xs sm:text-sm font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors truncate">
                      {m.name}
                    </span>
                    {#if m.isPopular}
                      <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent)]/20 shrink-0">
                        Top
                      </span>
                    {/if}
                  </div>
                  <div class="flex items-center flex-wrap gap-1.5 text-[11px] text-[var(--color-text-secondary)] mt-1">
                    <span class="px-2 py-0.5 rounded-full bg-[var(--color-bg-subtle)] font-semibold text-[var(--color-text-disabled)] text-[10px]">
                      {m.series}
                    </span>
                    {#if m.year}
                      <span class="text-[var(--color-text-disabled)] font-medium">({m.year})</span>
                    {/if}
                    {#if matchedAlias}
                      <span class="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[var(--color-brand-primary)] font-bold text-[10px] border border-blue-200/50 dark:border-blue-800/50">
                        aka {matchedAlias}
                      </span>
                    {/if}
                  </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-[var(--color-bg-subtle)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 shadow-2xs">
                  <Icon icon={ArrowRight01Icon} size={15} />
                </div>
              </button>
            {/each}
          {/if}
        </div>
      </div>
    {/if}

    <!-- STEP 4: SUCCESS / CONFIRMED CTA -->
    {#if autoWizardState.step === 'done'}
      <div class="space-y-5 py-2 text-center animate-in fade-in duration-200">
        
        <!-- Glowing Confirmed Icon Pod -->
        <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-b from-blue-500/15 via-blue-500/8 to-indigo-500/10 border border-blue-200/60 shadow-xs flex items-center justify-center text-[var(--color-brand-primary)]">
          <StickerThunder3D size={44} />
        </div>

        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-[var(--color-success-bg)] text-[var(--color-success-text)] border border-[var(--color-success-border)]/70 shadow-2xs mb-2.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            100% Fit Guarantee
          </span>
          <h2 class="text-xl sm:text-2xl font-black text-[var(--color-text-primary)] tracking-tight">
            Ready for your {modelLabel}
          </h2>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-subtle)] text-xs font-bold text-[var(--color-text-secondary)] border border-[var(--color-border-default)] mt-2">
            <span>{brandLabel}</span>
            <span class="text-[var(--color-text-disabled)]">•</span>
            <span>{typeLabel}</span>
          </div>
        </div>

        <!-- 1-Tap Quick Category Shortcuts -->
        <div class="pt-2 text-left">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-[var(--color-text-disabled)]">
              Jump Straight To
            </span>
            <span class="text-[11px] font-bold text-[var(--color-brand-primary)]">
              Instant Fit Filters
            </span>
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <!-- Cases -->
            <button
              type="button"
              onclick={() => handleCategoryClick('cases')}
              class="flex items-center gap-2 p-2.5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)]/40 hover:shadow-2xs active:scale-95 transition-all text-left group cursor-pointer"
            >
              <img
                src="/categories/shield_3d.png"
                alt=""
                class="w-6 h-6 object-contain group-hover:scale-110 transition-transform shrink-0"
              />
              <div class="min-w-0">
                <span class="block text-xs font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] truncate">
                  Cases
                </span>
                <span class="block text-[10px] font-medium text-[var(--color-text-disabled)] truncate">
                  Covers & Shells
                </span>
              </div>
            </button>

            <!-- Screen Glass -->
            <button
              type="button"
              onclick={() => handleCategoryClick('screen-glass')}
              class="flex items-center gap-2 p-2.5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)]/40 hover:shadow-2xs active:scale-95 transition-all text-left group cursor-pointer"
            >
              <img
                src="/categories/gem_stone_3d.png"
                alt=""
                class="w-6 h-6 object-contain group-hover:scale-110 transition-transform shrink-0"
              />
              <div class="min-w-0">
                <span class="block text-xs font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] truncate">
                  Screen Glass
                </span>
                <span class="block text-[10px] font-medium text-[var(--color-text-disabled)] truncate">
                  9H Protectors
                </span>
              </div>
            </button>

            <!-- Fast Chargers -->
            <button
              type="button"
              onclick={() => handleCategoryClick('chargers')}
              class="flex items-center gap-2 p-2.5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)]/40 hover:shadow-2xs active:scale-95 transition-all text-left group cursor-pointer"
            >
              <img
                src="/categories/high_voltage_3d.png"
                alt=""
                class="w-6 h-6 object-contain group-hover:scale-110 transition-transform shrink-0"
              />
              <div class="min-w-0">
                <span class="block text-xs font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] truncate">
                  Chargers
                </span>
                <span class="block text-[10px] font-medium text-[var(--color-text-disabled)] truncate">
                  GaN & Adapters
                </span>
              </div>
            </button>

            <!-- MagSafe -->
            <button
              type="button"
              onclick={() => handleCategoryClick('magsafe')}
              class="flex items-center gap-2 p-2.5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)]/40 hover:shadow-2xs active:scale-95 transition-all text-left group cursor-pointer"
            >
              <img
                src="/categories/magnet_3d.png"
                alt=""
                class="w-6 h-6 object-contain group-hover:scale-110 transition-transform shrink-0"
              />
              <div class="min-w-0">
                <span class="block text-xs font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] truncate">
                  MagSafe
                </span>
                <span class="block text-[10px] font-medium text-[var(--color-text-disabled)] truncate">
                  Wireless & Mounts
                </span>
              </div>
            </button>
          </div>
        </div>

        <!-- Ambient Animated Dual-Bubble Primary CTA Button -->
        <button
          type="button"
          onclick={handleBrowseAccessories}
          class="cta-search-animated w-full min-h-[52px] rounded-[var(--radius-sm)] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Browse All Verified Accessories</span>
          <Icon icon={ArrowRight01Icon} size={18} />
        </button>

        <!-- Secondary Reset -->
        <div>
          <button
            type="button"
            onclick={() => autoWizardState.reset()}
            class="text-xs font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:underline transition-colors cursor-pointer py-1"
          >
            Select Another Device
          </button>
        </div>
      </div>
    {/if}

  </div>

</div>
