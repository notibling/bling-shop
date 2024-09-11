const fs = require('fs');

function main() {
  const files = fs.readdirSync('./');
  const ignoredFiles = ['index.ts', '__generate__icons_definitions.js'];
  
  const icons = files
  .filter((file) => !ignoredFiles.includes(file) && file.endsWith('.tsx'))
  .map((icon)=> icon.replace('.tsx', ''));

  const IconType = `
export type IconType = ${icons.map(icon=> `'${icon}'`).join(' | ')};
  `

  fs.writeFileSync('./definitions.ts', IconType);
  // console.log('Generated icons definitions', IconType);
  console.log('Generated icons definitions', IconType.slice(0,100) + '...');
}

main();
