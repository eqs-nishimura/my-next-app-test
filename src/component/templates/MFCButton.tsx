"use client"
import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

interface ButtonWithLinkProps extends ButtonProps {
  isRound?: boolean;
  glowEffect?: boolean;
}

const glow = keyframes`
  0% { transform: scale(0) rotate(45deg); opacity: 0; }
  80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
  81% { transform: scale(4) rotate(45deg); opacity: 1; }
  100% { transform: scale(50) rotate(45deg); opacity: 0; }
`;

const GlowingButton = styled(Button)`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 20%;
    height: 200%;
    background-color: #FFF;
    transform: rotate(45deg);
    pointer-events: none;
    animation: ${glow} 3s ease-in-out infinite;
  }
`;

const MFCButton: React.FC<ButtonWithLinkProps> = ({ isRound, glowEffect, style, href, ...buttonProps }) => {
  const roundStyles = isRound ? { borderRadius: '9999px', textDecoration: 'none' } : { textDecoration: 'none' };
  const combinedStyles = { ...roundStyles, ...style };

  const ButtonComponent = glowEffect ? GlowingButton : Button;

  return (
    <ButtonComponent
      component={Link}
      href={href}
      size="large"
      {...buttonProps}
      style={combinedStyles}
    />
  );
}

export default MFCButton;