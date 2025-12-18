<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta(() => ({
  title: t('seo.title'),
  description: t('seo.description'),
  ogTitle: t('seo.ogTitle'),
  ogDescription: t('seo.ogDescription'),
}));
</script>
