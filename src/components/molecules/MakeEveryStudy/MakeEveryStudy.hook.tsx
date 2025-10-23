import { useMemo } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  summary?: string;
  buttonLabel?: string;
}

export interface MenuGroup {
  id: string;
  label: string;
  items: AccordionItem[];
}

export const useMakeEveryStudy = () => {
  const menu = useMemo(() => ([
    {
      id: 'whitepaper',
      label: 'White Paper',
      items: [
        { id: 'wp1', title: 'Nitrosamine Risk Assessment in Pharmaceutical Development', summary: 'Comprehensive guide to detection, mitigation, and regulatory compliance.', buttonLabel: 'Read The Blog' },
        { id: 'wp2', title: 'AI in Analytical Method Development', summary: 'How predictive modeling accelerates timelines and conserves API.', buttonLabel: 'Read The Blog' },
        { id: 'wp3', title: 'ICH Q2(R2) Implementation Strategies', summary: 'Practical approaches to the updated analytical validation guideline.', buttonLabel: 'Read The Blog' },
      ]
    },
    {
      id: 'webinars',
      label: 'Webinars',
      items: [
        { id: 'wb1', title: 'Upcoming Webinar 1', summary: 'Details about webinar 1', buttonLabel: 'Register' },
        { id: 'wb2', title: 'Upcoming Webinar 2', summary: 'Details about webinar 2', buttonLabel: 'Register' },
      ]
    },
    {
      id: 'posters',
      label: 'Posters & Publications',
      items: [
        { id: 'pp1', title: 'Poster 1', summary: 'Poster summary 1', buttonLabel: 'View' },
        { id: 'pp2', title: 'Poster 2', summary: 'Poster summary 2', buttonLabel: 'View' },
      ]
    },
  ]), []);

  return { menu };
};
