import React from 'react';
import { Container, Grid, Box, Avatar } from '@mui/material';
import { useAboutUs } from './AboutUs.hook';
import { StyledAboutUs } from './AboutUs.style';
import { Typography, Card, Button } from '@components/atoms';
import { HeroSectionWithContent } from '@components/molecules/HeroSectionWithContent';
import { HeroMediaSection } from '@components/molecules/HeroMediaSection';
import { OurMission } from '@components/molecules/OurMission';

export const AboutUs: React.FC = () => {
  const {
    heroConfig,
    mission,
    vision,
    values,
    team,
    handleContactUs,
  } = useAboutUs();

  return (
    <StyledAboutUs>
      {/* Hero Section */}
      <HeroSectionWithContent
        sectionLabel="ABOUT"
        title={heroConfig.title}
        description={heroConfig.description}
        imageSrc="/assets/images/about-hero.png"
        backgroundColor="background.default"
      />

      {/* Media section below hero (text + large media placeholder) */}
      <HeroMediaSection
        title={"Meet our team of industry experts guiding your projects with decades of experience in pharmaceutical analysis, regulatory compliance, and quality assurance."}
        imageSrc="/assets/images/meetOurteam.png"
      />

      {/* Our Mission section (uses UnParalleled + CardsGrid internally) */}
      <OurMission
        smallText="OUR MISSION & VISION"
        mainHeading="Built for Rigor. Designed for Partnership."
        description={mission}
        heroTitle={"Meet our team of industry experts guiding your projects with decades of experience in pharmaceutical analysis, regulatory compliance, and quality assurance."}
        heroImageSrc="/assets/images/meetOurteam.png"
        cards={[
          { title: 'Our Mission', description: mission, icon: 'assets/icons/mission-icon.png' },
          { title: 'Our Vision', description: vision, icon: 'assets/icons/vision-icon.png' },
        ]}
      />

      {/* Mission & Vision */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  {mission}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  {vision}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Our Values
            </Typography>
            <Typography variant="body1" color="textSecondary">
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card hoverable sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" color="white">
                      {value.icon}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Meet Our Team
            </Typography>
            <Typography variant="body1" color="textSecondary">
              The talented individuals behind our success
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.bio}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Ready to Work With Us?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Let's discuss how we can help transform your business
            </Typography>
            <Button variant="secondary" size="large" onClick={handleContactUs}>
              Contact Us Today
            </Button>
          </Box>
        </Container>
      </Box>
    </StyledAboutUs>
  );
};
