import React from 'react';
import { Container, Grid, Box, Chip } from '@mui/material';
import { useOurServices } from './OurServices.hook';
import { StyledOurServices } from './OurServices.style';
import { Typography, Card, Button } from '@components/atoms';

export const OurServices: React.FC = () => {
  const {
    heroConfig,
    services,
    process,
    technologies,
    handleGetQuote,
    handleLearnMore,
  } = useOurServices();

  return (
    <StyledOurServices>
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

      {/* Services Grid */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Our Services
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Comprehensive solutions tailored to your business needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <Card hoverable sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
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
                        mb: 3,
                      }}
                    >
                      <Typography variant="h4" color="white">
                        {service.icon}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleLearnMore(service.title)}
                  >
                    Learn More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Our Process
            </Typography>
            <Typography variant="body1" color="textSecondary">
              How we deliver exceptional results
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {process.map((step, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
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
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technologies */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Technologies We Use
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Cutting-edge tools and frameworks for modern solutions
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {technologies.map((tech, index) => (
              <Grid key={index} item xs={6} sm={4} md={3}>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {tech.category}
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
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Let's discuss your project and create something amazing together
            </Typography>
            <Button variant="secondary" size="large" onClick={handleGetQuote}>
              Get Free Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </StyledOurServices>
  );
};
