const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  /certifications:\s*\[[\s\S]*?\],\s*skills:/,
  `certifications: [
    {
      title: "Data Science & Analytics - HP Life",
      image: "/certificates/hp-life.png"
    },
    {
      title: "AI Foundations – OpenAI Academy",
      image: "/certificates/openai-academy.png"
    },
    {
      title: "AI Fluency: Framework & Foundations – Anthropic",
      image: "/certificates/anthropic.png"
    },
    {
      title: "Build with AI Bootcamp - Google",
      image: "/certificates/google-bootcamp.png"
    }
  ],
  skills:`
);

fs.writeFileSync('src/data.ts', data);
