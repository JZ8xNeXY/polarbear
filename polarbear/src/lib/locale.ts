export type Locale = 'ja' | 'en' | 'zh'

const SUPPORTED_LOCALES: Locale[] = ['ja', 'en', 'zh']

export function getLocaleFromPathname(pathname: string | null): Locale {
  if (!pathname) return 'ja'
  const [, first] = pathname.split('/')
  return SUPPORTED_LOCALES.includes(first as Locale) ? (first as Locale) : 'ja'
}

export function stripLocalePrefix(pathname: string | null): string {
  if (!pathname) return '/'
  const locale = getLocaleFromPathname(pathname)
  if (locale === 'ja') return pathname
  const stripped = pathname.replace(new RegExp(`^/${locale}`), '')
  return stripped === '' ? '/' : stripped
}

export function withLocale(pathname: string, locale: Locale): string {
  const base = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (locale === 'ja') return base
  return base === '/' ? `/${locale}` : `/${locale}${base}`
}
