import {
  Rocket,
  BookOpen,
  Terminal,
  Globe,
  KeyRound,
  Layers,
  ShieldCheck,
  Cpu,
  Zap,
  Cloud,
  Code2,
  Settings2,
  FolderGit2,
  Eye,
  GitBranch,
  Package,
  Database,
  Webhook,
  ShieldCogCorner,
  type LucideProps,
} from 'lucide-react'

/* ─── Icon registry ──────────────────────────────────────────────────────────
   Add any Lucide icon here. Import it above, then add an entry below.
   Usage in A8nCard: icon="rocket"
   ─────────────────────────────────────────────────────────────────────────── */
export const iconMap = {
  rocket:    Rocket,
  book:      BookOpen,
  terminal:  Terminal,
  globe:     Globe,
  key:       KeyRound,
  layers:    Layers,
  shield:    ShieldCheck,
  cpu:       Cpu,
  bolt:      Zap,
  cloud:     Cloud,
  code:      Code2,
  settings:  Settings2,
  git:       FolderGit2,
  eye:       Eye,
  branch:    GitBranch,
  package:   Package,
  database:  Database,
  webhook:   Webhook,
  env: ShieldCogCorner,
} as const

export type IconName = keyof typeof iconMap

/* ─── Rendered icon component ────────────────────────────────────────────── */
interface CardIconProps extends LucideProps {
  name: IconName
}

export function CardIcon({ name, size = 18, ...props }: CardIconProps) {
  const Icon = iconMap[name]
  return <Icon size={size} strokeWidth={1.75} {...props} />
}