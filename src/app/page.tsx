import Script from 'next/script';

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
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">🐙</span>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    </>
  );
}
