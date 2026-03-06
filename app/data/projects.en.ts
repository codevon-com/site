export const projectsEn = {
  smartzap: {
    title: 'SmartZap',
    cardTitle: 'AI Assistant Inside WhatsApp with SmartZap',
    description:
      'An AI-powered WhatsApp assistant that brings the intelligence of modern LLMs directly into everyday conversations.',
    image: '/portfolio/smartzap.jpeg',
    detailImage: '/portfolio/smartzap.jpeg',
    tags: ['AI', 'Automation', 'WhatsApp Bot', 'SaaS'],
    about: [
      'SmartZap turns WhatsApp into a powerful AI assistant by integrating state-of-the-art language models into a simple conversational interface. Instead of switching apps, users can get help directly in the messaging platform they use daily.',
      'The platform uses the Gemini API from Google to power the AI assistant, providing a wide range of capabilities including image generation, data lookup, and writing assistance.'
    ],
    features: [
      'Advanced AI assistant available directly in WhatsApp',
      'Image generation, data lookup, and writing assistance'
    ],
    technologies: ['Python', 'WhatsApp API', 'Gemini API', 'AWS RDS', 'PostgreSQL', 'Stripe', 'Hetzner'],
    results: [
      { value: '10k+', label: 'Messages processed' },
      { value: '500+', label: 'Total users' },
      { value: '99.9%', label: 'Uptime' }
    ]
  },
  'fintz-bot': {
    title: 'Fintz Bot',
    cardTitle: 'Expense Tracking via WhatsApp with Fintz Bot',
    description:
      'A smart conversational WhatsApp bot that helps users effortlessly track, organize, and understand their daily expenses.',
    image: '/portfolio/fintzbot.png',
    detailImage: '/portfolio/fintzbot.png',
    tags: ['Chatbot', 'Automation'],
    about: [
      'Fintz Bot is an intelligent WhatsApp-based assistant built to simplify personal finance tracking. By leveraging a natural conversational interface, users can register expenses in just a few seconds, without needing to open an app or navigate complex menus.',
      'Designed with accessibility and practicality in mind, the bot stores financial entries, organizes them by date and category, and allows users to request summaries for specific time periods. It aims to make financial control more intuitive and frictionless for everyday users.'
    ],
    features: ['Natural-language expense registration via WhatsApp', 'Automatic parsing of purchase descriptions, values, and dates'],
    technologies: ['Python', 'OpenAI API', 'WhatsApp API', 'PostgreSQL'],
    results: [
      { value: '95%', label: 'Message parsing accuracy' },
      { value: '3s', label: 'Average response time' }
    ]
  },
  'fintz-api': {
    title: 'Fintz - Financial Market Data API',
    cardTitle: 'Building the Fintz API for Financial Platforms at Scale',
    description:
      'A financial market data API product covering stocks, FIIs, treasury, funds, and more, built to power apps, platforms, BI workflows, and operational systems.',
    image: '/portfolio/fintzbot.png',
    detailImage: '/portfolio/fintzbot.png',
    imageFit: 'contain',
    tags: ['Fintech', 'API', 'Market Data', 'SaaS'],
    about: [
      'We built Fintz as a financial data API product designed to give companies and developers a single connection point for Brazilian market data.',
      'The platform covered data across Bolsa B3, funds, treasury, indices, rates, logos, and related utility datasets, with historical coverage built for production use cases such as apps, internal platforms, backtesting, Power BI, and operational tooling.',
      'The product was able to win large clients in Brazil, including firms such as Varos and DicaDeHoje, and also grew to more than 500 paying API subscribers.'
    ],
    features: [
      'APIs for stocks, FIIs, ETFs, BDRs, treasury, indices, rates, and funds',
      'Historical end-of-day pricing and adjusted price series',
      'Corporate actions, dividends, interest on equity, splits, and bonuses',
      'Fundamental indicators and financial statement line history',
      'Treasury pricing and yield data, including current and historical curves',
      'Asset logos and icons for product and dashboard integration',
      'Backtest-ready datasets with bias controls for more reliable analysis'
    ],
    technologies: ['REST API', 'JSON', 'B3 Data', 'Fund Data', 'Treasury Data', 'Backtest Infrastructure'],
    results: [
      { value: '500+', label: 'Paying API customers' },
      { value: 'Enterprise', label: 'Clients such as Varos and DicaDeHoje' },
      { value: '20k+', label: 'Funds covered in the platform' },
      { value: 'Single', label: 'Connection point for multiple market datasets' }
    ]
  },
  'take-pics': {
    title: 'TakePics.AI',
    description:
      'A platform that generates hyper-realistic AI photos of you and your friends using custom-trained models.',
    image: '/portfolio/takepics.webp',
    detailImage: '/portfolio/takepics.webp',
    tags: ['AI', 'Image Generation', 'Consumer App'],
    about: [
      'TakePics.AI is a full AI-driven photo creation platform where users upload their own images to generate a personalized virtual model. With this custom model, users can create ultra-realistic photos of themselves in hundreds of different scenarios, outfits, and styles.',
      'The platform uses the Flux model on Replicate to deliver extremely lifelike and consistent results. Whether users want new profile pictures, artistic portraits, creative themes, or just fun variations, TakePics.AI makes the process fast and intuitive.',
      'Built with performance and scalability in mind, the system stores all user uploads and generated photos securely using Supabase. It also includes analytics, payments, and a streamlined UX designed for a global audience.'
    ],
    features: [
      'Upload photos to generate your own custom AI model',
      'Create hyper-realistic images in multiple styles',
      'Fast generation powered by Flux on Replicate',
      'Secure photo storage and user accounts',
      'Real-time analytics and usage tracking',
      'Mobile-friendly interface designed for high conversion'
    ],
    technologies: ['Nuxt', 'Supabase', 'Replicate API', 'Flux Model', 'Stripe', 'PostHog'],
    results: [
      { value: '1k+', label: 'Images generated' },
      { value: '98%', label: 'Model accuracy satisfaction' }
    ]
  },
  'rma-express': {
    title: 'Automatic MORs (Monthly Operating Reports) Generator',
    cardTitle: 'Automating Monthly Operating Reports at Scale',
    description: "A system that automatically generates Monthly Operating Reports (MOR) from a company’s balance sheet.",
    image: '/portfolio/rmaexpress.webp',
    detailImage: '/portfolio/rmaexpress.webp',
    imageFit: 'contain',
    tags: ['Data Automation', 'Financial Analysis', 'LegalTech'],
    about: [
      'The Automatic MOR Generator is a specialized system designed to transform a company’s trial balance into a complete Monthly Operating Report (MOR) used in judicial recovery cases. The MOR is reviewed by a judge to monitor the financial health and operational status of the company.',
      'The tool uses deterministic logic and structured financial rules to interpret accounting data and produce a fully formatted, standardized, and consistent PowerPoint report. This eliminates manual work, reduces errors, and greatly speeds up document preparation.'
    ],
    features: [
      'Automatic extraction and processing of trial balance data',
      'Deterministic logic for interpreting financial indicators',
      'Fully generated PowerPoint RMA reports',
      'Error reduction through rule-based transformations',
      'Support for legal compliance in judicial recovery cases'
    ],
    technologies: ['Python', 'Pandas', 'NumPy'],
    results: [
      { value: '90%', label: 'Reduction in manual reporting time' },
      { value: '100%', label: 'Consistency across financial reports' }
    ]
  },
  deepdive: {
    title: 'DeepDive',
    cardTitle: 'Extracting Insights from Massive PDFs with AI',
    description:
      'An AI-powered application that extracts specific information from PDF documents and generates comprehensive reports.',
    image: '/portfolio/deepdive.png',
    detailImage: '/portfolio/deepdive.png',
    tags: ['AI', 'Document Analysis', 'PDF Processing', 'Data Extraction'],
    about: [
      'Deepdive is an intelligent document analysis application designed to handle massive PDF documents that would be impractical to review manually. Using advanced AI and natural language processing, the system can process PDFs with thousands of pages and extract specific information, generate summaries, and create detailed reports based on user queries.',
      'Instead of spending hours searching through pages, users can get useful insights and comprehensive analysis.',
      'Built with robust document parsing capabilities and state-of-the-art language models, DeepDive can understand context, maintain accuracy across long documents, and generate structured reports that highlight the most relevant information for decision-making.'
    ],
    features: [
      'Process PDFs with thousands of pages efficiently',
      'AI-powered extraction of specific information based on queries',
      'Automatic generation of comprehensive reports and summaries',
      'Context-aware analysis that maintains accuracy across long documents',
      'Structured data extraction and export capabilities'
    ],
    technologies: ['Python', 'OpenRouter API', 'PDF Processing Libraries', 'Document Parsing'],
    results: [
      { value: '1000+', label: 'Pages processed per document' },
      { value: '95%', label: 'Information extraction accuracy' },
      { value: '10x', label: 'Faster than manual review' },
      { value: '50+', label: 'Documents analyzed' }
    ]
  },
  'meu-novo-cabelo': {
    title: 'Meu Novo Cabelo',
    cardTitle: 'Virtual Hair Makeovers in 30 Seconds with AI',
    description:
      'An AI-powered platform that transforms your look in 30 seconds by letting you try over 50 hair styles and colors from a single photo.',
    image: '/portfolio/meunovocabelo.gif',
    detailImage: '/portfolio/meunovocabelo.gif',
    tags: ['AI', 'Image Generation', 'Beauty Tech', 'Consumer App'],
    about: [
      'Meu Novo Cabelo (My New Hair) is an innovative AI-powered beauty platform that revolutionizes how people experiment with their appearance. Users simply upload a photo and can instantly visualize themselves with over 50 different hair styles, cuts, and color variations in just 30 seconds.',
      'The platform uses advanced AI image processing to seamlessly apply different hairstyles and hair colors to user photos, creating realistic transformations that help users make confident decisions about their new look before visiting a salon.',
      'Built with cutting-edge computer vision and generative AI technology, Meu Novo Cabelo provides an intuitive, fast, and accessible way for users to explore their style options, making beauty transformations more accessible and less intimidating.'
    ],
    features: [
      'Upload a photo and transform your look in 30 seconds',
      'Choose from over 50 hair styles and color variations',
      'Realistic AI-powered hair transformations',
      'Instant visualization before making changes',
      'User-friendly interface designed for accessibility',
      'Mobile-optimized experience for on-the-go styling'
    ],
    technologies: ['Replicate', 'Flux', 'Nuxt', 'Supabase', 'Hetzner'],
    results: [
      { value: '50+', label: 'Hair styles available' },
      { value: '30s', label: 'Average transformation time' }
    ]
  },
  eletrificado: {
    title: 'Eletrificado',
    cardTitle: 'AI-Powered Electric Vehicle News Aggregation',
    description:
      'A news platform dedicated to electric vehicles that captures news from multiple sources, improves and translates them using AI, providing the latest updates about the electric car world.',
    image: '/portfolio/eletrificado.png',
    detailImage: '/portfolio/eletrificado.png',
    tags: ['News Platform', 'Electric Vehicles', 'AI', 'Content Aggregation'],
    about: [
      'Eletrificado is a specialized news platform focused exclusively on electric vehicles and the electric car industry. The platform automatically captures news articles from various sources across the web, then uses AI to improve, translate, and adapt the content for Portuguese-speaking audiences.',
      'Using advanced AI and natural language processing, the system enhances the captured articles by improving readability, translating content accurately, and ensuring consistency. This automated process allows the platform to provide a steady stream of high-quality, localized content about electric vehicles without manual translation work.',
      'Built with modern web technologies, Eletrificado provides a clean, user-friendly interface for browsing electric vehicle news.'
    ],
    features: [
      'AI-powered news capture from multiple sources',
      'Automatic content improvement and translation using AI',
      'Latest news about electric vehicles',
      'Clean and modern user interface'
    ],
    technologies: ['Nuxt', 'OpenAI API', 'Web Scraping', 'Vercel', 'Stripe'],
    results: [
      { value: '100+', label: 'News articles published' },
      { value: '24/7', label: 'News updates' }
    ]
  },
  roomremake: {
    title: 'RoomRemake - AI Interior Redesigner',
    cardTitle: 'One-Click AI Interior Redesign with RoomRemake',
    description:
      'A SaaS platform that redesigns interior spaces in seconds using AI-powered style transformation.',
    image: '/portfolio/roomremake_image.webp',
    detailImage: '/portfolio/roomremake_image.webp',
    tags: ['PropTech', 'Generative AI', 'SaaS'],
    about: [
      'RoomRemake is an AI interior redesign platform where users upload a room photo, choose a style, and receive a transformed design in seconds.',
      'The product supports a broad style catalog including Modern, Minimalist, Rustic, Vintage, Tropical, Industrial, Scandinavian, and Luxury, making fast ideation accessible to homeowners, designers, and architects.',
      'By turning a traditionally slow design process into a one-click workflow, RoomRemake helps users explore options quickly, compare visual directions, and move faster from inspiration to decision.'
    ],
    features: [
      'Upload room photos and generate redesigned interiors in under 30 seconds',
      'Multiple interior styles available in one workflow',
      'AI-generated furniture and decoration suggestions for empty rooms',
      'Downloadable high-quality generated images',
      'Flexible plans for personal and commercial usage'
    ],
    technologies: ['Generative AI', 'Image Processing', 'Web Platform', 'Subscription Billing'],
    results: [
      { value: '<30s', label: 'Typical redesign generation time' },
      { value: '8+', label: 'Design styles available' },
      { value: '3', label: 'Subscription tiers (Basic, Decor, Architect)' },
      { value: '1-click', label: 'Interior redesign workflow' }
    ]
  },
  credeal: {
    title: 'Credeal - Operational Automation Consulting',
    cardTitle: 'Automation Roadmap for a Leading LATAM Notebook Manufacturer',
    description:
      "A consulting engagement focused on HR, commercial, finance, and BI automation opportunities across Credeal's operations.",
    image: '/portfolio/credeal.webp',
    detailImage: '/portfolio/credeal.webp',
    imageFit: 'contain',
    tags: ['Consulting', 'Automation', 'ERP Integration', 'Operations'],
    about: [
      'We worked with Credeal, a leading notebook manufacturer in Latin America, to map cross-functional automation opportunities and reduce manual operational bottlenecks.',
      'A key bottleneck was HR onboarding. Because turnover is relatively high in the industry, screening candidates, storing application data, and manually re-entering information into internal systems and government workflows such as eSocial consumed significant time.',
      'For that HR workflow, we proposed an AI-assisted flow to digitize applications, extract structured data from documents, and auto-fill both internal and external forms.',
      'A second subproject focused on quote verification. We designed a new rules and automatic verification layer to triage straightforward cases, reduce manual review, and accelerate approvals and rejections in the targeted commercial flow.',
      'That quote workflow moved from a multi-day turnaround to roughly one hour in the improved path, which also increased conversion by making responses meaningfully faster.'
    ],
    features: [
      'Cross-functional review of operational workflows and systems',
      'AI-assisted digitization of job applications and document data extraction',
      'Auto-fill workflows for internal systems and government forms such as eSocial',
      'Automation opportunities mapped across HR, ERP, BI, support, finance, and sales operations',
      'Rules-based quote verification and automatic triage for straightforward cases',
      'Faster approvals, rejections, and escalation paths in the commercial workflow',
      'Assessment of existing vendor capabilities before recommending custom builds',
      'Prioritized roadmap of quick wins and higher-impact initiatives',
      'Integration strategy covering systems such as CIGAM, Senior, Octadesk, Serasa, and internal BI tools'
    ],
    technologies: ['CIGAM', 'Senior', 'Octadesk', 'Serasa API', 'BI Systems', 'Process Automation'],
    results: [
      { value: '~1h', label: 'Quote verification turnaround in the improved flow' },
      { value: 'Higher', label: 'Conversion through faster response times' },
      { value: 'Much faster', label: 'HR intake and form-filling workflows' },
      { value: 'Multi-area', label: 'Operational roadmap delivered' }
    ]
  },
  manfing: {
    title: 'Manfing - Market Data Infrastructure for Predictive Models',
    cardTitle: 'Powering Manfing Forecasts with B3 Futures Data',
    description:
      'Data integrations and storage architecture for AI models that help manufacturers and retailers predict demand, optimize inventory, and improve production planning.',
    image: '/portfolio/manfing_logo.png',
    detailImage: '/portfolio/manfing_logo.png',
    imageFit: 'contain',
    tags: ['AI', 'Data Infrastructure', 'Market Data', 'Forecasting'],
    about: [
      'Manfing uses AI to help clients optimize sales, production, and logistics through predictive analytics. One of the practical use cases is demand planning for apparel, such as deciding the right stock levels by size, color, or product mix.',
      'For one of their forecasting models, they needed reliable historical data on crop futures and currency futures. We partnered with them to build a series of integrations, primarily with B3, to ingest historical datasets for soybeans, corn, and dollar futures.',
      'Beyond the integrations themselves, we also advised on how that larger volume of time-series market data should be stored and accessed so the prediction pipeline could remain efficient, reliable, and ready to scale.'
    ],
    features: [
      'Historical market-data integrations focused on futures contracts',
      'B3 connectivity for soybean, corn, and dollar futures datasets',
      'Data ingestion flows designed for predictive-model usage',
      'Storage and access architecture guidance for large historical datasets',
      'Support for AI-driven forecasting in sales, inventory, production, and logistics workflows'
    ],
    technologies: ['B3 Integrations', 'Time-Series Data', 'Data Pipelines', 'AI Forecasting Infrastructure'],
    results: [
      { value: 'Richer', label: 'External data inputs for prediction models' },
      { value: 'Better', label: 'Forecasting support for inventory and demand planning' },
      { value: 'Scalable', label: 'Storage and access model for historical datasets' },
      { value: 'Stronger', label: 'Foundation for AI-driven operational decisions' }
    ]
  },
  'video-automation': {
    title: 'AI Video Automation Pipeline',
    cardTitle: 'Automating YouTube Video and Shorts Production with n8n',
    description:
      'An end-to-end n8n pipeline for generating, assembling, publishing, and tracking YouTube videos and Shorts across multiple languages.',
    image: '/logo_codevon_centered.png',
    detailImage: '/logo_codevon_centered.png',
    imageFit: 'contain',
    tags: ['Automation', 'n8n', 'Generative AI', 'Media Pipeline'],
    about: [
      'We designed and implemented a fully automated content pipeline for creating and publishing YouTube videos and Shorts around a chosen theme.',
      'The workflow orchestrated idea generation with ChatGPT, image creation with Google\'s Nano Banana model, voice generation with ElevenLabs, music generation with Suno, and video assembly with ffmpeg, all coordinated through n8n.',
      'We also built persistence and tracking layers so the system could record what had already been generated and published, avoid repetition, and support a translation layer capable of producing the same content in additional languages.'
    ],
    features: [
      'n8n orchestration for end-to-end video and Shorts production',
      'ChatGPT-powered idea generation and scripting around a defined content theme',
      'Image generation workflow using Nano Banana with a defined visual style guide',
      'Voice generation with curated ElevenLabs voice selection and cadence tuning',
      'Music generation with Suno guided by consistent style constraints',
      'ffmpeg-based media assembly and publishing-ready video output',
      'Publication tracking to avoid duplicate topics and preserve content history',
      'Translation layer for multilingual video generation'
    ],
    technologies: ['n8n', 'ChatGPT', 'Nano Banana', 'ElevenLabs', 'Suno', 'ffmpeg'],
    results: [
      { value: 'Automated', label: 'Video ideation-to-publishing workflow' },
      { value: 'Consistent', label: 'Thumbnails, voice, and music style across outputs' },
      { value: 'Higher', label: 'CTR potential through title and thumbnail optimization' },
      { value: 'Lower', label: 'Audience churn through better hooks and pacing' }
    ]
  },
  stark: {
    title: 'Stark - Sinatra Credit Analysis API',
    cardTitle: 'Building Stark Sinatra on Top of the Fintz API',
    description:
      'A product and API layer that helped Stark analysts evaluate private companies using CNPJ lookup, B3 comparables, and saved match workflows.',
    image: '/portfolio/stark_logo.png',
    detailImage: '/portfolio/stark_logo.png',
    imageFit: 'contain',
    tags: ['Fintech', 'API', 'B3 Data', 'Credit Analysis'],
    about: [
      'We developed the API foundation behind Stark Sinatra, a product designed to help Stark analysts assess companies seeking credit.',
      'The workflow started with a CNPJ search, returned company identification data, and then surfaced a list of public companies on B3 with comparable sector classification, along with relevant financial metrics used in valuation analysis.',
      'We also built the persistence layer that allowed analysts to save selected matches, manually add extra listed comparables when needed, attach observations, and retrieve that analysis later through authorized Stark access.'
    ],
    features: [
      'REST API for CNPJ lookup returning company identification and CNAE data',
      'Comparable-company discovery based on sector classification and B3-listed companies',
      'Delivery of financial metrics such as EBITDA, market cap, debt, revenue, and cash for public comparables',
      'Persistence and retrieval of saved matches, analyst-added companies, and observations',
      'Support for analyst workflows that combine automated matches with manual judgment'
    ],
    technologies: ['REST API', 'JSON', 'B3 Data', 'CNAE Mapping', 'Fintz Infrastructure'],
    results: [
      { value: 'Faster', label: 'Analyst workflow for company search and confirmation' },
      { value: 'Structured', label: 'Comparable-company selection and valuation support' },
      { value: 'Persistent', label: 'Saved match history per client company' },
      { value: 'Simpler', label: 'Integration layer for Stark Sinatra product workflows' }
    ]
  },
  rightticker: {
    title: 'LabelPRO - Technical Growth Consulting',
    cardTitle: 'Guiding LabelPRO Through Technical Scale-Up',
    description:
      'A technical and product consulting engagement for a fast-growing SaaS platform that automates compliant care-label creation for global markets.',
      image: '/portfolio/labelpro.png',
      detailImage: '/portfolio/labelpro.png',
    imageFit: 'contain',
    tags: ['Consulting', 'SaaS', 'Architecture', 'Technical Leadership'],
    about: [
      'We worked with LabelPRO to assess product, architecture, delivery readiness, and scaling priorities for a high-growth SaaS business focused on compliant product labeling.',
      'The platform automatically creates care labels in compliance with Brazilian and international labeling standards, including requirements tied to organizations such as INMETRO, ABNT, and global retail labeling manuals.',
      'The company had already achieved strong commercial traction and was serving relevant brands, so the main need was not validating product-market fit, but strengthening the technical foundation required for the next stage of growth.',
      'Our work reviewed the current platform, the transition from the legacy product to the new generation architecture, operational maturity, infrastructure choices, and the execution risks behind an ambitious roadmap that included internationalization, AI-assisted support, and deeper product intelligence.'
    ],
    features: [
      'Technical due diligence on platform architecture, infrastructure, and delivery readiness',
      'Review of regulatory-compliance product scope across local and global labeling standards',
      'Review of the transition path from legacy product versions to the new platform architecture',
      'Guidance on operational maturity, observability, analytics, and support processes',
      'Recommendations for roadmap sequencing, internationalization readiness, and AI integration strategy',
      'Advisory support to strengthen technical leadership, governance, and execution clarity during scale-up'
    ],
    technologies: ['C#/.NET', 'React', 'TypeScript', 'MySQL', 'AWS', 'Azure'],
    results: [
      { value: '200+', label: 'Suppliers using the platform for compliant delivery' },
      { value: '1,100+', label: 'Brands selling with the right label' },
      { value: '400k+', label: 'Label models developed on the platform' },
      { value: 'Clearer', label: 'Scale-up roadmap and technical priorities' }
    ]
  },
  sicredi: {
    title: 'Sicredi - Investment Reporting Platform',
    cardTitle: 'Accelerating Sicredi Investment Reporting',
    description:
      'A web platform that generates investment performance reports for 130,000 cooperative members in a single click.',
    image: '/portfolio/sicredi_image.webp',
    detailImage: '/portfolio/sicredi_image.webp',
    tags: ['Fintech', 'Data Automation', 'Reporting'],
    about: [
      'Sicredi needed to deliver monthly investment performance reports at scale, but the manual workflow was slow and produced inconsistencies in formatting and quality.',
      'We integrated internal and external data sources into a robust web platform that generates parameterized reports with rich metrics and visual charts on demand.',
      'The new process improved reliability, standardization, and visual presentation while helping both internal teams and end clients make better investment decisions.'
    ],
    features: [
      'One-click generation of parameterized investment reports',
      'Integration of internal and external financial data sources',
      'Consistent report templates with improved visual quality',
      'Automated data validation for better reliability',
      'Scalable processing for large cooperative member bases'
    ],
    technologies: ['Web Platform', 'Data Pipelines', 'Data Visualization', 'ETL Automation'],
    results: [
      { value: '15x', label: 'Faster report generation' },
      { value: '130k', label: 'Cooperative members served' },
      { value: 'Higher', label: 'Report consistency and reliability' },
      { value: 'Better', label: 'Decision support for teams and clients' }
    ]
  },
  catalunya: {
    title: 'Catalunya - AI Legal Case Analysis',
    cardTitle: 'AI Legal Analysis for Complex Proceedings',
    description:
      'An AI-agent pipeline that analyzes massive legal case files with greater speed, depth, and consistency.',
    image: '/portfolio/catalunya_logo.webp',
    detailImage: '/portfolio/catalunya_logo.webp',
    tags: ['LegalTech', 'AI Agents', 'Process Automation'],
    about: [
      'Catalunya handled legal proceedings with more than 5,000 pages per case and many related documents. Manual analysis was slow, incomplete, and error-prone.',
      'We built an automated pipeline powered by specialized AI agents to transcribe, analyze, curate, review, and summarize key information into a complete report.',
      'The solution delivered a major productivity leap and enabled scalable, high-quality analysis, which also opened a new and relevant revenue stream for the group.'
    ],
    features: [
      'Specialized multi-agent pipeline for legal document workflows',
      'Automated transcription, curation, review, and summarization',
      'Structured output with complete and consistent case reports',
      'Support for highly complex and correlated legal proceedings',
      'Scalable framework for growing analysis operations'
    ],
    technologies: ['AI Agents', 'LLM Orchestration', 'Document Processing', 'Workflow Automation'],
    results: [
      { value: '200x', label: 'Faster case analysis' },
      { value: 'Higher', label: 'Precision and analytical depth' },
      { value: 'More', label: 'Assertive decision-making' },
      { value: 'New', label: 'Relevant revenue source created' }
    ]
  },
  'holder-plus': {
    title: 'Holder+ - Financial Data Infrastructure',
    cardTitle: 'Powering Holder+ with Financial Data Pipelines',
    description:
      'Data pipelines and source integrations that power Holder+ with reliable market and fundamentals data for thousands of users.',
    image: '/portfolio/holderplus.webp',
    detailImage: '/portfolio/holderplus.webp',
    imageFit: 'contain',
    tags: ['Fintech', 'Data Pipelines', 'Integrations', 'WealthTech'],
    about: [
      'Holder+ is a wealth management platform built for portfolio tracking and financial planning, with a customizable and innovative experience in a single place.',
      'We built the data infrastructure behind the platform, integrating major financial data providers in Brazil to supply critical information such as historical stock and fund prices and fundamentals.',
      'These pipelines ensure data consistency, freshness, and reliability so Holder+ can deliver a simple global investment monitoring experience at scale for thousands of users.'
    ],
    features: [
      'Robust data pipelines for ingestion, normalization, and validation',
      'Integrations with major Brazilian financial data sources',
      'Coverage for historical stock and fund prices',
      'Fundamentals data processing for richer portfolio analysis',
      'Reliable data delivery layer to support platform scale'
    ],
    technologies: ['Data Pipelines', 'ETL/ELT', 'API Integrations', 'Data Quality Monitoring'],
    results: [
      { value: '1000s', label: 'Users supported on the platform' },
      { value: 'Major', label: 'Brazilian financial sources integrated' },
      { value: 'Reliable', label: 'Delivery of prices and fundamentals data' },
      { value: 'Scalable', label: 'Infrastructure for continued platform growth' }
    ]
  },
  aawz: {
    title: 'AAWZ - Treasury Data Infrastructure for AAWZ Hub',
    cardTitle: 'Powering AAWZ Hub for Wealth Advisors',
    description:
      'Real-time, EOD, and historical treasury bond data pipelines built from official government sources to power AAWZ Hub.',
    image: '/portfolio/aawz_logo.webp',
    detailImage: '/portfolio/aawz_logo.webp',
    tags: ['Fintech', 'Data Infrastructure', 'Market Data', 'WealthTech'],
    about: [
      'AAWZ operates a B2B ecosystem and platform infrastructure for wealth firms, consultancies, and investment advisory operations across Brazil. AAWZ Hub consolidates advisors’ clients’ portfolios in one place.',
      'We built and maintain the data pipelines that ingest treasury bond market data directly from official government sources, including real-time prices, end-of-day prices, full historical series, interest rates, and benchmarks.',
      'With this managed integration layer, AAWZ does not need to worry about data-source availability, connector maintenance, or ingestion reliability. We have supported this operation for more than four years.'
    ],
    features: [
      'Direct integration with official government treasury data sources',
      'Coverage for real-time, EOD, and historical bond prices',
      'Interest rate and benchmark ingestion for valuation and analytics',
      'Normalization and reliability layer for downstream platform services',
      'Managed integration operations to reduce maintenance overhead'
    ],
    technologies: ['Data Pipelines', 'API Integrations', 'ETL/ELT', 'Data Quality Monitoring'],
    results: [
      { value: '4+ years', label: 'Continuous client partnership' },
      { value: 'Real-time + EOD', label: 'Treasury pricing coverage' },
      { value: 'Historical', label: 'Long-range data available for analysis' },
      { value: 'Lower', label: 'Operational burden on AAWZ internal teams' }
    ]
  }
} as const;
