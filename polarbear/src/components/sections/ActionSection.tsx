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
    title: 'CO2を減らす',
    body: '電力や移動手段の見直しで排出削減に参加できます。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipBlue}>
        <VolunteerActivism sx={styles.actionIconBlue} />
      </Box>
    ),
    title: '支援する',
    body: '保護団体への寄付や継続支援が現場の力になります。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipSteel}>
        <Campaign sx={styles.actionIconSteel} />
      </Box>
    ),
    title: '声を広げる',
    body: 'SNSや地域でのシェアが、行動の輪を広げます。',
  },
  {
    icon: (
      <Box sx={styles.actionIconChipAmber}>
        <MenuBook sx={styles.actionIconAmber} />
      </Box>
    ),
    title: '学び伝える',
    body: '子どもや仲間に現状を伝え、次世代の意識を育てます。',
  },
]

export default function ActionSection() {
  return (
    <Box component="section" id="action" sx={styles.actionSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.actionHeader}>
          <Typography variant="h2" sx={styles.actionTitle}>
            いま、できること
          </Typography>
          <Typography sx={styles.actionLead}>
            行動は小さくても、積み重なれば未来を変えられます。
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
