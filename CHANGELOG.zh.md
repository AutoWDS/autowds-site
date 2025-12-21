# 更新日志

本项目的所有重要变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

## [未发布]

### 新增
- 多任务批量导出功能
- 采集进度实时显示

### 变更
- 采用更现代化的用户界面设计

## [2.1.0] - 2024-12-20

### 新增
- 批量导出功能，支持一键导出多个采集任务的数据
- 数据去重选项，可根据指定字段自动去除重复数据
- 采集进度实时显示，让用户随时了解采集状态

### 变更
- 优化了采集速度，提升 30% 的数据采集效率
- 改进了用户界面，采用更现代化的设计风格

### 修复
- 修复了在某些动态网页中元素选择不准确的问题
- 解决了大数据量导出时可能出现的内存溢出问题

## [2.0.0] - 2024-12-01

### 新增
- 全新的可视化规则编辑器，支持拖拽式操作
- 增加了 AI 智能识别功能，自动识别页面结构
- 新增团队协作功能，支持多人共享采集规则

### 变更
- 重构了核心采集引擎，大幅提升稳定性和性能
- 更新了用户界面，提供更直观的操作体验

### 移除
- 移除了旧版本的兼容模式，专注于现代浏览器支持

## [1.9.5] - 2024-11-15

### 修复
- 修复了 Chrome 扩展在最新版本中的兼容性问题
- 解决了定时任务在某些情况下无法正常执行的 bug
- 修复了导出 Excel 文件时中文乱码的问题

### 变更
- 优化了内存使用，减少了长时间运行时的内存占用

## [1.9.0] - 2024-10-30

### 新增
- 新增定时任务系统，支持自动化数据采集
- 支持自定义导出模板
- 增强的错误报告和调试工具

### 变更
- 改进了分页检测算法
- 更新扩展清单至 v3 版本，提升安全性

### 修复
- 修复了 AJAX 内容检测问题
- 解决了某些网站的 Cookie 处理问题

## [1.8.5] - 2024-10-15

### 修复
- 数据导出功能的关键安全修复
- 修复了长时间采集会话中的内存泄漏问题
- 解决了与基于 React 的网站的兼容性问题

### 变更
- 增强了大数据集处理性能
- 改进了错误消息，提供更好的用户指导

## [1.8.0] - 2024-09-28

### 新增
- 支持多标签页采集操作
- 新增数据验证和清理功能
- 集成云存储服务

### 变更
- 重新设计设置面板，提升可用性
- 改进元素选择器准确性

### 已弃用
- 旧版 API 接口（将在 v2.0.0 中移除）

## [1.7.0] - 2024-09-10

### 新增
- 浏览器扩展首次发布
- 基础网页采集功能
- 支持 Chrome、Firefox 和 Edge 浏览器
- CSV 和 JSON 导出格式
- 可视化元素选择工具

[未发布]: https://github.com/octopus-crawler/octopus-crawler/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.9.5...v2.0.0
[1.9.5]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.9.0...v1.9.5
[1.9.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.8.5...v1.9.0
[1.8.5]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.8.0...v1.8.5
[1.8.0]: https://github.com/octopus-crawler/octopus-crawler/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/octopus-crawler/octopus-crawler/releases/tag/v1.7.0