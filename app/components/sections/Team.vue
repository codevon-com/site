<template>
  <section id="team" class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
        A team of 10x engineers.
      </h2>
      <p class="mt-3 text-muted-foreground">
        Learn more about our leadership team.
      </p>
    </div>
    
    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="group relative overflow-hidden rounded-xl border border-border/60 transition-all duration-300 hover:border-primary/40"
      >
        <div class="aspect-square overflow-hidden bg-muted">
          <img 
            :src="member.image" 
            :alt="member.name"
            class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105"
          />
        </div>
        
        <!-- Overlay on hover -->
        <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div class="p-6 text-white">
            <p class="text-sm leading-relaxed">
              {{ member.experience }}
            </p>
          </div>
        </div>
        
        <!-- Name and role (always visible) -->
        <div class="p-5">
          <h3 class="text-lg font-semibold">{{ member.name }}</h3>
          <p class="text-sm text-muted-foreground">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Bueno',
    role: 'Founder',
    image: '/team/bueno.png',
    experience: 'Founder mindset obsessed with first principles thinking. Questions every requirement to find the simplest path. Believes the best part is no part—ruthlessly eliminates complexity to ship MVPs that validate fast.'
  },
  {
    name: 'Barbosa',
    role: 'Founder',
    image: '/team/barbosa.png',
    experience: 'Drives prototype-first philosophy. Obsessed with speed and validation—builds to learn, iterates to win. Champions the "physics is ground truth" approach: what works in reality beats what looks good on paper.'
  },
  {
    name: 'Meyer',
    role: 'Founder',
    image: '/team/meyer.png',
    experience: "Relentless simplifier. Cuts through noise to deliver working products ASAP. Applies first principles to every problem—strips down to fundamentals, rebuilds only what's essential. MVP is not a phase, it's a discipline."
  },
  {
    name: 'Alex',
    role: 'Engineer',
    image: '/team/alex.png',
    experience: 'Full-stack engineer who ships fast and iterates faster. Embraces the "question every requisite" mindset—challenges assumptions to find elegant solutions. Prototypes are proof, not promises.'
  },
  {
    name: 'Victor',
    role: 'Engineer',
    image: '/team/victor.png',
    experience: 'Systems thinker who simplifies complexity. Builds with validation in mind—every line of code serves the mission. Believes in rapid prototyping to discover truth through testing, not theorizing.'
  },
  {
    name: 'Kalleo',
    role: 'Engineer',
    image: '/team/kalleo.png',
    experience: 'Pragmatic builder focused on what matters. Strips features to core value, ships to learn. Thinks from ground up—physics-based reasoning over convention. Fast iteration beats perfect planning.'
  }
]
</script>

