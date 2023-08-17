import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import MFCBookCTA from '@/component/templates/MFCBookCTA';
import MFCCardList from '@/component/templates/MFCCard';
import MFCMainSection from '@/component/templates/MFCMainSection';
import MFCParagraph from '@/component/Text/MFCParagraph';
import MFCSectionHeader from '@/component/Text/MFCSectionHeader';
import MFCImage from '@/component/MFCImage';

import { fcCards_case_service } from '@/lib/fcCards';
import { COLORS } from '@/lib/themeColors';

import { ScrollFade } from '@/component/ScrollFade.client';
import { ScrollZoom } from '@/component/ScrollZoom.client';

export const metadata = {
  title: 'みんちゅうSHARE-LINについて',
}

const MyPage = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8E7" }}>
      <Box sx={{ padding: { xs: "30px 10px", sm: "30px 10px", md: "30px 10px" } }}>
        <Container maxWidth="md">          
          <Stack spacing={3}>
            <MFCMainSection
              titleProps={{
                title: [
                  "みんちゅうSHARE-LIN",
                  "について"
                ],
                subtitle: [
                  "About MINCHU SHARE-LIN"
                ],
                subtitleTextAlign: "center"
              }}
              imageSrc="/images/service/fv-main.png"
              imageWidth={748}
              imageHeight={569}
              imageWidths={{ xs: 200, sm: 400, md: 748 }}
              imageHeights={{ xs: "auto", sm: "auto", md: "auto" }}
              altText="FV"          
              stackDirection={{ xs: "column", sm: "column", md: "column" }}
            />
            <Stack alignItems="center">
              <Box>
                <MFCParagraph maxWidth="650px" color={COLORS.darkBlue} fontWeight="bold" text='”みんちゅうSHARE-LIN”は、完全成果報酬型の駐輪場・駐車場シェアサービスです。' />
                <MFCParagraph maxWidth="650px" color={COLORS.darkBlue} fontWeight="bold" text='月極駐車場の空き車室などをコインパーキングのように、あらゆる車両のドライバーに貸し出しシェアする「みんなの駐輪場・駐車場」として割安料金で予約・利用してもらうことができます。' />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>    
      <Box>
        <Container maxWidth="md">
          <Stack alignItems="center">
          <ScrollFade>
            <MFCImage
              src="/images/service/business-model.png"
              width={700}
              height={448}
              widths={{ xs: "100%", sm: "100%", md: 700 }}
              alt="みんちゅうSHARE-LINの特徴"
            />
          </ScrollFade>   
        </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md" disableGutters sx={{ padding: "0 0 80px" }}>
            <ScrollZoom>
              <Box sx={{ position: "relative" }}>
                <MFCImage
                  src="/images/service/mission-bg.jpg"
                  width={989}
                  height={480}
                  widths={{ xs: "100%", sm: "100%", md: "100%" }}
                  heights={{ xs: "100%", sm: "100%", md: "100%" }}
                  alt="ミッション"
                  sx={{ position: "absolute", zIndex: 0 }}
                />
                <Stack spacing={3} alignItems="center" sx={{ position: "relative", p: 8 }}>
                  <MFCSectionHeader title="ミッション" subtitle="Our Mission" titleColor='white' subtitleColor='white' textShadow="0px 0px 10px rgba(0, 0, 0, 0.8)" />
                  <MFCImage
                      src="/images/service/fuseichurin.png"
                      width={380}
                      height={35}
                      widths={{ xs: "100%", sm: "100%", md: 380 }}
                      alt="不正駐輪のない社会へ"
                    />
                  <Box sx={{ textAlign: "center" }}>                  
                    <MFCParagraph maxWidth="650px" color='white' text='マナーを守らない一部の人によって、まちの景観や治安が妨げられている状態を見過ごすことはできません。 私たちはこのような社会問題を徹底して解決します。' />
                    <MFCParagraph maxWidth="650px" color='white' text='そして無断駐輪を排除することで正規に駐輪場を利用する人を増やし、経済を正していくことを宣言します。' />
                  </Box>
                </Stack>
              </Box>
            </ScrollZoom>
        </Container>
      </Box>
      <Box sx={{ position: "relative", padding: "40px 0" }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <ScrollZoom>
              <MFCSectionHeader title="みんちゅうSHARE-LIN導入事例" subtitle="Case" />
            </ScrollZoom>
            <MFCCardList cards={fcCards_case_service} minHeight={340} titleColor={COLORS.darkBlue} />
          </Stack>
        </Container>
      </Box>
      <MFCBookCTA />
    </Box>
  );
};

export default MyPage;