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
    label: 'White Papers',
    items: [
      { 
        id: 'wp1', 
        title: 'Navigating the Evolving Global Nitrosamine Guidelines: A Strategic Approach', 
        summary: 'Exploring regulatory expectations, risk assessments, and mitigation strategies to ensure compliance.', 
        buttonLabel: 'Read The Blog' 
      },
      { 
        id: 'wp2', 
        title: 'Best Practices for Method Validation in Biologic Drug Products', 
        summary: 'Practical guidance on validation strategies tailored for complex biologics.', 
        buttonLabel: 'Read The Blog' 
      },
      { 
        id: 'wp3', 
        title: 'A Risk-Based Approach to Designing Effective Extractables & Leachables Studies', 
        summary: 'Strategic considerations to minimize risks and meet regulatory standards.', 
        buttonLabel: 'Read The Blog' 
      },
    ]
  },
  {
    id: 'webinars',
    label: 'Webinars',
    items: [
      { 
        id: 'wb1', 
        title: 'On-Demand Webinar: De-risking Your IND Submission with a Robust Analytical Package', 
        summary: 'Learn how to build an analytical strategy that supports faster and safer IND approvals.', 
        buttonLabel: 'Register' 
      },
      { 
        id: 'wb2', 
        title: 'Upcoming Webinar: The Role of Automation and AI in Modern QC Laboratories', 
        summary: 'Explore how advanced technologies enhance efficiency and data integrity.', 
        buttonLabel: 'Register' 
      },
    ]
  },
  {
    id: 'posters',
    label: 'Scientific Posters & Publications',
    items: [
      { 
        id: 'pp1', 
        title: 'Scientific Posters & Publications Library', 
        summary: 'A library of scientific posters presented at major industry conferences and links to peer-reviewed publications authored by our expert team.', 
        buttonLabel: 'View' 
      },
    ]
  },
]), []);


  return { menu };
};
