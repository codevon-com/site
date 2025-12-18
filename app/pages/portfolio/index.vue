<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative border-b border-border/60 bg-gradient-to-b from-background to-muted/20"
    >
      <div class="mx-auto max-w-screen-xl px-4 py-16 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {{ t('portfolioIndex.title') }}
        </h1>
        <p class="mt-6 text-xl text-muted-foreground">
          {{ t('portfolioIndex.subtitle1') }}
        </p>
        <p class="mt-2 text-xl text-muted-foreground">
          {{ t('portfolioIndex.subtitle2') }}
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20">
      <div class="mx-auto max-w-screen-xl px-4">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in projectCards"
            :key="item.slug"
            :to="localePath(`/portfolio/${item.slug}`)"
            class="group"
          >
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col">
              <div class="w-full h-48 overflow-hidden bg-white flex items-center justify-center">
                <NuxtImg
                  :src="item.project.image"
                  :alt="item.project.title"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>{{ item.project.title }}</CardTitle>
                <CardDescription>
                  {{ item.project.description }}
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge v-for="tag in item.project.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  {{ t('portfolioIndex.learnMore') }}
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { projectsEn } from '~/data/projects.en';
import { projectsPt } from '~/data/projects.pt';

const { t, locale } = useI18n();
const localePath = useLocalePath();

const projectOrder = [
  'smartzap',
  'take-pics',
  'rma-express',
  'deepdive',
  'roomremake',
  'meu-novo-cabelo',
  'eletrificado',
  'fintz-bot',
] as const;

const projectsByLocale = computed(() => (locale.value === 'pt-BR' ? projectsPt : projectsEn));

const projectCards = computed(() =>
  projectOrder
    .map((slug) => ({
      slug,
      project: projectsByLocale.value[slug as keyof typeof projectsByLocale.value],
    }))
    .filter((x) => Boolean(x.project))
);

const seoTitle = computed(() => t('portfolioIndex.seoTitle'));
const seoDescription = computed(() => t('portfolioIndex.seoDescription'));

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
});
</script>


