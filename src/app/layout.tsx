import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
export const metadata: Metadata = {
  title: {
    template: '%s — A8n Docs',
    default: 'Autonomous (A8n) Documentation',
  },
  description:
    'Self-service DevOps platform — deploy on Kubernetes without infrastructure complexity.',
  openGraph: {
    siteName: 'A8n Docs',
    description:
      'Self-service DevOps platform — deploy on Kubernetes without infrastructure complexity.',
  },
}

/* ── Named sub-components (avoids ConfigProvider key warning) ─────────────── */

const SOCIAL_LINKS = ['Telegram', 'LinkedIn', 'GitHub'] as const

function DocLinks() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link}
          href="#"
          style={{ fontSize: '13px', opacity: 0.5, textDecoration: 'none' }}
        >
          {link}
        </a>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <span style={{ fontSize: '13px', opacity: 0.6 }}>
        © {new Date().getFullYear()} Autonomous. All rights reserved.
      </span>
      <DocLinks />
    </div>
  )
}

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="Autonomous Logo" style={{ height: '28px' }} />
      <span style={{ fontWeight: '700', fontSize: '15px', letterSpacing: '-0.02em' }}>
        Autonomous
      </span>
      <span
        style={{
          fontSize: '10px',
          fontWeight: '600',
          padding: '2px 7px',
          borderRadius: '99px',
          background: 'rgba(249,115,22,0.12)',
          color: '#F56021',
          border: '1px solid rgba(249,115,22,0.3)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        Docs
      </span>
    </div>
  )
}
const banner = (
  <Banner storageKey="some-key">My Project 1.0.0 is released 🎉</Banner>
);

/* ── Root layout ──────────────────────────────────────────────────────────── */
export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  const navbar = (
    <Navbar
      logo={<Logo />}
      projectLink="https://github.com/ITProfessional-Gen01/a8s-documentation"
    />
  )

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Poppins + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <Layout
        banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/autonomous/a8n/tree/main/docs"
          editLink="Edit this page on GitHub →"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ title: 'On This Page', backToTop: true }}
          feedback={{ content: 'Question? Give us feedback →', labels: 'feedback' }}
          footer={<Footer />}
          nextThemes={{ defaultTheme: 'dark' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
