import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

function getPreferredLocale(request: NextRequest) {
  // Get Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  
  if (!acceptLanguage) {
    return defaultLocale;
  }

  // Parse Accept-Language header
  // Format: "zh-CN,zh;q=0.9,en;q=0.8"
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, q = 'q=1'] = lang.trim().split(';');
      const quality = parseFloat(q.split('=')[1] || '1');
      return { locale: locale.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Check if any preferred language matches our supported locales
  for (const { locale } of languages) {
    // Check for exact match or language prefix (e.g., "zh-CN" -> "zh")
    if (locale.startsWith('zh')) {
      return 'zh';
    }
    if (locale.startsWith('en')) {
      return 'en';
    }
  }

  // Default to English if not Chinese
  return 'en';
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname is missing locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Get preferred locale from browser
    const locale = getPreferredLocale(request);
    
    // Redirect to preferred locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
};
