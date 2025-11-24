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
    
    <div class="mt-12 grid gap-4 lg:gap-12 grid-cols-2 lg:grid-cols-3 lg:px-32">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="group relative overflow-hidden rounded-xl border border-border/60 transition-all duration-300 hover:border-primary/80 hover:border-4"
      >
        <div class="aspect-square overflow-hidden bg-muted">
          <NuxtImg
            :src="member.image" 
            :alt="member.name"
            class="h-full w-full object-cover grayscale-70 transition-all duration-500 group-hover:scale-105"
          />
        </div>
        
        <!-- Overlay on hover -->
        <div class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/90 via-10% to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
    experience: 'First principles thinking. Best part is no part. All-rounder. Ex founding team at Leaf'
  },
  {
    name: 'Barbosa',
    role: 'Founder',
    image: '/team/barbosa.png',
    experience: 'Consistent. Always prepared. Detail-oriented. Ex founding team at Leaf'
  },
  {
    name: 'Meyer',
    role: 'Founder',
    image: '/team/meyer.png',
    experience: "Hackerboy. Loves to build cool stuff. Ex AWS."
  },
  {
    name: 'Alex',
    role: 'Engineer',
    image: '/team/alex.png',
    experience: 'Full stack engineer. Pragmatic thinking.'
  },
  {
    name: 'Victor',
    role: 'Engineer',
    image: '/team/victor.png',
    experience: 'Full stack engineer. Pragmatic thinking.'
  },
  {
    name: 'Kalleo',
    role: 'Engineer',
    image: '/team/kalleo.png',
    experience: 'Full stack engineer. Pragmatic thinking.'
  }
]
</script>

