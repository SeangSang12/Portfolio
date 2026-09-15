import Link from "next/link";
import { socialMediaLinks } from "@/data/socialmedia";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright & Text */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Portfolio. Built with passion.
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4 sm:gap-5">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-gray-500 dark:text-gray-400"
              title={social.name}
            >
              <social.icon 
                className="w-5 h-5" 
                color={social.color} 
              />
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
}
