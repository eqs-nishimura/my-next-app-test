import React from 'react';
import { AppBar, Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar component="footer" position="static" elevation={0} sx={{ color: "#000", backgroundColor: "#FFF8E7" }}>
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="caption">
                ©IQSophia, Inc. All Rights Reserved.
                </Typography>
            </Box>
        </Container>
    </AppBar>
  );
}