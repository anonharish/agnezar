import React from 'react';
import { Container, Grid, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Star, Security, Speed, Support } from '@mui/icons-material';
import { useWhyAgnezar } from './WhyAgnezar.hook';
import { StyledWhyAgnezar } from './WhyAgnezar.style';
import { Typography, Card, Button } from '@components/atoms';

export const WhyAgnezar: React.FC = () => {
  const {
    heroConfig,
    advantages,
    testimonials,
    awards,
    handleGetStarted,
    handleContactUs,
  } = useWhyAgnezar();

  return (
    <StyledWhyAgnezar>
      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 3 }}>
              {heroConfig.title}
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto' }}>
              {heroConfig.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Advantages Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Why Choose Agnezar?
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Discover what makes us the preferred choice for businesses worldwide
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {advantages.map((advantage, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Card sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        flexShrink: 0,
                      }}
                    >
                      {advantage.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ mb: 2 }}>
                        {advantage.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                        {advantage.description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <List dense>
                    {advantage.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              What Our Clients Say
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Real feedback from satisfied customers
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Card sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} color="warning" fontSize="small" />
                      ))}
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontStyle: 'italic' }}>
                      "{testimonial.quote}"
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {testimonial.position}, {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Awards & Recognition */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Awards & Recognition
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Industry recognition for our excellence and innovation
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {awards.map((award, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography variant="h4" color="white">
                      {award.icon}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {award.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {award.year}
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
              Ready to Experience the Agnezar Difference?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Join hundreds of satisfied clients who trust us with their digital transformation
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="secondary" size="large" onClick={handleGetStarted}>
                Get Started Today
              </Button>
              <Button variant="outline" size="large" onClick={handleContactUs}>
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </StyledWhyAgnezar>
  );
};
