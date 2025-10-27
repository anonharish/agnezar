import { HeroSectionWithContent } from '../HeroSectionWithContent';
import { useWhyAgnezar } from '@/pages/WhyAgnezar/WhyAgnezar.hook';



export const DataIntegrity = ({}) => {
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
        // buttonLabel={'Book A Call'}
      />
  );
};

export default DataIntegrity;
