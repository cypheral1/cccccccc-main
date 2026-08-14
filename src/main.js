import './styles/main.css';
import { siteData } from './data/siteData.js';

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="#" class="navbar-logo">
          ${siteData.navbar.logo.svg}
          <span>${siteData.navbar.logo.text}</span>
        </a>
        <div class="navbar-links">
          ${siteData.navbar.links.map(link => `<a href="${link.href}">${link.label}</a>`).join('')}
        </div>
        <a href="${siteData.navbar.cta.href}" class="navbar-cta btn-primary">
          <span>${siteData.navbar.cta.label}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <div class="navbar-hamburger" id="mobile-menu-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
    
    <div class="mobile-menu" id="mobile-menu">
      ${siteData.navbar.links.map(link => `<a href="${link.href}">${link.label}</a>`).join('')}
      <a href="${siteData.navbar.cta.href}">${siteData.navbar.cta.label}</a>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="hero-bg-gradient"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content reveal">
          <div class="hero-badge">${siteData.hero.badge}</div>
          <h1 class="text-display hero-headline">
            <span class="line">${siteData.hero.headlineParts[0]}</span>
            <span class="line">${siteData.hero.headlineParts[1]}</span>
            <span class="line accent">${siteData.hero.headlineParts[2]}</span>
          </h1>
          <p class="text-body hero-subtitle">${siteData.hero.subtitle}</p>
          <div class="hero-actions">
            <a href="${siteData.hero.cta.href}" class="btn-primary">
              <span>${siteData.hero.cta.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="${siteData.hero.secondaryCta.href}" class="btn-secondary">
              <span>${siteData.hero.secondaryCta.label}</span>
            </a>
          </div>
        </div>
        
        <div class="hero-stats reveal reveal-delay-2">
          ${siteData.hero.stats.map(stat => `
            <div class="hero-stat">
              <div class="hero-stat-value">${stat.value}</div>
              <div class="hero-stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Marquee -->
    <section class="marquee-section">
      <div class="container">
        <h4 class="marquee-heading">${siteData.marquee.heading}</h4>
      </div>
      <div class="marquee-track">
        ${[...siteData.marquee.logos, ...siteData.marquee.logos].map(logo => `
          <div class="marquee-item">${logo.svg}</div>
        `).join('')}
      </div>
    </section>

    <!-- Problem Section -->
    <section class="section problem-section" id="problem">
      <div class="deco-lines"></div>
      <div class="container">
        <div class="section-header problem-header reveal">
          <span class="text-label">${siteData.problem.label}</span>
          <h2 class="text-h2">${siteData.problem.heading}</h2>
        </div>
        
        <div class="problem-cards reveal reveal-delay-1">
          ${siteData.problem.cards.map((card, i) => `
            <div class="problem-card">
              <div class="problem-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 class="problem-card-title">${card.title}</h3>
              <p class="problem-card-desc">${card.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="section solution-section" id="solution">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${siteData.solution.label}</span>
          <h2 class="text-h2">${siteData.solution.heading}</h2>
          <p class="text-body">${siteData.solution.subtitle}</p>
        </div>
        
        <div class="solution-content reveal reveal-delay-1">
          <div class="solution-steps">
            ${siteData.solution.steps.map((step, index) => `
              <div class="solution-step ${index === 0 ? 'active' : ''}" data-step="${index}">
                <div class="solution-step-progress">
                  <div class="solution-step-progress-fill"></div>
                </div>
                <div class="solution-step-number">${step.number}</div>
                <h3 class="solution-step-title">${step.title}</h3>
                <p class="solution-step-desc">${step.description}</p>
              </div>
            `).join('')}
          </div>
          <div class="solution-display">
            ${siteData.solution.steps.map((step, index) => `
              <img src="${step.image}" alt="${step.title}" class="solution-image ${index === 0 ? 'active' : ''}" data-image-step="${index}" />
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section" id="services">
      <div class="deco-lines"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${siteData.services.label}</span>
          <h2 class="text-h2">${siteData.services.heading}</h2>
          <p class="text-body">${siteData.services.subtitle}</p>
        </div>
        
        <div class="services-grid reveal reveal-delay-1">
          ${siteData.services.items.map(service => `
            <div class="service-card">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 12h10M12 7v10"/></svg>
              </div>
              <h3 class="service-title">${service.title}</h3>
              <p class="service-desc">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonials-section" id="testimonials">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${siteData.testimonials.label}</span>
          <h2 class="text-h2">${siteData.testimonials.heading}</h2>
        </div>
        
        <div class="testimonials-grid reveal reveal-delay-1">
          ${siteData.testimonials.items.map(test => `
            <div class="testimonial-card">
              <div class="testimonial-stars">
                ${Array(test.rating).fill('<svg class="testimonial-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
              </div>
              <p class="testimonial-quote">"${test.quote}"</p>
              <div class="testimonial-author">
                <img src="${test.avatar}" alt="${test.author}" class="testimonial-avatar" />
                <div class="testimonial-info">
                  <div class="testimonial-name">${test.author}</div>
                  <div class="testimonial-role">${test.role}, ${test.company}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section" id="faq">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${siteData.faq.label}</span>
          <h2 class="text-h2">${siteData.faq.heading}</h2>
        </div>
        
        <div class="faq-list reveal reveal-delay-1">
          ${siteData.faq.items.map((item, i) => `
            <div class="faq-item">
              <button class="faq-question">
                <span>${item.question}</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-inner">${item.answer}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="cta">
      <div class="container">
        <div class="cta-container reveal">
          <h2 class="text-h2 cta-heading">${siteData.cta.heading}</h2>
          <p class="text-body cta-subtitle">${siteData.cta.subtitle}</p>
          <a href="${siteData.cta.button.href}" class="cta-button">
            <span>${siteData.cta.button.label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <p class="cta-note">${siteData.cta.note}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top reveal">
          <div class="footer-brand">
            <a href="#" class="footer-logo">
              ${siteData.footer.logo.svg}
              <span>${siteData.footer.logo.text}</span>
            </a>
            <p class="footer-tagline">${siteData.footer.tagline}</p>
            <div class="footer-socials">
              <a href="#" class="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" class="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          ${siteData.footer.columns.map(col => `
            <div class="footer-column">
              <h4 class="footer-column-title">${col.title}</h4>
              ${col.links.map(link => `<a href="${link.href}">${link.label}</a>`).join('')}
            </div>
          `).join('')}
        </div>
        
        <div class="footer-bottom reveal">
          <div class="footer-copyright">${siteData.footer.copyright}</div>
          <div class="footer-bottom-links">
            ${siteData.footer.bottomLinks.map(link => `<a href="${link.href}">${link.label}</a>`).join('')}
          </div>
        </div>
      </div>
    </footer>
  `;

  initInteractions();
}

function initInteractions() {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Solution Steps Automation
  const steps = document.querySelectorAll('.solution-step');
  const images = document.querySelectorAll('.solution-image');
  let currentStep = 0;
  let stepInterval;

  function setStep(index) {
    steps.forEach(s => s.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));
    
    steps[index].classList.add('active');
    images[index].classList.add('active');
    currentStep = index;
  }

  function nextStep() {
    let next = (currentStep + 1) % steps.length;
    setStep(next);
  }

  if (steps.length > 0) {
    // start interval (e.g. 4 seconds per step)
    stepInterval = setInterval(nextStep, 4000);

    steps.forEach((step, idx) => {
      step.addEventListener('click', () => {
        clearInterval(stepInterval);
        setStep(idx);
        stepInterval = setInterval(nextStep, 4000);
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('open');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });
      
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Reveal Animations on Scroll (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  revealElements.forEach(el => revealObserver.observe(el));
}

// Initial Render
renderApp();
