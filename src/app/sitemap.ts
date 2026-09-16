import { MetadataRoute } from 'next';
import { i18n } from '../i18n-config';

const URL = 'https://porfolioseangsang.wenowkh.online';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/skill', '/project', '/news'];

  return routes.map((route) => {
    // Generate alternate languages object for hreflang tags
    const alternates = i18n.locales.reduce((acc, locale) => {
      acc[locale === 'en' ? 'en-US' : 'km-KH'] = `${URL}/${locale}${route}`;
      return acc;
    }, {} as Record<string, string>);

    return {
      url: `${URL}/en${route}`, // default URL for the sitemap entry
      lastModified: new Date(),
      changeFrequency: route === '' ? 'monthly' : route === '/news' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: alternates,
      },
    };
  });
}
