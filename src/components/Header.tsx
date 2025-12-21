import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n/config';
import { useTranslations } from '@/i18n/utils';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DownloadButton from '@/components/DownloadButton';

interface HeaderProps {
  lang: Locale;
  currentPage?: 'home' | 'learn' | 'changelog' | 'docs';
}

export default function Header({ lang, currentPage = 'home' }: HeaderProps) {
  const t = useTranslations(lang);

  const getLinkClassName = (page: string) => {
    const baseClass = "text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base";
    const activeClass = "text-primary-600 font-medium transition whitespace-nowrap text-sm md:text-base";
    return currentPage === page ? activeClass : baseClass;
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <Image src="/favicon.ico" alt="Octopus Crawler" width={32} height={32} />
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
            Octopus Crawler
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {currentPage === 'home' ? (
            <>
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
              >
                {t('nav.features')}
              </a>
              <a
                href="#use-cases"
                className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
              >
                {t('nav.useCases')}
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
              >
                {t('nav.pricing')}
              </a>
            </>
          ) : (
            <>
              <Link
                href={`/${lang}#features`}
                className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
              >
                {t('nav.features')}
              </Link>
              <Link
                href={`/${lang}#use-cases`}
                className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
              >
                {t('nav.useCases')}
              </Link>
              <Link
                href={`/${lang}#pricing`}
                className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
              >
                {t('nav.pricing')}
              </Link>
            </>
          )}
          <Link
            href={`/${lang}/learn`}
            className={getLinkClassName('learn')}
          >
            {t('nav.tutorial')}
          </Link>
          <Link
            href={`/${lang}/changelog`}
            className={getLinkClassName('changelog')}
          >
            {t('nav.changelog')}
          </Link>
          <a
            href="https://autowds.dtiku.cn/cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap text-sm md:text-base"
          >
            {t('nav.cloudService')}
          </a>
          <LanguageSwitcher currentLocale={lang} />
          <DownloadButton lang={lang} variant="header" />
        </div>
      </nav>
    </header>
  );
}