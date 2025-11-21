<template>
  <section id="pricing" class="w-full flex flex-col items-center py-16 px-4 md:py-24">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold">
        Flexible <span class="text-primary">by-the-hour</span> pricing
      </h2>
      <p class="text-gray-600 max-w-xl mx-auto mt-4">
        U$100-U$150/hour, depending on the complexity, team size, and timeline.
        Increase or decrease bandwidth as your product evolves.
      </p>
    </div>

    <div class="w-full max-w-5xl border rounded-2xl p-10 bg-white shadow-sm">
      <div class="grid md:grid-cols-2 items-center">
        <div>
          <h3 class="text-2xl font-semibold mb-6">Typical Engagement</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="text-primary text-xl">✓</span>
              <p>
                <strong>40-160 hours/month</strong><br /><span
                  class="text-gray-600"
                  >Flexible allocation based on project needs</span
                >
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-primary text-xl">✓</span>
              <p>
                <strong>Bi-weekly sprints</strong><br /><span
                  class="text-gray-600"
                  >Regular demos and iterations</span
                >
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-primary text-xl">✓</span>
              <p>
                <strong>Transparent timesheets</strong><br /><span
                  class="text-gray-600"
                  >Know exactly where your investment goes</span
                >
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-primary text-xl">✓</span>
              <p>
                <strong>No long-term contracts</strong><br /><span
                  class="text-gray-600"
                  >Scale up or pause anytime</span
                >
              </p>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-8 items-stretch w-full">
          <div
            class="flex flex-col bg-primary/10 p-6 rounded-xl space-y-2 items-center text-center w-full mx-auto"
          >
            <div class="text-start">
              <div class="text-5xl font-bold text-primary">$100-150</div>
              <p class="text-gray-600">per hour</p>
            </div>
          </div>
          <div class="flex flex-col items-stretch mx-auto w-full">
            <a href="/#contact">
              <button
                class="bg-primary hover:bg-primary/90 text-white w-full font-medium py-3 px-8 rounded-lg transition"
              >
                Schedule a consultation
              </button>
            </a>
            <p class="text-gray-500 text-sm mt-4 w-full text-center">
              No commitment required. Let's discuss your project first.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for this static component
</script>

<style scoped></style>
