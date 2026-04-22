const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const start = content.indexOf('id="page-oficio-gen-alquimista"');
const end = content.indexOf('<!-- /page-oficio-gen-alquimista -->', start);
const section = content.substring(start, end);

let balance = 0;
const tags = section.match(/<\/?div\b/g);
tags.forEach(tag => {
    if (tag === '<div') balance++;
    else balance--;
});

console.log('Div balance:', balance);
if (balance !== 0) {
    console.log('Unbalanced divs found!');
}
