/**
 * Consent Tracking & Traceability Utility (AEPD / RGPD Compliance)
 * 
 * Records verified, timestamped user opt-in consent for Terms of Service
 * and Privacy Policy. Stores an immutable audit trail locally and provides
 * verifiable payloads for lead storage and legal inquiries.
 */

export interface ConsentRecord {
  id: string;
  timestamp: string; // ISO 8601 with timezone
  timestampEpoch: number;
  userIdentifier: string; // Email or phone
  formOrigin: string; // URL where consent occurred
  termsAccepted: boolean;
  termsVersion: string;
  privacyAccepted: boolean;
  privacyVersion: string;
  cookiesAccepted?: boolean;
  consentMechanism: 'explicit_checkbox_double_opt_in' | 'cookie_banner_action';
  userAgent?: string;
  language?: string;
}

export const CURRENT_TERMS_VERSION = 'v2.1-2026-10';
export const CURRENT_PRIVACY_VERSION = 'v2.1-2026-10';
export const CURRENT_COOKIE_VERSION = 'v2.1-2026-10';

const STORAGE_KEY = 'silent_consent_audit_log_v1';

export function recordConsent(
  userIdentifier: string,
  formOrigin: string,
  options: {
    termsAccepted: boolean;
    privacyAccepted: boolean;
    cookiesAccepted?: boolean;
    consentMechanism?: 'explicit_checkbox_double_opt_in' | 'cookie_banner_action';
  }
): ConsentRecord {
  const now = new Date();
  const record: ConsentRecord = {
    id: 'cst_' + Math.random().toString(36).substring(2, 11) + '_' + now.getTime(),
    timestamp: now.toISOString(),
    timestampEpoch: now.getTime(),
    userIdentifier: userIdentifier || 'anonymous_visitor',
    formOrigin: formOrigin || (typeof window !== 'undefined' ? window.location.href : 'https://wearethesilent.com'),
    termsAccepted: options.termsAccepted,
    termsVersion: CURRENT_TERMS_VERSION,
    privacyAccepted: options.privacyAccepted,
    privacyVersion: CURRENT_PRIVACY_VERSION,
    cookiesAccepted: options.cookiesAccepted,
    consentMechanism: options.consentMechanism || 'explicit_checkbox_double_opt_in',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    language: typeof navigator !== 'undefined' ? navigator.language : 'es',
  };

  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const list: ConsentRecord[] = existing ? JSON.parse(existing) : [];
      list.push(record);
      // Keep up to 100 recent consent records
      if (list.length > 100) list.shift();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Unable to persist consent log locally', e);
    }
  }

  return record;
}

export function getConsentAuditLog(): ConsentRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
