const fs = require('fs');
let styles = fs.readFileSync('styles.css', 'utf-8');

styles = styles.replace(/\.footer-copy\s*\{[^}]+\}/g, `.footer-copy {
      font-family: 'Cinzel', serif;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #ffffff;
      opacity: 0.9;
    }`);

fs.writeFileSync('styles.css', styles, 'utf-8');
console.log('Done replacing footer-copy.');
