// ─── Lumora AI — Site Data ─────────────────────────────────
// All website content is defined here. Change values to update the site.

export const siteData = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    title: 'Ciccada Technology — AI Automation Agency',
    description: 'Launch a premium AI automation agency website with Ciccada Technology, a Framer template for consultants, automation studios, and fractional AI leads.',
    ogImage: '/images/KWoOZASTPc020Bf1ZCExz4WqVgY.png',
    favicon: '/images/fRmFVfrYT9OxygFrzJ1lznQXA.png',
  },

  // ── NAVBAR ────────────────────────────────────────────────
  navbar: {
    logo: {
      svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      text: 'Ciccada Technology',
    },
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#solution' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Book a Call', href: '#cta' },
  },

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    badge: 'AI-POWERED AUTOMATION',
    headlineParts: ['Build Smarter', 'Workflows with', 'AI Automation'],
    subtitle: 'We design and deploy intelligent automation systems that eliminate manual processes, reduce errors, and scale your operations — so your team can focus on high-impact work.',
    cta: { label: 'Book a Call', href: '#cta' },
    secondaryCta: { label: 'See How It Works', href: '#solution' },
    stats: [
      { value: '95%', label: 'Task Automation Rate' },
      { value: '3x', label: 'Faster Deployment' },
      { value: '60%', label: 'Cost Reduction' },
    ],
    image: '/images/19VQ8lou0fXJZWptw2sdg9sw.png',
  },

  // ── LOGOS / MARQUEE ───────────────────────────────────────
  marquee: {
    heading: 'Trusted by forward-thinking teams',
    logos: [
      { name: 'Stripe', svg: `<svg width="60" height="25" viewBox="0 0 60 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Stripe</text></svg>` },
      { name: 'Notion', svg: `<svg width="65" height="25" viewBox="0 0 65 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Notion</text></svg>` },
      { name: 'Linear', svg: `<svg width="55" height="25" viewBox="0 0 55 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Linear</text></svg>` },
      { name: 'Vercel', svg: `<svg width="60" height="25" viewBox="0 0 60 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Vercel</text></svg>` },
      { name: 'Figma', svg: `<svg width="55" height="25" viewBox="0 0 55 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Figma</text></svg>` },
      { name: 'Slack', svg: `<svg width="50" height="25" viewBox="0 0 50 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Slack</text></svg>` },
      { name: 'Webflow', svg: `<svg width="70" height="25" viewBox="0 0 70 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Webflow</text></svg>` },
      { name: 'Zapier', svg: `<svg width="55" height="25" viewBox="0 0 55 25"><text x="0" y="18" fill="white" font-family="Inter,sans-serif" font-weight="700" font-size="16" opacity="0.5">Zapier</text></svg>` },
    ],
  },

  // ── PROBLEM SECTION ───────────────────────────────────────
  problem: {
    label: 'THE PROBLEM',
    heading: 'Manual handoffs slow teams down. Ciccada Technology turns scattered tools into workflows that run without constant checking.',
    cards: [
      {
        title: 'Hours lost to manual work',
        description: 'Your team juggles dozens of disconnected tools daily. Each platform operates in isolation, creating blind spots and wasted effort.',
        icon: 'clock',
      },
      {
        title: 'Disconnected tools and data silos',
        description: 'Traditional automation breaks at the first edge case. Rule-based systems can\'t adapt to the messy reality of your operations.',
        icon: 'disconnect',
      },
      {
        title: 'Growth is bottlenecked by ops',
        description: 'Engineers spend forty percent of their time switching between tools instead of building what matters.',
        icon: 'bottleneck',
      },
    ],
  },

  // ── SOLUTION SECTION ──────────────────────────────────────
  solution: {
    label: 'OUR PROCESS',
    heading: 'From chaos to clarity in four steps',
    subtitle: 'We follow a proven methodology to transform your operations with AI-powered automation.',
    steps: [
      {
        number: '01',
        title: 'Discovery & Audit',
        description: 'We map your existing workflows, identify bottlenecks, and find the highest-impact automation opportunities across your stack.',
        image: '/images/6L01CPwNbiYRcRDnR2HkrcrdQBA.png',
      },
      {
        number: '02',
        title: 'Architecture & Design',
        description: 'Our team designs intelligent workflows that connect your tools, route data, and handle edge cases — all without manual intervention.',
        image: '/images/19VQ8lou0fXJZWptw2sdg9sw.png',
      },
      {
        number: '03',
        title: 'Build & Deploy',
        description: 'We build and test every automation in a staging environment before deploying to production. Zero disruption, full confidence.',
        image: '/images/G0qn5yBQ5FNuONxWE3HUVaA3ayg.png',
      },
      {
        number: '04',
        title: 'Monitor & Optimize',
        description: 'Post-launch, we continuously monitor performance, refine logic, and scale automations as your business evolves.',
        image: '/images/ibYMplIId2Mt9jcHClIhzpcKiaU.png',
      },
    ],
  },

  // ── SERVICES SECTION ──────────────────────────────────────
  services: {
    label: 'SERVICES',
    heading: 'What we automate for you',
    subtitle: 'End-to-end automation solutions that eliminate manual work and scale your operations.',
    items: [
      {
        title: 'Workflow Automation',
        description: 'Connect your tools and automate multi-step processes that currently require manual handoffs between teams.',
        icon: 'workflow',
      },
      {
        title: 'AI Agent Deployment',
        description: 'Deploy intelligent agents that handle customer support, data processing, and decision-making autonomously.',
        icon: 'agent',
      },
      {
        title: 'Data Pipeline Engineering',
        description: 'Build robust data pipelines that clean, transform, and route information between systems in real-time.',
        icon: 'pipeline',
      },
      {
        title: 'Process Optimization',
        description: 'Analyze and redesign existing processes to maximize efficiency before adding automation layers.',
        icon: 'optimize',
      },
      {
        title: 'Integration Architecture',
        description: 'Design and build custom integrations between your CRM, ERP, marketing tools, and internal systems.',
        icon: 'integration',
      },
      {
        title: 'Monitoring & Analytics',
        description: 'Set up real-time dashboards and alerts so you always know how your automations are performing.',
        icon: 'analytics',
      },
    ],
  },

  // ── TESTIMONIALS SECTION ──────────────────────────────────
  testimonials: {
    label: 'TESTIMONIALS',
    heading: 'What our clients say',
    items: [
      {
        quote: 'Ciccada Technology cut our onboarding time from 3 days to 4 hours. The ROI was obvious within the first month.',
        author: 'Sarah Chen',
        role: 'VP of Operations',
        company: 'TechCorp',
        avatar: '/images/DxNeTqgmfHLA3LmuUSjypqEHBU.png',
        rating: 5,
      },
      {
        quote: 'We eliminated 40 hours of manual data entry per week. Our team finally has time to focus on strategy.',
        author: 'Marcus Johnson',
        role: 'Head of Engineering',
        company: 'ScaleUp',
        avatar: '/images/Enaec3XO1xKdLoJEw4hR27aN6Y.png',
        rating: 5,
      },
      {
        quote: 'The automation Ciccada Technology built handles 95% of our support tickets without human intervention. Game-changing.',
        author: 'Emily Torres',
        role: 'Director of CX',
        company: 'FlowState',
        avatar: '/images/dRfVYfBYxqJHxSomF2cqUjXmg8.png',
        rating: 5,
      },
    ],
  },

  // ── FAQ SECTION ───────────────────────────────────────────
  faq: {
    label: 'FAQ',
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'How long does a typical automation project take?',
        answer: 'Most projects go from discovery to deployment in 4–8 weeks, depending on complexity. Simple workflow automations can ship in under 2 weeks, while enterprise-wide solutions may take 10–12 weeks.',
      },
      {
        question: 'Do I need technical expertise to use the automations?',
        answer: 'No. We build automations that are fully managed and require zero technical knowledge from your team. We provide training and documentation for any processes that involve human-in-the-loop steps.',
      },
      {
        question: 'What tools and platforms do you integrate with?',
        answer: 'We work with 200+ platforms including Salesforce, HubSpot, Slack, Notion, Google Workspace, Zapier, Make, n8n, and any tool with an API. If it has an API, we can connect it.',
      },
      {
        question: 'How do you price your services?',
        answer: 'We offer project-based pricing for one-time builds and monthly retainers for ongoing optimization and support. Every engagement starts with a free discovery call to scope the work.',
      },
      {
        question: 'What happens if something breaks?',
        answer: 'All automations include real-time monitoring and alerts. Our team is notified immediately if anything fails, and we resolve issues within our SLA — typically under 2 hours for critical flows.',
      },
      {
        question: 'Can you work with our existing tech stack?',
        answer: 'Absolutely. We design solutions around your current tools and infrastructure. Our goal is to enhance what you already have, not replace it.',
      },
    ],
  },

  // ── CTA SECTION ───────────────────────────────────────────
  cta: {
    heading: 'Ready to automate your operations?',
    subtitle: 'Book a free discovery call and we\'ll show you exactly where AI automation can save your team 20+ hours per week.',
    button: { label: 'Book a Free Call', href: '#' },
    note: 'No commitment required · 30-minute call · Custom roadmap included',
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    logo: {
      svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      text: 'Ciccada Technology',
    },
    tagline: 'AI-powered automation for modern teams.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Workflow Automation', href: '#services' },
          { label: 'AI Agents', href: '#services' },
          { label: 'Data Pipelines', href: '#services' },
          { label: 'Integrations', href: '#services' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', href: '#' },
          { label: 'Case Studies', href: '#' },
          { label: 'Changelog', href: '#' },
          { label: 'Status', href: '#' },
        ],
      },
    ],
    socials: [
      { label: 'Twitter', href: '#', icon: 'twitter' },
      { label: 'LinkedIn', href: '#', icon: 'linkedin' },
      { label: 'GitHub', href: '#', icon: 'github' },
    ],
    copyright: '© 2026 Ciccada Technology. All rights reserved.',
    bottomLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};
