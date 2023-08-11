import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
 
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
 
    return (
        <Box>
          <Header></Header>
            {children}
          <Footer></Footer>
        </Box>
    )
};