<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative border-b border-border/60 bg-gradient-to-b from-background to-muted/20"
    >
      <div class="mx-auto max-w-screen-xl px-4 py-24 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          We've worked on over 100 projects in the last decade in software, AI,
          data science, and blockchain.
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
          <!-- Project: SmartZap -->
          <NuxtLink to="/portfolio/smartzap" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div
                class="w-full overflow-hidden bg-muted flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/smartzap.png"
                  alt="SmartZap"
                  class="w-full h-auto object-contain transition-transform group-hover:scale-105"
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
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <NuxtLink to="/portfolio/take-pics" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div
                class="w-full overflow-hidden bg-muted flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/takepics.webp"
                  alt="TakePics.AI"
                  class="w-full h-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>TakePics.AI</CardTitle>
                <CardDescription>
                  Users can generate AI photos of themselves anywhere and with
                  any style
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
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>
          <NuxtLink to="/portfolio/rma-express" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div
                class="w-full overflow-hidden bg-muted flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/rmaexpress.png"
                  alt="Automatic MOR Generator"
                  class="w-full h-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>Automatic Operating Reports</CardTitle>
                <CardDescription>
                  Automated Monthly Operating Reports (PPT and DOC) from balance
                  sheet data
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
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <NuxtLink to="/portfolio/deepdive" class="group">
            <Card class="h-full overflow-hidden transition-all hover:shadow-lg">
              <div
                class="w-full overflow-hidden bg-muted flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/deepdive.png"
                  alt="DeepDive"
                  class="w-full h-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>DeepDive</CardTitle>
                <CardDescription>
                  AI-powered PDF deep dive system that extracts specific
                  information and generates comprehensive reports from documents
                  with thousands of pages
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Document Analysis</Badge>
                  <Badge variant="secondary">PDF Processing</Badge>
                </div>
              </CardContent>

              <CardFooter>
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
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
  title: "Portfolio - Codevon",
  description:
    "Explore our portfolio of 100+ projects across software, AI, data science, and blockchain.",
});
</script>
