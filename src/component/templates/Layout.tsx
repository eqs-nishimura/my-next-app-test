import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
 
type LayoutProps = {
}
 
const Layout: React.FC<LayoutProps> = ({  }) => {
 
    return (
        <Box>
          <Header></Header>
          <Footer></Footer>
        </Box>
    )
};
export default Layout;