<script lang="ts">
  import { HugeiconsIcon } from '@hugeicons/svelte';
  import type { IconSvgElement } from '@hugeicons/svelte';

  interface Props {
    icon: IconSvgElement;
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    class?: string;
  }

  let {
    icon,
    size = 20,
    color = 'currentColor',
    strokeWidth = 1.8,
    class: className = ''
  }: Props = $props();
</script>

<HugeiconsIcon
  {icon}
  {size}
  {color}
  {strokeWidth}
  className={className}
/>
