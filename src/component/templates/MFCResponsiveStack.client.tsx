"use client"

import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { ScrollZoom } from '@/component/ScrollZoom.client'; // 適切なインポートパスに変更してください

type ResponsiveStackProps = {
  children: React.ReactNode[];
};

const MFCResponsiveStack: React.FC<ResponsiveStackProps> = ({ children }) => {
  const mdChunkSize = 4;
  const smChunkSize = 2;

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupByChunkSize = (items: React.ReactNode[], chunkSize: number) => {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      groupedItems.push(items.slice(i, i + chunkSize));
    }
    return groupedItems;
  };
  
  const chunkSize = windowWidth >= 960 ? mdChunkSize : smChunkSize;
  const groupedChildren = groupByChunkSize(children, chunkSize);

  return (
    <Stack alignItems="center" spacing={7}>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={{ xs: 2, sm: 2, md: 3 }}>
        {groupedChildren.map((group, index) => (
          <Stack direction="row" spacing={3} justifyContent="center" key={index}>
            {group.map((child, index) => (
              <ScrollZoom key={index}>{child}</ScrollZoom>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default MFCResponsiveStack;