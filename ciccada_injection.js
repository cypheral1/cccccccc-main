// Ciccada Tech - Dynamic Injection Script

// 0. Intercept 2D Canvas text rendering for the LED Matrix Text component
(function() {
    try {
        var origFillText = CanvasRenderingContext2D.prototype.fillText;
        CanvasRenderingContext2D.prototype.fillText = function(text, x, y, max) {
            if (typeof text === 'string' && text.includes('LUMORA AI')) {
                text = text.replace(/LUMORA AI/g, 'CICCADA TECH');
            }
            return origFillText.apply(this, arguments.length > 3 ? [text, x, y, max] : [text, x, y]);
        };

        var origMeasureText = CanvasRenderingContext2D.prototype.measureText;
        CanvasRenderingContext2D.prototype.measureText = function(text) {
            if (typeof text === 'string' && text.includes('LUMORA AI')) {
                text = text.replace(/LUMORA AI/g, 'CICCADA TECH');
            }
            return origMeasureText.apply(this, [text]);
        };
    } catch(e) {}
})();

// 1. Text Replacements
const textReplacements = {
    "Lumora AI": "Ciccada Tech",
    "LUMORA AI": "CICCADA TECH",
    "Lumora": "Ciccada",
    "AI Automation Agency": "Cybersecurity Platform",
    "AI Automation Agency Framer Template": "Cybersecurity Platform",
    "BOOK A CALL": "REQUEST DEMO",
    "Book a call": "Request Demo",
    "Automate work in one workflow.": "Your Security Data. Your Control.",
    "The most powerful AI automation agency for teams that are serious about scale. Connect your tools, deploy agents, iterate fast.": "The most powerful visibility and detection engine for SOC teams that are serious about scale. Deploy the pipeline, detect anomalies, iterate fast.",
    "Trigger: New Lead": "Trigger: Log Ingest",
    "Enrich lead data via API": "Stateful Processing",
    "Score & qualify lead": "Stream Routing",
    "Route to sales team": "Anomaly Scoring",
    "Log activity to CRM": "Alert to Dashboard",
    "Design & Developed by Amani": "Ciccada Technology",
    "Noda Patel": "Sameer Chavan",
    "AI Consultant & Builder": "Founder & Security Engineer",
    "THE FOUNDER": "THE FOUNDER",
    "8 yrs": "Young Founder",
    "Shipping production AI and automation systems": "Building mission-critical cybersecurity systems",
    "shipping production AI & automation": "Building mission-critical cybersecurity systems",
    "I've spent the last decade shipping AI inside startups and agencies — long before LLMs were a buzzword. I work directly with founders, no junior team, no SOW theatre.": "As a young founder and security engineer, I build high-throughput threat detection and real-time security pipelines."
};

// Inject alignment styles for founder image
const founderStyle = document.createElement('style');
founderStyle.textContent = `
    .framer-s4z3dm img[alt="BG"] {
        display: none !important;
    }
    .framer-s4z3dm {
        overflow: hidden !important;
        position: relative !important;
    }
    .framer-napdvs, 
    .framer-napdvs > div {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
    }
    .framer-napdvs img {
        object-fit: cover !important;
        object-position: center top !important;
        width: 100% !important;
        height: 108% !important;
    }
    .framer-1kwnnws {
        position: absolute !important;
        bottom: 24px !important;
        left: 24px !important;
        z-index: 10 !important;
    }
    .framer-1qymy5r {
        width: 120px !important;
        height: 22px !important;
        overflow: visible !important;
    }
    .framer-1m0358u-container {
        width: 120px !important;
        height: 22px !important;
        overflow: visible !important;
    }
    .framer-s0n0kj {
        width: auto !important;
        overflow: visible !important;
    }
    img[src*="ciccada_logo"], img[src*="iecljx2VuDSHgMWYnaVAorc4"], .framer-1qymy5r img {
        width: 120px !important;
        height: 22px !important;
        max-width: 120px !important;
        max-height: 22px !important;
        object-fit: contain !important;
        display: block !important;
    }

    /* ── Global Blue Transformation for Framer ────────────────────────── */
    :root {
        --token-orange: #2563EB !important;
        --token-amber: #60A5FA !important;
    }

    /* Override all orange step gradients and highlight bars */
    .framer-1tdi41u, .framer-iur9z8, .framer-g07qag, .framer-1gle67d,
    .framer-36olyh, .framer-l9t8ym, .framer-ncywgb, .framer-1slimfg {
        background: linear-gradient(180deg, rgb(96, 165, 250) 0%, rgb(37, 99, 235) 100%) !important;
    }

    /* Active Highlight States and Tabs */
    [data-highlight="true"], .framer-8i5hD[data-highlight="true"], .framer-v-1hkce0l {
        border-color: #2563EB !important;
    }

    /* Diagram icon container (Lightning bolt, etc.) */
    .framer-6feuc8, [data-framer-name="Icon"] .framer-S2zg3 {
        background-color: #2563EB !important;
    }

    /* Active pills and badges */
    .framer-xh01ze-container p, .framer-12sqsfe-container p {
        color: #60A5FA !important;
    }

    /* Halftone mesh background filter */
    .cc-bg-mesh, .cc-hero-mesh-bg, .cc-terminal-bg-mesh, .ct-header-mesh-bg, .ct-workflow-mesh {
        filter: hue-rotate(195deg) saturate(2.5) brightness(1.2) !important;
    }

    /* Canvas shaders / particle effects */
    [data-framer-component-type="Shader"] canvas {
        filter: hue-rotate(195deg) saturate(2.5) brightness(1.2) !important;
    }

    /* Secondary action buttons */
    a.framer-uv0sB, .framer-v-tt64wm {
        background: linear-gradient(90deg, rgb(96, 165, 250) 0%, rgb(37, 99, 235) 100%) !important;
    }

    /* ── Global Background Video for Whole Website ────────────────────── */
    #ciccada-global-bg-video-wrap {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        min-height: -webkit-fill-available !important;
        z-index: -9999 !important;
        pointer-events: none !important;
        overflow: hidden !important;
        background-color: #030303 !important;
        transform: translate3d(0, 0, 0) !important;
        -webkit-transform: translate3d(0, 0, 0) !important;
    }
    #ciccada-global-bg-video {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        width: 100% !important;
        height: 100% !important;
        min-width: 100% !important;
        min-height: 100% !important;
        transform: translate(-50%, -50%) !important;
        -webkit-transform: translate(-50%, -50%) !important;
        object-fit: cover !important;
        object-position: center center !important;
        opacity: 0.72 !important;
        filter: contrast(1.16) brightness(0.95) saturate(1.20) !important;
    }
    #ciccada-global-bg-overlay {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: radial-gradient(circle at 50% 30%, rgba(3, 3, 3, 0.10) 0%, rgba(3, 3, 3, 0.52) 75%, #030303 100%),
                    linear-gradient(180deg, rgba(3, 3, 3, 0.20) 0%, rgba(3, 3, 3, 0.40) 100%) !important;
        pointer-events: none !important;
    }

    /* Make top-level page and variant containers transparent so video shines through on desktop, tablet, and mobile */
    html, body, #main,
    .framer-dPdoq, .framer-la4520, .framer-ut0nir, .framer-11gd0vq,
    .framer-v-1cj6w34, .framer-v-123u50c, .framer-v-yqs1sz,
    [data-framer-name="Desktop"], [data-framer-name="Tablet"], [data-framer-name="Phone"] {
        background-color: transparent !important;
        background: transparent !important;
    }

    @media (max-width: 768px) {
        /* Mobile Navbar Alignment */
        nav.framer-YTJB9, nav[data-framer-name*="Phone"], nav[data-framer-name*="Tablet"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100vw !important;
        }
        .framer-eqt4fj {
            width: 100% !important;
            box-sizing: border-box !important;
        }
        .framer-1qymy5r, .framer-1m0358u-container {
            width: 110px !important;
            height: 20px !important;
        }
        img[src*="ciccada_logo"], img[src*="iecljx2VuDSHgMWYnaVAorc4"] {
            width: 110px !important;
            height: 20px !important;
            max-width: 110px !important;
            max-height: 20px !important;
        }

        /* Hero & Stats Alignment */
        .framer-dPdoq {
            overflow-x: hidden !important;
            max-width: 100vw !important;
        }

        /* Founder Card Mobile Fit */
        .framer-s4z3dm {
            min-height: 380px !important;
            border-radius: 12px !important;
            max-width: calc(100vw - 32px) !important;
            margin: 0 auto !important;
        }
        .framer-napdvs img {
            object-fit: cover !important;
            object-position: center 15% !important;
        }
        .framer-1kwnnws {
            position: absolute !important;
            bottom: 16px !important;
            left: 16px !important;
            z-index: 10 !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            background: rgba(0, 0, 0, 0.65) !important;
            padding: 10px 14px !important;
            border-radius: 8px !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }

        /* Problem Section Container */
        .framer-6g49ir, [data-framer-name="Bottom Content"] {
            width: 100% !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
            padding: 0 !important;
        }

        /* Footer Alignment */
        footer, .framer-1tafs22, [data-framer-name="Shape Container"] {
            max-width: 100vw !important;
            overflow-x: hidden !important;
        }
    }
`;
if (document.head) {
    document.head.appendChild(founderStyle);
} else {
    document.addEventListener('DOMContentLoaded', () => document.head.appendChild(founderStyle));
}

// Background video loop element creation
(function initBackgroundVideo() {
    function injectVideo() {
        if (document.getElementById('ciccada-global-bg-video-wrap')) return;
        
        const wrap = document.createElement('div');
        wrap.id = 'ciccada-global-bg-video-wrap';
        wrap.setAttribute('aria-hidden', 'true');
        
        const video = document.createElement('video');
        video.id = 'ciccada-global-bg-video';
        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.muted = true;
        video.defaultMuted = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('preload', 'auto');
        
        const src1 = document.createElement('source');
        src1.src = 'images/background-video.mp4';
        src1.type = 'video/mp4';
        
        const src2 = document.createElement('source');
        src2.src = 'WhatsApp%20Video%202026-08-31%20at%2016.10.49.mp4';
        src2.type = 'video/mp4';

        const src3 = document.createElement('source');
        src3.src = '/images/background-video.mp4';
        src3.type = 'video/mp4';

        video.appendChild(src1);
        video.appendChild(src2);
        video.appendChild(src3);
        
        const overlay = document.createElement('div');
        overlay.id = 'ciccada-global-bg-overlay';
        
        wrap.appendChild(video);
        wrap.appendChild(overlay);
        
        if (document.body) {
            document.body.prepend(wrap);
        } else {
            document.documentElement.appendChild(wrap);
        }

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                const triggerPlay = () => {
                    video.play().catch(() => {});
                    window.removeEventListener('click', triggerPlay);
                    window.removeEventListener('scroll', triggerPlay);
                    window.removeEventListener('touchstart', triggerPlay);
                };
                window.addEventListener('click', triggerPlay, { once: true });
                window.addEventListener('scroll', triggerPlay, { once: true });
                window.addEventListener('touchstart', triggerPlay, { once: true });
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectVideo);
    } else {
        injectVideo();
    }
})();

// Fix browser tab title permanently (prevent React router from changing it back)
try {
    Object.defineProperty(document, 'title', {
        get: function() {
            return "Ciccada Tech — Cybersecurity Platform";
        },
        set: function(val) {
            // Block Framer from setting Lumora AI
            return "Ciccada Tech — Cybersecurity Platform";
        },
        configurable: true
    });
} catch(e) {
    document.title = "Ciccada Tech — Cybersecurity Platform";
}

function processNode(node) {
    if (node.nodeType === 3) { // Text node
        let text = node.nodeValue;
        if (!text) return;
        let modified = false;
        
        for (const [key, value] of Object.entries(textReplacements)) {
            if (text.includes(key)) {
                text = text.split(key).join(value);
                modified = true;
            }
        }

        if (/lumora\s*ai/gi.test(text)) {
            text = text.replace(/lumora\s*ai/gi, (match) => {
                return match === match.toUpperCase() ? "CICCADA TECH" : "Ciccada Tech";
            });
            modified = true;
        }

        if (/lumora/gi.test(text)) {
            text = text.replace(/lumora/gi, (match) => {
                return match === match.toUpperCase() ? "CICCADA" : "Ciccada";
            });
            modified = true;
        }
        
        if (modified) {
            node.nodeValue = text;
        }
    } else if (node.nodeType === 1) { // Element node
        if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
        if (node.id === 'cc-terminal-wrap' || (node.closest && node.closest('#cc-terminal-wrap'))) return;
        
        ['alt', 'title', 'aria-label', 'placeholder'].forEach(attr => {
            if (node.hasAttribute && node.hasAttribute(attr)) {
                let val = node.getAttribute(attr);
                if (/lumora/gi.test(val)) {
                    val = val.replace(/lumora\s*ai/gi, 'Ciccada Tech').replace(/lumora/gi, 'Ciccada');
                    node.setAttribute(attr, val);
                }
            }
        });

        node.childNodes.forEach(processNode);
    }
}

// 2. Remove Framer promo badge & Amani credit
function purgeUnwanted() {
    // Remove the Framer badge container (AgentLab AI / Use for Free / Made in Framer)
    var badge = document.getElementById('__framer-badge-container');
    if (badge) badge.remove();

    // Remove any element with framer-badge or promo classes
    document.querySelectorAll('.framer-1hlgjw7, [class*="framer-badge"], [class*="framer-1kh5qj4"], [class*="framer-iec2cl"]').forEach(function(el) {
        el.remove();
    });

    // Remove fixed-position overlays with extremely high z-index (Framer promo)
    document.querySelectorAll('div[style]').forEach(function(el) {
        var z = parseInt(el.style.zIndex);
        if (z > 2147000000) el.remove();
    });

    // Replace Founder image with Sameer Chavan's photo
    document.querySelectorAll('img[src*="19VQ8lou0fXJZWptw2sdg9sw"], img[alt="Founder Image"]').forEach(function(img) {
        if (!img.src.includes('sameer_chavan.png')) {
            img.src = 'images/sameer_chavan.png';
            img.removeAttribute('srcset');
        }
    });

    // Replace Lumora Logo SVG with Ciccada Tech Logo SVG (including mobile navs)
    document.querySelectorAll('img[src*="iecljx2VuDSHgMWYnaVAorc4"], .framer-s0n0kj img, nav img[src*="svg"]').forEach(function(img) {
        if (!img.src.includes('ciccada_logo.svg') && (img.src.includes('iecljx2VuDSHgMWYnaVAorc4') || img.closest('.framer-s0n0kj') || img.closest('nav'))) {
            img.src = 'images/ciccada_logo.svg';
            img.removeAttribute('srcset');
        }
    });

    // Inject Cybersecurity and Contact links into Navbar Menu Groups
    document.querySelectorAll('[data-framer-name="Menu Group"], .framer-rajhn7').forEach(function(menuGroup) {
        if (!menuGroup.querySelector('.cc-nav-cyber-injected')) {
            var firstChild = menuGroup.firstElementChild;
            var cyberLinkContainer = document.createElement('div');
            cyberLinkContainer.className = 'cc-nav-cyber-injected';
            cyberLinkContainer.style.cssText = 'display:flex;align-items:center;height:100%;';
            cyberLinkContainer.innerHTML = '<a href="cybersecurity.html" style="font-family:inherit;font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);text-decoration:none;display:flex;align-items:center;height:100%;padding:0 10px;transition:color 0.2s ease;" onmouseover="this.style.color=\'#2563EB\'" onmouseout="this.style.color=\'rgba(255,255,255,0.85)\'">Cybersecurity</a>';
            menuGroup.insertBefore(cyberLinkContainer, firstChild);
        }
        if (!menuGroup.querySelector('.cc-nav-contact-injected')) {
            var contactLinkContainer = document.createElement('div');
            contactLinkContainer.className = 'cc-nav-contact-injected';
            contactLinkContainer.style.cssText = 'display:flex;align-items:center;height:100%;';
            contactLinkContainer.innerHTML = '<a href="contact.html" style="font-family:inherit;font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);text-decoration:none;display:flex;align-items:center;height:100%;padding:0 10px;transition:color 0.2s ease;" onmouseover="this.style.color=\'#2563EB\'" onmouseout="this.style.color=\'rgba(255,255,255,0.85)\'">Contact</a>';
            menuGroup.appendChild(contactLinkContainer);
        }
    });

    // Ensure all CTA buttons link to contact.html
    document.querySelectorAll('a[href*="cal.com"], a[href*="calendly"], a[href="#contact"], a[data-framer-name="CTA Button"]').forEach(function(btn) {
        if (!btn.getAttribute('href') || btn.getAttribute('href').includes('cal.com') || btn.getAttribute('href') === '#contact') {
            btn.setAttribute('href', 'contact.html');
        }
    });

    // Remove "Design & Developed by Amani" text and sanitize any missed Lumora text
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    while (walker.nextNode()) {
        var node = walker.currentNode;
        if (node.nodeValue && node.nodeValue.includes('Amani')) {
            var parent = node.parentElement;
            while (parent && parent !== document.body) {
                var text = parent.textContent || '';
                if (text.includes('Design') && text.includes('Developed') && text.includes('Amani')) {
                    parent.style.display = 'none';
                    break;
                }
                parent = parent.parentElement;
            }
        }

        if (node.nodeValue && /lumora/gi.test(node.nodeValue)) {
            node.nodeValue = node.nodeValue
                .replace(/LUMORA AI/g, 'CICCADA TECH')
                .replace(/Lumora AI/gi, 'Ciccada Tech')
                .replace(/LUMORA/g, 'CICCADA')
                .replace(/Lumora/gi, 'Ciccada');
        }
    }

    // Comprehensive Orange to Blue runtime re-theming for all Framer SVG, inline styles, and canvas
    recolorOrangeElements(document.body);
}

function isOrangeColorStr(str) {
    if (!str || typeof str !== 'string') return false;
    if (/#(f9562f|fbb168|ff6b35|fa5730|fcb168|ff7a45|ea580c|f97316|ff5f57|f956|fbb1)/i.test(str)) return true;
    var match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (match) {
        var r = parseInt(match[1], 10);
        var g = parseInt(match[2], 10);
        var b = parseInt(match[3], 10);
        if (r >= 200 && g >= 35 && g <= 210 && b < 160) {
            return true;
        }
    }
    return false;
}

function recolorOrangeElements(root) {
    if (!root) return;

    // 1. Sanitize all SVG linearGradient stops
    var stops = root.querySelectorAll ? root.querySelectorAll('stop') : [];
    for (var s = 0; s < stops.length; s++) {
        var stop = stops[s];
        var sc = stop.getAttribute('stop-color') || stop.style.stopColor;
        if (isOrangeColorStr(sc) || (sc && (sc.includes('252,') || sc.includes('251,') || sc.includes('249,') || sc.includes('250,')))) {
            var offset = stop.getAttribute('offset') || '0';
            if (offset === '0' || offset === '0%' || parseFloat(offset) < 0.5) {
                stop.setAttribute('stop-color', 'rgb(96, 165, 250)');
                stop.style.stopColor = 'rgb(96, 165, 250)';
            } else {
                stop.setAttribute('stop-color', 'rgb(37, 99, 235)');
                stop.style.stopColor = 'rgb(37, 99, 235)';
            }
        }
    }

    // 2. Sanitize all elements in DOM
    var elements = root.querySelectorAll ? root.querySelectorAll('*') : [];
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        if (!el || !el.getAttribute) continue;

        // Check style attribute string
        var style = el.getAttribute('style');
        if (style && isOrangeColorStr(style)) {
            var newStyle = style
                .replace(/rgb\(252,\s*177,\s*104\)/g, 'rgb(96, 165, 250)')
                .replace(/rgb\(251,\s*177,\s*104\)/g, 'rgb(96, 165, 250)')
                .replace(/rgb\(249,\s*86,\s*47\)/g, 'rgb(37, 99, 235)')
                .replace(/rgb\(250,\s*87,\s*48\)/g, 'rgb(37, 99, 235)')
                .replace(/rgb\(255,\s*107,\s*53\)/g, 'rgb(37, 99, 235)')
                .replace(/rgba\(252,\s*177,\s*104/g, 'rgba(96, 165, 250')
                .replace(/rgba\(251,\s*177,\s*104/g, 'rgba(96, 165, 250')
                .replace(/rgba\(249,\s*86,\s*47/g, 'rgba(37, 99, 235')
                .replace(/rgba\(250,\s*87,\s*48/g, 'rgba(37, 99, 235')
                .replace(/rgba\(255,\s*107,\s*53/g, 'rgba(37, 99, 235')
                .replace(/#f9562f/gi, '#2563EB')
                .replace(/#fbb168/gi, '#60A5FA')
                .replace(/#ff6b35/gi, '#2563EB');
            el.setAttribute('style', newStyle);
        }

        // Check SVG attributes
        ['fill', 'stroke', 'color'].forEach(function(attr) {
            if (el.hasAttribute(attr)) {
                var val = el.getAttribute(attr);
                if (isOrangeColorStr(val)) {
                    var newVal = val
                        .replace(/rgb\(252,\s*177,\s*104\)/g, 'rgb(96, 165, 250)')
                        .replace(/rgb\(251,\s*177,\s*104\)/g, 'rgb(96, 165, 250)')
                        .replace(/rgb\(249,\s*86,\s*47\)/g, 'rgb(37, 99, 235)')
                        .replace(/rgb\(250,\s*87,\s*48\)/g, 'rgb(37, 99, 235)')
                        .replace(/#f9562f/gi, '#2563EB')
                        .replace(/#fbb168/gi, '#60A5FA')
                        .replace(/#ff6b35/gi, '#2563EB');
                    el.setAttribute(attr, newVal);
                }
            }
        });

        // Check computed styles for active text, badges, dots
        if (el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'DIV' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
            try {
                var comp = window.getComputedStyle(el);
                if (comp && isOrangeColorStr(comp.color)) {
                    el.style.setProperty('color', '#60A5FA', 'important');
                }
                if (comp && isOrangeColorStr(comp.backgroundColor)) {
                    el.style.setProperty('background-color', '#2563EB', 'important');
                }
                if (comp && isOrangeColorStr(comp.borderColor)) {
                    el.style.setProperty('border-color', '#2563EB', 'important');
                }
            } catch(e) {}
        }
    }
}

function initObserver() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(processNode);
                purgeUnwanted();
            } else if (mutation.type === 'characterData') {
                processNode(mutation.target);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    
    // Initial pass
    processNode(document.body);
    purgeUnwanted();

    // Fast polling fallback for dynamic Framer component transitions
    setInterval(purgeUnwanted, 150);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
} else {
    initObserver();
}

// ── Terminal Widget Injection (fights Framer re-render) ─────────────────────
(function() {
    var TERMINAL_ID = 'cc-terminal-wrap';
    var isRunning = false;

    // Inject global styles
    var styleTag = document.createElement('style');
    styleTag.id = 'cc-terminal-styles';
    styleTag.textContent = [
        '@keyframes ccBlink{0%,100%{opacity:1}50%{opacity:0}}',
        '@keyframes ccGlowPulse{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:0.9;transform:scale(1.03)}}',
        '#' + TERMINAL_ID + ' {',
        '  position: relative !important;',
        '  display: block !important;',
        '  width: 100% !important;',
        '  padding: 50px 0 70px !important;',
        '  overflow: hidden !important;',
        '  box-sizing: border-box !important;',
        '  grid-column: 1 / -1 !important;',
        '}',
        '#' + TERMINAL_ID + ' .cc-bg-glow {',
        '  position: absolute !important;',
        '  inset: -10% !important;',
        '  pointer-events: none !important;',
        '  background: radial-gradient(circle at 35% 45%, rgba(37,99,235,0.32) 0%, rgba(96,165,250,0.18) 30%, rgba(0,0,0,0) 70%) !important;',
        '  filter: blur(40px) !important;',
        '  z-index: 0 !important;',
        '  animation: ccGlowPulse 8s ease-in-out infinite !important;',
        '}',
        '#' + TERMINAL_ID + ' .cc-bg-mesh {',
        '  position: absolute !important;',
        '  inset: 0 !important;',
        '  pointer-events: none !important;',
        '  -webkit-mask: url(images/ZFHV04yVksSmFJ5vj7yOYrL4fo.webp) 50%/cover no-repeat !important;',
        '  mask: url(images/ZFHV04yVksSmFJ5vj7yOYrL4fo.webp) 50%/cover no-repeat !important;',
        '  background: radial-gradient(ellipse at 40% 50%, rgba(96,165,250,0.7) 0%, rgba(37,99,235,0.5) 40%, rgba(0,0,0,0) 75%) !important;',
        '  opacity: 0.85 !important;',
        '  z-index: 1 !important;',
        '}',
        '#cc-terminal-card {',
        '  position: relative !important;',
        '  z-index: 2 !important;',
        '  margin: 0 auto !important;',
        '  max-width: 640px !important;',
        '  width: calc(100% - 48px) !important;',
        '  background: rgba(8, 8, 8, 0.88) !important;',
        '  backdrop-filter: blur(16px) !important;',
        '  -webkit-backdrop-filter: blur(16px) !important;',
        '  border: 1px solid rgba(255, 255, 255, 0.1) !important;',
        '  border-radius: 12px !important;',
        '  padding: 30px 36px 36px !important;',
        '  box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 30px 80px rgba(0,0,0,0.92) !important;',
        "  font-family: 'JetBrains Mono', 'Fira Code', monospace !important;",
        '  font-size: 13.5px !important;',
        '  line-height: 1.85 !important;',
        '  min-height: 310px !important;',
        '  box-sizing: border-box !important;',
        '}',
        '#cc-term-body { display: block !important; }',
        '#cc-term-body .cc-tline { min-height: 26px !important; line-height: 26px !important; white-space: pre !important; font-family: inherit !important; display: block !important; }',
        '.cct-prompt { color: rgba(255,255,255,0.55) !important; font-family: inherit !important; }',
        '.cct-cmd { color: #ffffff !important; font-weight: 500 !important; font-family: inherit !important; }',
        '.cct-arrow { color: rgba(255,255,255,0.35) !important; font-family: inherit !important; }',
        '.cct-key { color: #60A5FA !important; font-weight: 600 !important; display: inline-block !important; width: 175px !important; font-family: inherit !important; }',
        '.cct-val { color: #2563EB !important; font-family: inherit !important; }',
        '.cct-cmt { color: rgba(255,255,255,0.42) !important; font-family: inherit !important; }',
        '.cct-cmt-val { color: rgba(255,255,255,0.85) !important; font-family: inherit !important; }',
        '.cct-ok-icon { color: #34D399 !important; font-family: inherit !important; }',
        '.cct-ok-text { color: #34D399 !important; font-family: inherit !important; }',
        '.cct-dim { color: rgba(255,255,255,0.3) !important; font-family: inherit !important; }',
        '#cc-term-cursor {',
        '  display: inline-block !important;',
        '  width: 8px !important;',
        '  height: 15px !important;',
        '  background: rgba(255,255,255,0.85) !important;',
        '  vertical-align: middle !important;',
        '  margin-left: 2px !important;',
        '  animation: ccBlink 1s step-end infinite !important;',
        '}',
        '@media (max-width: 768px) {',
        '  #' + TERMINAL_ID + ' { padding: 20px 0 40px !important; }',
        '  #cc-terminal-card {',
        '    width: calc(100% - 32px) !important;',
        '    max-width: calc(100% - 32px) !important;',
        '    padding: 20px 18px 24px !important;',
        '    min-height: 260px !important;',
        '    font-size: 11.5px !important;',
        '    line-height: 1.75 !important;',
        '    border-radius: 10px !important;',
        '  }',
        '  #cc-term-body .cc-tline {',
        '    min-height: 22px !important;',
        '    line-height: 22px !important;',
        '    font-size: 11.5px !important;',
        '  }',
        '  .cct-key { width: 120px !important; font-size: 11.5px !important; }',
        '  .cct-val, .cct-cmd, .cct-prompt, .cct-ok-icon, .cct-ok-text { font-size: 11.5px !important; }',
        '  .cct-cmt, .cct-cmt-val { font-size: 11px !important; }',
        '}',
        '@media (max-width: 480px) {',
        '  #cc-terminal-card {',
        '    width: calc(100% - 20px) !important;',
        '    max-width: calc(100% - 20px) !important;',
        '    padding: 16px 14px 20px !important;',
        '    font-size: 10.5px !important;',
        '    line-height: 1.7 !important;',
        '  }',
        '  #cc-term-body .cc-tline {',
        '    min-height: 20px !important;',
        '    line-height: 20px !important;',
        '    font-size: 10.5px !important;',
        '  }',
        '  .cct-key { width: 105px !important; font-size: 10.5px !important; }',
        '  .cct-val, .cct-cmd, .cct-prompt, .cct-ok-icon, .cct-ok-text { font-size: 10.5px !important; }',
        '  .cct-cmt, .cct-cmt-val { font-size: 10px !important; }',
        '}'
    ].join('\n');
    
    if (document.head) {
        document.head.appendChild(styleTag);
    } else {
        document.addEventListener('DOMContentLoaded', function() { document.head.appendChild(styleTag); });
    }

    function buildTerminal() {
        var wrap = document.createElement('div');
        wrap.id = TERMINAL_ID;
        wrap.innerHTML = [
            '<div class="cc-bg-glow"></div>',
            '<div class="cc-bg-mesh"></div>',
            '<div id="cc-terminal-card">',
            '  <div style="display:flex;gap:7px;margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,0.06);">',
            '    <span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span>',
            '    <span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span>',
            '    <span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span>',
            '    <span style="margin-left:auto;font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:0.05em;">bash — ciccada-diag</span>',
            '  </div>',
            '  <div id="cc-term-body"></div>',
            '  <span id="cc-term-cursor"></span>',
            '</div>'
        ].join('');
        return wrap;
    }

    var SCRIPT = [
        { segs: [{ t: '$ ', c: 'cct-prompt' }, { t: 'system.diagnose()', c: 'cct-cmd' }], pause: 700 },
        { segs: [{ t: '→ ', c: 'cct-arrow' }, { t: 'manual_handoffs', c: 'cct-key' }, { t: ': ', c: 'cct-dim' }, { t: '62% automatable', c: 'cct-val' }], pause: 280 },
        { segs: [{ t: '→ ', c: 'cct-arrow' }, { t: 'data_silos', c: 'cct-key' }, { t: ': ', c: 'cct-dim' }, { t: '48% automatable', c: 'cct-val' }], pause: 280 },
        { segs: [{ t: '→ ', c: 'cct-arrow' }, { t: 'ops_bottleneck', c: 'cct-key' }, { t: ': ', c: 'cct-dim' }, { t: '71% automatable', c: 'cct-val' }], pause: 450 },
        { segs: [{ t: '// estimated savings: ', c: 'cct-cmt' }, { t: '$240k/yr', c: 'cct-cmt-val' }], pause: 900 },
        { segs: [], pause: 300 },
        { segs: [{ t: '$ ', c: 'cct-prompt' }, { t: 'deploy --target=production', c: 'cct-cmd' }], pause: 800 },
        { segs: [{ t: '✓ ', c: 'cct-ok-icon' }, { t: '7 workflows live', c: 'cct-ok-text' }], pause: 3000 }
    ];

    function sleep(ms) { return new Promise(function(r) { setTimeout(r, ms); }); }

    var hasCompleted = false;

    async function runTerminal() {
        if (isRunning || hasCompleted) return;
        isRunning = true;

        var body = document.getElementById('cc-term-body');
        var cursor = document.getElementById('cc-term-cursor');
        
        if (!body || !cursor) {
            await sleep(100);
            body = document.getElementById('cc-term-body');
            cursor = document.getElementById('cc-term-cursor');
            if (!body || !cursor) {
                isRunning = false;
                return;
            }
        }

        body.innerHTML = '';
        body.appendChild(cursor);

        for (var i = 0; i < SCRIPT.length; i++) {
            body = document.getElementById('cc-term-body');
            cursor = document.getElementById('cc-term-cursor');
            if (!body || !cursor) break;

            var item = SCRIPT[i];
            var lineEl = document.createElement('div');
            lineEl.className = 'cc-tline';
            lineEl.style.cssText = 'min-height:24px;line-height:24px;display:block;margin-bottom:3px;';
            
            body.insertBefore(lineEl, cursor);

            if (item.segs && item.segs.length > 0) {
                for (var s = 0; s < item.segs.length; s++) {
                    body = document.getElementById('cc-term-body');
                    if (!body) break;

                    var seg = item.segs[s];
                    var span = document.createElement('span');
                    span.className = seg.c;
                    lineEl.appendChild(span);

                    var str = seg.t;
                    for (var c = 0; c < str.length; c++) {
                        span.textContent += str[c];
                        await sleep(28);
                    }
                }
            }
            await sleep(item.pause);
        }

        hasCompleted = true;
        isRunning = false;
    }

    function injectTerminal() {
        var headers = document.querySelectorAll('h2');
        var problemHeader = null;
        for (var h = 0; h < headers.length; h++) {
            if (headers[h].textContent && headers[h].textContent.includes('Manual handoffs slow teams down')) {
                problemHeader = headers[h];
                break;
            }
        }

        var bottomContent = null;
        if (problemHeader) {
            var current = problemHeader.parentElement;
            while (current && current !== document.body) {
                var found = current.querySelector('[data-framer-name="Bottom Content"]') || current.querySelector('.framer-6g49ir');
                if (found) {
                    bottomContent = found;
                    break;
                }
                current = current.parentElement;
            }
        }

        if (!bottomContent) {
            bottomContent = document.querySelector('[data-framer-name="Bottom Content"]');
        }

        if (!bottomContent) return;

        bottomContent.style.setProperty('display', 'block', 'important');
        bottomContent.style.setProperty('height', 'auto', 'important');
        bottomContent.style.setProperty('min-height', '320px', 'important');
        bottomContent.style.setProperty('overflow', 'visible', 'important');

        // Hide all native Framer children
        Array.prototype.forEach.call(bottomContent.children, function(child) {
            if (child.id !== TERMINAL_ID && child.id !== 'ciccada-terminal') {
                child.style.setProperty('display', 'none', 'important');
            }
        });

        var oldStatic = document.getElementById('ciccada-terminal');
        if (oldStatic) {
            oldStatic.style.setProperty('display', 'none', 'important');
        }

        var terminal = document.getElementById(TERMINAL_ID);
        if (!terminal || !bottomContent.contains(terminal)) {
            if (terminal && terminal.parentNode) {
                terminal.parentNode.removeChild(terminal);
            }
            terminal = buildTerminal();
            bottomContent.appendChild(terminal);
            isRunning = false;
        }

        terminal.style.setProperty('display', 'block', 'important');

        if (!isRunning) {
            runTerminal();
        }
    }

    setInterval(injectTerminal, 300);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectTerminal);
    } else {
        injectTerminal();
    }
})();

