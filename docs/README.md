# 文档说明

## 添加新文档

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

## 文档分类

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

## 现有文档

- `installation` - 安装指南
- `getting-started` - 快速开始
