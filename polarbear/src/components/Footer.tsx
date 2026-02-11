'use client'

import { Box, Container, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

const footerNames: Record<Locale, string> = {
  ja: 'ホッキョクグマを守ろう',
  en: 'Save Polar Bears',
  zh: '守护北极熊',
}

export default function Footer() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        py: { xs: 1, md: 1 },
        pb: 0,
        minHeight: { xs: 40, md: 44 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} {footerNames[locale]}
        </Typography>
      </Container>
    </Box>
  )
}
