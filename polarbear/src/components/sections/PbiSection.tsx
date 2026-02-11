'use client'

import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

type PbiText = {
  title: string
  lead: string
  body: string
  highlights: Array<{ title: string; body: string }>
  note: string
  primaryCta: string
  secondaryCta: string
}

const pbiText: Record<Locale, PbiText> = {
  ja: {
    title: 'PBIの活動を知る',
    lead: 'PBI（Polar Bears International）は、ホッキョクグマ保護に取り組む国際団体です。北極の変化を伝え、行動につながる学びの場を広げています。',
    body: '公式サイトでは活動内容や支援方法を確認できます。関心のあるテーマからご覧ください。',
    highlights: [
      { title: '北極の変化を伝える', body: '海氷や生態の変化を、わかりやすく発信しています。' },
      { title: '学びの機会をつくる', body: '教育プログラムやイベントを通して、行動につながる学びを広げています。' },
      { title: '現地の声とつながる', body: '研究者や地域の人たちと連携し、北極の今を共有しています。' },
    ],
    note: '初めての方にも読みやすい内容です。',
    primaryCta: 'PBI公式サイトを見る',
    secondaryCta: '支援方法を確認する',
  },
  en: {
    title: 'Explore PBI',
    lead: 'PBI (Polar Bears International) is a global organization focused on polar bear conservation and practical education.',
    body: 'Their website explains current work and ways to support. Start by checking their projects.',
    highlights: [
      { title: 'Communicate Arctic Change', body: 'They share sea-ice and ecosystem changes in an easy-to-understand format.' },
      { title: 'Create Learning Opportunities', body: 'Programs and events help people turn knowledge into action.' },
      { title: 'Connect with Local Voices', body: 'They work with researchers and communities to share real Arctic updates.' },
    ],
    note: 'A clear starting point for first-time visitors.',
    primaryCta: 'Visit PBI',
    secondaryCta: 'See Ways to Support',
  },
  zh: {
    title: '了解 PBI 的行动',
    lead: 'PBI（Polar Bears International）是专注于北极熊保护的国际组织，持续推动传播与行动教育。',
    body: '在官网可以看到他们的项目和支持方式。先从了解他们正在做什么开始。',
    highlights: [
      { title: '传播北极变化', body: '用易懂方式介绍海冰和生态变化。' },
      { title: '提供学习机会', body: '通过课程和活动，把认知转化为行动。' },
      { title: '连接当地与研究者', body: '与研究团队和社区合作，分享北极一线信息。' },
    ],
    note: '对初次了解的人也很友好。',
    primaryCta: '访问 PBI 官网',
    secondaryCta: '查看支持方式',
  },
}

export default function PbiSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = pbiText[locale]

  return (
    <Box component="section" id="pbi" sx={styles.pbiSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.pbiHeader}>
          <Typography variant="h2" sx={styles.pbiTitle}>
            {text.title}
          </Typography>
          <Typography sx={styles.pbiLead} align="center">
            {text.lead}
          </Typography>
          <Typography sx={styles.pbiBody} align="center">
            {text.body}
          </Typography>
        </Stack>
        <Box sx={styles.pbiGrid}>
          {text.highlights.map((item) => (
            <Card key={item.title} sx={styles.pbiCard}>
              <CardContent>
                <Stack spacing={1.5}>
                  <Typography variant="h3" sx={styles.pbiCardTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.pbiCardBody}>{item.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Typography sx={styles.pbiNote}>
          {text.note}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={styles.pbiCta}>
          <Button
            href="https://polarbearsinternational.org/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={styles.pbiButton}
          >
            {text.primaryCta}
          </Button>
          <Button
            href="https://polarbearsinternational.org/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            sx={styles.pbiSecondaryButton}
          >
            {text.secondaryCta}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
