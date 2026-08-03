const fs = require('fs');
const files = [
  'src/components/AboutContent.jsx',
  'src/components/CertificationsFloating.jsx',
  'src/components/ComplianceContent.jsx',
  'src/components/Features.jsx',
];

files.forEach((file) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    const regex =
      /(<(?:Image|img)[^<]*?src="\/images\/R2v3-selo\.png"[^<]*?\/>)/g;

    if (content.match(regex)) {
      content = content.replace(
        regex,
        `<a href="https://sustainableelectronics.org/r2/" target="_blank" rel="noopener noreferrer" className="contents">$1</a>`
      );
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated ' + file);
    } else {
      console.log(
        'No direct Image tag found in ' + file + ', might be using dynamic src'
      );
    }
  }
});
