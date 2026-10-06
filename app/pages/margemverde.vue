<script setup lang="ts">
const productUrl = 'https://lucro10.com.br'
const { locale } = useI18n()
const copy = computed(() => locale.value === 'pt-BR' ? {
  message: 'O produto agora se chama Lucro10 e tem um novo site.',
  link: 'Acessar Lucro10'
} : {
  message: 'The product is now called Lucro10 and has a new website.',
  link: 'Visit Lucro10'
})

useSeoMeta({
  title: 'Lucro10',
  description: () => copy.value.message,
  ogTitle: 'Lucro10',
  ogDescription: () => copy.value.message
})
useHead({
  meta: [{ 'http-equiv': 'refresh', content: `0;url=${productUrl}` }],
  link: [{ rel: 'canonical', href: productUrl, tagPriority: 'high' }]
})

onMounted(() => {
  window.location.replace(productUrl)
})
</script>

<template>
  <main class="mx-auto max-w-screen-xl space-y-6 px-4 py-20">
    <h1 class="text-4xl font-semibold">Lucro10</h1>
    <p class="text-muted-foreground">{{ copy.message }}</p>
    <a :href="productUrl" class="font-medium text-green-800 underline">{{ copy.link }} →</a>
  </main>
</template>
