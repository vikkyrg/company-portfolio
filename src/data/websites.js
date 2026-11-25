/**
 * Centralized Data File: 33 Real Company Websites
 * Clean, lightweight, minimal implementation with full descriptions,
 * key features, website architecture, and automatic Vite screenshot discovery.
 */
import chanConstructions1 from '../assets/web/chan-constructions/1.png';
import chanConstructions2 from '../assets/web/chan-constructions/2.png';
import chanConstructions3 from '../assets/web/chan-constructions/3.png';
import chanConstructions4 from '../assets/web/chan-constructions/4.png';
import chanConstructions5 from '../assets/web/chan-constructions/5.png';

import autoopsSchool1 from '../assets/web/autoops-school/1.png';
import autoopsSchool2 from '../assets/web/autoops-school/2.png';
import autoopsSchool3 from '../assets/web/autoops-school/3.png';
import autoopsSchool4 from '../assets/web/autoops-school/4.png';
import autoopsSchool5 from '../assets/web/autoops-school/5.png';

export const commonWebTechStack = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Tailwind CSS"
];

export const realCompanyWebsites = [
  // 1. CHAN CONSTRUCTIONS
  {
    id: "chan-constructions",
    category: "websites",
    categoryLabel: "Websites",
    title: "Chan Constructions",
    websiteUrl: "https://chanconstructions.com",
    url: "https://chanconstructions.com",
    demoUrl: "https://chanconstructions.com",
    description:
      "A professional construction and real estate website showcasing residential construction, land development, farm plots, villa projects and interior design services. The website helps prospective customers explore construction solutions, discover property developments and connect with the company for project enquiries.",
    imageFolder: "chan-constructions",
    image: chanConstructions1,
    images: [
      chanConstructions1,
      chanConstructions2,
      chanConstructions3,
      chanConstructions4,
      chanConstructions5
    ],
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Home Construction – Information about residential construction, architectural planning and building solutions.",
      "Land Development – Showcase of land development, property layouts and real estate opportunities.",
      "Farm Plots & Villas – Presentation of farm plots, villas and lifestyle developments.",
      "Interior Design – Interior planning, design concepts and execution services.",
      "Project Enquiries – Contact forms and enquiry options for customers interested in construction and property services."
    ],
    architectureText: "Home, About Us, Construction Services, Land Development, Farm Plots, Villas, Interiors, Projects and Contact."
  },

  // 2. AUTOOPS SCHOOL
  {
    id: "autoops-school",
    category: "websites",
    categoryLabel: "Websites",
    title: "AutoOps School",
    websiteUrl: "https://autoopsschool.com",
    url: "https://autoopsschool.com",
    demoUrl: "https://autoopsschool.com",
    description:
      "An educational technology training website designed to help students and aspiring professionals develop industry-relevant technical skills through structured learning, practical training and hands-on project experience.",
    imageFolder: "autoops-school",
    image: autoopsSchool1,
    images: [
      autoopsSchool1,
      autoopsSchool2,
      autoopsSchool3,
      autoopsSchool4,
      autoopsSchool5
    ],
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Training Programs – Presentation of available technical training programs.",
      "Course Information – Detailed information about learning programs and their objectives.",
      "Practical Learning – Hands-on training and practical problem-solving opportunities.",
      "Student Enquiries – Enquiry and registration options for prospective learners.",
      "Learning Resources – Educational information and training-related resources."
    ],
    architectureText: "Home, About, Training Programs, Courses, Learning Resources, Student Enquiries and Contact."
  },

  // 3. NAVADURGAE ELECTRICALS
  {
    id: "navadurga-electricals",
    category: "websites",
    categoryLabel: "Websites",
    title: "Navadurgae Electricals",
    websiteUrl: "https://navadurgaelectricals.com",
    url: "https://navadurgaelectricals.com",
    demoUrl: "https://navadurgaelectricals.com",
    description:
      "A professional electrical contracting and MEP services website presenting electrical engineering solutions, infrastructure services and project execution capabilities for residential, commercial and industrial requirements.",
    imageFolder: "navadurga",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Electrical Contracting – Electrical installation and contracting service information.",
      "MEP Solutions – Mechanical, electrical and plumbing service information.",
      "Engineering Projects – Showcase of completed and ongoing engineering projects.",
      "Contractor Profile – Company background, qualifications and business capabilities.",
      "Service Enquiries – Customer enquiries for electrical and engineering requirements."
    ],
    architectureText: "Home, About Us, Electrical Services, MEP Services, Projects, Company Profile and Contact."
  },

  // 4. RIO PARTY HOUSE
  {
    id: "rio-party-house",
    category: "websites",
    categoryLabel: "Websites",
    title: "Rio Party House",
    websiteUrl: "https://riopartyhouse.com",
    url: "https://riopartyhouse.com",
    demoUrl: "https://riopartyhouse.com",
    description:
      "A hospitality and entertainment business website showcasing its party, celebration and customer experience offerings. The website serves as a digital presence for customers exploring the venue and its services.",
    imageFolder: "rio-party-house",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Venue Showcase – Presentation of the venue and its celebration environment.",
      "Party Experiences – Information about celebration, banquets and entertainment offerings.",
      "Service Information – Details of available customer services, decor and dining.",
      "Gallery – Visual presentation of the venue and past memorable experiences.",
      "Customer Enquiries – Contact and direct enquiry options for visitors and event organizers."
    ],
    architectureText: "Home, About, Experiences, Services, Gallery, Events and Contact."
  },

  // 5. PRIME AUDIT PARTNERS
  {
    id: "prime-audit-partners",
    category: "websites",
    categoryLabel: "Websites",
    title: "Prime Audit Partners",
    websiteUrl: "https://primeauditpartners.com",
    url: "https://primeauditpartners.com",
    demoUrl: "https://primeauditpartners.com",
    description:
      "A professional accounting, taxation and financial compliance website offering business and individual services related to GST, income tax, TDS, auditing, statutory compliance and business registration.",
    imageFolder: "prime-audit-partners",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "GST Services – GST registration, return filing, compliance and consultation information.",
      "Income Tax Services – Income tax return filing, tax planning and compliance assistance.",
      "TDS & TCS – Tax deduction and collection compliance services.",
      "Audit & Assurance – Financial audit, internal audit and assurance services.",
      "Business Compliance – Business registrations, ROC, LLP and statutory compliance assistance."
    ],
    architectureText: "Home, About, Services, GST, Income Tax, TDS & TCS, Audit, Business Compliance and Contact."
  },

  // 6. CARLOS CAKE CAFE
  {
    id: "carlos-cake-cafe",
    category: "websites",
    categoryLabel: "Websites",
    title: "Carlos Cake Cafe",
    websiteUrl: "https://carloscakecafe.in",
    url: "https://carloscakecafe.in",
    demoUrl: "https://carloscakecafe.in",
    description:
      "An online bakery and cake ordering website showcasing freshly prepared cakes, designer cakes, customised celebration cakes and bakery products. Customers can explore cake collections and connect with the bakery for customised orders and delivery.",
    imageFolder: "carlos-cake-cafe",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Cake Catalogue – Browse different cake collections and fresh bakery products.",
      "Cake Categories – Explore chocolate, fresh cream, designer and celebration cakes.",
      "Custom Cake Orders – Personalised cakes for birthdays, weddings and special occasions.",
      "Product Information – Cake images, descriptions, prices and available options.",
      "Customer Enquiries – Contact and ordering assistance for customers with delivery options."
    ],
    architectureText: "Home, Cakes, Categories, Product Details, Custom Orders, Gallery, Locations and Contact."
  },

  // 7. ABHILEKHA
  {
    id: "abhilekha",
    category: "websites",
    categoryLabel: "Websites",
    title: "Abhilekha",
    websiteUrl: "https://abhilekha.com",
    url: "https://abhilekha.com",
    demoUrl: "https://abhilekha.com",
    description:
      "A professional human resource and staffing solutions website providing recruitment, manpower outsourcing, permanent staffing, contractual staffing, payroll support and corporate training services for businesses across multiple industries.",
    imageFolder: "abhilekha",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Recruitment Solutions – Permanent and specialised executive recruitment services.",
      "Staffing Services – Contract staffing, remote staffing and workforce management solutions.",
      "Payroll & HR Outsourcing – Payroll, statutory compliance and employee administration support.",
      "Industry Specialisation – Recruitment solutions tailored across multiple business sectors.",
      "Candidate & Client Enquiries – Candidate career opportunities and business recruitment enquiries."
    ],
    architectureText: "Home, About Us, Recruitment, Staffing, Payroll, Training, Industry Verticals, Careers and Contact."
  },

  // 8. SADHANA CART
  {
    id: "sadhana-cart",
    category: "websites",
    categoryLabel: "Websites",
    title: "Sadhana Cart",
    websiteUrl: "https://sadhanacart.com",
    url: "https://sadhanacart.com",
    demoUrl: "https://sadhanacart.com",
    description:
      "A multi-category e-commerce platform providing an online shopping experience across electronics, fashion, groceries, gifts, medical products and other product categories. The platform promotes customer rewards, seller onboarding and mobile shopping.",
    imageFolder: "sadhana-cart",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Multi-Category Shopping – Browse products across multiple diverse shopping categories.",
      "Product Catalogue – Product discovery, new arrivals and best-selling consumer goods.",
      "Sadhana Rewards – Customer reward points, earning, tier levels and redemption information.",
      "Seller Onboarding – Registration opportunities and vendor store setups for businesses.",
      "Customer Shopping Support – Mobile app promotion, delivery tracking, returns and customer support."
    ],
    architectureText: "Home, Shop, Categories, Product Details, Account, Rewards, Seller Registration, Mobile App and Contact."
  },

  // 9. VISTARAA
  {
    id: "vistaraa",
    category: "websites",
    categoryLabel: "Websites",
    title: "Vistaraa",
    websiteUrl: "https://vistaraa.in",
    url: "https://vistaraa.in",
    demoUrl: "https://vistaraa.in",
    description:
      "A professional digital platform presenting its brand, products and customer offerings through a modern website experience. The website provides visitors with product discovery, curated collections and detailed business information.",
    imageFolder: "vistaraa",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Brand Showcase – Premium presentation of the company's identity and product offerings.",
      "Product Discovery – Browse actual product lines, styles and featured collections.",
      "Product Information – High-resolution visual presentation, specifications and descriptions.",
      "Customer Experience – Fluid responsive navigation and relevant customer interaction touchpoints.",
      "Contact & Enquiries – Direct customer communication channel and business enquiries."
    ],
    architectureText: "Home, About, Products, Collections, Product Details and Contact."
  },

  // 10. AMPS SMART LIGHTING
  {
    id: "amps-smart-lighting",
    category: "websites",
    categoryLabel: "Websites",
    title: "AMPS Smart Lighting",
    websiteUrl: "https://ampssmartlighting.com",
    url: "https://ampssmartlighting.com",
    demoUrl: "https://ampssmartlighting.com",
    description:
      "A smart lighting and electrical solutions website presenting lighting products, smart lighting technologies and lighting solutions for residential, commercial and architectural applications.",
    imageFolder: "ampslite",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Smart Lighting Solutions – Technical insights into intelligent, connected lighting systems.",
      "Product Catalogue – Comprehensive presentation of modern lighting fixtures and models.",
      "Product Specifications – Detailed technical datasheets, wattage, lumen and driver specs.",
      "Lighting Applications – Real-world commercial, office and architectural installation solutions.",
      "Business Enquiries – Direct channel for distributor, dealer and project procurement enquiries."
    ],
    architectureText: "Home, About, Products, Smart Lighting Solutions, Product Details, Applications and Contact."
  },

  // 11. JUMS CORPS
  {
    id: "jums-corps",
    category: "websites",
    categoryLabel: "Websites",
    title: "JUMS Corps",
    websiteUrl: "https://jumscorps.com",
    url: "https://jumscorps.com",
    demoUrl: "https://jumscorps.com",
    description:
      "A corporate business website presenting the company's identity, business operations, service offerings and professional solutions for customers and corporate enterprise partners.",
    imageFolder: "jums-corps",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Corporate Profile – Overview of executive leadership, mission and corporate background.",
      "Business Services – Detailed presentation of professional enterprise service offerings.",
      "Solutions Showcase – Structured information about specialized business solutions.",
      "Company Information – Governance policies, organizational milestones and credentials.",
      "Contact & Enquiries – Dedicated business communication channels and partnership enquiries."
    ],
    architectureText: "Home, About Us, Services, Solutions, Business Information and Contact."
  },

  // 12. VEETRAAGA TOURS & TRAVELS
  {
    id: "veetraaga-tours",
    category: "websites",
    categoryLabel: "Websites",
    title: "Veetraaga Tours & Travels",
    websiteUrl: "https://veetraagatours.com",
    url: "https://veetraagatours.com",
    demoUrl: "https://veetraagatours.com",
    description:
      "A travel and transportation website offering taxi services, local and outstation travel, vehicle rentals and tour packages. Customers can explore travel options, vehicle information and booking assistance for different journeys.",
    imageFolder: "veetraaga-tours",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Taxi Booking – Local, outstation and seamless airport transportation enquiries.",
      "Tour Packages – Curated domestic, international and sacred pilgrimage travel itineraries.",
      "Destination Discovery – Comprehensive information on travel destinations, routes and hotels.",
      "Vehicle Information – Detailed fleet showcase including sedans, SUVs, tempo travellers and coaches.",
      "Booking Assistance – Travel itinerary planning, transparent pricing and 24/7 passenger support."
    ],
    architectureText: "Home, Taxi Services, Tour Packages, Domestic Tours, International Tours, Pilgrimage, Vehicles and Contact."
  },

  // 13. FROZEN STATION
  {
    id: "frozen-station",
    category: "websites",
    categoryLabel: "Websites",
    title: "Frozen Station",
    websiteUrl: "https://frozenstation.com",
    url: "https://frozenstation.com",
    demoUrl: "https://frozenstation.com",
    description:
      "A dedicated business website presenting the company's brand, dessert products and customer offerings through an appealing digital product, menu and franchise showcase.",
    imageFolder: "frozen-station",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Brand Presentation – Story, culinary philosophy and introduction to dessert craftsmanship.",
      "Product Showcase – Visual presentation of ice creams, sundaes, shakes and frozen delicacies.",
      "Product Information – Descriptions, ingredient freshness, portion sizes and flavor profiles.",
      "Customer Information – Outlet locations, franchise opportunities and catering services.",
      "Contact & Enquiries – Direct ordering support and business franchise consultation options."
    ],
    architectureText: "Home, About, Products, Product Details, Gallery and Contact."
  },

  // 14. BANGARKONDA
  {
    id: "bangarkonda-projects",
    category: "websites",
    categoryLabel: "Websites",
    title: "Bangarkonda",
    websiteUrl: "https://bangarkonda.com",
    url: "https://bangarkonda.com",
    demoUrl: "https://bangarkonda.com",
    description:
      "A diversified business and development website presenting projects and business opportunities across real estate, land development, farmland, renewable energy and hospitality-related sectors.",
    imageFolder: "bangarkonda-projects",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Land Development – Presentation of planned gated communities and commercial real estate layouts.",
      "Farmland Projects – Managed eco-friendly agricultural and organic farmland developments.",
      "Renewable Energy – Utility-scale solar farm investments and green energy infrastructure.",
      "Hospitality Projects – Development of eco-resorts, clubhouses and leisure destinations.",
      "Project Portfolio – Investment portfolios, statutory clearances and investor enquiries."
    ],
    architectureText: "Home, About, Business Sectors, Land Development, Farmland, Solar, Hospitality, Projects and Contact."
  },

  // 15. MULTI RISING EXPORTS
  {
    id: "multi-rising-exports",
    category: "websites",
    categoryLabel: "Websites",
    title: "Multi Rising Exports",
    websiteUrl: "https://multirisingexports.com",
    url: "https://multirisingexports.com",
    demoUrl: "https://multirisingexports.com",
    description:
      "A professional export and international trading website presenting the company's business profile, product offerings, sourcing capabilities and trade-related services to domestic and international customers.",
    imageFolder: "multi-rising-exports",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Company Profile – Global export credentials, statutory licenses and company milestones.",
      "Product Catalogue – Showcase of export-grade agro commodities, spices and industrial goods.",
      "Product Information – Technical packaging specifications, grades, moisture and export terms.",
      "Export Services – International logistics, multi-modal freight forwarding and customs clearance.",
      "Business Enquiries – Fast quotation generation for international importers and commercial buyers."
    ],
    architectureText: "Home, About Us, Products, Export Services, Quality Information, Business Enquiries and Contact."
  },

  // 16. TOWNCHAIR
  {
    id: "townchair",
    category: "websites",
    categoryLabel: "Websites",
    title: "Townchair",
    websiteUrl: "https://townchair.com",
    url: "https://townchair.com",
    demoUrl: "https://townchair.com",
    description:
      "An online furniture shopping platform showcasing premium outdoor furniture, cane furniture, rope furniture, sofa sets, dining sets, swings and other lifestyle furniture collections.",
    imageFolder: "townchair",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Furniture Collections – Browse weather-resistant outdoor, wicker, cane and rope designs.",
      "Product Catalogue – Comprehensive catalogue featuring dining sets, lounge chairs and swings.",
      "Product Details – High-definition imagery, frame specifications, fabric choices and warranty terms.",
      "Online Shopping – Interactive product customization, direct add-to-cart and order placement.",
      "Customer Support – Bulk architectural order consultations, safe shipping and assembly support."
    ],
    architectureText: "Home, Outdoor Furniture, Cane Furniture, Rope Furniture, Product Categories, Product Details, Shop and Contact."
  },

  // 17. SRI AYYAPPAN GLASS
  {
    id: "sri-ayyappan-glass",
    category: "websites",
    categoryLabel: "Websites",
    title: "Sri Ayyappan Glass",
    websiteUrl: "https://sriayyappanglass.com",
    url: "https://sriayyappanglass.com",
    demoUrl: "https://sriayyappanglass.com",
    description:
      "A professional glass business website showcasing its glass products, architectural glazing solutions and related fabrication services for residential, commercial and architectural requirements.",
    imageFolder: "sri-ayyappan-glass",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Glass Product Showcase – Presentation of toughened glass, frosted glass and designer mirrors.",
      "Product Information – Glass thickness, safety ratings, acoustic laminations and specifications.",
      "Glass Solutions – Architectural spider glazing, shower enclosures and balustrade installations.",
      "Project Gallery – Visual gallery of completed commercial facades and modern residential interiors.",
      "Customer Enquiries – On-site measurement requests, custom fabrication quotes and customer support."
    ],
    architectureText: "Home, About Us, Products, Services, Projects, Gallery and Contact."
  },

  // 18. ETRACK TITLE
  {
    id: "etrack-title",
    category: "websites",
    categoryLabel: "Websites",
    title: "eTrack Title",
    websiteUrl: "https://etracktitle.com",
    url: "https://etracktitle.com",
    demoUrl: "https://etracktitle.com",
    description:
      "A professional title and mortgage support services website providing property title research, title searches, mortgage processing support, document services and aerial roof sketch reporting.",
    imageFolder: "etrack-title",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Title Search – Detailed property title abstracts, deed records and ownership histories.",
      "Lien & Tax Search – Verification of municipal property tax, judgments and outstanding encumbrances.",
      "Mortgage Processing – End-to-end mortgage closing, payoff verification and document preparation.",
      "Document Services – County recording, deed retrieval and certified document assistance.",
      "Aerial Roof Reports – Precise high-resolution CAD roof measurement sketches and slope reports."
    ],
    architectureText: "Home, About, Title Services, Mortgage Support, Document Services, Roof Reports, Ordering and Contact."
  },

  // 19. NEUTILL
  {
    id: "neutill",
    category: "websites",
    categoryLabel: "Websites",
    title: "Neutill",
    websiteUrl: "https://neutill.com",
    url: "https://neutill.com",
    demoUrl: "https://neutill.com",
    description:
      "A corporate website showcasing the company's business identity, professional offerings, services and customer-oriented business solutions.",
    imageFolder: "neutill",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Company Overview – Corporate philosophy, technological domain focus and executive summary.",
      "Services & Solutions – End-to-end presentation of specialized service lines.",
      "Product or Service Information – Detailed breakdowns of functional methodologies and client value.",
      "Business Showcase – Commercial portfolio, case studies and validated corporate benchmarks.",
      "Contact & Enquiries – Enterprise consulting consultation desks and enquiry forms."
    ],
    architectureText: "Home, About, Services, Solutions, Company Information and Contact."
  },

  // 20. INOCHI INTERNATIONAL
  {
    id: "inochi-international",
    category: "websites",
    categoryLabel: "Websites",
    title: "Inochi International",
    websiteUrl: "https://inochiinternational.in",
    url: "https://inochiinternational.in",
    demoUrl: "https://inochiinternational.in",
    description:
      "An international spice trading and export website showcasing Indian spice products, sourcing capabilities, product quality and global trading services for international buyers.",
    imageFolder: "inochi-international",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Spice Catalogue – Premium export grades of green cardamom, turmeric, black pepper, cloves and ginger.",
      "Product Information – Moisture parameters, volatile oil content, lab testing certificates and sizes.",
      "Quality Assurance – Strict adherence to global food safety, phytosanitary standards and ISO norms.",
      "Sourcing & Traceability – Ethical farm-level origin tracing and transparent supply chain models.",
      "Export Enquiries – Instant RFQ generation for worldwide buyers, containers and private labeling."
    ],
    architectureText: "Home, About Us, Products, Spice Categories, Quality Assurance, Global Reach and Contact."
  },

  // 21. BANGARU THALLI
  {
    id: "bangaru-thalli",
    category: "websites",
    categoryLabel: "Websites",
    title: "Bangaru Thalli",
    websiteUrl: "https://bangaruthalli.in",
    url: "https://bangaruthalli.in",
    demoUrl: "https://bangaruthalli.in",
    description:
      "An online fashion and lifestyle shopping website featuring women's clothing, kurtis, sarees, co-ord sets, leggings, dupattas, jewellery and beauty-related products.",
    imageFolder: "bangaru-thalli",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Fashion Catalogue – Wide range of women's ethnic, modern and everyday casual collections.",
      "Product Categories – Categorized browsing across traditional sarees, kurtis, palazzos and sets.",
      "Jewellery & Beauty – Curated fashion accessories, imitation jewellery, earrings and beauty essentials.",
      "Product Details – High-res photos, size charts, fabric care instructions and customer reviews.",
      "Online Shopping – Smooth product discovery, cart, secure checkout and door-to-door delivery tracking."
    ],
    architectureText: "Home, Shop, Clothing, Fashion Categories, Jewellery, Beauty Products, Product Details and Contact."
  },

  // 22. CHAMPIONS HR SERVICES
  {
    id: "champions-hr-services",
    category: "websites",
    categoryLabel: "Websites",
    title: "Champions HR Services",
    websiteUrl: "https://championshrservices.com",
    url: "https://championshrservices.com",
    demoUrl: "https://championshrservices.com",
    description:
      "A professional human resource and recruitment services website providing workforce solutions, talent acquisition, staffing support and HR-related business services.",
    imageFolder: "champions-hr-services",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Recruitment Services – Talent scouting, technical headhunting and executive selection across industries.",
      "Staffing Solutions – Flexible contractual workforce management and seasonal manpower solutions.",
      "HR Services – HR payroll structuring, labor compliance audits and employee onboarding support.",
      "Candidate Opportunities – Portal for jobseekers to explore openings and upload candidate resumes.",
      "Business Enquiries – Direct client enquiry interface for corporate talent acquisition mandates."
    ],
    architectureText: "Home, About Us, Recruitment, Staffing, HR Services, Careers, Clients and Contact."
  },

  // 23. BREWHOUSE GASTRO
  {
    id: "brewhouse-gastro",
    category: "websites",
    categoryLabel: "Websites",
    title: "Brewhouse Gastro",
    websiteUrl: "https://brewhousegastro.com",
    url: "https://brewhousegastro.com",
    demoUrl: "https://brewhousegastro.com",
    description:
      "A hospitality and dining website presenting a gastro pub experience through food offerings, beverage information, entertainment, events and venue-related services.",
    imageFolder: "brewhouse-gastro",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Restaurant Presentation – Vibrant venue ambiance, craft brewing ethos and culinary atmosphere.",
      "Food Menu – Curated multi-cuisine starters, wood-fired pizzas, gourmet mains and signature desserts.",
      "Events & Celebrations – Private dining bookings, corporate social gatherings and festive parties.",
      "Entertainment – Schedule of live musical gigs, acoustic nights, screening events and DJ nights.",
      "Reservations & Contact – Instant table reservation requests, map navigation and guest support."
    ],
    architectureText: "Home, About, Food Menu, Events, Entertainment, Gallery and Contact."
  },

  // 24. UNIQUE COMPUTERS
  {
    id: "unique-computers",
    category: "websites",
    categoryLabel: "Websites",
    title: "Unique Computers",
    websiteUrl: "https://uniquec.com",
    url: "https://uniquec.com",
    demoUrl: "https://uniquec.com",
    description:
      "A corporate IT procurement and technology products website showcasing laptops, desktops, workstations, printers and enterprise computing solutions for businesses, institutions and individual customers.",
    imageFolder: "unique-computers",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Product Catalogue – Comprehensive listing of commercial laptops, desktop towers, monitors and accessories.",
      "Laptop Collections – Specialized lineup of business ultra-books, gaming laptops and educational machines.",
      "Workstation Solutions – High-performance graphic rendering workstations and compute clusters.",
      "Corporate Procurement – Bulk hardware supply contracts, enterprise leasing and AMC maintenance.",
      "Product Enquiries – Quotation requests, technical consultation and manufacturer warranty information."
    ],
    architectureText: "Home, Laptops, Desktops, Workstations, Printers, Products, Corporate Solutions, About and Contact."
  },

  // 25. BRIGHTWAYS FINANCIAL
  {
    id: "brightways-financial",
    category: "websites",
    categoryLabel: "Websites",
    title: "Brightways Financial",
    websiteUrl: "https://brightwaysfinancial.com",
    url: "https://brightwaysfinancial.com",
    demoUrl: "https://brightwaysfinancial.com",
    description:
      "A financial research and advisory website providing information about financial research services, market-related analysis and investment research offerings.",
    imageFolder: "brightways-financial",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Financial Research – Methodological presentation of equity, commodity and macroeconomic research.",
      "Market Analysis – Daily technical charts, market trends and comprehensive sector reports.",
      "Research Products – Clear breakdown of research tiers, historical track records and insights.",
      "Client Information – Guidance resources, onboarding terms and client investor education.",
      "Regulatory Disclosures – Mandatory compliance notices, SEBI guidelines and complete risk disclosures."
    ],
    architectureText: "Home, About, Research Services, Products, Disclosures, Client Information and Contact."
  },

  // 26. CR INDUSTRIES
  {
    id: "cr-industries",
    category: "websites",
    categoryLabel: "Websites",
    title: "CR Industries",
    websiteUrl: "https://crindustries.co.in",
    url: "https://crindustries.co.in",
    demoUrl: "https://crindustries.co.in",
    description:
      "An industrial products and engineering solutions website showcasing sealants, waterproofing products, grinding tools, industrial fittings and related products for industrial and commercial applications.",
    imageFolder: "cr-industries",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Industrial Sealants – High-grade silicone sealants, polyurethane adhesives and joint expansion solutions.",
      "Waterproofing Products – Advanced waterproofing chemicals, membranes and protective floor coatings.",
      "Grinding Products – Precision industrial grinding wheels, cut-off discs and abrasive accessories.",
      "Industrial Fittings – Stainless steel pipe fittings, industrial valves, clamps and connectors.",
      "Product Enquiries – Detailed technical datasheets, bulk commercial pricing and distributor desks."
    ],
    architectureText: "Home, About, Products, Sealants, Waterproofing, Grinding Products, Fittings, Partners and Contact."
  },

  // 27. CHETHAN CINEMAS
  {
    id: "chethan-cinemas",
    category: "websites",
    categoryLabel: "Websites",
    title: "Chethan Cinemas",
    websiteUrl: "https://chethancinemas.com",
    url: "https://chethancinemas.com",
    demoUrl: "https://chethancinemas.com",
    description:
      "A film and media production website presenting a production house's creative work, film portfolio and media production capabilities.",
    imageFolder: "chethan-cinemas",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Production House Profile – Creative history, artistic vision, founding team and cinematic achievements.",
      "Film Portfolio – Featured film releases, short stories, digital web series and documentary projects.",
      "Video Showcase – High-resolution video embeds, showreels, teasers, trailers and behind-the-scenes clips.",
      "Creative Services – Script development, cinematography, audio mixing, color grading and post-production.",
      "Business Enquiries – Direct co-production pitches, brand sponsorship and distribution enquiries."
    ],
    architectureText: "Home, About, Productions, Films, Portfolio, Videos and Contact."
  },

  // 28. PRABUDDHAA
  {
    id: "prabuddhaa-academy",
    category: "websites",
    categoryLabel: "Websites",
    title: "Prabuddhaa",
    websiteUrl: "https://prabuddhaa.com",
    url: "https://prabuddhaa.com",
    demoUrl: "https://prabuddhaa.com",
    description:
      "An integrated wellbeing academy website offering educational programs, life skills development, guidance, counselling and holistic wellbeing-related learning services.",
    imageFolder: "prabuddhaa-academy",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Wellbeing Courses – Accredited certificates in integrative wellness, cognitive behavioral models and health.",
      "Healthcare Education – Foundational and master classes on lifestyle medicine and somatic therapies.",
      "Teen Life Skills – Purpose-built emotional resilience, communication and leadership programs for teens.",
      "Guidance & Counselling – Professional confidential counselling booking for individuals and families.",
      "Learning Resources – Extensive wellbeing articles, video webinars, downloadable toolkits and library."
    ],
    architectureText: "Home, About, Courses, Guidance Services, Teen Life Skills, Counselling, Blog, Library, Gallery and Contact."
  },

  // 29. JYOTHIRGAMAYEE FOUNDATION
  {
    id: "jyothirgamayee-foundation",
    category: "websites",
    categoryLabel: "Websites",
    title: "Jyothirgamayee Foundation",
    websiteUrl: "https://jyothirgamayee.org",
    url: "https://jyothirgamayee.org",
    demoUrl: "https://jyothirgamayee.org",
    description:
      "A foundation and social development website focused on adolescent wellbeing, life skills, guidance, educational initiatives and social support programs.",
    imageFolder: "jyothirgamayee-foundation",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Foundation Profile – Core mission, humanitarian vision, leadership trustees and compliance transparency.",
      "Adolescent Wellbeing – School outreach workshops addressing adolescent mental wellness and guidance.",
      "Life Skills Development – Hands-on vocational skills, creative problem solving and self-reliance training.",
      "Social Programs – Community nutrition support, rural education funding and youth mentorship projects.",
      "Community Engagement – Volunteer registration channels, corporate CSR partnerships and tax-deductible donations."
    ],
    architectureText: "Home, About, Vision & Mission, Programs, Life Skills, Initiatives, Media, Join Us, Donate and Contact."
  },

  // 30. AMAR MACHINERY ELECTRONICS
  {
    id: "amar-machinery-electronics",
    category: "websites",
    categoryLabel: "Websites",
    title: "Amar Machinery Electronics",
    websiteUrl: "https://amarmachineryelectronics.com",
    url: "https://amarmachineryelectronics.com",
    demoUrl: "https://amarmachineryelectronics.com",
    description:
      "An online product catalogue and shopping platform offering machinery, electronics, electrical equipment, plumbing supplies, pumps, fittings and related industrial and household products.",
    imageFolder: "amar-machinery-electronics",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Multi-Category Product Catalogue – Industrial machinery, power tools, home appliances and electronic spares.",
      "Product Search – Fast interactive search by brand, model, horsepower, voltage and category.",
      "Product Details – Comprehensive technical specifications, warranty coverage and spare parts manuals.",
      "Shopping Functionality – Instant quote cart, commercial invoice generation and order fulfillment.",
      "Product Discovery – Highlighting seasonal agricultural equipment, bestsellers and newly arrived inventory."
    ],
    architectureText: "Home, Shop, Categories, Machinery, Electronics, Electrical Products, Plumbing, Agriculture, Product Details and Contact."
  },

  // 31. FASTING NUTROCARE
  {
    id: "fasting-nutrocare",
    category: "websites",
    categoryLabel: "Websites",
    title: "Fasting Nutrocare",
    websiteUrl: "https://fastingnutrocare.co.in",
    url: "https://fastingnutrocare.co.in",
    demoUrl: "https://fastingnutrocare.co.in",
    description:
      "A holistic wellness and nutrition website offering Ayurvedic wellness information, therapeutic fasting programs, nutrition guidance, personalised wellness services and herbal product offerings.",
    imageFolder: "fasting-nutrocare",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Wellness Programs – Supervised intermittent and water fasting programs tailored for metabolic balance.",
      "Ayurvedic Products – Certified herbal churnas, cold-pressed oils, detox teas and herbal formulations.",
      "Nutrition Guidance – Evidence-based dietary charts, macronutrient tracking and whole-food coaching.",
      "Consultation – Direct appointment booking with experienced Ayurvedic doctors and clinical dieticians.",
      "Customer Experiences – Documented client transformation journeys, health metrics and wellness articles."
    ],
    architectureText: "Home, About, Wellness Programs, Products, Product Details, Consultation, Testimonials, Blog and Contact."
  },

  // 32. KK INDUSTRIE
  {
    id: "kk-industries",
    category: "websites",
    categoryLabel: "Websites",
    title: "KK Industrie",
    websiteUrl: "https://kkindustrie.com",
    url: "https://kkindustrie.com",
    demoUrl: "https://kkindustrie.com",
    description:
      "A precision manufacturing and engineering website showcasing CNC turning, VMC machining, stainless steel fabrication and custom industrial component manufacturing based on customer drawings and specifications.",
    imageFolder: "kk-industries",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "CNC Turning – High-precision CNC lathe component production with ultra-tight micron tolerances.",
      "VMC Machining – 3-axis and 4-axis vertical machining center milling for complex industrial geometries.",
      "Stainless Steel Fabrication – Heavy structural frame welding, sheet metal bending and assemblies.",
      "Custom Engineering – Turnkey prototyping, job-work and batch manufacturing from customer CAD drawings.",
      "Quality & Manufacturing – CMM dimensional inspection, ISO certified quality control and machinery profile."
    ],
    architectureText: "Home, About Us, Services, CNC Turning, VMC Machining, Fabrication, Machinery, Projects and Contact."
  },

  // 33. AGATSYA HERBAL
  {
    id: "agatsya-aushadh",
    category: "websites",
    categoryLabel: "Websites",
    title: "Agatsya Herbal",
    websiteUrl: "https://agatsyaherbal.com",
    url: "https://agatsyaherbal.com",
    demoUrl: "https://agatsyaherbal.com",
    description:
      "An Ayurvedic and herbal products website showcasing traditional herbal formulations, natural wellness products, Ayurvedic preparations and product information for customers interested in traditional wellness solutions.",
    imageFolder: "agatsya-aushadh",
    status: "Live",
    statusType: "live",
    tags: commonWebTechStack,
    technologies: commonWebTechStack,
    features: [
      "Ayurvedic Product Catalogue – Wide array of classical herbal formulations, immunity elixirs and syrups.",
      "Product Categories – Explore Churna, Taila, Ghrita, Leha, Asava, Arishta and Kashaya preparations.",
      "Product Information – Botanical herb ingredients, classical script references, dosage guides and bottle sizes.",
      "Online Shopping – Easy shopping cart flow, safe payment gateway options and swift courier dispatch.",
      "Product Quality Information – GMP certification, stringent batch laboratory testing and pure raw sourcing."
    ],
    architectureText: "Home, About, Shop, Product Categories, Product Details, Wellness Categories, Quality Information and Contact."
  }
];

/**
 * Straightforward & Simple Vite Image Loader
 * Scans /src/assets/web/{imageFolder}/*.png
 * - Matches using the explicit imageFolder field
 * - 1.png is used as card thumbnail
 * - Sorted numerically (1.png to 5.png) for Details modal
 * - Missing screenshots show clean fallback preview
 */
const webPngFiles = {
  ...import.meta.glob('/src/assets/web/*/*.png', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/web/*/*.png', { eager: true, import: 'default' })
};

// Index screenshots by imageFolder
const folderScreenshots = {};

for (const [filePath, fileSrc] of Object.entries(webPngFiles)) {
  const parts = filePath.replace(/\\/g, '/').split('/');
  const fileName = parts.pop();
  const folder = parts.pop();

  if (!folder || !fileName) continue;

  if (!folderScreenshots[folder]) {
    folderScreenshots[folder] = [];
  }

  // Prevent duplicate items from matching both glob paths
  if (folderScreenshots[folder].some((item) => item.src === fileSrc)) {
    continue;
  }

  const num = parseInt(fileName, 10) || 99;
  folderScreenshots[folder].push({ num, src: fileSrc });
}

// Sort each folder numerically: 1.png -> 2.png -> 3.png -> 4.png -> 5.png
for (const folder in folderScreenshots) {
  folderScreenshots[folder].sort((a, b) => a.num - b.num);
}

// Export websites with auto-resolved screenshots
export const websitesWithAutoImages = realCompanyWebsites.map((website) => {
  const realScreenshots = (folderScreenshots[website.imageFolder] || []).map((item) => item.src);
  const screenshots = realScreenshots.length > 0 ? realScreenshots : website.images || [];
  return {
    ...website,
    image: realScreenshots[0] || website.image || null,
    images: screenshots
  };
});
