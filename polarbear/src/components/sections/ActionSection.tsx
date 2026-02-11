'use client'

import { Campaign, MenuBook, NaturePeople, VolunteerActivism } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

const actionIcons = [
  <Box key="action-icon-0" sx={styles.actionIconChipGreen}>
    <NaturePeople sx={styles.actionIconGreen} />
  </Box>,
  <Box key="action-icon-1" sx={styles.actionIconChipBlue}>
    <VolunteerActivism sx={styles.actionIconBlue} />
  </Box>,
  <Box key="action-icon-2" sx={styles.actionIconChipSteel}>
    <Campaign sx={styles.actionIconSteel} />
  </Box>,
  <Box key="action-icon-3" sx={styles.actionIconChipAmber}>
    <MenuBook sx={styles.actionIconAmber} />
  </Box>,
]

type ActionText = {
  title: string
  lead: string
  items: Array<{ title: string; body: string }>
}

const actionText: Record<Locale, ActionText> = {
  ja: {
    title: '今日からできること',
    lead: '完璧でなくて大丈夫。続けやすい一歩を選ぶことが、いちばん大切です。',
    items: [
      {
        title: '使うエネルギーを見直す',
        body: '電気・移動・断熱など、できるところから少しずつで大丈夫です。',
      },
      {
        title: '現場の活動を支える',
        body: '調査や保全は継続が大切です。\n信頼できる団体を、無理のない範囲で応援できます。',
      },
      {
        title: '身近な人にシェアする',
        body: '「海氷は狩りの足場」という一言だけでも、行動のきっかけになります。',
      },
      {
        title: '少しずつ学ぶ',
        body: '数字の見方を少し知るだけで、情報を落ち着いて判断しやすくなります。',
      },
    ],
  },
  en: {
    title: 'What You Can Do Today',
    lead: 'You do not need to be perfect. The best action is one you can keep doing.',
    items: [
      {
        title: 'Rethink Energy Use',
        body: 'Start small with electricity, transport, and home efficiency.',
      },
      {
        title: 'Support Field Work',
        body: 'Research and conservation need continuity.\nYou can support trusted groups at your own pace.',
      },
      {
        title: 'Share with People Nearby',
        body: 'Even one line like "sea ice is hunting ground" can spark action.',
      },
      {
        title: 'Learn Step by Step',
        body: 'A little data literacy helps you judge information calmly.',
      },
    ],
  },
  zh: {
    title: '今天就能做的事',
    lead: '不必追求完美。选择一个能长期坚持的小行动最重要。',
    items: [
      {
        title: '调整能源使用方式',
        body: '从用电、出行和保温等日常环节开始，小步前进就很好。',
      },
      {
        title: '支持一线保护行动',
        body: '科研和保护需要长期投入。\n你可以在能力范围内支持可信机构。',
      },
      {
        title: '分享给身边的人',
        body: '哪怕只说一句“海冰是捕猎平台”，也可能带来行动。',
      },
      {
        title: '循序渐进地学习',
        body: '懂一点数据阅读，就更容易冷静判断信息。',
      },
    ],
  },
}

export default function ActionSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = actionText[locale]

  return (
    <Box component="section" id="action" sx={styles.actionSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.actionHeader}>
          <Typography variant="h2" sx={styles.actionTitle}>
            {text.title}
          </Typography>
          <Typography sx={styles.actionLead}>
            {text.lead}
          </Typography>
        </Stack>
        <Box sx={styles.actionGrid}>
          {text.items.map((item, index) => (
            <Card key={item.title} sx={styles.actionCard}>
              <CardContent sx={styles.actionCardContent}>
                <Stack spacing={2}>
                  {actionIcons[index]}
                  <Typography variant="h3" sx={styles.actionCardTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.actionCardBody}>{item.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
