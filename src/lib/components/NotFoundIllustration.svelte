<script lang="ts">
  let { class: className = 'w-full max-w-[190px] sm:max-w-[220px] h-auto' }: { class?: string } = $props();
</script>

<div class="relative flex items-center justify-center select-none {className}">
  <!-- Ambient radial backdrop lighting to enhance contrast in both themes -->
  <div class="absolute inset-0 bg-radial from-blue-500/15 dark:from-blue-500/25 via-indigo-500/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

  <!-- User-provided Storyset 404 vector from static/ folder -->
  <img
    src="/Oops!%20404%20Error%20with%20a%20broken%20robot-rafiki.svg"
    alt="Oops! 404 Error - Page Not Found"
    class="relative z-10 w-full h-auto max-h-[180px] sm:max-h-[210px] object-contain drop-shadow-sm dark:drop-shadow-[0_8px_25px_rgba(59,130,246,0.18)] dark:brightness-105 transition-all duration-300 pointer-events-none"
    width="500"
    height="500"
    loading="eager"
    decoding="async"
  />
</div>
