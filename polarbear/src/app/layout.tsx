import type { Metadata } from 'next'
import Script from 'next/script'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import MuiThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://polarbear-opal.vercel.app'),
  title: 'ホッキョクグマ保護 | Polar Bear Conservation',
  description: 'ホッキョクグマの環境保護と生態系の維持を支援するサイト',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ホッキョクグマ保護 | Polar Bear Conservation',
    description: 'ホッキョクグマの環境保護と生態系の維持を支援するサイト',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://polarbear-opal.vercel.app',
    siteName: 'ホッキョクグマ保護',
    images: [
      {
        url: '/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg',
        alt: '氷の上にいるホッキョクグマのイメージ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ホッキョクグマ保護 | Polar Bear Conservation',
    description: 'ホッキョクグマの環境保護と生態系の維持を支援するサイト',
    images: ['/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-L1HKMTY3GE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L1HKMTY3GE');
          `}
        </Script>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  )
}
