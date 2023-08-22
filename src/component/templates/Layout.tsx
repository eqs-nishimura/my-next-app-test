import Header from '@/component/templates/Header';
import Footer from '@/component/templates/Footer';
import { Box } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      {children}
      <Footer />
    </Box>
  );
}