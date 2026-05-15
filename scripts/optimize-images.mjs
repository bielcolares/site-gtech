import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const originalsDir = path.join(imagesDir, 'originals');

// Cria o diretório de backup se não existir
if (!fs.existsSync(originalsDir)) {
  fs.mkdirSync(originalsDir, { recursive: true });
  console.log('✅ Pasta /originals/ criada para backup.');
}

// Arquivos a converter (todos os PNG e JPG, exceto ícones e logos pequenos)
const filesToConvert = [
  // Galeria principal (críticos — ~20MB cada)
  { file: 'fundo-gtech.png', quality: 82 },
  { file: 'fundo-gtech-2.png', quality: 82 },
  { file: 'fundo-gtech-3.png', quality: 82 },
  { file: 'fundo-gtech-4.png', quality: 82 },
  { file: 'fundo-gtech-5.png', quality: 82 },
  { file: 'fundo-gtech-6.png', quality: 82 },
  // Robô e decorativos
  { file: 'robo_gtech.png', quality: 85 },
  { file: 'design verde.png', quality: 80 },
  { file: 'design branco.png', quality: 80 },
  // Logos de parceiros pesados
  { file: 'atlas-schindler-logo.jpg', quality: 85 },
  { file: 'logo-gtech.jpeg', quality: 85 },
  // Certificações e selos
  { file: 'iso-9001.png', quality: 85 },
  { file: 'iso-14001.png', quality: 85 },
  { file: 'iso-45001.png', quality: 85 },
  { file: 'Flex_logo.png', quality: 85 },
  { file: 'Volkswagen_logo.png', quality: 85 },
  { file: 'Ipiranga_logo.png', quality: 85 },
  { file: 'serasa_logo.png', quality: 85 },
  { file: 'Toyota.png', quality: 85 },
  { file: 'samsung_logo.jpg', quality: 85 },
];

function formatBytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

console.log('\n🚀 Iniciando otimização de imagens...\n');

let totalBefore = 0;
let totalAfter = 0;

for (const { file, quality } of filesToConvert) {
  const inputPath = path.join(imagesDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  const outputPath = path.join(imagesDir, `${baseName}.webp`);
  const backupPath = path.join(originalsDir, file);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Arquivo não encontrado, pulando: ${file}`);
    continue;
  }

  const sizeBefore = fs.statSync(inputPath).size;
  totalBefore += sizeBefore;

  try {
    await sharp(inputPath).webp({ quality }).toFile(outputPath);

    // Move o original para backup
    fs.copyFileSync(inputPath, backupPath);
    fs.unlinkSync(inputPath);

    const sizeAfter = fs.statSync(outputPath).size;
    totalAfter += sizeAfter;

    const reduction = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(
      `✅ ${file.padEnd(32)} ${formatBytes(sizeBefore).padStart(8)} → ${formatBytes(sizeAfter).padStart(8)}  (${reduction}% menor)`
    );
  } catch (err) {
    console.error(`❌ Erro ao processar ${file}:`, err.message);
  }
}

console.log('\n─────────────────────────────────────────────────────────');
console.log(
  `📦 TOTAL ANTES:  ${formatBytes(totalBefore)}`
);
console.log(
  `📦 TOTAL DEPOIS: ${formatBytes(totalAfter)}`
);
console.log(
  `💾 ECONOMIA:     ${formatBytes(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`
);
console.log('─────────────────────────────────────────────────────────');
console.log('\n✅ Originais salvos em /public/images/originals/ como backup.');
console.log('✅ Atualize os srcs nos componentes para .webp onde necessário.\n');
