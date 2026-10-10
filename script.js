/* ============================================================
   TECH INTEL — Production script
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919935932705';

  /* ----------------------------------------------------------
     Demo data
     ---------------------------------------------------------- */
  var DEMOS = {
    cafe: {
      url: 'beanandbrew.in',
      theme: 'cafe',
      disclaimer: 'Demonstration website — Bean & Brew is a fictional café created for this preview.',
      logo: 'Bean & Brew',
      nav: ['Menu', 'About', 'Contact'],
      cta: 'Order Now',
      kicker: 'Fresh coffee • Good mood',
      title: 'Bean & Brew',
      desc: 'A warm local café for coffee, conversations and fresh bites.',
      heroCta: 'View Menu',
      features: ['Freshly Brewed', 'Fresh Bakes', 'Cozy Space'],
      phoneKicker: 'Fresh coffee',
      phoneDesc: 'Warm local café for coffee & fresh bites.'
    },
    salon: {
      url: 'aurasalon.in',
      theme: 'salon',
      disclaimer: 'Demonstration website — Aura Salon is a fictional salon created for this preview.',
      logo: 'Aura Salon',
      nav: ['Services', 'Gallery', 'Contact'],
      cta: 'Book Now',
      kicker: 'Style • Beauty • Confidence',
      title: 'Aura Salon',
      desc: 'Showcase your services, portfolio, offers and appointment details online.',
      heroCta: 'Book Appointment',
      features: ['Expert Stylists', 'Premium Products', 'Easy Booking'],
      phoneKicker: 'Style • Beauty',
      phoneDesc: 'Salon services, offers & booking.'
    },
    clinic: {
      url: 'carepointclinic.in',
      theme: 'clinic',
      disclaimer: 'Demonstration website — CarePoint Clinic is a fictional clinic created for this preview.',
      logo: 'CarePoint Clinic',
      nav: ['Services', 'Doctors', 'Contact'],
      cta: 'Book Appointment',
      kicker: 'Care • Trust • Wellness',
      title: 'CarePoint Clinic',
      desc: 'A professional healthcare website with services, timings and contact options.',
      heroCta: 'Book Now',
      features: ['Expert Doctors', 'Flexible Timings', 'Easy Booking'],
      phoneKicker: 'Care • Trust',
      phoneDesc: 'Services, timings & booking.'
    },
    custom: {
      url: 'yourbusiness.in',
      theme: 'custom',
      disclaimer: 'Demonstration website — this is a generic preview. Customise it with your own details using the button below.',
      logo: 'Your Brand',
      nav: ['Home', 'About', 'Contact'],
      cta: 'Contact Us',
      kicker: 'Your business • Your style',
      title: 'Your Brand',
      desc: 'A custom website designed around your business, customers and brand.',
      heroCta: 'Get Started',
      features: ['Professional Design', 'Mobile Friendly', 'Easy Contact'],
      phoneKicker: 'Your business',
      phoneDesc: 'A website designed for you.'
    }
  };

  /* ----------------------------------------------------------
     Header scroll state
     ---------------------------------------------------------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     Mobile nav
     ---------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    mobileNav.hidden = true;
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      mobileNav.hidden = open;
    });

    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMobileNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  /* ----------------------------------------------------------
     Demo switcher
     ---------------------------------------------------------- */
  var demoTabs = document.querySelectorAll('.demo-tab');
  var demoSite = document.getElementById('demoSite');
  var demoPhoneSite = document.getElementById('demoPhoneSite');
  var demoDisclaimer = document.getElementById('demoDisclaimer');

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function renderDemo(type) {
    var d = DEMOS[type];
    if (!d) return;

    setText('demoUrl', d.url);
    if (demoSite) demoSite.setAttribute('data-theme', d.theme);
    if (demoPhoneSite) demoPhoneSite.setAttribute('data-theme', d.theme);

    setText('demoLogo', d.logo);
    setText('demoPhoneLogo', d.logo);
    setText('demoNav1', d.nav[0]);
    setText('demoNav2', d.nav[1]);
    setText('demoNav3', d.nav[2]);
    setText('demoCta', d.cta);
    setText('demoKicker', d.kicker);
    setText('demoTitle', d.title);
    setText('demoDesc', d.desc);
    setText('demoHeroCta', d.heroCta);
    setText('demoFooterLogo', d.logo);
    setText('demoPhoneKicker', d.phoneKicker);
    setText('demoPhoneTitle', d.title);
    setText('demoPhoneDesc', d.phoneDesc);
    setText('demoPhoneCta', d.heroCta);

    var featuresEl = document.getElementById('demoFeatures');
    if (featuresEl) {
      featuresEl.innerHTML = '';
      d.features.forEach(function (f) {
        var span = document.createElement('span');
        span.textContent = f;
        featuresEl.appendChild(span);
      });
    }

    if (demoDisclaimer) demoDisclaimer.textContent = d.disclaimer;
  }

  demoTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      demoTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderDemo(tab.dataset.type);
    });
  });

  renderDemo('cafe');

  /* ----------------------------------------------------------
     Customizer modal
     ---------------------------------------------------------- */
  var modal = document.getElementById('customizerModal');
  var openBtn = document.getElementById('openCustomizer');
  var lastFocused = null;

  function openModal() {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var first = modal.querySelector('input, select, textarea, button');
    if (first) first.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  modal && modal.querySelectorAll('[data-close-modal]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
  });

  /* Customizer live preview */
  var cForm = document.getElementById('customizerForm');
  var customSite = document.getElementById('customSite');

  function val(name, fallback) {
    if (!cForm) return fallback;
    var el = cForm.elements[name];
    var v = el && el.value ? el.value.trim() : '';
    return v || fallback;
  }

  function slugify(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'yourbusiness';
  }

  function updateCustomPreview() {
    if (!customSite) return;
    var brand = val('business', 'Your Brand');
    var type = val('businessType', 'Your Business');
    var tagline = val('tagline', 'Your business • Your style');
    var desc = val('description', 'A professional website designed around your business, your customers and your brand.');
    var location = val('location', 'Easy Contact');

    setText('customUrl', slugify(brand) + '.in');
    setText('customLogo', brand);
    setText('customTitle', brand);
    setText('customKicker', tagline);
    setText('customDesc', desc);
    setText('customFeature1', type);
    setText('customFeature2', 'Mobile Friendly');
    setText('customFeature3', location);

    var textColor = val('textColor', '#0E1626');
    var bgColor = val('bgColor', '#FBFAF8');
    customSite.style.setProperty('--demo-accent', textColor === '#0E1626' ? 'var(--accent)' : textColor);
    customSite.style.background = bgColor;
  }

  if (cForm) {
    cForm.addEventListener('input', updateCustomPreview);
    cForm.addEventListener('change', updateCustomPreview);
    updateCustomPreview();
  }

  /* Image upload preview */
  var cLogo = document.getElementById('cLogo');
  var customVisual = document.getElementById('customVisual');
  if (cLogo && customVisual) {
    cLogo.addEventListener('change', function () {
      var file = cLogo.files && cLogo.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      var reader = new FileReader();
      reader.onload = function () {
        customVisual.style.backgroundImage = 'url("' + reader.result + '")';
        customVisual.style.backgroundSize = 'cover';
        customVisual.style.backgroundPosition = 'center';
      };
      reader.readAsDataURL(file);
    });
  }

  /* Continue from customizer → scroll to enquiry */
  var customContinue = document.getElementById('customContinue');
  if (customContinue) {
    customContinue.addEventListener('click', function () {
      closeModal();
      var target = document.getElementById('enquiry');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var leadName = document.getElementById('leadName');
      if (leadName) setTimeout(function () { leadName.focus(); }, 500);
    });
  }

  /* ----------------------------------------------------------
     Lead form → WhatsApp
     ---------------------------------------------------------- */
  var leadForm = document.getElementById('leadForm');
  var formStatus = document.getElementById('formStatus');

  function setFieldError(id, show, message) {
    var input = document.getElementById(id);
    var error = document.getElementById(id + 'Error');
    if (!input || !error) return;
    if (show) {
      input.setAttribute('aria-invalid', 'true');
      error.textContent = message || error.textContent;
      error.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      error.hidden = true;
    }
  }

  function validateLead() {
    var ok = true;

    var name = document.getElementById('leadName');
    if (!name.value.trim()) { setFieldError('leadName', true); ok = false; } else setFieldError('leadName', false);

    var business = document.getElementById('leadBusiness');
    if (!business.value.trim()) { setFieldError('leadBusiness', true); ok = false; } else setFieldError('leadBusiness', false);

    var phone = document.getElementById('leadPhone');
    var digits = phone.value.replace(/\D/g, '');
    if (digits.length < 10) { setFieldError('leadPhone', true); ok = false; } else setFieldError('leadPhone', false);

    return ok;
  }

  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateLead()) {
        if (formStatus) {
          formStatus.textContent = 'Please fix the highlighted fields.';
          formStatus.classList.add('is-error');
        }
        var firstInvalid = leadForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var name = document.getElementById('leadName').value.trim();
      var business = document.getElementById('leadBusiness').value.trim();
      var phone = document.getElementById('leadPhone').value.trim();
      var type = document.getElementById('leadType').value;
      var notes = document.getElementById('leadNotes').value.trim();

      var lines = [
        'New website enquiry — Tech Intel',
        '',
        'Name: ' + name,
        'Business: ' + business,
        'WhatsApp: ' + phone,
        'Requirement: ' + (type || 'Not specified'),
        'Notes: ' + (notes || 'None')
      ];
      var message = lines.join('\n');
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);

      if (formStatus) {
        formStatus.textContent = 'Opening WhatsApp…';
        formStatus.classList.remove('is-error');
      }

      var win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win) {
        if (formStatus) {
          formStatus.textContent = 'Could not open WhatsApp automatically. Please message us directly at +91 99359 32705.';
          formStatus.classList.add('is-error');
        }
      } else {
        if (formStatus) formStatus.textContent = 'WhatsApp opened — send the message to continue.';
      }
    });

    leadForm.addEventListener('input', function (e) {
      var id = e.target.id;
      if (id === 'leadName') setFieldError('leadName', false);
      if (id === 'leadBusiness') setFieldError('leadBusiness', false);
      if (id === 'leadPhone') setFieldError('leadPhone', false);
    });
  }

  /* ----------------------------------------------------------
     Demo → enquiry shortcut
     ---------------------------------------------------------- */
  var demoUseBtn = document.getElementById('demoUseBtn');
  if (demoUseBtn) {
    demoUseBtn.addEventListener('click', function () {
      var active = document.querySelector('.demo-tab.active');
      var type = active ? active.dataset.type : 'cafe';
      var d = DEMOS[type];
      var leadType = document.getElementById('leadType');
      if (leadType) leadType.value = '₹499 Starter Website (one-page)';
      var notes = document.getElementById('leadNotes');
      if (notes && d) notes.value = 'I like the ' + d.title + ' style (' + type + ').';
    });
  }

  /* ----------------------------------------------------------
     Footer year
     ---------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----------------------------------------------------------
     Smooth in-page scrolling fallback for reduced motion
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();