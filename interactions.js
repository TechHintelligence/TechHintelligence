/* ============================================================
   TECH INTEL — Interactive Layer
   Custom cursor · Scroll reveal · Counters · Magnetic buttons · Tilt
   ============================================================ */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ============================================================
     1. CUSTOM CURSOR (desktop only)
     ============================================================ */
  if (!isTouch && !prefersReduced) {
    var dot = document.getElementById('cursorDot');
    var ring = document.getElementById('cursorRing');
    if (dot && ring) {
      document.body.classList.add('has-custom-cursor');
      var mouseX = 0, mouseY = 0;
      var ringX = 0, ringY = 0;

      document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px) translate(-50%, -50%)';
      });

      // Smooth ring follow
      function animateRing() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = 'translate(' + ringX + 'px, ' + ringY + 'px) translate(-50%, -50%)';
        requestAnimationFrame(animateRing);
      }
      animateRing();

      // Hover state on interactive elements
      var interactives = document.querySelectorAll('a, button, .btn, .demo-tab, summary, input, select, textarea, .tilt-card');
      interactives.forEach(function (el) {
        el.addEventListener('mouseenter', function () { ring.classList.add('hover'); });
        el.addEventListener('mouseleave', function () { ring.classList.remove('hover'); });
      });

      // Hide when leaving window
      document.addEventListener('mouseleave', function () {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
      });
      document.addEventListener('mouseenter', function () {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      });
    }
  }

  /* ============================================================
     2. HERO MOUSE-FOLLOWING GLOW
     ============================================================ */
  var heroGlow = document.getElementById('heroGlow');
  var hero = document.querySelector('.hero');
  if (heroGlow && hero && !isTouch && !prefersReduced) {
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      heroGlow.style.transform = 'translate(' + x + 'px, ' + y + 'px) translate(-50%, -50%)';
    });
  }

  /* ============================================================
     3. SCROLL REVEAL (IntersectionObserver)
     ============================================================ */
  if (!prefersReduced && 'IntersectionObserver' in window) {
    // Auto-apply .reveal + .stagger to key sections
    var sectionsToReveal = document.querySelectorAll(
      '.section .section-head, .section-head'
    );
    sectionsToReveal.forEach(function (el) {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });

    var gridsToStagger = document.querySelectorAll(
      '.services-grid, .ps-grid, .steps, .pricing-grid, .testi-grid, .about-cards, .demo-tabs'
    );
    gridsToStagger.forEach(function (el) {
      el.classList.add('stagger');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  /* ============================================================
     4. NUMBER COUNTERS
     ============================================================ */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && !prefersReduced && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { counterObserver.observe(c); });

    function animateCounter(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';
      var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
      var duration = 1600;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = eased * target;

        if (decimals > 0) {
          el.textContent = current.toFixed(decimals) + suffix;
        } else {
          el.textContent = Math.floor(current) + suffix;
        }

        if (progress < 1) requestAnimationFrame(step);
        else {
          el.textContent = (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
        }
      }
      requestAnimationFrame(step);
    }
  }

  /* ============================================================
     5. MAGNETIC BUTTONS
     ============================================================ */
  if (!isTouch && !prefersReduced) {
    var magneticBtns = document.querySelectorAll('.btn-primary, .btn-lg');
    magneticBtns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var mx = (x / rect.width) * 100;
        var my = (y / rect.height) * 100;
        btn.style.setProperty('--mx', mx + '%');
        btn.style.setProperty('--my', my + '%');

        // Subtle magnetic pull
        var pullX = (x - rect.width / 2) / 8;
        var pullY = (y - rect.height / 2) / 8;
        btn.style.transform = 'translate(' + pullX + 'px, ' + pullY + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
        btn.style.setProperty('--mx', '50%');
        btn.style.setProperty('--my', '50%');
      });
    });
  }

  /* ============================================================
     6. CARD SPOTLIGHT (mouse position CSS var)
     ============================================================ */
  if (!isTouch && !prefersReduced) {
    var spotlightCards = document.querySelectorAll(
      '.service-card, .step, .testi, .price-card, .about-card'
    );
    spotlightCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
      });
    });
  }

  /* ============================================================
     7. CARD 3D TILT
     ============================================================ */
  if (!isTouch && !prefersReduced) {
    var tiltCards = document.querySelectorAll('.tilt-card, .service-card, .price-card');
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = ((y - centerY) / centerY) * -3;
        var rotateY = ((x - centerX) / centerX) * 3;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ============================================================
     8. HERO PARALLAX (subtle)
     ============================================================ */
  if (!isTouch && !prefersReduced) {
    var heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        if (scrolled < 800) {
          heroVisual.style.transform = 'translateY(' + (scrolled * 0.08) + 'px)';
        }
      }, { passive: true });
    }
  }

  /* ============================================================
     9. FAQ SMOOTH — ensure reflow
     ============================================================ */
  document.querySelectorAll('.faq-list details').forEach(function (d) {
    d.addEventListener('toggle', function () {
      // Force a reflow for smooth max-height animation
      if (d.open) {
        var body = d.querySelector('.faq-body');
        if (body) {
          body.style.maxHeight = body.scrollHeight + 40 + 'px';
        }
      }
    });
  });

  /* ============================================================
     10. SMOOTH SCROLL HIJACK (with easing)
     ============================================================ */
  if (!prefersReduced) {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#' || id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

})();