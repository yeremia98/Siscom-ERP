import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateErpEstimate, formatRupiah } from './pricingCalculator';

test('calculateErpEstimate handles retail starter tier correctly', () => {
  const result = calculateErpEstimate({
    segment: 'retail',
    userCount: 2,
    branchCount: 1,
    selectedModules: ['SmartPOS Kasir', 'Persediaan Stok'],
    deployment: 'cloud',
  });

  assert.equal(result.tierRecommended, 'Starter UMKM');
  assert.ok(result.softwareMonthly >= 350000, 'Minimum floor should be respected');
  assert.ok(result.estimatedWeeksToGoLive <= 4, 'Retail should go live quickly');
  assert.ok(result.softwareAnnual < result.softwareMonthly * 12, 'Annual billing should have discount');
});

test('calculateErpEstimate calculates mid-market contractor correctly', () => {
  const result = calculateErpEstimate({
    segment: 'contractor',
    userCount: 10,
    branchCount: 2,
    selectedModules: ['RAB & RAP Proyek', 'Purchasing Proyek', 'Opname Fisik', 'Akuntansi Keuangan'],
    deployment: 'cloud',
  });

  assert.equal(result.tierRecommended, 'Mid-Market Growth');
  assert.ok(result.softwareMonthly > 2000000);
  assert.ok(result.implementationCost > 15000000);
  assert.ok(result.estimatedWeeksToGoLive >= 5 && result.estimatedWeeksToGoLive <= 8);
});

test('calculateErpEstimate handles large enterprise manufacturing', () => {
  const result = calculateErpEstimate({
    segment: 'manufacturing',
    userCount: 30,
    branchCount: 4,
    selectedModules: ['BOM & SPK Produksi', 'HPP Real-Time', 'Inventory Multi-Gudang', 'Pembelian', 'Penjualan', 'Akuntansi'],
    deployment: 'on-premise',
  });

  assert.equal(result.tierRecommended, 'Enterprise Custom');
  assert.ok(result.estimatedWeeksToGoLive >= 10);
});

test('formatRupiah formats IDR cleanly', () => {
  const formatted = formatRupiah(1500000);
  assert.ok(formatted.includes('1.500.000') || formatted.includes('Rp'));
});
