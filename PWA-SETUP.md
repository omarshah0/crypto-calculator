# PWA Setup Instructions

Your crypto position size calculator is now configured as a Progressive Web App (PWA) that can be installed on iOS and Android devices and works offline!

## 🚀 Quick Setup

### 1. Generate Icons

You have two options to generate the required PWA icons:

#### Option A: Using the Icon Generator (Recommended)
1. Open `public/icon-generator.html` in your browser
2. Click "Generate All Icons" button
3. The icons will be automatically downloaded
4. Move the downloaded files to the `public/` folder:
   - `apple-touch-icon.png` → `public/apple-touch-icon.png`
   - `icon-192.png` → `public/icon-192.png`
   - `icon-512.png` → `public/icon-512.png`

#### Option B: Using Node.js Script
1. Install dependencies: `pnpm install` (or `npm install`)
2. Run the icon generator: `pnpm run generate-icons`
3. Icons will be automatically created in the `public/` folder

### 2. Build and Deploy

1. Build the project:
   ```bash
   pnpm build
   ```

2. The built files will be in the `dist/` folder

3. Deploy to a web server (required for PWA to work):
   - **Netlify**: Connect your repo, it will auto-deploy
   - **Vercel**: Connect your repo, it will auto-deploy
   - **GitHub Pages**: Use GitHub Actions or deploy manually
   - **Any static hosting**: Upload the `dist/` folder contents

## 📱 Installing on Mobile Devices

### iOS (iPhone/iPad)

1. Open Safari browser (Chrome won't work for installation)
2. Navigate to your deployed app URL
3. Tap the **Share** button (square with arrow)
4. Scroll down and tap **"Add to Home Screen"**
5. Customize the name if desired
6. Tap **"Add"**

The app will now appear on your home screen and work like a native app!

### Android

1. Open Chrome browser
2. Navigate to your deployed app URL
3. Tap the **menu** (three dots) in the top right
4. Tap **"Add to Home screen"** or **"Install app"**
5. Tap **"Install"** in the popup

The app will be installed and appear in your app drawer!

## ✨ Features

- ✅ **Offline Support**: Works without internet connection after first visit
- ✅ **Installable**: Can be added to home screen on iOS and Android
- ✅ **App-like Experience**: Opens in standalone mode (no browser UI)
- ✅ **Fast Loading**: Assets are cached for instant loading
- ✅ **Auto-updates**: Service worker updates automatically

## 🔧 Testing Locally

1. Build the project: `pnpm build`
2. Preview: `pnpm preview`
3. Open in browser: `http://localhost:4321`
4. Open DevTools → Application tab → Service Workers to verify registration
5. Test offline: DevTools → Network tab → Check "Offline" checkbox

## 📝 Notes

- **HTTPS Required**: PWAs require HTTPS (except for localhost)
- **Service Worker**: Automatically registers on page load
- **Cache Strategy**: Uses cache-first with network fallback
- **Updates**: Service worker updates automatically when you deploy new versions

## 🐛 Troubleshooting

### Icons not showing
- Make sure icon files are in the `public/` folder
- Check that manifest.json references the correct icon paths
- Clear browser cache and reload

### Service worker not registering
- Check browser console for errors
- Ensure you're using HTTPS (or localhost)
- Verify `sw.js` is accessible at `/sw.js`

### App not installable
- Ensure manifest.json is valid (check browser console)
- Verify all required icons are present
- Make sure you're using HTTPS (not HTTP)
- On iOS, must use Safari (not Chrome)

## 🎨 Customizing Icons

To use your own icons:
1. Create PNG images in these sizes:
   - 180x180 (apple-touch-icon.png)
   - 192x192 (icon-192.png)
   - 512x512 (icon-512.png)
2. Place them in the `public/` folder
3. Rebuild the project

Enjoy your installable, offline-capable crypto calculator! 🚀

