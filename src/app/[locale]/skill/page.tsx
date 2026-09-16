import { Metadata } from 'next';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import SkillPageComponent from "@/page/skill/page";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.nav.skills,
    alternates: {
      canonical: `/${locale}/skill`,
      languages: { 'en-US': '/en/skill', 'km-KH': '/kh/skill' },
    }
  };
}

export default function Skill() {
  return <SkillPageComponent />;
}
