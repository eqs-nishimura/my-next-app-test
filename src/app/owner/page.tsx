import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import MFCButton from '@/component/templates/MFCButton';
import MFCBookCTA from '@/component/templates/MFCBookCTA';
import MFCCardList from '@/component/templates/MFCCard';
import { ScrollZoom } from '@/component/ScrollZoom.client';

import { fcCards_ownerWork_Top, fcCards_ownerVoice_Top } from '@/lib/fcCards';
import { fcFeaturesTop } from '@/lib/fcFeatures';

import { COLORS } from '@/lib/themeColors';
import FadeZoomBox from '@/component/FadeZoomBox.client';
import { ScrollFade } from '@/component/ScrollFade.client';
import { fcOwner_flow } from '@/lib/fcOwner';

export const metadata = {
  title: 'オーナーになるには',
}

const points = ['法人のみ', '駐車場の開設', '自社の\n駐輪場のみ\n取締可能', '当社指定の\n取締ロックを\n使用'];
const firstTwoPoints = points.slice(0, 2);
const lastTwoPoints = points.slice(2);

const MyPage = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8E7" }}>
      <Box sx={{ padding: { xs: "30px 10px", sm: "30px 10px", md: "30px 10px" } }}>
        <Container maxWidth="md">
          <Stack direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }} alignItems="center">
            <FadeZoomBox animationType="fade">
            <Stack spacing={3} alignItems="center" sx={{ flex: 1 }}>
              <Box>
                <Box component="p" sx={{ display: "inline-block" }}>How to be Owner</Box>
                <Typography color={COLORS.darkBlue} sx={{ fontWeight: "bold", textAlign: { xs: "center", sm: "center", md: "left" }}} variant="h3" component="h1">
                    <Box component="span" sx={{ display: "inline-block" }}>オーナーに</Box>
                    <Box component="span" sx={{ display: "inline-block" }}>なるには</Box>
                </Typography>
              </Box>              
            </Stack>
            </FadeZoomBox>
            <FadeZoomBox animationType="zoom">
            <Box sx={{                
                width: { xs: 200, sm: 300, md: 447 },
                height: { xs: 200, sm: 300, md: 447 },
                'img': {
                  width: '100%',
                  height: 'auto'
                }
              }}>
              <img src="/images/top/fv-main.png" alt="FV" width={447} height={447} />
            </Box>
            </FadeZoomBox>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md">
          <Stack alignItems="center" spacing={3}>
            <Stack direction={{ sm: "column", md: "row" }} spacing={{ sm: 6, md: 3 }}>
              {[firstTwoPoints, lastTwoPoints].map((pointGroup, index) => (
                <Stack direction="row" spacing={3} justifyContent="center" key={index}>
                  {pointGroup.map((point) => (
                    <ScrollZoom key={point}>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          backgroundColor: "#fff",
                          color: COLORS.orange,
                          border: `10px solid ${COLORS.lightOrange}`,
                          borderRadius: "9999px",
                          width: 140,
                          height: 140,
                          whiteSpace: "pre-wrap",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {point}
                      </Stack>
                    </ScrollZoom>
                  ))}
                </Stack>
              ))}
            </Stack>
            <MFCButton 
                href="/reservation" 
                endIcon={<ArrowCircleRightIcon style={{ transform: 'rotate(90deg)' }} />} 
                isRound={true} 
                sx={{ width: 300, backgroundColor: COLORS.darkBlue, color: "#fff", "&:hover": {
                  backgroundColor: COLORS.darkBlue
                } }}
              >オーナー条件の詳細をみる</MFCButton>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ position: "relative", padding: "80px 0 40px" }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            <ScrollZoom>
              <Box sx={{ textAlign: "center", color: COLORS.darkBlue }}>
                  <Box>Flow</Box>
                  <Typography sx={{ fontWeight: "bold" }} variant="h4" component="h2">オーナーになるまでの流れ</Typography>
              </Box>
            </ScrollZoom>
            <Stack spacing={2}>
              {fcOwner_flow.map((flow, index) => (
                <React.Fragment key={flow.title}>
                  <ScrollZoom>
                    <Stack direction="row" spacing={3} alignItems="center" sx={{ backgroundColor: "#fff", boxShadow: 3, p: 6, borderRadius: "32px" }}>
                      <Typography color={COLORS.orange} sx={{ fontWeight: "bold", whiteSpace: "pre-wrap" }} variant="h6" component="h3">{flow.title}</Typography>
                      <Box component="p" sx={{ flex: 1 }}>{flow.description}</Box>
                    </Stack>
                  </ScrollZoom>
                  {index < fcOwner_flow.length - 1 && <ScrollZoom><Stack alignItems="center"><ArrowBackIosNewIcon style={{ transform: 'rotate(-90deg)' }} /></Stack></ScrollZoom>}
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>       
      <MFCBookCTA />
    </Box>
  );
};

export default MyPage;