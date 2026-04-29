<template>
  <header class="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
    <div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
      <BeatFitLogo />
      <nav class="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="transition hover:text-[#EF1515]">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <NuxtLink to="/beatfit">
        <span class="inline-flex min-h-10 items-center rounded-lg bg-[#EF1515] px-4 text-sm font-bold text-white transition hover:bg-[#d90f0f]">
          Baixar o app
        </span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { to: '/beatfit', label: 'Início' },
  { to: '/beatfit/privacy', label: 'Privacidade' },
  { to: '/beatfit/terms', label: 'Termos' },
  { to: '/beatfit/support', label: 'Suporte' },
];
</script>
