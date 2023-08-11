import RootLayout from './layout';
import { Container, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <RootLayout>
      <Container>
        <Typography variant="h1" component="div" gutterBottom>
          Welcome to Our Service!
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          こちらは駐車場・駐輪場のシェアサービスのトップページです。
        </Typography>
        {/* 他のコンテンツやコンポーネントを追加する */}
      </Container>
    </RootLayout>
  );
}