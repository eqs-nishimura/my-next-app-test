import React from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type MFCImageProps = {
  src: string;
  width: number | string;
  height: number | string;
  widths?: {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
  };
  heights?: {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
  };
  alt: string;
  sx?: SxProps<Theme>;
};

const MFCImage = ({
  src,
  width,
  height,
  widths = { xs: "auto", sm: "auto", md: "auto" },
  heights = { xs: "auto", sm: "auto", md: "auto" },
  alt,
  sx = {},
}: MFCImageProps) => {
  return (
    <Box
      sx={{
        width: widths,
        height: heights,
        img: {
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        },
        ...sx,
      }}
    >
      <img src={src} alt={alt} width={width} height={height} />
    </Box>
  );
};

export default MFCImage;