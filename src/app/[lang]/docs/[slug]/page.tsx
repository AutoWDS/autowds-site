import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Locale } from '@/i18n/config';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import DocsSidebar from '@/components/DocsSidebar';

// Get all available docs
function getAvailableDocs() {
  const docsDir = path.join(process.cwd(), 'docs');
  const files = fs.readdirSync(docsDir);
  
  // Extract unique slugs (without language suffix)
  const slugs = new Set<string>();
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const slug = file.replace(/\.(zh|en)\.md$/, '').replace(/\.md$/, '');
      slugs.add(slug);
    }
  });
  
  return Array.from(slugs);
}

export async function generateStaticParams() {
  const slugs = getAvailableDocs();
  const locales: Locale[] = ['zh', 'en'];
  
  const params = [];
  for (const lang of locales) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  
  return params;
}

// Get markdown content for a specific doc and language
function getDocContent(slug: string, lang: Locale): string | null {
  const docsDir = path.join(process.cwd(), 'docs');
  
  // Try language-specific file first
  const langFile = path.join(docsDir, `${slug}.${lang}.md`);
  if (fs.existsSync(langFile)) {
    return fs.readFileSync(langFile, 'utf-8');
  }
  
  // Fallback to generic file
  const genericFile = path.join(docsDir, `${slug}.md`);
  if (fs.existsSync(genericFile)) {
    return fs.readFileSync(genericFile, 'utf-8');
  }
  
  return null;
}

export default function DocPage({ params }: { params: { lang: Locale; slug: string } }) {
  const content = getDocContent(params.slug, params.lang);
  const isZh = params.lang === 'zh';
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isZh ? '文档未找到' : 'Document Not Found'}
          </h1>
          <Link href={`/${params.lang}/learn`} className="text-purple-600 hover:underline">
            {isZh ? '返回学习中心' : 'Back to Learning Center'}
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href={`/${params.lang}/learn`} className="text-gray-600 hover:text-gray-900 transition">
              {isZh ? '教程' : 'Tutorial'}
            </Link>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <MarkdownRenderer content={content} />
            </article>
          </div>
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
