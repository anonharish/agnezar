import React from 'react';
import { Box, Container, Grid, Link, Divider } from '@mui/material';
import { useFooter } from './Footer.hook';
import { StyledFooter } from './Footer.style';
import { Typography } from '@components/atoms';

export interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  links?: {
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }[];
  socialLinks?: Array<{
    platform: string;
    href: string;
    icon: React.ReactNode;
  }>;
  copyright?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Agnezar',
  companyDescription = 'Your trusted partner in digital transformation and innovation.',
  links = [],
  socialLinks = [],
  copyright = `© ${new Date().getFullYear()} Agnezar. All rights reserved.`,
}) => {
  const { handleLinkClick } = useFooter();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 6 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {companyName}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                {companyDescription}
              </Typography>
              
              {/* Social Links */}
              {socialLinks.length > 0 && (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': { color: 'primary.main' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>

          {/* Links */}
          {links.map((section, sectionIndex) => (
            <Grid key={sectionIndex} item xs={12} sm={6} md={2}>
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  {section.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3 }} />
        
        {/* Copyright */}
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="body2" color="textSecondary">
            {copyright}
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};
