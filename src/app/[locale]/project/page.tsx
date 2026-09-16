import { Metadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import ProjectPageComponent from "@/page/project/page";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.nav.projects,
    alternates: {
      canonical: `/${locale}/project`,
      languages: { 'en-US': '/en/project', 'km-KH': '/kh/project' },
    }
  };
}

export default function Project() {
  return <ProjectPageComponent />;
}
