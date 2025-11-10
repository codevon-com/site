<template>
  <section id="contact" class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
    <div class="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-8 md:p-12">
      <div class="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
      <div class="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/30 blur-2xl" />
      <div class="relative">
        <h2 class="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Make something people want—faster.
        </h2>
        <p class="mt-3 max-w-2xl text-muted-foreground">
          Book a 30-minute consult. We’ll shape a lean plan and get your first
          milestone shipping next week.
        </p>
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:hello@codevon.ai">
            <Button size="lg" class="gap-2">
              Contact us
              <Icon name="lucide:arrow-right" class="h-5 w-5" />
            </Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="secondary">Explore services</Button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


