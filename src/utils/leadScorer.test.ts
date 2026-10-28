import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreInboundLead, generateWhatsAppLink, parseUtmParams } from './leadScorer';

test('scoreInboundLead gives high score to enterprise contractor with corporate email', () => {
  const result = scoreInboundLead({
    fullName: 'Budi Santoso',
    workEmail: 'budi@adhikarya-mandiri.co.id',
    companySize: '51-200',
    industry: 'Kontraktor & Konstruksi',
    primaryModules: ['RAB Proyek', 'Accounting', 'Procurement', 'Inventory'],
  });

  assert.equal(result.grade, 'A');
  assert.ok(result.score >= 80);
  assert.equal(result.urgency, 'Tinggi (Hubungi < 1 Jam)');
  assert.ok(result.factors.some(f => f.includes('corporate business email')));
});

test('scoreInboundLead handles small business with personal email', () => {
  const result = scoreInboundLead({
    fullName: 'Siti Rahma',
    workEmail: 'siti.toko@gmail.com',
    companySize: '1-5',
    industry: 'Retail & Toko',
    primaryModules: ['POS Kasir'],
  });

  assert.equal(result.grade, 'C');
  assert.ok(result.score <= 40);
});

test('generateWhatsAppLink generates clean prefilled message with official verified phone', () => {
  const link = generateWhatsAppLink({
    originPage: '/produk/erp-kontraktor',
    product: 'SIS Construction One',
    utmCampaign: 'google_cpc_kontraktor',
  });

  assert.ok(link.includes('6281299817515'), 'Must use official primary sales phone 0812-9981-7515');
  assert.ok(link.includes('SIS%20Construction%20One'));
});

test('parseUtmParams extracts tracking parameters cleanly', () => {
  const query = '?utm_source=google&utm_medium=cpc&utm_campaign=erp_kontraktor&gclid=abc123xyz';
  const parsed = parseUtmParams(query);
  assert.equal(parsed['utm_source'], 'google');
  assert.equal(parsed['utm_medium'], 'cpc');
  assert.equal(parsed['gclid'], 'abc123xyz');
});
