import Box from '@mui/material/Box';
import { AppBar, Container, Divider, Stack } from '@mui/material';
import FCButton from './FCButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmailIcon from '@mui/icons-material/Email';
import MobileDrawer from '@/component/templates/MobileDrawer';
import { navLinks } from '@/lib/navigationMenu';
import NavButtonList from './NavButtonList';

export default function Header() {
  return (
    <AppBar component="header" position="static" elevation={6} sx={{ backgroundColor: "transparent", borderWidth: 0, }}>
      <Container maxWidth="md" sx={{ padding: "6px 10px" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box display={{ xs: "block", sm: "none" }}>
              <img src="/images/logo.png" width={88} height={24} alt="みんちゅうSHARE-LIN" />
            </Box>
            <Box display={{ xs: "none", sm: "block" }}>
              <img src="/images/logo.png" width={185} height={51} alt="みんちゅうSHARE-LIN" />
            </Box>
            <Box sx={{ color: '#1C2B58', fontWeight: "bold", }}>フランチャイズオーナー募集</Box>
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
          { navLinks.map( (navLink) => (
            <Box key={navLink.url}>
                <FCButton href={navLink.url} text={navLink.text} sx={{ color: "#000", fontWeight: "bold" }} />
            </Box>
            ))}
        </Stack>
      </Box>
    </AppBar>
  );
}