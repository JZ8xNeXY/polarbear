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
        py: { xs: 2.5, md: 3 },
        minHeight: { xs: 92, md: 104 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} ホッキョクグマを守ろう
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          このサイトはホッキョクグマを守るための情報をまとめています
        </Typography>
      </Container>
    </Box>
  )
}
