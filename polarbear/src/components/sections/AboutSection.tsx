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
      'カナダ、グリーンランド、ノルウェー、ロシア、アラスカ周辺に暮らしています。地域ごとに様子が違うので、グループ（個体群）単位で見守られています。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Restaurant sx={styles.aboutIcon} />
      </Box>
    ),
    title: 'どうやって食べる？',
    body: '主にアザラシを食べます。海氷の上からそっと狩りをするのが得意です。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Public sx={styles.aboutIcon} />
      </Box>
    ),
    title: '子育ては？',
    body: '母グマは雪の中に巣穴をつくって出産します。子グマは数年かけて、くらし方を覚えていきます。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Straighten sx={styles.aboutIcon} />
      </Box>
    ),
    title: '体の特徴は？',
    body: 'オスは体長2.5mほど、体重は400〜600kgくらい。白く見える毛は透明で、黒い皮膚が熱を吸収します。大きな足は雪の上を歩きやすく、泳ぐときはパドル役です。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Pool sx={styles.aboutIcon} />
      </Box>
    ),
    title: '泳ぎは得意？',
    body: '長い距離を泳ぐこともあります。学名「Ursus maritimus」は「海のクマ」という意味。ただ、泳ぎ続けるのは体力が必要なので、海氷があるほうが助かります。',
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
            海氷といっしょに生きる
          </Typography>
          <Typography sx={styles.aboutLead}>
            ホッキョクグマは、海氷の上でアザラシを狩って暮らす“海のクマ”。大切なのは「寒さ」そのものではなく、海氷がいつ・どこに・どれだけ残るかなんです。
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
