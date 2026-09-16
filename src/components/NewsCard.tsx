import SafeImage from "./SafeImage";

interface NewsCardProps {
  item: any;
  index: number;
}

export default function NewsCard({ item, index }: NewsCardProps) {
  const id = item.article_id || item.id || index;
  const title = item.title || item.name || "Untitled";
  const link = item.link || item.url || "#";
  const description = item.description || "";
  const imageUrl = item.image_url || item.icon || undefined;
  const sourceName = item.source_name || item.name || "Unknown Source";
  const sourceIcon = item.source_icon || undefined;
  const pubDate = item.pubDate;

  return (
    <article 
      key={id} 
      className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[10px] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
    >
      {imageUrl && (
        <div className="w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
          <SafeImage 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-200 dark:text-gray-600 uppercase tracking-widest">NEWS</span>
              </div>
            }
          />
          {pubDate && (
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold shadow-sm pointer-events-none text-gray-900 dark:text-gray-200">
              {new Date(pubDate).toLocaleDateString()}
            </div>
          )}
        </div>
      )}
      
      <div className="p-4 md:p-5 flex flex-col flex-1">
        {(sourceName !== title) && (
          <div className="flex items-center gap-2 mb-3 text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-400">
            <SafeImage 
              src={sourceIcon} 
              alt={sourceName} 
              className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover"
              fallback={
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-[8px] md:text-[10px] text-blue-600 dark:text-blue-400 shrink-0">
                  {sourceName.charAt(0).toUpperCase()}
                </div>
              }
            />
            <span className="truncate">{sourceName}</span>
          </div>
        )}
        
        <h2 className="text-base md:text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
          <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
            {title}
          </a>
        </h2>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-4 line-clamp-2 md:line-clamp-3 flex-1 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-white/[0.05] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 overflow-hidden h-5 md:h-6 items-center">
            {item.coin?.slice(0, 2).map((coin: string) => (
              <span key={coin} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] rounded font-semibold border border-blue-100 dark:border-blue-800/50 whitespace-nowrap">
                {coin}
              </span>
            ))}
            {item.category?.slice(0, 2).map((cat: string) => (
              <span key={cat} className="px-2 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[9px] md:text-[10px] rounded font-semibold border border-green-100 dark:border-green-800/50 whitespace-nowrap">
                {cat}
              </span>
            ))}
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 shrink-0"
          >
            Read
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </article>
  );
}
