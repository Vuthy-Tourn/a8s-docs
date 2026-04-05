'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navbar as NextraNavbar } from 'nextra-theme-docs'
import { Logo } from './Logo'

/* ─── Nav links ──────────────────────────────────────────────────────────────
   Edit this array to add / remove top-level nav links.
   ─────────────────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Docs',      href: '/docs/introduction' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Support',   href: 'https://t.me/autonomous', external: true },
] as const

/* ─── GitHub icon ────────────────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

/* ─── NavLink ────────────────────────────────────────────────────────────── */
function NavLink({
  href,
  label,
  external,
}: {
  href: string
  label: string
  external?: boolean
}) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={[
        'text-sm whitespace-nowrap transition-colors duration-150 no-underline',
        'ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F56021]',
        isActive
          ? 'font-medium text-[#F56021]'
          : 'font-normal text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100',
      ].join(' ')}
    >
      {label}
    </Link>
  )
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
export function Navbar() {
  return (
    <NextraNavbar
      logo={<Logo />}
      projectLink="https://github.com/ITProfessional-Gen01/a8s-documentation"
      projectIcon={
        <span className={[
          'flex items-center justify-center',
          'w-8 h-8 rounded-lg',
          'text-neutral-600 dark:text-neutral-400',
          'hover:text-[#F56021] dark:hover:text-[#F56021]',
          'hover:bg-[rgba(245,96,33,0.08)]',
          'transition-colors duration-150',
        ].join(' ')}>
          <GitHubIcon />
        </span>
      }
    >
      {/* Nav links — injected into Nextra's right-side slot */}
      <div className="hidden md:flex items-center gap-6 me-2">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>

      {/* Version badge */}
      <span className={[
        'hidden md:inline-flex items-center',
        'text-[10px] font-semibold tracking-[0.06em] uppercase',
        'px-2 py-[3px] rounded-full',
        'bg-[rgba(245,96,33,0.08)] dark:bg-[rgba(245,96,33,0.12)]',
        'text-[#c94110] dark:text-[#ff8552]',
        'border border-[rgba(245,96,33,0.18)] dark:border-[rgba(245,96,33,0.25)]',
      ].join(' ')}>
        v1.0
      </span>
    </NextraNavbar>
  )
}