// 文档配置和导航结构
export interface DocItem {
  slug: string;
  title: {
    zh: string;
    en: string;
  };
}

export interface DocSection {
  title: {
    zh: string;
    en: string;
  };
  items: DocItem[];
}

export const docsConfig: DocSection[] = [
  {
    title: {
      zh: '快速开始',
      en: 'Getting Started'
    },
    items: [
      {
        slug: 'installation',
        title: {
          zh: '安装指南',
          en: 'Installation'
        }
      },
      {
        slug: 'getting-started',
        title: {
          zh: '快速入门',
          en: 'Getting Started'
        }
      }
    ]
  },
  // 可以继续添加更多分类
  // {
  //   title: {
  //     zh: '核心功能',
  //     en: 'Core Features'
  //   },
  //   items: [
  //     {
  //       slug: 'visual-selection',
  //       title: {
  //         zh: '可视化选择',
  //         en: 'Visual Selection'
  //       }
  //     }
  //   ]
  // }
];
