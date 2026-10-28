import { DemoFormData, LeadScoreResult } from '../types';

/**
 * Lead scoring logic for SISCOM ERP inbound qualification
 * Reduces sales team load by categorizing leads into A (High-priority), B (Mid), C (Standard)
 */
export function scoreInboundLead(data: Partial<DemoFormData>): LeadScoreResult {
  let score = 20; // Base score for form submission
  const factors: string[] = ['Form pendaftaran demo terverifikasi (+20)'];

  // Company size factor
  if (data.companySize === '51-200' || data.companySize === '201-500+' || data.companySize === '>500') {
    score += 30;
    factors.push('Ukuran perusahaan menengah/besar (>50 karyawan) (+30)');
  } else if (data.companySize === '21-50') {
    score += 20;
    factors.push('Ukuran perusahaan berkembang (21-50 karyawan) (+20)');
  } else if (data.companySize === '6-20') {
    score += 10;
    factors.push('Ukuran UKM (6-20 karyawan) (+10)');
  }

  // Work email check (business domain vs personal gmail/yahoo)
  if (data.workEmail) {
    const isFreeEmail = /@(gmail|yahoo|hotmail|outlook|ymail|icloud)\.com$/i.test(data.workEmail.trim());
    if (!isFreeEmail && data.workEmail.includes('@') && data.workEmail.includes('.')) {
      score += 20;
      factors.push('Menggunakan corporate business email domain (+20)');
    }
  }

  // High-value complex industries
  const highValueIndustries = ['Kontraktor & Konstruksi', 'Manufaktur & Pabrik', 'Distributor & FMCG', 'Kawasan Berikat', 'Valas / Money Changer'];
  if (data.industry && highValueIndustries.includes(data.industry)) {
    score += 15;
    factors.push(`Industri prioritas tinggi: ${data.industry} (+15)`);
  }

  // Module scope
  if (data.primaryModules && data.primaryModules.length >= 3) {
    score += 15;
    factors.push(`Kebutuhan multi-modul terintegrasi (${data.primaryModules.length} modul) (+15)`);
  }

  // Cap at 100
  const finalScore = Math.min(100, score);

  let grade: 'A' | 'B' | 'C' = 'C';
  let urgency: LeadScoreResult['urgency'] = 'Rendah (Follow-up Standar)';

  if (finalScore >= 70) {
    grade = 'A';
    urgency = 'Tinggi (Hubungi < 1 Jam)';
  } else if (finalScore >= 45) {
    grade = 'B';
    urgency = 'Menengah (Hubungi < 4 Jam)';
  }

  return {
    score: finalScore,
    grade,
    urgency,
    factors,
  };
}

/**
 * Prepares compliant WhatsApp prefilled message containing lead source, product, and UTM tags
 * Official primary verified contact: 0812-9981-7515 (Sales WhatsApp)
 */
export function generateWhatsAppLink(params: {
  originPage: string;
  product?: string;
  source?: string;
  utmCampaign?: string;
  clientName?: string;
}): string {
  const officialPhone = '6281299817515'; // 0812-9981-7515
  
  const textParts = [
    `Halo Tim SISCOM, saya ingin konsultasi sistem ERP.`,
    params.product ? `Produk / Minat: ${params.product}` : `Halaman Asal: ${params.originPage}`,
    params.utmCampaign ? `[Ref: ${params.utmCampaign}]` : '',
    params.clientName ? `Nama: ${params.clientName}` : '',
  ].filter(Boolean);

  const encodedMessage = encodeURIComponent(textParts.join('\n'));
  return `https://wa.me/${officialPhone}?text=${encodedMessage}`;
}

export function parseUtmParams(queryString: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!queryString) return params;
  
  const searchParams = new URLSearchParams(queryString.startsWith('?') ? queryString.slice(1) : queryString);
  searchParams.forEach((val, key) => {
    if (key.startsWith('utm_') || key === 'gclid' || key === 'fbclid') {
      params[key] = val;
    }
  });
  
  return params;
}
