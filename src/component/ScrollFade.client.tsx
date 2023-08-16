"use client"

import React, { useEffect, useState, useRef } from 'react';
import Fade from '@mui/material/Fade';
import { Box, BoxProps } from '@mui/material';

type ScrollFadeProps = {
    children: React.ReactNode;
    sx?: BoxProps['sx'];
};

export const ScrollFade: React.FC<ScrollFadeProps> = ({ children, sx }) => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!componentRef.current) {
                return;
            }

            const rect = componentRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box ref={componentRef} sx={sx}>
            <Fade in={isVisible} timeout={500}>
                <Box>
                    {children}
                </Box>
            </Fade>
        </Box>
    );
};