<template>
  <section id="services" class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
        {{ t('services.title') }}
      </h2>
      <p class="mt-3 text-muted-foreground">
        {{ t('services.subtitle') }}
      </p>
    </div>
    <div class="mt-8 flex justify-center">
      <NuxtLink :to="localePath('/portfolio')">
        <Button size="lg" class="gap-2 border-primary/40 bg-primary/10 text-primary hover:bg-primary/20">
          <Icon name="lucide:briefcase" class="h-5 w-5" />
          {{ t('services.cta') }}
          <Icon name="lucide:arrow-right" class="h-5 w-5" />
        </Button>
      </NuxtLink>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="card in serviceCards"
        :key="card.title"
        class="group rounded-xl border border-border/60 p-6 transition-colors hover:border-primary/40"
      >
        <div class="mb-3 inline-flex items-center gap-2 text-sm font-medium">
          <Icon name="lucide:bot" class="h-5 w-5 text-primary" />
          {{ card.title }}
        </div>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li v-for="item in card.items" :key="item" class="flex items-center gap-2">
            <Icon name="lucide:check" class="h-4 w-4 text-primary" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale, getLocaleMessage } = useI18n();
const localePath = useLocalePath();

const serviceCards = computed(() => {
  const current = getLocaleMessage(locale.value) as any;
  const cards = (current?.services?.cards as any[]) || [];
  const length = Array.isArray(cards) ? cards.length : 0;
  return Array.from({ length }).map((_, idx) => ({
    title: t(`services.cards.${idx}.title`),
    items: Array.isArray(cards?.[idx]?.items)
      ? cards[idx].items.map((_: unknown, itemIdx: number) => t(`services.cards.${idx}.items.${itemIdx}`))
      : []
  }));
});
</script>

