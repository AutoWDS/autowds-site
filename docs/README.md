# 八爪鱼爬虫文档 / Octopus Crawler Documentation

欢迎使用八爪鱼爬虫！这是一款功能强大的Chrome浏览器数据采集扩展插件。

Welcome to Octopus Crawler! A powerful Chrome browser data collection extension plugin.

## 📚 文档目录 / Documentation Index

### 入门指南 / Getting Started

- [简介 / Introduction](./introduction.zh.md) | [English](./introduction.en.md)
- [安装指南 / Installation](./installation.zh.md) | [English](./installation.en.md)
- [快速开始 / Getting Started](./getting-started.zh.md) | [English](./getting-started.en.md)
- [基本概念 / Basic Concepts](./basic-concepts.zh.md) | [English](./basic-concepts.en.md)

### 核心功能 / Core Features

- [智能采集 / Intelligent Collection](./intelligent-collection.zh.md) | [English](./intelligent-collection.en.md)
- [可视化规则开发 / Visual Rule Development](./visual-rule-development.zh.md) | [English](./visual-rule-development.en.md)
- [管理界面 / Management Interface](./management-interface.zh.md) | [English](./management-interface.en.md)
- [数据导出 / Data Export](./data-export.zh.md) | [English](./data-export.en.md)

### 高级功能 / Advanced Features

- [定时任务 / Scheduled Tasks](./scheduled-tasks.zh.md) | [English](./scheduled-tasks.en.md)
- [批量采集 / Batch Collection](./batch-collection.zh.md) | [English](./batch-collection.en.md)
- [数据处理 / Data Processing](./data-processing.zh.md) | [English](./data-processing.en.md)
- [三方集成 / Third-party Integration](./integrations.zh.md) | [English](./integrations.en.md)

### 参考文档 / Reference

- [元素选择器 / Element Selectors](./selectors.zh.md) | [English](./selectors.en.md)
- [翻页配置 / Pagination](./pagination.zh.md) | [English](./pagination.en.md)
- [动作指令 / Actions](./actions.zh.md) | [English](./actions.en.md)

### 帮助与支持 / Help & Support

- [常见问题 / FAQ](./faq.zh.md) | [English](./faq.en.md)
- [故障排除 / Troubleshooting](./troubleshooting.zh.md) | [English](./troubleshooting.en.md)
- [实战教程 / Tutorials](./tutorials.zh.md) | [English](./tutorials.en.md)

## 🚀 快速链接 / Quick Links

- 官方网站 / Official Website: https://autowds.dtiku.cn
- 技术支持 / Support: support@dtiku.cn

## 📝 文档说明 / Documentation Notes

本文档采用中英双语编写，每个主题都有对应的中文(.zh.md)和英文(.en.md)版本。

This documentation is written in both Chinese and English, with corresponding .zh.md and .en.md versions for each topic.

---

## 开发者说明 / Developer Notes

### 添加新文档 / Adding New Documentation

1. 在 `site/docs/` 目录下创建新的 Markdown 文件
2. 文件命名格式：`文档名.语言.md`，例如：
   - `pagination.zh.md` (中文版)
   - `pagination.en.md` (英文版)

3. 在 `site/src/config/docs.ts` 中添加文档配置：

```typescript
{
  slug: 'pagination',  // 文件名（不含语言后缀）
  title: {
    zh: '自动翻页',
    en: 'Auto Pagination'
  }
}
```

### 文档分类 / Documentation Categories

在 `site/src/config/docs.ts` 中可以添加新的分类：

```typescript
{
  title: {
    zh: '高级功能',
    en: 'Advanced Features'
  },
  items: [
    // 文档列表
  ]
}
```
