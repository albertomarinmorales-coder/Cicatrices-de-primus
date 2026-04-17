const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf-8');

// Also adding nice stylings for single line paragraphs for extra flare, if they don't have style yet.
let modified = index.replace(/<div class="clase-feature-text">\s*(.*?)\s*<\/div>/gs, (match, content) => {
    let newContent = content.replace(/<p(.*?)>/gs, (pMatch, pAttrs) => {
        if (!pAttrs.includes('class=')) {
            return `<p class="tier-desc"${pAttrs}>`;
        }
        return pMatch;
    });
    return `<div class="clase-feature-text">\n            ${newContent}\n          </div>`;
});

fs.writeFileSync('index.html', modified, 'utf-8');
console.log('Tier-desc classes added.');
