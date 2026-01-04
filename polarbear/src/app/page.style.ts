import type { CSSProperties } from 'react'
import type { SxProps, Theme } from '@mui/material/styles'

export const imageFilterStyle: CSSProperties = {
  objectFit: 'cover',
  filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
}

const styles: Record<string, SxProps<Theme>> = {
  main: {
    bgcolor: 'background.default',
  },
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    color: 'common.white',
    overflow: 'hidden',
  },
  heroImageWrap: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },
  heroDarkOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(7,11,18,0.7) 0%, rgba(7,11,18,0.95) 80%)',
    zIndex: 1,
  },
  heroAuroraOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(1200px 420px at 15% 10%, rgba(124,214,255,0.35) 0%, rgba(124,214,255,0) 70%), radial-gradient(900px 320px at 80% 5%, rgba(123,237,190,0.25) 0%, rgba(123,237,190,0) 65%)',
    mixBlendMode: 'screen',
    opacity: 0.7,
    zIndex: 1,
    pointerEvents: 'none',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
  },
  heroStack: {
    maxWidth: 1280,
    textAlign: { xs: 'center', md: 'left' },
  },
  heroChip: {
    bgcolor: 'white',
    color: 'var(--accent-ice)',
    border: '1px solid rgba(47,143,212,0.3)',
    width: 'fit-content',
    fontWeight: 600,
  },
  heroTitle: {
    fontSize: { xs: '2.5rem', sm: '3.1rem', md: '5rem' },
    letterSpacing: { xs: '-0.02em', md: '-0.03em' },
    lineHeight: { xs: 1.1, md: 1.05 },
    textShadow: '0 14px 32px rgba(7,11,18,0.45)',
  },
  heroLead: {
    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
    letterSpacing: '0.01em',
    lineHeight: 1.7,
    color: '#f1f6ff',
    textShadow: '0 10px 24px rgba(7,11,18,0.35)',
  },
  heroNote: {
    fontSize: { xs: '0.9rem', md: '1rem' },
    color: 'rgba(239, 246, 255, 0.82)',
  },
  heroButtons: {
    alignItems: { xs: 'stretch', sm: 'center' },
  },
  heroPrimaryButton: {
    bgcolor: '#7fd1ff',
    color: '#04111f',
    fontWeight: 700,
    px: 4,
    py: 1.5,
    '&:hover': { bgcolor: '#a5e3ff' },
  },
  heroSecondaryButton: {
    borderColor: 'rgba(255,255,255,0.6)',
    color: 'common.white',
    px: 4,
    py: 1.5,
    '&:hover': { borderColor: '#2f8fd4', color: '#2f8fd4' },
  },
  aboutSection: {
    py: { xs: 10, md: 14 },
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: { xs: -40, md: -60 },
      left: 0,
      right: 0,
      height: { xs: 60, md: 90 },
      background:
        'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)',
    },
  },
  aboutIntro: {
    maxWidth: 720,
    mb: 6,
  },
  aboutTitle: {
    fontSize: { xs: '2.3rem', md: '3.2rem' },
  },
  aboutLead: {
    color: '#2f4257',
    fontSize: '1.1rem',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
    gap: 3,
  },
  aboutCard: {
    bgcolor: 'var(--glass)',
    border: '1px solid var(--glass-border)',
    borderRadius: 4,
    boxShadow: 'var(--glass-shadow)',
    backdropFilter: 'blur(16px)',
    height: '100%',
  },
  aboutCardTitle: {
    fontSize: '1.5rem',
  },
  aboutCardBody: {
    color: '#304357',
  },
  aboutIconChip: {
    width: 64,
    height: 64,
    borderRadius: '20px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(124, 214, 255, 0.18)',
    border: '1px solid rgba(47,143,212,0.25)',
    boxShadow: '0 12px 24px rgba(12, 34, 60, 0.12)',
  },
  aboutIcon: {
    fontSize: 36,
    color: 'var(--accent-ice)',
  },
  threatSection: {
    py: { xs: 10, md: 14 },
    bgcolor: 'transparent',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: { xs: -50, md: -70 },
      height: { xs: 80, md: 120 },
      background:
        'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(230,241,255,0.85) 100%)',
    },
  },
  threatTopRow: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 5,
    alignItems: 'stretch',
    mb: 8,
  },
  threatStatCard: {
    flex: 1,
    bgcolor: 'rgba(255, 241, 232, 0.85)',
    borderRadius: 5,
    border: '1px solid rgba(231,111,81,0.35)',
    boxShadow: 'var(--glass-shadow)',
    backdropFilter: 'blur(12px)',
  },
  threatStatContent: {
    p: 5,
  },
  threatStatIcon: {
    fontSize: 56,
    color: '#e76f51',
  },
  threatStatTitle: {
    fontSize: '3rem',
  },
  threatStatLead: {
    color: '#7a5b51',
    fontSize: '1.2rem',
  },
  threatImageBox: {
    position: 'relative',
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    minHeight: 360,
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
  },
  threatImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 100%)',
  },
  threatCardsGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
    gap: 3,
  },
  threatCard: {
    bgcolor: 'var(--glass)',
    borderRadius: 4,
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
    backdropFilter: 'blur(14px)',
    height: '100%',
  },
  threatCardTitle: {
    fontSize: '1.5rem',
  },
  threatCardBody: {
    color: '#304357',
  },
  threatIconChipWarm: {
    width: 60,
    height: 60,
    borderRadius: '18px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(231, 111, 81, 0.12)',
    border: '1px solid rgba(231,111,81,0.3)',
    boxShadow: '0 10px 22px rgba(231, 111, 81, 0.16)',
  },
  threatIconWarm: {
    fontSize: 32,
    color: '#e76f51',
  },
  threatIconChipCool: {
    width: 60,
    height: 60,
    borderRadius: '18px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(47, 143, 212, 0.12)',
    border: '1px solid rgba(47,143,212,0.28)',
    boxShadow: '0 10px 22px rgba(47, 143, 212, 0.16)',
  },
  threatIconCool: {
    fontSize: 32,
    color: '#2f8fd4',
  },
  threatIconChipSun: {
    width: 60,
    height: 60,
    borderRadius: '18px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(245, 158, 11, 0.12)',
    border: '1px solid rgba(245,158,11,0.3)',
    boxShadow: '0 10px 22px rgba(245, 158, 11, 0.16)',
  },
  threatIconSun: {
    fontSize: 32,
    color: '#f59e0b',
  },
  dataSection: {
    py: { xs: 10, md: 14 },
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: { xs: -40, md: -60 },
      height: { xs: 70, md: 100 },
      background:
        'linear-gradient(180deg, rgba(230,241,255,0.85) 0%, rgba(255,255,255,0) 100%)',
    },
  },
  dataHeader: {
    textAlign: 'center',
    mb: 6,
  },
  dataTitle: {
    fontSize: { xs: '2.5rem', md: '3.4rem' },
  },
  dataLead: {
    color: '#2f4257',
  },
  dataGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: { xs: 2.5, md: 3 },
  },
  dataImageBox: {
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden',
    minHeight: { xs: 240, sm: 280, md: 320 },
    boxShadow: 'var(--glass-shadow)',
  },
  dataImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(10,20,30,0.1) 0%, rgba(10,20,30,0.9) 100%)',
    display: 'flex',
    alignItems: 'flex-end',
  },
  dataStatCard: {
    p: 4,
    bgcolor: 'rgba(7,11,18,0.55)',
    borderRadius: 3,
    mb: 3,
    ml: 3,
    border: '1px solid rgba(255,255,255,0.15)',
    maxWidth: 360,
  },
  dataStatNumber: {
    color: '#eef6ff',
    fontSize: '2.5rem',
    textShadow: '0 6px 16px rgba(3,8,14,0.5)',
  },
  dataStatLabel: {
    color: '#eef6ff',
    textShadow: '0 6px 16px rgba(3,8,14,0.45)',
  },
  importanceSection: {
    py: { xs: 10, md: 14 },
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: { xs: -50, md: -70 },
      left: 0,
      right: 0,
      height: { xs: 80, md: 120 },
      background:
        'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(245,250,255,0.9) 100%)',
    },
  },
  importanceCard: {
    bgcolor: 'var(--glass-strong)',
    borderRadius: 6,
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
    backdropFilter: 'blur(16px)',
  },
  importanceCardContent: {
    p: { xs: 4, md: 8 },
  },
  importanceIcon: {
    fontSize: 56,
    color: '#f59e0b',
  },
  importanceTitle: {
    fontSize: { xs: '2.4rem', md: '3.2rem' },
  },
  importanceGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
    gap: 3,
  },
  importanceItemIcon: {
    fontSize: 48,
    color: '#2f8fd4',
  },
  importanceItemTitle: {
    fontSize: '1.4rem',
  },
  importanceItemText: {
    color: '#304357',
  },
  actionSection: {
    py: { xs: 10, md: 14 },
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: { xs: -50, md: -70 },
      height: { xs: 90, md: 120 },
      background:
        'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(230,241,255,0.9) 100%)',
    },
  },
  actionHeader: {
    textAlign: 'center',
    mb: 6,
  },
  actionTitle: {
    fontSize: { xs: '2.5rem', md: '3.4rem' },
  },
  actionLead: {
    color: '#2f4257',
  },
  actionGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: 3,
  },
  actionCard: {
    bgcolor: 'var(--glass)',
    borderRadius: 5,
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
    backdropFilter: 'blur(14px)',
    height: '100%',
  },
  actionCardContent: {
    p: 4,
  },
  actionCardTitle: {
    fontSize: '1.6rem',
  },
  actionCardBody: {
    color: '#304357',
    whiteSpace: 'pre-line',
  },
  actionIconChipGreen: {
    width: 66,
    height: 66,
    borderRadius: '22px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(76, 175, 80, 0.15)',
    border: '1px solid rgba(76,175,80,0.3)',
    boxShadow: '0 12px 26px rgba(76, 175, 80, 0.18)',
  },
  actionIconGreen: {
    fontSize: 36,
    color: '#4caf50',
  },
  actionIconChipBlue: {
    width: 66,
    height: 66,
    borderRadius: '22px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(47, 143, 212, 0.15)',
    border: '1px solid rgba(47,143,212,0.3)',
    boxShadow: '0 12px 26px rgba(47, 143, 212, 0.18)',
  },
  actionIconBlue: {
    fontSize: 36,
    color: '#2f8fd4',
  },
  actionIconChipSteel: {
    width: 66,
    height: 66,
    borderRadius: '22px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(47, 111, 159, 0.15)',
    border: '1px solid rgba(47,111,159,0.3)',
    boxShadow: '0 12px 26px rgba(47, 111, 159, 0.18)',
  },
  actionIconSteel: {
    fontSize: 36,
    color: '#2f6f9f',
  },
  actionIconChipAmber: {
    width: 66,
    height: 66,
    borderRadius: '22px',
    display: 'grid',
    placeItems: 'center',
    bgcolor: 'rgba(245, 158, 11, 0.15)',
    border: '1px solid rgba(245,158,11,0.3)',
    boxShadow: '0 12px 26px rgba(245, 158, 11, 0.18)',
  },
  actionIconAmber: {
    fontSize: 36,
    color: '#f59e0b',
  },
  ctaSection: {
    py: { xs: 10, md: 14 },
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: { xs: -50, md: -70 },
      left: 0,
      right: 0,
      height: { xs: 80, md: 120 },
      background:
        'linear-gradient(180deg, rgba(230,241,255,0.9) 0%, rgba(255,255,255,0) 100%)',
    },
  },
  ctaBox: {
    position: 'relative',
    borderRadius: 6,
    overflow: 'hidden',
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--glass-shadow)',
  },
  ctaOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(6,18,32,0.35) 0%, rgba(6,18,32,0.85) 80%)',
  },
  ctaStack: {
    position: 'relative',
    p: { xs: 3.5, md: 8 },
    zIndex: 1,
  },
  ctaTitle: {
    color: '#f4f8ff',
    fontSize: { xs: '2rem', sm: '2.4rem', md: '3.4rem' },
    textShadow: '0 10px 24px rgba(5,14,24,0.4)',
  },
  ctaLead: {
    color: '#eef6ff',
    fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
    textShadow: '0 8px 20px rgba(5,14,24,0.35)',
  },
  ctaPrimaryButton: {
    bgcolor: 'rgba(255,255,255,0.95)',
    color: '#0b1b2b',
    fontWeight: 700,
    px: 4,
    py: 1.5,
    boxShadow: '0 16px 30px rgba(15, 38, 68, 0.22)',
    '&:hover': { bgcolor: '#ffffff' },
  },
  ctaSecondaryButton: {
    borderColor: 'rgba(255,255,255,0.6)',
    color: 'common.white',
    px: 4,
    py: 1.5,
    backdropFilter: 'blur(6px)',
    '&:hover': { borderColor: '#ffffff', color: '#ffffff' },
  },
}

export default styles
