import React from 'react';
import { Box } from '@mui/material';
import { useAboutUs } from './AboutUs.hook';
import { StyledAboutUs } from './AboutUs.style';
// Typography/Card/Button from atoms not used here
import { HeroSectionWithContent } from '@components/molecules/HeroSectionWithContent';
import { HeroMediaSection } from '@components/molecules/HeroMediaSection';
import { OurMission } from '@components/molecules/OurMission';
import { AgnezerAdvantage } from '../../components/molecules/AgnezerAdvantage/AgnezerAdvantage'
import { UnParalleled } from '@/components';

export const AboutUs: React.FC = () => {
  const {
    heroConfig,
    mission,
    cards
  } = useAboutUs();

  return (
    <StyledAboutUs>
      {/* Hero Section */}
      <HeroSectionWithContent
        sectionLabel="ABOUT"
        title={heroConfig.title}
        description={heroConfig.description}
        imageSrc="/assets/images/about-hero.png"
        backgroundColor="background.default"
      />

      {/* Media section below hero (text + large media placeholder) */}
      <HeroMediaSection
        title={"Meet our team of industry experts guiding your projects with decades of experience in pharmaceutical analysis, regulatory compliance, and quality assurance."}
        imageSrc="/assets/images/meetOurteam.png"
      />

      {/* Our Mission section (uses UnParalleled + CardsGrid internally) */}
      <OurMission
        smallText="OUR MISSION & VISION"
        mainHeading="Built for Rigor. Designed for Partnership."
        description={mission}
        cards={cards}
      />

      {/* Agnezer Advantage / Our Values */}
      <AgnezerAdvantage
        title="Our Values"
        description={"At Agnezar, our values define who we are and guide every decision, discovery, and collaboration."}
        cards={[
          {
            title: 'Integrity',
            description: 'We uphold the highest ethical and scientific standards in every analysis, ensuring transparency, trust, and accountability across all operations.',
          },
          {
            title: 'Innovation',
            description: 'We embrace technology, automation, and AI-driven solutions to continuously enhance analytical precision, accelerate research, and redefine industry benchmarks.',
          },
          {
            title: 'Excellence',
            description: 'We are committed to delivering reliable, high-quality results that meet and exceed international regulatory and scientific standards.',
          },
          {
            title: 'Collaboration',
            description: 'We believe in the power of partnerships—working closely with clients, researchers, and industry experts to achieve shared success and scientific advancement.',
          },
          {
            title: 'Quality & Compliance',
            description: 'We maintain a culture of quality rooted in robust systems, validated methods, and continuous improvement aligned with global regulatory requirements.',
          },
          {
            title: 'Sustainability',
            description: 'We promote responsible practices that reduce environmental impact, encourage resource efficiency, and contribute to a healthier world.',
          },
          {
            title: 'Empowerment',
            description: 'We foster a culture where knowledge, curiosity, and teamwork empower our people to innovate, learn, and lead in the field of analytical science.',
          },
        ]}
        cardHeight={100}
      />
      {/* The Agnezar Advantage section */}

      <Box sx={{ width: "90%", mx: "auto" }}>
        <UnParalleled
          smallText={"Our Leadership"}
          mainHeading={"Driven by Science. Defined by Expertise."}
          description={"At Agnezar, our leadership team combines decades of global experience in pharmaceutical analysis, regulatory affairs, and quality assurance with the agility and innovation of a startup.Our experts deliver end-to-end solutions for Module 3 – CMC, including analytical testing, regulatory strategy, and FDA query resolution, guiding projects with precision, integrity, and scientific excellence.United by a mission to transform pharmaceutical analysis, our team of scientists, strategists, and innovators ensures every solution is compliant, data-driven, and designed for client success."}
        />
      </Box>
      <Box sx={{marginBottom: "1px"}}>
      <AgnezerAdvantage
        title="The Agnezar Advantage"
        cards={[
          {
            title: 'Regulatory Excellence',
            description:
              'Navigate global submissions with confidence. Our facilities are cGMP, GLP, and ISO 17025 compliant, registered with the FDA, and adhere to EMA guidelines to ensure your data meets the highest standards of integrity and acceptance.',
          },
          {
            title: 'Innovation-Driven Science',
            description:
              'Leverage the power of technology to accelerate your timeline. We employ AI-powered analytics, robotic automation, and predictive modeling to deliver results with unparalleled speed, precision, and data integrity.',
          },
          {
            title: 'One-Stop Solutions',
            description:
              'Streamline your development lifecycle with a single, integrated partner. Our comprehensive services unite analytical testing, regulatory consulting, and formulation support under one roof, eliminating handoffs and ensuring data continuity.',
          },
          {
            title: 'Client-First Partnership',
            description:
              'Experience a new standard of transparency and support. We provide dedicated project managers and 24/7 access to your project data through personalized, real-time dashboards, putting critical information at your fingertips.',
          },
          {
            title: 'Real-Time Project Dashboards',
            description:
              "Why wait for a weekly update? Our secure client portal provides 24/7 access to your project's progress. Track sample status, view preliminary results, and access final reports anytime, anywhere.",
          },
          {
            title: 'Dedicated Project Managers',
            description:
              'Your project is supported by a dedicated Project Manager who serves as your single point of contact. This expert is not just a coordinator but a scientific liaison who understands your goals, ensures seamless communication, and proactively manages your project to meet every milestone.',
          },
          {
            title: 'An Unparalleled Client Experience',
            description:
              "Engineered for Your Success — In today's competitive landscape, access to data is not enough. You need a partner who has engineered a smarter, faster, and more transparent way for you to get the critical information you need to make decisions. We have moved beyond the traditional CRO model to provide a service experience built on visibility and control.",
          },
        ]}
        cardHeight={120}
      />
      </Box>


      {/* CTA Section */}
      {/* <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Ready to Work With Us?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Let's discuss how we can help transform your business
            </Typography>
            <Button variant="secondary" size="large" onClick={handleContactUs}>
              Contact Us Today
            </Button>
          </Box>
        </Container>
      </Box> */}
    </StyledAboutUs>
  );
};
