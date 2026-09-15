import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiHtml5, SiCss, SiJavascript } from "react-icons/si";

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
  },
  {
    id: "sweetcafe",
    title: "Sweet Cafe",
    description: "A beautiful and responsive landing page for a coffee shop. It features a modern design with scroll reveal animations, a mobile-friendly menu, and sections for products, services, and testimonials.",
    image: "/assets/project/coffee.png",
    link: "http://qab6mndejqb5zebammh9ibw5.187.127.218.53.sslip.io/",
    tags: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ]
  }
];
