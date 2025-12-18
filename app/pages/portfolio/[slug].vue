<template>
  <main>
    <!-- Project Hero -->
    <section
      class="relative border-b border-border/60 bg-gradient-to-b from-background to-muted/20"
    >
      <div class="mx-auto max-w-screen-xl px-4 py-16">
        <NuxtLink
          :to="localePath('/portfolio')"
          class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <Icon name="lucide:arrow-left" class="h-4 w-4" />
          {{ t('portfolio.back') }}
        </NuxtLink>

        <div class="flex flex-wrap gap-3 mb-6">
          <Badge v-for="tag in project.tags" :key="tag" variant="secondary">{{
            tag
          }}</Badge>
        </div>

        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {{ project.title }}
        </h1>
        <p class="mt-6 text-xl text-muted-foreground max-w-3xl">
          {{ project.description }}
        </p>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-24">
      <div class="mx-auto max-w-4xl px-4">
        <!-- About the Project -->
        <div>
          <h2 class="text-3xl font-bold mb-6">{{ t('portfolio.about') }}</h2>

          <div class="space-y-4 text-muted-foreground">
            <p v-for="(paragraph, index) in project.about" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Project Image -->
        <div class="mt-12">
          <div
            :class="[
              'w-full flex items-center justify-center',
              project.detailImage?.endsWith('.gif')
                ? ''
                : 'overflow-hidden rounded-xl bg-muted shadow-lg',
            ]"
          >
            <img
              v-if="project.detailImage?.endsWith('.gif')"
              :src="project.detailImage"
              :alt="project.title"
              class="max-w-full max-h-96 w-auto h-auto object-contain"
            />
            <NuxtImg
              v-else
              :src="project.detailImage"
              :alt="project.title"
              class="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div class="mt-12 pt-12 border-t border-border/60">
          <h3 class="text-2xl font-semibold mb-6">{{ t('portfolio.features') }}</h3>
          <ul class="space-y-3">
            <li
              v-for="(feature, index) in project.features"
              :key="index"
              class="flex items-start gap-3"
            >
              <Icon
                name="lucide:check-circle"
                class="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
              />
              <span class="text-muted-foreground">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-12 pt-12 border-t border-border/60">
          <h3 class="text-2xl font-semibold mb-6">{{ t('portfolio.tech') }}</h3>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tech in project.technologies" :key="tech">{{
              tech
            }}</Badge>
          </div>
        </div>

        <div class="mt-12 pt-12 border-t border-border/60">
          <h3 class="text-2xl font-semibold mb-6">{{ t('portfolio.results') }}</h3>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="(result, index) in project.results"
              :key="index"
              class="rounded-lg border border-border/60 p-4"
            >
              <div class="text-3xl font-bold text-primary">
                {{ result.value }}
              </div>
              <div class="mt-1 text-sm text-muted-foreground">
                {{ result.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="border-t border-border/60 bg-muted/20 py-16">
      <div class="mx-auto max-w-screen-xl px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('portfolio.ctaTitle') }}</h2>
        <p class="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {{ t('portfolio.ctaBody') }}
        </p>
        <NuxtLink :to="homeHash('contact')">
          <Button size="lg" class="gap-2">
            {{ t('portfolio.ctaButton') }}
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </Button>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { projectsEn } from '~/data/projects.en';
import { projectsPt } from '~/data/projects.pt';

const route = useRoute();
const slug = route.params.slug as string;
const { t, locale } = useI18n();
const localePath = useLocalePath();

const homeHash = (id: string) => localePath({ path: '/', hash: `#${id}` });

const projectsByLocale = computed(() => (locale.value === 'pt-BR' ? projectsPt : projectsEn));
const project = computed(() => projectsByLocale.value[slug as keyof typeof projectsByLocale.value]);

const seoTitle = computed(() =>
  project.value
    ? `${project.value.title} - ${t('portfolioIndex.seoTitle')}`
    : t('portfolioIndex.seoTitle')
);
const seoDescription = computed(() => project.value?.description || t('portfolioIndex.seoDescription'));

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
});
</script>
