<template>
  <main>
    <!-- Hero Section -->
    <section class="relative border-b border-border/60 bg-gradient-to-b from-background to-muted/20">
      <div class="mx-auto max-w-screen-xl px-4 py-24 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          We've worked on over 100 projects in the last decade in software, AI, data science, and blockchain.
        </h1>
        <p class="mt-6 text-xl text-muted-foreground">
          These are our favorites.
        </p>
        <p class="mt-2 text-xl text-muted-foreground">
          Let your imagination run wild.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-24">
      <div class="mx-auto max-w-screen-xl px-4">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Project 1 -->
          <NuxtLink to="/portfolio/ai-trading-platform" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop" 
                  alt="AI Trading Platform" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>AI Trading Platform</CardTitle>
                <CardDescription>
                  Real-time trading system powered by machine learning algorithms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Finance</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 2 -->
          <NuxtLink to="/portfolio/decentralized-marketplace" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop" 
                  alt="Decentralized Marketplace" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Decentralized Marketplace</CardTitle>
                <CardDescription>
                  NFT marketplace built on Ethereum with smart contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">Blockchain</Badge>
                  <Badge variant="secondary">Web3</Badge>
                  <Badge variant="secondary">Solidity</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 3 -->
          <NuxtLink to="/portfolio/healthcare-analytics" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop" 
                  alt="Healthcare Analytics" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Healthcare Analytics Dashboard</CardTitle>
                <CardDescription>
                  Patient data analytics platform with predictive modeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Science</Badge>
                  <Badge variant="secondary">Healthcare</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 4 -->
          <NuxtLink to="/portfolio/climate-prediction-model" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=500&fit=crop" 
                  alt="Climate Prediction Model" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Climate Prediction Model</CardTitle>
                <CardDescription>
                  Deep learning model for long-term climate forecasting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Climate</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 5 -->
          <NuxtLink to="/portfolio/supply-chain-tracker" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop" 
                  alt="Supply Chain Tracker" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Supply Chain Tracker</CardTitle>
                <CardDescription>
                  Blockchain-based supply chain transparency platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">Blockchain</Badge>
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Logistics</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 6 -->
          <NuxtLink to="/portfolio/personalized-learning-ai" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop" 
                  alt="Personalized Learning AI" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Personalized Learning AI</CardTitle>
                <CardDescription>
                  Adaptive learning platform using natural language processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Education</Badge>
                  <Badge variant="secondary">NLP</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 7 -->
          <NuxtLink to="/portfolio/fraud-detection-system" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop" 
                  alt="Fraud Detection System" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Fraud Detection System</CardTitle>
                <CardDescription>
                  Real-time anomaly detection for financial transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Security</Badge>
                  <Badge variant="secondary">Finance</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 8 -->
          <NuxtLink to="/portfolio/smart-city-dashboard" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=500&fit=crop" 
                  alt="Smart City Dashboard" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Smart City Dashboard</CardTitle>
                <CardDescription>
                  IoT-powered urban management and analytics platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Data Science</Badge>
                  <Badge variant="secondary">Urban Tech</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <!-- Project 9 -->
          <NuxtLink to="/portfolio/genomic-data-analyzer" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div class="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop" 
                  alt="Genomic Data Analyzer" 
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Genomic Data Analyzer</CardTitle>
                <CardDescription>
                  High-performance computing platform for genome sequencing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Science</Badge>
                  <Badge variant="secondary">Bioinformatics</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio - Codevon',
  description: 'Explore our portfolio of 100+ projects across software, AI, data science, and blockchain.',
})
</script>

