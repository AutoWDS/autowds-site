# 快速开始指南

## 🚀 项目启动

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 3. 构建生产版本
```bash
npm run build
npm start
```

## 📝 Changelog 管理

### 快速验证
```bash
# 验证所有 changelog 文件
npm run changelog:test-all
```

### 单独命令
```bash
# 验证格式
npm run changelog:validate

# 测试解析器
npm run changelog:test

# 测试集成
npm run changelog:test-integration
```

## 🔧 开发工作流

### 日常开发
```bash
# 1. 启动开发服务器
npm run dev

# 2. 代码检查
npm run lint

# 3. 验证 changelog（如果有修改）
npm run changelog:validate
```

### 发布前检查
```bash
# 完整检查流程
npm run lint && npm run changelog:test-all && npm run build
```

## 📁 重要文件

### Changelog 文件
- `CHANGELOG.md` - 英文版更新日志
- `CHANGELOG.zh.md` - 中文版更新日志

### 配置文件
- `package.json` - 项目配置和脚本
- `next.config.js` - Next.js 配置
- `tailwind.config.js` - Tailwind CSS 配置

### 组件文件
- `src/components/Header.tsx` - 页头组件
- `src/components/Footer.tsx` - 页脚组件
- `src/utils/changelog-parser.ts` - Changelog 解析器

## 🌐 页面访问

### 中文版
- 主页：http://localhost:3000/zh
- 教程：http://localhost:3000/zh/learn
- 更新日志：http://localhost:3000/zh/changelog

### 英文版
- 主页：http://localhost:3000/en
- 教程：http://localhost:3000/en/learn
- 更新日志：http://localhost:3000/en/changelog

## 🛠️ 常用操作

### 添加新版本到 Changelog

1. **编辑文件**
   ```bash
   # 编辑英文版
   vim CHANGELOG.md
   
   # 编辑中文版
   vim CHANGELOG.zh.md
   ```

2. **验证格式**
   ```bash
   npm run changelog:validate
   ```

3. **测试解析**
   ```bash
   npm run changelog:test-all
   ```

### 组件开发

1. **创建新组件**
   ```bash
   # 在 src/components/ 目录下创建
   touch src/components/NewComponent.tsx
   ```

2. **使用组件**
   ```tsx
   import NewComponent from '@/components/NewComponent';
   
   export default function Page() {
     return <NewComponent />;
   }
   ```

### 样式修改

1. **全局样式**
   ```bash
   # 编辑全局 CSS
   vim src/app/globals.css
   ```

2. **Tailwind 配置**
   ```bash
   # 修改 Tailwind 配置
   vim tailwind.config.js
   ```

## 🐛 故障排除

### 开发服务器启动失败
```bash
# 清理缓存
rm -rf .next node_modules
npm install
npm run dev
```

### Changelog 解析错误
```bash
# 检查格式
npm run changelog:validate

# 查看详细错误
node scripts/validate-changelog.js
```

### 构建失败
```bash
# 检查代码
npm run lint

# 检查类型
npx tsc --noEmit

# 重新构建
rm -rf .next
npm run build
```

## 📚 更多文档

- [README.md](./README.md) - 项目总览
- [CHANGELOG_README.md](./CHANGELOG_README.md) - Changelog 详细说明
- [NPM_SCRIPTS.md](./NPM_SCRIPTS.md) - NPM 脚本说明
- [COMPONENT_REFACTOR.md](./COMPONENT_REFACTOR.md) - 组件重构说明

## 💡 提示

- 使用 `npm run changelog:test-all` 作为提交前的快速检查
- 开发时保持 `npm run dev` 运行以获得热重载
- 修改 changelog 后务必运行验证命令
- 使用组件化开发避免重复代码