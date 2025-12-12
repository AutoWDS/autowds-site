import Link from 'next/link';

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐙</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Octopus Crawler
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition">功能特性</Link>
            <Link href="/#use-cases" className="text-gray-600 hover:text-gray-900 transition">使用场景</Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition">价格</Link>
            <Link href="/learn" className="text-purple-600 font-semibold">教程</Link>
            <a href="https://autowds.dtiku.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">云服务</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            学习中心
          </h1>
          <p className="text-xl text-gray-600">
            从入门到精通，掌握 Octopus Crawler 的所有功能
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🚀 快速开始</h2>
          <p className="text-purple-100 mb-6">5 分钟学会使用 Octopus Crawler</p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: '安装插件', desc: '在浏览器扩展商店安装' },
              { step: '2', title: '打开网页', desc: '访问要采集的目标网站' },
              { step: '3', title: '点选元素', desc: '点击页面元素创建规则' },
              { step: '4', title: '导出数据', desc: '运行任务并导出结果' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">{item.step}</div>
                <div className="font-semibold mb-1">{item.title}</div>
                <div className="text-sm text-purple-100">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">教程分类</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: '基础教程',
              icon: '📚',
              tutorials: [
                '安装和配置插件',
                '创建第一个采集任务',
                '理解选择器和规则',
                '数据导出和保存',
                '常见问题解决'
              ]
            },
            {
              category: '进阶技巧',
              icon: '🎓',
              tutorials: [
                '处理动态加载内容',
                '自动翻页和滚动',
                '处理登录和验证',
                '使用正则表达式',
                '数据清洗和转换'
              ]
            },
            {
              category: '实战案例',
              icon: '💼',
              tutorials: [
                '采集电商商品信息',
                '抓取新闻文章',
                '收集招聘信息',
                '监控价格变化',
                '批量下载图片'
              ]
            },
            {
              category: '自动化操作',
              icon: '🤖',
              tutorials: [
                '录制操作流程',
                '表单自动填写',
                '批量操作执行',
                '定时任务设置',
                '条件判断和循环'
              ]
            },
            {
              category: 'API 使用',
              icon: '⚙️',
              tutorials: [
                'API 接口介绍',
                '认证和授权',
                '创建采集任务',
                '获取采集结果',
                'Webhook 集成'
              ]
            },
            {
              category: '最佳实践',
              icon: '⭐',
              tutorials: [
                '提高采集效率',
                '避免被反爬虫',
                '数据质量保证',
                '性能优化技巧',
                '安全和隐私'
              ]
            }
          ].map((cat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-200">
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.category}</h3>
              <ul className="space-y-2">
                {cat.tutorials.map((tutorial, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                      {tutorial}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">视频教程</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '5分钟快速入门', duration: '5:23', views: '12.5K' },
              { title: '采集电商数据实战', duration: '15:47', views: '8.3K' },
              { title: '高级选择器技巧', duration: '12:15', views: '6.7K' },
              { title: '自动化操作录制', duration: '10:32', views: '5.9K' },
              { title: 'API 接口使用指南', duration: '18:20', views: '4.2K' },
              { title: '反爬虫应对策略', duration: '14:55', views: '9.1K' }
            ].map((video, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>⏱️ {video.duration}</span>
                    <span>👁️ {video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">常见问题</h2>
        <div className="space-y-4">
          {[
            {
              q: '如何处理需要登录的网站？',
              a: '先手动登录网站，然后再使用插件进行采集。插件会自动使用当前浏览器的登录状态。'
            },
            {
              q: '为什么有些动态内容采集不到？',
              a: '可以尝试增加等待时间，让页面完全加载后再进行采集。在高级设置中可以配置等待时间。'
            },
            {
              q: '如何避免被网站封禁？',
              a: '建议设置合理的采集间隔，不要过于频繁地请求。同时可以使用代理IP和随机User-Agent。'
            },
            {
              q: '支持哪些数据导出格式？',
              a: '支持 Excel (.xlsx)、CSV、JSON、XML 等多种格式，可以根据需要选择。'
            },
            {
              q: '免费版有什么限制？',
              a: '免费版每天可以采集 100 条数据，最多创建 3 个采集任务。升级到专业版可以解除所有限制。'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                <span className="text-purple-600 mr-2">Q:</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 ml-6">
                <span className="text-blue-600 mr-2">A:</span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            还有问题？
          </h2>
          <p className="text-xl text-purple-100 mb-6">
            加入我们的社区，获取更多帮助和支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition">
              加入社区
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              联系技术支持
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; 2024 Octopus Crawler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
