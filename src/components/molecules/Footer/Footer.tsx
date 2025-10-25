import React from 'react';
import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from '@components/atoms';
import {
  StyledFooter,
  FooterInner,
  LogoSection,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterLink,
  ContactInfo,
  BottomBar,
  SocialLinks,
} from './Footer.style';

export interface FooterProps {
  // Optional props for customization
  logo?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ logo }) => {
  // Footer content structure based on the screenshot
  const whatWeDo = [
    'Analytical R&D',
    'QC Testing',
    'ICH Stability Studies',
    'Impurity Profiling',
    'Extractables & Leachables (E&L)',
    'Nitrosamine Impurity Solutions (Fast-Track)',
    'Regulatory Consulting',
    'Training Programs',
    'Fast-Track Testing',
    'AI & Predictive Modeling',
  ];

  const about = [
    'Our Mission',
    'Our Values',
    'Openings',
    'Affiliates',
    'Recognition',
    'Articles',
    'Client Success',
    'Webinars',
    'Support',
  ];

  const company = [
    'About Agnezar',
    'Leadership',
    'Quality & Compliance',
    'Industries',
  ];

  return (
    <StyledFooter>
      <Box>
        <FooterInner>
          {/* Logo and Contact Section */}
          <LogoSection>
            {logo || (
              <Box component="img" src="/assets/logos/main-logo.svg" alt="Agnezar" sx={{ width: 150, height: 'auto', mb: 3 , background: "white" , padding:".75rem",borderRadius: ".5rem"}} />
            )}
            <ContactInfo>
              <Box>T: 1-555-439-5782</Box>
              <Box>E: info@example-tech.com</Box>
              <Box sx={{ mt: 2 }}>
                <Box>A: New York, USA</Box>
                <Box>Tech Valley</Box>
                <Box>123 Innovation Dr</Box>
                <Box>Albany, NY 12203</Box>
                <Box>(518) 555-1234</Box>
              </Box>
            </ContactInfo>
          </LogoSection>

          {/* What We Do Section */}
          <Box>
            <FooterHeading>What We Do</FooterHeading>
            <FooterList>
              {whatWeDo.map((item, index) => (
                <FooterListItem key={index}>
                  <FooterLink href="#">{item}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </Box>

          {/* About Section */}
          <Box>
            <FooterHeading>About</FooterHeading>
            <FooterList>
              {about.map((item, index) => (
                <FooterListItem key={index}>
                  <FooterLink href="#">{item}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </Box>

          {/* Company Section */}
          <Box>
            <FooterHeading>Company</FooterHeading>
            <FooterList>
              {company.map((item, index) => (
                <FooterListItem key={index}>
                  <FooterLink href="#">{item}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </Box>
        </FooterInner>

        {/* Bottom Bar */}
        <FooterInner>
          <BottomBar>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <FooterLink href="#">UK:</FooterLink>
              <FooterLink href="#">Lorweufs</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
            </Box>
            <SocialLinks>
              <FooterLink href="#" target="_blank" rel="noopener">
                <LinkedInIcon />
              </FooterLink>
              <FooterLink href="#" target="_blank" rel="noopener">
                <GitHubIcon />
              </FooterLink>
              <FooterLink href="#" target="_blank" rel="noopener">
                <TwitterIcon />
              </FooterLink>
              <FooterLink href="#" target="_blank" rel="noopener">
                <FacebookIcon />
              </FooterLink>
              <FooterLink href="#" target="_blank" rel="noopener">
                <YouTubeIcon />
              </FooterLink>
            </SocialLinks>
          </BottomBar>
        </FooterInner>
      </Box>
    </StyledFooter>
    // </StyledFooter>
  );
};
