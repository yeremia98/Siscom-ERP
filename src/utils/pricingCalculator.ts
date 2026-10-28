/**
 * SISCOM ERP Pricing and Go-Live Estimation Engine
 * Decoupled pure logic tested via node:test
 */

export interface PricingInput {
  segment: 'retail' | 'distributor' | 'contractor' | 'manufacturing' | 'services' | 'regulated';
  userCount: number;
  branchCount: number;
  selectedModules: string[];
  deployment: 'cloud' | 'on-premise';
}

export interface PricingEstimate {
  softwareMonthly: number;
  softwareAnnual: number;
  implementationCost: number;
  estimatedWeeksToGoLive: number;
  mscMonthly: number;
  tierRecommended: 'Starter UMKM' | 'Mid-Market Growth' | 'Enterprise Custom';
  savingsAnnual: number;
  breakdown: string[];
}

export function calculateErpEstimate(input: {
  segment: PricingInput['segment'];
  userCount: number;
  branchCount: number;
  selectedModules?: string[];
  deployment?: 'cloud' | 'on-premise';
}): PricingEstimate {
  const users = Math.max(1, Math.min(500, input.userCount || 3));
  const branches = Math.max(1, Math.min(100, input.branchCount || 1));
  const deployment = input.deployment || 'cloud';
  const modules = input.selectedModules || ['Akuntansi & Keuangan', 'Persediaan Stok'];

  // Base tier mapping
  let baseUserPriceMonthly = 175000; // Rp 175.000 / user / month
  let baseBranchPriceMonthly = 250000; // Rp 250.000 / additional branch
  let baseImplementationDays = 5;

  if (input.segment === 'retail') {
    baseUserPriceMonthly = 125000;
    baseBranchPriceMonthly = 150000;
    baseImplementationDays = 4;
  } else if (input.segment === 'distributor') {
    baseUserPriceMonthly = 175000;
    baseBranchPriceMonthly = 200000;
    baseImplementationDays = 8;
  } else if (input.segment === 'contractor') {
    baseUserPriceMonthly = 225000;
    baseBranchPriceMonthly = 250000;
    baseImplementationDays = 12;
  } else if (input.segment === 'manufacturing') {
    baseUserPriceMonthly = 275000;
    baseBranchPriceMonthly = 300000;
    baseImplementationDays = 16;
  } else if (input.segment === 'regulated') {
    baseUserPriceMonthly = 300000;
    baseBranchPriceMonthly = 350000;
    baseImplementationDays = 14;
  }

  // Module factor
  const moduleSurcharge = Math.max(0, modules.length - 2) * 45000 * users;

  // Monthly license/subscription calculation
  const branchSurcharge = (branches - 1) * baseBranchPriceMonthly;
  const userCostMonthly = users * baseUserPriceMonthly;
  let softwareMonthly = userCostMonthly + branchSurcharge + moduleSurcharge;

  // Minimum floor
  if (input.segment === 'retail') {
    softwareMonthly = Math.max(350000, softwareMonthly);
  } else {
    softwareMonthly = Math.max(950000, softwareMonthly);
  }

  // On-premise deployment has a different pricing model (one-time license + yearly maintenance)
  if (deployment === 'on-premise') {
    softwareMonthly = Math.round(softwareMonthly * 0.85); // Subscription rate with on-premise infrastructure hosted by client
  }

  // 15% discount for annual billing
  const softwareAnnual = Math.round(softwareMonthly * 12 * 0.85);
  const savingsAnnual = Math.round(softwareMonthly * 12 * 0.15);

  // Implementation calculation based on complexity
  const moduleComplexityDays = modules.length * 1.5;
  const branchComplexityDays = (branches - 1) * 0.8;
  const totalImplDays = Math.ceil(baseImplementationDays + moduleComplexityDays + branchComplexityDays);
  
  // Rp 2.500.000 / manday rate for senior implementation consultant
  const implementationCost = totalImplDays * 2500000;

  // Go live weeks estimation
  let estimatedWeeksToGoLive = 3;
  if (totalImplDays <= 8) {
    estimatedWeeksToGoLive = 3; // 2-3 weeks for simple retail/trading
  } else if (totalImplDays <= 20) {
    estimatedWeeksToGoLive = 6; // 4-6 weeks for distributor/contractor
  } else if (totalImplDays <= 30) {
    estimatedWeeksToGoLive = 10; // 8-10 weeks for manufacturing
  } else {
    estimatedWeeksToGoLive = 14; // 12-14 weeks for multi-factory/enterprise
  }

  // Recommended tier
  let tierRecommended: 'Starter UMKM' | 'Mid-Market Growth' | 'Enterprise Custom' = 'Starter UMKM';
  if (users > 25 || branches > 5 || input.segment === 'manufacturing' || input.segment === 'regulated') {
    tierRecommended = 'Enterprise Custom';
  } else if (users > 5 || branches > 1 || input.segment === 'contractor' || input.segment === 'distributor') {
    tierRecommended = 'Mid-Market Growth';
  }

  // MSC (Maintenance Support Contract) estimate
  // Includes private WA group 7 days, unlimited ticket support, free version updates, free custom report form
  const mscMonthly = Math.round(softwareMonthly * 0.18);

  const breakdown = [
    `Lisensi / Langganan untuk ${users} Pengguna Aktif`,
    `Multi-Cabang: ${branches} Cabang / Lokasi Operasional`,
    `Cakupan ${modules.length} Modul Terintegrasi Termasuk Alur Finansial`,
    `Pendampingan Implementasi ${totalImplDays} Mandays hingga Go Live`,
    `Dukungan Hypercare 30 Hari Pasca Go Live Termasuk dalam Paket`,
  ];

  return {
    softwareMonthly,
    softwareAnnual,
    implementationCost,
    estimatedWeeksToGoLive,
    mscMonthly,
    tierRecommended,
    savingsAnnual,
    breakdown,
  };
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}
