"use client"
// import React, { useEffect, useState, useRef } from 'react';
// import Zoom from '@mui/material/Zoom';
// import { Box, BoxProps } from '@mui/material';

// type ScrollZoomProps = {
//     children: React.ReactNode;
//     sx?: BoxProps['sx'];
// };

// export const ScrollZoom: React.FC<ScrollZoomProps> = ({ children, sx }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const componentRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!componentRef.current) {
//                 return;
//             }

//             const rect = componentRef.current.getBoundingClientRect();
//             if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//                 setIsVisible(true);
//             } else {
//                 setIsVisible(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // 初期の位置をチェック

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <Box ref={componentRef} sx={sx}>
//             <Zoom in={isVisible}>
//                 <Box>
//                     {children}
//                 </Box>
//             </Zoom>
//         </Box>
//     );
// };

import React, { useEffect, useState, useRef } from 'react';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import { Box, BoxProps } from '@mui/material';

type ScrollZoomProps = {
    children: React.ReactNode;
    sx?: BoxProps['sx'];
};

export const ScrollZoom: React.FC<ScrollZoomProps> = ({ children, sx }) => {
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
        handleScroll(); // 初期の位置をチェック

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box ref={componentRef} sx={sx}>
            <Zoom in={isVisible} style={{ transitionDelay: isVisible ? '200ms' : '0ms', transitionDuration: '0.5s', transitionTimingFunction: 'ease-out' }}>
                <Fade in={isVisible} timeout={500}>
                    <Box>
                        {children}
                    </Box>
                </Fade>
            </Zoom>
        </Box>
    );
};