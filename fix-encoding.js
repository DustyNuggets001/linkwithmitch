const fs = require('fs');

// Read index.html
let content = fs.readFileSync('index.html', 'utf8');

// Fix badge icons
content = content.replace(/<div class="badge-icon">.*?<\/div>/, '<div class="badge-icon">🇺🇸</div>');
content = content.replace(/<div class="badge-icon">.*?<\/div>/, '<div class="badge-icon">🗺️</div>');
content = content.replace(/<div class="badge-icon">.*?<\/div>/, '<div class="badge-icon">⚡</div>');
content = content.replace(/<div class="badge-icon">.*?<\/div>/, '<div class="badge-icon">🤝</div>');

// Fix text glitch
content = content.replace(/Buy, refinance, relocateI'm/g, 'Buy, refinance, relocate—I\'m');

// Write back
fs.writeFileSync('index.html', content, 'utf8');
console.log('Fixed icons and text!');
