const fs = require('fs');
const path = require('path');
// Repo-relative: reads the built single page from <repo>/src and writes the final
// wrapped page to <repo>/index.html (what GitHub Pages serves).
const dir = __dirname + '/';
const src = fs.readFileSync(dir + 'ops-directory-single.html', 'utf8');
const i = src.indexOf('</style>');
const head = src.slice(0, i + 8);   // <title>...</title> + <style>...</style>
const body = src.slice(i + 8);       // home view + profile views + script
const out = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${head}
</head>
<body>
${body}
</body>
</html>`;
const outPath = path.join(__dirname, '..', 'index.html');
fs.writeFileSync(outPath, out);
console.log('Wrote ' + outPath + ' — ' + out.length + ' bytes');
