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
    body: 'Coletamos dados fornecidos pelo usuário, como nome, e-mail, data de nascimento, sexo, peso, altura, objetivo de treino, preferências, dados necessários para conta, assinatura e informações de uso do app.',
    icon: 'database',
  },
  {
    title: 'Uso dos dados',
    body: 'Usamos os dados para personalizar treinos, acompanhar progresso, melhorar sua experiência, enviar comunicações importantes, proteger a segurança do app e tomar decisões de melhoria do produto.',
    icon: 'activity',
  },
  {
    title: 'Analytics de produto',
    wide: true,
    body: [
      'Usamos o PostHog para analytics de produto. Esses dados nos ajudam a entender o uso do app, retenção, onboarding, paywall, treinos, rotinas e oportunidades de melhoria do produto.',
      'Para isso, podemos coletar e-mail da conta, identificadores internos da conta, plataforma, versão do app, tipo de dispositivo, informações técnicas do app/dispositivo e eventos de uso.',
      'Não usamos analytics para publicidade direcionada, venda de dados ou rastreamento entre apps ou sites. Também não enviamos localização, IP, timezone, dados de saúde, peso, medidas corporais, lesões, condições médicas, respostas livres, observações, nomes customizados ou conteúdo digitado.',
      'Session replay, captura automática de toques e enriquecimento por localização ficam desativados. Você pode desativar analytics nas configurações do app.',
    ],
    icon: 'activity',
  },
  {
    title: 'Autenticação e conta',
    body: 'A conta é necessária para salvar seus treinos, progresso e preferências. Você é responsável por manter suas credenciais seguras.',
    icon: 'shield-check',
  },
  {
    title: 'Assinaturas e pagamentos',
    body: 'As assinaturas são processadas pela App Store e pelo Google Play, com apoio de serviços como RevenueCat para status, histórico de assinatura e validação de acesso. Não armazenamos dados completos de pagamento.',
    icon: 'credit-card',
  },
  {
    title: 'IA e geração de treinos',
    body: 'Usamos IA para criar e ajustar treinos com base nas suas informações e desempenho. Os resultados podem variar conforme seus dados e consistência.',
    icon: 'sparkles',
  },
  {
    title: 'Compartilhamento com terceiros',
    body: 'Não vendemos seus dados. Podemos compartilhar informações com fornecedores e serviços essenciais, incluindo PostHog para analytics, Supabase para autenticação e banco de dados, e RevenueCat, App Store e Google Play para assinaturas e pagamentos.',
    icon: 'share-2',
  },
  {
    title: 'Escolhas do usuário',
    body: [
      'Você pode desativar o compartilhamento de dados de uso e analytics nas configurações do app.',
      'A desativação não afeta treinos, assinatura ou acesso à conta.',
      'Eventos enviados antes da desativação podem permanecer armazenados conforme nossa política de retenção.',
    ],
    icon: 'shield-check',
  },
  {
    title: 'Retenção e exclusão de dados',
    body: 'Mantemos dados enquanto sua conta estiver ativa ou conforme necessário por lei, segurança ou prevenção de fraude. Você pode solicitar a exclusão da conta.',
    icon: 'trash-2',
  },
  {
    title: 'Google Play Data Safety',
    body: 'Para fins de declaração de segurança de dados, o app pode tratar e-mail, identificadores internos da conta, interações no app e histórico/status de assinatura quando necessário para conta, analytics, assinaturas e acesso a recursos pagos.',
    icon: 'info',
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
