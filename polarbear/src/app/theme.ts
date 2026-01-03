'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a',
      light: '#e0f2fe',
      dark: '#0c4a6e',
    },
    secondary: {
      main: '#0288d1',
    },
    background: {
      default: '#f0f9ff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
})

export default theme
