'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from '@/i18n/utils';
import { Locale } from '@/i18n/config';

interface DownloadButtonProps {
  lang: Locale;
  variant?: 'hero' | 'header' | 'cta';
  textKey?: string;
}

export default function DownloadButton({ lang, variant = 'hero', textKey }: DownloadButtonProps) {
  const t = useTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 根据变体确定按钮文本和样式
  const getButtonText = () => {
    if (textKey) return t(textKey);
    switch (variant) {
      case 'header':
        return t('common.installNow');
      case 'cta':
        return t('cta.button');
      default:
        return t('hero.downloadFree');
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'rounded-lg font-semibold transition flex items-center justify-center space-x-2';
    switch (variant) {
      case 'header':
        return `${baseClasses} bg-gradient-to-r from-primary-600 to-blue-500 text-white px-5 py-2 hover:shadow-lg text-sm md:text-base whitespace-nowrap`;
      case 'cta':
        return `${baseClasses} bg-white text-primary-600 px-8 py-4 hover:shadow-2xl transform hover:-translate-y-1 text-lg`;
      default:
        return `${baseClasses} bg-gradient-to-r from-primary-600 to-blue-500 text-white px-8 py-4 hover:shadow-xl transform hover:-translate-y-0.5 text-lg w-full sm:w-auto`;
    }
  };

  const getDropdownPosition = () => {
    switch (variant) {
      case 'header':
        return 'right-0';
      case 'cta':
        return 'left-1/2 -translate-x-1/2';
      default:
        return 'left-0';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const browsers = [
    {
      name: 'Chrome',
      iconId: 'icon-chrome',
      color: 'text-blue-600',
      url: 'https://chromewebstore.google.com/detail/octopus-crawler/hcondbfnnboejmehdbegimponkblopho',
      key: 'chrome'
    },
    {
      name: 'Edge',
      iconId: 'icon-edge',
      color: 'text-blue-500',
      url: 'https://microsoftedge.microsoft.com/addons/detail/octopus-crawler/nbckdijndlleiongachkolhipiigifec',
      key: 'edge'
    },
    {
      name: 'Firefox',
      iconId: 'icon-firefox',
      color: 'text-orange-500',
      url: 'https://addons.mozilla.org/firefox/addon/octopus-crawler/',
      key: 'firefox'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonClasses()}
      >
        <span>{getButtonText()}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={`absolute top-full ${getDropdownPosition()} mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden transition-all duration-200`}>
          {browsers.map((browser) => (
            <a
              key={browser.key}
              href={browser.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
              onClick={() => setIsOpen(false)}
            >
              <div className={`flex-shrink-0 text-2xl ${browser.color}`}>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={`#${browser.iconId}`}></use>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900">{browser.name}</div>
                <div className="text-sm text-gray-500">{t(`hero.downloadFor.${browser.key}`)}</div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

