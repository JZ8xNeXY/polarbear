'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import EmotionCacheProvider from '@/lib/emotion-cache'
import theme from '@/app/theme'

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  )
}
