const fs = require('fs');
const path = require('path');

const sourceFile = 'next.config.production.ts';
const targetFile = 'next.config.ts';

try {
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`✅ Successfully copied ${sourceFile} to ${targetFile}`);
  } else {
    console.log(`⚠️  ${sourceFile} not found, using default config`);
  }
} catch (error) {
  console.error(`❌ Error copying config: ${error.message}`);
  process.exit(1);
} 