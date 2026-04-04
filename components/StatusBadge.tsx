import type { ReactNode } from 'react'

/** Supported badge variants */
export type StatusBadgeVariant =
  | 'stable'
  | 'beta'
  | 'alpha'
  | 'deprecated'
  | 'enterprise'

interface StatusBadgeProps {
  /** One of the preset variants — controls colour and default label */
  variant?: StatusBadgeVariant
  /** Override the displayed text */
  label?: string
  /** Arbitrary children (takes priority over label) */
  children?: ReactNode
}

const STYLES: Record<StatusBadgeVariant, string> = {
  stable:     'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:text-emerald-400',
  beta:       'bg-blue-500/10   text-blue-700   border-blue-500/30   dark:text-blue-400',
  alpha:      'bg-violet-500/10 text-violet-700 border-violet-500/30 dark:text-violet-400',
  deprecated: 'bg-red-500/10    text-red-700    border-red-500/30    dark:text-red-400',
  enterprise: 'bg-orange-500/10 text-orange-700 border-orange-500/30 dark:text-orange-400',
}

const LABELS: Record<StatusBadgeVariant, string> = {
  stable:     'Stable',
  beta:       'Beta',
  alpha:      'Alpha',
  deprecated: 'Deprecated',
  enterprise: 'Enterprise',
}

/**
 * `<StatusBadge>` — inline pill for marking feature maturity or access tier.
 *
 * ### Usage in MDX (no import needed)
 * ```mdx
 * ## Auto-Scaling <StatusBadge variant="stable" />
 *
 * ## GitOps Sync <StatusBadge variant="beta" />
 *
 * <StatusBadge variant="enterprise" label="Pro plan only" />
 * ```
 */
export function StatusBadge({
  variant = 'stable',
  label,
  children,
}: StatusBadgeProps) {
  const content = children ?? label ?? LABELS[variant]

  return (
    <span
      className={[
        'inline-flex items-center',
        'text-[10px] font-semibold uppercase tracking-wider leading-none',
        'px-1.5 py-0.5 rounded-full border',
        'align-middle ml-1.5 select-none',
        STYLES[variant],
      ].join(' ')}
    >
      {content}
    </span>
  )
}
