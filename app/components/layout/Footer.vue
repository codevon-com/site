<template>
  <footer class="border-t border-border/60">
    <div class="mx-auto max-w-screen-xl px-4 py-12">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <NuxtLink :to="localePath('/')" class="flex items-center">
              <NuxtImg src="/logo_codevon_centered.png" alt="codevon" class="h-8 w-auto" />
            </NuxtLink>
          </div>
          <p class="text-sm text-muted-foreground">
            {{ t('footer.tagline') }}
          </p>
        </div>
        <div>
          <div class="mb-3 text-sm font-medium">{{ t('footer.links') }}</div>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink :to="homeHash('services')" class="text-muted-foreground hover:text-foreground">{{ t('footer.linksList.services') }}</NuxtLink></li>
            <li><NuxtLink :to="homeHash('pricing')" class="text-muted-foreground hover:text-foreground">{{ t('footer.linksList.pricing') }}</NuxtLink></li>
            <li><NuxtLink :to="homeHash('how-we-work')" class="text-muted-foreground hover:text-foreground">{{ t('footer.linksList.how') }}</NuxtLink></li>
            <li><NuxtLink :to="homeHash('work')" class="text-muted-foreground hover:text-foreground">{{ t('footer.linksList.work') }}</NuxtLink></li>
            <li><NuxtLink :to="homeHash('team')" class="text-muted-foreground hover:text-foreground">{{ t('footer.linksList.team') }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <div class="mb-3 text-sm font-medium">{{ t('footer.contact') }}</div>
          <ul class="space-y-2 text-sm">
            <li><a href="mailto:hello@codevon.com" class="text-muted-foreground hover:text-foreground">{{ t('footer.email') }}</a></li>
            <li><NuxtLink :to="homeHash('contact')" class="text-muted-foreground hover:text-foreground">{{ t('footer.book') }}</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="mt-12 flex items-center justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground">
        <span>{{ t('footer.copyright') }}</span>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-foreground">{{ t('footer.privacy') }}</a>
          <a href="#" class="hover:text-foreground">{{ t('footer.sla') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const homeHash = (id: string) => localePath({ path: '/', hash: `#${id}` });
</script>
