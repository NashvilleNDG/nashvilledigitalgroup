export const company = {
  name: "Nashville Digital Group",
  shortName: "NDG",
  tagline:
    "Transforming businesses through innovative digital marketing and AI solutions.",
  url: "https://nashvilledigitalgroup.com",
  phone: "(615) 200-0170",
  phone2: "(615) 603-1262",
  email: "office@nashvilledigitalgroup.com",
  location: "Nashville, TN",
  hours: "Mon–Fri: 8AM – 6PM CST",
  founded: 2020,
  ceo: "Sarah Johnson",
  team: 25,
  clients: 500,
  satisfaction: 98,
  glassdoor: 4.9,
} as const

export const stats = [
  { value: "500+", label: "Businesses Transformed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Average ROI Increase" },
  { value: "+127%", label: "Lead Generation" },
  { value: "24/7", label: "AI Support" },
] as const

export type Service = {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: "ai-marketing",
    title: "AI-Powered Marketing",

    description:
      "Leverage artificial intelligence to optimize campaigns, predict customer behavior, and automate marketing processes.",
    features: [
      "Predictive Analytics",
      "Automated Campaign Optimization",
      "Customer Journey Mapping",
      "Behavioral Targeting",
      "Real-time Performance Tracking",
    ],
    icon: "Bot",
  },
  {
    id: "digital-strategy",
    title: "Digital Marketing Strategy",

    description:
      "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
    features: [
      "Market Research & Analysis",
      "Competitor Analysis",
      "Content Strategy",
      "Multi-channel Campaigns",
      "ROI Optimization",
    ],
    icon: "Target",
  },
  {
    id: "web-development",
    title: "Web Development",

    description:
      "Custom websites and applications built with cutting-edge technologies for optimal performance.",
    features: [
      "Responsive Design",
      "E-commerce Integration",
      "CMS Development",
      "API Integration",
      "Performance Optimization",
    ],
    icon: "Code",
  },
  {
    id: "seo",
    title: "SEO & Search Marketing",

    description:
      "Dominate search results with advanced SEO techniques and strategic paid advertising.",
    features: [
      "Technical SEO Audit",
      "Content Optimization",
      "Local SEO",
      "Google Ads Management",
      "Analytics & Reporting",
    ],
    icon: "Search",
  },
  {
    id: "social-media",
    title: "Social Media Management",

    description:
      "Engage your audience across all platforms with compelling content and community management.",
    features: [
      "Content Creation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships",
      "Social Analytics",
    ],
    icon: "Share2",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Automation",

    description:
      "Intelligent conversational AI that handles inquiries, generates leads, and provides 24/7 support.",
    features: [
      "Natural Language Processing",
      "Lead Qualification",
      "24/7 Customer Support",
      "CRM Integration",
      "Multi-language Support",
    ],
    icon: "MessageSquare",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",

    description:
      "Strategic email campaigns that nurture leads, boost engagement, and drive conversions.",
    features: [
      "Campaign Strategy & Design",
      "List Segmentation & Management",
      "A/B Testing & Optimization",
      "Automated Drip Campaigns",
      "Performance Analytics & Reporting",
    ],
    icon: "Mail",
  },
  {
    id: "llm-optimization",
    title: "LLM Optimization",

    description:
      "Optimize your content for Large Language Models to ensure discoverability in AI-powered searches.",
    features: [
      "AI Search Optimization",
      "Content Structure Enhancement",
      "Schema Markup Implementation",
      "Knowledge Graph Optimization",
      "AI-Friendly Content Strategy",
    ],
    icon: "Brain",
  },
  {
    id: "reputation-management",
    title: "Reputation Management",

    description:
      "Monitor, protect, and enhance your online reputation with proactive management strategies.",
    features: [
      "Review Monitoring & Response",
      "Online Sentiment Analysis",
      "Crisis Management",
      "Brand Protection",
      "Reputation Repair Strategies",
    ],
    icon: "Shield",
  },
  {
    id: "engineering-services",
    title: "Engineering Services",

    description:
      "Specialized solutions for architecture, engineering, and construction firms including 3D rendering and BIM integration.",
    features: [
      "3D Renderings & Virtual Tours",
      "BIM Integration & Support",
      "Digital Marketing for AEC",
      "Project Management Tools",
      "Custom Platform Development",
    ],
    icon: "Building2",
  },
]

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  metric?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Shiv Patel",
    role: "Owner",
    company: "Big Pigs Wine & Spirits",
    quote:
      "Nashville Digital Group transformed our online presence completely. Their AI-powered marketing strategies increased our leads by 340% in just 3 months.",
    metric: "+340% leads",
  },
  {
    name: "Pinal Patel",
    role: "Owner",
    company: "Maharani Collections",
    quote:
      "Their strategic approach to digital marketing and SEO helped us dominate our local market. Sales increased by 180% year-over-year.",
    metric: "+180% sales",
  },
  {
    name: "Shiv Biradar",
    role: "Owner",
    company: "The Lounge at 2nd",
    quote:
      "The AI-powered tools from Nashville Digital Group are a game-changer. Our marketing efforts are now far more targeted and efficient, delivering measurable results consistently.",
    metric: "Measurable results",
  },
  {
    name: "Sachin Shah",
    role: "Owner",
    company: "St. Andrews Market",
    quote:
      "We have been extremely impressed with the level of service and expertise that we have received from Nashville Digital Group. They are true professionals.",
    metric: "5-star service",
  },
  {
    name: "Raj Agarwal",
    role: "Owner",
    company: "College Place Apartment",
    quote:
      "We have been working with Nashville Digital Group for over a year now and we have been extremely happy with the results. They consistently exceed our expectations.",
    metric: "1+ year partner",
  },
  {
    name: "Isaac",
    role: "Manager",
    company: "Red Spirits",
    quote:
      "The team at NDG is creative, responsive, and results-oriented. They've been a key part of our success in reaching a wider audience.",
    metric: "Wider audience",
  },
]

export const awards = [
  {
    title: "Best Digital Marketing Agency",
    org: "Nashville Business Journal",
    year: "2023",
  },
  {
    title: "AI Innovation in Marketing",
    org: "Tech Innovators TN",
    year: "2023",
  },
  { title: "Top SEO Company", org: "Clutch.co", year: "2022" },
  {
    title: "Excellence in Client Service",
    org: "UpCity",
    year: "2022",
  },
]

export const timeline = [
  {
    year: "2022",
    title: "Company Founded",
    description:
      "Established with a vision to democratize AI-powered marketing for businesses of all sizes.",
  },
  {
    year: "2023",
    title: "First AI Integration",
    description:
      "Successfully launched first AI-powered marketing automation platform, revolutionizing how we serve clients.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Recognized as 'Best Digital Marketing Agency' by Nashville Business Journal. Achieved 100+ satisfied clients.",
  },
  {
    year: "2025",
    title: "Team Expansion",
    description:
      "Grew team to 25+ specialists. Expanded services to include advanced AI solutions for the hospitality industry.",
  },
  {
    year: "2026",
    title: "AI Innovation Leader",
    description:
      "Launched comprehensive AI chatbot solutions. Became a recognized leader in AI-powered digital marketing.",
  },
]

export const coreValues = [
  {
    title: "Innovation First",
    description:
      "Constantly explore cutting-edge AI technologies and digital marketing strategies.",
    icon: "Lightbulb",
  },
  {
    title: "Client-Centric",
    description:
      "Every decision guided by what's best for clients' success and long-term growth.",
    icon: "Heart",
  },
  {
    title: "Transparency",
    description:
      "Honest communication, clear reporting, and transparent pricing with no hidden fees.",
    icon: "Eye",
  },
  {
    title: "Results-Driven",
    description:
      "Focus on delivering measurable outcomes that directly impact business objectives.",
    icon: "TrendingUp",
  },
  {
    title: "Collaborative",
    description:
      "Work as an extension of your team, fostering partnerships built on trust and mutual success.",
    icon: "Users",
  },
  {
    title: "Agile Excellence",
    description:
      "Adapt quickly to market changes and pivot strategies to ensure optimal performance.",
    icon: "Zap",
  },
]

export const hospitalityFeatures = [
  {
    title: "AI-Powered Guest Communication",
    description:
      "24/7 multilingual support via text and voice. Handle bookings, answer queries, and offer personalized recommendations.",
    tags: ["24/7 Support", "Voice AI", "Upselling", "Booking Assistance"],
    icon: "MessageCircle",
  },
  {
    title: "Dynamic Revenue Optimization",
    description:
      "AI-driven demand forecasting and competitive analysis for dynamic pricing strategies to maximize occupancy and revenue.",
    tags: ["Dynamic Pricing", "Demand Forecasting", "Market Analysis"],
    icon: "TrendingUp",
  },
  {
    title: "Hyper-Personalized Guest Experiences",
    description:
      "Tailor every guest interaction using data on preferences and past behavior.",
    tags: ["Personalization", "Guest Analytics", "Loyalty Programs"],
    icon: "Star",
  },
  {
    title: "Streamlined Hotel Operations",
    description:
      "Automate routine tasks from staff scheduling to inventory management. Predictive analytics for maintenance.",
    tags: ["Automation", "Predictive Maintenance", "Workflow Optimization"],
    icon: "Settings",
  },
  {
    title: "Voice AI for In-Room Experience",
    description:
      "In-room voice assistants for guests to control amenities, request services, and get information by voice.",
    tags: ["Voice Control", "Contactless Service", "Smart Room"],
    icon: "Mic",
  },
  {
    title: "Actionable Data & Analytics",
    description:
      "Turn guest data into actionable insights. Understand trends, measure performance, and make data-driven decisions.",
    tags: ["Data Insights", "Performance Dashboards", "Reporting"],
    icon: "BarChart3",
  },
]

export const hospitalityCaseStudies = [
  {
    property: "The Grand Nashville Hotel",
    challenge:
      "Managing high volumes of guest inquiries across multiple channels while maintaining luxury service standards.",
    solution:
      "24/7 AI Concierge with voice and text, integrated with PMS for real-time booking and service requests.",
    results: [
      "92% of routine inquiries handled automatically",
      "35% increase in direct bookings through chat",
      "Guest satisfaction scores increased by 28%",
      "$150k in annual upsell revenue identified and captured",
    ],
  },
  {
    property: "Boutique Broadway Inn",
    challenge:
      "Competing with larger chains on personalization and pricing without a large analytics team.",
    solution:
      "Revenue Optimization and Guest Personalization engines to automate pricing and tailor marketing.",
    results: [
      "Average Daily Rate (ADR) increased by 22%",
      "Repeat guest bookings grew by 45%",
      "Reduced time spent on rate management by 80%",
      "Improved online review sentiment regarding value",
    ],
  },
  {
    property: "Music Row Resorts",
    challenge:
      "Streamlining operations and reducing costs across a portfolio of 5 properties.",
    solution:
      "AI for Operations — automating staff schedules, supply orders, and predictive maintenance alerts.",
    results: [
      "20% reduction in operational overhead",
      "Equipment downtime decreased by 60%",
      "Staff satisfaction improved due to better scheduling",
      "Freed up 30 hours per week for property managers",
    ],
  },
]

export type Job = {
  title: string
  type: string
  department: string
  requirements: string[]
}

export const jobs: Job[] = [
  {
    title: "Graphic Designer",
    type: "Full-time",
    department: "Creative",
    requirements: [
      "2–3 years graphic design experience",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong portfolio across branding, social media, and web",
      "Experience with Figma & Canva for fast turnarounds",
      "Skilled at creating visuals & content with AI tools (ChatGPT, Gemini, Google Flow, Midjourney)",
      "Sharp eye for typography, layout, and brand consistency",
    ],
  },
  {
    title: "SEO, AEO & GEO Executive",
    type: "Full-time",
    department: "Marketing",
    requirements: [
      "2–3 years SEO experience (technical & on-page)",
      "Strong off-page SEO skills — link building, outreach, citations, and digital PR",
      "Working knowledge of AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)",
      "Hands-on with schema markup & structured data",
      "Experience optimizing content for AI search (ChatGPT, Perplexity, Google AI Overviews)",
      "Proficiency with GA4, Search Console, and tools like Ahrefs or SEMrush",
    ],
  },
  {
    title: "Email Marketing Executive",
    type: "Full-time",
    department: "Marketing",
    requirements: [
      "2–3 years email marketing experience",
      "Hands-on with platforms like Mailchimp, Klaviyo, or HubSpot",
      "Experience building automated drip & nurture campaigns",
      "Strong copywriting with A/B testing for subject lines & content",
      "Comfortable with list segmentation, deliverability, and performance reporting",
    ],
  },
]

export const benefits = [
  {
    title: "Flexible Work Schedule",
    description: "Remote work options and flexible hours to fit your life.",
    icon: "Clock",
  },
  {
    title: "Professional Development",
    description:
      "Conferences, certifications, and a dedicated skill development budget.",
    icon: "GraduationCap",
  },
  {
    title: "Great Work Environment",
    description:
      "A collaborative, supportive, fully-remote culture where your ideas are always valued.",
    icon: "Users",
  },
  {
    title: "Competitive Compensation",
    description: "Market-rate salaries, performance bonuses, and profit sharing.",
    icon: "DollarSign",
  },
  {
    title: "Latest Technology",
    description: "Top-of-the-line equipment and the best software tools available.",
    icon: "Laptop",
  },
  {
    title: "Learning & Growth",
    description:
      "Hands-on mentorship, clear advancement paths, and real exposure to cutting-edge AI and marketing work.",
    icon: "Rocket",
  },
]

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export const footerServiceLinks = [
  { label: "Digital Marketing", href: "/services#digital-strategy" },
  { label: "AI Solutions", href: "/services#ai-marketing" },
  { label: "Web Development", href: "/services#web-development" },
  { label: "SEO & Search", href: "/services#seo" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Engineering Services", href: "/services#engineering-services" },
]

export const footerCompanyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
]

export const footerIndustryLinks = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Restaurants & F&B", href: "/industries/restaurants" },
  { label: "E-Commerce", href: "/industries/ecommerce" },
  { label: "Liquor & Smoke Shops", href: "/industries/liquor-smoke-shops" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "All Industries", href: "/industries" },
]

export const footerLocationLinks = [
  { label: "Nashville, TN", href: "/locations/nashville" },
  { label: "Brentwood, TN", href: "/locations/brentwood" },
  { label: "Franklin, TN", href: "/locations/franklin" },
  { label: "All Locations", href: "/locations" },
]

export const footerToolLinks = [
  { label: "ROI Calculator", href: "/tools/roi-calculator" },
  { label: "Pricing Calculator", href: "/tools/pricing-calculator" },
]

export const whyChooseItems = [
  "AI-first approach to all marketing strategies",
  "Custom solutions tailored to your industry",
  "Real-time performance tracking and optimization",
  "Dedicated account manager for each client",
  "Cutting-edge technology stack",
  "Proven methodology with measurable results",
  "Continuous learning and adaptation",
  "Industry-leading security and compliance",
  "30-Day Money Back Guarantee",
  "Free Strategy Consultation",
  "24/7 AI-Powered Support",
  "No hidden fees, clear contracts, detailed reporting",
]
