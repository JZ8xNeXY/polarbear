'use client'

import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} ホッキョクグマを守ろう
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          このサイトはホッキョクグマの環境保護を目的としています
        </Typography>
      </Container>
    </Box>
  )
}
