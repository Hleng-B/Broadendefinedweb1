# cPanel Deployment Guide

## Files Ready for Upload

Your site is built and ready! All files are in the `build` folder.

## Deployment Steps

### 1. Access cPanel File Manager
- Log into your cPanel account
- Navigate to **File Manager**
- Go to `public_html` (or your domain's root directory)

### 2. Upload Files
Upload ALL contents from the `build` folder:
- `index.html`
- `assets/` folder (contains all CSS, JS, and images)
- `.htaccess` (handles routing for React)

**Important:** Upload the CONTENTS of the build folder, not the folder itself.

### 3. File Structure on Server
Your `public_html` should look like:
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-DvTOxhiy.js
    ├── index-BAAEEc2k.css
    └── [all image files]
```

### 4. Verify .htaccess
The `.htaccess` file is crucial for React Router to work. It should contain:
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### 5. Set Permissions (if needed)
- Files: 644
- Folders: 755
- .htaccess: 644

### 6. Test Your Site
Visit your domain and verify:
- Homepage loads correctly
- All images display
- Navigation works
- Forms submit properly

## Quick Upload Methods

### Method 1: File Manager (Recommended for small sites)
1. Select all files in `build` folder
2. Drag and drop into cPanel File Manager

### Method 2: FTP
1. Use FileZilla or similar FTP client
2. Connect to your server
3. Upload `build` folder contents to `public_html`

### Method 3: Compress & Upload
1. Zip the contents of `build` folder
2. Upload zip to cPanel
3. Extract in `public_html`

## Troubleshooting

**404 Errors on Refresh:**
- Verify `.htaccess` is uploaded and contains correct rules
- Check that mod_rewrite is enabled in cPanel

**Images Not Loading:**
- Verify `assets` folder uploaded completely
- Check file permissions

**Blank Page:**
- Check browser console for errors
- Verify all files in `assets` folder uploaded

## Need to Update?
1. Run `npm run build` locally
2. Upload new files from `build` folder
3. Clear browser cache to see changes

---
**Build Date:** February 2, 2026
**Build Output:** build/
