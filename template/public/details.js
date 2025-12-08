export default function details() {
  // Find all paragraphs that start with ???
  // We use a tree walker or just iterate p tags to find potential candidates
  // However, querySelectorAll('p') is usually enough for top-level content
  const paragraphs = Array.from(document.querySelectorAll('p'));

  for (const p of paragraphs) {
    const text = p.textContent.trim();
    if (!text.startsWith('???')) continue;

    // This is a candidate. formatting is "??? Summary Text"
    // The previous implementation used "question-answer" divs, but here we want to modify the DOM structure.
    
    // 1. Create the details structure
    const detailsEl = document.createElement('details');
    // Add a class for styling if needed, matching the requested native feel or potentially "question-answer" for backward compat logic if desired, 
    // but user asked for "details element".
    detailsEl.classList.add('generated-details'); 

    // 2. Create summary
    const summaryText = text.substring(3).trim();
    const summaryEl = document.createElement('summary');
    summaryEl.textContent = summaryText;
    detailsEl.appendChild(summaryEl);

    // 3. Find the content
    // The content is expected to be the *next sibling* element. 
    // In markdown, an indented line after a paragraph usually becomes a <pre><code> block if it follows a blank line,
    // or sometimes just joins the paragraph if no blank line (but ??? usually implies a distinct block).
    // If the user writes:
    // ??? Question
    //     Answer indented
    // Markdig might render: <p>??? Question</p> <pre><code>Answer indented</code></pre>
    
    const nextSibling = p.nextElementSibling;
    
    // We'll wrap the content in a div to ensure valid HTML inside details (though details can directly contain flow content)
    const contentDiv = document.createElement('div');
    
    if (nextSibling) {
      // Logic: Is the next sibling "part" of this details? 
      // User said "indented next line". 
      // If it's a <pre>, it's definitely the indented block.
      // If it's a <ul>, <p>, etc, it might be what they meant if they didn't indent code-style but just started a new block.
      // We will assume the immediately following block element is the content.
        
      // Move the sibling into the content div
      // specific check: if next sibling matches another ???, we shouldn't consume it (unexpected case, but good safety)
      // but usually the next sibling is the content.
      
      // Clone/Move
      contentDiv.appendChild(nextSibling); // This removes nextSibling from its current parent
    }
    
    detailsEl.appendChild(contentDiv);

    // 4. Replace the original <p> with the new <details>
    if (p.parentNode) {
      p.parentNode.replaceChild(detailsEl, p);
    }
  }
}
