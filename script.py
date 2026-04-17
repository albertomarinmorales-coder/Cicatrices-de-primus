import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# We need to process each class page.
# Find all <div class="page" id="page-clase-*"> ... </div><!-- /page-clase-* -->
def process_page(match):
    page_id = match.group(1)
    page_content = match.group(2)
    
    if page_id == 'page-clase-desconocido':
        return match.group(0) # Skip
        
    # Find detail-text block
    def process_detail_text(dt_match):
        dt_content = dt_match.group(1)
        
        # Split into blocks based on raza-photo-item
        # A block might be Text -> Photo
        # We can split by <div class="raza-photo-item" ... </div> </div>
        
        # Matches the photo item exactly
        chunks = re.split(r'<div class="raza-photo-item".*?<img src="([^"]+)".*?alt="([^"]+)".*?</div>\s*</div>\s*', dt_content, flags=re.DOTALL)
        
        # chunks will be: [text, img_src, img_alt, text, img_src, img_alt, text...]
        html_out = ""
        reverse = False
        
        i = 0
        while i < len(chunks):
            # The text chunk
            text_chunk = chunks[i].strip()
            
            # Find all <p> in text_chunk to wrap them
            if text_chunk:
                html_out += f'        <div class="clase-feature-row{" reverse" if reverse else ""}">\n'
                html_out += '          <div class="clase-feature-text">\n'
                html_out += f'            {text_chunk}\n'
                html_out += '          </div>\n'
                
                # Check if there is an image following this text chunk
                if i + 2 < len(chunks):
                    # We have an image
                    img_src = chunks[i+1]
                    img_alt = chunks[i+2]
                    
                    html_out += '          <div class="clase-feature-img">\n'
                    html_out += f'            <img src="{img_src}" alt="{img_alt}" style="width:100%; height:auto; border-radius:12px; border:1px solid var(--border); box-shadow:0 12px 48px rgba(0,0,0,0.5);">\n'
                    html_out += '          </div>\n'
                
                html_out += '        </div>\n'
                
                reverse = not reverse
            
            i += 3 # skip the img_src and img_alt for next iteration
            
        return f'<div class="detail-text" style="margin-top:2rem;">\n{html_out}      </div>'
        
    new_page_content = re.sub(r'<div class="detail-text" style="margin-top:2rem;">(.*?)      </div>', process_detail_text, page_content, flags=re.DOTALL)
    
    return f'<div class="page" id="{page_id}">{new_page_content}</div><!-- /{page_id} -->'

# Use a regex that non-greedily matches the page div
new_text = re.sub(r'<div class="page" id="(page-clase-[^"]+)">(.*?)</div><!-- /\1 -->', process_page, text, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Done")
