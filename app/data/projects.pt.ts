export const projectsPt = {
  smartzap: {
    title: 'SmartZap',
    cardTitle: 'Assistente de IA no WhatsApp com SmartZap',
    description:
      'Assistente de WhatsApp com IA que traz o poder dos LLMs para conversas do dia a dia.',
    image: '/portfolio/smartzap.jpeg',
    detailImage: '/portfolio/smartzap.jpeg',
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
    cardTitle: 'Controle de Gastos no WhatsApp com o Fintz Bot',
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
    cardTitle: 'Automação de RMAs em Escala',
    description: 'Sistema que gera relatórios operacionais mensais (MOR/RMA) a partir do balancete da empresa.',
    image: '/portfolio/rmaexpress.webp',
    detailImage: '/portfolio/rmaexpress.webp',
    imageFit: 'contain',
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
    cardTitle: 'Extraindo Insights de PDFs Massivos com IA',
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
    cardTitle: 'Transformação de Visual em 30 Segundos com IA',
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
    cardTitle: 'Agregação de Notícias sobre Carros Elétricos com IA',
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
    title: 'RoomRemake - Redesign de Interiores com IA',
    cardTitle: 'Redesign de Interiores com IA em Um Clique',
    description:
      'Plataforma SaaS que redesenha ambientes internos em segundos com transformação de estilo via IA.',
    image: '/portfolio/roomremake_image.webp',
    detailImage: '/portfolio/roomremake_image.webp',
    tags: ['PropTech', 'IA Generativa', 'SaaS'],
    about: [
      'RoomRemake permite enviar uma foto do ambiente, escolher um estilo e receber um redesign em segundos.',
      'A plataforma oferece estilos como Moderno, Minimalista, Rústico, Vintage, Tropical, Industrial, Escandinavo e Luxo, acelerando a exploração visual para clientes e arquitetos.',
      'O que antes exigia horas de tentativas manuais virou um fluxo simples para comparar direções visuais e decidir mais rápido.'
    ],
    features: [
      'Upload de fotos e geração de redesigns em menos de 30 segundos',
      'Múltiplos estilos de interiores no mesmo fluxo',
      'Sugestões de mobiliário e decoração com IA',
      'Download de imagens geradas em alta qualidade',
      'Planos flexíveis para uso pessoal e comercial'
    ],
    technologies: ['IA Generativa', 'Processamento de Imagens', 'Plataforma Web', 'Billing por Assinatura'],
    results: [
      { value: '<30s', label: 'Tempo típico de geração' },
      { value: '8+', label: 'Estilos disponíveis' },
      { value: '3', label: 'Planos (Basic, Decor, Architect)' },
      { value: '1 clique', label: 'Fluxo de redesign' }
    ]
  },
  credeal: {
    title: 'Credeal - Consultoria de Automação Operacional',
    cardTitle: 'Roadmap de Automação para uma Líder de Notebooks na América Latina',
    description:
      'Consultoria focada em oportunidades de automação em RH, comercial, financeiro e BI nas operações da Credeal.',
    image: '/portfolio/credeal.webp',
    detailImage: '/portfolio/credeal.webp',
    imageFit: 'contain',
    tags: ['Consultoria', 'Automação', 'Integração ERP', 'Operações'],
    about: [
      'Trabalhamos com a Credeal, uma das principais fabricantes de notebooks da América Latina, para mapear oportunidades de automação entre diferentes áreas e reduzir gargalos operacionais manuais.',
      'Um dos principais gargalos identificados estava no RH. Como o turnover tende a ser alto na indústria, a triagem de candidatos, o armazenamento das fichas e a digitação manual das informações em sistemas internos e fluxos governamentais, como o eSocial, consumiam muito tempo.',
      'Para esse fluxo de RH, propusemos um processo com IA para digitalizar fichas, extrair dados estruturados de documentos e preencher automaticamente formulários internos e externos.',
      'Um segundo subprojeto foi focado na verificação de cotações. Desenhamos uma nova camada de regras e verificações automáticas para tratar casos mais simples, reduzir análise manual e acelerar aprovações e negativas no fluxo comercial.',
      'Esse fluxo de cotações saiu de um prazo de dias para cerca de uma hora no caminho melhorado, o que também elevou a conversão ao tornar a resposta muito mais rápida.'
    ],
    features: [
      'Revisão cross-funcional de fluxos operacionais e sistemas',
      'Digitalização de fichas e extração de dados com IA',
      'Preenchimento automático de sistemas internos e formulários governamentais como eSocial',
      'Mapeamento de oportunidades de automação em RH, ERP, BI, suporte, financeiro e comercial',
      'Verificação de cotações com regras automáticas e triagem de casos simples',
      'Aprovações, negativas e escalonamento mais rápidos no fluxo comercial',
      'Avaliação das capacidades nativas dos fornecedores antes de recomendar desenvolvimento customizado',
      'Roadmap priorizado com quick wins e iniciativas de maior impacto',
      'Estratégia de integração envolvendo sistemas como CIGAM, Senior, Octadesk, Serasa e BI interno'
    ],
    technologies: ['CIGAM', 'Senior', 'Octadesk', 'API Serasa', 'Sistemas de BI', 'Automação de Processos'],
    results: [
      { value: '~1h', label: 'Prazo de verificação de cotações no fluxo melhorado' },
      { value: 'Maior', label: 'Conversão com resposta mais rápida' },
      { value: 'Muito mais rápido', label: 'Processo de triagem e preenchimento no RH' },
      { value: 'Multiárea', label: 'Roadmap operacional entregue' }
    ]
  },
  manfing: {
    title: 'Manfing - Infraestrutura de Dados para Modelos Preditivos',
    cardTitle: 'Alimentando Previsões da Manfing com Dados Futuros da B3',
    description:
      'Integrações de dados e consultoria de arquitetura para modelos de IA que ajudam empresas a prever demanda, otimizar estoques e melhorar planejamento produtivo.',
    image: '/portfolio/manfing_logo.png',
    detailImage: '/portfolio/manfing_logo.png',
    imageFit: 'contain',
    tags: ['IA', 'Infraestrutura de Dados', 'Market Data', 'Forecasting'],
    about: [
      'A Manfing usa IA para ajudar clientes a otimizar vendas, produção e logística com análises preditivas. Um dos casos práticos é o planejamento de demanda no varejo de moda, como decidir melhor níveis de estoque por tamanho, cor e mix de produto.',
      'Para um de seus modelos preditivos, a empresa precisava de dados históricos confiáveis de futuros agrícolas e câmbio. Entramos como parceiros para desenvolver uma série de integrações, principalmente com a B3, voltadas à ingestão de históricos de soja, milho e dólar futuro.',
      'Além das integrações em si, também orientamos sobre a melhor forma de armazenar e acessar esse volume maior de dados de séries temporais, garantindo uma base eficiente, confiável e pronta para escalar o pipeline de previsão.'
    ],
    features: [
      'Integrações históricas de market data com foco em contratos futuros',
      'Conectividade com a B3 para históricos de soja, milho e dólar futuro',
      'Fluxos de ingestão preparados para uso em modelos preditivos',
      'Consultoria sobre armazenamento e acesso de grandes volumes de dados históricos',
      'Base de suporte para previsões de vendas, estoque, produção e logística com IA'
    ],
    technologies: ['Integrações B3', 'Séries Temporais', 'Data Pipelines', 'Infraestrutura para IA Preditiva'],
    results: [
      { value: 'Mais rica', label: 'Base externa de dados para os modelos' },
      { value: 'Melhor', label: 'Suporte às previsões de demanda e estoque' },
      { value: 'Escalável', label: 'Arquitetura de armazenamento e acesso' },
      { value: 'Mais forte', label: 'Fundação para decisões operacionais com IA' }
    ]
  },
  rightticker: {
    title: 'Etiqueta Certa - Consultoria Técnica para Crescimento',
    cardTitle: 'Guiando a Etiqueta Certa na Próxima Etapa de Escala',
    description:
      'Consultoria técnica e de produto para uma plataforma SaaS em rápido crescimento que automatiza a criação de etiquetas em conformidade para mercados globais.',
    image: '/portfolio/etiquetacerta.png',
    detailImage: '/portfolio/etiquetacerta.png',
    imageFit: 'contain',
    tags: ['Consultoria', 'SaaS', 'Arquitetura', 'Liderança Técnica'],
    about: [
      'Trabalhamos com a Etiqueta Certa para avaliar produto, arquitetura, capacidade de entrega e prioridades de escala em uma empresa SaaS de alto crescimento focada em conformidade regulatória de etiquetas.',
      'A plataforma cria etiquetas automaticamente para diferentes tipos de produtos, em conformidade com regulamentações e normas como INMETRO, ABNT, padrões internacionais e manuais de etiquetagem de varejistas de moda, calçados e acessórios para casa.',
      'A empresa já havia conquistado tração comercial relevante e atendia marcas importantes, então a necessidade principal não era validar produto, mas fortalecer a base técnica para sustentar a próxima etapa de crescimento.',
      'Nosso trabalho analisou a plataforma atual, a transição do produto legado para a nova arquitetura, a maturidade operacional, as escolhas de infraestrutura e os riscos de execução de um roadmap ambicioso que incluía internacionalização, suporte com IA e novas camadas de inteligência de produto.'
    ],
    features: [
      'Diagnóstico técnico de arquitetura, infraestrutura e capacidade de entrega',
      'Revisão do escopo regulatório do produto para conformidade nacional e internacional',
      'Revisão da estratégia de transição entre versões legadas e a nova plataforma',
      'Direcionamento sobre maturidade operacional, observabilidade, analytics e suporte',
      'Recomendações para sequenciamento de roadmap, prontidão para internacionalização e estratégia de IA',
      'Apoio consultivo para fortalecer liderança técnica, governança e clareza de execução na fase de escala'
    ],
    technologies: ['C#/.NET', 'React', 'TypeScript', 'MySQL', 'AWS', 'Azure'],
    results: [
      { value: '200+', label: 'Fornecedores usando a plataforma em conformidade' },
      { value: '1.100+', label: 'Marcas vendendo com a etiqueta correta' },
      { value: '400k+', label: 'Modelos de etiquetas desenvolvidos na plataforma' },
      { value: 'Mais claro', label: 'Roadmap de escala e prioridades técnicas' }
    ]
  },
  sicredi: {
    title: 'Sicredi - Plataforma de Relatórios de Investimentos',
    cardTitle: 'Acelerando os Relatórios de Investimentos do Sicredi',
    description:
      'Plataforma web que gera relatórios de desempenho de investimentos para 130.000 cooperados com um clique.',
    image: '/portfolio/sicredi_image.webp',
    detailImage: '/portfolio/sicredi_image.webp',
    tags: ['Fintech', 'Automação de Dados', 'Reporting'],
    about: [
      'O Sicredi precisava entregar relatórios mensais de desempenho em escala, mas o processo manual era lento e inconsistente em formatação e qualidade.',
      'Integramos fontes internas e externas em uma plataforma robusta, capaz de gerar relatórios parametrizáveis com dados e gráficos em um clique.',
      'O novo processo elevou confiabilidade, padronização e apresentação visual, apoiando melhores decisões para equipes internas e clientes.'
    ],
    features: [
      'Geração de relatórios parametrizáveis com um clique',
      'Integração de fontes de dados internas e externas',
      'Templates padronizados com melhor apresentação',
      'Validação automática para maior confiabilidade',
      'Processamento escalável para base massiva de cooperados'
    ],
    technologies: ['Plataforma Web', 'Data Pipelines', 'Data Visualization', 'ETL Automation'],
    results: [
      { value: '15x', label: 'Mais rápido na geração de relatórios' },
      { value: '130k', label: 'Cooperados atendidos' },
      { value: 'Maior', label: 'Consistência e confiabilidade' },
      { value: 'Melhor', label: 'Suporte à decisão para times e clientes' }
    ]
  },
  catalunya: {
    title: 'Catalunya - Análise Jurídica com IA',
    cardTitle: 'Análise Jurídica de Processos Complexos com IA',
    description:
      'Pipeline com agentes de IA para analisar processos jurídicos massivos com mais velocidade, profundidade e consistência.',
    image: '/portfolio/catalunya_logo.webp',
    detailImage: '/portfolio/catalunya_logo.webp',
    tags: ['LegalTech', 'Agentes de IA', 'Automação de Processos'],
    about: [
      'A Catalunya lida com processos com mais de 5.000 páginas cada e múltiplos documentos correlatos. A análise manual era lenta, incompleta e sujeita a erros.',
      'Desenvolvemos um pipeline automatizado com agentes especializados para transcrever, analisar, revisar e resumir informações-chave em relatórios completos.',
      'A solução trouxe grande ganho de produtividade e qualidade, além de abrir uma nova fonte de receita relevante para o grupo.'
    ],
    features: [
      'Pipeline multiagente para fluxos jurídicos complexos',
      'Transcrição, curadoria, revisão e sumarização automáticas',
      'Saída estruturada com relatórios completos e consistentes',
      'Suporte a processos extensos e correlacionados',
      'Escalabilidade para expansão da operação'
    ],
    technologies: ['Agentes de IA', 'Orquestração de LLMs', 'Processamento de Documentos', 'Automação de Workflow'],
    results: [
      { value: '200x', label: 'Mais rápido na análise' },
      { value: 'Maior', label: 'Precisão e profundidade analítica' },
      { value: 'Mais', label: 'Assertividade na tomada de decisão' },
      { value: 'Nova', label: 'Fonte de receita relevante' }
    ]
  },
  'holder-plus': {
    title: 'Holder+ - Infraestrutura de Dados Financeiros',
    cardTitle: 'Powering Holder+ com Data Pipelines Financeiros',
    description:
      'Pipelines e integrações de dados que alimentam a Holder+ com dados de mercado e fundamentos para milhares de usuários.',
    image: '/portfolio/holderplus.webp',
    detailImage: '/portfolio/holderplus.webp',
    imageFit: 'contain',
    tags: ['Fintech', 'Data Pipelines', 'Integrações', 'WealthTech'],
    about: [
      'A Holder+ é uma plataforma de gestão e acompanhamento patrimonial com foco em planejamento financeiro e visão consolidada.',
      'Construímos a infraestrutura de dados da plataforma, integrando grandes provedores financeiros no Brasil para preços históricos de ações e fundos e dados fundamentalistas.',
      'Com isso, a plataforma ganha consistência, atualização e confiabilidade para operar em escala com milhares de usuários.'
    ],
    features: [
      'Pipelines robustos de ingestão, normalização e validação',
      'Integrações com grandes fontes de dados financeiros no Brasil',
      'Cobertura de histórico de preços de ações e fundos',
      'Processamento de fundamentos para análises mais ricas',
      'Camada confiável de entrega para suportar escala'
    ],
    technologies: ['Data Pipelines', 'ETL/ELT', 'Integrações de API', 'Monitoramento de Qualidade de Dados'],
    results: [
      { value: '1000s', label: 'Usuários suportados na plataforma' },
      { value: 'Principais', label: 'Fontes financeiras brasileiras integradas' },
      { value: 'Confiável', label: 'Entrega de dados de preços e fundamentos' },
      { value: 'Escalável', label: 'Infraestrutura para crescimento contínuo' }
    ]
  },
  aawz: {
    title: 'AAWZ - Infraestrutura de Dados para o AAWZ Hub',
    cardTitle: 'Powering AAWZ Hub para Assessores de Investimentos',
    description:
      'Pipelines de dados de títulos públicos em tempo real, EOD e histórico, com fonte oficial do governo, para alimentar o AAWZ Hub.',
    image: '/portfolio/aawz_logo.webp',
    detailImage: '/portfolio/aawz_logo.webp',
    tags: ['Fintech', 'Infraestrutura de Dados', 'Market Data', 'WealthTech'],
    about: [
      'A AAWZ opera um ecossistema B2B para wealths, consultorias e assessorias. O AAWZ Hub consolida carteiras de clientes em um único lugar.',
      'Construímos e mantemos os pipelines de dados de títulos públicos direto das fontes oficiais do governo, com preços em tempo real, EOD, histórico completo, taxas de juros e benchmarks.',
      'Com essa camada gerenciada, a AAWZ elimina preocupações com disponibilidade de fonte, manutenção de conectores e confiabilidade de ingestão. Somos parceiros da operação há mais de 4 anos.'
    ],
    features: [
      'Integração direta com fontes oficiais de dados de títulos públicos',
      'Cobertura de preços em tempo real, EOD e histórico',
      'Ingestão de taxas de juros e benchmarks',
      'Camada de normalização e confiabilidade para serviços downstream',
      'Operação gerenciada para reduzir esforço interno de manutenção'
    ],
    technologies: ['Data Pipelines', 'Integrações de API', 'ETL/ELT', 'Monitoramento de Qualidade de Dados'],
    results: [
      { value: '4+ anos', label: 'Parceria contínua' },
      { value: 'Real-time + EOD', label: 'Cobertura de preços' },
      { value: 'Histórico', label: 'Séries longas para análise' },
      { value: 'Menor', label: 'Carga operacional para o time interno' }
    ]
  }
} as const;
