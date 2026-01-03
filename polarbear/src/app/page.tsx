'use client'

import Image from 'next/image'
import {
  AccessTime,
  AcUnit,
  Campaign,
  NaturePeople,
  FlashOn,
  KeyboardArrowDown,
  MenuBook,
  Public,
  Restaurant,
  Thermostat,
  TrendingDown,
  TrendingUp,
  VolunteerActivism,
  Waves,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const aboutItems = [
  {
    icon: <AcUnit sx={{ fontSize: 44, color: 'var(--accent-ice)' }} />,
    title: '生息地は北極圏',
    body: '海氷の上で狩りをし、春から夏にかけて子育てします。',
  },
  {
    icon: <Restaurant sx={{ fontSize: 44, color: 'var(--accent-ice)' }} />,
    title: '主食はアザラシ',
    body: '氷があることで獲物に近づける、生態の要となる環境です。',
  },
  {
    icon: <Public sx={{ fontSize: 44, color: 'var(--accent-ice)' }} />,
    title: '北極の指標種',
    body: 'ホッキョクグマの変化は、地球全体の変化のサインです。',
  },
]

const threatCards = [
  {
    icon: <TrendingDown sx={{ fontSize: 40, color: '#e76f51' }} />,
    title: '海氷の減少',
    body: '40年で海氷面積が大幅に減り、狩りの機会が縮小しています。',
  },
  {
    icon: <Waves sx={{ fontSize: 40, color: '#2f8fd4' }} />,
    title: '長距離の移動',
    body: '氷が離れることで、子グマには命がけの泳ぎが必要に。',
  },
  {
    icon: <TrendingUp sx={{ fontSize: 40, color: '#f59e0b' }} />,
    title: '個体数の減少',
    body: '2050年までに30%の減少が予測されています。',
  },
]

const actionItems = [
  {
    icon: <NaturePeople sx={{ fontSize: 46, color: '#4caf50' }} />,
    title: 'CO2を減らす',
    body: '電力や移動手段の見直しで排出削減に参加できます。',
  },
  {
    icon: <VolunteerActivism sx={{ fontSize: 46, color: '#2f8fd4' }} />,
    title: '支援する',
    body: '保護団体への寄付や継続支援が現場の力になります。',
  },
  {
    icon: <Campaign sx={{ fontSize: 46, color: '#2f6f9f' }} />,
    title: '声を広げる',
    body: 'SNSや地域でのシェアが、行動の輪を広げます。',
  },
  {
    icon: <MenuBook sx={{ fontSize: 46, color: '#f59e0b' }} />,
    title: '学び伝える',
    body: '子どもや仲間に現状を伝え、次世代の意識を育てます。',
  },
]

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Header />

      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'common.white',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            aria-hidden
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(7,11,18,0.7) 0%, rgba(7,11,18,0.95) 80%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack spacing={4} sx={{ maxWidth: 1280 }}>
            <Chip
              label="ホッキョクグマについて知る"
              sx={{
                bgcolor: 'rgba(124,214,255,0.2)',
                color: 'var(--accent-ice)',
                border: '1px solid rgba(47,143,212,0.3)',
                width: 'fit-content',
                fontWeight: 600,
              }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' } }}>
              ホッキョクグマを守るために
              <br />
              いま知ることから始めよう
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.35rem' }, color: '#cfe9ff' }}>
              ホッキョクグマは北極の海氷に依存する生き物。氷が減ることで食料や
              子育ての場が失われています。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                href="#threats"
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowDown />}
                sx={{
                bgcolor: '#7fd1ff',
                color: '#04111f',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                '&:hover': { bgcolor: '#a5e3ff' },
                }}
              >
                いま起きている変化
              </Button>
              <Button
                href="#action"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.6)',
                  color: 'common.white',
                  px: 4,
                  py: 1.5,
                  '&:hover': { borderColor: '#2f8fd4', color: '#2f8fd4' },
                }}
              >
                できることを見る
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="about" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 720, mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.3rem', md: '3.2rem' } }}>
              1分でわかるホッキョクグマ
            </Typography>
            <Typography sx={{ color: '#415167', fontSize: '1.1rem' }}>
              北極圏の海氷があるからこそ成り立つ生活。氷の減少は食料確保や子育てに直結します。
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {aboutItems.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  sx={{
                    bgcolor: 'var(--surface-1)',
                    border: '1px solid rgba(47,143,212,0.2)',
                    borderRadius: 4,
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      {item.icon}
                      <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: '#46586d' }}>{item.body}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="threats" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#edf5ff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  bgcolor: '#fff0e9',
                  borderRadius: 5,
                  border: '1px solid rgba(231,111,81,0.35)',
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Stack spacing={3}>
                    <TrendingDown sx={{ fontSize: 56, color: '#e76f51' }} />
                    <Typography variant="h2" sx={{ fontSize: '3rem' }}>
                      海氷は約40%減少
                    </Typography>
                    <Typography sx={{ color: '#7a5b51', fontSize: '1.2rem' }}>
                      夏季の海氷は過去40年で大幅に縮小。狩りの場が失われています。
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 5,
                  overflow: 'hidden',
                  minHeight: 360,
                  border: '1px solid rgba(47,143,212,0.2)',
                }}
              >
                <Image
                  src="/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg"
                  alt="氷が割れる北極のイメージ"
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 100%)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {threatCards.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  sx={{
                    bgcolor: 'var(--surface-1)',
                    borderRadius: 4,
                    border: '1px solid rgba(47,143,212,0.12)',
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      {item.icon}
                      <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: '#46586d' }}>{item.body}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.4rem' } }}>
              データが語る現実
            </Typography>
            <Typography sx={{ color: '#42566b' }}>
              数字で見ると、変化のスピードがより鮮明にわかります。
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 5,
                  overflow: 'hidden',
                  minHeight: 320,
                }}
              >
                <Image
                  src="/images/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg"
                  alt="親子のホッキョクグマ"
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(10,20,30,0.75) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h2" sx={{ fontSize: '2.5rem' }}>
                      約26,000頭
                    </Typography>
                    <Typography sx={{ color: '#d6e6f4' }}>推定される現在の生息数</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 5,
                  overflow: 'hidden',
                  minHeight: 320,
                }}
              >
                <Image
                  src="/images/isaac-demeester-W-r1PbcRB2c-unsplash.jpg"
                  alt="海氷の縮小イメージ"
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(10,20,30,0.75) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h2" sx={{ fontSize: '2.5rem' }}>
                      +1か月
                    </Typography>
                    <Typography sx={{ color: '#d6e6f4' }}>
                      10年で延びた海氷のない期間
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f2f7ff' }}>
        <Container maxWidth="md">
          <Card
            sx={{
              bgcolor: 'var(--surface-1)',
              borderRadius: 6,
              border: '1px solid rgba(47,143,212,0.2)',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 8 } }}>
              <Stack spacing={4} alignItems="center" textAlign="center">
                <FlashOn sx={{ fontSize: 56, color: '#f59e0b' }} />
                <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' } }}>
                  なぜ今、守る必要があるのか
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1} alignItems="center">
                      <Public sx={{ fontSize: 48, color: '#2f8fd4' }} />
                      <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                        生態系の頂点
                      </Typography>
                      <Typography sx={{ color: '#46586d' }}>
                        北極のバランスを保つ重要な存在です。
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1} alignItems="center">
                      <Thermostat sx={{ fontSize: 48, color: '#2f8fd4' }} />
                      <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                        気候変動の指標
                      </Typography>
                      <Typography sx={{ color: '#46586d' }}>
                        変化のスピードを示す警告サインになります。
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1} alignItems="center">
                      <AccessTime sx={{ fontSize: 48, color: '#2f8fd4' }} />
                      <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                        今の10年が鍵
                      </Typography>
                      <Typography sx={{ color: '#46586d' }}>
                        対策の成否を左右する重要な期間です。
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box component="section" id="action" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.4rem' } }}>
              いま、できること
            </Typography>
            <Typography sx={{ color: '#42566b' }}>
              行動は小さくても、積み重なれば未来を変えられます。
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {actionItems.map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <Card
                  sx={{
                    bgcolor: 'var(--surface-1)',
                    borderRadius: 5,
                    border: '1px solid rgba(47,143,212,0.12)',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack spacing={2}>
                      {item.icon}
                      <Typography variant="h3" sx={{ fontSize: '1.6rem' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: '#46586d' }}>{item.body}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#e8f1ff' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              position: 'relative',
              borderRadius: 6,
              overflow: 'hidden',
              border: '1px solid rgba(47,143,212,0.2)',
            }}
          >
            <Image
              src="/images/dina-badamshina-QzAsrauG2rM-unsplash.jpg"
              alt="北極のコミュニティを象徴するイメージ"
              fill
              sizes="(min-width: 900px) 720px, 100vw"
              style={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(6,18,32,0.35) 0%, rgba(6,18,32,0.85) 80%)',
              }}
            />
            <Stack spacing={3} sx={{ position: 'relative', p: { xs: 4, md: 8 }, zIndex: 1 }}>
              <Typography variant="h2" sx={{ color:'#cfe9ff', fontSize: { xs: '2.4rem', md: '3.4rem' } }}>
                小さな行動が未来を変える
              </Typography>
              <Typography sx={{ color: '#cfe9ff', fontSize: '1.1rem' }}>
                一人ひとりの選択が、ホッキョクグマと北極の未来を守ります。
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#7fd1ff',
                    color: '#04111f',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    '&:hover': { bgcolor: '#a5e3ff' },
                  }}
                >
                  今すぐ始める
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.6)',
                    color: 'common.white',
                    px: 4,
                    py: 1.5,
                    '&:hover': { borderColor: '#7fd1ff', color: '#7fd1ff' },
                  }}
                >
                  詳しく知る
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}
