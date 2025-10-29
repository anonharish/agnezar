import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  StyledFooter,
  FooterInner,
  LogoSection,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterLink,
  ContactInfo,
} from './Footer.style';

export interface FooterProps {
  // Optional props for customization
  logo?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ logo }) => {
  const navigate = useNavigate();

  const scrollToElement = (elementId: string, headerOffset: number = 120) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleNavigation = (path: string, elementId?: string) => {
    const currentPath = window.location.pathname;
    
    if (currentPath === path) {
      // If already on the page, just scroll
      if (elementId) scrollToElement(elementId);
    } else {
      // Navigate and then scroll
      navigate(path);
      if (elementId) scrollToElement(elementId);
    }
  };

  // info@agnezar.com
  const contactInfo = {
    phone: '+1 (210) 913-7096 ',
    email: 'info@agnezar.com',
    address: {
      // contactName: 'Agnezar Life Sciences LLC',
      // country: 'Hightstown',
      // // area: 'Tech Valley',
      // street: ' NJ 08520',
      // // city: 'Albany, NY 12203',
      // phone: '+1 (210) 913-7096'
    }
  };

  // Footer content structure with navigation links
  const whatWeDo = [
    { label: 'Analytical R&D', href: '/services' },
    { label: 'QC Testing', href: '/why-agnezar' },
    // { label: 'ICH Stability Studies', href: '/services/ich-stability-studies' },
    // { label: 'Impurity Profiling', href: '/services/impurity-profiling' },
    // { label: 'Extractables & Leachables (E&L)', href: '/services/el-testing' },
    { label: 'Nitrosamine Impurity Solutions (Fast-Track)', href: '/' },
    // { label: 'Regulatory Consulting', href: '/services/regulatory-consulting' },
    // { label: 'Training Programs', href: '/services/training' },
    // { label: 'Fast-Track Testing', href: '/services/fast-track-testing' },
    // { label: 'AI & Predictive Modeling', href: '/services/ai-modeling' },
  ];

  const about = [
    { label: 'Our Mission', href: '/about' },
    { label: 'Our Values', href: '/about' },
    // { label: 'Openings', href: '/about/careers' },
    // { label: 'Affiliates', href: '/about/affiliates' },
    // { label: 'Recognition', href: '/about/recognition' },
    // { label: 'Articles', href: '/about/articles' },
    // { label: 'Client Success', href: '/about/success-stories' },
    // { label: 'Webinars', href: '/resources/webinars' },
    // { label: 'Support', href: '/' },
  ];

  const company = [
    { label: 'About Agnezar', href: '/about' },
    { label: 'Leadership', href: '/about' },
    { label: 'Quality & Compliance', href: '/why-agnezar' },
    { label: 'Industries', href: '/industries' },
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
              {/* <Box sx={{ mt: 2 }}>
                <Box> {contactInfo.address.contactName}</Box>
                <Box> {contactInfo.address.country}</Box>
             
                <Box>{contactInfo.address.street}</Box>
              
                <Box>{contactInfo.address.phone}</Box>
              </Box> */}
            </ContactInfo>
          </LogoSection>

          {/* What We Do Section */}
          <Box>
            <FooterHeading>What We Do</FooterHeading>
            <FooterList>
              {whatWeDo.map((item, index) => (
                <FooterListItem key={index}>
                  <FooterLink
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.label === 'Analytical R&D') {
                        handleNavigation('/services');
                      } else if (item.label === 'QC Testing') {
                        handleNavigation('/why-agnezar', 'our-leaders');
                      } else if (item.label === 'Nitrosamine Impurity Solutions (Fast-Track)') {
                        handleNavigation('/', 'spotlight');
                      } else if (item.href) {
                        handleNavigation(item.href);
                      }
                    }}
                    href={item.href}
                    sx={{ cursor: 'pointer' }}
                  >
                    {item.label}
                  </FooterLink>
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
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.label === 'Our Mission') {
                        handleNavigation('/about', 'mission-section');
                      } else if (item.label === 'Our Values') {
                        handleNavigation('/about', 'values-section');
                      }
                    }}
                    href={item.href}
                    sx={{ cursor: 'pointer' }}
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
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.label === 'About Agnezar') {
                        handleNavigation('/about');
                      } else if (item.label === 'Leadership') {
                        handleNavigation('/about', 'leadership-section');
                      } else if (item.label === 'Quality & Compliance') {
                        handleNavigation('/why-agnezar', 'our-leaders');
                      } else if (item.label === 'Industries') {
                        handleNavigation('/industries');
                      }
                    }}
                    href={item.href}
                    sx={{ cursor: 'pointer' }}
                  >{item.label}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </Box>
        </FooterInner>

        {/* Bottom Bar */}
        {/* <BottomBar> */}
          {/* <ReviewSection>
            <Box>
              <ReviewText sx={{ mb: 1 }}> REVIEWS </ReviewText>
              <ReviewLogo>
                <img src="/assets/logos/clutch-logo.png" alt="Clutch Reviews" />
              </ReviewLogo>
            </Box>
            <ReviewContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ReviewStars>
                  {'★★★★★'}
                </ReviewStars>
              </Box>
              <ReviewText>
                45 REVIEWS
              </ReviewText>
            </ReviewContent>
          </ReviewSection> */}
          {/* <LocationLinks>
            <Box>
              <Typography component="p">UK:</Typography>
              <Typography component="p">Lorweufs</Typography>
            </Box>
            <Box component="span" className="divider" />
            <Box>
              <Typography component="p">Privacy Policy</Typography>
              <Typography component="p">Terms of Use</Typography>
            </Box>
          </LocationLinks> */}
          {/* <SocialLinks>
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
          </SocialLinks> */}
        {/* </BottomBar> */}
      </Box>
    </StyledFooter>
    // </StyledFooter>
  );
};
