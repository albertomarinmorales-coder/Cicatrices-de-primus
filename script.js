const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf-8');

function processHtml(html) {
    const pageRegex = /<div class="page" id="(page-clase-[^"]+)">(.*?)<\/div><!-- \/\1 -->/gs;
    
    return html.replace(pageRegex, (match, id, content) => {
        if (id === 'page-clase-desconocido') {
            return match;
        }

        const detailTextRegex = /<div class="detail-text" style="margin-top:2rem;">(.*?)<\/div>\s*<\/div>\s*<!-- Footer -->/gs;
        
        content = content.replace(detailTextRegex, (dtMatch, innerHtml) => {
            const chunks = innerHtml.split(/<div class="raza-photo-item".*?<img src="([^"]+)".*?alt="([^"]+)".*?<\/div>\s*<\/div>/gs);
            
            let newHtml = '<div class="detail-text" style="margin-top:2rem;">\n';
            let reverse = false;
            
            for (let i = 0; i < chunks.length; i += 3) {
                let textChunk = chunks[i].trim();
                
                if (textChunk) {
                    newHtml += `        <div class="clase-feature-row${reverse ? ' reverse' : ''}">\n`;
                    newHtml += '          <div class="clase-feature-text">\n';
                    newHtml += `            ${textChunk}\n`;
                    newHtml += '          </div>\n';
                    
                    if (i + 2 < chunks.length) {
                        let imgSrc = chunks[i+1];
                        let imgAlt = chunks[i+2];
                        newHtml += '          <div class="clase-feature-img">\n';
                        newHtml += `            <img src="${imgSrc}" alt="${imgAlt}" style="width:100%; height:auto; border-radius:12px; border:1px solid var(--border); box-shadow:0 12px 48px rgba(0,0,0,0.5);">\n`;
                        newHtml += '          </div>\n';
                    }
                    
                    newHtml += '        </div>\n';
                    reverse = !reverse;
                }
            }
            
            return newHtml + '      </div>\n    </div>\n    <!-- Footer -->';
        });

        return `<div class="page" id="${id}">${content}</div><!-- /${id} -->`;
    });
}

const modified = processHtml(index);
fs.writeFileSync('index.html', modified, 'utf-8');
console.log('Modifications written by JS successful');
