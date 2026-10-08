<script lang="ts">
  import { CATEGORIES } from '$lib/data/catalog';
  import Icon from './Icon.svelte';
  import { Location01Icon, Call02Icon, Mail01Icon, Facebook01Icon, InstagramIcon, YoutubeIcon, WhatsappIcon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

  let expandedSection = $state<string | null>(null);

  function toggleSection(section: string) {
    expandedSection = expandedSection === section ? null : section;
  }
</script>

<footer class="bg-[#0B111E] dark:bg-[#070B14] text-slate-300 pt-14 pb-24 md:pb-12 border-t border-slate-800 dark:border-slate-800/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-800 dark:border-slate-800/80">
      <!-- Brand column (2 cols on lg) -->
      <div class="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
        <div class="flex items-center gap-2.5 mb-4">
          <img
            src="/Joy%20tech.svg"
            alt="Joy Telecom"
            class="w-9 h-9 object-contain shrink-0"
          />
          <span class="text-xl font-black text-white">Joy Telecom</span>
        </div>
        <p class="text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
          Your premier destination for authentic phone accessories, certified chargers, military-grade protective cases, and gadgets across Bangladesh.
        </p>

        <div class="flex flex-col gap-2.5 text-sm text-slate-300 mb-6">
          <div class="flex items-center gap-2">
            <Icon icon={Location01Icon} size={18} class="text-[var(--color-brand-primary)] shrink-0" />
            <span>Multiplan Center, New Elephant Road, Dhaka-1205</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon={Call02Icon} size={18} class="text-[var(--color-accent)] shrink-0" />
            <span>Helpline: +880 1700-000000 (10 AM - 10 PM)</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon={Mail01Icon} size={18} class="text-slate-400 shrink-0" />
            <span>support@joytelecom.com.bd</span>
          </div>
        </div>
        
        <!-- Social Icons Row -->
        <div class="flex items-center gap-4">
          <a href="#facebook" class="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
            <Icon icon={Facebook01Icon} size={20} />
          </a>
          <a href="#instagram" class="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
            <Icon icon={InstagramIcon} size={20} />
          </a>
          <a href="#youtube" class="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
            <Icon icon={YoutubeIcon} size={20} />
          </a>
          <a href="#whatsapp" class="text-slate-400 hover:text-white transition-colors" aria-label="WhatsApp">
            <Icon icon={WhatsappIcon} size={20} />
          </a>
        </div>
      </div>

      <!-- Map Preview (Find Us) -->
      <div class="lg:order-last pb-4 lg:pb-0">
        <h4 class="text-sm font-semibold text-white mb-4 lg:mb-4">
          Find Us (Mirpur)
        </h4>
        <div class="w-full h-48 lg:h-48 min-h-[120px] rounded-xl overflow-hidden border border-slate-800 mb-2">
          <iframe 
            title="Mirpur Store Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430139!2d90.3817105!3d23.7401564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sMultiplan%20Center!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen={true} 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <a href="https://goo.gl/maps/placeholder" target="_blank" class="text-xs text-[var(--color-brand-primary)] hover:text-white transition-colors">
          Get Directions &rarr;
        </a>
      </div>

      <!-- Quick Links (Categories + Some Support) -->
      <div class="border-b border-slate-800 lg:border-none pb-4 lg:pb-0">
        <button 
          type="button"
          aria-expanded={expandedSection === 'quick'}
          class="w-full flex items-center justify-between cursor-pointer lg:cursor-default py-1" 
          onclick={() => toggleSection('quick')}
        >
          <h4 class="text-sm font-semibold text-white mb-0 lg:mb-4">
            Quick Links
          </h4>
          <span class="lg:hidden text-slate-400 transition-transform duration-200 {expandedSection === 'quick' ? 'rotate-180' : ''}">
            <Icon icon={ArrowDown01Icon} size={20} />
          </span>
        </button>
        <ul class="space-y-2.5 text-sm text-slate-400 mt-3 lg:mt-0 transition-all duration-300 overflow-hidden {expandedSection === 'quick' ? 'block' : 'hidden'} lg:!block">
          {#each CATEGORIES.slice(0, 5) as cat}
            <li>
              <a href="#{cat.slug}" class="hover:text-white transition-colors">
                {cat.name}
              </a>
            </li>
          {/each}
          <li><a href="#tracking" class="hover:text-white transition-colors">Track Your Order</a></li>
          <li><a href="#contact" class="hover:text-white transition-colors">Contact Store</a></li>
        </ul>
      </div>

      <!-- Support & Legal -->
      <div class="border-b border-slate-800 lg:border-none pb-4 lg:pb-0">
        <button 
          type="button"
          aria-expanded={expandedSection === 'support'}
          class="w-full flex items-center justify-between cursor-pointer lg:cursor-default py-1" 
          onclick={() => toggleSection('support')}
        >
          <h4 class="text-sm font-semibold text-white mb-0 lg:mb-4">
            Support &amp; Legal
          </h4>
          <span class="lg:hidden text-slate-400 transition-transform duration-200 {expandedSection === 'support' ? 'rotate-180' : ''}">
            <Icon icon={ArrowDown01Icon} size={20} />
          </span>
        </button>
        <ul class="space-y-2.5 text-sm text-slate-400 mt-3 lg:mt-0 transition-all duration-300 overflow-hidden {expandedSection === 'support' ? 'block' : 'hidden'} lg:!block">
          <li><a href="#faq" class="hover:text-white transition-colors">Frequently Asked Questions</a></li>
          <li><a href="#warranty" class="hover:text-white transition-colors">7-Day Replacement Info</a></li>
          <li><a href="#shipping" class="hover:text-white transition-colors">Dhaka &amp; Courier Delivery</a></li>
          <li><a href="#privacy" class="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#terms" class="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
          <li><a href="#returns" class="hover:text-white transition-colors">Return &amp; Refund Policy</a></li>
          <li><a href="#genuine" class="hover:text-white transition-colors">Authenticity Guarantee</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Row: Payment Badges & Copyright -->
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
      <p>© {new Date().getFullYear()} Joy Telecom Bangladesh. All rights reserved.</p>

      <div class="flex items-center gap-3">
        <span class="text-[11px] font-semibold text-slate-500">Accepted:</span>
        <span class="px-2 py-1 rounded bg-slate-800/80 text-slate-200 font-bold text-[10px]">
          Cash on Delivery
        </span>
        <span class="px-2 py-1 rounded bg-[#E2136E]/20 text-[#E2136E] font-bold text-[10px]">
          bKash
        </span>
        <span class="px-2 py-1 rounded bg-[#F7931E]/20 text-[#F7931E] font-bold text-[10px]">
          Nagad
        </span>
        <span class="px-2 py-1 rounded bg-slate-800/80 text-slate-200 font-bold text-[10px]">
          Cards
        </span>
      </div>
    </div>
  </div>
</footer>
