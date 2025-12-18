export const projectsPt = {
  smartzap: {
    title: 'SmartZap',
    description:
      'Assistente de WhatsApp com IA que traz o poder dos LLMs para conversas do dia a dia.',
    image: '/portfolio/smartzap.png',
    detailImage: '/portfolio/smartzap.png',
    tags: ['IA', 'Automação', 'WhatsApp Bot', 'SaaS'],
    about: [
      'O SmartZap transforma o WhatsApp em um assistente poderoso ao integrar modelos de linguagem de ponta em uma interface de conversa simples. Em vez de trocar de app, o usuário recebe ajuda no mensageiro que já usa diariamente.',
      'A plataforma usa a API Gemini do Google para oferecer recursos como geração de imagens, busca de dados e ajuda na escrita.'
    ],
    features: [
      'Assistente de IA direto no WhatsApp',
      'Geração de imagens, busca de dados e auxílio na escrita'
    ],
    technologies: ['Python', 'WhatsApp API', 'Gemini API', 'AWS RDS', 'PostgreSQL', 'Stripe', 'Hetzner'],
    results: [
      { value: '10k+', label: 'Mensagens processadas' },
      { value: '500+', label: 'Usuários' },
      { value: '99.9%', label: 'Disponibilidade' }
    ]
  },
  'fintz-bot': {
    title: 'Fintz Bot',
    description:
      'Bot conversacional no WhatsApp que ajuda a registrar e entender despesas do dia a dia sem esforço.',
    image: '/portfolio/fintzbot.png',
    detailImage: '/portfolio/fintzbot.png',
    tags: ['Chatbot', 'Automação'],
    about: [
      'O Fintz Bot é um assistente no WhatsApp para simplificar o controle financeiro pessoal. Com linguagem natural, o usuário registra gastos em segundos, sem abrir app ou navegar em menus.',
      'Focado em acessibilidade e praticidade, o bot armazena lançamentos, organiza por data e categoria e permite pedir resumos por período. Deixa o controle financeiro mais intuitivo.'
    ],
    features: [
      'Registro de despesas em linguagem natural via WhatsApp',
      'Parsing automático de descrições de compras, valores e datas'
    ],
    technologies: ['Python', 'OpenAI API', 'WhatsApp API', 'PostgreSQL'],
    results: [
      { value: '95%', label: 'Precisão no parsing de mensagens' },
      { value: '3s', label: 'Tempo médio de resposta' }
    ]
  },
  'take-pics': {
    title: 'TakePics.AI',
    description:
      'Plataforma que gera fotos hiper-realistas suas e de amigos usando modelos treinados sob medida.',
    image: '/portfolio/takepics.webp',
    detailImage: '/portfolio/takepics.webp',
    tags: ['IA', 'Geração de Imagem', 'App de consumo'],
    about: [
      'O TakePics.AI permite enviar fotos para criar um modelo virtual personalizado. Com esse modelo, gera imagens ultra-realistas em centenas de cenários, looks e estilos.',
      'Usa o modelo Flux na Replicate para resultados consistentes e realistas. Seja para novas fotos de perfil ou variações criativas, o fluxo é rápido e intuitivo.',
      'Pensado para performance e escala, armazena uploads e fotos geradas com segurança no Supabase. Também inclui analytics, pagamentos e uma UX enxuta pensada para um público global.'
    ],
    features: [
      'Envie fotos e crie seu próprio modelo de IA',
      'Gere imagens hiper-realistas em vários estilos',
      'Geração rápida com Flux na Replicate',
      'Armazenamento seguro e contas de usuário',
      'Analytics em tempo real',
      'Interface mobile-friendly focada em conversão'
    ],
    technologies: ['Nuxt', 'Supabase', 'Replicate API', 'Flux Model', 'Stripe', 'PostHog'],
    results: [
      { value: '1k+', label: 'Imagens geradas' },
      { value: '98%', label: 'Satisfação com acurácia do modelo' }
    ]
  },
  'rma-express': {
    title: 'Gerador Automático de RMA (Monthly Operating Reports)',
    description: 'Sistema que gera relatórios operacionais mensais (MOR/RMA) a partir do balancete da empresa.',
    image: '/portfolio/rmaexpress.png',
    detailImage: '/portfolio/rmaexpress.png',
    tags: ['Automação de Dados', 'Análise Financeira', 'LegalTech'],
    about: [
      'Transforma o balancete em um relatório operacional completo usado em recuperação judicial. O relatório é revisado pelo juiz para acompanhar saúde financeira e operacional.',
      'Usa lógica determinística e regras financeiras estruturadas para produzir um PPT padronizado e consistente, eliminando trabalho manual e reduzindo erros.'
    ],
    features: [
      'Extração e processamento automáticos do balancete',
      'Lógica determinística para interpretar indicadores',
      'Relatórios RMA em PowerPoint gerados automaticamente',
      'Redução de erros com transformações baseadas em regras',
      'Apoio à conformidade legal em casos de recuperação judicial'
    ],
    technologies: ['Python', 'Pandas', 'NumPy'],
    results: [
      { value: '90%', label: 'Redução de tempo manual' },
      { value: '100%', label: 'Consistência nos relatórios' }
    ]
  },
  deepdive: {
    title: 'DeepDive',
    description:
      'Aplicação de IA para extrair informações específicas de PDFs e gerar relatórios completos.',
    image: '/portfolio/deepdive.png',
    detailImage: '/portfolio/deepdive.png',
    tags: ['IA', 'Análise de Documentos', 'Processamento de PDF', 'Extração de Dados'],
    about: [
      'O DeepDive é uma aplicação de análise inteligente de documentos criada para lidar com PDFs enormes que seriam impraticáveis de revisar manualmente.',
      'Em vez de gastar horas procurando páginas específicas, o usuário consegue extrair informações, gerar resumos e obter análises úteis sob demanda.',
      'Construído com parsing robusto e modelos de linguagem de ponta, mantém contexto e precisão em documentos longos, gerando relatórios estruturados com o que é mais relevante para a tomada de decisão.'
    ],
    features: [
      'Processa PDFs com milhares de páginas',
      'Extração por consultas com IA',
      'Geração de relatórios e resumos',
      'Análise contextual em documentos longos',
      'Extração estruturada e exportável'
    ],
    technologies: ['Python', 'OpenRouter API', 'Bibliotecas de PDF', 'Parsing de Documentos'],
    results: [
      { value: '1000+', label: 'Páginas por documento' },
      { value: '95%', label: 'Acurácia de extração' },
      { value: '10x', label: 'Mais rápido que revisão manual' },
      { value: '50+', label: 'Documentos analisados' }
    ]
  },
  'meu-novo-cabelo': {
    title: 'Meu Novo Cabelo',
    description:
      'Plataforma com IA que transforma seu visual em 30 segundos, testando 50+ estilos e cores a partir de uma foto.',
    image: '/portfolio/meunovocabelo.gif',
    detailImage: '/portfolio/meunovocabelo.gif',
    tags: ['IA', 'Geração de Imagem', 'Beauty Tech', 'App de consumo'],
    about: [
      'O Meu Novo Cabelo permite enviar uma foto e testar 50+ cortes e cores em 30 segundos.',
      'Usa processamento de imagem avançado para aplicar estilos de forma realista, ajudando a decidir antes de ir ao salão.',
      'Experiência rápida, intuitiva e acessível, com IA generativa e visão computacional de ponta.'
    ],
    features: [
      'Envie uma foto e transforme o visual em 30 segundos',
      '50+ estilos e variações de cor',
      'Transformações realistas com IA',
      'Visualização instantânea antes de mudar',
      'Interface amigável e mobile'
    ],
    technologies: ['Replicate', 'Flux', 'Nuxt', 'Supabase', 'Hetzner'],
    results: [
      { value: '50+', label: 'Estilos disponíveis' },
      { value: '30s', label: 'Tempo médio de geração' }
    ]
  },
  eletrificado: {
    title: 'Eletrificado',
    description:
      'Plataforma de notícias sobre veículos elétricos que captura, melhora e traduz conteúdo via IA, entregando as últimas atualizações.',
    image: '/portfolio/eletrificado.png',
    detailImage: '/portfolio/eletrificado.png',
    tags: ['Plataforma de Notícias', 'Veículos Elétricos', 'IA', 'Agregação de Conteúdo'],
    about: [
      'Plataforma focada em veículos elétricos, capturando notícias de várias fontes e usando IA para melhorar, traduzir e adaptar ao público em português.',
      'Conteúdo aprimorado em legibilidade e consistência, mantendo fluxo contínuo de notícias sem retrabalho manual.',
      'Interface limpa e moderna para acompanhar o setor de elétricos.'
    ],
    features: [
      'Coleta de notícias com IA',
      'Melhoria e tradução automática do conteúdo',
      'Últimas notícias sobre veículos elétricos',
      'Interface moderna e limpa'
    ],
    technologies: ['Nuxt', 'OpenAI API', 'Web Scraping', 'Vercel', 'Stripe'],
    results: [
      { value: '100+', label: 'Matérias publicadas' },
      { value: '24/7', label: 'Atualizações' }
    ]
  },
  roomremake: {
    title: 'RoomRemake',
    description:
      'Redesign de interiores com IA: gera variações de design a partir de uma única foto.',
    image: '/portfolio/roomremake.png',
    detailImage: '/portfolio/roomremake.png',
    tags: ['IA', 'Design de Interiores', 'Geração de Imagem', 'App de consumo'],
    about: [
      'Permite visualizar transformações de ambientes instantaneamente. O usuário envia uma foto e recebe variações com estilos, layouts e cores diferentes.',
      'Interface intuitiva para comparar original vs. redesign lado a lado, tornando design profissional mais acessível.'
    ],
    features: [
      'Envie a foto do ambiente e receba redesigns instantâneos gerados por IA',
      'Várias variações e estilos',
      'Comparação lado a lado',
      'Interface fácil de usar',
      'Teste grátis para novos usuários'
    ],
    technologies: ['Replicate', 'Flux', 'Nuxt', 'Supabase', 'Hetzner'],
    results: [
      { value: '15+', label: 'Estilos disponíveis' },
      { value: '30s', label: 'Tempo médio de geração' }
    ]
  }
} as const;

