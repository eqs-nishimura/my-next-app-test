import React from 'react';
import PropTypes from 'prop-types';
import { Typography, StackProps, Stack } from '@mui/material';

interface ParagraphProps {
  text: string;
  color?: string;
  fontSize?: string;
  maxWidth?: number | string;
  fontWeight?: string;
  margin?: string;
}

const MFCParagraph: React.FC<ParagraphProps> = ({ text, color = 'text.primary', fontSize = '16px', maxWidth = '100%', fontWeight = 'normal', margin = '0', ...rest }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: color,
        fontSize: fontSize,
        maxWidth: maxWidth,
        fontWeight: fontWeight,
        margin: margin,
        lineHeight: "175%",
      }}
      {...rest}
    >
      {text}
    </Typography>
  );
};

MFCParagraph.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
};

export default MFCParagraph;