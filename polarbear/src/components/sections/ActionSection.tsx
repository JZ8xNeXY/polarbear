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
    title: '温室効果ガス排出量を減らす',
    body: '電力・移動・断熱など、効果が大きいところから始められます。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipBlue}>
        <VolunteerActivism sx={styles.actionIconBlue} />
      </Box>
    ),
    title: '保護活動を支援する',
    body: '調査・保全は継続が重要です。\n信頼できる団体を、継続的に支える選択肢があります。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipSteel}>
        <Campaign sx={styles.actionIconSteel} />
      </Box>
    ),
    title: '伝える',
    body: '「海氷＝狩りの足場」という一言だけでも共有すると、理解が進みます。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipAmber}>
        <MenuBook sx={styles.actionIconAmber} />
      </Box>
    ),
    title: '学ぶ',
    body: 'データの見方を少し知るだけで、情報に振り回されにくくなります。',
  },
]

export default function ActionSection() {
  return (
    <Box component="section" id="action" sx={styles.actionSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.actionHeader}>
          <Typography variant="h2" sx={styles.actionTitle}>
            守るために、できること
          </Typography>
          <Typography sx={styles.actionLead}>
            知ることは始まりです。次は「原因に近い行動」と「現場を支える行動」を選べます。
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
