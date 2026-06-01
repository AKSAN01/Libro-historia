const fs = require('fs');

['60s', '70s', '80s', '90s'].forEach(tag => {
  let path = 'src/components/Decade' + tag + '.jsx';
  let content = fs.readFileSync(path, 'utf8');
  
  if (tag === '60s') {
      const idx = content.indexOf('export const Decade60s');
      if (idx !== -1) {
          const firstPart = content.substring(0, idx);
          const secondPart = `export const Decade60s = () => {
  return (
    <NotihistoricoLayout 
      chapterIndex="1"
      period="1960 — 1969"
      subtitle="La semilla del rencor y el origen del conflicto"
      hitosLeft={HITOS_LEFT}
      hitosRight={HITOS_RIGHT}
      cassetteLabel1="NOTIHISTÓRICO"
      cassetteLabel2="Colombia 1960–1969"
      cdLabel="Audio"
      themeClass="theme-60s"
      tag="60s"
    />
  );
};
`;
          content = firstPart + secondPart;
      }
  } else {
      content = content.replace(/themeClass="theme-\w+"\s*\/>/g, 'themeClass="theme-' + tag + '"\n      tag="' + tag + '"\n    />');
  }
  fs.writeFileSync(path, content);
});

let p2010 = 'src/components/Decada2010.jsx';
let c2010 = fs.readFileSync(p2010, 'utf8');
let fixed2010 = c2010.replace(/themeClass="theme-10s"\s*\/>/g, 'themeClass="theme-10s"\n      tag="10s"\n    />');
fs.writeFileSync(p2010, fixed2010);
