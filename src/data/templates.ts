
export interface Template {
  id: number;
  name: string;
  description: string;
  image: string;
  previewUrl: string;
  className: string;
}

export const templates: Template[] = [
  {
    id: 1,
    name: "Minimalist",
    description: "Clean, modern design that puts your content front and center",
    image: "minimalist-template.jpg",
    previewUrl: "/templates/minimalist",
    className: "font-light tracking-widest uppercase text-4xl"
  },
  {
    id: 2,
    name: "Creative",
    description: "Bold, artistic layout perfect for showcasing visual work",
    image: "creative-template.jpg",
    previewUrl: "/templates/creative",
    className: "font-bold italic text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"
  },
  {
    id: 3,
    name: "Professional",
    description: "Polished, corporate-friendly design for executive roles",
    image: "professional-template.jpg",
    previewUrl: "/templates/professional",
    className: "font-serif text-4xl font-semibold"
  },
  {
    id: 4,
    name: "Interactive",
    description: "Dynamic design with animations and interactive elements",
    image: "interactive-template.jpg",
    previewUrl: "/templates/interactive",
    className: "font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
  },
  {
    id: 5,
    name: "Industry Specific",
    description: "Tailored templates for specific industries and professions",
    image: "industry-template.jpg",
    previewUrl: "/templates/industry",
    className: "font-sans text-4xl font-bold"
  }
];
