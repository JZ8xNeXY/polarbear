import type { Metadata } from 'next'
import MuiThemeProvider from '@/components/ThemeProvider'
import './globals.css'

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
    <html lang="ja">
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  )
}
