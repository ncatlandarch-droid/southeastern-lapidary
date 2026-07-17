/* ═══════════════════════════════════════════════════════════
   app.js — Main Application Controller
   Southeastern Lapidary Associates
   ═══════════════════════════════════════════════════════════ */

window.APP = (function () {
  'use strict';

  /* ─── Icon Injection Map ───────────────────────────────── */
  const ICON_MAP = {
    // Nav / Header
    'cart-icon': { name: 'cart', size: 22 },
    'lang-chevron-icon': { name: 'chevron-down', size: 14 },

    // Hero
    'location-icon': { name: 'location', size: 16 },
    'hero-shop-icon': { name: 'gem-generic', size: 18 },
    'hero-workshop-icon': { name: 'workshop', size: 18 },
    'scroll-arrow-icon': { name: 'chevron-down', size: 28 },

    // About differentiators
    'diff-icon-1': { name: 'source', size: 36 },
    'diff-icon-2': { name: 'polish', size: 36 },
    'diff-icon-3': { name: 'scale', size: 36 },
    'diff-icon-4': { name: 'custom-cut', size: 36 },

    // Services
    'service-icon-1': { name: 'custom-cut', size: 40 },
    'service-icon-2': { name: 'stone-sale', size: 40 },
    'service-icon-3': { name: 'jewelry', size: 40 },
    'service-icon-4': { name: 'rough-stone', size: 40 },
    'service-icon-5': { name: 'workshop', size: 40 },
    'service-icon-6': { name: 'wholesale', size: 40 },

    // Merch placeholders
    'merch-hoodie-icon': { name: 'gem-generic', size: 60 },
    'merch-hat-icon': { name: 'gem-generic', size: 60 },
    'merch-tote-icon': { name: 'gem-generic', size: 60 },

    // NC Gem icons
    'gem-icon-ruby': { name: 'ruby', size: 40 },
    'gem-icon-sapphire': { name: 'sapphire', size: 40 },
    'gem-icon-emerald': { name: 'emerald', size: 40 },
    'gem-icon-garnet': { name: 'garnet', size: 40 },
    'gem-icon-aquamarine': { name: 'aquamarine', size: 40 },
    'gem-icon-smoky-quartz': { name: 'quartz', size: 40 },

    // Workshop icons
    'workshop-icon-1': { name: 'saw', size: 36 },
    'workshop-icon-2': { name: 'loupe', size: 36 },
    'workshop-icon-3': { name: 'jewelry', size: 36 },
    'workshop-icon-4': { name: 'chisel', size: 36 },
    'workshop-clock-1': { name: 'clock', size: 16 },
    'workshop-clock-2': { name: 'clock', size: 16 },
    'workshop-clock-3': { name: 'clock', size: 16 },
    'workshop-clock-4': { name: 'clock', size: 16 },

    // Gem show location icons
    'show-loc-1': { name: 'location', size: 14 },
    'show-loc-2': { name: 'location', size: 14 },
    'show-loc-3': { name: 'location', size: 14 },
    'show-loc-4': { name: 'location', size: 14 },
    'show-loc-5': { name: 'location', size: 14 },

    // Process step icons
    'step-icon-1': { name: 'source', size: 28 },
    'step-icon-2': { name: 'slab', size: 28 },
    'step-icon-3': { name: 'shape', size: 28 },
    'step-icon-4': { name: 'finish', size: 28 },
    'step-icon-5': { name: 'create', size: 28 },

    // Newsletter
    'newsletter-gem-icon': { name: 'gem-generic', size: 48 },

    // Contact / Footer
    'contact-phone-icon': { name: 'phone', size: 18 },
    'contact-email-icon': { name: 'email', size: 18 },
    'contact-location-icon': { name: 'location', size: 18 },
    'contact-clock-icon': { name: 'clock', size: 18 },
    'social-ig-icon': { name: 'instagram', size: 22 },
    'social-fb-icon': { name: 'facebook', size: 22 },
    'social-yt-icon': { name: 'youtube', size: 22 },

    // Cart panel
    'cart-close-icon': { name: 'close', size: 22 },

    // Modal
    'modal-close-icon': { name: 'close', size: 20 },
    'modal-gem-icon': { name: 'gem-generic', size: 48 },
  };

  /* ─── Language Flag SVGs ───────────────────────────────── */
  const FLAG_SVGS = {
    en: `<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#B22234"/>
      <rect y="1.077" width="20" height="1.077" fill="white"/>
      <rect y="3.231" width="20" height="1.077" fill="white"/>
      <rect y="5.385" width="20" height="1.077" fill="white"/>
      <rect y="7.538" width="20" height="1.077" fill="white"/>
      <rect y="9.692" width="20" height="1.077" fill="white"/>
      <rect y="11.846" width="20" height="1.077" fill="white"/>
      <rect width="8" height="7.538" fill="#3C3B6E"/>
      <text x="4" y="5" fill="white" font-size="3.5" text-anchor="middle" font-family="serif">&#9733;</text>
    </svg>`,
    es: `<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="4.67" fill="#006847"/>
      <rect y="4.67" width="20" height="4.67" fill="white"/>
      <rect y="9.33" width="20" height="4.67" fill="#CE1126"/>
      <circle cx="10" cy="7" r="2" fill="#6D3A1F"/>
    </svg>`,
    vi: `<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#DA251D"/>
      <polygon points="10,2.5 11.18,5.73 14.7,5.73 11.76,7.77 12.94,11 10,9 7.06,11 8.24,7.77 5.3,5.73 8.82,5.73" fill="#FFFF00"/>
    </svg>`
  };

  /* ─── Inject All Icons ─────────────────────────────────── */
  function injectIcons() {
    if (!window.ICONS) {
      console.warn('Icons module not loaded');
      return;
    }

    Object.entries(ICON_MAP).forEach(([id, cfg]) => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = window.ICONS.getIcon(cfg.name, cfg.size);
      }
    });

    // Inject flag SVGs
    Object.entries(FLAG_SVGS).forEach(([lang, svg]) => {
      const el = document.getElementById('flag-' + lang);
      if (el) el.innerHTML = svg;
    });

    // Set current language flag
    const currentLang = (window.I18N && window.I18N.getCurrentLang()) || 'en';
    const currentFlagEl = document.getElementById('current-lang-flag');
    if (currentFlagEl) currentFlagEl.innerHTML = FLAG_SVGS[currentLang] || FLAG_SVGS.en;
    const currentCodeEl = document.getElementById('current-lang-code');
    if (currentCodeEl) currentCodeEl.textContent = currentLang.toUpperCase();
  }

  /* ─── Mobile Menu ──────────────────────────────────────── */
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const links = menu ? menu.querySelectorAll('.mobile-nav-link') : [];

    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      const isOpen = toggle.classList.toggle('active');
      menu.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      menu.setAttribute('aria-hidden', !isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    // Close on link click
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
      });
    });
  }

  /* ─── Smooth Scroll ────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        const headerHeight = document.getElementById('main-header').offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ─── Active Nav Highlighting ──────────────────────────── */
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ─── Language Switcher ────────────────────────────────── */
  function initLanguageSwitcher() {
    const toggle = document.getElementById('lang-toggle');
    const dropdown = document.getElementById('lang-dropdown');
    const options = dropdown ? dropdown.querySelectorAll('.lang-option') : [];

    if (!toggle || !dropdown) return;

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        if (window.I18N) {
          window.I18N.setLanguage(lang);
        }
        // Update current flag display
        const currentFlagEl = document.getElementById('current-lang-flag');
        if (currentFlagEl) currentFlagEl.innerHTML = FLAG_SVGS[lang] || FLAG_SVGS.en;
        const currentCodeEl = document.getElementById('current-lang-code');
        if (currentCodeEl) currentCodeEl.textContent = lang.toUpperCase();
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function () {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* ─── Newsletter Form ──────────────────────────────────── */
  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    const success = document.getElementById('newsletter-success');

    if (!form || !success) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email');
      if (email && email.value) {
        success.classList.add('show');
        email.value = '';
        setTimeout(function () {
          success.classList.remove('show');
        }, 4000);
      }
    });
  }

  /* ─── Modal Logic ──────────────────────────────────────── */
  function initModal() {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('modal-close');
    const closeAction = document.getElementById('modal-close-action');

    if (!modal) return;

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeAction) closeAction.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Merch buy buttons
    document.querySelectorAll('.btn-merch').forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
      });
    });
  }

  /* ─── Init ─────────────────────────────────────────────── */
  function init() {
    // 1. Inject all SVG icons
    injectIcons();

    // 2. Init i18n
    if (window.I18N) window.I18N.init();

    // 3. Init animations
    if (window.ANIMATIONS) window.ANIMATIONS.init();

    // 4. Init shop
    if (window.SHOP) window.SHOP.init();

    // 5. UI interactions
    initMobileMenu();
    initSmoothScroll();
    initNavHighlight();
    initLanguageSwitcher();
    initNewsletter();
    initModal();
  }

  /* ─── Boot ─────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init: init, injectIcons: injectIcons };
})();
