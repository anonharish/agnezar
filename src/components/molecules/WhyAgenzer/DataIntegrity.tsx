import React from 'react';
import { StyledAdvantage } from '../AgnezerAdvantage/AgnezerAdvantage.style';
import { HeroSectionWithContent } from '../HeroSectionWithContent';
import { useAboutUs } from '@/pages/AboutUs/AboutUs.hook';
import { useWhyAgnezar } from '@/pages/WhyAgnezar/WhyAgnezar.hook';



export const DataIntegrity = ({
}) => {
  const {
    heroConfigDataIntegrity,
  } = useWhyAgnezar({});

  return (
    <HeroSectionWithContent
        sectionLabel={heroConfigDataIntegrity.title}
        title={heroConfigDataIntegrity.miniTitle}
        description={heroConfigDataIntegrity.description}
        imageSrc="/assets/images/datainegrity.svg"
        backgroundColor="background.default"
        // button
        // buttonLabel={'Book A 15-Min Fit Call'}
      />
  );
};

export default DataIntegrity;
