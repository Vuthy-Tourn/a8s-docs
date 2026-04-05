import Link from 'next/link'
import { CardIcon, type IconName } from './CardIcons'

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface A8nCardProps {
  title: string
  href: string
  description: string
  icon?: IconName
  tag?: string
  arrow?: boolean
  className?: string
}

interface A8nCardsProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const colClass: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

/* ─── Grid wrapper ───────────────────────────────────────────────────────── */
export function A8nCards({ children, columns = 3, className = '' }: A8nCardsProps) {
  return (
    <div className={`not-prose grid gap-4 my-6 ${colClass[columns]} ${className}`}>
      {children}
    </div>
  )
}

/* ─── Card ───────────────────────────────────────────────────────────────── */
export function A8nCard({
  title,
  href,
  description,
  icon = 'book',
  tag,
  arrow = true,
  className = '',
}: A8nCardProps) {
  const isExternal = href.startsWith('http')

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={[
        'group flex flex-col rounded-[14px] overflow-hidden no-underline',
        'border border-[rgba(245,96,33,0.18)]',
        'bg-white dark:bg-neutral-900',
        'shadow-sm',
        'transition-all duration-200 ease-out',
        'hover:-translate-y-[3px]',
        'hover:border-[rgba(245,96,33,0.5)]',
        // 'hover:shadow-[0_0_0_3px_rgba(245,96,33,0.07),0_10px_28px_rgba(245,96,33,0.14)]',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[#F56021] focus-visible:ring-offset-2',
        className,
      ].join(' ')}
    >
      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        <span className={[
          'inline-flex items-center justify-center shrink-0',
          'w-9 h-9 rounded-[9px]',
          'bg-[rgba(245,96,33,0.09)] dark:bg-[rgba(245,96,33,0.12)]',
          'border border-[rgba(245,96,33,0.18)] dark:border-[rgba(245,96,33,0.25)]',
          'text-[#F56021]',
        ].join(' ')}>
          <CardIcon name={icon} />
        </span>

        {tag && (
          <span className={[
            'self-start text-[10px] font-semibold tracking-[0.07em] uppercase',
            'px-2 py-[3px] rounded-full',
            'bg-[rgba(245,96,33,0.08)] dark:bg-[rgba(245,96,33,0.12)]',
            'text-[#c94110] dark:text-[#ff8552]',
            'border border-[rgba(245,96,33,0.18)] dark:border-[rgba(245,96,33,0.25)]',
          ].join(' ')}>
            {tag}
          </span>
        )}

        <p className="m-0 text-[13.5px] leading-relaxed font-normal text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className={[
        'flex items-center justify-between gap-2 px-5 py-3',
        'border-t border-[rgba(245,96,33,0.1)] dark:border-[rgba(245,96,33,0.15)]',
      ].join(' ')}>
        <span className="text-sm font-semibold tracking-[-0.01em] truncate text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
        {arrow && (
          <span className={[
            'text-[#F56021] text-base leading-none shrink-0',
            'opacity-0 translate-x-0',
            'transition-all duration-150',
            'group-hover:opacity-100 group-hover:translate-x-0.5',
          ].join(' ')}>
            →
          </span>
        )}
      </div>
    </Link>
  )
}