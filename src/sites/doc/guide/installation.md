## 快速上手

```bash
# npm
$ npm install ashe-design --save

# yarn
$ yarn add ashe-design

# pnpm
$ pnpm add ashe-design
```

## 使用

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import 'ashe-design/dist/style.css'
import { Button } from 'ashe-design';

ReactDOM.render(
  <div className="App">
    <Button >按钮</Button>
  </div>,
  document.getElementById("app")
);

```


## 按需引入

NutUI-React 默认支持基于 ES modules 的 tree shaking，对于 JS 部分，直接引入 import { Button } from '@nutui/nutui-react' 就会有按需加载的效果。仅样式不是按需导入的，因此只需按需导入样式即可。

## WebPack
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

## 安装插件

使用 `babel-plugin-import` 自动加载 `css/scss` 文件

```js
npm install babel-plugin-import --save-dev
```
在 .babelrc 或 babel.config.js 中添加配置：
```js
{
  // ...
  plugins: [
    [
      "import",
      {
        "libraryName": "ashe-design",
        "libraryDirectory": "dist/esm",
        "style": true,
        "camel2DashComponentName": false
      },
      'nutui-react'
    ]
  ]
}
```

在 webpack 配置中配置 sass-loader ，将 nutui-react 样式变量导入全局。

```javascript
// 给 sass-loader 传递选项
scss: {
    data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
}
```

## Vite 

Vite 构建工具，使用 vite-plugin-style-import 实现按需引入。由于 vite 本身已按需导入组件库，因此仅样式不是按需导入的，只需按需导入样式即可。

## 安装插件
```javascript
npm install vite-plugin-style-import --save-dev
```

在 vite.config 中添加配置：
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
      },
    },
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "@nutui/nutui-react",
          libraryNameChangeCase: "pascalCase",
          resolveStyle: (name) => {
            return `@nutui/nutui-react/dist/esm/${name}/style`
          },
        },
      ],
    }),
  ],
});

```