import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { useHome } from './Home.hook';
import { StyledHome } from './Home.style';
import { Hero } from '@components/molecules';
import { Typography, Card, Button } from '@components/atoms';

export const Home: React.FC = () => {
  const {
    heroConfig,
    features,
  } = useHome();

  return (
    <StyledHome>
      {/* Hero Section */}
      <Hero {...heroConfig} />

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Why Choose Agnezar?
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              We deliver cutting-edge solutions that drive your business forward with innovation and excellence.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Card hoverable sx={{ height: '100%', p: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      <Typography variant="h4" color="white">
                        {feature.icon}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </StyledHome>
  );
};
