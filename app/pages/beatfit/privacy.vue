<template>
  <BeatFitLegalLayout
    title="Política de Privacidade"
    intro="Esta política explica, de forma simples, como o BeatFit trata informações usadas para personalizar treinos, acompanhar progresso e manter o app funcionando com segurança."
  >
    <BeatFitLegalGrid :sections="sections" />
  </BeatFitLegalLayout>
</template>

<script setup lang="ts">
const sections = [
  {
    title: 'Dados coletados',
    body: 'Coletamos dados fornecidos pelo usuário, como nome, e-mail, data de nascimento, sexo, peso, altura, objetivo de treino, preferências e informações de uso do app.',
    icon: 'database',
  },
  {
    title: 'Uso dos dados',
    body: 'Usamos os dados para personalizar treinos, acompanhar progresso, melhorar sua experiência, enviar comunicações importantes e proteger a segurança do app.',
    icon: 'activity',
  },
  {
    title: 'Autenticação e conta',
    body: 'A conta é necessária para salvar seus treinos, progresso e preferências. Você é responsável por manter suas credenciais seguras.',
    icon: 'shield-check',
  },
  {
    title: 'Assinaturas e pagamentos',
    body: 'As assinaturas são processadas pelas lojas Google Play e App Store. Não armazenamos dados completos de pagamento.',
    icon: 'credit-card',
  },
  {
    title: 'IA e geração de treinos',
    body: 'Usamos IA para criar e ajustar treinos com base nas suas informações e desempenho. Os resultados podem variar conforme seus dados e consistência.',
    icon: 'sparkles',
  },
  {
    title: 'Compartilhamento com terceiros',
    body: 'Não vendemos seus dados. Podemos compartilhar informações com serviços essenciais para autenticação, infraestrutura, pagamentos, análise e segurança.',
    icon: 'share-2',
  },
  {
    title: 'Retenção e exclusão de dados',
    body: 'Mantemos dados enquanto sua conta estiver ativa ou conforme necessário por lei, segurança ou prevenção de fraude. Você pode solicitar a exclusão da conta.',
    icon: 'trash-2',
  },
  {
    title: 'Contato',
    body: 'Para dúvidas sobre privacidade, entre em contato pelo e-mail suporte@codevon.com.',
    icon: 'mail',
  },
];

useSeoMeta({
  title: 'Política de Privacidade — BeatFit',
  description: 'Política de Privacidade do BeatFit.',
  themeColor: '#EF1515',
});
</script>
