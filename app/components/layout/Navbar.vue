<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo_codevon_centered.png" alt="codevon" class="h-8 w-auto" />
      </NuxtLink>
      <nav class="hidden items-center gap-6 text-sm md:flex">
        <a href="#services" class="text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="#how-we-work" class="text-muted-foreground hover:text-foreground transition-colors">How we work</a>
        <a href="#pricing" class="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        <NuxtLink to="/portfolio" class="text-muted-foreground hover:text-foreground transition-colors">Portfolio</NuxtLink>
        <a href="#contact" class="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </nav>
      <div class="flex items-center gap-2">
        <a href="#contact">
          <Button size="sm" class="gap-1">
            Book a call
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  </header>
</template>


