import projectAuraImg from '../assets/project-aura.png';
import projectKromaImg from '../assets/project-kroma.png';
import homeImg from '../assets/home.png';
import serviceWebsitesImg from '../assets/service-websites.png';
import serviceMobileImg from '../assets/service-mobile.png';
import serviceSaasImg from '../assets/service-saas.png';

/**
 * 3 Category Showcase System
 * Category 1: Websites (01 / WEB DEVELOPMENT)
 * Category 2: Mobile Applications (02 / MOBILE APPLICATIONS)
 * Category 3: SaaS & Digital Platforms (03 / SAAS & DIGITAL PLATFORMS)
 *
 * Each project contains an `images` array with 5 screenshots representing
 * distinct screens / pages (e.g., Homepage, About, Services, Details, Contact).
 */

export const projectCategories = [
  {
    id: 'websites',
    number: '01 / WEB DEVELOPMENT',
    title: 'Websites',
    tagline: 'High-Performance Web Ecosystems & Editorial Platforms',
    shortDescription:
      'High-performance websites and digital experiences built for speed, usability, and modern brand identity.',
    fullDescription:
      'We architect bespoke modern web experiences that marry award-winning visual craft with resilient engineering. From headless e-commerce flagships to interactive 3D WebGL architectural archives, our web platforms deliver lightning performance, SEO dominance, and immersive storytelling.',
    capabilities: [
      'Next.js & React Frameworks',
      'Headless E-Commerce (Shopify Plus)',
      'Sub-Second Global Edge Delivery',
      'Interactive 3D WebGL / Three.js',
      'Responsive Fluid Typography'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    cardImage: serviceWebsitesImg,
    cardImageAlt: 'Premium desktop website interface showcasing a modern ecommerce storefront',
    stats: {
      count: '05',
      label: 'Featured Projects',
      metric: '0.4s',
      metricLabel: 'Avg. Edge Load Time'
    },
    ctaText: 'Explore Projects',
    projects: [
      {
        id: 'aura-lifestyle',
        category: 'Websites',
        categoryNumber: '01',
        title: 'Aura Lifestyle Storefront',
        description:
          'Editorial direct-to-consumer e-commerce experience with sub-second page transitions, dynamic inventory synchronization, and a custom high-conversion checkout flow.',
        image: projectAuraImg,
        images: [
          projectAuraImg,
          serviceWebsitesImg,
          homeImg,
          projectKromaImg,
          serviceSaasImg
        ],
        imageAlt: 'Aura Lifestyle Storefront luxury minimalist editorial layout',
        url: 'aura-lifestyle.store',
        technologies: ['Next.js', 'Shopify Plus', 'TypeScript', 'Tailwind CSS', 'Algolia'],
        features: [
          'Sub-second page transitions powered by Next.js Incremental Static Regeneration',
          'Custom headless checkout flow driving a 240% increase in mobile conversion',
          'Multi-currency dynamic pricing engine supporting 38 international territories'
        ]
      },
      {
        id: 'kroma-spatial',
        category: 'Websites',
        categoryNumber: '02',
        title: 'Kroma Spatial Studio',
        description:
          'Digital monograph and spatial design portfolio featuring an interactive WebGL 3D model viewport, Swiss typographic grid, and case-study exhibitions.',
        image: projectKromaImg,
        images: [
          projectKromaImg,
          serviceWebsitesImg,
          homeImg,
          projectAuraImg,
          serviceSaasImg
        ],
        imageAlt: 'Kroma Spatial Studio brutalist 3D architectural gallery view',
        url: 'kromaspatial.ch',
        technologies: ['Three.js', 'React', 'WebGL', 'Tailwind CSS', 'Framer Motion'],
        features: [
          'Interactive 3D WebGL model viewport with custom GLSL lighting shaders',
          'Fluid 60fps animations across mobile and desktop devices',
          'Curated exhibition mode with high-resolution architectural blueprints'
        ]
      },
      {
        id: 'zenith-media',
        category: 'Websites',
        categoryNumber: '03',
        title: 'Zenith Editorial Journal',
        description:
          'High-volume cultural publication platform serving over 10M readers with custom typographic layout engines, instant edge caching, and automated audio articles.',
        image: homeImg,
        images: [
          homeImg,
          serviceWebsitesImg,
          projectAuraImg,
          projectKromaImg,
          serviceSaasImg
        ],
        imageAlt: 'Zenith editorial publishing platform on multi-device responsive view',
        url: 'zenithjournal.io',
        technologies: ['Next.js 14', 'Sanity.io', 'TypeScript', 'Tailwind CSS', 'Edge CDN'],
        features: [
          'Perfect 100/100 Google Lighthouse score across Performance, SEO, and Accessibility',
          'Automated audio article generation using neural voice synthesis',
          'Intelligent reader recirculation algorithms boosting session time by 4.2x'
        ]
      },
      {
        id: 'novus-capital',
        category: 'Websites',
        categoryNumber: '04',
        title: 'Novus Capital Institutional Portal',
        description:
          'Distinguished corporate portal and secure Limited Partner vault featuring real-time fund performance charts, confidential document vaults, and biometric login.',
        image: serviceWebsitesImg,
        images: [
          serviceWebsitesImg,
          homeImg,
          projectAuraImg,
          projectKromaImg,
          serviceSaasImg
        ],
        imageAlt: 'Novus Capital institutional investor web portal mockup',
        url: 'novuscapital.com',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Auth0', 'PostgreSQL'],
        features: [
          'Confidential Limited Partner portal with secure document vault and biometric login',
          'Interactive fund return calculators and portfolio performance visualizations',
          'SOC 2 Type II compliant hosting infrastructure with zero-trust data protection'
        ]
      },
      {
        id: 'solaris-energy',
        category: 'Websites',
        categoryNumber: '05',
        title: 'Solaris CleanTech Grid Platform',
        description:
          'Immersive interactive website for utility-scale solar microgrids featuring real-time generation feeds, commercial ROI calculators, and kinetic scroll storytelling.',
        image: serviceWebsitesImg,
        images: [
          serviceWebsitesImg,
          homeImg,
          projectKromaImg,
          projectAuraImg,
          serviceSaasImg
        ],
        imageAlt: 'Solaris CleanTech grid interactive energy platform',
        url: 'solaris-energy.se',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'SVG Canvas', 'REST APIs'],
        features: [
          'Real-time IoT grid output visualizer streaming live solar array generation',
          'Interactive commercial energy savings and carbon reduction matrix',
          'Kinetic scroll storytelling explaining solar grid micro-storage technology'
        ]
      }
    ]
  },
  {
    id: 'mobile',
    number: '02 / MOBILE APPLICATIONS',
    title: 'Mobile Applications',
    tagline: 'Fluid Native iOS & Android Experiences for High-Trust Industries',
    shortDescription:
      'Intuitive mobile experiences engineered for seamless performance, secure interactions, and everyday usability.',
    fullDescription:
      'We build native and cross-platform mobile applications engineered for critical daily workflows. From fintech banking solutions with instant biometric verification to HIPAA-compliant clinical telehealth and AI diagnostic assistants, our apps deliver smooth 60fps animations, rock-solid offline reliability, and world-class store ratings.',
    capabilities: [
      'React Native & Flutter Native Engineering',
      'Instant Biometric Authentication & FaceID',
      'Encrypted Real-Time WebRTC Video & Voice',
      'Offline-First SQLite / WatermelonDB Sync',
      'Push Notification & In-App Routing Systems'
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'REST APIs'],
    cardImage: serviceMobileImg,
    cardImageAlt: 'Premium smartphone mockup displaying a sophisticated mobile app interface',
    stats: {
      count: '05',
      label: 'Featured Projects',
      metric: '4.9★',
      metricLabel: 'Average App Store Rating'
    },
    ctaText: 'Explore Projects',
    projects: [
      {
        id: 'finflow-banking',
        category: 'Mobile Applications',
        categoryNumber: '01',
        title: 'Finflow Mobile Banking',
        description:
          'Native digital banking application featuring instant biometric authentication, multi-currency ledger management, automated savings rules, and real-time push alerts.',
        image: serviceMobileImg,
        images: [
          serviceMobileImg,
          homeImg,
          projectAuraImg,
          serviceSaasImg,
          projectKromaImg
        ],
        imageAlt: 'Finflow mobile banking app on modern smartphone with balance overview',
        url: 'finflow.app',
        technologies: ['React Native', 'TypeScript', 'Node.js', 'Plaid API', 'PostgreSQL'],
        features: [
          'Instant biometric FaceID/TouchID multi-factor authentication with hardware enclave security',
          'Multi-currency ledger engine supporting instant cross-border transfers across 20+ currencies',
          'Automated rounding rules and smart algorithmic savings buckets with yield tracking'
        ]
      },
      {
        id: 'carepulse-telehealth',
        category: 'Mobile Applications',
        categoryNumber: '02',
        title: 'CarePulse Telehealth Portal',
        description:
          'HIPAA-compliant mobile healthcare portal connecting patients with certified physicians via encrypted WebRTC video, digital prescription routing, and vitals sync.',
        image: serviceMobileImg,
        images: [
          serviceMobileImg,
          homeImg,
          projectKromaImg,
          serviceSaasImg,
          projectAuraImg
        ],
        imageAlt: 'CarePulse telehealth mobile app consultation screen',
        url: 'carepulse.health',
        technologies: ['Flutter', 'Dart', 'WebRTC', 'Firebase', 'HIPAA Cloud'],
        features: [
          'Ultra-low latency HD video consultations powered by encrypted WebRTC protocols',
          'Seamless Bluetooth BLE integration with smart pulse oximeters and blood pressure monitors',
          'Automated e-prescription routing to 25,000+ certified retail pharmacies nationwide'
        ]
      },
      {
        id: 'orbit-fitness',
        category: 'Mobile Applications',
        categoryNumber: '03',
        title: 'Orbit Adaptive Fitness Coach',
        description:
          'AI-driven training app that crafts dynamic workout regimes based on daily biometrics, integrating seamlessly with Apple HealthKit, Apple Watch, and Wear OS.',
        image: serviceMobileImg,
        images: [
          serviceMobileImg,
          homeImg,
          projectAuraImg,
          serviceSaasImg,
          projectKromaImg
        ],
        imageAlt: 'Orbit adaptive fitness coach mobile application screen',
        url: 'orbitfit.io',
        technologies: ['React Native', 'Swift', 'Kotlin', 'TypeScript', 'HealthKit'],
        features: [
          'Real-time Apple Watch and Wear OS companion app with haptic cadence alerts',
          'AI-driven workout adaptation based on real-time HRV and sleep recovery indicators',
          'Offline-first workout video cache with smart background download scheduling'
        ]
      },
      {
        id: 'zeno-crypto',
        category: 'Mobile Applications',
        categoryNumber: '04',
        title: 'Zeno Multi-Chain Wallet',
        description:
          'Institutional-grade self-custody wallet that simplifies interactions across Ethereum, Solana, and Layer-2 rollups with Secure Enclave hardware key isolation.',
        image: serviceMobileImg,
        images: [
          serviceMobileImg,
          homeImg,
          projectKromaImg,
          serviceSaasImg,
          projectAuraImg
        ],
        imageAlt: 'Zeno crypto non-custodial mobile wallet dashboard',
        url: 'zenowallet.eth',
        technologies: ['React Native', 'Ethers.js', 'Solana Web3.js', 'TypeScript', 'Rust'],
        features: [
          'Multi-Party Computation (MPC) social recovery eliminating seed phrase loss risk',
          'Unified multi-chain balances covering Ethereum, Arbitrum, Optimism, and Solana',
          'Real-time gas fee estimator and automated MEV-protected transaction routing'
        ]
      },
      {
        id: 'dispatch-go',
        category: 'Mobile Applications',
        categoryNumber: '05',
        title: 'DispatchGo Field Logistics',
        description:
          'Enterprise field logistics application providing delivery drivers with real-time route optimization, offline turn-by-turn guidance, and digital proof-of-delivery.',
        image: serviceMobileImg,
        images: [
          serviceMobileImg,
          homeImg,
          projectAuraImg,
          serviceSaasImg,
          projectKromaImg
        ],
        imageAlt: 'DispatchGo field delivery routing mobile application',
        url: 'dispatchgo.fleet',
        technologies: ['Flutter', 'Dart', 'SQLite', 'Mapbox SDK', 'WebSockets'],
        features: [
          'Offline-first architecture with automatic background synchronization via SQLite',
          'High-speed camera barcode and QR code scanner capable of 120 scans per minute',
          'Turn-by-turn navigation optimization saving fleet operators an average 34% in fuel'
        ]
      }
    ]
  },
  {
    id: 'saas',
    number: '03 / SAAS & DIGITAL PLATFORMS',
    title: 'SaaS & Digital Platforms',
    tagline: 'Enterprise Multi-Tenant Cloud Architectures & Data Platforms',
    shortDescription:
      'Scalable digital products featuring real-time collaboration, intelligent dashboards, and robust cloud architecture.',
    fullDescription:
      'We design and engineer enterprise-grade multi-tenant SaaS products and cloud software systems built to handle millions of transactions. From collaborative project management suites with sub-50ms sync to high-throughput cloud observability and automated compliance platforms, we engineer resilient software engines that scale businesses effortlessly.',
    capabilities: [
      'Multi-Tenant Scalable Microservices & Cloud Edge',
      'Real-Time WebSocket & CRDT Collaborative Engines',
      'High-Throughput Analytics & Distributed Databases',
      'Enterprise RBAC, SSO / SAML & Audit Logging',
      'Automated Billing (Stripe / Paddle) & Metered Usage'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Cloud'],
    cardImage: serviceSaasImg,
    cardImageAlt: 'Premium SaaS dashboard with analytics, charts, workspace management, and clean modern UI',
    stats: {
      count: '05',
      label: 'Featured Projects',
      metric: '99.99%',
      metricLabel: 'Enterprise Platform SLA'
    },
    ctaText: 'Explore Projects',
    projects: [
      {
        id: 'lineartask-suite',
        category: 'SaaS & Digital Platforms',
        categoryNumber: '01',
        title: 'LinearTask Project Suite',
        description:
          'High-velocity project management and issue tracker built for modern software teams with sub-50ms WebSocket synchronization, CRDTs, and bi-directional GitHub sync.',
        image: serviceSaasImg,
        images: [
          serviceSaasImg,
          homeImg,
          serviceWebsitesImg,
          projectAuraImg,
          projectKromaImg
        ],
        imageAlt: 'LinearTask collaborative project management kanban board',
        url: 'app.lineartask.io',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Redis'],
        features: [
          'Real-time collaboration engine using WebSockets and CRDTs with sub-50ms latency',
          'Distributed Kanban state synchronization handling concurrent edits without merge conflicts',
          'Bi-directional GitHub, GitLab, and Slack integrations automating issue triage'
        ]
      },
      {
        id: 'cloudmetrics-suite',
        category: 'SaaS & Digital Platforms',
        categoryNumber: '02',
        title: 'CloudMetrics Observability Suite',
        description:
          'High-throughput distributed telemetry and SaaS revenue analytics engine powered by ClickHouse columnar storage, delivering sub-second queries over billions of event logs.',
        image: serviceSaasImg,
        images: [
          serviceSaasImg,
          homeImg,
          serviceWebsitesImg,
          projectKromaImg,
          projectAuraImg
        ],
        imageAlt: 'CloudMetrics cloud infrastructure telemetry analytics dashboard',
        url: 'cloudmetrics.internal',
        technologies: ['React', 'Python', 'ClickHouse', 'PostgreSQL', 'Docker'],
        features: [
          'High-throughput event ingestion pipeline capable of absorbing 100k events/sec',
          'Sub-second analytical queries over multi-billion row datasets via ClickHouse',
          'Automated anomaly detection algorithms notifying DevOps teams via PagerDuty'
        ]
      },
      {
        id: 'vaultsync-security',
        category: 'SaaS & Digital Platforms',
        categoryNumber: '03',
        title: 'VaultSync Compliance & SOC 2 OS',
        description:
          'Continuous security compliance automation for high-growth tech companies preparing for SOC 2 Type II, ISO 27001, and HIPAA audits with automated evidence collection.',
        image: serviceSaasImg,
        images: [
          serviceSaasImg,
          homeImg,
          serviceWebsitesImg,
          projectAuraImg,
          projectKromaImg
        ],
        imageAlt: 'VaultSync continuous security compliance dashboard',
        url: 'vaultsync.cloud',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS SDK', 'Tailwind CSS'],
        features: [
          'Continuous automated evidence collection across AWS, GCP, GitHub, and Identity Providers',
          'Automated personnel security training workflows with digital policy acknowledgment',
          'Auditor-ready evidence vault generating one-click compliance verification packages'
        ]
      },
      {
        id: 'omnichannel-crm',
        category: 'SaaS & Digital Platforms',
        categoryNumber: '04',
        title: 'ApexFlow Omnichannel CRM',
        description:
          'Enterprise sales execution platform consolidating email, voice telephony, and pipeline stages with an intelligent contact timeline and two-way calendar sync.',
        image: serviceSaasImg,
        images: [
          serviceSaasImg,
          homeImg,
          serviceWebsitesImg,
          projectKromaImg,
          projectAuraImg
        ],
        imageAlt: 'ApexFlow omnichannel sales CRM pipeline interface',
        url: 'apexflow.crm',
        technologies: ['React', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL'],
        features: [
          'Two-way real-time email and calendar sync across Google Workspace and Microsoft 365',
          'Integrated WebRTC softphone dialer with live call transcription and AI summaries',
          'Customizable pipeline stage automation rules triggering instant webhooks'
        ]
      },
      {
        id: 'databridge-api',
        category: 'SaaS & Digital Platforms',
        categoryNumber: '05',
        title: 'DataBridge Low-Code API Mesh',
        description:
          'Developer gateway platform unifying relational databases, REST APIs, and third-party services into an instant GraphQL schema with automated rate-limiting.',
        image: serviceSaasImg,
        images: [
          serviceSaasImg,
          homeImg,
          serviceWebsitesImg,
          projectAuraImg,
          projectKromaImg
        ],
        imageAlt: 'DataBridge low-code API mesh gateway interface',
        url: 'databridge.mesh',
        technologies: ['Node.js', 'Go', 'GraphQL', 'Redis', 'Docker'],
        features: [
          'Automated GraphQL schema generation stitching relational SQL and REST endpoints',
          'Distributed edge gateway handling 400M+ daily API requests with sub-10ms overhead',
          'Interactive GraphQL Playground with query linting and execution tracing metrics'
        ]
      }
    ]
  }
];

// Backward-compatibility exports
export const projects = projectCategories.flatMap((cat) => cat.projects);

export const filterOptions = [
  { id: 'all', label: 'All Services' },
  { id: 'websites', label: 'Websites' },
  { id: 'mobile', label: 'Mobile Applications' },
  { id: 'saas', label: 'SaaS & Digital Platforms' }
];
