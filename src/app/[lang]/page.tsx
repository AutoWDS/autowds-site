import Link from 'next/link';
import { Locale } from '@/i18n/config';
import { useTranslations } from '@/i18n/utils';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export function generateStaticParams() {
  return [
    { lang: 'zh' },
    { lang: 'en' }
  ];
}

export default function Home({ params }: { params: { lang: Locale } }) {
  const t = useTranslations(params.lang);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐙</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Octopus Crawler
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">{t('nav.features')}</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition">{t('nav.useCases')}</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">{t('nav.pricing')}</a>
            <Link href={`/${params.lang}/learn`} className="text-gray-600 hover:text-gray-900 transition">{t('nav.tutorial')}</Link>
            <a href="https://autowds.dtiku.cn/cloud/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">{t('nav.cloudService')}</a>
            <LanguageSwitcher currentLocale={params.lang} />
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
              {t('common.installNow')}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:-translate-y-0.5">
              {t('hero.downloadFree')}
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition">
              {t('hero.watchDemo')}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            {t('hero.browserSupport')} | {t('hero.completelyFree')}
          </p>
        </div>

        {/* Hero Image/Demo */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg shadow-inner p-6 min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🐙</div>
                <p className="text-lg">{params.lang === 'zh' ? '插件界面演示区域' : 'Extension Interface Demo'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-600">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎯', key: 'visualSelection' },
              { icon: '🔄', key: 'autoPagination' },
              { icon: '📊', key: 'multipleFormats' },
              { icon: '⚡', key: 'highSpeed' },
              { icon: '🎬', key: 'recordActions' },
              { icon: '🔐', key: 'loginSupport' },
              { icon: '🌐', key: 'dynamicPages' },
              { icon: '📱', key: 'scheduledTasks' },
              { icon: '☁️', key: 'cloudSync' }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(`features.${feature.key}.title`)}</h3>
                <p className="text-gray-600">{t(`features.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('useCases.title')}</h2>
            <p className="text-xl text-gray-600">{t('useCases.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { key: 'ecommerce' },
              { key: 'market' },
              { key: 'content' },
              { key: 'research' },
              { key: 'recruitment' },
              { key: 'realestate' }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(`useCases.${useCase.key}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`useCases.${useCase.key}.description`)}</p>
                <div className="flex flex-wrap gap-2">
                  {(t(`useCases.${useCase.key}.examples`) as any as string[]).map((example: string, i: number) => (
                    <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricing.title')}</h2>
            <p className="text-xl text-gray-600">{t('pricing.subtitle')}</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{t('pricing.localPlugin')}</h3>
            <p className="text-gray-600 text-center mb-8">{t('pricing.localPluginDesc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['free', 'pro', 'enterprise'].map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan === 'pro' ? 'ring-2 ring-purple-600 transform scale-105' : ''}`}>
                {plan === 'pro' && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    {t('pricing.pro.popular')}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`pricing.${plan}.name`)}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{t(`pricing.${plan}.price`)}</span>
                  <span className="text-gray-600 ml-2">{t(`pricing.${plan}.period`)}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {(t(`pricing.${plan}.features`) as any as string[]).map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan === 'pro'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}>
                  {t(`pricing.${plan}.cta`)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('cta.description')}
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition transform hover:-translate-y-1">
            {t('cta.button')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🐙</span>
                </div>
                <span className="text-white font-bold">Octopus Crawler</span>
              </div>
              <p className="text-sm">{t('footer.description')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">{t('nav.features')}</a></li>
                <li><a href="#pricing" className="hover:text-white transition">{t('nav.pricing')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.resources')}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${params.lang}/learn`} className="hover:text-white transition">{t('nav.tutorial')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
