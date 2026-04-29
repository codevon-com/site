<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar v-if="!isBeatFitRoute" />
    <NuxtPage />
    <Footer v-if="!isBeatFitRoute" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();

const isBeatFitRoute = computed(() => route.path === '/beatfit' || route.path.startsWith('/beatfit/'));

useSeoMeta(() => ({
  title: t('seo.title'),
  description: t('seo.description'),
  ogTitle: t('seo.ogTitle'),
  ogDescription: t('seo.ogDescription'),
}));
</script>
