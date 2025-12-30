import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  // Read the privacy policy markdown file
  const privacyPolicyPath = path.join(process.cwd(), 'policy', 'PRIVACY_POLICY.md');
  const content = fs.readFileSync(privacyPolicyPath, 'utf-8');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <Header lang="zh" currentPage="privacy" />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <MarkdownRenderer content={content} />
          </article>
        </div>
      </main>

      <Footer lang="zh" variant="simple" />
    </div>
  );
}