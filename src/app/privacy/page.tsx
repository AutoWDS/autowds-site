import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PrivacyPageProps {
  searchParams?: { lang?: string };
}

export default function PrivacyPage({ searchParams }: PrivacyPageProps) {
  const lang = searchParams?.lang === 'zh' ? 'zh' : 'en';
  
  // Read the privacy policy markdown file
  const privacyPolicyPath = path.join(process.cwd(), 'policy', 
    lang === 'zh' ? 'PRIVACY_POLICY.zh.md' : 'PRIVACY_POLICY.md'
  );
  
  let content: string;
  try {
    content = fs.readFileSync(privacyPolicyPath, 'utf-8');
  } catch (error) {
    // Fallback to English version if Chinese version doesn't exist
    const fallbackPath = path.join(process.cwd(), 'policy', 'PRIVACY_POLICY.md');
    content = fs.readFileSync(fallbackPath, 'utf-8');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <Header lang={lang as 'zh' | 'en'} currentPage="privacy" />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Language switcher for privacy policy */}
          <div className="mb-6 flex justify-center space-x-4">
            <Link 
              href="/privacy?lang=zh" 
              className={`px-4 py-2 rounded-lg transition ${
                lang === 'zh' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              中文
            </Link>
            <Link 
              href="/privacy?lang=en" 
              className={`px-4 py-2 rounded-lg transition ${
                lang === 'en' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              English
            </Link>
          </div>
          
          <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <MarkdownRenderer content={content} />
          </article>
        </div>
      </main>

      <Footer lang={lang as 'zh' | 'en'} variant="simple" />
    </div>
  );
}