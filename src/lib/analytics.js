// ─── GTech Analytics — Centralized GA4 Tracking ─────────────────────────────
// Events:
//   whatsapp_cta_click    — user clicks any commercial CTA on the site
//   whatsapp_modal_opened — WhatsAppModal opens (reads context from sessionStorage)
//   whatsapp_lead         — user actually opens WhatsApp (form submit or skip)
//   generate_lead         — user successfully submits the email contact form

const CTA_CONTEXT_KEY = 'gtech_cta_context';
const MODAL_FIRED_KEY = 'gtech_modal_fired';

function fireGtag(eventName, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Read saved CTA context.
 * Falls back to { cta_location: 'direct' } when the user navigates to
 * #whatsapp directly (e.g. browser bookmark, shared URL).
 */
function getContext() {
  try {
    const raw =
      typeof sessionStorage !== 'undefined'
        ? sessionStorage.getItem(CTA_CONTEXT_KEY)
        : null;
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    cta_location: 'direct',
    cta_text: 'direct',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
  };
}

/**
 * Call this on every commercial CTA click (any element that opens #whatsapp).
 * Saves context to sessionStorage and fires whatsapp_cta_click.
 */
export function trackCtaClick(cta_location, cta_text) {
  if (typeof window === 'undefined') return;

  const page_path = window.location.pathname;
  const context = { cta_location, cta_text, page_path };

  try {
    sessionStorage.setItem(CTA_CONTEXT_KEY, JSON.stringify(context));
    // Reset dedup flag so the next modal-open fires the event fresh
    sessionStorage.removeItem(MODAL_FIRED_KEY);
  } catch {}

  fireGtag('whatsapp_cta_click', context);
}

/**
 * Call this when WhatsAppModal opens.
 * Reads context from sessionStorage and fires whatsapp_modal_opened once per
 * CTA click. A dedup guard prevents double-firing if the hash bounces.
 */
export function trackModalOpened() {
  if (typeof window === 'undefined') return;

  try {
    if (sessionStorage.getItem(MODAL_FIRED_KEY) === '1') return;
    sessionStorage.setItem(MODAL_FIRED_KEY, '1');
  } catch {}

  const ctx = getContext();
  fireGtag('whatsapp_modal_opened', ctx);
}

/**
 * Call this when the user actually opens WhatsApp (form submit or skip).
 * This is the confirmed lead event.
 * @param {'form_submit'|'skip_form'} lead_type
 */
export function trackWhatsAppLead(lead_type) {
  if (typeof window === 'undefined') return;

  const ctx = getContext();
  fireGtag('whatsapp_lead', { ...ctx, lead_type });

  // Clear context after a confirmed lead to avoid polluting future sessions
  try {
    sessionStorage.removeItem(CTA_CONTEXT_KEY);
    sessionStorage.removeItem(MODAL_FIRED_KEY);
  } catch {}
}

/**
 * Call this after the email contact form is successfully submitted.
 */
export function trackContactFormLead() {
  if (typeof window === 'undefined') return;

  fireGtag('generate_lead', {
    lead_type: 'contact_form',
    page_path: window.location.pathname,
  });
}
