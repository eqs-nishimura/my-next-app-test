"use client"
import React, { useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

type FadeZoomProps = {
  children: React.ReactNode;
  animationType?: 'fade' | 'zoom';
};

export const FadeZoomBox: React.FC<FadeZoomProps> = ({ children, animationType = 'fade' }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fadeAnimationProps = {
    in: loaded,
    style: { transitionDuration: '.1s', transitionTimingFunction: 'ease-in-out' }
  };

  const zoomAnimationProps = {
    in: loaded,
    style: { transitionDuration: '.1s', transitionTimingFunction: 'ease-out' },
    timeout: 3000
  };

  return (
    <div>
      {animationType === 'fade' ? (
        <Fade {...fadeAnimationProps}>
          <div>{children}</div>
        </Fade>
      ) : (
        <Zoom {...zoomAnimationProps}>
          <div>{children}</div>
        </Zoom>
      )}
    </div>
  );
};

export default FadeZoomBox;