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
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const aboutItems = [
  {
    icon: (
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '20px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(124, 214, 255, 0.18)',
          border: '1px solid rgba(47,143,212,0.25)',
          boxShadow: '0 12px 24px rgba(12, 34, 60, 0.12)',
        }}
      >
        <AcUnit sx={{ fontSize: 36, color: 'var(--accent-ice)' }} />
      </Box>
    ),
    title: '生息地は北極圏',
    body: '海氷の上で狩りをし、春から夏にかけて子育てします。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '20px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(124, 214, 255, 0.18)',
          border: '1px solid rgba(47,143,212,0.25)',
          boxShadow: '0 12px 24px rgba(12, 34, 60, 0.12)',
        }}
      >
        <Restaurant sx={{ fontSize: 36, color: 'var(--accent-ice)' }} />
      </Box>
    ),
    title: '主食はアザラシ',
    body: '氷があることで獲物に近づける、生態の要となる環境です。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '20px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(124, 214, 255, 0.18)',
          border: '1px solid rgba(47,143,212,0.25)',
          boxShadow: '0 12px 24px rgba(12, 34, 60, 0.12)',
        }}
      >
        <Public sx={{ fontSize: 36, color: 'var(--accent-ice)' }} />
      </Box>
    ),
    title: '北極の指標種',
    body: 'ホッキョクグマの変化は、地球全体の変化のサインです。',
  },
]

const threatCards = [
  {
    icon: (
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '18px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(231, 111, 81, 0.12)',
          border: '1px solid rgba(231,111,81,0.3)',
          boxShadow: '0 10px 22px rgba(231, 111, 81, 0.16)',
        }}
      >
        <TrendingDown sx={{ fontSize: 32, color: '#e76f51' }} />
      </Box>
    ),
    title: '海氷の減少',
    body: '40年で海氷面積が大幅に減り、狩りの機会が縮小しています。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '18px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(47, 143, 212, 0.12)',
          border: '1px solid rgba(47,143,212,0.28)',
          boxShadow: '0 10px 22px rgba(47, 143, 212, 0.16)',
        }}
      >
        <Waves sx={{ fontSize: 32, color: '#2f8fd4' }} />
      </Box>
    ),
    title: '長距離の移動',
    body: '氷が離れることで、子グマには命がけの泳ぎが必要に。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: '18px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(245, 158, 11, 0.12)',
          border: '1px solid rgba(245,158,11,0.3)',
          boxShadow: '0 10px 22px rgba(245, 158, 11, 0.16)',
        }}
      >
        <TrendingUp sx={{ fontSize: 32, color: '#f59e0b' }} />
      </Box>
    ),
    title: '個体数の減少',
    body: '2050年までに30%の減少が予測されています。',
  },
]

const actionItems = [
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '22px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(76, 175, 80, 0.15)',
          border: '1px solid rgba(76,175,80,0.3)',
          boxShadow: '0 12px 26px rgba(76, 175, 80, 0.18)',
        }}
      >
        <NaturePeople sx={{ fontSize: 36, color: '#4caf50' }} />
      </Box>
    ),
    title: 'CO2を減らす',
    body: '電力や移動手段の見直しで排出削減に参加できます。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '22px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(47, 143, 212, 0.15)',
          border: '1px solid rgba(47,143,212,0.3)',
          boxShadow: '0 12px 26px rgba(47, 143, 212, 0.18)',
        }}
      >
        <VolunteerActivism sx={{ fontSize: 36, color: '#2f8fd4' }} />
      </Box>
    ),
    title: '支援する',
    body: '保護団体への寄付や継続支援が現場の力になります。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '22px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(47, 111, 159, 0.15)',
          border: '1px solid rgba(47,111,159,0.3)',
          boxShadow: '0 12px 26px rgba(47, 111, 159, 0.18)',
        }}
      >
        <Campaign sx={{ fontSize: 36, color: '#2f6f9f' }} />
      </Box>
    ),
    title: '声を広げる',
    body: 'SNSや地域でのシェアが、行動の輪を広げます。',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '22px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245,158,11,0.3)',
          boxShadow: '0 12px 26px rgba(245, 158, 11, 0.18)',
        }}
      >
        <MenuBook sx={{ fontSize: 36, color: '#f59e0b' }} />
      </Box>
    ),
    title: '学び伝える',
    body: '子どもや仲間に現状を伝え、次世代の意識を育てます。',
  },
]

export default function Home() {
  return (
    <Box component="main" id="main" sx={{ bgcolor: 'background.default' }}>
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
            style={{
              objectFit: 'cover',
              filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
            }}
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
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(1200px 420px at 15% 10%, rgba(124,214,255,0.35) 0%, rgba(124,214,255,0) 70%), radial-gradient(900px 320px at 80% 5%, rgba(123,237,190,0.25) 0%, rgba(123,237,190,0) 65%)',
            mixBlendMode: 'screen',
            opacity: 0.7,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <Box className="ice-drift" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack
            spacing={{ xs: 3, md: 4 }}
            sx={{ maxWidth: 1280, textAlign: { xs: 'center', md: 'left' } }}
          >
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
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.1rem', md: '5rem' },
                letterSpacing: { xs: '-0.02em', md: '-0.03em' },
                lineHeight: { xs: 1.1, md: 1.05 },
                textShadow: '0 14px 32px rgba(7,11,18,0.45)',
              }}
            >
              ホッキョクグマを守るために
              <br />
              いま知ることから始めよう
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                letterSpacing: '0.01em',
                lineHeight: 1.7,
                color: '#f1f6ff',
                textShadow: '0 10px 24px rgba(7,11,18,0.35)',
              }}
            >
              ホッキョクグマは北極の海氷に依存する生き物。氷が減ることで食料や
              子育ての場が失われています。
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}
            >
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
                fullWidth
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
                fullWidth
              >
                できることを見る
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        id="about"
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: -40, md: -60 },
            left: 0,
            right: 0,
            height: { xs: 60, md: 90 },
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 720, mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.3rem', md: '3.2rem' } }}>
              1分でわかるホッキョクグマ
            </Typography>
            <Typography sx={{ color: '#2f4257', fontSize: '1.1rem' }}>
              北極圏の海氷があるからこそ成り立つ生活。氷の減少は食料確保や子育てに直結します。
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {aboutItems.map((item) => (
              <Card
                key={item.title}
                sx={{
                  bgcolor: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 4,
                  boxShadow: 'var(--glass-shadow)',
                  backdropFilter: 'blur(16px)',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    {item.icon}
                    <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#304357' }}>{item.body}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        id="threats"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: 'transparent',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: { xs: -50, md: -70 },
            height: { xs: 80, md: 120 },
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(230,241,255,0.85) 100%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 5,
              alignItems: 'stretch',
              mb: 8,
            }}
          >
            <Card
              sx={{
                flex: 1,
                bgcolor: 'rgba(255, 241, 232, 0.85)',
                borderRadius: 5,
                border: '1px solid rgba(231,111,81,0.35)',
                boxShadow: 'var(--glass-shadow)',
                backdropFilter: 'blur(12px)',
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
            <Box
              sx={{
                position: 'relative',
                flex: 1,
                borderRadius: 5,
                overflow: 'hidden',
                minHeight: 360,
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
              }}
            >
              <Image
                src="/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg"
                alt="氷が割れる北極のイメージ"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 100%)',
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {threatCards.map((item) => (
              <Card
                key={item.title}
                sx={{
                  bgcolor: 'var(--glass)',
                  borderRadius: 4,
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  backdropFilter: 'blur(14px)',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    {item.icon}
                    <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#304357' }}>{item.body}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: { xs: -40, md: -60 },
            height: { xs: 70, md: 100 },
            background:
              'linear-gradient(180deg, rgba(230,241,255,0.85) 0%, rgba(255,255,255,0) 100%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.4rem' } }}>
              データが語る現実
            </Typography>
            <Typography sx={{ color: '#2f4257' }}>
              数字で見ると、変化のスピードがより鮮明にわかります。
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: 5,
                overflow: 'hidden',
                minHeight: { xs: 240, sm: 280, md: 320 },
                boxShadow: 'var(--glass-shadow)',
              }}
            >
              <Image
                src="/images/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg"
                alt="親子のホッキョクグマ"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10,20,30,0.1) 0%, rgba(10,20,30,0.9) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    bgcolor: 'rgba(7,11,18,0.55)',
                    borderRadius: 3,
                    mb: 3,
                    ml: 3,
                    border: '1px solid rgba(255,255,255,0.15)',
                    maxWidth: 360,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{ color: '#eef6ff', fontSize: '2.5rem', textShadow: '0 6px 16px rgba(3,8,14,0.5)' }}
                  >
                    約26,000頭
                  </Typography>
                  <Typography sx={{ color: '#eef6ff', textShadow: '0 6px 16px rgba(3,8,14,0.45)' }}>
                    推定される現在の生息数
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 5,
                overflow: 'hidden',
                minHeight: { xs: 240, sm: 280, md: 320 },
                boxShadow: 'var(--glass-shadow)',
              }}
            >
              <Image
                src="/images/isaac-demeester-W-r1PbcRB2c-unsplash.jpg"
                alt="海氷の縮小イメージ"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(10,20,30,0.1) 0%, rgba(10,20,30,0.9) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    bgcolor: 'rgba(7,11,18,0.55)',
                    borderRadius: 3,
                    mb: 3,
                    ml: 3,
                    border: '1px solid rgba(255,255,255,0.15)',
                    maxWidth: 360,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{ color: '#eef6ff', fontSize: '2.5rem', textShadow: '0 6px 16px rgba(3,8,14,0.5)' }}
                  >
                    +1か月
                  </Typography>
                  <Typography sx={{ color: '#eef6ff', textShadow: '0 6px 16px rgba(3,8,14,0.45)' }}>
                    10年で延びた海氷のない期間
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: -50, md: -70 },
            left: 0,
            right: 0,
            height: { xs: 80, md: 120 },
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(245,250,255,0.9) 100%)',
          },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              bgcolor: 'var(--glass-strong)',
              borderRadius: 6,
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 8 } }}>
              <Stack spacing={4} alignItems="center" textAlign="center">
                <FlashOn sx={{ fontSize: 56, color: '#f59e0b' }} />
                <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '3.2rem' } }}>
                  なぜ今、守る必要があるのか
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 3,
                  }}
                >
                  <Stack spacing={1} alignItems="center">
                    <Public sx={{ fontSize: 48, color: '#2f8fd4' }} />
                    <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                      生態系の頂点
                    </Typography>
                    <Typography sx={{ color: '#304357' }}>
                      北極のバランスを保つ重要な存在です。
                    </Typography>
                  </Stack>
                  <Stack spacing={1} alignItems="center">
                    <Thermostat sx={{ fontSize: 48, color: '#2f8fd4' }} />
                    <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                      気候変動の指標
                    </Typography>
                    <Typography sx={{ color: '#304357' }}>
                      変化のスピードを示す警告サインになります。
                    </Typography>
                  </Stack>
                  <Stack spacing={1} alignItems="center">
                    <AccessTime sx={{ fontSize: 48, color: '#2f8fd4' }} />
                    <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                      今の10年が鍵
                    </Typography>
                    <Typography sx={{ color: '#304357' }}>
                      対策の成否を左右する重要な期間です。
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Box
        component="section"
        id="action"
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: { xs: -50, md: -70 },
            height: { xs: 90, md: 120 },
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(230,241,255,0.9) 100%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.4rem' } }}>
              いま、できること
            </Typography>
            <Typography sx={{ color: '#2f4257' }}>
              行動は小さくても、積み重なれば未来を変えられます。
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {actionItems.map((item) => (
              <Card
                key={item.title}
                sx={{
                  bgcolor: 'var(--glass)',
                  borderRadius: 5,
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                  backdropFilter: 'blur(14px)',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={2}>
                    {item.icon}
                    <Typography variant="h3" sx={{ fontSize: '1.6rem' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#304357' }}>{item.body}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: -50, md: -70 },
            left: 0,
            right: 0,
            height: { xs: 80, md: 120 },
            background:
              'linear-gradient(180deg, rgba(230,241,255,0.9) 0%, rgba(255,255,255,0) 100%)',
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              position: 'relative',
              borderRadius: 6,
              overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
            }}
          >
            <Image
              src="/images/dina-badamshina-QzAsrauG2rM-unsplash.jpg"
              alt="北極のコミュニティを象徴するイメージ"
              fill
              sizes="(min-width: 900px) 720px, 100vw"
              style={{
                objectFit: 'cover',
                filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(6,18,32,0.35) 0%, rgba(6,18,32,0.85) 80%)',
              }}
            />
            <Stack spacing={3} sx={{ position: 'relative', p: { xs: 3.5, md: 8 }, zIndex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#f4f8ff',
                  fontSize: { xs: '2rem', sm: '2.4rem', md: '3.4rem' },
                  textShadow: '0 10px 24px rgba(5,14,24,0.4)',
                }}
              >
                小さな行動が未来を変える
              </Typography>
              <Typography
                sx={{
                  color: '#eef6ff',
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  textShadow: '0 8px 20px rgba(5,14,24,0.35)',
                }}
              >
                一人ひとりの選択が、ホッキョクグマと北極の未来を守ります。
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.95)',
                    color: '#0b1b2b',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    boxShadow: '0 16px 30px rgba(15, 38, 68, 0.22)',
                    '&:hover': { bgcolor: '#ffffff' },
                  }}
                  fullWidth
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
                    backdropFilter: 'blur(6px)',
                    '&:hover': { borderColor: '#ffffff', color: '#ffffff' },
                  }}
                  fullWidth
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
