<template>
  <BeatFitLegalLayout
    title="Suporte"
    intro="Entre em contato conosco para dúvidas sobre conta, assinatura, trial, cancelamento ou exclusão de dados."
  >
    <div class="max-w-2xl rounded-lg border border-[#EF1515]/15 bg-white p-8 shadow-sm shadow-black/[0.03]">
      <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 text-[#EF1515]">
        <BeatFitIcon name="mail" class="h-7 w-7" />
      </div>
      <p class="mt-6 text-2xl font-black">suporte@codevon.com</p>
      <p class="mt-3 text-sm leading-7 text-neutral-600">
        Respondemos o mais rápido possível e podemos orientar sobre acesso, cobrança, cancelamento, trial e privacidade.
      </p>
      <BeatFitButton href="mailto:suporte@codevon.com" icon="send" class="mt-6">
        Enviar e-mail
      </BeatFitButton>
    </div>
  </BeatFitLegalLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Suporte — BeatFit',
  description: 'Suporte do BeatFit para conta, assinatura, trial, cancelamento e exclusão de dados.',
  themeColor: '#EF1515',
});
</script>
