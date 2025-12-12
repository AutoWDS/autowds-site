import Link from 'next/link';

export default function Home() {
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
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">功能特性</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition">使用场景</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">价格</a>
            <Link href="/learn" className="text-gray-600 hover:text-gray-900 transition">教程</Link>
            <a href="https://autowds.dtiku.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">云服务</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
              立即安装
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            让网页数据采集
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              变得简单高效
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Octopus Crawler 是一款强大的浏览器扩展插件，无需编程即可实现网页数据抓取、自动化操作和流程录制
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:-translate-y-0.5">
              免费下载插件
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition">
              观看演示视频
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            支持 Chrome、Edge、Firefox 等主流浏览器 | 完全免费使用
          </p>
        </div>

        {/* Hero Image/Demo */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg shadow-inner p-6 min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🐙</div>
                <p className="text-lg">插件界面演示区域</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">强大的功能特性</h2>
            <p className="text-xl text-gray-600">一切为了让数据采集更简单</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: '可视化点选',
                description: '无需编写代码，通过点击页面元素即可创建采集规则，所见即所得'
              },
              {
                icon: '🔄',
                title: '自动翻页',
                description: '智能识别分页按钮，自动遍历所有页面，一键采集完整数据'
              },
              {
                icon: '📊',
                title: '多种导出格式',
                description: '支持导出为 Excel、CSV、JSON 等多种格式，满足不同需求'
              },
              {
                icon: '⚡',
                title: '高速采集',
                description: '多线程并发采集，智能去重，大幅提升数据采集效率'
              },
              {
                icon: '🎬',
                title: '操作录制',
                description: '录制浏览器操作流程，自动生成可重复执行的自动化脚本'
              },
              {
                icon: '🔐',
                title: '登录支持',
                description: '支持需要登录的网站，自动处理 Cookie 和 Session'
              },
              {
                icon: '🌐',
                title: '动态网页',
                description: '完美支持 Ajax、React、Vue 等动态加载的现代网页'
              },
              {
                icon: '📱',
                title: '定时任务',
                description: '设置定时采集任务，自动监控网页变化，及时获取最新数据'
              },
              {
                icon: '☁️',
                title: '云端同步',
                description: '采集规则云端保存，多设备同步，随时随地使用'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">适用场景</h2>
            <p className="text-xl text-gray-600">无论你是什么行业，都能找到适合的应用场景</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '电商数据监控',
                description: '监控竞品价格、销量、评价等信息，及时调整运营策略',
                examples: ['商品价格监控', '库存追踪', '评论分析', '销量统计']
              },
              {
                title: '市场调研分析',
                description: '快速收集行业数据，分析市场趋势，为决策提供数据支持',
                examples: ['行业报告采集', '竞品分析', '用户评价收集', '趋势分析']
              },
              {
                title: '内容聚合',
                description: '从多个网站采集新闻、文章、资讯，打造个性化内容平台',
                examples: ['新闻聚合', '文章采集', '图片下载', 'RSS 生成']
              },
              {
                title: '学术研究',
                description: '采集论文、专利、文献等学术资料，辅助科研工作',
                examples: ['论文数据采集', '引用分析', '专利检索', '数据整理']
              },
              {
                title: '招聘信息',
                description: '聚合各大招聘网站职位信息，快速找到心仪工作',
                examples: ['职位采集', '薪资分析', '公司信息', '行业趋势']
              },
              {
                title: '房产信息',
                description: '采集房源信息，分析房价走势，辅助购房决策',
                examples: ['房源采集', '价格监控', '区域分析', '历史数据']
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, i) => (
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">三步开始采集</h2>
            <p className="text-xl text-gray-600">简单易用，快速上手</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: '安装插件',
                description: '在浏览器扩展商店搜索 Octopus Crawler，一键安装'
              },
              {
                step: '02',
                title: '创建任务',
                description: '打开目标网页，点击页面元素，设置采集规则'
              },
              {
                step: '03',
                title: '导出数据',
                description: '运行采集任务，将数据导出为所需格式'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 text-white text-2xl font-bold rounded-full mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">选择适合你的方案</h2>
            <p className="text-xl text-gray-600">本地插件 + 云端服务，灵活满足不同需求</p>
          </div>

          {/* Local Plugin Pricing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">本地浏览器插件</h3>
            <p className="text-gray-600 text-center mb-8">在浏览器中直接运行，简单易用</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: '免费版',
                price: '¥0',
                period: '永久免费',
                features: [
                  '基础数据采集',
                  '每日 100 条数据',
                  '3 个采集任务',
                  '社区支持',
                  '基础导出格式'
                ],
                cta: '开始使用',
                popular: false
              },
              {
                name: '专业版',
                price: '¥99',
                period: '每月',
                features: [
                  '无限数据采集',
                  '无限采集任务',
                  '云端存储',
                  '定时任务',
                  '优先技术支持',
                  '高级导出选项',
                  'API 接口'
                ],
                cta: '立即购买',
                popular: true
              },
              {
                name: '企业版',
                price: '定制',
                period: '联系我们',
                features: [
                  '专业版所有功能',
                  '私有化部署',
                  '团队协作',
                  '专属客户经理',
                  '定制开发',
                  'SLA 保障'
                ],
                cta: '联系销售',
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    最受欢迎
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Cloud Service Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ☁️ 云端服务
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                升级到云端，解锁更强大的能力
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                24/7 运行，无需保持浏览器开启，更稳定、更快速、更强大
              </p>
            </div>

            {/* Cloud Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: '⚡',
                  title: '高速稳定',
                  description: '云端服务器高速网络，采集速度提升 10 倍'
                },
                {
                  icon: '🔄',
                  title: '24/7 运行',
                  description: '无需保持电脑开机，任务自动执行'
                },
                {
                  icon: '📊',
                  title: '大规模采集',
                  description: '支持百万级数据采集，无本地限制'
                },
                {
                  icon: '🌍',
                  title: '全球代理',
                  description: '提供全球代理 IP 池，避免封禁'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">本地 vs 云端对比</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 text-gray-900 font-semibold">功能特性</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-semibold">本地插件</th>
                      <th className="text-center py-4 px-6">
                        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                          云端服务
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: '采集速度', local: '普通', cloud: '高速（10x）' },
                      { feature: '运行方式', local: '需要开启浏览器', cloud: '24/7 云端运行' },
                      { feature: '数据规模', local: '受本地限制', cloud: '百万级无限制' },
                      { feature: '定时任务', local: '需要电脑开机', cloud: '自动执行' },
                      { feature: 'IP 池', local: '本地 IP', cloud: '全球代理 IP 池' },
                      { feature: '并发采集', local: '有限', cloud: '高并发' },
                      { feature: 'API 接口', local: '❌', cloud: '✅' }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 text-gray-900">{row.feature}</td>
                        <td className="py-4 px-6 text-center text-gray-600">{row.local}</td>
                        <td className="py-4 px-6 text-center text-purple-600 font-semibold">{row.cloud}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cloud Features */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">云服务核心功能</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: '🌍',
                    title: '全球代理 IP',
                    description: '提供全球多地区代理 IP，避免封禁，提高成功率'
                  },
                  {
                    icon: '⏰',
                    title: '智能调度',
                    description: '自动分配资源，智能调度任务，最大化采集效率'
                  },
                  {
                    icon: '📈',
                    title: '实时监控',
                    description: '实时查看任务状态，采集进度，异常告警'
                  },
                  {
                    icon: '💾',
                    title: '云端存储',
                    description: '数据自动保存到云端，支持在线预览和下载'
                  },
                  {
                    icon: '🔗',
                    title: 'API 接口',
                    description: '提供完整的 RESTful API，轻松集成到你的系统'
                  },
                  {
                    icon: '🔔',
                    title: '消息通知',
                    description: '任务完成、异常等事件及时通知，支持邮件、webhook'
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h5>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Pricing */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">云服务定价</h4>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    name: '入门版',
                    price: '¥199',
                    period: '每月',
                    features: [
                      '10,000 次请求/月',
                      '5 个并发任务',
                      '10GB 云端存储',
                      '基础代理 IP',
                      '邮件通知',
                      'API 访问'
                    ]
                  },
                  {
                    name: '专业版',
                    price: '¥599',
                    period: '每月',
                    features: [
                      '100,000 次请求/月',
                      '20 个并发任务',
                      '100GB 云端存储',
                      '高级代理 IP 池',
                      '多种通知方式',
                      'API + Webhook',
                      '优先技术支持'
                    ],
                    popular: true
                  },
                  {
                    name: '企业版',
                    price: '定制',
                    period: '联系我们',
                    features: [
                      '无限请求',
                      '无限并发',
                      '无限存储',
                      '专属代理 IP',
                      '私有化部署',
                      '专属客户经理',
                      'SLA 保障'
                    ]
                  }
                ].map((plan, index) => (
                  <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                        推荐
                      </div>
                    )}
                    <h5 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h5>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://autowds.dtiku.cn/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-lg font-semibold transition text-center ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg' 
                          : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {plan.popular ? '开始试用' : '选择方案'}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-2">所有云服务方案均提供 7 天免费试用</p>
                <p className="text-sm text-gray-500">年付享 8 折优惠</p>
              </div>
            </div>

            {/* Cloud CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-12 text-center">
              <h4 className="text-3xl font-bold text-white mb-4">
                准备好体验云端采集了吗？
              </h4>
              <p className="text-xl text-purple-100 mb-8">
                7 天免费试用，无需信用卡，随时取消
              </p>
              <a 
                href="https://autowds.dtiku.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                立即开始云端服务
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            加入数万用户，让数据采集变得简单高效
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition transform hover:-translate-y-1">
            免费下载 Octopus Crawler
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
              <p className="text-sm">让网页数据采集变得简单高效</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">功能特性</a></li>
                <li><a href="#pricing" className="hover:text-white transition">价格方案</a></li>
                <li><Link href="/cloud" className="hover:text-white transition">云服务</Link></li>
                <li><a href="#" className="hover:text-white transition">更新日志</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/learn" className="hover:text-white transition">使用教程</Link></li>
                <li><a href="#" className="hover:text-white transition">API 文档</a></li>
                <li><a href="#" className="hover:text-white transition">视频教程</a></li>
                <li><a href="#" className="hover:text-white transition">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">技术支持</a></li>
                <li><a href="#" className="hover:text-white transition">商务合作</a></li>
                <li><a href="#" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2024 Octopus Crawler. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
