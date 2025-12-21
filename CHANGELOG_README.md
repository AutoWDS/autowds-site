# Changelog 页面使用说明

## 概述

已为 Octopus Crawler 网站添加了一个专门的 changelog（更新日志）页面，用于展示插件的版本更新记录。该实现遵循 [Keep a Changelog](https://keepachangelog.com/) 规范，使用标准的 markdown 文件格式。

## 文件结构

```
autowds-backend/site/
├── CHANGELOG.md                     # 英文版更新日志
├── CHANGELOG.zh.md                  # 中文版更新日志
└── src/
    ├── app/[lang]/changelog/
    │   └── page.tsx                 # Changelog 页面组件
    ├── utils/
    │   └── changelog-parser.ts      # Markdown 解析工具
    └── i18n/locales/
        ├── zh.json                  # 中文翻译（页面文本）
        └── en.json                  # 英文翻译（页面文本）
```

## 功能特性

- **标准格式**：遵循 [Keep a Changelog](https://keepachangelog.com/) 和 [Common Changelog](https://common-changelog.org/) 规范
- **多语言支持**：支持中文和英文两种语言的独立 markdown 文件
- **版本分类**：自动识别 major（重大更新）、minor（功能更新）、patch（修复更新）、unreleased（未发布）
- **变更分类**：支持 Added、Changed、Fixed、Removed、Deprecated、Security 六种标准变更类型
- **响应式设计**：适配桌面和移动设备
- **统一导航**：与网站其他页面保持一致的导航栏
- **版本链接**：支持 GitHub 比较链接

## Changelog 格式规范

### 基本结构

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 新功能描述

### Changed
- 改进功能描述

## [2.1.0] - 2024-12-20

### Added
- 具体的新增功能描述

### Changed
- 具体的改进描述

### Fixed
- 具体的修复描述

### Removed
- 具体的移除功能描述

### Deprecated
- 即将弃用的功能描述

### Security
- 安全相关的修复

[Unreleased]: https://github.com/user/repo/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/user/repo/compare/v2.0.0...v2.1.0
```

### 支持的变更类型

- **Added**：新增的功能或特性
- **Changed**：对现有功能的改进或修改
- **Deprecated**：即将在未来版本中移除的功能
- **Removed**：已移除的功能或特性
- **Fixed**：修复的 bug 或问题
- **Security**：安全相关的修复

## 如何添加新的版本记录

### 1. 编辑 Markdown 文件

**英文版** (`CHANGELOG.md`)：
```markdown
## [2.2.0] - 2024-12-25

### Added
- New feature description
- Another new feature

### Changed
- Improved feature description

### Fixed
- Fixed issue description
```

**中文版** (`CHANGELOG.zh.md`)：
```markdown
## [2.2.0] - 2024-12-25

### 新增
- 新功能描述
- 另一个新功能

### 变更
- 改进功能描述

### 修复
- 修复问题描述
```

### 2. 版本号规范

遵循 [语义化版本](https://semver.org/) 规范：
- **Major (X.0.0)**：重大版本更新，可能包含破坏性变更
- **Minor (X.Y.0)**：功能版本更新，添加新功能但保持向后兼容
- **Patch (X.Y.Z)**：补丁版本更新，主要是 bug 修复

### 3. 添加比较链接（可选）

在文件末尾添加版本比较链接：
```markdown
[2.2.0]: https://github.com/user/repo/compare/v2.1.0...v2.2.0
```

## 自动化建议

可以考虑集成以下工具来自动化 changelog 管理：

1. **conventional-changelog**：基于 Git 提交信息自动生成 changelog
2. **standard-version**：自动化版本发布和 changelog 生成
3. **GitHub Actions**：自动化发布流程

## 页面访问

- 中文版：`/zh/changelog`
- 英文版：`/en/changelog`

## 导航集成

Changelog 链接已添加到以下页面的导航栏中：
- 首页 (`/[lang]/page.tsx`)
- 学习中心 (`/[lang]/learn/page.tsx`)
- 文档页面 (`/[lang]/docs/[slug]/page.tsx`)

## 技术实现

### Markdown 解析器

`src/utils/changelog-parser.ts` 提供了完整的 changelog markdown 解析功能：

- 解析版本标题和日期
- 自动识别版本类型（major/minor/patch/unreleased）
- 解析变更分类和内容
- 提取版本比较链接

### 页面组件

`src/app/[lang]/changelog/page.tsx` 实现了：

- 服务端渲染（SSG）
- 多语言支持
- 响应式设计
- 版本徽章和图标
- 统一的页面布局

## 样式说明

页面使用了与网站其他部分一致的设计风格：
- 渐变背景
- 卡片式布局
- 版本徽章颜色编码（红色=major，蓝色=minor，绿色=patch，紫色=unreleased）
- 图标化的变更类型
- 响应式设计

## 维护建议

1. **定期更新**：每次发布新版本时及时更新 changelog
2. **保持一致**：中英文版本内容保持同步
3. **遵循规范**：严格按照 Keep a Changelog 格式编写
4. **详细描述**：提供足够的上下文信息，让用户理解变更的影响
5. **链接引用**：为重要的 issue 或 PR 添加链接引用