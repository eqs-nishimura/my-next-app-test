import React from 'react';
import { Box, Slide, Stack } from '@mui/material';
import { COLORS } from '@/lib/themeColors';
import MFCTitle, { TitleWithDescriptionProps } from '@/component/Text/MFCTitle'; // MFCTitleコンポーネントをインポート
import MFCButton from './MFCButton'; // MFCButtonコンポーネントをインポート
import FadeZoomBox from '@/component/FadeZoomBox.client';
import EditCalendarIcon from '@mui/icons-material/EditCalendar'; // 適切なアイコンをインポート
import EmailIcon from '@mui/icons-material/Email'; // 適切なアイコンをインポート
import MFCImage from '../MFCImage';
import { SlideIn } from '../MFCAnimation';

type MainSectionProps = {
  titleProps: TitleWithDescriptionProps;
  imageSrc?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  imageWidths?: {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
  };
  altText?: string;
  imageHeights?: {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
  };
  isHome?: boolean;
  stackDirection?: {
    xs?: "column-reverse" | "row" | "column" | "row-reverse";
    sm?: "column-reverse" | "row" | "column" | "row-reverse";
    md?: "column-reverse" | "row" | "column" | "row-reverse";
  };
};

const MFCMainSection = ({
  titleProps,
  imageSrc,
  imageWidth,
  imageHeight,
  imageWidths = { xs: 200, sm: 300, md: 447 },
  imageHeights = { xs: 200, sm: 300, md: 447 },
  altText,
  stackDirection = { xs: "column-reverse", sm: "column-reverse", md: "row" },
  isHome
}: MainSectionProps) => {
  return (
    <Stack spacing={2} direction={stackDirection} alignItems="center">
        <Stack spacing={3} alignItems="center" sx={{ flex: 1 }}>
            <MFCTitle {...titleProps} />
            {isHome && (
              <SlideIn duration={0.5} delay={3} angle={0}>
              <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={1}>
                <MFCButton glowEffect={true}
                href="/contact?seminar=1" 
                startIcon={<EditCalendarIcon />} 
                isRound={true} 
                sx={{ width: 200, backgroundColor: COLORS.darkBlue, color: "#fff", "&:hover": {
                    backgroundColor: COLORS.darkBlue
                } }}
                >説明会を予約する</MFCButton>
                <MFCButton
                href="/contact" 
                startIcon={<EmailIcon />} 
                isRound={true} 
                sx={{ width: 200, backgroundColor: "#B01A1A", color: "#fff", "&:hover": {
                    backgroundColor: "#B01A1A"
                } }}
                >お問い合わせ</MFCButton>
              </Stack>
              </SlideIn>
            )}            
        </Stack>
        {imageSrc && imageWidth && imageHeight && imageWidths && imageHeights && altText && (
            <MFCImage
                src={imageSrc}
                width={imageWidth}
                height={imageHeight}
                widths={imageWidths}
                heights={imageHeights}
                alt={altText}
              />
        )}
    </Stack>      
  );
};

export default MFCMainSection;