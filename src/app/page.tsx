import { Box, Container, Stack, Typography } from '@mui/material';
import MFCButton from '@/component/templates/MFCButton';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmailIcon from '@mui/icons-material/Email';
import MFCFeatures from '@/component/templates/MFCFeatures';

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: "#FFF8E7" }}>
      <Box sx={{ padding: { xs: "30px 10px", sm: "10px", md: "10px" } }}>
        <Container maxWidth="md">
          <Stack direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }} alignItems="center">
            <Stack spacing={3} alignItems="center">
              <Box>
                <Box component="h1" 
                sx={{ fontWeight:"bold", color:"#1C2B58", textAlign: { xs: "center", sm: "center", md: "left" } }}>
                  <Box component="span" sx={{ display: "inline-block" }}>フランチャイズ</Box>
                  <Box component="span" sx={{ display: "inline-block" }}>オーナーで</Box>
                  <Box component="span" sx={{ display: "inline-block" }}>共に社会貢献を。</Box>
                </Box>
              </Box>
              <Box sx={{ color: "#1C2B58", textAlign: { xs: "center", sm: "center", md: "left" } }}>
                <Box component="span" sx={{ display: "inline-block" }}>土地をお持ちの経営者、法人様へ</Box>
                <Box component="span" sx={{ display: "inline-block" }}>不正駐輪撲滅を実現し、</Box>
                <Box component="span" sx={{ display: "inline-block" }}>誰もが安心して暮らせるまちづくりを</Box>
              </Box>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={1}>
                <MFCButton 
                  href="/reservation" 
                  startIcon={<EditCalendarIcon />} 
                  isRound={true} 
                  sx={{ width: 200, backgroundColor: "#1C2B58", color: "#fff", "&:hover": {
                    backgroundColor: "#1C2B58"
                  } }}
                >説明会を予約する</MFCButton>
                <MFCButton 
                  href="/contact" 
                  startIcon={<EmailIcon />} 
                  isRound={true} 
                  sx={{ width: 200, backgroundColor: "#B01A1A", color: "#fff", "&:hover": {
                    backgroundColor: "#B01A1A"
                  } }}
                >お問い合わせ</MFCButton>
              </Stack>
            </Stack>
            <Box display={{ xs: "none", sm: "block" }}>
              <img src="/images/top/fv-main.png" alt="FV" width={447} height={447} />
            </Box>
            <Box display={{ xs: "block", sm: "none" }}>
              <img src="/images/top/fv-main.png" alt="FV" width={200} height={200} />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md" disableGutters={true}>
          <Stack alignItems="center">
            <Box sx={{
              '& img': {
                width: '100%',
                height: 'auto'
              }
            }}>
              <img src="/images/top/feature-bg.jpg" width={908} height={327} alt="みんちゅうSHARE-LINフランチャイズの特徴" />
            </Box>
            <MFCFeatures />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}