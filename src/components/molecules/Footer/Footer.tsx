import React from 'react';
import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
  // Footer content structure with navigation links
  const whatWeDo = [
    { label: 'Analytical R&D', href: '/services/analytical-rd' },
    { label: 'QC Testing', href: '/services/qc-testing' },
    { label: 'ICH Stability Studies', href: '/services/ich-stability-studies' },
    { label: 'Impurity Profiling', href: '/services/impurity-profiling' },
    { label: 'Extractables & Leachables (E&L)', href: '/services/el-testing' },
    { label: 'Nitrosamine Impurity Solutions (Fast-Track)', href: '/services/nitrosamine-solutions' },
    { label: 'Regulatory Consulting', href: '/services/regulatory-consulting' },
    { label: 'Training Programs', href: '/services/training' },
    { label: 'Fast-Track Testing', href: '/services/fast-track-testing' },
    { label: 'AI & Predictive Modeling', href: '/services/ai-modeling' },
  ];

  const about = [
    { label: 'Our Mission', href: '/about/mission' },
    { label: 'Our Values', href: '/about/values' },
    { label: 'Openings', href: '/about/careers' },
    { label: 'Affiliates', href: '/about/affiliates' },
    { label: 'Recognition', href: '/about/recognition' },
    { label: 'Articles', href: '/about/articles' },
    { label: 'Client Success', href: '/about/success-stories' },
    { label: 'Webinars', href: '/resources/webinars' },
    { label: 'Support', href: '/support' },
  ];

  const company = [
    { label: 'About Agnezar', href: '/company/about' },
    { label: 'Leadership', href: '/company/leadership' },
    { label: 'Quality & Compliance', href: '/company/quality-compliance' },
    { label: 'Industries', href: '/company/industries' },
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
                  <FooterLink 
                  // href={item.href}
                  >{item.label}</FooterLink>
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
                  <FooterLink 
                  // href={item.href}
                  >{item.label}</FooterLink>
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
                  <FooterLink 
                  // href={item.href}
                  >{item.label}</FooterLink>
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
