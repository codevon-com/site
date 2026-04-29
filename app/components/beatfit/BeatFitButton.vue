<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<{
  icon?: string
  variant?: 'primary' | 'outline' | 'dark'
  href?: string
  type?: 'button' | 'submit'
  class?: HTMLAttributes['class']
}>(), {
  icon: undefined,
  variant: 'primary',
  href: undefined,
  type: 'button',
  class: undefined,
});

const classes = {
  primary: 'border-[#EF1515] bg-[#EF1515] text-white shadow-[0_12px_28px_rgba(239,21,21,0.22)] hover:bg-[#d90f0f]',
  outline: 'border-[#EF1515] bg-white text-[#EF1515] hover:bg-red-50',
  dark: 'border-white/20 bg-white text-black hover:bg-red-50',
};
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1515] focus-visible:ring-offset-2"
    :class="[classes[variant], props.class]"
  >
    <BeatFitIcon v-if="icon" :name="icon" class="h-5 w-5" />
    <slot />
  </a>
  <button
    v-else
    :type="type"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1515] focus-visible:ring-offset-2"
    :class="[classes[variant], props.class]"
  >
    <BeatFitIcon v-if="icon" :name="icon" class="h-5 w-5" />
    <slot />
  </button>
</template>
