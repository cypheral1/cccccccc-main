(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const e={navbar:{logo:{svg:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',text:"Lumora"},links:[{label:"Services",href:"#services"},{label:"Process",href:"#solution"},{label:"Testimonials",href:"#testimonials"},{label:"FAQ",href:"#faq"}],cta:{label:"Book a Call",href:"#cta"}},hero:{badge:"AI-POWERED AUTOMATION",headlineParts:["Build Smarter","Workflows with","AI Automation"],subtitle:"We design and deploy intelligent automation systems that eliminate manual processes, reduce errors, and scale your operations — so your team can focus on high-impact work.",cta:{label:"Book a Call",href:"#cta"},secondaryCta:{label:"See How It Works",href:"#solution"},stats:[{value:"95%",label:"Task Automation Rate"},{value:"3x",label:"Faster Deployment"},{value:"60%",label:"Cost Reduction"}]},marquee:{heading:"Trusted by forward-thinking teams",logos:[{name:"Stripe",svg:'<svg width="60" height="25" viewBox="0 0 60 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Stripe</text></svg>'},{name:"Notion",svg:'<svg width="65" height="25" viewBox="0 0 65 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Notion</text></svg>'},{name:"Linear",svg:'<svg width="55" height="25" viewBox="0 0 55 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Linear</text></svg>'},{name:"Vercel",svg:'<svg width="60" height="25" viewBox="0 0 60 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Vercel</text></svg>'},{name:"Figma",svg:'<svg width="55" height="25" viewBox="0 0 55 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Figma</text></svg>'},{name:"Slack",svg:'<svg width="50" height="25" viewBox="0 0 50 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Slack</text></svg>'},{name:"Webflow",svg:'<svg width="70" height="25" viewBox="0 0 70 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Webflow</text></svg>'},{name:"Zapier",svg:'<svg width="55" height="25" viewBox="0 0 55 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Zapier</text></svg>'}]},problem:{label:"THE PROBLEM",heading:"Manual handoffs slow teams down. Lumora turns scattered tools into workflows that run without constant checking.",cards:[{title:"Hours lost to manual work",description:"Your team juggles dozens of disconnected tools daily. Each platform operates in isolation, creating blind spots and wasted effort.",icon:"clock"},{title:"Disconnected tools and data silos",description:"Traditional automation breaks at the first edge case. Rule-based systems can't adapt to the messy reality of your operations.",icon:"disconnect"},{title:"Growth is bottlenecked by ops",description:"Engineers spend forty percent of their time switching between tools instead of building what matters.",icon:"bottleneck"}]},solution:{label:"OUR PROCESS",heading:"From chaos to clarity in four steps",subtitle:"We follow a proven methodology to transform your operations with AI-powered automation.",steps:[{number:"01",title:"Discovery & Audit",description:"We map your existing workflows, identify bottlenecks, and find the highest-impact automation opportunities across your stack.",image:"/images/6L01CPwNbiYRcRDnR2HkrcrdQBA.png"},{number:"02",title:"Architecture & Design",description:"Our team designs intelligent workflows that connect your tools, route data, and handle edge cases — all without manual intervention.",image:"/images/19VQ8lou0fXJZWptw2sdg9sw.png"},{number:"03",title:"Build & Deploy",description:"We build and test every automation in a staging environment before deploying to production. Zero disruption, full confidence.",image:"/images/G0qn5yBQ5FNuONxWE3HUVaA3ayg.png"},{number:"04",title:"Monitor & Optimize",description:"Post-launch, we continuously monitor performance, refine logic, and scale automations as your business evolves.",image:"/images/ibYMplIId2Mt9jcHClIhzpcKiaU.png"}]},services:{label:"SERVICES",heading:"What we automate for you",subtitle:"End-to-end automation solutions that eliminate manual work and scale your operations.",items:[{title:"Workflow Automation",description:"Connect your tools and automate multi-step processes that currently require manual handoffs between teams.",icon:"workflow"},{title:"AI Agent Deployment",description:"Deploy intelligent agents that handle customer support, data processing, and decision-making autonomously.",icon:"agent"},{title:"Data Pipeline Engineering",description:"Build robust data pipelines that clean, transform, and route information between systems in real-time.",icon:"pipeline"},{title:"Process Optimization",description:"Analyze and redesign existing processes to maximize efficiency before adding automation layers.",icon:"optimize"},{title:"Integration Architecture",description:"Design and build custom integrations between your CRM, ERP, marketing tools, and internal systems.",icon:"integration"},{title:"Monitoring & Analytics",description:"Set up real-time dashboards and alerts so you always know how your automations are performing.",icon:"analytics"}]},testimonials:{label:"TESTIMONIALS",heading:"What our clients say",items:[{quote:"Lumora cut our onboarding time from 3 days to 4 hours. The ROI was obvious within the first month.",author:"Sarah Chen",role:"VP of Operations",company:"TechCorp",avatar:"/images/DxNeTqgmfHLA3LmuUSjypqEHBU.png",rating:5},{quote:"We eliminated 40 hours of manual data entry per week. Our team finally has time to focus on strategy.",author:"Marcus Johnson",role:"Head of Engineering",company:"ScaleUp",avatar:"/images/Enaec3XO1xKdLoJEw4hR27aN6Y.png",rating:5},{quote:"The automation Lumora built handles 95% of our support tickets without human intervention. Game-changing.",author:"Emily Torres",role:"Director of CX",company:"FlowState",avatar:"/images/dRfVYfBYxqJHxSomF2cqUjXmg8.png",rating:5}]},faq:{label:"FAQ",heading:"Frequently asked questions",items:[{question:"How long does a typical automation project take?",answer:"Most projects go from discovery to deployment in 4–8 weeks, depending on complexity. Simple workflow automations can ship in under 2 weeks, while enterprise-wide solutions may take 10–12 weeks."},{question:"Do I need technical expertise to use the automations?",answer:"No. We build automations that are fully managed and require zero technical knowledge from your team. We provide training and documentation for any processes that involve human-in-the-loop steps."},{question:"What tools and platforms do you integrate with?",answer:"We work with 200+ platforms including Salesforce, HubSpot, Slack, Notion, Google Workspace, Zapier, Make, n8n, and any tool with an API. If it has an API, we can connect it."},{question:"How do you price your services?",answer:"We offer project-based pricing for one-time builds and monthly retainers for ongoing optimization and support. Every engagement starts with a free discovery call to scope the work."},{question:"What happens if something breaks?",answer:"All automations include real-time monitoring and alerts. Our team is notified immediately if anything fails, and we resolve issues within our SLA — typically under 2 hours for critical flows."},{question:"Can you work with our existing tech stack?",answer:"Absolutely. We design solutions around your current tools and infrastructure. Our goal is to enhance what you already have, not replace it."}]},cta:{heading:"Ready to automate your operations?",subtitle:"Book a free discovery call and we'll show you exactly where AI automation can save your team 20+ hours per week.",button:{label:"Book a Free Call",href:"#"},note:"No commitment required · 30-minute call · Custom roadmap included"},footer:{logo:{svg:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',text:"Lumora"},tagline:"AI-powered automation for modern teams.",columns:[{title:"Company",links:[{label:"About",href:"#"},{label:"Careers",href:"#"},{label:"Blog",href:"#"},{label:"Contact",href:"#"}]},{title:"Services",links:[{label:"Workflow Automation",href:"#services"},{label:"AI Agents",href:"#services"},{label:"Data Pipelines",href:"#services"},{label:"Integrations",href:"#services"}]},{title:"Resources",links:[{label:"Documentation",href:"#"},{label:"Case Studies",href:"#"},{label:"Changelog",href:"#"},{label:"Status",href:"#"}]}],copyright:"© 2026 Lumora AI. All rights reserved.",bottomLinks:[{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"}]}};function b(){const r=document.getElementById("app");r&&(r.innerHTML=`
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="#" class="navbar-logo">
          ${e.navbar.logo.svg}
          <span>${e.navbar.logo.text}</span>
        </a>
        <div class="navbar-links">
          ${e.navbar.links.map(t=>`<a href="${t.href}">${t.label}</a>`).join("")}
        </div>
        <a href="${e.navbar.cta.href}" class="navbar-cta btn-primary">
          <span>${e.navbar.cta.label}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <div class="navbar-hamburger" id="mobile-menu-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
    
    <div class="mobile-menu" id="mobile-menu">
      ${e.navbar.links.map(t=>`<a href="${t.href}">${t.label}</a>`).join("")}
      <a href="${e.navbar.cta.href}">${e.navbar.cta.label}</a>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="hero-bg-gradient"></div>
        <div class="hero-grid"></div>
      </div>
      <div class="container">
        <div class="hero-content reveal">
          <div class="hero-badge">${e.hero.badge}</div>
          <h1 class="text-display hero-headline">
            <span class="line">${e.hero.headlineParts[0]}</span>
            <span class="line">${e.hero.headlineParts[1]}</span>
            <span class="line accent">${e.hero.headlineParts[2]}</span>
          </h1>
          <p class="text-body hero-subtitle">${e.hero.subtitle}</p>
          <div class="hero-actions">
            <a href="${e.hero.cta.href}" class="btn-primary">
              <span>${e.hero.cta.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="${e.hero.secondaryCta.href}" class="btn-secondary">
              <span>${e.hero.secondaryCta.label}</span>
            </a>
          </div>
        </div>
        
        <div class="hero-stats reveal reveal-delay-2">
          ${e.hero.stats.map(t=>`
            <div class="hero-stat">
              <div class="hero-stat-value">${t.value}</div>
              <div class="hero-stat-label">${t.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Marquee -->
    <section class="marquee-section">
      <div class="container">
        <h4 class="marquee-heading">${e.marquee.heading}</h4>
      </div>
      <div class="marquee-track">
        ${[...e.marquee.logos,...e.marquee.logos].map(t=>`
          <div class="marquee-item">${t.svg}</div>
        `).join("")}
      </div>
    </section>

    <!-- Problem Section -->
    <section class="section problem-section" id="problem">
      <div class="deco-lines"></div>
      <div class="container">
        <div class="section-header problem-header reveal">
          <span class="text-label">${e.problem.label}</span>
          <h2 class="text-h2">${e.problem.heading}</h2>
        </div>
        
        <div class="problem-cards reveal reveal-delay-1">
          ${e.problem.cards.map((t,o)=>`
            <div class="problem-card">
              <div class="problem-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 class="problem-card-title">${t.title}</h3>
              <p class="problem-card-desc">${t.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="section solution-section" id="solution">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${e.solution.label}</span>
          <h2 class="text-h2">${e.solution.heading}</h2>
          <p class="text-body">${e.solution.subtitle}</p>
        </div>
        
        <div class="solution-content reveal reveal-delay-1">
          <div class="solution-steps">
            ${e.solution.steps.map((t,o)=>`
              <div class="solution-step ${o===0?"active":""}" data-step="${o}">
                <div class="solution-step-progress">
                  <div class="solution-step-progress-fill"></div>
                </div>
                <div class="solution-step-number">${t.number}</div>
                <h3 class="solution-step-title">${t.title}</h3>
                <p class="solution-step-desc">${t.description}</p>
              </div>
            `).join("")}
          </div>
          <div class="solution-display">
            ${e.solution.steps.map((t,o)=>`
              <img src="${t.image}" alt="${t.title}" class="solution-image ${o===0?"active":""}" data-image-step="${o}" />
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section" id="services">
      <div class="deco-lines"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${e.services.label}</span>
          <h2 class="text-h2">${e.services.heading}</h2>
          <p class="text-body">${e.services.subtitle}</p>
        </div>
        
        <div class="services-grid reveal reveal-delay-1">
          ${e.services.items.map(t=>`
            <div class="service-card">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 12h10M12 7v10"/></svg>
              </div>
              <h3 class="service-title">${t.title}</h3>
              <p class="service-desc">${t.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonials-section" id="testimonials">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${e.testimonials.label}</span>
          <h2 class="text-h2">${e.testimonials.heading}</h2>
        </div>
        
        <div class="testimonials-grid reveal reveal-delay-1">
          ${e.testimonials.items.map(t=>`
            <div class="testimonial-card">
              <div class="testimonial-stars">
                ${Array(t.rating).fill('<svg class="testimonial-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join("")}
              </div>
              <p class="testimonial-quote">"${t.quote}"</p>
              <div class="testimonial-author">
                <img src="${t.avatar}" alt="${t.author}" class="testimonial-avatar" />
                <div class="testimonial-info">
                  <div class="testimonial-name">${t.author}</div>
                  <div class="testimonial-role">${t.role}, ${t.company}</div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section" id="faq">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">${e.faq.label}</span>
          <h2 class="text-h2">${e.faq.heading}</h2>
        </div>
        
        <div class="faq-list reveal reveal-delay-1">
          ${e.faq.items.map((t,o)=>`
            <div class="faq-item">
              <button class="faq-question">
                <span>${t.question}</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-inner">${t.answer}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="cta">
      <div class="container">
        <div class="cta-container reveal">
          <h2 class="text-h2 cta-heading">${e.cta.heading}</h2>
          <p class="text-body cta-subtitle">${e.cta.subtitle}</p>
          <a href="${e.cta.button.href}" class="cta-button">
            <span>${e.cta.button.label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <p class="cta-note">${e.cta.note}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top reveal">
          <div class="footer-brand">
            <a href="#" class="footer-logo">
              ${e.footer.logo.svg}
              <span>${e.footer.logo.text}</span>
            </a>
            <p class="footer-tagline">${e.footer.tagline}</p>
            <div class="footer-socials">
              <a href="#" class="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" class="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          ${e.footer.columns.map(t=>`
            <div class="footer-column">
              <h4 class="footer-column-title">${t.title}</h4>
              ${t.links.map(o=>`<a href="${o.href}">${o.label}</a>`).join("")}
            </div>
          `).join("")}
        </div>
        
        <div class="footer-bottom reveal">
          <div class="footer-copyright">${e.footer.copyright}</div>
          <div class="footer-bottom-links">
            ${e.footer.bottomLinks.map(t=>`<a href="${t.href}">${t.label}</a>`).join("")}
          </div>
        </div>
      </div>
    </footer>
  `,y())}function y(){const r=document.getElementById("mobile-menu-btn"),t=document.getElementById("mobile-menu");r&&t&&r.addEventListener("click",()=>{r.classList.toggle("active"),t.classList.toggle("open"),document.body.style.overflow=t.classList.contains("open")?"hidden":""});const o=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled")});const l=document.querySelectorAll(".solution-step"),s=document.querySelectorAll(".solution-image");let i=0,c;function d(a){l.forEach(n=>n.classList.remove("active")),s.forEach(n=>n.classList.remove("active")),l[a].classList.add("active"),s[a].classList.add("active"),i=a}function v(){let a=(i+1)%l.length;d(a)}l.length>0&&(c=setInterval(v,4e3),l.forEach((a,n)=>{a.addEventListener("click",()=>{clearInterval(c),d(n),c=setInterval(v,4e3)})}));const h=document.querySelectorAll(".faq-item");h.forEach(a=>{const n=a.querySelector(".faq-question"),m=a.querySelector(".faq-answer");n.addEventListener("click",()=>{const g=a.classList.contains("open");h.forEach(p=>{p.classList.remove("open"),p.querySelector(".faq-answer").style.maxHeight=null}),g||(a.classList.add("open"),m.style.maxHeight=m.scrollHeight+"px")})});const f=document.querySelectorAll(".reveal"),u=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),u.unobserve(n.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});f.forEach(a=>u.observe(a))}b();
