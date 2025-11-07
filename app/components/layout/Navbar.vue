<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
      <div class="flex items-center gap-3">
        <div class="h-7 w-7 rounded-md bg-primary/90 ring-1 ring-ring/30" />
        <NuxtLink to="/" class="font-semibold tracking-tight">Codevon</NuxtLink>
      </div>
      <nav class="hidden items-center gap-6 text-sm md:flex">
        <a href="#services" class="text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="#how-we-work" class="text-muted-foreground hover:text-foreground transition-colors">How we work</a>
        <a href="#pricing" class="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        <a href="#work" class="text-muted-foreground hover:text-foreground transition-colors">Work</a>
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


