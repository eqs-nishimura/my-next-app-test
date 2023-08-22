"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Box, BoxProps } from '@mui/material';
import { COLORS } from '@/lib/themeColors';
import { useTheme } from "@mui/material/styles";
import { styled, keyframes } from "@mui/system";

const slideIn = (angle: number) => keyframes`
  from {
    opacity: 0;
    transform: translate(${10 * Math.sin(angle)}%, ${10 * Math.cos(angle)}%);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

interface SlideInContainerProps {
  isVisible: boolean;
  duration: number;
  delay: number;
  angle: number;
}

const SlideInContainer = styled("div")<SlideInContainerProps>(
  ({ isVisible, duration, delay, angle }) => ({
    opacity: 0,
    transform: `translate(${Math.sin(angle)}px, ${Math.cos(angle)}px)`,
    animation: isVisible
      ? `${slideIn(angle)} ${duration}s forwards`
      : "none",
    animationDelay: `${delay}s`,
  })
);

interface SlideInProps {
  children: React.ReactNode;
  duration: number;
  delay: number;
  angle: number;
  inView?: boolean; // 追加
}

export const SlideIn: React.FC<SlideInProps> = ({ children, duration = 1, delay = 0, angle = 0, inView = true }) => {
  const [isVisible, setIsVisible] = useState(!inView); // 初期値を変更
  const ref = useRef(null);
  const theme = useTheme();
  const radianAngle = (angle * Math.PI) / 180;

  useEffect(() => {
    if (inView) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref, inView]);

  return (
    <SlideInContainer
      ref={ref}
      isVisible={isVisible}
      duration={duration}
      delay={delay}
      angle={radianAngle}
    >
      {children}
    </SlideInContainer>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

interface MFCFVSlideUpAnimationProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  backgroundColor?: string;
}

export const MFCFVSlideUpAnimation: React.FC<MFCFVSlideUpAnimationProps> = ({ duration = 0.5, delay = 2, backgroundColor = COLORS.darkBlue, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', backgroundColor, zIndex: 1, opacity: isLoaded ? 0 : 1, animation: `${slideUp} ${duration}s forwards ${delay}s` }} />
      {children}
    </Box>
  );
};