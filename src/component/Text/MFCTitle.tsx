import React from 'react';
import { Box, Stack, Typography, TypographyProps } from '@mui/material';
import { COLORS } from '@/lib/themeColors';
import { Breakpoint } from '@mui/system';
import { SlideIn } from '../MFCAnimation';

export type TitleWithDescriptionProps = {
  title: string[];
  description?: string[];
  subtitle?: string[];
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  fontWeight?: number;
  titleTextAlign?: TypographyProps['textAlign'];
  subtitleTextAlign?: TypographyProps['textAlign'];
  descriptionTextAlign?: TypographyProps['textAlign'];
  fontSize?: Record<Breakpoint, string | number>;
  isSlideUpFinished?: boolean;
  slideUpDuration?: number;
  slideUpDelay?: number;
};

const MFCTitle = ({
  title,
  subtitle,
  description,
  titleColor = COLORS.darkBlue,
  subtitleColor = COLORS.darkBlue,
  descriptionColor = COLORS.darkBlue,
  fontWeight = 700,
  titleTextAlign = { xs: 'center', sm: 'center', md: 'left' },
  subtitleTextAlign = { xs: 'center', sm: 'center', md: 'left' },
  descriptionTextAlign,
  fontSize = { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3rem', xl: '3rem' },
  isSlideUpFinished = false,
  slideUpDuration = 0.5,
  slideUpDelay = 0.3
}: TitleWithDescriptionProps) => {
  const titleDelay = isSlideUpFinished ? 0.1 : 0.1 + slideUpDuration + slideUpDelay;
  const descriptionDelay = isSlideUpFinished ? 2.1 : 2.1 + slideUpDuration + slideUpDelay;
  return (
    <Stack spacing={3}>
      <Stack>
        {subtitle && (
          <Typography color={subtitleColor} sx={{ fontWeight: fontWeight, textAlign: subtitleTextAlign }} variant="subtitle1" component="p">
            {subtitle.map((line, index) => (
              <Box component="span" sx={{ display: "inline-block" }} key={index}>{line}</Box>
            ))}
          </Typography>
        )}
        <Typography color={titleColor} sx={{ fontWeight: fontWeight, textAlign: titleTextAlign, fontSize: fontSize }} variant="h3" component="h1">
          {title.map((line, index) => (
            <SlideIn key={index} duration={1.2} delay={titleDelay * index} angle={0} inView={isSlideUpFinished}>
              <Box component="span" sx={{ display: "inline-block" }} key={index}>{line}</Box>
            </SlideIn>
          ))}
        </Typography>
      </Stack>
      {description && (
        <Box sx={{ color: descriptionColor, textAlign: descriptionTextAlign }}>
        {description.map((line, index) => (
          <SlideIn key={index} duration={1.2} delay={descriptionDelay * index} angle={0} inView={isSlideUpFinished}>
          <Box component="span" sx={{ display: "inline-block" }} key={index}>{line}</Box>
          </SlideIn>
        ))}
        </Box>
      )}
    </Stack>
  );
};

export default MFCTitle;