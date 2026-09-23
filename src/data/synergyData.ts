export interface IntegrationService {
  id: string;
  title: string;
  category: 'integration' | 'workflow' | 'etl' | 'cloud';
  summary: string;
  description: string;
  platforms: string[];
  keyBenefits: string[];
  deliverables: string[];
  icon: string;
}

export interface EnterprisePartner {
  id: string;
  name: string;
  category: 'leader' | 'partner' | 'cloud';
  description: string;
  expertise: string;
  useCase: string;
}

export interface ClientCaseStudy {
  id: string;
  clientName: string;
  industry: string;
  platform: string;
  summary: string;
  results: string[];
  metrics: string;
}

export const SYNERGY_COMPANY = {
  name: 'Synergy Flow Consult',
  tagline: 'Expert Integration Services Across Leading Integration Platforms',
  description: 'Enterprise integration consultancy specializing in automated workflows, robust API management, high-throughput ETL pipelines, and seamless platform connectivity across SnapLogic, Workato, AWS, Boomi, and MuleSoft.',
  address: 'Global Technology Hubs · Singapore, San Francisco & Yangon',
  email: 'contact@synergyflowconsult.com',
  phones: ['+1 (800) 555-FLOW', '+65 6789 0123'],
  stats: [
    { label: 'Enterprise Integrations Delivered', value: '450+' },
    { label: 'Uptime & Reliability SLA', value: '99.99%' },
    { label: 'Average Pipeline Speedup', value: '12x' },
    { label: 'Certified Enterprise Architects', value: '35+' }
  ]
};

export const INTEGRATION_SERVICES: IntegrationService[] = [
  {
    id: 'snaplogic-integration',
    title: 'SnapLogic Intelligent Integration',
    category: 'integration',
    summary: 'AI-powered data pipelines and cloud application integration for enterprise data democratization.',
    description: 'Build robust, scalable data pipelines using SnapLogic’s AI-assisted integration platform (iPaaS). Connect cloud and on-premise systems with pre-built Snaps and automated error handling.',
    platforms: ['SnapLogic', 'AWS Redshift', 'Snowflake', 'Oracle ERP'],
    keyBenefits: [
      'Zero-code and low-code pipeline development with AI Copilot',
      'High-speed bulk data loading and real-time streaming',
      'Automated schema drift management and error recovery'
    ],
    deliverables: [
      'Complete pipeline architecture blueprint',
      'Custom Snap development & API wrappers',
      'Performance tuning and SLA monitoring setup'
    ],
    icon: 'Cpu'
  },
  {
    id: 'workato-workflow',
    title: 'Workato Enterprise Automation',
    category: 'workflow',
    summary: 'Automate complex business workflows across HR, Finance, Customer Success, and DevOps.',
    description: 'Transform manual multi-system operations into lightning-fast automated workflows. Connect Slack, Salesforce, NetSuite, and Jira with enterprise-grade security and governance.',
    platforms: ['Workato', 'Salesforce', 'NetSuite', 'Jira', 'Slack'],
    keyBenefits: [
      'Enterprise-grade governance, role-based access & audit trails',
      'Event-driven triggers and custom webhook integrations',
      'Cross-departmental workflow orchestration without bottlenecks'
    ],
    deliverables: [
      'Workflow mapping & bottleneck audit',
      'Custom Workato recipe development',
      'Team training and workspace governance'
    ],
    icon: 'Workflow'
  },
  {
    id: 'mulesoft-api',
    title: 'MuleSoft Anypoint API Management',
    category: 'integration',
    summary: 'API-led connectivity and secure microservices architecture for digital transformation.',
    description: 'Design, secure, and manage APIs at scale using MuleSoft Anypoint Platform. Establish reusable API assets and publish secure developer portals for internal and external consumers.',
    platforms: ['MuleSoft Anypoint', 'Kubernetes', 'AWS Lambda', 'Azure API'],
    keyBenefits: [
      'API-led connectivity framework for reusable IT assets',
      'Advanced rate limiting, OAuth 2.0 security, and threat protection',
      'Comprehensive API analytics and lifecycle governance'
    ],
    deliverables: [
      'API specification (RAML / OpenAPI 3.0)',
      'Secure Gateway configuration & proxy setup',
      'Developer portal onboarding'
    ],
    icon: 'Network'
  },
  {
    id: 'boomi-etl',
    title: 'Boomi AtomSphere Data Pipelines',
    category: 'etl',
    summary: 'Cloud-native integration platform as a service (iPaaS) for master data management and ETL.',
    description: 'Unify data silos and orchestrate complex ETL operations across disparate SaaS and legacy databases using Boomi AtomSphere with high throughput.',
    platforms: ['Boomi', 'SQL Server', 'PostgreSQL', 'Salesforce DW'],
    keyBenefits: [
      'Unified Master Data Hub (MDH) and data quality cleansing',
      'Distributed Atom execution for secure hybrid deployments',
      'Rapid API publishing and event streams'
    ],
    deliverables: [
      'Data mapping and transformation specs',
      'Atom / Molecule deployment scripts',
      'ETL monitoring dashboard'
    ],
    icon: 'Database'
  }
];

export const ENTERPRISE_PLATFORMS: EnterprisePartner[] = [
  {
    id: 'snaplogic',
    name: 'SnapLogic',
    category: 'leader',
    description: 'Intelligent Integration Platform (iPaaS) for analytics and application integration.',
    expertise: 'Advanced Snaps, Pipeline Orchestration & AI Data Pipelines',
    useCase: 'Connecting Snowflake data warehouse with SAP ERP systems.'
  },
  {
    id: 'workato',
    name: 'Workato',
    category: 'leader',
    description: 'Enterprise automation platform for business process orchestration.',
    expertise: 'Complex Workflows, Bot Triggers & SaaS App Connectivity',
    useCase: 'Automating customer onboarding from Salesforce to Billing and Slack.'
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    category: 'cloud',
    description: 'Global cloud computing infrastructure and serverless execution.',
    expertise: 'AWS Lambda, S3, Glue, and EventBridge Architecture',
    useCase: 'Hosting scalable serverless integration microservices.'
  },
  {
    id: 'boomi',
    name: 'Boomi',
    category: 'leader',
    description: 'Low-code integration platform for fast data synchronization.',
    expertise: 'Master Data Management (MDH) & Hybrid Atom Deployments',
    useCase: 'Synchronizing legacy on-prem databases with cloud CRM.'
  },
  {
    id: 'celigo',
    name: 'Celigo',
    category: 'partner',
    description: 'Integration platform built for automated business processes.',
    expertise: 'E-commerce and ERP Integration Flows (Shopify, NetSuite)',
    useCase: 'Real-time order-to-cash pipeline automation.'
  },
  {
    id: 'mulesoft',
    name: 'MuleSoft',
    category: 'leader',
    description: 'API-led connectivity and integration runtime.',
    expertise: 'Anypoint Platform, DataWeave Transformation & Microservices',
    useCase: 'Enterprise banking API gateway security and routing.'
  }
];

export const CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: 'fintech-sync',
    clientName: 'Global FinTech Capital',
    industry: 'Financial Services',
    platform: 'SnapLogic & AWS',
    summary: 'Unified real-time transaction reporting across 14 fragmented legacy banking databases into Snowflake data lake.',
    results: ['Reduced end-of-day batch processing from 6 hours to 12 minutes', 'Achieved 99.995% pipeline reliability', 'Automated regulatory compliance reporting'],
    metrics: '12x Pipeline Speedup'
  },
  {
    id: 'saas-automation',
    clientName: 'CloudScale SaaS Solutions',
    industry: 'B2B Software',
    platform: 'Workato',
    summary: 'Automated the complete customer lifecycle from trial signup to provisioned workspace, billing, and CSM alert.',
    results: ['Eliminated 35 hours/week of manual data entry for RevOps team', 'Instantaneous provisioning upon payment confirmation', 'Zero drop-off in trial-to-paid onboarding'],
    metrics: '35 Hours/Week Saved'
  },
  {
    id: 'retail-omnichannel',
    clientName: 'Pacific Retail Group',
    industry: 'Omnichannel Retail',
    platform: 'Celigo & NetSuite',
    summary: 'Connected Shopify Plus storefronts directly with NetSuite ERP and regional warehouse management systems.',
    results: ['Real-time inventory synchronization across 45 physical branches', 'Order fulfillment speed increased by 400%', 'Automated tax and shipping reconciliation'],
    metrics: '4x Fulfillment Speed'
  }
];
