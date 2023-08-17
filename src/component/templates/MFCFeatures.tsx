import { Box, Card, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { fcFeaturesTop } from '@/lib/fcFeatures';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ScrollZoom } from '@/component/ScrollZoom.client';

import { COLORS } from '@/lib/themeColors';
import { ScrollFade } from '../ScrollFade.client';
import MFCImage from '../MFCImage';

export default function MFCFeatures() {
    const renderCards = (CardComponent: React.FC<CardProps>) => (
        <Stack direction={{ sm: "column", md: "row" }} spacing={3} sx={{ marginTop: { sm: 0, md: "-85px" } }}>
            {fcFeaturesTop.map((fcFeature, index) => (
                <ScrollZoom key={index}>
                    <CardComponent feature={fcFeature} />
                </ScrollZoom>
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

type Feature = {
  id: string,
  label: string;
  mainImage: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  points: FeaturePoint[];
};

type FeaturePoint = {
  title: string,
  pointImage: {
    src: string;
    width: number;
    height: number;
  };
}
  
type CardProps = {
  feature: Feature;
};

function DesktopCard({ feature }: CardProps) {
  return (
    <Card sx={{ m: { xs: 1 }, maxWidth: { xs: "none", md: 260 }, borderRadius: "32px", boxShadow: 3 }}>
      <CardContent sx={{ padding: "20px 30px" }}>
        <Box sx={{ border: `2px solid ${COLORS.orange}`, borderRadius: "9999px", p: 1, textAlign: "center", color: COLORS.orange, fontWeight: "bold" }}>
          {feature.label}
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ height: { xs: "auto", sm: 140 } }}
        image={feature.mainImage.src}
        width={feature.mainImage.width}
        height={feature.mainImage.height}
        title={feature.title}
      />
      <CardContent sx={{ p: 2 }}>
        <Box component="h3" sx={{ textAlign: "center", color: COLORS.orange, fontWeight: "bold" }}>{feature.title}</Box>
        <List>
          {feature.points.map((point, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <ListItemIcon sx={{ marginRight: "8px", minWidth: 'auto' }}>
                <CheckCircleIcon sx={{ color: COLORS.orange }} />
              </ListItemIcon>
              <ListItemText primary={point.title} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

function MobileCard({ feature }: CardProps) {
  return (
    <Box sx={{ borderRadius: "32px", boxShadow: 3, backgroundColor: "#fff", p: 3 }}>
        <Box sx={{ border: `2px solid ${COLORS.orange}`, borderRadius: "9999px", p: 1, textAlign: "center", color: COLORS.orange, fontWeight: "bold" }}>
          {feature.label}
        </Box>
        <Stack direction="row" alignItems="center">
            <MFCImage
                src={feature.mainImage.src}
                width={feature.mainImage.width}
                height={feature.mainImage.height}
                widths={{ xs: 88, sm: 185 }}
                alt={feature.title}
              />
            <Box sx={{ p: 2 }}>
                <Box component="h3" sx={{ textAlign: "center", color: COLORS.orange, fontWeight: "bold" }}>{feature.title}</Box>
                <List>
                    {feature.points.map((point, index) => (
                    <ListItem key={index} sx={{ p: 0 }}>
                        <ListItemIcon sx={{ marginRight: "8px", minWidth: 'auto' }}>
                        <CheckCircleIcon sx={{ color: COLORS.orange }} />
                        </ListItemIcon>
                        <ListItemText primary={point.title} />
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Stack>
    </Box>
  );
}