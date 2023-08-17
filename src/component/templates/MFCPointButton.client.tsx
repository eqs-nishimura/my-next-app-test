// import React from 'react';
// import { Box, Stack } from '@mui/material';
// import { COLORS } from '@/lib/themeColors';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// type PointButtonProps = {
//     children: React.ReactNode;
//     isButton?: boolean;
//     scrollToId?: string;
// };

// const MFCPointButton: React.FC<PointButtonProps> = ({ children, isButton = false, scrollToId }) => {
//   const handleClick = () => {
//     if (scrollToId) {
//       const element = document.getElementById(scrollToId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <Stack
//       component={isButton ? "button" : "div"}
//       onClick={isButton ? handleClick : undefined}
//       justifyContent="center"
//       alignItems="center"
//       sx={{
//         backgroundColor: "#fff",
//         color: COLORS.orange,
//         border: `10px solid ${COLORS.lightOrange}`,
//         borderWidth: { xs: "6px", sm: "10px", md: "10px" },
//         borderRadius: "9999px",
//         width: { xs: 140, sm: 200, md: 190 },
//         height: { xs: 140, sm: 200, md: 190 },
//         whiteSpace: "pre-wrap",
//         textAlign: "center",
//         fontWeight: "bold",
//       }}
//     >
//       <Box>{children}</Box>
//       {isButton && (
//         <Stack alignItems="center"><ArrowBackIosNewIcon style={{ transform: 'rotate(-90deg)', marginTop: 20 }} /></Stack>
//       )}
//     </Stack>
//   );
// };

// export default MFCPointButton;

"use client"

import { Stack, Box } from '@mui/material';
import { COLORS } from '@/lib/themeColors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type PointButtonProps = {
  children: React.ReactNode;
  scrollToId?: string;
};

export default function MFCPointButton({ children, scrollToId }: PointButtonProps) {
  const handleClick = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Stack
      component={scrollToId ? "button" : "div"}
      onClick={scrollToId ? handleClick : undefined}
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#fff",
        color: COLORS.orange,
        border: `10px solid ${COLORS.lightOrange}`,
        borderWidth: { xs: "6px", sm: "10px", md: "10px" },
        borderRadius: "9999px",
        width: { xs: 140, sm: 200, md: 190 },
        height: { xs: 140, sm: 200, md: 190 },
        whiteSpace: "pre-wrap",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      <Box>{children}</Box>
    </Stack>
  );
}