import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import MFCContact from '@/component/templates/MFCContact';
import MFCMainSection from '@/component/templates/MFCMainSection';

export const metadata = {
  title: 'お問い合わせ',
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
                  "お問い合わせ",
                ],
                subtitle: [
                  "CONTACT"
                ],
                subtitleTextAlign: "center"
              }}
              stackDirection={{ xs: "column", sm: "column", md: "column" }}
            />            
          </Stack>
        </Container>
      </Box>
      <MFCContact />        
    </Box>
  );
};

export default MyPage;