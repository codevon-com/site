<script setup lang="ts">
defineProps<{
  title: string
  intro?: string
}>();
</script>

<template>
  <BeatFitShell>
    <main class="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <div class="mb-10 max-w-3xl">
        <p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#EF1515]">BeatFit</p>
        <h1 class="text-4xl font-black tracking-tight md:text-5xl">{{ title }}</h1>
        <p v-if="intro" class="mt-4 text-lg leading-8 text-neutral-600">{{ intro }}</p>
      </div>
      <slot />
    </main>
  </BeatFitShell>
</template>
