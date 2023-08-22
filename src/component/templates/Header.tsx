import { AppBar, Box, Button, Container, Divider, Stack } from '@mui/material';
import MobileDrawer from '@/component/templates/MobileDrawer';
import NavButtonList from '@/component/templates/NavButtonList';
import { navLinks } from '@/lib/navigationMenu';
import Link from 'next/link'
import MFCImage from '../MFCImage';

export default function Header() {
  return (
    <AppBar component="header" position="static" elevation={6} sx={{ backgroundColor: "transparent", borderWidth: 0, }}>
      <Container maxWidth="md" sx={{ padding: "6px 10px" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>            
            <MFCImage
                src="/images/logo.png"
                width={450}
                height={124}
                widths={{ xs: 88, sm: 185 }}
                alt="みんちゅうSHARE-LIN"
              />
            <Box sx={{ color: '#1C2B58', fontWeight: "bold" }}>フランチャイズオーナー募集</Box>
          </Stack>
          <Box display={{ xs: 'none', md: 'block' }}>
            <NavButtonList />
          </Box>
          <Box display={{ xs: 'inline-block', md: 'none' }}>
            <MobileDrawer />
          </Box>
        </Stack>
      </Container>      
      <Divider variant="fullWidth" />
      <Box display={{ xs: 'none', sm: 'flex' }} maxWidth="md" sx={{ padding: "6px 0", marginLeft: "auto", marginRight: "auto" }}>
        <Stack component="nav" direction="row" justifyContent="center">
          { navLinks.map( (navLink, index) => (
            <Box key={index}>
              {/* <Link href={navLink.url} passHref>
                <Button sx={{ color: "#000", fontWeight: "bold" }}>{navLink.text}</Button>
              </Link> */}
              <Button component={Link} href={navLink.url} sx={{ color: "#000", fontWeight: "bold" }}>{navLink.text}</Button>
            </Box>
          )) }
        </Stack>
      </Box>
    </AppBar>
  );
}