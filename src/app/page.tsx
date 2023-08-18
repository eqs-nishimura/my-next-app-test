import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MFCFeatures from '@/component/templates/MFCFeatures';
import MFCBookCTA from '@/component/templates/MFCBookCTA';
import MFCCardList from '@/component/templates/MFCCard';
import { ScrollZoom } from '@/component/ScrollZoom.client';

import { fcCards_ownerWork_Top, fcCards_ownerVoice_Top } from '@/lib/fcCards';
import { fcFeaturesTop } from '@/lib/fcFeatures';

import { COLORS } from '@/lib/themeColors';
import { ScrollFade } from '@/component/ScrollFade.client';
import MFCSectionHeader from '@/component/Text/MFCSectionHeader';
import MFCMainSection from '@/component/templates/MFCMainSection';
import MFCImage from '@/component/MFCImage';

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: "#FFF8E7" }}>
      <Box sx={{ padding: { xs: "30px 10px", sm: "30px 10px", md: "30px 10px" } }}>
        <Container maxWidth="md">          
          <MFCMainSection
            titleProps={{
              title: [
                "フランチャイズ",
                "オーナーで",
                "共に社会貢献を。"
              ],
              description: [
                "土地をお持ちの経営者、法人様へ",
                "不正駐輪撲滅を実現し、",
                "誰もが安心して暮らせるまちづくりを"
              ]
            }}
            imageSrc="/images/top/fv-main.png"
            imageWidth={447}
            imageHeight={447}
            imageWidths={{ xs: 200, sm: 300, md: 447 }}
            imageHeights={{ xs: 200, sm: 300, md: 447 }}
            altText="FV"          
            stackDirection={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
            isHome={true}
          />
        </Container>
      </Box>
      <Box sx={{ paddingBottom: "40px" }}>
        <Container maxWidth="md" disableGutters={true}>
          <Stack alignItems="center">
            <ScrollFade>
              <MFCImage
                src="/images/top/feature-bg.jpg"
                width={908}
                height={327}
                alt="みんちゅうSHARE-LINフランチャイズの特徴"
              />
            </ScrollFade>
            <MFCFeatures />
          </Stack>
        </Container>
      </Box>
      <MFCBookCTA />
      <Box sx={{ position: "relative", padding: "40px 0" }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            <ScrollZoom>
              <MFCSectionHeader title="オーナーの仕事について" subtitle="OWNER&apos;s Work" />
            </ScrollZoom>
            <MFCCardList cards={fcCards_ownerWork_Top} />
            <Stack alignItems="center">
              <ScrollZoom>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ marginRight: "8px", minWidth: 'auto' }}>
                      <CheckBoxIcon sx={{ color: "#12A321" }} />
                    </ListItemIcon>
                    <ListItemText primary="空いている土地を有効活用したい" 
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                        fontSize: 'large',
                    }}/>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ marginRight: "8px", minWidth: 'auto' }}>
                      <CheckBoxIcon sx={{ color: "#12A321" }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="駐車場・駐輪場の管理が大変で安定した収入を出したい"
                      primaryTypographyProps={{
                          fontWeight: 'bold',
                          fontSize: 'large',
                      }} />
                  </ListItem>
                </List>
              </ScrollZoom>
              <ScrollZoom>
                <ArrowDropDownIcon sx={{ fontSize: "100px", color: "#FCB900" }} />
              </ScrollZoom>
              <ScrollZoom>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h5" component="div">みんちゅうSHARE-LIN<br />フランチャイズで、実現可能です！</Typography>
              </ScrollZoom>
            </Stack>
          </Stack>
        </Container>
      </Box> 
      <Box sx={{ padding: "40px 0" }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <ScrollZoom>
              <MFCSectionHeader title="サポート体制" subtitle="Support Of MINCHU-SHARELIN" />
            </ScrollZoom>
            <Stack spacing={3}>
              {fcFeaturesTop.map((feature, index) => (
              <ScrollZoom key={index}>
                <Box sx={{ position: "relative", backgroundColor: "#fff", borderRadius: "32px", p: { xs: 2, sm: 4 }, boxShadow: 3, }}>
                  <Typography component="div" variant="h1" color={COLORS.orange} sx={{ position: "absolute", top: { xs: "16px", sm: "30px" }, right: { xs: "16px", sm: "30px" }, fontWeight: "bold", opacity: 0.1 }} >{feature.id}</Typography>
                  <Stack spacing={3}>
                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" alignItems="center" spacing={2}>
                      <Box sx={{ padding: "6px 10px", border: `2px solid ${COLORS.orange}`, borderRadius: "9999px", textAlign: "center", color: COLORS.orange, fontWeight: "bold" }}>
                        {feature.label}
                      </Box>
                      <Typography color={COLORS.orange} sx={{ fontWeight: "bold" }} variant="h5" component="h3">{feature.title}</Typography>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={{ xs: 1, sm: 3 }}>
                      {feature.points.map((point, index) => (
                        <Stack direction={{ xs: "row", sm: "column" }} key={index} alignItems="center" spacing={1}>
                          <Box 
                              sx={{
                              width: {
                                  xs: 88,
                                  sm: 156
                              },
                              marginRight: {
                                xs: "20px",
                                sm: 0,
                              },
                              img: {
                                  width: '100%',
                                  height: 'auto'
                              }
                              }}
                          >
                            <img 
                            src={point.pointImage.src} 
                            alt={point.title} 
                            width={point.pointImage.width}
                            height={point.pointImage.height} />
                          </Box>
                          <Box sx={{ color: COLORS.orange, fontWeight: "bold", flex: 1, textAlign: { xs: "left", sm: "center" } }}>{point.title}</Box>
                        </Stack>
                        ))}
                    </Stack>
                  </Stack>
                </Box>
              </ScrollZoom>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
      <MFCBookCTA />
      <Box sx={{ position: "relative", padding: "40px 0" }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <ScrollZoom>
              <MFCSectionHeader title="活躍中の先輩オーナーの声" subtitle="Owner&apos;s Voice" />
            </ScrollZoom>
            <MFCCardList cards={fcCards_ownerVoice_Top} />
          </Stack>
        </Container>
      </Box>
      <MFCBookCTA />
    </Box>
  );
}