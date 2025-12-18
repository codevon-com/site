<template>
  <section id="how-we-work" class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
        {{ t('how.title') }}
      </h2>
      <p class="mt-3 text-muted-foreground">
        {{ t('how.subtitle') }}
      </p>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(step, idx) in steps"
        :key="step.title + idx"
        class="rounded-xl border border-border/60 p-6"
      >
        <div class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 font-medium text-primary">
          {{ String(idx + 1).padStart(2, '0') }}
        </div>
        <h3 class="font-medium">{{ step.title }}</h3>
        <p class="mt-2 text-sm text-muted-foreground">
          {{ step.body }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale, getLocaleMessage } = useI18n();

const steps = computed(() => {
  const current = getLocaleMessage(locale.value) as any;
  const stepsArr = (current?.how?.steps as any[]) || [];
  const length = Array.isArray(stepsArr) ? stepsArr.length : 0;
  return Array.from({ length }).map((_, idx) => ({
    title: t(`how.steps.${idx}.title`),
    body: t(`how.steps.${idx}.body`)
  }));
});
</script>
