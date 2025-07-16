const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SVG_PATH = 'public/favicon.svg';

// Verificar existencia del SVG
if (!fs.existsSync(SVG_PATH)) {
  console.error(`❌ No se encontró el archivo SVG en ${SVG_PATH}.`);
  process.exit(1);
}

// Función para generar favicon PNG desde SVG
async function generateFavicon(size, outputPath) {
  try {
    console.log(`➡️  Generando ${outputPath} (${size}x${size})...`);
    await sharp(SVG_PATH)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`✅ Generado: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generando ${outputPath}:`, error);
  }
}

// Función para generar favicon ICO (usando el PNG de 32x32)
async function generateIco() {
  try {
    const pngPath = 'public/favicon-32x32.png';
    if (!fs.existsSync(pngPath)) {
      await generateFavicon(32, pngPath);
    }
    console.log('➡️  Generando public/favicon.ico ...');
    await sharp(pngPath)
      .toFormat('ico')
      .toFile('public/favicon.ico');
    console.log('✅ Generado: public/favicon.ico');
  } catch (error) {
    console.error('❌ Error generando ICO:', error);
  }
}

// Función principal
async function generateAllFavicons() {
  console.log('🦉 Generando favicons para Búho Analytics...\n');
  await generateFavicon(16, 'public/favicon-16x16.png');
  await generateFavicon(32, 'public/favicon-32x32.png');
  await generateFavicon(180, 'public/apple-touch-icon.png');
  await generateIco();
  console.log('\n🎉 ¡Favicons generados exitosamente!');
}

if (require.main === module) {
  generateAllFavicons().catch((err) => {
    console.error('❌ Error general:', err);
    process.exit(1);
  });
}

module.exports = { generateAllFavicons }; 