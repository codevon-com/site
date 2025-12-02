<template>
  <section id="work" class="relative overflow-hidden">
    <div class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
        <p class="mt-3 text-muted-foreground">
          What our clients say about working with us
        </p>
      </div>
      <div class="mt-10 flex justify-center">
        <div class="group relative rounded-2xl border border-primary/40 bg-background/50 p-8 backdrop-blur transition-all shadow-md md:p-10">
          <div class="absolute -left-2 -top-2 text-6xl text-primary/20">"</div>
          <div class="absolute -bottom-2 -right-2 text-6xl text-primary/20">"</div>
          <div class="relative max-w-3xl">
            <p class="text-lg leading-relaxed text-foreground md:text-xl">
              Our market, special situations, is not trivial to understand. What really impressed me was how fast they were able to develop a prototype that was already useful.
            </p>
            <div class="mt-6 flex items-center gap-3">
              <div class="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
            <div class="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p class="font-medium text-foreground">
                  G. Dantas | CTO
                </p>
                <p class="mt-1 text-sm text-muted-foreground">
                  Catalunya Private Equity
                </p>
              </div>
              <a href="/portfolio/deepdive">
                <Button size="sm" variant="secondary" class="gap-2 cursor-pointer font-normal">
                  Read more about this project
                  <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



