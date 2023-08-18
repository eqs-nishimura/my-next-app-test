import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import MFCButton from '@/component/templates/MFCButton';
import MFCBookCTA from '@/component/templates/MFCBookCTA';
import { ScrollZoom } from '@/component/ScrollZoom.client';

import { COLORS } from '@/lib/themeColors';
import { fcOwner_flow } from '@/lib/fcOwner';
import MFCSectionHeader from '@/component/Text/MFCSectionHeader';
import MFCMainSection from '@/component/templates/MFCMainSection';

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
          <MFCMainSection
            titleProps={{
              title: [
                "オーナーに",
                "なるには"
              ],
              subtitle: [
                "How to be Owner"
              ]
            }}
            imageSrc="/images/top/fv-main.png"
            imageWidth={447}
            imageHeight={447}
            imageWidths={{ xs: 200, sm: 300, md: 447 }}
            imageHeights={{ xs: 200, sm: 300, md: 447 }}
            altText="FV"          
            stackDirection={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          />
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md">
          <Stack alignItems="center" spacing={7}>
            <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={{ xs: 2, sm: 2, md: 3 }}>
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
                          borderWidth: { xs: "6px", sm: "10px", md: "10px" },
                          borderRadius: "9999px",
                          width: { xs: 140, sm: 200, md: 180 },
                          height: { xs: 140, sm: 200, md: 180 },
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
            <ScrollZoom>
              <MFCButton 
                  href="/contact?seminar=1" 
                  endIcon={<ArrowCircleRightIcon style={{ transform: 'rotate(90deg)' }} />} 
                  isRound={true} 
                  sx={{ width: 300, backgroundColor: COLORS.darkBlue, color: "#fff", "&:hover": {
                    backgroundColor: COLORS.darkBlue
                  } }}
                >オーナー条件の詳細をみる</MFCButton>
            </ScrollZoom>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ position: "relative", padding: "80px 0 40px" }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            <ScrollZoom>
              <MFCSectionHeader title="オーナーになるまでの流れ" subtitle="Flow" />
            </ScrollZoom>
            <Stack spacing={2}>
              {fcOwner_flow.map((flow, index) => (
                <React.Fragment key={index}>
                  <ScrollZoom>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center" sx={{ backgroundColor: "#fff", boxShadow: 3, p: 6, borderRadius: "32px" }}>
                      <Typography color={COLORS.orange} sx={{ width: { xs: "auto", sm: "40%", md: "200px" }, fontWeight: "bold", whiteSpace: "pre-wrap", textAlign: { xs: "center", sm: "left", md: "left" } }} variant="h6" component="h3">
                        {flow.title.map((line, index) => (
                          <Box component="span" sx={{ display: "inline-block" }} key={index}>{line}</Box>
                        ))}
                      </Typography>
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