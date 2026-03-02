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

      <NuxtLink to="/portfolio/rma-express" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/rmaexpress.png"
              alt="Automatic MOR Generator"
              class="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>Automatic Operating Reports</CardTitle>
            <CardDescription>
              Automated Monthly Operating Reports (PPT and DOC) from balance sheet data
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Data Automation</Badge>
              <Badge variant="secondary">Financial Analysis</Badge>
              <Badge variant="secondary">LegalTech</Badge>
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

      <NuxtLink to="/portfolio/sicredi" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/sicredi_image.webp"
              alt="Sicredi Investment Reporting Platform"
              class="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>Sicredi</CardTitle>
            <CardDescription>
              Investment reporting platform for 130,000 cooperative members
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Fintech</Badge>
              <Badge variant="secondary">Data Automation</Badge>
              <Badge variant="secondary">Reporting</Badge>
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

      <NuxtLink to="/portfolio/catalunya" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/catalunya_logo.webp"
              alt="Catalunya AI Legal Process Analysis"
              class="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>Catalunya</CardTitle>
            <CardDescription>
              AI-powered analysis of large and complex legal case files
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">LegalTech</Badge>
              <Badge variant="secondary">AI Agents</Badge>
              <Badge variant="secondary">Process Automation</Badge>
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

      <NuxtLink to="/portfolio/aawz" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/aawz_logo.webp"
              alt="AAWZ financial infrastructure platform"
              class="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>AAWZ</CardTitle>
            <CardDescription>
              Government-source treasury bond data pipelines powering AAWZ Hub for wealth advisors
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Fintech</Badge>
              <Badge variant="secondary">Data Infrastructure</Badge>
              <Badge variant="secondary">Market Data</Badge>
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

      <NuxtLink to="/portfolio/room-remake" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/roomremake_image.webp"
              alt="RoomRemake AI Interior Redesigner"
              class="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>RoomRemake</CardTitle>
            <CardDescription>
              AI Interior Redesigner that transforms rooms into multiple styles in under 30 seconds
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">PropTech</Badge>
              <Badge variant="secondary">Generative AI</Badge>
              <Badge variant="secondary">SaaS</Badge>
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

          <!-- Project: SmartZap -->
          <NuxtLink to="/portfolio/smartzap" class="group">
          <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
            <div class="aspect-video w-full overflow-hidden bg-muted">
              <NuxtImg
                src="/portfolio/smartzap_logo.webp"
                alt="SmartZap"
                class="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>

            <CardHeader>
              <CardTitle>SmartZap</CardTitle>
              <CardDescription>
                Like chatgpt but inside WhatsApp
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge variant="secondary">AI</Badge>
                <Badge variant="secondary">WhatsApp Bot</Badge>
                <Badge variant="secondary">SaaS</Badge>
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

      <NuxtLink to="/portfolio/take-pics" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/takepics.webp"
              alt="AI Photographer"
              class="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>AI Photographer - TakePics.ai</CardTitle>
            <CardDescription>
              Users can generate AI photos of themselves anywhere and with any style
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">AI</Badge>
              <Badge variant="secondary">Image Generation</Badge>
              <Badge variant="secondary">Consumer App</Badge>
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

      <NuxtLink to="/portfolio/holder-plus" class="group">
        <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
          <div class="aspect-video w-full overflow-hidden bg-muted">
            <NuxtImg
              src="/portfolio/holder_logo.svg"
              alt="Holder+ financial data platform"
              class="h-full w-full object-contain p-6 transition-transform group-hover:scale-105"
            />
          </div>

          <CardHeader>
            <CardTitle>Holder+</CardTitle>
            <CardDescription>
              Data pipelines and integrations powering a wealth management platform with thousands of users
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Fintech</Badge>
              <Badge variant="secondary">Data Pipelines</Badge>
              <Badge variant="secondary">Integrations</Badge>
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
