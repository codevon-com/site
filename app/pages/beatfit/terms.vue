<template>
  <BeatFitLegalLayout
    title="Termos de Uso"
    intro="Ao usar o BeatFit, você concorda com estes termos simples para uso responsável do app, dos treinos personalizados e dos recursos de IA."
  >
    <BeatFitLegalGrid :sections="sections" />
  </BeatFitLegalLayout>
</template>

<script setup lang="ts">
const sections = [
  {
    title: 'O app não substitui orientação médica',
    body: 'O BeatFit é uma ferramenta de apoio. Consulte um profissional de saúde antes de iniciar treinos, especialmente se tiver condições médicas, dores ou limitações.',
    icon: 'stethoscope',
  },
  {
    title: 'O usuário é responsável por treinar com segurança',
    body: 'Você deve respeitar seus limites, usar equipamentos corretamente, manter atenção ao ambiente e interromper exercícios em caso de dor ou mal-estar.',
    icon: 'shield-alert',
  },
  {
    title: 'Como funciona assinatura e trial',
    body: 'Podemos oferecer planos pagos com período de teste. A cobrança e renovação seguem as regras apresentadas na loja no momento da contratação.',
    icon: 'badge-dollar-sign',
  },
  {
    title: 'Regras de uso da IA',
    body: 'A IA fornece sugestões de treino. Os resultados podem variar e não há garantia de desempenho, saúde, estética ou resultado específico.',
    icon: 'bot',
  },
  {
    title: 'Cancelamento pelo Google Play/App Store',
    body: 'O cancelamento deve ser feito na loja utilizada para assinar. O acesso permanece ativo até o fim do período pago.',
    icon: 'smartphone',
  },
  {
    title: 'Limitação de responsabilidade',
    body: 'Não nos responsabilizamos por lesões, danos ou resultados decorrentes do uso do app, especialmente quando houver uso inadequado ou desrespeito aos limites pessoais.',
    icon: 'scale',
  },
  {
    title: 'Proibição de abuso do app',
    body: 'É proibido usar o app de forma ilegal, fraudulenta, automatizada, ofensiva ou que comprometa a segurança de outros usuários e sistemas.',
    icon: 'ban',
  },
];

useSeoMeta({
  title: 'Termos de Uso — BeatFit',
  description: 'Termos de Uso do BeatFit.',
  themeColor: '#EF1515',
});
</script>
