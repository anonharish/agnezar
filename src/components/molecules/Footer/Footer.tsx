import React from 'react';
import { Box, Typography, Link } from '@mui/material';
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
  ReviewSection,
  ReviewLogo,
  ReviewContent,
  ReviewStars,
  ReviewText,
  LocationLinks,
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
        <BottomBar>
          {/* Reviews Section */}
          <ReviewSection>
            <ReviewLogo>
              <img src="/assets/images/clutch-logo.png" alt="Clutch Reviews" />
            </ReviewLogo>
            <ReviewContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ReviewText component="span">REVIEWS</ReviewText>
                <ReviewStars>
                  {'★★★★★'}
                </ReviewStars>
              </Box>
              <ReviewText>
                45 REVIEWS
              </ReviewText>
            </ReviewContent>
          </ReviewSection>

          {/* Location Links */}
          <LocationLinks>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box component="span">UK:</Box>
              <Box component="a" href="#">Lorweufs</Box>
            </Box>
            <Box component="span" sx={{ 
              width: '1px', 
              height: '20px', 
              backgroundColor: 'rgba(255,255,255,0.1)' 
            }} />
            <Box component="a" href="#">Privacy Policy</Box>
            <Box component="a" href="#">Terms of Use</Box>
          </LocationLinks>

          {/* Social Links */}
          <SocialLinks>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon />
            </Link>
          </SocialLinks>
        </BottomBar>
      </Box>
    </StyledFooter>
    // </StyledFooter>
  );
};
