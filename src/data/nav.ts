export interface NavLink {
  id: number;
  href: string;
  translationKey: string;
  fallbackText: string;
  mobileFallbackText?: string;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    href: "/about",
    translationKey: "nav.about",
    fallbackText: "About",
    mobileFallbackText: "About Me",
  },
  {
    id: 2,
    href: "#skills",
    translationKey: "nav.skills",
    fallbackText: "Skills",
    mobileFallbackText: "Skills",
  },
  {
    id: 3,
    href: "/project",
    translationKey: "nav.projects",
    fallbackText: "Projects",
    mobileFallbackText: "Projects",
  },
  {
    id: 4,
    href: "/news",
    translationKey: "nav.news",
    fallbackText: "News",
    mobileFallbackText: "News",
  },
];
