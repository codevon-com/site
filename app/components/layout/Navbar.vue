<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <NuxtImg src="/logo_codevon_centered.png" alt="codevon" class="h-8 w-auto" />
      </NuxtLink>
      <nav class="hidden items-center gap-6 text-sm md:flex">
        <NuxtLink :to="homeHash('services')" class="text-muted-foreground transition-colors hover:text-foreground">
          {{ t('nav.services') }}
        </NuxtLink>
        <NuxtLink :to="homeHash('how-we-work')" class="text-muted-foreground transition-colors hover:text-foreground">
          {{ t('nav.how') }}
        </NuxtLink>
        <NuxtLink :to="homeHash('pricing')" class="text-muted-foreground transition-colors hover:text-foreground">
          {{ t('nav.pricing') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/portfolio')" class="text-muted-foreground transition-colors hover:text-foreground">
          {{ t('nav.portfolio') }}
        </NuxtLink>
        <NuxtLink :to="homeHash('team')" class="text-muted-foreground transition-colors hover:text-foreground">
          {{ t('nav.team') }}
        </NuxtLink>
        <NuxtLink :to="homeHash('contact')" class="text-muted-foreground transition-colors hover:text-foreground">
          {{ t('nav.contact') }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-3">
        <label class="sr-only" for="lang-switch">{{ t('nav.language') }}</label>
        <select
          id="lang-switch"
          class="h-9 rounded-md border border-border/60 bg-background px-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          v-model="currentLocale"
        >
          <option v-for="item in availableLocales" :key="item.code" :value="item.code">
            {{ item.name }}
          </option>
        </select>
        <NuxtLink :to="homeHash('contact')">
          <Button size="sm" class="gap-1">
            {{ t('nav.cta') }}
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </Button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t, locale, locales } = useI18n();
type LocaleCode = typeof locale.value;
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const homeHash = (id: string) => localePath({ path: '/', hash: `#${id}` });

const availableLocales = computed(() =>
  (locales.value || []).map((loc) =>
    typeof loc === 'string'
      ? { code: loc, name: loc }
      : { code: loc.code, name: loc.name || loc.code }
  )
);

const currentLocale = computed({
  get: () => locale.value,
  set: (code: LocaleCode) => {
    const path = switchLocalePath(code);
    if (path) {
      navigateTo(path);
    }
  }
});
</script>

