import { Box, Card, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { ScrollFade } from '@/component/ScrollFade.client';

import { COLORS } from '@/lib/themeColors';

type Card = {
    mainImage: {
      src: string;
      width: number;
      height: number;
    };
    title: string;
    description?: string;
};

type CardProps = {
    card: Card;
    minHeight?: string | number;
    titleColor?: string;
};

type MFCCardListProps = {
    cards: Card[];
    minHeight?: string | number;
    titleColor?: string;
};

export default function MFCCardList({ cards, minHeight, titleColor }: MFCCardListProps) {
    const renderCards = (CardComponent: React.FC<CardProps>) => (
        <Stack justifyContent="center" direction={{ sm: "column", md: "row" }} spacing={2}>
            {cards.map((fcCard, index) => (
                <ScrollFade key={index} sx={{ height: "100%", display: "flex" }}>
                    <CardComponent card={fcCard} minHeight={minHeight} titleColor={titleColor} />
                 </ScrollFade>
            ))}
        </Stack>
    );

    return (
        <Box sx={{ width: { xs: '100%', sm: '100%', md: 'auto' } }}>
            <ScrollFade>
            <Box sx={{
              borderRadius: '50%', 
              backgroundColor: COLORS.lightOrange, 
              left: 0, 
              position: 'absolute',
              width: { xs: "200px", sm: "400px" },
              height: { xs: "200px", sm: "400px" },
              right: 0,
              margin: 'auto' }} />
            </ScrollFade>
            <Box display={{ xs: 'block', sm: 'none', md: 'block' }} sx={{ p: 1, position: 'relative' }}>
                {renderCards(DesktopCard)}
            </Box>
            <Box display={{ xs: 'none', sm: 'block', md: 'none' }} sx={{ p: 3, position: 'relative' }}>
                {renderCards(MobileCard)}
            </Box>
        </Box>
    );
}

function DesktopCard({ card: card, minHeight = 410, titleColor = COLORS.orange }: CardProps) {
    return (
      <Stack
        spacing={2}
        sx={{
          m: { xs: "10px 0" },
          p: 3,
          maxWidth: { xs: "none", md: 340 },
          minHeight: minHeight,
          borderRadius: "32px",
          boxShadow: 3,
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <Box
          component="h3"
          sx={{
            textAlign: "center",
            color: titleColor,
            fontWeight: "bold",
            whiteSpace: { xs: "pre-wrap", sm: "pre-wrap" },
          }}
        >
          {card.title}
        </Box>
        <Box
          sx={{
            display: "block",
            img: {
              width: "100%",
              height: "auto",
              objectFit: "cover",
            },
          }}
        >
          <img
            src={card.mainImage.src}
            alt={card.title}
            width={card.mainImage.width}
            height={card.mainImage.height}
          />
        </Box>
        {card.description && <Box component="p">{card.description}</Box>}
      </Stack>
    );
  }

function MobileCard({ card: card, titleColor = COLORS.orange }: CardProps) {
  return (
    <Stack spacing={1} sx={{ borderRadius: "32px", boxShadow: 3, backgroundColor: "#fff", p: 3 }}>
        <Box component="h3" sx={{ textAlign: "center", color: titleColor, fontWeight: "bold" }}>{card.title}</Box>
        <Stack direction="row" alignItems="center">
            <Box 
                sx={{
                width: {
                    sm: 200
                },
                img: {
                    width: '100%',
                    height: 'auto'
                }
                }}
            >
                <img 
                src={card.mainImage.src} 
                alt={card.title} 
                width={card.mainImage.width}
                height={card.mainImage.height} />
            </Box>
            {card.description && (
                <Box sx={{ p: 2, flex: 1 }}>
                    <Box>{card.description}</Box>
                </Box>
            )}
        </Stack>
    </Stack>
  );
}