import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Phone, Email, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { useTopBar } from './TopBar.hook';
import { StyledTopBar } from './TopBar.style';

export interface TopBarProps {
  phone?: string;
  email?: string;
  socialLinks?: Array<{
    platform: string;
    href: string;
    icon: React.ReactNode;
  }>;
}

export const TopBar: React.FC<TopBarProps> = ({
  phone = '+1 (555) 123-4567',
  email = 'hello@agnezar.com',
  socialLinks = [],
}) => {
  const { defaultSocialLinks } = useTopBar();

  const socialIcons = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

  return (
    <StyledTopBar>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
          {/* Contact Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone fontSize="small" />
              <Typography variant="body2">
                {phone}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" />
              <Typography variant="body2">
                {email}
              </Typography>
            </Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {socialIcons.map((social, index) => (
              <IconButton
                key={index}
                size="small"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit' }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </StyledTopBar>
  );
};
