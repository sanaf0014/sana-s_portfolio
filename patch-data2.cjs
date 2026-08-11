const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

const imports = `import hpLife from './assets/certificates/hp-life.png';
import openaiAcademy from './assets/certificates/openai-academy.png';
import anthropic from './assets/certificates/anthropic.png';
import googleBootcamp from './assets/certificates/google-bootcamp.png';

`;

data = data.replace(
  /certifications:\s*\[[\s\S]*?\],\s*skills:/,
  `certifications: [
    {
      title: "Data Science & Analytics - HP Life",
      image: hpLife
    },
    {
      title: "AI Foundations – OpenAI Academy",
      image: openaiAcademy
    },
    {
      title: "AI Fluency: Framework & Foundations – Anthropic",
      image: anthropic
    },
    {
      title: "Build with AI Bootcamp - Google",
      image: googleBootcamp
    }
  ],
  skills:`
);

fs.writeFileSync('src/data.ts', imports + data);
