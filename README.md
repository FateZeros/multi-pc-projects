# multi-pc-projects

vue 多项目框架搭建，旨在抽离项目中的一些复用组件。

## 项目目标

- [x] 统一 UI 样式
- [x] 统一 eslint
- [x] 复用组件库
- [ ] 自定义项目布局
  - [ ] 常规布局
  - [ ] 常规布局 2
- [ ] 自定义路由 - 权限路由
- [ ] 按钮权限
- [ ] websocket

## 项目运行

```bash
yarn serve --page=<projectName>
```

### 项目相关配置

在 `src/pages/<porjectName>` 中进行配置:

1. 在 `main.js` 配置 `rem`,`antd-design-vue`, `permission`
2. 在 `config` 文件中作项目相关配置

## 项目相关截图

## 技术栈

- Vue、Vuex、Vue-router
- Sass 一款强化 css 的辅助工具，可以使用变量、混入等强大功能，可以使 css 更加优雅
- Eslint 代码检查
