import Link from "next/link";

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
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          <Link href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Dribbble
          </Link>
          <Link href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Twitter
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
