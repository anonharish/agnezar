import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useOurServices = () => {
  const navigate = useNavigate();

  const heroConfig = {
    title: 'Our Services',
    description: 'We offer comprehensive technology solutions designed to transform your business and drive growth.',
  };

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure', 'Scalable'],
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Performance', 'Cross-Platform', 'App Store Ready', 'Push Notifications', 'Offline Support'],
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'Cost Optimization', 'Security', 'Monitoring'],
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Automation'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business and data.',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring', 'Incident Response'],
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Predictive Modeling', 'Reporting'],
    },
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'We understand your business goals, challenges, and requirements through detailed consultation.',
    },
    {
      title: 'Planning',
      description: 'We create a comprehensive project plan with timelines, milestones, and deliverables.',
    },
    {
      title: 'Development',
      description: 'Our expert team builds your solution using agile methodologies and best practices.',
    },
    {
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support to ensure success.',
    },
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'GraphQL', category: 'API' },
    { name: 'TypeScript', category: 'Language' },
  ];

  const cards = [
    {
      title: 'Research and Development',
      description: [
        'Innovating for Scientific Excellence',
        'At Agnezar, our R&D team drives the discovery and development of robust analytical methods. Leveraging cutting-edge technologies and multidisciplinary expertise, we provide solutions that accelerate product development, optimize formulations, and enhance pharmaceutical innovation',
      ],
      moreInfo: [
        {
          moreInfoItemHeading: 'Our Capabilities:',
          moreInfoItemContent: [
            {
              contentHeading: 'Reverse Engineering & Deformulation Studies:',
              content: [
                'Comprehensive comparative analysis for formulation benchmarking and predictive performance evaluation.',
                'Support for competitive product assessment and lifecycle management strategies.',
              ],
            },
            {
              contentHeading: 'Unknown Impurity Identification & Characterization:',
              content: [
                'Structural elucidation using advanced chromatographic and spectroscopic techniques',
                'Assessment of degradation pathways and impurity profiling for product safety assurance.',
              ],
            },
            {
              contentHeading: 'Method Development & Validation:',
              content: [
                'Design and validation of analytical methods in full compliance with ICH Q2 (R2) guidelines.',
                'Development of phase-appropriate methods for discovery, development, and commercial stages.',
              ],
            },
            {
              contentHeading: 'Cost-Effective Analytical Solutions:',
              content: [
                'Optimized workflows and method design to reduce testing time and resource utilization.',
                'Customized solutions balancing scientific rigor and operational efficiency.',
              ],
            },
            {
              contentHeading: 'AI and Predictive Modeling:',
              content: [
                'Advanced algorithms optimize analytical method development and predict product stability, minimizing experimental cycles and conserving valuable API.',
                'Data-driven insights enhance accuracy, efficiency, and decision-making across R&D, quality, and regulatory functions.',
              ],
            },
            {
              contentHeading: 'Drug–Device Combination Product Support:',
              content: [
                'Custom method development for drug–device compatibility, extractables/leachables, and release profiles.',
              ],
            },
            {
              contentHeading: 'Technology Transfer & Lifecycle Management:',
              content: [
                'Smooth method transfer across R&D, QA/QC, and manufacturing sites with complete documentation.',
                'Continuous method optimization for improved robustness and regulatory compliance.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Analytical Testing & Quality Compliance',
      description: [
        'Precision You Can Trust. Excellence You Can Rely On.',
        'At Agnezar, we provide comprehensive analytical testing solutions across raw materials, intermediates, finished products, and stability studies, supported by state-of-the-art instrumentation and AI-enhanced data analysis.',
        'Quality is at the core of everything we do. Our laboratory strictly adheres to GMP, GLP, and ISO standards, ensuring every test, report, and workflow meets global regulatory expectations. This integrated approach ensures accurate, reliable, and fully compliant results, supporting every stage of the pharmaceutical lifecycle and empowering our clients to achieve scientific excellence and regulatory success.',
      ],
      moreInfo: [
        {
          moreInfoItemHeading: 'Analytical Testing Capabilities',
          moreInfoItemContent: [
            {
              contentHeading: 'Quality Control (QC) Testing:',
              content: [
                'Ensuring the safety, purity, and potency of your materials and products through comprehensive cGMP testing for raw materials, APIs, and finished goods.',
              ],
            },
            {
              contentHeading: 'ICH Stability Studies:',
              content: [
                'Characterizing product stability and defining shelf life with a full suite of ICH-compliant studies, supported by state-of-the-art, environmentally controlled storage.',
              ],
            },
            {
              contentHeading: 'Impurity Profiling & E&L:',
              content: [
                'Identifying and quantifying critical impurities, including elemental, genotoxic, and residual solvents, as well as comprehensive extractables and leachables programs.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Quality Management and Regulatory Services',
      description: [
        'Beyond Testing — Partnering for Strategic Success',
        'At Agnezar, we go beyond routine testing to become your strategic development partner. Our Quality Management and Regulatory Services are designed to enhance compliance, streamline submissions, and accelerate your product journey from concept to market.',
      ],
      moreInfo: [
        {
          moreInfoItemHeading: 'Regulatory Consulting',
          moreInfoItemDescription: 'Guidance that Translates Science into Compliance\n Navigating global regulatory frameworks demands precision and foresight. Our regulatory experts provide end-to-end support to ensure your submissions meet FDA and international standards.',
          moreInfoItemContent: [
            {
              contentHeading: 'CMC Dossier Preparation',
              content: [
                'Comprehensive support for IND, NDA, and ANDA submissions with a focus on Module 3 (Chemistry, Manufacturing, and Controls).',
              ],
            },
            {
              contentHeading: 'Regulatory Gap Analysis',
              content: [
                'In-depth review of data packages to identify deficiencies and develop proactive solutions.',
              ],
            },
            {
              contentHeading: 'Health Authority Response Support',
              content: [
                'Expert assistance in drafting scientifically robust responses to FDA and other regulatory agency queries.',
              ],
            },
          ],
        },
        {
          moreInfoItemHeading: 'Training and Knowledge Transfer',
          moreInfoItemDescription: 'Empowering Teams with Regulatory and Scientific Excellence\n We offer customized training programs to strengthen your internal quality systems and regulatory readiness',
          moreInfoItemContent: [
            {
              contentHeading: '',
              content: [
                'Implementation of ICH and FDA guidelines.',
              ],
            },
            {
              contentHeading: '',
              content: [
                'Analytical Method Lifecycle Management (AMLCM) best practices.',
              ],
            },
            {
              contentHeading: '',
              content: [
                'Stability program design and management for global compliance.',
              ],
            },
          ],
        },
        {
          moreInfoItemHeading: 'Fast-Track Testing Services',
          moreInfoItemDescription: 'Accelerating Critical Decisions When Time Matters Most\n When regulatory timelines or market demands are urgent, our Fast-Track Testing platform delivers reliable data with speed and precision.',
          moreInfoItemContent: [
            {
              contentHeading: '',
              content: [
                'Priority testing for regulatory queries, manufacturing deviations, or market-driven projects.',
              ],
            },
            {
              contentHeading: '',
              content: [
                'Accelerated turnaround without compromising data integrity or compliance.',
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Next-Generation Analytical Excellence',
      description: [
        'At Agnezar, we envision a future where innovation and compliance work seamlessly together to accelerate healthcare solutions worldwide. Our mission extends beyond analytical testing — we aim to build a next-generation Innovation Plaza, a center of excellence that supports comprehensive testing, characterization, and regulatory guidance for all classes of medicinal products.',
        'With a built-in quality mindset, we are dedicated to overcoming complex regulatory challenges and enabling our partners to achieve faster, safer, and more compliant product development. Our vision expands beyond synthetic pharmaceuticals to embrace biologics, advanced therapies, and emerging drug modalities, positioning Agnezar as a one-stop analytical partner for the evolving healthcare landscape.',
      ],
      moreInfo: [
        {
          moreInfoItemHeading: 'Our Value Commitment',
          moreInfoItemDescription: 'We stand for scientific integrity, intelligent innovation, and global reliability. Every project we undertake is driven by a commitment to precision, transparency, and collaboration — ensuring that your vision becomes a successful, compliant reality.',
        },
      ],
    },
  ];

  const handleGetQuote = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const handleLearnMore = useCallback((serviceTitle: string) => {
    // Handle learn more for specific service
    console.log(`Learn more about ${serviceTitle}`);
  }, []);

  return {
    heroConfig,
    services,
    process,
    technologies,
    cards,
    handleGetQuote,
    handleLearnMore,
  };
};
