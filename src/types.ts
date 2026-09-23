export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'courseware'
  | 'bookstore'
  | 'digital-hub'
  | 'infographics'
  | 'partners'
  | 'contact';

export interface CurriculumItem {
  id: string;
  title: string;
  publisher: string;
  publisherLogo?: string;
  category: 'phonics' | 'english' | 'ict-robotics' | 'early-years';
  targetAudience: string;
  ageRange: string;
  cefrLevel?: string;
  levelsCount: number;
  description: string;
  keyFeatures: string[];
  components: string[];
  accreditation?: string;
  previewColor: string;
}

export interface BookItem {
  id: string;
  title: string;
  category: 'readers' | 'activity-kits' | 'comics' | 'knowledge' | 'preschool';
  recommendedAge: string;
  description: string;
  highlights: string[];
  inStock: boolean;
  coverAccent: string;
  badge?: string;
}

export interface HubClass {
  id: string;
  title: string;
  category: 'robotics' | 'coding' | 'stem' | 'language';
  ageGroup: string;
  schedule: string;
  duration: string;
  summary: string;
  curriculumTopics: string[];
  skillsGained: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Partner {
  id: string;
  name: string;
  category: 'school' | 'retail';
  city: 'Yangon' | 'Mandalay' | 'Other Cities';
  description?: string;
  type: string;
  collaboration?: string;
  programsAdopted?: string[];
  foundedOrScale?: string;
  logoBg?: string;
  logoAccent?: string;
  logoText?: string;
}

export interface QuoteItem {
  id: string;
  title: string;
  type: 'curriculum' | 'book' | 'course' | 'service';
  publisherOrCategory: string;
  quantity?: number;
}

export interface ServiceOffering {
  id: string;
  title: string;
  slideRef: string;
  unit: string;
  summary: string;
  valueProposition: string;
  targetClients: string[];
  deliverables: string[];
  metrics: string;
  workflowSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  accentColor: string;
  iconType: 'courseware' | 'bookstore' | 'stem' | 'training';
}

export interface TimelineEvent {
  year: string;
  title: string;
  milestone: string;
  description: string;
  impactMetrics: string;
  category: 'group' | 'dir' | 'expansion' | 'accreditation';
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  education: string;
  specialization: string[];
  keyQuote: string;
  avatarBg: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  category: 'school' | 'student' | 'bookstore';
  location: string;
  quote: string;
  programAdopted: string;
  rating: number;
  year: string;
  avatarBg?: string;
  photoUrl?: string;
}

