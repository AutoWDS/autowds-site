import Script from 'next/script';
import Image from 'next/image';

export default function RootPage() {
  return (
    <>
      <Script id="lang-redirect" strategy="beforeInteractive">
        {`
          (function() {
            const browserLang = navigator.language.toLowerCase();
            const locale = browserLang.startsWith('zh') ? 'zh' : 'en';
            window.location.replace('/' + locale + '/');
          })();
        `}
      </Script>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
        <div className="text-center">
          <div className="mx-auto mb-4 animate-pulse">
            <Image src="/favicon.ico" alt="Octopus Crawler" width={64} height={64} />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    </>
  );
}
