export const projectsEn = {
  smartzap: {
    title: 'SmartZap',
    description:
      'An AI-powered WhatsApp assistant that brings the intelligence of modern LLMs directly into everyday conversations.',
    image: '/portfolio/smartzap.png',
    detailImage: '/portfolio/smartzap.png',
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
    description: "A system that automatically generates Monthly Operating Reports (MOR) from a company’s balance sheet.",
    image: '/portfolio/rmaexpress.png',
    detailImage: '/portfolio/rmaexpress.png',
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
    title: 'RoomRemake',
    description:
      'An AI-powered interior redesigner that transforms rooms by generating multiple design variations from a single photo.',
    image: '/portfolio/roomremake.png',
    detailImage: '/portfolio/roomremake.png',
    tags: ['AI', 'Interior Design', 'Image Generation', 'Consumer App'],
    about: [
      'RoomRemake is an innovative AI-powered platform that revolutionizes interior design by allowing users to visualize room transformations instantly. Users simply upload a photo of their room, and the AI generates multiple redesigned variations with different styles, furniture arrangements, and color schemes.',
      'Built with user experience in mind, RoomRemake provides an intuitive interface where users can compare original and AI-generated designs side by side. The platform makes professional interior design accessible to everyone, eliminating the need for expensive consultations and allowing users to experiment with different looks risk-free.'
    ],
    features: [
      'Upload a room photo and get instant AI-generated redesigns',
      'Multiple design variations and styles to choose from',
      'Side-by-side comparison of original and redesigned rooms',
      'User-friendly interface for easy navigation',
      'Free trial option for new users'
    ],
    technologies: ['Replicate', 'Flux', 'Nuxt', 'Supabase', 'Hetzner'],
    results: [
      { value: '15+', label: 'Design styles available' },
      { value: '30s', label: 'Average generation time' }
    ]
  }
} as const;

