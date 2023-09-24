# Image组件

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 基础用法

基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

```tsx
import React from "react";
import { Image } from 'ashe-design';

const App = () => {
    const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
    return <>
        <Image alt="大法" src={src} height={100} width={100} />
    </>
}
export default App;

```

### 填充模式

通过 fit 属性可以设置图片填充模式，等同于原生的 object-fit 属性，可选值见下方表格。

```tsx
import React from "react";
import { Image } from 'ashe-design';

const App = () => {
    const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
    return <>
        <Image
            src={src}
            width="100"
            height="100"
            fit="contain"
        />
    </>
}
export default App;
```

## 自定义加载中

Image 组件提供了默认的加载中提示，支持通过 loading 自定义内容。

```tsx
import React from "react";
import { Image } from 'ashe-design';
import { Loading } from 'ashe-design';

const App = () => {
    const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
    return <>
        <Image
            src={src}
            width="100"
            height="100"
            loading={<Loading className="ashe-icon-loading" />}
        />
    </>
}
export default App;

```

## Props

| 属性       | 说明                             | 类型                        | 默认值      |
|----------|--------------------------------|---------------------------|----------|
| src      | 图片链接                           | `string`                  | `-`      |
| fit      | 图片填充模式，等同于原生的 object-fit 属性    | `ImageFit`                | `fill`   |
| position | 图片位置，等同于原生的 object-position 属性 | `ImagePosition`           | `center` |
| alt      | 替代文本                           | `string`                  | `-`      |
| width    | 宽度，默认单位`px`                    | `string`                  | `-`      |
| height   | 高度，默认单位`px`                    | `string`                  | `-`      |
| radius   | 圆角大小                           | `string`  \|  `number`    | `-`      |
| error    | 是否展示图片加载失败                     | `boolean \| ReactNode`    | `true`   |
| loading  | 是否展示加载中图片                      | `boolean \| ReactNode`    | `true`   |
| lazy     | 是否为懒加载图片                       | `boolean`                 | `false`  |
| onClick  | 点击图片时触发                        | `(e: MouseEvent) => void` | `-`      |
| onLoad   | 图片加载完后触发                       | `() => void`              | `-`      |
| onError  | 图片加载失败后触发                      | `() => void`              | `-`      |

### ImageFit 图片填充模式

| 属性         | 说明                          |
|------------|-----------------------------|
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来      |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                |
| none       | 保持图片原有尺寸                    |
| scale-down | 取 none 或 contain 中较小的一个     |

### ImagePosition 图片位置

| 属性     | 说明   |
|--------|------|
| center | 居中对齐 |
| top    | 顶部对齐 |
| right  | 右侧对齐 |
| bottom | 底部对齐 |
| left   | 左侧对齐 |