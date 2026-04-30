<template>
  <BeatFitLegalLayout
    title="Excluir minha conta"
    intro="Envie seu e-mail cadastrado no BeatFit para solicitar a exclusão da conta e dos dados associados. Você pode solicitar a exclusão da sua conta por esta página mesmo que não tenha mais o app instalado."
  >
    <div class="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
      <form class="rounded-lg border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03]" @submit.prevent="submit">
        <label for="email" class="text-sm font-bold text-black">E-mail</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          autocomplete="email"
          placeholder="seu@email.com"
          class="mt-2 h-12 w-full rounded-lg border border-black/15 bg-white px-4 text-sm outline-none transition focus:border-[#EF1515] focus:ring-2 focus:ring-[#EF1515]/20"
          :aria-invalid="Boolean(error)"
          aria-describedby="delete-account-message"
        >
        <p v-if="error" id="delete-account-message" class="mt-3 text-sm font-medium text-[#EF1515]">
          {{ error }}
        </p>
        <p v-else-if="success" id="delete-account-message" class="mt-3 rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-800">
          Solicitação registrada. Para concluir ou acompanhar o processo, entre em contato com suporte@codevon.com.
        </p>
        <BeatFitButton type="submit" class="mt-5 w-full">
          Solicitar exclusão
        </BeatFitButton>
      </form>
      <aside class="rounded-lg border border-[#EF1515]/15 bg-red-50 p-6">
        <BeatFitIcon name="info" class="h-8 w-8 text-[#EF1515]" />
        <p class="mt-4 text-sm leading-7 text-neutral-700">
          A solicitação será analisada pela equipe BeatFit. Quando houver retenção, os dados serão mantidos apenas pelo período necessário para cumprir obrigações legais, segurança, prevenção de fraude ou resolução de disputas.
        </p>
      </aside>
    </div>

    <div class="mt-8 grid gap-5 lg:grid-cols-3">
      <section class="rounded-lg border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03]">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-[#EF1515]/20 bg-red-50 text-[#EF1515]">
            <BeatFitIcon name="trash-2" class="h-5 w-5" />
          </div>
          <h2 class="text-base font-black text-[#EF1515]">Como funciona a exclusão</h2>
        </div>
        <ol class="space-y-3 text-sm leading-7 text-neutral-700">
          <li>1. Informe o e-mail cadastrado na sua conta BeatFit.</li>
          <li>2. Clique em “Solicitar exclusão”.</li>
          <li>3. Nossa equipe analisará a solicitação e poderá enviar um e-mail de confirmação para verificar a titularidade da conta.</li>
          <li>4. Após a confirmação, sua conta e os dados associados serão excluídos.</li>
        </ol>
      </section>

      <section class="rounded-lg border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03]">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-[#EF1515]/20 bg-red-50 text-[#EF1515]">
            <BeatFitIcon name="database" class="h-5 w-5" />
          </div>
          <h2 class="text-base font-black text-[#EF1515]">Dados excluídos</h2>
        </div>
        <p class="text-sm leading-7 text-neutral-700">
          A exclusão inclui dados da conta, perfil, preferências, dados de onboarding, dados de treino, progresso, histórico de uso do app e demais dados associados à conta BeatFit.
        </p>
      </section>

      <section class="rounded-lg border border-black/10 bg-white p-6 shadow-sm shadow-black/[0.03]">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-[#EF1515]/20 bg-red-50 text-[#EF1515]">
            <BeatFitIcon name="shield-check" class="h-5 w-5" />
          </div>
          <h2 class="text-base font-black text-[#EF1515]">Dados que podem ser mantidos</h2>
        </div>
        <p class="text-sm leading-7 text-neutral-700">
          Alguns dados poderão ser mantidos quando exigido por lei, segurança, prevenção de fraude, cumprimento de obrigações legais ou resolução de disputas. Quando houver retenção, esses dados poderão ser mantidos por até 180 dias, salvo quando um prazo maior for exigido por lei.
        </p>
      </section>
    </div>
  </BeatFitLegalLayout>
</template>

<script setup lang="ts">
const email = ref('');
const error = ref('');
const success = ref(false);

const submit = () => {
  success.value = false;
  error.value = '';

  if (!email.value) {
    error.value = 'Informe o e-mail cadastrado no BeatFit.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    error.value = 'Informe um e-mail válido.';
    return;
  }

  success.value = true;
};

useSeoMeta({
  title: 'Excluir minha conta — BeatFit',
  description: 'Solicite a exclusão da sua conta BeatFit e dos dados associados.',
  themeColor: '#EF1515',
});
</script>
