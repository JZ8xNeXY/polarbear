'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
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
  Menu,
  MenuItem,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { getLocaleFromPathname, stripLocalePrefix, type Locale, withLocale } from '@/lib/locale'

type HeaderText = {
  brand: string
  navLearn: string
  navData: string
  navSupport: string
  navArticles: string
  navContact: string
  navTerms: string
  navPolicy: string
  langJa: string
  langEn: string
  langZh: string
  languageLabel: string
  menuAria: string
}

const headerText: Record<Locale, HeaderText> = {
  ja: {
    brand: 'ホッキョクグマを守ろう',
    navLearn: '基本を知る',
    navData: 'データを見る',
    navSupport: 'できること',
    navArticles: '読み物',
    navContact: 'お問い合わせ',
    navTerms: '利用規約',
    navPolicy: 'サービスポリシー',
    langJa: '日本語',
    langEn: 'English',
    langZh: '中文',
    languageLabel: '言語',
    menuAria: 'メニュー',
  },
  en: {
    brand: 'Save Polar Bears',
    navLearn: 'Learn',
    navData: 'Data',
    navSupport: 'Action',
    navArticles: 'Reading',
    navContact: 'Contact',
    navTerms: 'Terms',
    navPolicy: 'Policy',
    langJa: '日本語',
    langEn: 'English',
    langZh: '中文',
    languageLabel: 'Language',
    menuAria: 'Menu',
  },
  zh: {
    brand: '守护北极熊',
    navLearn: '基础知识',
    navData: '数据',
    navSupport: '行动建议',
    navArticles: '阅读',
    navContact: '联系我们',
    navTerms: '使用条款',
    navPolicy: '服务政策',
    langJa: '日本語',
    langEn: 'English',
    langZh: '中文',
    languageLabel: '语言',
    menuAria: '菜单',
  },
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = headerText[locale]
  const currentPath = stripLocalePrefix(pathname)
  const homePath = withLocale('/', locale)

  const menuItems = [
    { label: text.navLearn, href: withLocale('/learn', locale) },
    { label: text.navData, href: withLocale('/data', locale) },
    { label: text.navSupport, href: withLocale('/support', locale) },
    { label: text.navArticles, href: withLocale('/articles', locale) },
    { label: text.navContact, href: withLocale('/contact', locale) },
    { label: text.navTerms, href: withLocale('/terms', locale) },
    { label: text.navPolicy, href: withLocale('/policy', locale) },
  ]
  const languageItems = [
    { locale: 'ja' as const, label: text.langJa, href: withLocale(currentPath, 'ja') },
    { locale: 'en' as const, label: text.langEn, href: withLocale(currentPath, 'en') },
    { locale: 'zh' as const, label: text.langZh, href: withLocale(currentPath, 'zh') },
  ]
  const currentLanguageLabel =
    languageItems.find((item) => item.locale === locale)?.label ?? text.langJa
  const isLanguageMenuOpen = Boolean(languageAnchorEl)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null)
  }

  const handleLanguageChange = (href: string) => {
    setLanguageAnchorEl(null)
    setIsMenuOpen(false)
    router.push(href)
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
              borderLeft: '1px solid rgba(47,143,212,0.2)',
            }}
          >
            <Button
              size="small"
              color="inherit"
              onClick={handleLanguageMenuOpen}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {text.languageLabel}: {currentLanguageLabel}
            </Button>
            <Menu
              anchorEl={languageAnchorEl}
              open={isLanguageMenuOpen}
              onClose={handleLanguageMenuClose}
            >
              {languageItems.map((item) => (
                <MenuItem
                  key={item.locale}
                  selected={locale === item.locale}
                  onClick={() => handleLanguageChange(item.href)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
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
                <ListItemButton onClick={() => handleLanguageChange(item.href)}>
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
