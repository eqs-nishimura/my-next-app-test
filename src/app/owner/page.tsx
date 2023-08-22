import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import MFCBookCTA from '@/component/templates/MFCBookCTA';
import { ScrollZoom } from '@/component/ScrollZoom.client';

import { COLORS } from '@/lib/themeColors';
import { fcOwner_flow } from '@/lib/fcOwner';
import MFCSectionHeader from '@/component/Text/MFCSectionHeader';
import MFCMainSection from '@/component/templates/MFCMainSection';
import MFCResponsiveStack from '@/component/templates/MFCResponsiveStack.client';
import MFCPointButton from '@/component/templates/MFCPointButton.client';
import MFCOwnerSimulator from '@/component/templates/MFCOwnerSimulator';

export const metadata = {
  title: 'オーナーになるには',
}

const points = ['法人であること', '駐輪場・駐車場\nとして開設できる\n土地があること'];

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
            <MFCResponsiveStack>
              {points.map((point, index) => (
                <MFCPointButton key={index}>
                  {point}
                </MFCPointButton>
              ))}
            </MFCResponsiveStack>       
          </Stack>
          <MFCOwnerSimulator />
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
                      <Box component="p" sx={{ flex: 1, whiteSpace: "pre-wrap" }}>{flow.description}</Box>
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