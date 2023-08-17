import React from 'react';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { COLORS } from '@/lib/themeColors';

interface TitleWithSubtitleProps {
  title: string;
  subtitle: string;
  titleColor?: string; // 任意のタイトルの色
  subtitleColor?: string; // 任意のサブタイトルの色
  textShadow?: string; // 任意のテキストシャドウ
}

const defaultColors = {
  titleColor: COLORS.darkBlue, // デフォルトのタイトルの色
  subtitleColor: COLORS.darkBlue // デフォルトのサブタイトルの色
};

const MFCSectionHeader: React.FC<TitleWithSubtitleProps> = ({
  title,
  subtitle,
  titleColor = defaultColors.titleColor, // デフォルトの色を設定
  subtitleColor = defaultColors.subtitleColor, // デフォルトの色を設定
  textShadow // 任意のテキストシャドウ
}) => {
  const titleStyle: SxProps<Theme> = {
    color: titleColor,
    textShadow: textShadow, // テキストシャドウを適用
    fontWeight: "bold",
    textAlign: "center"
  };

  const subtitleStyle: SxProps<Theme> = {
    color: subtitleColor,
    textShadow: textShadow, // テキストシャドウを適用
    textAlign: "center"
  };

  return (
    <div>
      <Typography component="p" variant="h6" sx={subtitleStyle}>
        {subtitle}
      </Typography>
      <Typography component="h2" variant="h4" sx={titleStyle}>
        {title}
      </Typography>
    </div>
  );
};

export default MFCSectionHeader;