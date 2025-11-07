## Tech stack of this project/repo
- **Frontend**: Vue 3, Nuxt 4 (file-based routing, Nitro server), Vite 7
- **UI**: Tailwind CSS 4 (via `@tailwindcss/vite`), shadcn-nuxt (Reka UI under the hood), lucide icons
- **Data**: Supabase (Auth, Postgres). Local dev via `pnpm supabase:start`
- **TypeScript**: project-wide, use `<script setup lang="ts">`
- **Linting**: ESLint 9 using `@nuxt/eslint` preset