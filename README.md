#### Vue@3.5.13 + TypeScript@5.7.2 + Vite@6.2.0 + Vant@4.9.19 + Pinia@3.0.2 + eslint@9.24.0

从 ESLint v9.0.0 开始，ESLint 支持以下版本的 Node.js： Node.js v18.18.0及更高版本、 Node.js v20.9.0及更高版本、 Node.js v21 及更高版本

##### 项目介绍：

node版本：v18.20.3 或更高版本

包管理器：pnpm

vant官网：https://vant.pro/vant/#/zh-CN
##### 项目启动：
```shell
pnpm install

pnpm run dev

pnpm run build

pnpm run lint
```

项目安装涉及主要依赖有：
```shell
# 安装 pinia
pnpm add pinia

# pinia 持久化
pnpm add pinia-plugin-persistedstate

# 安装 vant
pnpm add vant

# ESLint 核心
pnpm add -D eslint @eslint/js

# Vue3 支持
pnpm add -D eslint-plugin-vue vue-eslint-parser

# TypeScript 支持
pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier 集成
pnpm add -D prettier eslint-plugin-prettier eslint-config-prettier

# 初始化 eslint配置文件
npx eslint --init

# 检测 eslint
pnpm run lint

# 新增 .prettierignore 添加忽略文件，package.json配置脚本
npx prettier . --write

# 修复
npx prettier . --write --fix

# 安装path设置别名alias
pnpm add -D @types/node
```

脚手架指定使用 pnpm 包管理器，含 Prettier + ESLint + Husky + lint-staged + Commitlint  代码规范检查 ，git 代码提交需符合指定格式
