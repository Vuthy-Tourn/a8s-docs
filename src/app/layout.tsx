import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/Footer'

/* ─── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    template: '%s — A8n Docs',
    default: 'Autonomous (A8n) Documentation',
  },
  description:
    'Self-service DevOps platform — deploy on Kubernetes without infrastructure complexity.',
  openGraph: {
    siteName: 'A8n Documentation',
    description:
      'Self-service DevOps platform — deploy on Kubernetes without infrastructure complexity.',
  },
}

/* ─── Root layout ─────────────────────────────────────────────────────────── */
export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <Layout
          banner={
            <Banner storageKey="a8n-v1-release">
              A8n Documentation v1.0.0 is released 🎉
            </Banner>
          }
          navbar={
            <Navbar
              logo={<Logo />}
              projectLink="https://github.com/ITProfessional-Gen01/a8s-documentation"
            />
          }
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