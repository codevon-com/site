<template>
  <section id="contact" class="mx-auto max-w-screen-xl px-4 py-16 md:py-24">
    <div class="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-8 md:p-12">
      <div class="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />
      <div class="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent/30 blur-2xl" />
      
      <div class="relative">
        <div class="mb-8 text-center">
          <h2 class="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {{ t('contactSection.title') }}
          </h2>
          <p class="mt-3 text-muted-foreground">
            {{ t('contactSection.subtitle') }}
          </p>
        </div>

        <form
          action="https://formsubmit.co/hello@codevon.com"
          method="POST"
          class="mx-auto max-w-2xl space-y-6"
        >
          <!-- FormSubmit Configuration -->
          <input type="hidden" name="_subject" :value="t('contactSection.form.subject')" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" :value="t('contactSection.form.next')" />
          
          <!-- Honeypot field to prevent spam -->
          <input type="text" name="_honey" style="display:none" />

          <div class="grid gap-6 md:grid-cols-2">
            <!-- Name field (required) -->
            <div>
              <label for="name" class="mb-2 block text-sm font-medium">
                {{ t('contactSection.form.name.label') }} <span class="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 backdrop-blur transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                :placeholder="t('contactSection.form.name.placeholder')"
              />
            </div>

            <!-- Email field (required) -->
            <div>
              <label for="email" class="mb-2 block text-sm font-medium">
                {{ t('contactSection.form.email.label') }} <span class="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 backdrop-blur transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                :placeholder="t('contactSection.form.email.placeholder')"
              />
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <!-- Company field (optional) -->
            <div>
              <label for="company" class="mb-2 block text-sm font-medium">
                {{ t('contactSection.form.company.label') }}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                class="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 backdrop-blur transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                :placeholder="t('contactSection.form.company.placeholder')"
              />
            </div>

            <!-- Job Title field (optional) -->
            <div>
              <label for="job_title" class="mb-2 block text-sm font-medium">
                {{ t('contactSection.form.job.label') }}
              </label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                class="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 backdrop-blur transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                :placeholder="t('contactSection.form.job.placeholder')"
              />
            </div>
          </div>

          <!-- Message field (required) -->
          <div>
            <label for="message" class="mb-2 block text-sm font-medium">
              {{ t('contactSection.form.message.label') }} <span class="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              class="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 backdrop-blur transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              :placeholder="t('contactSection.form.message.placeholder')"
            ></textarea>
          </div>

          <!-- Submit button -->
          <div class="flex justify-center">
            <Button type="submit" size="lg" class="gap-2">
              {{ t('contactSection.form.submit') }}
              <Icon name="lucide:send" class="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>