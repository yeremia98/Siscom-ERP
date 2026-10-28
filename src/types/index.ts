export type ViewType = 
  | 'home' 
  | 'product-contractor' 
  | 'solutions' 
  | 'pricing' 
  | 'case-studies' 
  | 'comparison' 
  | 'security' 
  | 'resources' 
  | 'contact';

export interface ProductItem {
  id: string;
  name: string;
  category: 'Operasional' | 'Keuangan & SDM' | 'Regulasi';
  tagline: string;
  shortDesc: string;
  slug: string;
  badge?: string;
  iconName: string;
  targetIndustries: string[];
  keyModules: string[];
  startingPrice?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  subIndustries: string[];
  keyPainPoints: string[];
  recommendedProduct: string;
  caseStudyRef?: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  companyName: string;
  isIllustrative?: boolean;
  scale: string;
  challenge: string;
  solutionModules: string[];
  measurableResults: {
    label: string;
    value: string;
    before?: string;
    after?: string;
  }[];
  testimonialQuote: string;
  clientPerson: {
    name: string;
    role: string;
    company: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  targetSegment: string;
  idealFor: string;
  priceMonthly: string;
  priceAnnualBilled: string;
  implementationEst: string;
  goLiveTime: string;
  features: string[];
  excluded?: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ComparisonRow {
  dimension: string;
  description: string;
  siscom: string;
  odoo: string;
  accurateJurnal: string;
  sapB1: string;
  advantage: 'siscom' | 'draw' | 'competitor';
}

export interface DemoFormData {
  fullName: string;
  workEmail: string;
  whatsapp: string;
  companyName: string;
  industry: string;
  companySize: string;
  primaryModules: string[];
  currentSystem: string;
  preferredDeployment: 'cloud' | 'on-premise' | 'hybrid';
  preferredDate: string;
  notes?: string;
}

export interface LeadScoreResult {
  score: number;
  grade: 'A' | 'B' | 'C';
  urgency: 'Tinggi (Hubungi < 1 Jam)' | 'Menengah (Hubungi < 4 Jam)' | 'Rendah (Follow-up Standar)';
  factors: string[];
}
