/**
 * Content Data Types with Verification Status
 * Every data item holds a status: 'verified' (grounded in corporate records) or 'pending' (flagged for review).
 */

export type VerificationStatus = 'verified' | 'pending';

export interface VerifiedField<T> {
  value: T;
  status: VerificationStatus;
  sourceNote?: string;
}

export interface ProductFeature {
  name: string;
  description: string;
  documentRef?: string; // e.g. 'RAP', 'Kurva S', 'BC 2.3', 'e-Faktur', 'PPh 21 TER'
}

export interface ProductSuite {
  id: string;
  slug: string;
  name: string;
  track: 'ERP Industri' | 'POS dan Retail';
  category: string;
  tagline: string;
  summary: string;
  accentColor: string;
  accentHex: string;
  idealFor: string[];
  keyDocuments: string[];
  features: ProductFeature[];
  metricHeadline: {
    label: string;
    value: string;
    subtext: string;
  };
  workflowSteps: string[];
}

export interface ClientStory {
  companyName: string;
  industry: string;
  operationalScale: string;
  implementedModule: string;
  businessOutcome: string;
  permission: boolean;
  status: VerificationStatus;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  status: VerificationStatus;
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  foundingYear: number;
  establishedHistory: string;
  headOffice: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  phones: string[];
  whatsappPrimary: string;
  whatsappSupport: string;
  emails: {
    sales: string;
    marketing: string;
    support: string;
  };
  bankAccounts: {
    bank: string;
    accountNumber: string;
    accountHolder: string;
  }[];
  officialDomains: string[];
}
