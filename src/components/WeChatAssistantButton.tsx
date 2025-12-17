'use client';

import { useCallback, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Locale, defaultLocale, locales } from '@/i18n/config';
import { getNestedTranslation, getTranslations } from '@/i18n/utils';

const FLOAT_WINDOW_SCRIPT_SRC =
  'https://chatbot.weixin.qq.com/mmspraiweb_node/dist/static/script/FLOAT_WINDOW_INIT.min.js';
const WECHAT_BOT_BASE =
  'https://chatbot.weixin.qq.com/webapp/cZuqjgfxKBtCZANSWVj822nLB6o6sF';
const CLOSE_PATCHED_FLAG = 'wechatClosePatched';

let loadScriptPromise: Promise<void> | null = null;
let floatWindowContainer: HTMLElement | null = null;

function ensureScriptLoaded() {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (loadScriptPromise) {
    return loadScriptPromise;
  }

  loadScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-wechat-float-window="true"]'
    );

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('wechat script error')), {
        once: true,
      });
      if (existingScript.dataset.loaded === 'true') {
        resolve();
      }
      return;
    }

    const script = document.createElement('script');
    script.src = FLOAT_WINDOW_SCRIPT_SRC;
    script.async = true;
    script.dataset.wechatFloatWindow = 'true';
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => {
      loadScriptPromise = null;
      reject(new Error('wechat script failed to load'));
    };

    document.body.append(script);
  }).catch((err) => {
    loadScriptPromise = null;
    throw err;
  });

  return loadScriptPromise;
}

function findFloatWindow(): HTMLElement | null {
  if (floatWindowContainer && document.body.contains(floatWindowContainer)) {
    return floatWindowContainer;
  }

  const candidate = Array.from(
    document.querySelectorAll<HTMLElement>('div[style]')
  )
    .reverse()
    .find((el) => el.style.position === 'fixed' && el.textContent?.includes('×'));

  if (candidate) {
    floatWindowContainer = candidate;
    return candidate;
  }

  return null;
}

function patchCloseBehavior(container: HTMLElement) {
  if (container.dataset[CLOSE_PATCHED_FLAG] === 'true') return;

  const closeBtn = Array.from(container.querySelectorAll<HTMLElement>('div')).find(
    (el) => el.textContent?.trim() === '×'
  );

  if (!closeBtn) return;

  const handler = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    container.style.display = 'none';
  };

  closeBtn.addEventListener('click', handler, { capture: true });
  closeBtn.dataset[CLOSE_PATCHED_FLAG] = 'true';
  container.dataset[CLOSE_PATCHED_FLAG] = 'true';
}

export default function WeChatAssistantButton() {
  const pathname = usePathname();
  const locale = useMemo<Locale>(() => {
    const firstSegment = pathname?.split('/').filter(Boolean)[0];
    return locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : defaultLocale;
  }, [pathname]);

  const translations = useMemo(() => getTranslations(locale), [locale]);
  const t = useCallback(
    (key: string) => getNestedTranslation(translations, key),
    [translations]
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = useCallback(() => {
    if (loading) return;
    setError(null);
    setLoading(true);

    const existing = findFloatWindow();
    if (existing) {
      existing.style.display = 'block';
      patchCloseBehavior(existing);
      setLoading(false);
      return;
    }

    const botUrl = `${WECHAT_BOT_BASE}?isFloat=true&robotName=${encodeURIComponent(
      t('common.wechatAssistant')
    )}`;

    ensureScriptLoaded()
      .then(() => {
        const init = (window as any)?._FLOAT_WINDOWA_INIT_;
        if (typeof init !== 'function') {
          throw new Error('wechat init function missing');
        }

        init(botUrl);

        // 等待浮窗插入后再补丁关闭逻辑
        setTimeout(() => {
          const container = findFloatWindow();
          if (container) {
            patchCloseBehavior(container);
          }
        }, 200);
      })
      .catch(() => setError(t('common.wechatAssistantError')))
      .finally(() => setLoading(false));
  }, [loading, t]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {error && (
        <div className="bg-red-50 text-red-700 text-xs px-3 py-2 rounded shadow">
          {error}
        </div>
      )}
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed"
        aria-label={t('common.wechatAssistant')}
      >
        <span className="text-lg">💬</span>
        <span className="text-sm font-semibold">
          {loading ? t('common.wechatAssistantLoading') : t('common.wechatAssistant')}
        </span>
      </button>
    </div>
  );
}

