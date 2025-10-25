import React from 'react';
import { StyledMakeEvery } from './MakeEveryStudy.style';
import UnParalleled from '../UnParalleled/UnParalleled';

export const MakeEveryStudy: React.FC = () => {
    return (
        <StyledMakeEvery>
            <UnParalleled 
                smallText='RESOURCES'
                mainHeading='Insights & Expertise from Our Scientific Leaders'
                description='Stay informed on the latest scientific advancements, regulatory trends, and analytical best practices. Our Resources Hub is your source for expert-written content designed to help you navigate the complexities of pharmaceutical development.'
            />
        </StyledMakeEvery>
    );
};

export default MakeEveryStudy;
