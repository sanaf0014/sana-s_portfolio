const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  'contact: {',
  'resumeUrl: "#",\n  contact: {'
);

data = data.replace(
  'title: "MarketMate",\n      subtitle: "Sentiment Analysis & Text Mining Engine",',
  'title: "MarketMate",\n      subtitle: "Sentiment Analysis & Text Mining Engine",\n      github: "#",'
);

data = data.replace(
  'title: "Orchestra AI",\n      subtitle: "Interactive Analytics & Finance Engine",',
  'title: "Orchestra AI",\n      subtitle: "Interactive Analytics & Finance Engine",\n      github: "#",'
);

fs.writeFileSync('src/data.ts', data);
