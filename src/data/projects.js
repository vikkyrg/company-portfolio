import { realCompanyWebsites, websitesWithAutoImages } from './websites.js';

// Existing image imports
import projectAuraImg from '../assets/project-aura.png';
import projectKromaImg from '../assets/project-kroma.png';
import homeImg from '../assets/home.png';
import serviceWebsitesImg from '../assets/service-websites.png';
import serviceMobileImg from '../assets/service-mobile.png';
import serviceSaasImg from '../assets/service-saas.png';

// Custom Software - Innomatrics CRM / ERP Platform (6 PNG images)
import crmErp1 from '../assets/custome/crm-erp/1.png';
import crmErp2 from '../assets/custome/crm-erp/2.png';
import crmErp3 from '../assets/custome/crm-erp/3.png';
import crmErp4 from '../assets/custome/crm-erp/4.png';
import crmErp5 from '../assets/custome/crm-erp/5.png';
import crmErp6 from '../assets/custome/crm-erp/6.png';

// Custom Software - Innomatrics Employee Management System (5 PNG images)
import employee1 from '../assets/custome/employee portal/1.png';
import employee2 from '../assets/custome/employee portal/2.png';
import employee3 from '../assets/custome/employee portal/3.png';
import employee4 from '../assets/custome/employee portal/4.png';
import employee5 from '../assets/custome/employee portal/5.png';

// 5 Website Project Image Imports
// 1. AMPSLITE (ampslite 1.png -> 5.png)
import ampslite1 from '../assets/web/ampslite/1.png';
import ampslite2 from '../assets/web/ampslite/2.png';
import ampslite3 from '../assets/web/ampslite/3.png';
import ampslite4 from '../assets/web/ampslite/4.png';
import ampslite5 from '../assets/web/ampslite/5.png';

// 2. AURIX EVENTS (aurix 1.png -> 5.png)
import aurix1 from '../assets/web/aurix/1.png';
import aurix2 from '../assets/web/aurix/2.png';
import aurix3 from '../assets/web/aurix/3.png';
import aurix4 from '../assets/web/aurix/4.png';
import aurix5 from '../assets/web/aurix/5.png';

// 3. EAGLE ENGINEERING (eagle 1.png -> 5.png)
import eagle1 from '../assets/web/eagle/1.png';
import eagle2 from '../assets/web/eagle/2.png';
import eagle3 from '../assets/web/eagle/3.png';
import eagle4 from '../assets/web/eagle/4.png';
import eagle5 from '../assets/web/eagle/5.png';

// 4. HI-TECH ESTATES & INTERIORS (hitech 1.png -> 5.png)
import hitech1 from '../assets/web/hitech/1.png';
import hitech2 from '../assets/web/hitech/2.png';
import hitech3 from '../assets/web/hitech/3.png';
import hitech4 from '../assets/web/hitech/4.png';
import hitech5 from '../assets/web/hitech/5.png';

// 5. NAVADURGA ELECTRICALS (navadurga 1.png -> 5.png)
import navadurga1 from '../assets/web/navadurga/1.png';
import navadurga2 from '../assets/web/navadurga/2.png';
import navadurga3 from '../assets/web/navadurga/3.png';
import navadurga4 from '../assets/web/navadurga/4.png';
import navadurga5 from '../assets/web/navadurga/5.png';

// 4 Application Project Image Imports
// 1. Mantrika Brahma (mantrika brahma 1.png -> 4.png)
import mantrika1 from '../assets/app/mantrika brahma/1.png';
import mantrika2 from '../assets/app/mantrika brahma/2.png';
import mantrika3 from '../assets/app/mantrika brahma/3.png';
import mantrika4 from '../assets/app/mantrika brahma/4.png';

// 2. Nammasavari (nammasavari 1.png -> 5.png)
import nammasavari1 from '../assets/app/nammasavari/1.png';
import nammasavari2 from '../assets/app/nammasavari/2.png';
import nammasavari3 from '../assets/app/nammasavari/3.png';
import nammasavari4 from '../assets/app/nammasavari/4.png';
import nammasavari5 from '../assets/app/nammasavari/5.png';

// 3. Sadhana Cart (sadhana cart 1.png -> 4.png)
import sadhana1 from '../assets/app/sadhana cart/1.png';
import sadhana2 from '../assets/app/sadhana cart/2.png';
import sadhana3 from '../assets/app/sadhana cart/3.png';
import sadhana4 from '../assets/app/sadhana cart/4.png';

// 4. Vistaraa (vistaraa 1.png -> 5.png)
import vistaraa1 from '../assets/app/vistaraa/1.png';
import vistaraa2 from '../assets/app/vistaraa/2.png';
import vistaraa3 from '../assets/app/vistaraa/3.png';
import vistaraa4 from '../assets/app/vistaraa/4.png';
import vistaraa5 from '../assets/app/vistaraa/5.png';

// 4 In Development Projects Images
// 1. E-Commerce Platform (Importing existing 1.png - 5.png from src/assets/dev/ecommerce/)
import ecommerce1 from '../assets/dev/ecommerce/1.png';
import ecommerce2 from '../assets/dev/ecommerce/2.png';
import ecommerce3 from '../assets/dev/ecommerce/3.png';
import ecommerce4 from '../assets/dev/ecommerce/4.png';
import ecommerce5 from '../assets/dev/ecommerce/5.png';

// 2. AutoOps School
import autoops1 from '../assets/dev/autoops/1.png';
import autoops2 from '../assets/dev/autoops/2.png';
import autoops3 from '../assets/dev/autoops/3.png';
import autoops4 from '../assets/dev/autoops/4.png';
import autoops5 from '../assets/dev/autoops/5.png';

// 3. Loan Advisory Platform (Importing existing 1.png - 5.png from src/assets/dev/loan/)
import loan1 from '../assets/dev/loan/1.png';
import loan2 from '../assets/dev/loan/2.png';
import loan3 from '../assets/dev/loan/3.png';
import loan4 from '../assets/dev/loan/4.png';
import loan5 from '../assets/dev/loan/5.png';

// 4. Stracey Memorial School Website (Importing existing 1.png - 5.png from src/assets/dev/stracey/)
import stracey1 from '../assets/dev/stracey/1.png';
import stracey2 from '../assets/dev/stracey/2.png';
import stracey3 from '../assets/dev/stracey/3.png';
import stracey4 from '../assets/dev/stracey/4.png';
import stracey5 from '../assets/dev/stracey/5.png';

/**
 * Filter Categories:
 * 1. websites - Websites
 * 2. applications - Applications
 * 3. custom-software - Custom Software
 * 4. in-development - Projects in Development
 */

export const filterCategories = [
  { id: 'websites', label: 'Websites' },
  { id: 'applications', label: 'Applications' },
  { id: 'custom-software', label: 'Custom Software' },
  { id: 'in-development', label: 'Projects in Development' }
];

export const allProjects = [
  // ==================== 33 REAL WEBSITES (WITH AUTO IMAGE DISCOVERY) ====================
  ...websitesWithAutoImages,

  // ==================== APPLICATIONS ====================
  // Project 1: Mantrika Brahma
  {
    id: 'mantrika-brahma',
    category: 'applications',
    categoryLabel: 'Applications',
    title: 'Mantrika Brahma – Spiritual Guidance Platform',
    description:
      'A digital spiritual platform offering astrology, spiritual guidance, rituals, and personalized religious services. Designed to provide users with a convenient platform to explore spiritual services, connect with guidance, and discover rituals based on their needs.',
    image: mantrika1,
    images: [mantrika1, mantrika2, mantrika3, mantrika4],
    tags: ['Flutter', 'Firebase'],
    status: 'Live',
    statusType: 'live',
    url: 'play.google.com/store/apps/details?id=com.app.mantrika_brahma',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.app.mantrika_brahma',
    features: [
      'Spiritual guidance and service discovery platform',
      'Astrology-related services and astrological consultations',
      'Ritual and pooja service listings with priest schedules',
      'Spiritual service booking interface with automated confirmations',
      'Personalized spiritual assistance and personalized horoscope insights',
      'Clean and user-friendly mobile navigation architecture',
      'Detailed service descriptions and ritual requirement information pages',
      'Responsive application design crafted for cross-platform mobile devices'
    ]
  },

  // Project 2: Nammasavari
  {
    id: 'nammasavari',
    category: 'applications',
    categoryLabel: 'Applications',
    title: 'Nammasavari – Bus Booking Application',
    description:
      'A modern bus booking application designed to simplify travel planning and bus ticket reservations. The application provides a convenient interface for exploring routes, searching buses, viewing travel options, and managing the booking process.',
    image: nammasavari1,
    images: [nammasavari1, nammasavari2, nammasavari3, nammasavari4, nammasavari5],
    tags: ['Flutter', 'Firebase'],
    status: 'Live',
    statusType: 'live',
    url: 'play.google.com/store/apps/details?id=com.app.nammasavari.android',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.app.nammasavari.android',
    features: [
      'Fast bus and intercity route search engine',
      'Intuitive source and destination location selection',
      'Flexible travel date and return journey selection calendar',
      'Live bus listing with real-time seat availability indicators',
      'Interactive bus layout details and seat selection interface',
      'Streamlined ticket booking workflow with instant digital ticketing',
      'Comprehensive travel information and operator review presentation',
      'User-friendly booking interface with boarding point maps',
      'Fully responsive cross-platform mobile experience'
    ]
  },

  // Project 3: Sadhana Cart
  {
    id: 'sadhana-cart',
    category: 'applications',
    categoryLabel: 'Applications',
    title: 'Sadhana Cart – Grocery & Household Shopping Application',
    description:
      'An online shopping application focused on groceries and everyday household essentials. Designed to provide users with a smooth shopping experience through product discovery, category browsing, shopping cart management, and an easy checkout interface.',
    image: sadhana1,
    images: [sadhana1, sadhana2, sadhana3, sadhana4],
    tags: ['Flutter', 'Firebase'],
    status: 'Live',
    statusType: 'live',
    url: 'play.google.com/store/apps/details?id=com.innomatrics.sadhana_cart',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.innomatrics.sadhana_cart',
    features: [
      'Convenient grocery and household product digital shopping experience',
      'Comprehensive product category browsing with quick aisle filtering',
      'Instant product search and real-time item discovery',
      'Detailed product descriptions, nutritional data, and price metrics',
      'Interactive shopping cart management with live subtotal calculation',
      'Dynamic item quantity adjustments and stock validation',
      'Frictionless checkout experience with address selector and payment options',
      'Product-focused mobile interface optimized for single-hand use',
      'Responsive shopping application design ensuring smooth performance'
    ]
  },

  // Project 4: Vistaraa
  {
    id: 'vistaraa-ecommerce',
    category: 'applications',
    categoryLabel: 'Applications',
    title: 'Vistaraa – E-Commerce Application',
    description:
      'A modern e-commerce application designed to provide an engaging online shopping experience. The application includes product discovery, product listings, product details, shopping cart interactions, and a streamlined shopping journey with a polished user interface.',
    image: vistaraa1,
    images: [vistaraa1, vistaraa2, vistaraa3, vistaraa4, vistaraa5],
    tags: ['Flutter', 'Node.js', 'Express.js', 'MongoDB'],
    status: 'Live',
    statusType: 'live',
    url: 'play.google.com/store/apps/details?id=com.vistaraa.app',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.vistaraa.app',
    features: [
      'Modern, high-conversion e-commerce mobile application interface',
      'Comprehensive digital product catalog with high-resolution imagery',
      'Structured product category browsing and hierarchical navigation',
      'Multi-attribute product search, sorting, and price range filtering',
      'Rich product details including customer reviews, variants, and specs',
      'Real-time shopping cart functionality with instant quantity updates',
      'Streamlined end-to-end shopping workflow from basket to order confirmation',
      'Responsive UI crafted with Flutter frontend and high-throughput Node.js backend',
      'Modern product presentation engineered for high retention and discovery'
    ]
  },

  // ==================== CUSTOM SOFTWARE ====================
  {
    id: 'innomatrics-employee-management',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    title: 'Innomatrics Employee Management System',
    shortName: 'Innomatrics',
    projectType: 'Employee Management System',
    shortDescription:
      'A centralized employee management system designed to streamline organizational operations, employee activities, attendance tracking, work sessions, project management, reporting, leave and request management, and internal communication through an intuitive dashboard.',
    description:
      'A centralized employee management system designed to streamline organizational operations, employee activities, attendance tracking, work sessions, project management, reporting, leave and request management, and internal communication through an intuitive dashboard.',
    image: employee1,
    images: [
      {
        src: employee1,
        alt: 'Innomatrics Employee Management Dashboard',
        label: 'Employee Dashboard'
      },
      {
        src: employee2,
        alt: 'Innomatrics Employee Work Session',
        label: 'Work Session'
      },
      {
        src: employee3,
        alt: 'Innomatrics Employee Projects',
        label: 'My Projects'
      },
      {
        src: employee4,
        alt: 'Innomatrics Attendance Management',
        label: 'Attendance & Reports'
      },
      {
        src: employee5,
        alt: 'Innomatrics Employee Management Screenshot 5',
        label: 'Calendar & Requests'
      }
    ],
    tags: ['React.js', 'Firebase'],
    stack: ['React.js', 'Firebase'],
    status: 'Live',
    statusType: 'live',
    url: null,
    demoUrl: null,
    features: [
      'Employee Dashboard – Centralized overview of work activities, attendance status, and pending approvals.',
      'Work Session & Attendance – Comprehensive daily clock-in/out logging, break tracking, and working hours calculation.',
      'Project & Task Management – Dedicated view for tracking assigned client projects, milestones, and task deliverables.',
      'Reports & Business Calendar – Consolidated work performance analytics, monthly timesheets, and corporate event schedules.',
      'Employee Requests & Messaging – Seamless submission workflow for leaves, permissions, and direct internal communication.',
      'Notifications & Profile – Real-time operational announcements, task alerts, and secure user profile administration.'
    ],
    architecture: {
      frontend: ['React.js', 'React Hooks', 'Responsive UI'],
      backend: ['Firebase Services', 'Cloud Functions', 'Auth'],
      database: ['Firestore Database', 'Employee Records', 'Sessions'],
      flow: 'Employee → React.js Frontend → Firebase Services → Cloud Firestore → UI Response.'
    }
  },

  // Project 2: Innomatrics CRM / ERP Platform
  {
    id: 'innomatrics-crm-erp',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    title: 'Innomatrics CRM / ERP Platform',
    shortName: 'Innomatrics CRM',
    projectType: 'CRM / ERP Business Management System',
    shortDescription:
      'An integrated business management platform for handling CRM, sales, clients, projects, financial operations, and organizational activities.',
    description:
      'A centralized CRM and ERP platform designed to streamline business management across customer relationships, lead tracking, sales operations, quotations, invoicing, agreements, project management, financial reporting, and recurring operational activities through an integrated management dashboard.',
    image: crmErp1,
    images: [
      {
        src: crmErp1,
        alt: 'Innomatrics CRM ERP Management Dashboard',
        label: 'Management Dashboard'
      },
      {
        src: crmErp2,
        alt: 'Innomatrics CRM ERP Screenshot 2',
        label: 'CRM Management'
      },
      {
        src: crmErp3,
        alt: 'Innomatrics CRM ERP Screenshot 3',
        label: 'Lead Management'
      },
      {
        src: crmErp4,
        alt: 'Innomatrics CRM ERP Screenshot 4',
        label: 'Finance & Quotations'
      },
      {
        src: crmErp5,
        alt: 'Innomatrics CRM ERP Screenshot 5',
        label: 'Project Management'
      },
      {
        src: crmErp6,
        alt: 'Innomatrics CRM ERP Screenshot 6',
        label: 'Operations'
      }
    ],
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Node.js'],
    stack: ['React.js', 'Tailwind CSS', 'REST API', 'Node.js'],
    status: 'In Development',
    statusType: 'in-development',
    url: null,
    demoUrl: null,
    features: [
      'Centralized Management Dashboard – Unified executive overview of business performance across CRM, finance, and operations.',
      'CRM & Lead Management – Systematic pipeline tracking of inbound and qualified leads, conversion rates, and client acquisition.',
      'Client & Follow-up Management – Comprehensive customer directory with automated scheduling alerts and multi-touch interaction logs.',
      'Quotations, Agreements & Invoicing – End-to-end commercial workflow for creating estimates, contract management, and customer billing.',
      'Financial Management & Reporting – Real-time financial clarity tracking invoiced revenue, operating expenses, and net profit margins.',
      'Project & Operations Monitoring – Active monitoring of project milestones, operational support tickets, and expiring domain assets.'
    ],
    architecture: {
      frontend: ['React.js', 'Tailwind CSS', 'Responsive UI'],
      backend: ['Node.js', 'Express.js', 'RESTful APIs'],
      database: ['Relational / Document DB', 'CRM & Invoices'],
      flow: 'Admin → React Frontend → Express REST API → Business Logic → Database Storage → UI.'
    }
  },

  // ==================== PROJECTS IN DEVELOPMENT ====================
  // Project 1: E-Commerce Platform
  {
    id: 'ecommerce-platform',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'E-Commerce Platform',
    shortDescription:
      'Explore premium marble and granite polishing materials, adhesives, sealers, cleaners and professional tools from trusted brands.',
    description:
      'Explore premium marble and granite polishing materials, adhesives, sealers, cleaners and professional tools from trusted brands.',
    image: ecommerce1,
    images: [
      {
        src: ecommerce1,
        alt: 'E-Commerce Homepage',
        label: 'Homepage'
      },
      {
        src: ecommerce2,
        alt: 'E-Commerce Product Listing',
        label: 'Product Listing'
      },
      {
        src: ecommerce3,
        alt: 'E-Commerce Product Details',
        label: 'Product Details'
      },
      {
        src: ecommerce4,
        alt: 'E-Commerce Shopping Interface',
        label: 'Shopping Interface'
      },
      {
        src: ecommerce5,
        alt: 'E-Commerce Dashboard',
        label: 'Dashboard'
      }
    ],
    tags: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    status: 'In Development',
    statusType: 'in-development',
    targetDate: null,
    projectType: 'E-Commerce',
    url: null,
    demoUrl: null,
    features: [
      'Product Catalog – Organize and manage marble, granite, polishing materials, adhesives, and professional tools.',
      'Advanced Search & Filtering – Quickly discover products by brand, category, surface type, and specifications.',
      'Product Details & Specs – Display high-resolution images, technical data sheets, usage guidelines, and variations.',
      'Responsive Shopping Flow – Optimized cart, instant checkout interface, and fluid experience across all screen sizes.',
      'Admin Management – Centralized dashboard to manage products, categories, stock levels, and store promotions.',
      'Authentication & Security – Role-based access control protecting administrative workflows and customer data.'
    ],
    architecture: {
      frontend: ['React.js', 'Tailwind CSS', 'Axios'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB', 'Mongoose ODM'],
      flow: 'React UI → Express REST API → Node.js Logic → MongoDB → API Response.'
    }
  },

  // Project 2: AutoOps School
  {
    id: 'autoops-school',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'AutoOps School',
    shortDescription:
      'Learn industry-relevant technologies through structured training, hands-on projects, and practical problem-solving with AutoOps School.',
    description:
      'Learn industry-relevant technologies through structured training, hands-on projects, and practical problem-solving with AutoOps School.',
    image: autoops1,
    images: [
      {
        src: autoops1,
        alt: 'AutoOps School Screenshot 1',
        label: 'Homepage'
      },
      {
        src: autoops2,
        alt: 'AutoOps School Screenshot 2',
        label: 'Training Programs'
      },
      {
        src: autoops3,
        alt: 'AutoOps School Screenshot 3',
        label: 'Course Details'
      },
      {
        src: autoops4,
        alt: 'AutoOps School Screenshot 4',
        label: 'Learning Interface'
      },
      {
        src: autoops5,
        alt: 'AutoOps School Screenshot 5',
        label: 'Dashboard'
      }
    ],
    tags: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    status: 'In Development',
    statusType: 'in-development',
    targetDate: null,
    projectType: 'EdTech Platform',
    url: null,
    demoUrl: null,
    features: [
      'Training Program & Courses – Comprehensive catalog of engineering learning paths, technology tracks, and syllabi.',
      'Structured Learning Modules – Step-by-step topic breakdown with video lectures, reading notes, and practical exercises.',
      'Student Portal & Progress – Centralized student dashboard to monitor learning milestones, submissions, and code reviews.',
      'Hands-on Projects – Project-based learning environment tackling real-world software architecture scenarios.',
      'Admin & Batch Management – Administrative tools for instructor assignments, batch scheduling, and student enrollments.',
      'Responsive Interface – Accessible, fluid learning platform designed for seamless desktop and mobile study.'
    ],
    architecture: {
      frontend: ['React.js', 'Tailwind CSS', 'React Hooks'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB', 'Mongoose ODM'],
      flow: 'Student / Admin → React UI → Express API → Node.js Services → MongoDB.'
    }
  },

  // Project 3: Loan Advisory Platform (FinAdvise)
  {
    id: 'loan-advisory-platform',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'Loan Advisory Platform',
    shortDescription:
      'A professional loan consultation platform designed to help users explore loan options, compare financial solutions, and submit loan enquiries through a user-friendly interface.',
    description:
      'A professional loan consultation platform designed to help users explore loan options, compare financial solutions, and submit loan enquiries through a user-friendly interface.',
    image: loan1,
    images: [
      {
        src: loan1,
        alt: 'Loan Advisory Platform Screenshot 1',
        label: 'Homepage'
      },
      {
        src: loan2,
        alt: 'Loan Advisory Platform Screenshot 2',
        label: 'Loan Categories'
      },
      {
        src: loan3,
        alt: 'Loan Advisory Platform Screenshot 3',
        label: 'Enquiry Form'
      },
      {
        src: loan4,
        alt: 'Loan Advisory Platform Screenshot 4',
        label: 'Loan Information'
      },
      {
        src: loan5,
        alt: 'Loan Advisory Platform Screenshot 5',
        label: 'Dashboard'
      }
    ],
    tags: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    status: 'In Development',
    statusType: 'in-development',
    targetDate: null,
    projectType: 'Financial Advisory',
    url: null,
    demoUrl: null,
    features: [
      'Multiple Loan Categories – Compare and explore personal, home, business, education, gold, and vehicle loan solutions.',
      'Loan Details & Calculator – Interactive financial information with eligibility parameters and estimated EMI insights.',
      'Customer Enquiry Form – Intuitive consultation request workflow with applicant needs and contact validation.',
      'Enquiry Management – Centralized backend routing to track, qualify, and follow up on customer loan leads.',
      'Credit Score Guidance – Dedicated CIBIL score information and credit wellness guidance section.',
      'Admin Portal & Support – Administrative interface for managing loan products, partner information, and customer assistance.'
    ],
    architecture: {
      frontend: ['React.js', 'Tailwind CSS', 'Axios'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB', 'Mongoose ODM'],
      flow: 'Customer → React Website → Enquiry Form → Express API → MongoDB → Admin UI.'
    }
  },

  // Project 4: Stracey Memorial School Website
  {
    id: 'stracey-memorial',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'Stracey Memorial',
    shortDescription:
      'A modern educational institution website showcasing academic programs, admissions, campus life, school facilities, galleries, and important announcements.',
    description:
      'A modern educational institution website showcasing academic programs, admissions, campus life, school facilities, galleries, and important announcements.',
    image: stracey1,
    images: [
      {
        src: stracey1,
        alt: 'Stracey Memorial School Homepage',
        label: 'Homepage'
      },
      {
        src: stracey2,
        alt: 'Stracey Memorial About Section',
        label: 'About Us'
      },
      {
        src: stracey3,
        alt: 'Stracey Memorial Vision and Mission',
        label: 'Vision & Mission'
      },
      {
        src: stracey4,
        alt: 'Stracey Memorial Contact Page',
        label: 'Contact'
      },
      {
        src: stracey5,
        alt: 'Stracey Memorial School Footer',
        label: 'Footer'
      }
    ],
    tags: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'JWT Authentication',
      'REST API',
      'Axios'
    ],
    status: 'In Development',
    statusType: 'in-development',
    targetDate: null,
    projectType: 'Educational Institution',
    url: null,
    demoUrl: null,
    features: [
      'Institutional Identity – School history, mission, leadership perspective, and founding educational philosophy.',
      'Academics & Curriculum – Comprehensive presentation of academic boards, syllabus details, and co-curricular programs.',
      'Admissions Guidance – Step-by-step admission criteria, eligibility terms, fee structures, and application links.',
      'Campus Life & Gallery – High-resolution showcase of campus facilities, labs, sports day, and student extracurriculars.',
      'News, Events & Enquiries – Timely publishing of school announcements, event calendars, and parental enquiry forms.',
      'Responsive Administration – Content management portal and fluid presentation optimized across all screen sizes.'
    ],
    architecture: {
      frontend: ['React.js', 'Tailwind CSS', 'React Hooks'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB', 'Mongoose ODM'],
      flow: 'Visitor / Admin → React UI → Express API → Controllers → MongoDB → Response.'
    }
  }
];

// Backward compatibility helper
export const projectCategories = filterCategories.map((fc) => ({
  id: fc.id,
  title: fc.label,
  projects: allProjects.filter((p) => p.category === fc.id)
}));

export const projects = allProjects;
