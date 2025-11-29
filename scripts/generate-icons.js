#!/usr/bin/env node

/**
 * Icon generation script for PWA
 * This script creates PNG icons from an SVG template
 * 
 * Requirements: sharp package (npm install sharp)
 * Usage: node scripts/generate-icons.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicDir = path.join(__dirname, '..', 'public')

// Simple SVG icon template (purple gradient calculator icon)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4f46e5;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#grad)" rx="0"/>
  <rect x="80" y="100" width="352" height="312" fill="white" opacity="0.95" rx="0"/>
  <rect x="100" y="140" width="312" height="40" fill="#7c3aed" opacity="0.3" rx="0"/>
  <rect x="100" y="200" width="140" height="30" fill="#7c3aed" opacity="0.2" rx="0"/>
  <rect x="260" y="200" width="152" height="30" fill="#7c3aed" opacity="0.2" rx="0"/>
  <rect x="100" y="250" width="140" height="30" fill="#7c3aed" opacity="0.2" rx="0"/>
  <rect x="260" y="250" width="152" height="30" fill="#7c3aed" opacity="0.2" rx="0"/>
  <rect x="100" y="300" width="312" height="30" fill="#7c3aed" opacity="0.2" rx="0"/>
  <rect x="100" y="350" width="312" height="50" fill="#7c3aed" rx="0"/>
  <text x="256" y="382" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">CALC</text>
</svg>`

// Sizes needed for PWA
const iconSizes = [
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' }
]

async function generateIcons() {
  try {
    // Check if sharp is available
    let sharp
    try {
      sharp = (await import('sharp')).default
    } catch (e) {
      console.error('❌ Error: sharp package not found.')
      console.log('📦 Please install sharp: npm install sharp --save-dev')
      console.log('   or: pnpm add -D sharp')
      process.exit(1)
    }

    console.log('🎨 Generating PWA icons...')

    for (const { size, name } of iconSizes) {
      const outputPath = path.join(publicDir, name)
      
      await sharp(Buffer.from(iconSvg))
        .resize(size, size, {
          fit: 'contain',
          background: { r: 124, g: 58, b: 237, alpha: 1 } // Purple background
        })
        .png()
        .toFile(outputPath)
      
      console.log(`✅ Generated ${name} (${size}x${size})`)
    }

    console.log('✨ All icons generated successfully!')
  } catch (error) {
    console.error('❌ Error generating icons:', error.message)
    process.exit(1)
  }
}

generateIcons()

