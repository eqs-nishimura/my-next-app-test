"use client"
import React, { useEffect, useState, useRef } from 'react';
import Zoom from '@mui/material/Zoom';

type ScrollZoomProps = {
    children: React.ReactNode;
};

export const ScrollZoom: React.FC<ScrollZoomProps> = ({ children }) => {
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
        <div ref={componentRef}>
            <Zoom in={isVisible}>
                <div>
                    {children}
                </div>
            </Zoom>
        </div>
    );
};