'use client'

import { AccessTime, Public, Thermostat } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

type ImportanceText = {
  title: string
  item1Title: string
  item1Body: string
  item2TitleLine1: string
  item2TitleLine2: string
  item2Body: string
  item3Title: string
  item3Body: string
}

const importanceText: Record<Locale, ImportanceText> = {
  ja: {
    title: '守る理由',
    item1Title: '変化の影響を受けやすい',
    item1Body: '海氷の変化は、暮らしや体調に大きく関わります。',
    item2TitleLine1: '北極の変化は',
    item2TitleLine2: '世界にもつながる',
    item2Body: '氷が減ると地表で反射される光が減り、地球が暖まりやすくなると考えられています。',
    item3Title: '小さな行動が支えになる',
    item3Body: '知る人が少しずつ増えることで、保護を支える動きも広がっていきます。',
  },
  en: {
    title: 'Why It Matters',
    item1Title: 'They feel change first',
    item1Body: 'Sea ice shifts directly affect daily survival.',
    item2TitleLine1: 'Arctic change',
    item2TitleLine2: 'affects the planet',
    item2Body: 'Less ice means less reflection and faster global warming.',
    item3Title: 'Small actions scale',
    item3Body: 'As more people understand, support grows stronger.',
  },
  zh: {
    title: '守护它们的理由很简单',
    item1Title: '它们最先承受变化',
    item1Body: '海冰变化会直接影响它们的日常生存。',
    item2TitleLine1: '北极的变化',
    item2TitleLine2: '会影响全球',
    item2Body: '海冰减少会降低反射率，让全球更容易升温。',
    item3Title: '小行动会扩散',
    item3Body: '理解的人越多，支持力量就越大。',
  },
}

export default function ImportanceSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = importanceText[locale]

  return (
    <Box component="section" sx={styles.importanceSection}>
      <Container maxWidth="lg">
        <Card sx={styles.importanceCard}>
          <CardContent sx={styles.importanceCardContent}>
            <Stack spacing={4} alignItems="center" textAlign="center">
              <Typography variant="h2" sx={styles.importanceTitle}>
                {text.title}
              </Typography>
              <Box sx={styles.importanceGrid}>
                <Stack
                  spacing={1.5}
                  alignItems="flex-start"
                  sx={styles.importanceItemCard}
                >
                  <Public sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    {text.item1Title}
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    {text.item1Body}
                  </Typography>
                </Stack>
                <Stack
                  spacing={1.5}
                  alignItems="flex-start"
                  sx={styles.importanceItemCard}
                >
                  <Thermostat sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    {text.item2TitleLine1}
                    <br />
                    {text.item2TitleLine2}
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    {text.item2Body}
                  </Typography>
                </Stack>
                <Stack
                  spacing={1.5}
                  alignItems="flex-start"
                  sx={styles.importanceItemCard}
                >
                  <AccessTime sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    {text.item3Title}
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    {text.item3Body}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
