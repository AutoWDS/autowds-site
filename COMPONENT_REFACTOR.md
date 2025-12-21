# 组件重构说明

## 概述

为了减少代码重复和提高可维护性，我们将页头和页脚抽取成了可复用的组件。

## 重构内容

### 新增组件

#### 1. Header 组件 (`src/components/Header.tsx`)

**功能特性：**
- 统一的页头布局和样式
- 支持当前页面高亮显示
- 智能导航链接处理（首页使用锚点链接，其他页面使用完整路径）
- 多语言支持
- 响应式设计

**Props：**
```typescript
interface HeaderProps {
  lang: Locale;
  currentPage?: 'home' | 'learn' | 'changelog' | 'docs';
}
```

**使用示例：**
```tsx
<Header lang={params.lang} currentPage="changelog" />
```

#### 2. Footer 组件 (`src/components/Footer.tsx`)

**功能特性：**
- 统一的页脚布局和样式
- 支持完整版和简化版两种模式
- 多语言支持
- 包含联系信息和导航链接

**Props：**
```typescript
interface FooterProps {
  lang: Locale;
  variant?: 'full' | 'simple';
}
```

**使用示例：**
```tsx
<Footer lang={params.lang} />              // 完整版
<Footer lang={params.lang} variant="simple" />  // 简化版
```

### 更新的页面

1. **主页** (`src/app/[lang]/page.tsx`)
   - 使用 `<Header lang={params.lang} currentPage="home" />`
   - 使用 `<Footer lang={params.lang} />`

2. **Changelog 页面** (`src/app/[lang]/changelog/page.tsx`)
   - 使用 `<Header lang={params.lang} currentPage="changelog" />`
   - 使用 `<Footer lang={params.lang} />`

3. **学习中心** (`src/app/[lang]/learn/page.tsx`)
   - 使用 `<Header lang={params.lang} currentPage="learn" />`

4. **文档页面** (`src/app/[lang]/docs/[slug]/page.tsx`)
   - 使用 `<Header lang={params.lang} currentPage="docs" />`
   - 使用 `<Footer lang={params.lang} variant="simple" />`

## 重构收益

### 1. 代码复用
- **减少重复代码**：页头代码从 ~50 行减少到 1 行调用
- **页脚代码**：从 ~60 行减少到 1 行调用
- **总计减少**：约 400+ 行重复代码

### 2. 维护性提升
- **统一修改**：页头/页脚的修改只需在一个地方进行
- **一致性保证**：所有页面自动保持一致的外观和行为
- **类型安全**：TypeScript 类型定义确保正确使用

### 3. 功能增强
- **智能导航**：根据当前页面自动调整导航链接行为
- **页面状态**：当前页面在导航中高亮显示
- **灵活配置**：支持不同的页脚变体

### 4. 开发效率
- **快速开发**：新页面只需一行代码即可添加页头/页脚
- **易于测试**：组件化使得单元测试更容易
- **代码审查**：更少的代码意味着更快的审查

## 技术细节

### Header 组件特性

1. **当前页面检测**
   ```tsx
   const getLinkClassName = (page: string) => {
     const baseClass = "text-gray-600 hover:text-gray-900 transition...";
     const activeClass = "text-primary-600 font-medium transition...";
     return currentPage === page ? activeClass : baseClass;
   };
   ```

2. **智能链接处理**
   - 首页：使用锚点链接 (`#features`, `#pricing`)
   - 其他页面：使用完整路径 (`/${lang}#features`)

3. **响应式导航**
   - 桌面端显示完整导航
   - 移动端可扩展为汉堡菜单（未来功能）

### Footer 组件特性

1. **变体支持**
   - `full`：完整的四列布局，包含所有链接和信息
   - `simple`：简化版，只显示版权信息

2. **动态链接**
   - 自动根据语言生成正确的链接路径
   - 支持外部链接和内部路由

## 使用指南

### 添加新页面

1. 导入组件：
   ```tsx
   import Header from '@/components/Header';
   import Footer from '@/components/Footer';
   ```

2. 使用组件：
   ```tsx
   export default function NewPage({ params }: { params: { lang: Locale } }) {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
         <Header lang={params.lang} currentPage="new" />
         
         {/* 页面内容 */}
         
         <Footer lang={params.lang} />
       </div>
     );
   }
   ```

### 扩展导航

如需添加新的页面类型到导航高亮：

1. 更新 `HeaderProps` 类型：
   ```tsx
   currentPage?: 'home' | 'learn' | 'changelog' | 'docs' | 'new-page';
   ```

2. 在 `getLinkClassName` 函数中处理新页面

### 自定义页脚

如需特殊的页脚布局，可以：

1. 添加新的 `variant` 类型
2. 在 Footer 组件中实现对应的布局
3. 或者直接传递自定义内容（未来功能）

## 性能影响

- **Bundle 大小**：略有增加（~2KB），但通过减少重复代码实际上是净减少
- **渲染性能**：无影响，组件化不会影响渲染性能
- **开发体验**：显著提升，热重载更快，编译错误更清晰

## 未来改进

1. **移动端菜单**：添加汉堡菜单支持
2. **主题切换**：支持深色/浅色主题
3. **面包屑导航**：在页头添加面包屑
4. **搜索功能**：在页头集成搜索框
5. **A/B 测试**：支持不同的页头/页脚变体