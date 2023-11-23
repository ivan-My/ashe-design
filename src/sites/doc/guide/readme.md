## 快速上手


```tsx !!
npm install ashe-design --save

yarn add ashe-design

pnpm add ashe-design

```


## 使用

```tsx 
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

ashe-design 默认支持基于 ES modules 的 tree shaking，对于 JS 部分，直接引入 import { Button } from '@nutui/ashe-design' 就会有按需加载的效果。仅样式不是按需导入的，因此只需按需导入样式即可。

## WebPack
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

## 安装插件

使用 `babel-plugin-import` 自动加载 `css/scss` 文件

```tsx !!

npm install babel-plugin-import --save-dev

``` 
在 .babelrc 或 babel.config.js 中添加配置：
```tsx
{
  plugins: [
    [
      "import",
      {
        "libraryName": "ashe-design",
        "libraryDirectory": "dist/esm",
        "style": true,
        "camel2DashComponentName": false
      },
      'ashe-design'
    ]
  ]
}
```


## Vite 

Vite 构建工具，使用 vite-plugin-imp 实现按需引入。由于 vite 本身已按需导入组件库，因此仅样式不是按需导入的，只需按需导入样式即可。

## 安装插件
```tsx !!
npm install vite-plugin-imp --save-dev
```

在 vite.config 中添加配置：
```tsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
export default defineConfig({
  plugins: [
    react(),
   vitePluginImp({
      libList: [
        {
          libName: 'ashe-design',
          style: (name) => {
            return `ashe-design/dist/esm/${name}/style/css`
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        }
      ]
    })
  ],
});

```