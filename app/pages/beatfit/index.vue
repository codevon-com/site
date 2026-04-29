<template>
  <BeatFitShell>
    <main>
      <section class="relative overflow-hidden border-b border-black/10 bg-white">
        <div class="absolute inset-0" aria-hidden="true">
          <img
            src="/beatfit/landing_bg_1.png"
            alt=""
            class="h-full w-full scale-105 object-cover opacity-35 blur-[2px]"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/35" />
          <div class="absolute inset-0 bg-white/25" />
        </div>
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EF1515]/40 to-transparent" />
        <div class="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div class="max-w-3xl">
            <h1 class="text-6xl font-black tracking-tight md:text-8xl">
              Beat<span class="text-[#EF1515]">Fit</span>
            </h1>
            <p class="mt-5 max-w-xl text-2xl font-medium leading-tight text-neutral-900">
              Treinos personalizados com IA para evolução física e bem-estar.
            </p>
            <div class="mt-8 h-1 w-14 bg-[#EF1515]" />
            <p class="mt-7 text-xl font-bold text-neutral-900">
              Treine no ritmo. Viva mais forte.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                class="inline-flex min-h-12 items-center justify-center rounded-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1515] focus-visible:ring-offset-2"
                aria-label="Baixar na Google Play"
              >
                <img
                  src="/beatfit/GetItOnGooglePlay_Badge_Web_color_Portuguese-Brazil.svg"
                  alt="Baixar na Google Play"
                  class="h-12 w-auto"
                >
              </a>
              <a
                href="#"
                class="inline-flex min-h-12 items-center justify-center rounded-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1515] focus-visible:ring-offset-2"
                aria-label="Baixar na App Store"
              >
                <img
                  src="/beatfit/Download_on_the_App_Store_Badge_PTBR_RGB_blk_092917.svg"
                  alt="Baixar na App Store"
                  class="h-12 w-auto"
                >
              </a>
            </div>
            <div class="mt-12 h-14 w-full max-w-xl text-[#EF1515] [mask-image:linear-gradient(to_right,black_0%,black_90%,transparent)]" aria-hidden="true">
              <svg viewBox="0 0 680 72" preserveAspectRatio="none" class="h-full w-full" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M0 38h68l10-8 9 15 12-13h84l17-22 10 52 9-33 12 8h58l9-6 9 11 12-9h80l11-12 10 22 13-17h70l17-25 10 58 10-37 12 9h82l10-8 10 18 12-13h54" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 class="text-3xl font-black tracking-tight md:text-4xl">
          Tudo que você precisa para evoluir
        </h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="benefit in benefits" :key="benefit.title" class="rounded-lg border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03]">
            <BeatFitIcon :name="benefit.icon" class="h-10 w-10 text-[#EF1515]" />
            <h3 class="mt-5 text-base font-black">{{ benefit.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-neutral-600">{{ benefit.body }}</p>
          </article>
        </div>
      </section>

      <section class="bg-black text-white">
        <div class="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-[1fr_auto]">
          <div>
            <h2 class="text-3xl font-black">Pronto para transformar seu corpo e sua rotina?</h2>
            <p class="mt-2 text-sm text-white/70">Baixe agora o BeatFit e treine no ritmo certo para você.</p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              class="inline-flex min-h-12 items-center justify-center rounded-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Baixar na Google Play"
            >
              <img
                src="/beatfit/GetItOnGooglePlay_Badge_Web_color_Portuguese-Brazil.svg"
                alt="Baixar na Google Play"
                class="h-12 w-auto"
              >
            </a>
            <a
              href="#"
              class="inline-flex min-h-12 items-center justify-center rounded-lg transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Baixar na App Store"
            >
              <img
                src="/beatfit/Download_on_the_App_Store_Badge_PTBR_RGB_wht_100317.svg"
                alt="Baixar na App Store"
                class="h-12 w-auto"
              >
            </a>
          </div>
        </div>
      </section>
    </main>
  </BeatFitShell>
</template>

<script setup lang="ts">
const benefits = [
  {
    title: 'Treinos personalizados',
    body: 'Planos inteligentes criados para o seu objetivo, nível e disponibilidade.',
    icon: 'target',
  },
  {
    title: 'Acompanhamento completo',
    body: 'Monitore suas métricas, progresso e desempenho em um só lugar.',
    icon: 'activity',
  },
  {
    title: 'Mais saúde e bem-estar',
    body: 'Melhore sua força, resistência e qualidade de vida com consistência.',
    icon: 'heart-pulse',
  },
  {
    title: 'Inteligência Artificial',
    body: 'A IA ajusta seus treinos conforme sua evolução e resultados.',
    icon: 'brain',
  },
];

useSeoMeta({
  title: 'BeatFit — Treinos personalizados com IA',
  description: 'Treinos personalizados com IA para evolução física e bem-estar.',
  ogTitle: 'BeatFit',
  ogDescription: 'Treine no ritmo. Viva mais forte.',
  themeColor: '#EF1515',
});
</script>
