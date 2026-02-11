'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { getLocaleFromPathname, stripLocalePrefix, type Locale, withLocale } from '@/lib/locale'

type HeaderText = {
  brand: string
  navIntro: string
  navArcticNow: string
  navAction: string
  navContact: string
  navTerms: string
  navPolicy: string
  langJa: string
  langEn: string
  langZh: string
  menuAria: string
}

const headerText: Record<Locale, HeaderText> = {
  ja: {
    brand: 'ホッキョクグマを守ろう',
    navIntro: 'はじめに',
    navArcticNow: 'いまの北極',
    navAction: 'できること',
    navContact: 'お問い合わせ',
    navTerms: '利用規約',
    navPolicy: 'サービスポリシー',
    langJa: '日本語',
    langEn: 'English',
    langZh: '中文',
    menuAria: 'メニュー',
  },
  en: {
    brand: 'Save Polar Bears',
    navIntro: 'Intro',
    navArcticNow: 'Arctic Now',
    navAction: 'Take Action',
    navContact: 'Contact',
    navTerms: 'Terms',
    navPolicy: 'Policy',
    langJa: '日本語',
    langEn: 'English',
    langZh: '中文',
    menuAria: 'Menu',
  },
  zh: {
    brand: '守护北极熊',
    navIntro: '入门',
    navArcticNow: '北极现状',
    navAction: '行动建议',
    navContact: '联系我们',
    navTerms: '使用条款',
    navPolicy: '服务政策',
    langJa: '日本語',
    langEn: 'English',
    langZh: '中文',
    menuAria: '菜单',
  },
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = headerText[locale]
  const currentPath = stripLocalePrefix(pathname)
  const homePath = withLocale('/', locale)

  const menuItems = [
    { label: text.navIntro, href: `${homePath}#about` },
    { label: text.navArcticNow, href: `${homePath}#threats` },
    { label: text.navAction, href: `${homePath}#action` },
    { label: text.navContact, href: withLocale('/contact', locale) },
    { label: text.navTerms, href: withLocale('/terms', locale) },
    { label: text.navPolicy, href: withLocale('/policy', locale) },
  ]
  const languageItems = [
    { locale: 'ja' as const, label: text.langJa, href: withLocale(currentPath, 'ja') },
    { locale: 'en' as const, label: text.langEn, href: withLocale(currentPath, 'en') },
    { locale: 'zh' as const, label: text.langZh, href: withLocale(currentPath, 'zh') },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          color: '#1b4566',
          borderBottom: '1px solid rgba(47,143,212,0.15)',
          height: { xs: 64, md: 72 },
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Typography
            variant="h6"
            component="a"
            href={homePath}
            sx={{ flexGrow: 1, fontWeight: 700, color: 'inherit' }}
          >
            {text.brand}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                color="inherit"
                sx={{ textTransform: 'none' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 2,
              pl: 2,
              gap: 0.5,
              borderLeft: '1px solid rgba(47,143,212,0.2)',
            }}
          >
            {languageItems.map((item) => (
              <Button
                key={item.locale}
                href={item.href}
                size="small"
                color="inherit"
                sx={{
                  textTransform: 'none',
                  minWidth: 'auto',
                  px: 1,
                  fontWeight: locale === item.locale ? 700 : 500,
                  textDecoration: locale === item.locale ? 'underline' : 'none',
                  opacity: locale === item.locale ? 1 : 0.8,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleMenuToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
            aria-label={text.menuAria}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton href={item.href} onClick={handleMenuClose}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            {languageItems.map((item) => (
              <ListItem key={item.locale} disablePadding>
                <ListItemButton href={item.href} onClick={handleMenuClose}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: locale === item.locale ? 700 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
