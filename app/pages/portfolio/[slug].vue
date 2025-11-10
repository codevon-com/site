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
            <img 
              :src="project.detailImage" 
              :alt="project.title" 
              class="h-full w-full object-cover"
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
  'ai-trading-platform': {
    title: 'AI Trading Platform',
    description: 'A sophisticated real-time trading system powered by advanced machine learning algorithms, providing institutional-grade trading capabilities for retail investors.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=800&fit=crop',
    tags: ['AI', 'Python', 'Finance'],
    about: [
      'The AI Trading Platform revolutionizes how retail investors access sophisticated trading strategies. Built from the ground up with cutting-edge machine learning algorithms, the platform analyzes millions of data points in real-time to identify trading opportunities.',
      'Our team developed custom neural networks that adapt to changing market conditions, ensuring the trading strategies remain effective across different market regimes. The platform integrates with major exchanges and provides institutional-grade execution speeds.',
      'Security and compliance were paramount in the development process. We implemented bank-level encryption, multi-factor authentication, and ensured full regulatory compliance across multiple jurisdictions.'
    ],
    features: [
      'Real-time market analysis using deep learning models',
      'Automated portfolio rebalancing and risk management',
      'Integration with 15+ major cryptocurrency and stock exchanges',
      'Advanced backtesting framework with historical data',
      'Custom alert system for trade opportunities',
      'Comprehensive performance analytics and reporting'
    ],
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'WebSocket', 'React', 'Docker', 'AWS'],
    results: [
      { value: '45%', label: 'Average annual return' },
      { value: '10k+', label: 'Active users' },
      { value: '$50M+', label: 'Assets under management' },
      { value: '99.9%', label: 'System uptime' }
    ]
  },
  'decentralized-marketplace': {
    title: 'Decentralized Marketplace',
    description: 'An innovative NFT marketplace built on Ethereum, featuring gasless transactions and advanced creator tools.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=1200&h=800&fit=crop',
    tags: ['Blockchain', 'Web3', 'Solidity'],
    about: [
      'This decentralized marketplace represents the next generation of digital asset trading. Built on Ethereum with Layer 2 scaling solutions, it provides a seamless experience for both creators and collectors.',
      'We developed custom smart contracts that enable gasless transactions, making NFT trading accessible to everyone. The platform includes advanced creator tools for minting, royalty management, and community engagement.',
      'The marketplace has processed over $10M in transactions while maintaining top-tier security through extensive smart contract audits.'
    ],
    features: [
      'Gasless transactions using meta-transactions',
      'Lazy minting to reduce creator costs',
      'Automated royalty distribution',
      'Multi-chain support (Ethereum, Polygon)',
      'IPFS-based decentralized storage',
      'Advanced collection management tools'
    ],
    technologies: ['Solidity', 'Hardhat', 'Next.js', 'ethers.js', 'IPFS', 'The Graph', 'Polygon'],
    results: [
      { value: '$10M+', label: 'Trading volume' },
      { value: '5k+', label: 'NFTs minted' },
      { value: '2k+', label: 'Active creators' },
      { value: '0%', label: 'Security incidents' }
    ]
  },
  'healthcare-analytics': {
    title: 'Healthcare Analytics Dashboard',
    description: 'A comprehensive patient data analytics platform with predictive modeling capabilities for healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
    tags: ['Data Science', 'Healthcare', 'React'],
    about: [
      'The Healthcare Analytics Dashboard transforms how medical professionals interact with patient data. By leveraging advanced analytics and machine learning, it provides actionable insights that improve patient outcomes.',
      'Our team worked closely with healthcare professionals to design an intuitive interface that displays complex medical data in an easily digestible format. The platform integrates with major EHR systems and provides real-time updates.',
      'HIPAA compliance was a critical requirement. We implemented end-to-end encryption, comprehensive audit logging, and strict access controls to ensure patient data remains secure.'
    ],
    features: [
      'Real-time patient monitoring and alerts',
      'Predictive models for patient risk assessment',
      'Integration with major EHR systems',
      'Customizable dashboards for different roles',
      'Population health analytics',
      'HIPAA-compliant data handling'
    ],
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'scikit-learn', 'D3.js', 'Docker'],
    results: [
      { value: '30%', label: 'Reduction in readmissions' },
      { value: '50+', label: 'Healthcare facilities' },
      { value: '100k+', label: 'Patients monitored' },
      { value: '4.8/5', label: 'User satisfaction' }
    ]
  }
  // Add more projects as needed
}

const project = projects[slug as keyof typeof projects] || projects['ai-trading-platform']

useSeoMeta({
  title: `${project.title} - Portfolio - Codevon`,
  description: project.description,
})
</script>

