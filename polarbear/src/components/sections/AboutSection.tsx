'use client'

import { AcUnit, Pool, Public, Restaurant, Straighten, Timeline } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

const aboutItems = [
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <AcUnit sx={styles.aboutIcon} />
      </Box>
    ),
    title: 'どこにいる？',
    body:
      'カナダ、グリーンランド、ノルウェー、ロシア、アラスカ周辺に分布しています。地域ごとに状況が異なるため、通常は個体群（地域単位）で見守られています。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Restaurant sx={styles.aboutIcon} />
      </Box>
    ),
    title: 'どうやって食べる？',
    body: '主にアザラシを食べます。海氷を足場に、氷の上から静かに狩りをします。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Public sx={styles.aboutIcon} />
      </Box>
    ),
    title: '子育ては？',
    body: '母グマは雪の中に巣穴をつくって出産します。子グマは数年かけて、生き方を学びます。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Straighten sx={styles.aboutIcon} />
      </Box>
    ),
    title: '体の特徴は？',
    body: 'オスは体長2.5m、体重400〜600kg。白く見える毛は実は透明で、黒い皮膚が熱を吸収します。大きな足は雪上を歩きやすく、泳ぐときはパドルになります。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Pool sx={styles.aboutIcon} />
      </Box>
    ),
    title: '泳ぎは得意？',
    body: '100km以上を泳ぐことも。学名「Ursus maritimus」は「海のクマ」という意味です。ただし泳ぎすぎは体力を消耗するため、海氷があるほうが有利です。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Timeline sx={styles.aboutIcon} />
      </Box>
    ),
    title: '寿命は？',
    body: '野生では20〜25年ほど。メスは4〜5歳で初めて出産し、2〜3年おきに1〜3頭の子を育てます。子グマは2年以上、母グマと一緒に過ごします。',
  },
]

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={styles.aboutSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.aboutIntro}>
          <Typography variant="h2" sx={styles.aboutTitle}>
            海氷とともに生きる
          </Typography>
          <Typography sx={styles.aboutLead}>
            ホッキョクグマは、海氷の上でアザラシを狩って暮らす“海のクマ”です。大切なのは「寒さ」そのものではなく、海氷がいつ・どこに・どれだけ残るかです。
          </Typography>
        </Stack>
        <Box sx={styles.aboutGrid}>
          {aboutItems.map((item) => (
            <Card key={item.title} sx={styles.aboutCard}>
              <CardContent>
                <Stack spacing={2}>
                  {item.icon}
                  <Typography variant="h3" sx={styles.aboutCardTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.aboutCardBody}>{item.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
