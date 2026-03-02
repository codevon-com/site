<template>
  <section id="contact" class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
    <div class="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-8 md:p-12">
      <div class="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
      <div class="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/30 blur-2xl" />
      <div class="relative">
        <h2 class="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {{ t('cta.title') }}
        </h2>
        <p class="mt-3 max-w-2xl text-muted-foreground">
          {{ t('cta.body') }}
        </p>
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:hello@codevon.com">
            <Button size="lg" class="gap-2">
              {{ t('cta.primary') }}
              <Icon name="lucide:arrow-right" class="h-5 w-5" />
            </Button>
          </a>
          <NuxtLink :to="homeHash('services')">
            <Button size="lg" variant="secondary">
              {{ t('cta.secondary') }}
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const homeHash = (id: string) => localePath({ path: '/', hash: `#${id}` });
</script>
