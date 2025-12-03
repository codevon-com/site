<template>
  <main>
    <!-- Hero Section -->
    <section
      class="relative border-b border-border/60 bg-gradient-to-b from-background to-muted/20"
    >
      <div class="mx-auto max-w-screen-xl px-4 py-16 text-center">
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
    <section class="py-20">
      <div class="mx-auto max-w-screen-xl px-4">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Project: SmartZap -->
          <NuxtLink to="/portfolio/smartzap" class="group">
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/smartzap.png"
                  alt="SmartZap"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>SmartZap</CardTitle>
                <CardDescription>
                  Like chatgpt but inside WhatsApp
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">WhatsApp Bot</Badge>
                  <Badge variant="secondary">SaaS</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
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
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/takepics.webp"
                  alt="TakePics.AI"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>TakePics.AI</CardTitle>
                <CardDescription>
                  Users can generate AI photos of themselves anywhere and with
                  any style
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Image Generation</Badge>
                  <Badge variant="secondary">Consumer App</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
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
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/rmaexpress.png"
                  alt="Automatic MOR Generator"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>Automatic Operating Reports</CardTitle>
                <CardDescription>
                  Automated Monthly Operating Reports (PPT and DOC) from balance
                  sheet data
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Automation</Badge>
                  <Badge variant="secondary">Financial Analysis</Badge>
                  <Badge variant="secondary">LegalTech</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
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
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/deepdive.png"
                  alt="DeepDive"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
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

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Document Analysis</Badge>
                  <Badge variant="secondary">PDF Processing</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <NuxtLink to="/portfolio/roomremake" class="group">
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/roomremake.png"
                  alt="RoomRemake"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>RoomRemake</CardTitle>
                <CardDescription>
                  AI-powered interior redesigner that transforms rooms by
                  generating multiple design variations from a single photo
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Interior Design</Badge>
                  <Badge variant="secondary">Image Generation</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <NuxtLink to="/portfolio/meu-novo-cabelo" class="group">
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/meunovocabelo.png"
                  alt="Meu Novo Cabelo"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>Meu Novo Cabelo</CardTitle>
                <CardDescription>
                  AI-powered platform that transforms your look in 30 seconds
                  with over 50 hair styles and colors
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Image Generation</Badge>
                  <Badge variant="secondary">Beauty Tech</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <NuxtLink to="/portfolio/eletrificado" class="group">
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/eletrificado.png"
                  alt="Eletrificado"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>Eletrificado</CardTitle>
                <CardDescription>
                  News platform that captures, improves and translates electric
                  vehicle news from multiple sources using AI
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">News Platform</Badge>
                  <Badge variant="secondary">Electric Vehicles</Badge>
                  <Badge variant="secondary">AI</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
                <div
                  class="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Learn more
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </NuxtLink>

          <NuxtLink to="/portfolio/fintz-bot" class="group">
            <Card
              class="h-full overflow-hidden transition-all hover:shadow-lg flex flex-col"
            >
              <div
                class="w-full h-48 overflow-hidden bg-white flex items-center justify-center"
              >
                <NuxtImg
                  src="/portfolio/fintzbot.png"
                  alt="Fintz Bot"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>Fintz Bot</CardTitle>
                <CardDescription>
                  Smart conversational WhatsApp bot that helps users track,
                  organize, and understand their daily expenses
                </CardDescription>
              </CardHeader>

              <CardContent class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="secondary">Chatbot</Badge>
                  <Badge variant="secondary">Fintech</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>

              <CardFooter class="mt-auto">
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
