import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Paper,
} from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* ヒーローセクション */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #0288d1 100%)',
            color: 'white',
            py: 10,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              ホッキョクグマを守ろう
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              地球温暖化により、ホッキョクグマの生息地が危機に瀕しています
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#action"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              私たちにできること
            </Button>
          </Container>
        </Box>

        {/* ホッキョクグマについて */}
        <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
              ホッキョクグマについて
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      現状
                    </Typography>
                    <Typography variant="body1" paragraph>
                      ホッキョクグマは北極圏に生息する最大の陸上肉食動物です。
                      現在、約22,000〜31,000頭が生息していると推定されています。
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      生息地
                    </Typography>
                    <Typography variant="body1" paragraph>
                      カナダ、グリーンランド、ノルウェー、ロシア、アメリカ（アラスカ）の
                      北極圏に分布しています。海氷が重要な生息環境です。
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* 脅威 */}
        <Box id="threats" sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
              脅威
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h5" gutterBottom color="error">
                    地球温暖化
                  </Typography>
                  <Typography variant="body1">
                    海氷の減少により、狩りの機会が減り、栄養不足に陥っています。
                    生息地の縮小が深刻な問題となっています。
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h5" gutterBottom color="error">
                    環境汚染
                  </Typography>
                  <Typography variant="body1">
                    有害化学物質が食物連鎖を通じて蓄積され、
                    繁殖能力や免疫システムに影響を与えています。
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h5" gutterBottom color="error">
                    人間活動
                  </Typography>
                  <Typography variant="body1">
                    石油・ガス開発、観光、航路の増加が
                    生息地を脅かしています。
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* 私たちにできること */}
        <Box id="action" sx={{ py: 8, backgroundColor: 'background.default' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
              私たちにできること
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      環境に配慮した生活
                    </Typography>
                    <Typography variant="body1" paragraph>
                      ・省エネを心がける
                      <br />
                      ・再生可能エネルギーを選択
                      <br />
                      ・公共交通機関を利用
                      <br />
                      ・プラスチック使用を減らす
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      情報を共有する
                    </Typography>
                    <Typography variant="body1" paragraph>
                      ・ホッキョクグマの現状を周囲に伝える
                      <br />
                      ・環境保護団体を支援
                      <br />
                      ・SNSで情報を拡散
                      <br />
                      ・環境保護活動に参加
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
