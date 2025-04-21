##### stylelint@16 依赖配置
1.安装 Stylelint 及其 标准配置
```
pnpm install --save-dev stylelint stylelint-config-standard
```
2.在项目的根目录中创建 .stylelintrc.json 配置文件，并写入以下内容：
```
{
    "extends": [
        "stylelint-config-standard",
    ]
}
```
3.让 Stylelint 处理项目中的所有 CSS 文件：
```
npx stylelint "**/*.css"
```
4.安装scss或less依赖

(Vite 同时提供了对 .scss，.sass，.less，.styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖)
```
# .scss
pnpm add -D sass-embedded

# .less
pnpm add -D less

# .styl 和 .stylus
pnpm add -D stylus

```

5、安装scss、html解析器

postcss-html 提取 HTML 中的样式块，postcss-scss 解析 SCSS 语法。
```shell
pnpm add -D postcss-scss postcss-html stylelint-config-recommended-vue stylelint-config-html
```
配置
```json
{
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue"
    ]
}
```

6、package.json配置脚本
```json
{
  "scripts": {
    "css": "npx stylelint \"**/*.{css,scss,vue}\" --fix"
  }
}
```