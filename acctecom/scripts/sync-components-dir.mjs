import fs from 'fs';
import path from 'path';

const root = process.cwd();
const src = path.join(root, 'Components');
const dest = path.join(root, 'components');

// En Windows Components y components son la misma ruta; copiar/borrar rompe la carpeta.
if (process.platform === 'win32') {
  if (fs.existsSync(src)) {
    console.log('OK: Windows — no hace falta copiar Components a components.');
    process.exit(0);
  }
  console.error('sync-components-dir: falta la carpeta Components/.');
  process.exit(1);
}

// Linux / macOS (CI Cloudflare): crear components/ en minúsculas para resolvers que lo exigen.
if (!fs.existsSync(src)) {
  console.error('sync-components-dir: no existe Components/ en el repositorio.');
  process.exit(1);
}

if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}

fs.cpSync(src, dest, { recursive: true });
console.log('OK: Components/ copiado a components/ para el build en Linux.');
