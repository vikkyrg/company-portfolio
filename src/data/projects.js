// Existing image imports
import projectAuraImg from '../assets/project-aura.png';
import projectKromaImg from '../assets/project-kroma.png';
import homeImg from '../assets/home.png';
import serviceWebsitesImg from '../assets/service-websites.png';
import serviceMobileImg from '../assets/service-mobile.png';
import serviceSaasImg from '../assets/service-saas.png';

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
  // ==================== WEBSITES ====================
  // Project 1: AMPSLITE
  {
    id: 'ampslite-cables',
    category: 'websites',
    categoryLabel: 'Websites',
    title: 'AMPSLITE – Premium Wires & Cables',
    description:
      'A premium corporate website for a wires and cables manufacturer featuring a modern industrial visual identity, product showcases, electrical solutions, company information, and project highlights.',
    image: ampslite1,
    images: [ampslite1, ampslite2, ampslite3, ampslite4, ampslite5],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    status: 'Live',
    statusType: 'live',
    url: 'amp-slight-website.vercel.app',
    demoUrl: 'https://amp-slight-website.vercel.app/',
    features: [
      'Premium industrial corporate homepage with dynamic brand presentation',
      'High-impact hero section with product-focused imagery and technical highlights',
      'Wires and cables product showcase categorized for residential and industrial applications',
      'Product categories and detailed product presentation with specification sheets',
      'Electrical solutions and specialized infrastructure engineering services section',
      'Company profile, manufacturing excellence, and business credentials',
      'Project portfolio and completed commercial works showcase',
      'Modern navigation architecture and accessible call-to-action buttons',
      'Interactive contact and quotation inquiry workflow',
      'Fully responsive fluid layouts tailored for desktop, tablet, and mobile displays'
    ]
  },

  // Project 2: AURIX EVENTS
  {
    id: 'aurix-events',
    category: 'websites',
    categoryLabel: 'Websites',
    title: 'Aurix Events – Event Management & Experiences',
    description:
      'A premium event management website designed to showcase corporate events, luxury celebrations, entertainment experiences, and event planning services with a bold dark visual aesthetic.',
    image: aurix1,
    images: [aurix1, aurix2, aurix3, aurix4, aurix5],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    status: 'Live',
    statusType: 'live',
    url: 'aurix-event-website.vercel.app',
    demoUrl: 'https://aurix-event-website.vercel.app/',
    features: [
      'Premium event management digital platform with dark luxury aesthetic',
      'Cinematic event-focused hero section with immersive video and visual backdrops',
      'Corporate summits, brand activations, and luxury celebration showcases',
      'Comprehensive event planning services and customized package categorizations',
      'Immersive high-resolution event photography and experiential storytelling',
      'Curated portfolio archive of previous landmark events and global experiences',
      'Refined typographic hierarchy complemented by an elegant premium color palette',
      'Streamlined event planning inquiry, consultation booking, and date reservation CTA',
      'Seamless contact channels and real-time social media stream integration',
      'Optimized 60fps responsive presentation engineered across all screen sizes'
    ]
  },

  // Project 3: EAGLE ENGINEERING
  {
    id: 'eagle-engineering',
    category: 'websites',
    categoryLabel: 'Websites',
    title: 'Eagle Engineering – Industrial Fasteners & Solutions',
    description:
      'A professional industrial website for an engineering and fasteners company showcasing construction fasteners, screws, anchors, hardware solutions, and industrial products.',
    image: eagle1,
    images: [eagle1, eagle2, eagle3, eagle4, eagle5],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    status: 'Live',
    statusType: 'live',
    url: 'eagle-engineering-website.vercel.app',
    demoUrl: 'https://eagle-engineering-website.vercel.app/',
    features: [
      'Professional industrial engineering website with precision-first design',
      'Product-focused homepage and high-clarity technical hero banner',
      'Extensive fasteners, screws, anchors, and hardware product showcase',
      'Digital catalog-style presentation with instant category filtering',
      'High-detail construction and heavy industrial product component imagery',
      'Engineering specifications, tensile tolerances, and metallurgical data presentation',
      'Company profile, ISO manufacturing standards, and business credibility sections',
      'Direct product inquiry and bulk commercial quotation functionality',
      'Intuitive product discovery navigation engineered for engineers and contractors',
      'Responsive corporate website layout tested across mobile, tablet, and desktop'
    ]
  },

  // Project 4: HI-TECH ESTATES
  {
    id: 'hitech-estates',
    category: 'websites',
    categoryLabel: 'Websites',
    title: 'Hi-Tech Estates & Interiors – Real Estate',
    description:
      'A modern real estate website designed to showcase premium properties, residential spaces, interiors, and property services featuring immersive property imagery and discovery filters.',
    image: hitech1,
    images: [hitech1, hitech2, hitech3, hitech4, hitech5],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    status: 'Live',
    statusType: 'live',
    url: 'hi-techestates.vercel.app',
    demoUrl: 'https://hi-techestates.vercel.app/',
    features: [
      'Modern architectural real estate platform with luxury-oriented interface',
      'Large immersive property hero section highlighting featured residences',
      'Interactive property discovery and location-based search interface',
      'Dedicated Buy, Sell, Rent, and Lease property acquisition workflows',
      'Multi-parameter location search with neighborhood insight maps',
      'Comprehensive property category, villa, and apartment type filters',
      'Configurable BHK selection and dynamic budget range filtering',
      'Curated new-launch property filter showcasing upcoming residential developments',
      'Premium architectural interior design and luxury space showcases',
      'Direct property inquiry, site visit scheduling, and agent contact functionality',
      'Fluidly responsive design delivering optimal viewing on smartphones and desktops'
    ]
  },

  // Project 5: NAVADURGA ELECTRICALS
  {
    id: 'navadurga-electricals',
    category: 'websites',
    categoryLabel: 'Websites',
    title: 'Navadurga Electricals – Electrical Infrastructure',
    description:
      'A corporate website for an electrical engineering and infrastructure company specializing in electrical services, power distribution, HT/LT solutions, transformers, and substations.',
    image: navadurga1,
    images: [navadurga1, navadurga2, navadurga3, navadurga4, navadurga5],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    status: 'Live',
    statusType: 'live',
    url: 'nava-durga-electricals-website.vercel.app',
    demoUrl: 'https://nava-durga-electricals-website.vercel.app/',
    features: [
      'Professional electrical engineering and power infrastructure corporate website',
      'Comprehensive High Tension (HT) and Low Tension (LT) electrical services showcase',
      'Industrial transformer installation, testing, and substation engineering solutions',
      'Utility-scale power distribution systems and grid synchronization presentation',
      'High-impact electrical infrastructure hero section highlighting major turnkey projects',
      'Detailed technical service breakdowns and industrial capabilities matrix',
      'Completed commercial and governmental electrical project portfolio showcase',
      'Company profile, safety accreditations, and technical expertise presentation',
      'Institutional client roster, certifications, and contractor credibility sections',
      'Direct industrial contact, project RFP, and tender quotation request system',
      'Rigorous responsive corporate design built for engineering clients across all devices'
    ]
  },

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
    id: 'lineartask-suite',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    title: 'LinearTask Project Suite',
    description:
      'High-velocity custom project management and workflow system built for enterprise engineering teams with sub-50ms WebSocket synchronization and CRDT conflict resolution.',
    image: serviceSaasImg,
    images: [serviceSaasImg, homeImg, serviceWebsitesImg, projectAuraImg, projectKromaImg],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Redis'],
    status: 'Live',
    statusType: 'live',
    url: 'app.lineartask.io',
    demoUrl: 'https://app.lineartask.io',
    features: [
      'Real-time collaboration engine using WebSockets and CRDTs with sub-50ms latency',
      'Distributed Kanban state synchronization handling concurrent edits without merge conflicts',
      'Bi-directional GitHub, GitLab, and Slack integrations automating issue triage'
    ]
  },
  {
    id: 'cloudmetrics-suite',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    title: 'CloudMetrics Observability Suite',
    description:
      'High-throughput distributed telemetry and data processing engine powered by ClickHouse columnar storage, delivering sub-second queries over billions of event logs.',
    image: serviceSaasImg,
    images: [serviceSaasImg, homeImg, serviceWebsitesImg, projectKromaImg, projectAuraImg],
    tags: ['React', 'Python', 'ClickHouse', 'PostgreSQL', 'Docker'],
    status: 'Live',
    statusType: 'live',
    url: 'cloudmetrics.internal',
    demoUrl: 'https://cloudmetrics.internal',
    features: [
      'High-throughput event ingestion pipeline capable of absorbing 100k events/sec',
      'Sub-second analytical queries over multi-billion row datasets via ClickHouse',
      'Automated anomaly detection algorithms notifying DevOps teams via PagerDuty'
    ]
  },
  {
    id: 'vaultsync-security',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    title: 'VaultSync Compliance & SOC 2 OS',
    description:
      'Custom continuous compliance automation system for tech companies preparing for SOC 2 Type II, ISO 27001, and HIPAA audits with automated evidence collection.',
    image: serviceSaasImg,
    images: [serviceSaasImg, homeImg, serviceWebsitesImg, projectAuraImg, projectKromaImg],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS SDK', 'Tailwind CSS'],
    status: 'Live',
    statusType: 'live',
    url: 'vaultsync.cloud',
    demoUrl: 'https://vaultsync.cloud',
    features: [
      'Continuous automated evidence collection across AWS, GCP, GitHub, and Identity Providers',
      'Automated personnel security training workflows with digital policy acknowledgment',
      'Auditor-ready evidence vault generating one-click compliance verification packages'
    ]
  },
  {
    id: 'databridge-api',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    title: 'DataBridge Low-Code API Mesh',
    description:
      'Developer gateway platform unifying relational databases, REST APIs, and third-party microservices into an instant GraphQL schema with automated rate-limiting.',
    image: serviceSaasImg,
    images: [serviceSaasImg, homeImg, serviceWebsitesImg, projectAuraImg, projectKromaImg],
    tags: ['Node.js', 'Go', 'GraphQL', 'Redis', 'Docker'],
    status: 'Live',
    statusType: 'live',
    url: 'databridge.mesh',
    demoUrl: 'https://databridge.mesh',
    features: [
      'Automated GraphQL schema generation stitching relational SQL and REST endpoints',
      'Distributed edge gateway handling 400M+ daily API requests with sub-10ms overhead',
      'Interactive GraphQL Playground with query linting and execution tracing metrics'
    ]
  },

  // ==================== PROJECTS IN DEVELOPMENT ====================
  {
    id: 'apexflow-crm',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'ApexFlow Omnichannel AI CRM',
    description:
      'Next-generation sales execution platform integrating automated voice agents, predictive deal scoring, and autonomous follow-up pipelines.',
    image: serviceSaasImg,
    images: [serviceSaasImg, homeImg, serviceWebsitesImg, projectKromaImg, projectAuraImg],
    tags: ['Next.js 15', 'AI Agent Engine', 'WebRTC', 'PostgreSQL', 'Vector DB'],
    status: 'In Development',
    statusType: 'in-development',
    progress: '78%',
    expectedLaunch: 'Q3 2026',
    url: 'apexflow.dev',
    demoUrl: null,
    features: [
      'Autonomous conversational AI dialer with live transcription and sentiment tracking',
      'Vector-indexed lead scoring matching historical successful closes with 89% accuracy',
      'Universal multichannel inbox synchronizing email, SMS, WhatsApp, and LinkedIn'
    ]
  },
  {
    id: 'quantum-mesh',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'QuantumMesh Edge Orchestrator',
    description:
      'Zero-latency distributed edge compute network manager enabling containerized workloads to deploy dynamically across multi-cloud regions with automated geo-routing.',
    image: serviceWebsitesImg,
    images: [serviceWebsitesImg, projectKromaImg, homeImg, serviceSaasImg],
    tags: ['Rust', 'WebAssembly', 'Kubernetes', 'gRPC', 'eBPF'],
    status: 'In Development',
    statusType: 'in-development',
    progress: '60%',
    expectedLaunch: 'Q4 2026',
    url: 'quantummesh.internal',
    demoUrl: null,
    features: [
      'Micro-virtual machine provisioning under 15ms using WebAssembly runtime',
      'Dynamic telemetry-driven routing reducing inter-region packet latency by 42%',
      'Single pane-of-glass infrastructure topology with cryptographic cluster attestations'
    ]
  },
  {
    id: 'hyperion-spatial',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'Hyperion VisionOS Digital Twin',
    description:
      'Immersive spatial computing application for Apple VisionOS and WebXR that visualizes industrial manufacturing machinery in photorealistic 3D realtime.',
    image: projectKromaImg,
    images: [projectKromaImg, homeImg, serviceWebsitesImg, projectAuraImg],
    tags: ['visionOS', 'SwiftUI', 'RealityKit', 'Metal', 'WebXR'],
    status: 'Coming Soon',
    statusType: 'coming-soon',
    progress: '45%',
    expectedLaunch: 'Early 2027',
    url: 'hyperion.spatial',
    demoUrl: null,
    features: [
      'Volumetric 4K CAD model rendering with sub-millimeter measurement inspection',
      'Shared spatial collaboration rooms supporting up to 16 concurrent engineers',
      'Live IoT sensor telemetry overlays rendered directly atop physical equipment'
    ]
  },
  {
    id: 'synthetix-studio',
    category: 'in-development',
    categoryLabel: 'Projects in Development',
    title: 'Synthetix Generative Design Studio',
    description:
      'Collaborative browser-based generative design environment transforming natural language briefs into production-ready UI components and token systems.',
    image: serviceMobileImg,
    images: [serviceMobileImg, serviceSaasImg, projectAuraImg, homeImg],
    tags: ['React 19', 'Canvas API', 'LLM Fine-Tuning', 'Tailwind CSS', 'WASM'],
    status: 'Coming Soon',
    statusType: 'coming-soon',
    progress: '35%',
    expectedLaunch: 'Q1 2027',
    url: 'synthetix.design',
    demoUrl: null,
    features: [
      'Multi-modal prompt-to-layout generator emitting clean, accessible React components',
      'Design token synchronizer pushing directly to GitHub design system repos',
      'Real-time canvas multiplayer with integrated voice and cursor presence'
    ]
  }
];

// Backward compatibility helper
export const projectCategories = filterCategories.map((fc) => ({
  id: fc.id,
  title: fc.label,
  projects: allProjects.filter((p) => p.category === fc.id)
}));

export const projects = allProjects;
