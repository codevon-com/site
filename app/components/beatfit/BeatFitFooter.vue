<template>
  <footer class="border-t border-black/10 bg-white">
    <div class="mx-auto max-w-6xl px-5 py-10">
      <div class="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div class="space-y-3">
          <BeatFitLogo />
          <p class="max-w-xs text-sm leading-6 text-neutral-600">
            Treine no ritmo. Viva mais forte.
          </p>
        </div>
        <div>
          <p class="mb-3 text-sm font-bold text-black">Legal</p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li><NuxtLink to="/beatfit/privacy" class="hover:text-[#EF1515]">Política de Privacidade</NuxtLink></li>
            <li><NuxtLink to="/beatfit/terms" class="hover:text-[#EF1515]">Termos de Uso</NuxtLink></li>
            <li><NuxtLink to="/beatfit/delete-account" class="hover:text-[#EF1515]">Excluir conta</NuxtLink></li>
            <li><NuxtLink to="/beatfit/support" class="hover:text-[#EF1515]">Suporte</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="mb-3 text-sm font-bold text-black">Contato</p>
          <a href="mailto:suporte@codevon.com" class="text-sm text-neutral-600 hover:text-[#EF1515]">
            suporte@codevon.com
          </a>
        </div>
      </div>
      <div class="mt-10 border-t border-black/10 pt-5 text-xs text-neutral-500">
        © 2025 BeatFit. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>
