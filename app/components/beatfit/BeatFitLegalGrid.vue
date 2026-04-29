<script setup lang="ts">
defineProps<{
  sections: Array<{
    title: string
    body: string
    icon: string
  }>
}>();
</script>

<template>
  <div class="grid gap-5 md:grid-cols-2">
    <article
      v-for="(section, index) in sections"
      :key="section.title"
      class="rounded-lg border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03]"
    >
      <div class="mb-4 flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-[#EF1515]/20 bg-red-50 text-[#EF1515]">
          <BeatFitIcon :name="section.icon" class="h-5 w-5" />
        </div>
        <h2 class="text-base font-black text-[#EF1515]">
          {{ index + 1 }}. {{ section.title }}
        </h2>
      </div>
      <p class="text-sm leading-7 text-neutral-700">{{ section.body }}</p>
    </article>
  </div>
</template>
