import { useState, useCallback } from 'react';
import { Email, Phone, LocationOn } from '@mui/icons-material';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export const useContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const heroConfig = {
    title: 'Contact Us',
    description: 'Ready to transform your business? Get in touch with our team of experts to discuss your project and discover how we can help you achieve your goals.',
  };
// T: +1 (210) 913-7096
// E: info@agnezar.com
// Agnezar Life Sciences LLC
// Hightstown
// NJ 08520
// +1 (210) 913-7096
  const contactInfo = {
    description: 'We\'re here to help you succeed. Reach out to us through any of the channels below, and we\'ll get back to you within 24 hours.',
    details: [
      {
        icon: <Email sx={{ color: 'white' }} />,
        title: 'Email Us',
        value: 'info@agnezar.com',
      },
      {
        icon: <Phone sx={{ color: 'white' }} />,
        title: 'Call Us',
        value: '+1 (210) 913-7096',
      },
      {
        icon: <LocationOn sx={{ color: 'white' }} />,
        title: 'Visit Us',
        value: 'Agnezar Life Sciences LLC, Hightstown, NJ 08520',
      },
      // {
      //   icon: <Schedule sx={{ color: 'white' }} />,
      //   title: 'Business Hours',
      //   value: 'Monday - Friday: 9:00 AM - 6:00 PM',
      // },
    ],
  };

  const services = [
        'AR&D',
        'QC Testing',
        'Stability Studies',
        'Impurity Profiling',
        'E&L',
        'Nitrosamine Solutions',
        'Regulatory Consulting',
        'Other',
      ].map((s) => ({ value: s, label: s }));

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k-plus', label: '$250,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' },
  ];

  const handleSubmit = useCallback(async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Contact form data:', data);
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return {
    heroConfig,
    contactInfo,
    services,
    budgetRanges,
    handleSubmit,
    isSubmitting,
    submitError,
    submitSuccess,
  };
};
