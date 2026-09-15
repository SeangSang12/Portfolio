import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags: { name: string; icon: React.ElementType; color?: string }[];
}

export const projects: Project[] = [
  {
    id: "propfinder",
    title: "PropFinder",
    description: "A modern real estate platform to discover the best places to live. It features a beautiful UI for searching properties by location, type, and price range, offering a seamless user experience.",
    image: "/assets/project/property.png",
    link: "https://property.seangsang.xyz/",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ]
  }
];
