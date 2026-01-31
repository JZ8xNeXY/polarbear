'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2f6f9f',
      light: '#e3f4ff',
      dark: '#1b4566',
    },
    secondary: {
      main: '#f59e0b',
    },
    background: {
      default: '#f6fbff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-sans), "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif',
    body1: {
      fontWeight: 400,
      lineHeight: 1.85,
      letterSpacing: '0.015em',
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    h1: {
      fontWeight: 600,
      fontFamily: 'var(--font-serif), "Hiragino Mincho ProN", "Yu Mincho", serif',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontFamily: 'var(--font-serif), "Hiragino Mincho ProN", "Yu Mincho", serif',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
      fontFamily: 'var(--font-serif), "Hiragino Mincho ProN", "Yu Mincho", serif',
    },
  },
})

export default theme
