<template>
  <section id="pricing" class="w-full flex flex-col items-center py-16 px-4 md:py-24">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold">
        {{ t('pricing.title') }}
      </h2>
      <p class="text-gray-600 max-w-xl mx-auto mt-4">
        {{ t('pricing.subtitle') }}
      </p>
    </div>

    <div class="w-full max-w-5xl border rounded-2xl p-10 bg-white shadow-sm">
      <div class="grid md:grid-cols-2 items-center">
        <div>
          <h3 class="text-2xl font-semibold mb-6">
            {{ t('pricing.engagementTitle') }}
          </h3>
          <ul class="space-y-4">
            <li v-for="item in bullets" :key="item.title" class="flex items-start gap-3">
              <span class="text-primary font-semibold text-xl">✓</span>
              <p>
                <strong>{{ item.title }}</strong><br />
                <span class="text-gray-600">
                  {{ item.desc }}
                </span>
              </p>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-8 items-stretch w-full">
          <div
            class="flex flex-col bg-primary/10 mt-8 p-6 rounded-xl space-y-2 w-full mx-auto"
          >
            <div class="text-start">
              <div class="text-5xl font-bold text-primary">{{ t('pricing.rate.value') }}</div>
              <p class="text-gray-600">{{ t('pricing.rate.unit') }}</p>
            </div>
          </div>
          <div class="flex flex-col items-stretch mx-auto w-full">
            <NuxtLink
              :to="homeHash('contact')"
              class="bg-primary hover:bg-primary/90 text-white w-full font-medium py-3 px-8 rounded-lg transition text-center"
            >
                {{ t('pricing.cta') }}
            </NuxtLink>
            <p class="text-gray-500 text-sm mt-4 w-full text-center">
              {{ t('pricing.note') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale, getLocaleMessage } = useI18n();
const localePath = useLocalePath();

const homeHash = (id: string) => localePath({ path: '/', hash: `#${id}` });

const bullets = computed(() => {
  const current = getLocaleMessage(locale.value) as any;
  const list = (current?.pricing?.bullets as any[]) || [];
  const length = Array.isArray(list) ? list.length : 0;
  return Array.from({ length }).map((_, idx) => ({
    title: t(`pricing.bullets.${idx}.title`),
    desc: t(`pricing.bullets.${idx}.desc`)
  }));
});
</script>

