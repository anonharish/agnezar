import React from 'react';
import { Container, Grid, Box, Chip } from '@mui/material';
import { useIndustries } from './Industries.hook';
import { StyledIndustries } from './Industries.style';
import { Typography, Card, Button } from '@components/atoms';

export const Industries: React.FC = () => {
  const {
    heroConfig,
    industries,
    caseStudies,
    handleLearnMore,
    handleViewCaseStudy,
  } = useIndustries();

  return (
    <StyledIndustries>
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

      {/* Industries Grid */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Industries We Serve
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Specialized solutions for diverse industry needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {industries.map((industry, index) => (
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
                        {industry.icon}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {industry.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                      {industry.description}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Solutions:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {industry.solutions.map((solution, solutionIndex) => (
                        <Chip
                          key={solutionIndex}
                          label={solution}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleLearnMore(industry.title)}
                  >
                    Learn More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Case Studies */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Success Stories
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Real results from our industry partnerships
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {caseStudies.map((caseStudy, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Card sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ mb: 3 }}>
                    <Chip
                      label={caseStudy.industry}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {caseStudy.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                      {caseStudy.description}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h6" color="primary">
                          {caseStudy.results.improvement}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Performance Improvement
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" color="primary">
                          {caseStudy.results.timeline}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Project Timeline
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleViewCaseStudy(caseStudy.id)}
                  >
                    View Case Study
                  </Button>
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
              Ready to Transform Your Industry?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Let's discuss how we can help your industry-specific challenges
            </Typography>
            <Button variant="secondary" size="large" onClick={() => handleLearnMore('Contact')}>
              Get Industry Solution
            </Button>
          </Box>
        </Container>
      </Box>
    </StyledIndustries>
  );
};
