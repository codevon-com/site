<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar />
    <main>
      <Hero />
      <Services />
      <HowWeWork />
      <Pricing />
      <Stats />
      <section id="work" class="mx-auto max-w-screen-xl px-4 py-16">
        <div class="rounded-xl border border-dashed border-border/60 p-12 text-center">
          <div class="text-sm font-medium">Selected Work</div>
          <p class="mt-2 text-sm text-muted-foreground">
            Case studies coming soon. Ask us for relevant examples during our call.
          </p>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </div>
</template>
