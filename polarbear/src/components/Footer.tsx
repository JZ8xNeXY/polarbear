'use client'

import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
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
          © {new Date().getFullYear()} ホッキョクグマを守ろう
        </Typography>
      </Container>
    </Box>
  )
}
