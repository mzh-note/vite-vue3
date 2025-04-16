### Vue@3.5.13 + TypeScript@5.7.2 + Vite@6.2.0 + Vant@4.9.19 + Pinia@3.0.2 + eslint@9.24.0

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

从 ESLint v9.0.0 开始，ESLint 正式放弃对这些版本的 Node.js 的支持。ESLint 现在支持以下版本的 Node.js：

Node.js v18.18.0 及更高版本

Node.js v20.9.0 及更高版本

Node.js v21 及更高版本

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
```
