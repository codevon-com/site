<template>
  <main>
    <!-- Project Hero -->
    <section class="relative border-b border-border/60 bg-gradient-to-b from-background to-muted/20">
      <div class="mx-auto max-w-screen-xl px-4 py-16">
        <NuxtLink to="/portfolio" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <Icon name="lucide:arrow-left" class="h-4 w-4" />
          Back to Portfolio
        </NuxtLink>
        
        <div class="flex flex-wrap gap-3 mb-6">
          <Badge v-for="tag in project.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
        </div>
        
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {{ project.title }}
        </h1>
        <p class="mt-6 text-xl text-muted-foreground max-w-3xl">
          {{ project.description }}
        </p>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-24">
      <div class="mx-auto max-w-4xl px-4">
        <!-- About the Project -->
        <div>
          <h2 class="text-3xl font-bold mb-6">About the Project</h2>
          
          <div class="space-y-4 text-muted-foreground">
            <p v-for="(paragraph, index) in project.about" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Project Image -->
        <div class="mt-12">
          <div class="aspect-video w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <NuxtImg 
              :src="project.detailImage" 
              :alt="project.title" 
              :class="[
                'h-full w-full',
                project.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'
              ]"
            />
          </div>
        </div>

        <div class="mt-12 pt-12 border-t border-border/60">
          <h3 class="text-2xl font-semibold mb-6">Key Features</h3>
          <ul class="space-y-3">
            <li v-for="(feature, index) in project.features" :key="index" class="flex items-start gap-3">
              <Icon name="lucide:check-circle" class="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span class="text-muted-foreground">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="mt-12 pt-12 border-t border-border/60">
          <h3 class="text-2xl font-semibold mb-6">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tech in project.technologies" :key="tech">{{ tech }}</Badge>
          </div>
        </div>

        <div class="mt-12 pt-12 border-t border-border/60">
          <h3 class="text-2xl font-semibold mb-6">Results</h3>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(result, index) in project.results" :key="index" class="rounded-lg border border-border/60 p-4">
              <div class="text-3xl font-bold text-primary">{{ result.value }}</div>
              <div class="mt-1 text-sm text-muted-foreground">{{ result.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="border-t border-border/60 bg-muted/20 py-16">
      <div class="mx-auto max-w-screen-xl px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p class="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you build something amazing.
        </p>
        <NuxtLink to="/#contact">
          <Button size="lg" class="gap-2">
            Get in touch
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </Button>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Project data - In a real app, this would come from an API or CMS
const projects = {
  // Add more projects as needed
  'smartzap': {
    title: 'SmartZap',
    description: 'An AI-powered WhatsApp assistant that brings the intelligence of modern LLMs directly into everyday conversations.',
    image: '/portfolio/smartzap_logo.webp',
    detailImage: '/portfolio/smartzap_logo.webp',
    imageFit: 'contain',
    tags: ['AI', 'Automation', 'WhatsApp Bot', 'SaaS'],
    about: [
      'SmartZap turns WhatsApp into a powerful AI assistant by integrating state-of-the-art language models into a simple conversational interface. Instead of switching apps, users can get help directly in the messaging platform they use daily.',
      'The system supports a wide range of tasks including research, writing assistance, scheduling, data retrieval, and custom workflows. Everything is triggered through natural language interactions, making it accessible to non-technical users.',
      'SmartZap was built with scalability and reliability in mind. It includes a robust message queue, optimized prompt pipelines, secure authentication, and real-time logging. The platform is also integrated with Stripe for subscription handling and RDS for long-term data persistence.'
    ],
    features: [
      'Advanced AI assistant available directly in WhatsApp',
      'Image generation, data lookup, and writing assistance',
      'Automated workflows such as summaries, reminders, and custom commands',
      'Real-time response pipeline optimized for low latency',
      'User account system with subscription tiers',
      'Secure storage of chat history with opt-in privacy features',
      'Admin dashboard for analytics, user management, and usage monitoring'
    ],
    technologies: ['WhatsApp API', 'OpenAI API', 'GoogleAPI', 'AWS RDS', 'PostgreSQL', 'Stripe', 'Docker', 'Node.js'],
    results: [
      { value: '10k+', label: 'Messages processed monthly' },
      { value: '500+', label: 'Active users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '4.9/5', label: 'User rating' }
    ]
  },
  'fintz-bot': {
    title: 'Fintz Bot',
    description: 'A smart conversational WhatsApp bot that helps users effortlessly track, organize, and understand their daily expenses.',
    image: '/portfolio/fintzbot.png',
    detailImage: '/portfolio/fintzbot.png',
    tags: ['Chatbot', 'Fintech', 'Automation'],
    about: [
      'Fintz Bot is an intelligent WhatsApp-based assistant built to simplify personal finance tracking. By leveraging a natural conversational interface, users can register expenses in just a few seconds, without needing to open an app or navigate complex menus.',
      'Designed with accessibility and practicality in mind, the bot stores financial entries, organizes them by date and category, and allows users to request summaries for specific time periods. It aims to make financial control more intuitive and frictionless for everyday users.',
      'The system integrates AI-powered parsing to interpret free-text messages, making the experience feel natural and human-like. It also supports exporting structured data, such as Excel spreadsheets, for deeper offline analysis.'
    ],
    features: [
      'Natural-language expense registration via WhatsApp',
      'Automatic parsing of purchase descriptions, values, and dates',
      'Expense summaries filtered by day, week, month, or custom ranges',
      'Downloadable Excel spreadsheet with detailed expense history',
      'Smart reminders for consistent financial tracking',
      'Real-time syncing with a secure backend database'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI Assistants API',
      'WhatsApp Cloud API',
      'PostgreSQL',
      'Docker'
    ],
    results: [
      { value: '5k+', label: 'Expenses recorded' },
      { value: '95%', label: 'Message parsing accuracy' },
      { value: '3s', label: 'Average response time' },
      { value: '4.9/5', label: 'User satisfaction' }
    ]
  },
  'take-pics': {
    title: 'TakePics.AI',
    description: 'A platform that generates hyper-realistic AI photos of you and your friends using custom-trained models.',
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
    technologies: [
      'Nuxt',
      'Supabase',
      'Replicate API',
      'Flux Model',
      'Stripe',
      'PostHog'
    ],
    results: [
      { value: '20k+', label: 'Images generated' },
      { value: '5k+', label: 'Active users' },
      { value: '98%', label: 'Model accuracy satisfaction' },
      { value: '4.9/5', label: 'User experience rating' }
    ]
  },
  'rma-express': {
    title: 'Automatic MORs (Monthly Operating Reports) Generator',
    description: 'A system that automatically generates Monthly Operating Reports (MOR) from a company’s balance sheet.',
    image: '/portfolio/rmaexpress.png',
    detailImage: '/portfolio/rmaexpress.png',
    tags: ['Data Automation', 'Financial Analysis', 'LegalTech'],
    about: [
      'The Automatic MOR Generator is a specialized system designed to transform a company’s trial balance into a complete Monthly Operating Report (MOR) used in judicial recovery cases. The MOR is reviewed by a judge to monitor the financial health and operational status of the company.',
      'The tool uses deterministic logic and structured financial rules to interpret accounting data and produce a fully formatted, standardized, and consistent PowerPoint report. This eliminates manual work, reduces errors, and greatly speeds up document preparation.',
      'Built with a strong data-analysis foundation using Python and Pandas, the system ensures accuracy, reliability, and compliance with judicial reporting requirements.'
    ],
    features: [
      'Automatic extraction and processing of trial balance data',
      'Deterministic logic for interpreting financial indicators',
      'Fully generated PowerPoint RMA reports',
      'Error reduction through rule-based transformations',
      'Support for legal compliance in judicial recovery cases'
    ],
    technologies: [
      'Python',
      'Pandas',
      'PowerPoint API',
      'NumPy'
    ],
    results: [
      { value: '90%', label: 'Reduction in manual reporting time' },
      { value: '100%', label: 'Consistency across financial reports' },
      { value: '0', label: 'Human errors in calculations' },
      { value: '30+', label: 'Companies supported' }
    ]
  },
  'sicredi': {
    title: 'Sicredi - Investment Reporting Platform',
    description: 'A web platform that generates investment performance reports for 130,000 cooperative members in a single click.',
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
    technologies: [
      'Web Platform',
      'Data Pipelines',
      'Data Visualization',
      'ETL Automation'
    ],
    results: [
      { value: '15x', label: 'Faster report generation' },
      { value: '130k', label: 'Cooperative members served' },
      { value: 'Higher', label: 'Report consistency and reliability' },
      { value: 'Better', label: 'Decision support for teams and clients' }
    ]
  },
  'catalunya': {
    title: 'Catalunya - AI Legal Case Analysis',
    description: 'An AI-agent pipeline that analyzes massive legal case files with greater speed, depth, and consistency.',
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
    technologies: [
      'AI Agents',
      'LLM Orchestration',
      'Document Processing',
      'Workflow Automation'
    ],
    results: [
      { value: '200x', label: 'Faster case analysis' },
      { value: 'Higher', label: 'Precision and analytical depth' },
      { value: 'More', label: 'Assertive decision-making' },
      { value: 'New', label: 'Relevant revenue source created' }
    ]
  },
  'room-remake': {
    title: 'RoomRemake - AI Interior Redesigner',
    description: 'A SaaS platform that redesigns interior spaces in seconds using AI-powered style transformation.',
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
    technologies: [
      'Generative AI',
      'Image Processing',
      'Web Platform',
      'Subscription Billing'
    ],
    results: [
      { value: '<30s', label: 'Typical redesign generation time' },
      { value: '8+', label: 'Design styles available' },
      { value: '3', label: 'Subscription tiers (Basic, Decor, Architect)' },
      { value: '1-click', label: 'Interior redesign workflow' }
    ]
  },
  'holder-plus': {
    title: 'Holder+ - Financial Data Infrastructure',
    description: 'Data pipelines and source integrations that power Holder+ with reliable market and fundamentals data for thousands of users.',
    image: '/portfolio/holder_logo.svg',
    detailImage: '/portfolio/holder_logo.svg',
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
    technologies: [
      'Data Pipelines',
      'ETL/ELT',
      'API Integrations',
      'Data Quality Monitoring'
    ],
    results: [
      { value: '1000s', label: 'Users supported on the platform' },
      { value: 'Major', label: 'Brazilian financial sources integrated' },
      { value: 'Reliable', label: 'Delivery of prices and fundamentals data' },
      { value: 'Scalable', label: 'Infrastructure for continued platform growth' }
    ]
  },
  'aawz': {
    title: 'AAWZ - Treasury Data Infrastructure for AAWZ Hub',
    description: 'Real-time, EOD, and historical treasury bond data pipelines built from official government sources to power AAWZ Hub.',
    image: '/portfolio/aawz_logo.webp',
    detailImage: '/portfolio/aawz_logo.webp',
    imageFit: 'contain',
    tags: ['Fintech', 'Data Infrastructure', 'Market Data', 'WealthTech'],
    about: [
      'AAWZ operates a B2B ecosystem and platform infrastructure for wealth firms, consultancies, and investment advisory operations across Brazil. AAWZ Hub consolidates advisors\' clients\' portfolios in one place.',
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
    technologies: [
      'Data Pipelines',
      'API Integrations',
      'ETL/ELT',
      'Data Quality Monitoring'
    ],
    results: [
      { value: '4+ years', label: 'Continuous client partnership' },
      { value: 'Real-time + EOD', label: 'Treasury pricing coverage' },
      { value: 'Historical', label: 'Long-range data available for analysis' },
      { value: 'Lower', label: 'Operational burden on AAWZ internal teams' }
    ]
  }
}

const project = projects[slug as keyof typeof projects]

useSeoMeta({
  title: `${project.title} - Portfolio - Codevon`,
  description: project.description,
})
</script>
