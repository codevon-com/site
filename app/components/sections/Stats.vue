<template>
  <section class="mx-auto max-w-screen-xl px-4 py-12">
    <div class="grid gap-6 rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur md:grid-cols-4">
      <div v-for="item in stats" :key="item.title">
        <div class="text-3xl font-semibold">{{ item.title }}</div>
        <div class="text-xs text-muted-foreground">{{ item.desc }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale, getLocaleMessage, t } = useI18n();

const stats = computed(() => {
  const current = getLocaleMessage(locale.value) as any;
  const items = (current?.stats?.items as any[]) || [];
  const length = Array.isArray(items) ? items.length : 0;
  return Array.from({ length }).map((_, idx) => ({
    title: t(`stats.items.${idx}.title`),
    desc: t(`stats.items.${idx}.desc`)
  }));
});
</script>
