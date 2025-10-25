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
  // Contact information structure
  const contactInfo = {
    phone: '1-555-439-5782',
    email: 'info@example-tech.com',
    address: {
      country: 'New York, USA',
      area: 'Tech Valley',
      street: '123 Innovation Dr',
      city: 'Albany, NY 12203',
      phone: '(518) 555-1234'
    }
  };

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
              <Box component="img" src="/assets/logos/main-logo.svg" alt="Agnezar" sx={{ width: 150, height: 'auto', mb: 3, background: "white", padding: ".75rem", borderRadius: ".5rem" }} />
            )}
            <ContactInfo>
              <Box>T: {contactInfo.phone}</Box>
              <Box>E: {contactInfo.email}</Box>
              <Box sx={{ mt: 2 }}>
                <Box>A: {contactInfo.address.country}</Box>
                <Box>{contactInfo.address.area}</Box>
                <Box>{contactInfo.address.street}</Box>
                <Box>{contactInfo.address.city}</Box>
                <Box>{contactInfo.address.phone}</Box>
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
            <Box>
              <ReviewText sx={{ mb: 1 }}> REVIEWS </ReviewText>
              <ReviewLogo>
                <img src="/assets/logos/clutch-logo.png" alt="Clutch Reviews" />
              </ReviewLogo>
            </Box>
            <ReviewContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {/* <ReviewText component="span">REVIEWS</ReviewText> */}
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
            <Box>
              <Typography component="p">UK:</Typography>
              <Typography component="p">Lorweufs</Typography>
            </Box>
            <Box component="span" className="divider" />
            <Box>
              <Typography component="p">Privacy Policy</Typography>
              <Typography component="p">Terms of Use</Typography>
            </Box>
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
