import type { Metadata } from 'next'
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
  title: 'ホッキョクグマ保護 | Polar Bear Conservation',
  description: 'ホッキョクグマの環境保護と生態系の維持を支援するサイト',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  )
}
