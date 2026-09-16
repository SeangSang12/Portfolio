import { Metadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import NewsPageComponent from "@/page/news/page";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  // Reusing "nav.news" from dictionary (if it existed) or just hardcoding based on locale if not
  // Actually en.json might not have "nav.news", let's safely default
  return {
    title: locale === 'kh' ? 'ព័ត៌មាន' : 'News',
    alternates: {
      canonical: `/${locale}/news`,
      languages: { 'en-US': '/en/news', 'km-KH': '/kh/news' },
    }
  };
}

// Since NewsPageComponent expects searchParams in Next.js 15+ 
export default async function News(props: { searchParams?: Promise<{ tab?: string; page?: string; country?: string; language?: string }> }) {
  return <NewsPageComponent searchParams={props.searchParams} />;
}
