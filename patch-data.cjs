const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(
  `certifications: [\n    "AI Foundations – OpenAI Academy (Issued: July 2026)",\n    "AI Fluency: Framework & Foundations – Anthropic",\n    "Build with AI Bootcamp - Google & Hack2Skill"\n  ]`,
  `certifications: [
    {
      title: "AI Foundations – OpenAI Academy (Issued: July 2026)",
      image: "https://placehold.co/600x400/1a1a2e/8b5cf6?text=OpenAI+Academy"
    },
    {
      title: "AI Fluency: Framework & Foundations – Anthropic",
      image: "https://placehold.co/600x400/1a1a2e/8b5cf6?text=Anthropic"
    },
    {
      title: "Build with AI Bootcamp - Google & Hack2Skill",
      image: "https://placehold.co/600x400/1a1a2e/8b5cf6?text=Google+Bootcamp"
    }
  ]`
);

fs.writeFileSync('src/data.ts', data);
