<script setup lang="ts">
import {
  Activity,
  Apple,
  BadgeDollarSign,
  Ban,
  Bot,
  Brain,
  CreditCard,
  Database,
  HeartPulse,
  Info,
  Mail,
  Play,
  Scale,
  Send,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  Trash2,
} from 'lucide-vue-next';

const props = defineProps<{
  name: string
}>();

const icons = {
  activity: Activity,
  apple: Apple,
  'badge-dollar-sign': BadgeDollarSign,
  ban: Ban,
  bot: Bot,
  brain: Brain,
  'credit-card': CreditCard,
  database: Database,
  'heart-pulse': HeartPulse,
  info: Info,
  mail: Mail,
  play: Play,
  scale: Scale,
  send: Send,
  'share-2': Share2,
  'shield-alert': ShieldAlert,
  'shield-check': ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  target: Target,
  'trash-2': Trash2,
} as const;

const icon = computed(() => icons[props.name as keyof typeof icons] ?? Activity);
</script>

<template>
  <component :is="icon" aria-hidden="true" />
</template>
