// Ciccada Tech - Dynamic Injection Script

// 1. Text Replacements
const textReplacements = {
    "Lumora AI": "Ciccada Tech",
    "Lumora": "Ciccada",
    "AI Automation Agency": "Cybersecurity Platform",
    "BOOK A CALL": "REQUEST DEMO",
    "Book a call": "Request Demo",
    "Automate work in one workflow.": "Your Security Data. Your Control.",
    "The most powerful AI automation agency for teams that are serious about scale. Connect your tools, deploy agents, iterate fast.": "The most powerful visibility and detection engine for SOC teams that are serious about scale. Deploy the pipeline, detect anomalies, iterate fast.",
    "Trigger: New Lead": "Trigger: Zeek Log Ingest",
    "Enrich lead data via API": "Flink Stateful Processing",
    "Score & qualify lead": "Kafka Stream Routing",
    "Route to sales team": "Anomaly Scoring",
    "Log activity to CRM": "Alert to Dashboard"
};

function processNode(node) {
    if (node.nodeType === 3) { // Text node
        let text = node.nodeValue;
        let modified = false;
        
        for (const [key, value] of Object.entries(textReplacements)) {
            if (text.includes(key)) {
                text = text.split(key).join(value);
                modified = true;
            }
        }
        
        if (modified) {
            node.nodeValue = text;
        }
    } else if (node.nodeType === 1) { // Element node
        if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
        
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

    // Remove "Design & Developed by Amani" text
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    while (walker.nextNode()) {
        var node = walker.currentNode;
        if (node.nodeValue && node.nodeValue.includes('Amani')) {
            // Walk up to find the containing row/block and hide it
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

    // Continuous polling fallback for late-injected elements
    setInterval(purgeUnwanted, 500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
} else {
    initObserver();
}
