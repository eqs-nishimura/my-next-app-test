import { Box, Container, Stack, Typography } from '@mui/material';
import MFCButton from './MFCButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { ScrollZoom } from '@/component/ScrollZoom.client';
import { ScrollFade } from '../ScrollFade.client';

export default function MFCBookCTA() {
  return (
    <Box sx={{ position: "relative" }}>
        <Container>
            <Stack alignItems="center">
                    <Box sx={{
                        position: "absolute",
                        height: { xs: "100%", sm: "auto" },
                        zIndex: 0,
                        'img': {
                            width: '100%',
                            height: { xs: "100%", sm: "auto" },
                            objectFit: "cover",
                        }
                        }}>
                        <ScrollFade>
                        <img src="/images/top/bookcta_bg.jpg" width={908} height={336} alt="みんちゅうSHARE-LINフランチャイズ説明会予約" />
                        </ScrollFade>
                    </Box>
                <Stack spacing={4} sx={{ position: "relative", top: "50px", marginBottom: "100px" }}>
                    <ScrollZoom>
                        <Stack sx={{ color: "#fff", textAlign: "center", textShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)" }}>
                            <Box>みんちゅうSHARE-LINでフランチャイズ</Box>
                            <Typography sx={{ fontWeight: "bold" }} variant="h5" component="h2">まずはお気軽に仕組みや条件をご確認ください！</Typography>
                        </Stack>
                    </ScrollZoom>
                    <ScrollZoom>
                        <Box sx={{ backgroundColor: "#fff", padding: { xs: "20px", sm: "35px" }, borderRadius: "32px" }}>
                            <Stack alignItems="center" spacing={3}>
                                <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={6}>
                                    <Box>
                                        <Box component="h3">フランチャイズ説明会</Box>
                                        <Box>説明会終了後には<br />個別でご質問もお受けいたします</Box>
                                    </Box>
                                    <Box sx={{                
                                        width: 181,
                                        height: 121,
                                        'img': {
                                        width: '100%',
                                        height: 'auto'
                                        }
                                    }}>
                                    <img src="/images/top/bookcta_1.jpg" alt="説明会予約" width={317} height={212} />
                                    </Box>
                                </Stack>
                                <MFCButton
                                    href="/reservation" 
                                    startIcon={<EditCalendarIcon />} 
                                    isRound={true} 
                                    sx={{ width: 200, backgroundColor: "#1C2B58", color: "#fff", "&:hover": {
                                        backgroundColor: "#1C2B58"
                                    } }}
                                    >説明会を予約する</MFCButton>
                            </Stack>
                        </Box>
                    </ScrollZoom> 
                </Stack>
            </Stack>
        </Container>       
    </Box>
  );
}