import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import MFCBookCTA from '@/component/templates/MFCBookCTA';
import MFCMainSection from '@/component/templates/MFCMainSection';

import { COLORS } from '@/lib/themeColors';

import { ScrollZoom } from '@/component/ScrollZoom.client';
import MFCPointButton from '@/component/templates/MFCPointButton.client';
import MFCResponsiveStack from '@/component/templates/MFCResponsiveStack.client';


export const metadata = {
  title: 'FAQ',
}

const points = [
  {
    title: "オーナー\n契約について",
    id: "owner"
  },
  {
    title: "駐車場・駐輪場の\n開設について",
    id: "openParking"
  },
  {
    title: "駐車場・駐輪場の\n運営について",
    id: "manageParking"
  },
  {
    title: "説明会について",
    id: "seminar"
  },
];

const MyPage = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8E7" }}>
      <Box sx={{ padding: { xs: "30px 10px", sm: "30px 10px", md: "30px 10px" } }}>
        <Container maxWidth="md">          
          <Stack spacing={3}>
            <MFCMainSection
              titleProps={{
                title: [
                  "よくあるご質問",
                ],
                subtitle: [
                  "Q & A"
                ],
                subtitleTextAlign: "center"
              }}
              stackDirection={{ xs: "column", sm: "column", md: "column" }}
            />            
          </Stack>
        </Container>
      </Box>    
      <Box>
        <Container maxWidth="md">
          <MFCResponsiveStack>
            {points.map((point, index) => (
              <ScrollZoom key={index}>
                <MFCPointButton scrollToId={point.id}>{point.title}</MFCPointButton>
              </ScrollZoom>
            ))}
          </MFCResponsiveStack>
        </Container>
      </Box>
      <MFCBookCTA />
    </Box>
  );
};

export default MyPage;