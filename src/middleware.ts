import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const currentLocale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set('language', currentLocale);
    return response;
  }

  // Redirect if there is no locale
  const locale = request.cookies.get('language')?.value || i18n.defaultLocale;
  const validLocale = i18n.locales.includes(locale as any) ? locale : i18n.defaultLocale;
  
  request.nextUrl.pathname = `/${validLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|images|font).*)'],
};
