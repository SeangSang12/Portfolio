import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const currentCookie = request.cookies.get('language')?.value;
  let locale = currentCookie || i18n.defaultLocale;
  if (!i18n.locales.includes(locale as any)) locale = i18n.defaultLocale;

  // 1. If URL explicitly has /en/, redirect to strip it for clean URLs
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, '') || '/';
    const response = NextResponse.redirect(url);
    response.cookies.set('language', 'en');
    return response;
  }

  // 2. If URL has /kh/, keep it and set cookie
  if (pathname.startsWith('/kh/') || pathname === '/kh') {
    const response = NextResponse.next();
    response.cookies.set('language', 'kh');
    return response;
  }

  // 3. If URL has NO locale...
  if (locale === 'kh') {
    const url = request.nextUrl.clone();
    url.pathname = `/kh${pathname}`;
    const response = NextResponse.redirect(url);
    return response;
  }

  // If locale is en, rewrite internally so URL stays clean
  if (locale === 'en') {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    const response = NextResponse.rewrite(url);
    response.cookies.set('language', 'en');
    return response;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|images|font).*)'],
};
