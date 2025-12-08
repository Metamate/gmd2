export default function details() {
  document.querySelectorAll('p').forEach(p => {
    // Quick check: does it look like a details block?
    if (!p.textContent.trim().startsWith('???')) return;

    // 1. Detect Split Point (Newline or BR)
    const childNodes = Array.from(p.childNodes);
    let splitNodeIndex = -1; 
    let textSplitIndex = -1; // Index within the text node
    
    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (node.nodeType === Node.TEXT_NODE) {
            const idx = node.textContent.indexOf('\n');
            if (idx !== -1) {
                splitNodeIndex = i;
                textSplitIndex = idx;
                break;
            }
        } else if (node.tagName === 'BR') {
            splitNodeIndex = i;
            break;
        }
    }

    // 2. Build Components
    const details = document.createElement('details');
    details.className = 'generated-details';
    
    const summary = document.createElement('summary');
    // Direct title content (styling handles the icons via pseudo-elements)
    
    const content = document.createElement('div');
    
    // 3. Distribute Nodes
    if (splitNodeIndex === -1) {
        // Inline Mode: No split inside paragraph. All content is summary.
        childNodes.forEach(node => summary.appendChild(node));
        
        // Check for Block Mode (content is in next sibling element)
        const next = p.nextElementSibling;
        if (next) {
            content.appendChild(next);
        }
    } else {
        // Split Mode: Distribute nodes based on split point
        for (let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            
            if (i < splitNodeIndex) {
                summary.appendChild(node);
            } else if (i === splitNodeIndex) {
                 if (textSplitIndex !== -1) {
                     // Text node split
                     const text = node.textContent;
                     const textBefore = text.substring(0, textSplitIndex);
                     const textAfter = text.substring(textSplitIndex); 
                     
                     if (textBefore.trim()) summary.appendChild(document.createTextNode(textBefore));
                     if (textAfter.trim()) content.appendChild(document.createTextNode(textAfter.trim()));
                 }
                 // If BR, we effectively drop it as it consumed by the split action
            } else {
                content.appendChild(node);
            }
        }
    }
    
    // 4. Clean '???' from Title
    // Find the first text node in the summary and strip the prefix
    const summaryNodes = Array.from(summary.childNodes);
    for (const node of summaryNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Regex handles optional whitespace and the three question marks
            // Only replace the START of the text
            const newText = node.textContent.replace(/^\s*\?{3}\s*/, '');
            if (newText !== node.textContent) {
                node.textContent = newText;
                break; // Only strip once
            }
        }
    }

    details.appendChild(summary);
    details.appendChild(content);
    
    p.replaceWith(details);
  });
}
