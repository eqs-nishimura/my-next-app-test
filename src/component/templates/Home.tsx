"use client"

import React, { useEffect, useRef, useState } from 'react';
import { MFCFVSlideUpAnimation, SlideIn } from '@/component/MFCAnimation';
import { COLORS } from '@/lib/themeColors';
import Header from './Header';
import { Box, Container, Stack } from '@mui/material';
import MFCTitle from '../Text/MFCTitle';
import MFCImage from '../MFCImage';
import MFCButton from './MFCButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar'; // 適切なアイコンをインポート
import EmailIcon from '@mui/icons-material/Email'; // 適切なアイコンをインポート
import MFCFeatures from './MFCFeatures';

export const ParentComponent: React.FC = () => {
    const [isSlideUpFinished, setIsSlideUpFinished] = useState(false);
    const slideUpDuration = 4; // MFCFVSlideUpAnimationのdurationを指定
    const slideUpDelay = 2; // MFCFVSlideUpAnimationのdelayを指定
    const slideInDelayIncrement = 0.5; // SlideInのアニメーションの遅延増分を指定
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsSlideUpFinished(true);
        }, (slideUpDuration + slideUpDelay) * 500);
    
        return () => clearTimeout(timer);
      }, []);
  
    return (
      <div>
        <MFCFVSlideUpAnimation duration={slideUpDuration} delay={slideUpDelay} backgroundColor={COLORS.darkBlue}>
        <Header />
        <Box sx={{ padding: { xs: "30px 10px", sm: "30px 10px", md: "30px 10px" } }}>
          <Container maxWidth="md">
          <Stack spacing={2} direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }} alignItems="center">
                <Stack spacing={3} alignItems="center" sx={{ flex: 1 }}>
                    <MFCTitle title={[
                  "フランチャイズ",
                  "オーナーで",
                  "共に社会貢献を。"
                ]}
                description={[
                  "土地をお持ちの経営者、法人様へ",
                  "不正駐輪撲滅を実現し、",
                  "誰もが安心して暮らせるまちづくりを"
                ]}
                isSlideUpFinished={isSlideUpFinished}
                />
                <SlideIn duration={0.5} delay={2 + slideUpDuration + slideUpDelay} angle={0} inView={isSlideUpFinished}>
                <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={1}>
                    <MFCButton glowEffect={true}
                    href="/contact?seminar=1"
                    startIcon={<EditCalendarIcon />}
                    isRound={true}
                    sx={{ width: 200, backgroundColor: COLORS.darkBlue, color: "#fff", "&:hover": { backgroundColor: COLORS.darkBlue } }}
                    >説明会を予約する</MFCButton>
                    <MFCButton
                    href="/contact"
                    startIcon={<EmailIcon />}
                    isRound={true}
                    sx={{ width: 200, backgroundColor: "#B01A1A", color: "#fff", "&:hover": { backgroundColor: "#B01A1A" } }}
                    >お問い合わせ</MFCButton>
                </Stack>
                </SlideIn>
                </Stack>
                <MFCImage
                        src="/images/top/fv-main.png"
                        width={447}
                        height={447}
                        widths={{ xs: 200, sm: 300, md: 447 }}
                        heights={{ xs: 200, sm: 300, md: 447 }}
                        alt="FV"
                    />
            </Stack>               
          </Container>
        </Box>
        <Box sx={{ paddingBottom: "40px" }}>
          <Container maxWidth="md" disableGutters={true}>
            <Stack alignItems="center">
                <MFCImage
                  src="/images/top/feature-bg.jpg"
                  width={908}
                  height={327}
                  alt="みんちゅうSHARE-LINフランチャイズの特徴"
                />
              <MFCFeatures />
            </Stack>
          </Container>
        </Box>
        </MFCFVSlideUpAnimation>


      </div>
    );
  };