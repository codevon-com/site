<template>
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
      <div class="absolute -bottom-48 -left-10 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
      <div class="absolute -bottom-48 -right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
    </div>
    <div class="mx-auto max-w-screen-xl px-4 pb-20 pt-16 text-center md:pb-28 md:pt-24">
      <p class="mx-auto mb-4 w-fit rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
        {{ t('hero.badge') }}
      </p>
      <h1 class="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {{ t('hero.titleBefore') }}
        <span class="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {{ t('hero.titleHighlight') }}
        </span>
        {{ t('hero.titleAfter') }}
      </h1>
      <p class="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
        {{ t('hero.subtitle') }}
      </p>
      <div class="mx-auto mt-8 flex max-w-md items-center justify-center gap-3">
        <NuxtLink :to="homeHash('contact')">
          <Button size="lg" class="gap-2">
            {{ t('hero.primary') }}
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </Button>
        </NuxtLink>
        <NuxtLink :to="homeHash('services')">
          <Button size="lg" variant="secondary">
            {{ t('hero.secondary') }}
          </Button>
        </NuxtLink>
      </div>
      <div class="mx-auto mt-10 grid max-w-3xl grid-cols-2 items-center gap-6 text-left md:grid-cols-4">
        <div
          v-for="item in valueItems"
          :key="item.title"
          class="rounded-lg border border-border/60 p-3"
        >
          <div class="text-2xl font-semibold">{{ item.title }}</div>
          <div class="text-xs text-muted-foreground">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale, getLocaleMessage } = useI18n();
const localePath = useLocalePath();

const homeHash = (id: string) => localePath({ path: '/', hash: `#${id}` });

const valueItems = computed(() => {
  const current = getLocaleMessage(locale.value) as any;
  const values = (current?.hero?.values as any[]) || [];
  if (!Array.isArray(values)) return [];
  return values.map((_, idx) => ({
    title: t(`hero.values.${idx}.title`),
    desc: t(`hero.values.${idx}.desc`),
  }));
});
</script>
