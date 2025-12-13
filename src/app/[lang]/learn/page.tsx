import Link from 'next/link';
import { Locale } from '@/i18n/config';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DocsSidebar from '@/components/DocsSidebar';

export default function Learn({ params }: { params: { lang: Locale } }) {
  const isZh = params.lang === 'zh';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href={`/${params.lang}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐙</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Octopus Crawler
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${params.lang}#features`} className="text-gray-600 hover:text-gray-900 transition">
              {isZh ? '功能特性' : 'Features'}
            </Link>
            <Link href={`/${params.lang}#use-cases`} className="text-gray-600 hover:text-gray-900 transition">
              {isZh ? '使用场景' : 'Use Cases'}
            </Link>
            <Link href={`/${params.lang}#pricing`} className="text-gray-600 hover:text-gray-900 transition">
              {isZh ? '价格' : 'Pricing'}
            </Link>
            <Link href={`/${params.lang}/learn`} className="text-purple-600 font-semibold">
              {isZh ? '教程' : 'Tutorial'}
            </Link>
            <a href="https://autowds.dtiku.cn/cloud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
              {isZh ? '云服务' : 'Cloud Service'}
            </a>
            <LanguageSwitcher currentLocale={params.lang} />
          </div>
        </nav>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <DocsSidebar lang={params.lang} />

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Hero */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {isZh ? '学习中心' : 'Learning Center'}
              </h1>
              <p className="text-xl text-gray-600">
                {isZh ? '从入门到精通，掌握 Octopus Crawler 的所有功能' : 'From beginner to expert, master all features of Octopus Crawler'}
              </p>
            </div>
          </section>

          {/* Documentation Links */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {isZh ? '📚 文档' : '📚 Documentation'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href={`/${params.lang}/docs/installation`}
                  className="block p-6 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition"
                >
                  <div className="text-3xl mb-3">📦</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isZh ? '安装指南' : 'Installation Guide'}
                  </h3>
                  <p className="text-gray-600">
                    {isZh ? '了解如何安装和配置 Octopus Crawler 插件' : 'Learn how to install and configure Octopus Crawler extension'}
                  </p>
                </Link>
                
                <Link 
                  href={`/${params.lang}/docs/getting-started`}
                  className="block p-6 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition"
                >
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isZh ? '快速开始' : 'Getting Started'}
                  </h3>
                  <p className="text-gray-600">
                    {isZh ? '5分钟快速上手，创建你的第一个采集任务' : 'Get started in 5 minutes, create your first scraping task'}
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; 2024 Octopus Crawler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
