const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

function checkBalance(html) {
    let balance = 0;
    const tags = html.match(/<\/?div\b/g) || [];
    tags.forEach(tag => {
        if (tag === '<div') balance++;
        else balance--;
    });
    return balance;
}

console.log('Total Div balance in index.html:', checkBalance(content));

// Check specifically the Alquimista page
const startStr = 'id="page-oficio-gen-alquimista"';
const endStr = '<!-- /page-oficio-gen-alquimista -->';
const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    // Find the actual start of the div
    let actualStart = content.lastIndexOf('<div', startIdx);
    const section = content.substring(actualStart, endIdx + endStr.length);
    console.log('Alquimista section balance:', checkBalance(section));
} else {
    console.log('Alquimista section not found');
}
