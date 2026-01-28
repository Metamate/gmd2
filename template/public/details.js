export default function details() {
  document.querySelectorAll('p').forEach(p => {
    // Regex: ??? (type) "Title"
    // Captures: group 1 = type (question|note), group 2 = title
    const match = p.textContent.trim().match(/^\?{3}\s+(question|note)\s+"(.*?)"/);
    if (!match) return;

    const type = match[1];
    const title = match[2];

    // 1. Detect Split Point (Newline or BR)
    const childNodes = Array.from(p.childNodes);
    let splitNodeIndex = -1; 
    let textSplitIndex = -1; 
    
    // Find where the title line ends (it ends at the first newline or BR)
    // We assume the first text node contains the syntax ??? type "title"
    // and potentially a newline if inline content follows.
    
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
    details.className = `generated-details details-${type}`;
    
    const summary = document.createElement('summary');
    summary.textContent = title; // Set explicit title from regex
    
    const content = document.createElement('div');
    
    // 3. Distribute Nodes
    if (splitNodeIndex === -1) {
        // No split in this paragraph (content likely in next sibling)
        // We do NOT append the childNodes to summary because they contain the syntax text.
        // The summary title is already set.
        
        // Check for Block Mode (content is in next sibling element)
        const next = p.nextElementSibling;
        if (next) {
            content.appendChild(next);
        }
    } else {
        // Split Mode: content follows on new line in same paragraph
        for (let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            
            if (i < splitNodeIndex) {
                // Determine if this logic still holds. 
                // The syntax '??? type "title"' is in the first text node(s).
                // We typically discard nodes BEFORE the split because they are part of the declaration line.
                // However, if there are other nodes (like spans/formatting) in the title...
                // The regex approach implies the title is a string. Markdown formatting *within* the quote 
                // might be parsed as separate nodes. 
                // BUT, parsing `??? type "title"` relies on text matching. 
                // Markdown parsers might handle `type` and `"title"` as plain text.
                // Simpler assumption: The entire first line is consumed by the declaration.
                
                // Discard nodes before split point (they are the declaration)
                continue; 
            } else if (i === splitNodeIndex) {
                 if (textSplitIndex !== -1) {
                     // Text node split
                     const text = node.textContent;
                     // Before split is the declaration line -> discard
                     // After split is content
                     const textAfter = text.substring(textSplitIndex); 
                     
                     // Only strip LEADING whitespace (newline + indent), preserve TRAILING space
                     const cleanTextAfter = textAfter.replace(/^\s+/, '');
                     if (cleanTextAfter) content.appendChild(document.createTextNode(cleanTextAfter));
                 }
                 // If BR, consumed
            } else {
                content.appendChild(node);
            }
        }
    }

    details.appendChild(summary);
    details.appendChild(content);
    
    p.replaceWith(details);
  });
}
