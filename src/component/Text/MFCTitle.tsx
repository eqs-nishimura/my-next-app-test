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
};

interface MFCTitleProps extends TitleWithDescriptionProps {
  isSlideUpFinished: boolean;
}

const MFCTitle: React.FC<MFCTitleProps> = ({ title, subtitle, description, titleColor, subtitleColor, descriptionColor, fontWeight, titleTextAlign, subtitleTextAlign, descriptionTextAlign, fontSize, isSlideUpFinished }) => {
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
            <SlideIn key={index} duration={1.2} delay={0.1 * index} angle={0} inView={isSlideUpFinished}>
              <Box component="span" sx={{ display: "inline-block" }} key={index}>{line}</Box>
            </SlideIn>
          ))}
        </Typography>
      </Stack>
      {description && (
        <Box sx={{ color: descriptionColor, textAlign: descriptionTextAlign }}>
          {description.map((line, index) => (
            <SlideIn key={index} duration={1.2} delay={0.1 * index + 0.3} angle={0} inView={isSlideUpFinished}>
              <Box component="span" sx={{ display: "inline-block" }} key={index}>{line}</Box>
            </SlideIn>
          ))}
        </Box>
      )}
    </Stack>
  );
};

export default MFCTitle;