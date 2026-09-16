import { GraduationCap, Code2, Globe2, Briefcase } from 'lucide-react';
import { Metadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.nav.about,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { 'en-US': '/en/about', 'km-KH': '/kh/about' },
    }
  };
}

import AboutPageComponent from "@/page/about/page";

export default function About() {
  return <AboutPageComponent />;
}
