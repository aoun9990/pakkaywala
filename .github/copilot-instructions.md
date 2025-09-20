# Pakkaywala - Political Poster Generator

Pakkaywala is a static HTML web application that creates customizable political posters with support for both English and Urdu text. The application runs entirely in the browser with no backend dependencies.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Quick Start
- Serve the application: `python3 -m http.server 8080` (takes <1 second)
- Access at: `http://localhost:8080`
- No build process required - this is a static HTML application
- **NEVER CANCEL**: Server starts instantly, no timeout needed

### Repository Structure
```
pakkaywala/
├── README.md          # Minimal project description
├── index.html         # Complete application (1056 lines, 40KB)
└── .github/
    └── copilot-instructions.md
```

### Running the Application
- **Required**: Python 3.x (any version) or any HTTP server
- **Start server**: `cd /home/runner/work/pakkaywala/pakkaywala && python3 -m http.server 8080`
- **Alternative servers**: 
  - Node.js: `npx http-server -p 8080`
  - PHP: `php -S localhost:8080`
  - Any static file server works
- **Access**: Open `http://localhost:8080` in browser
- **Stop server**: `pkill -f "python3 -m http.server"` or `Ctrl+C`

## Application Features & Validation

### Core Functionality
The application provides a poster creation interface with:

**Text Controls**:
- Multi-line text input with real-time preview
- Language toggle: English ↔ Urdu (with Jameel Noori Nastaleeq font)
- Font size and line spacing sliders
- Text color picker
- Individual word highlighting with customizable colors

**Visual Effects**:
- Background image upload with blur effects
- Gradient overlays with opacity and height controls
- Logo upload with positioning options
- Logo background gradient toggle

**Export**:
- PNG download using html2canvas library
- Automatic timestamp and attribution watermark

### Manual Validation Steps
**ALWAYS perform these validation scenarios after making changes**:

1. **Basic Text Functionality**:
   - Enter text in the textarea: "Test message"
   - Verify text appears in the preview canvas
   - Toggle language to Urdu and verify font changes
   - Change font size and verify preview updates

2. **Highlighting System**:
   - Click on individual words in the "Highlight Words" section
   - Verify selected words show yellow highlighting
   - Change highlight color and verify preview updates

3. **Visual Controls**:
   - Upload a background image (test with small PNG/JPG)
   - Adjust blur slider and verify background changes
   - Modify gradient opacity and height sliders
   - Toggle logo background gradient

4. **Export Functionality**:
   - Click "Download Poster" button
   - **Note**: May fail in restricted environments due to html2canvas CDN blocking
   - If successful, verify PNG file downloads with poster content

## External Dependencies & Limitations

### CDN Dependencies
The application loads these external resources:
- Google Fonts (Montserrat): `https://fonts.googleapis.com`
- Font Awesome icons: `https://cdnjs.cloudflare.com`
- html2canvas library: `https://html2canvas.hertzen.com`
- Jameel Noori Nastaleeq font: `https://fonts.cdnfonts.com`
- Default background: `https://images.unsplash.com`

### Known Limitations
- **Network restrictions**: CDN resources may be blocked, causing:
  - Missing icons (Font Awesome)
  - Failed downloads (html2canvas)
  - Font fallbacks (Urdu text)
- **Browser compatibility**: Requires modern browser with Canvas API support
- **File upload**: Only client-side processing, no server storage

## Development Guidelines

### Code Structure
- **Single file application**: All HTML, CSS, and JavaScript in `index.html`
- **No build process**: Direct file editing and browser refresh
- **Inline styles**: CSS defined in `<style>` block (lines 11-606)
- **Vanilla JavaScript**: No frameworks, uses DOM manipulation (lines 607-1056)

### Making Changes
- **Edit directly**: Modify `index.html` with any text editor
- **Test immediately**: Refresh browser to see changes
- **No compilation**: Changes are instant
- **Backup important**: Single file contains all functionality

### Common Tasks
- **Add new features**: Extend JavaScript in the `<script>` section
- **Style changes**: Modify CSS in the `<style>` block
- **Text updates**: Change HTML content in the body
- **Color schemes**: Update CSS custom properties in `:root`

### Testing Changes
- **Always test in browser**: Static analysis won't catch runtime issues
- **Check console**: Open DevTools to see JavaScript errors
- **Test offline mode**: Verify functionality without CDN resources
- **Cross-browser**: Test in different browsers if targeting wide compatibility

## Troubleshooting

### Common Issues
1. **Blank page**: Check browser console for JavaScript errors
2. **Missing icons**: Font Awesome CDN blocked - functionality works without icons
3. **Download fails**: html2canvas CDN blocked - poster creation still works
4. **Urdu text wrong font**: Jameel Noori Nastaleeq CDN blocked - falls back to system fonts
5. **Background not loading**: Unsplash image blocked - upload custom image instead

### Quick Fixes
- **Server won't start**: Check if port 8080 is available: `lsof -i :8080`
- **Changes not visible**: Hard refresh browser: `Ctrl+Shift+R`
- **JavaScript errors**: Check syntax in DevTools Console
- **File permissions**: Ensure `index.html` is readable: `ls -la index.html`

## File Reference

### Repository Root Contents
```bash
$ ls -la
total 56
drwxr-xr-x 3 runner runner  4096 Sep 20 13:02 .
drwxr-xr-x 3 runner runner  4096 Sep 20 13:01 ..
drwxrwxr-x 7 runner runner  4096 Sep 20 13:02 .git
-rw-rw-r-- 1 runner runner    12 Sep 20 13:02 README.md
-rw-rw-r-- 1 runner runner 40454 Sep 20 13:02 index.html
```

### README.md Content
```markdown
# pakkaywala
```

**Note**: This is a minimal static web application. There are no package.json, build scripts, or CI/CD workflows to manage.