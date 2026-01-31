'use client'

import { Campaign, MenuBook, NaturePeople, VolunteerActivism } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

const actionItems = [
  {
    icon: (
      <Box sx={styles.actionIconChipGreen}>
        <NaturePeople sx={styles.actionIconGreen} />
      </Box>
    ),
    title: 'エネルギーの使い方を見直す',
    body: '電力や移動、断熱など、できるところから始められます。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipBlue}>
        <VolunteerActivism sx={styles.actionIconBlue} />
      </Box>
    ),
    title: '現場の活動を支える',
    body: '調査や保全は続けることが大切です。\n信頼できる団体を、無理のない範囲で支える方法もあります。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipSteel}>
        <Campaign sx={styles.actionIconSteel} />
      </Box>
    ),
    title: '誰かに伝える',
    body: '「海氷は狩りの足場」という一言だけでも、伝わりやすくなります。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipAmber}>
        <MenuBook sx={styles.actionIconAmber} />
      </Box>
    ),
    title: 'ゆっくり学ぶ',
    body: 'データの見方を少し知るだけで、情報に振り回されにくくなります。',
  },
]

export default function ActionSection() {
  return (
    <Box component="section" id="action" sx={styles.actionSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.actionHeader}>
          <Typography variant="h2" sx={styles.actionTitle}>
            今日からできること
          </Typography>
          <Typography sx={styles.actionLead}>
            知ることは第一歩。次は「原因に近いところを減らす行動」と「現場を支える行動」から、できそうなものを選びましょう。
          </Typography>
        </Stack>
        <Box sx={styles.actionGrid}>
          {actionItems.map((item) => (
            <Card key={item.title} sx={styles.actionCard}>
              <CardContent sx={styles.actionCardContent}>
                <Stack spacing={2}>
                  {item.icon}
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
