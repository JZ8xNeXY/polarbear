'use client'

import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

const highlights = [
  {
    title: '北極の変化を伝える',
    body: '海氷の減少や生態の変化を、だれでも理解しやすい形で発信しています。',
  },
  {
    title: '学びの機会をつくる',
    body: '教育プログラムやイベントを通して、身近な行動につながる学びを広げています。',
  },
  {
    title: '現地とつながる',
    body: '研究者や地域の人びとと連携し、北極のいまを共有しています。',
  },
]

export default function PbiSection() {
  return (
    <Box component="section" id="pbi" sx={styles.pbiSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.pbiHeader}>
          <Typography variant="h2" sx={styles.pbiTitle}>
            Polar Bears International を応援しよう
          </Typography>
          <Typography sx={styles.pbiLead} align="center">
            PBI（Polar Bears International）は、ホッキョクグマを守ることに特化した国際団体です。
            北極の変化を伝え、学びや行動につながるきっかけを届けています。
          </Typography>
          <Typography sx={styles.pbiBody} align="center">
            寄付などの支援も受け付けており、北極の現状を伝える活動や学びの機会づくりを
            ひろげています。保護の輪を広げるために、あなたの力を貸してください。
          </Typography>
        </Stack>
        <Box sx={styles.pbiGrid}>
          {highlights.map((item) => (
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
          まずは公式サイトで活動内容をチェックしてみてください。
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
            公式サイトへ
          </Button>
          <Button
            href="https://polarbearsinternational.org/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            sx={styles.pbiSecondaryButton}
          >
            寄付について見る
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
