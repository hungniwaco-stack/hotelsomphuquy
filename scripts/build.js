const fs = require('fs');
const path = require('path');

// Paths
const ROOT_DIR = path.join(__dirname, '..');
const SRC_FILE = path.join(ROOT_DIR, 'src', 'template.html');
const OUT_FILE = path.join(ROOT_DIR, 'index.html');
const CONFIG_FILE = path.join(ROOT_DIR, 'config.json');
const GALLERY_DIR = path.join(ROOT_DIR, 'images', 'hotel-gallery');

function build() {
    console.log('Starting build process...');

    // 1. Read config
    let config = {};
    try {
        const configData = fs.readFileSync(CONFIG_FILE, 'utf8');
        config = JSON.parse(configData);
        console.log('Config loaded successfully.');
    } catch (e) {
        console.error('Error reading config.json:', e);
        process.exit(1);
    }

    // 2. Read template
    let template = '';
    try {
        template = fs.readFileSync(SRC_FILE, 'utf8');
        console.log('Template loaded successfully.');
    } catch (e) {
        console.error('Error reading src/template.html:', e);
        process.exit(1);
    }

    // 3. Generate Gallery HTML
    let galleryHtml = '';
    try {
        if (fs.existsSync(GALLERY_DIR)) {
            const files = fs.readdirSync(GALLERY_DIR)
                .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))
                .sort((a, b) => {
                    const numA = parseInt(a.match(/\d+/) || [0], 10);
                    const numB = parseInt(b.match(/\d+/) || [0], 10);
                    return numA - numB;
                });

            console.log(`Found ${files.length} images in gallery.`);

            galleryHtml += '            <div class="hotel-gallery-grid">\n';
            let count = 1;
            for (const file of files) {
                let delay = '';
                if (count % 3 === 2) delay = ' delay-1';
                else if (count % 3 === 0) delay = ' delay-2';

                galleryHtml += `                <div class="gallery-item reveal${delay}"><img src="images/hotel-gallery/${file}" alt="${config.HOTEL_NAME} - Hình ${count}" loading="lazy"></div>\n`;
                count++;
            }
            galleryHtml += '            </div>';
        } else {
            console.warn('Gallery directory not found!');
        }
    } catch (e) {
        console.error('Error processing gallery:', e);
    }

    // Add gallery HTML to config replacements
    config.GALLERY_HTML = galleryHtml;

    // 4. Replace Placeholders
    // Placeholders in HTML should be in the format {{KEY}}
    for (const [key, value] of Object.entries(config)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(regex, value);
    }

    // 5. Write Output
    try {
        fs.writeFileSync(OUT_FILE, template, 'utf8');
        console.log(`Build complete! Output written to ${OUT_FILE}`);
    } catch (e) {
        console.error('Error writing index.html:', e);
        process.exit(1);
    }
}

build();
