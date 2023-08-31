#  Image组件

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

## 基础用法
基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。
```tsx
import React from "react";
import { Image } from 'ashe-design';
const App = () => {
  const src = '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image src={src} width="100%" />
  </>
}
export default App;

```
## 加载中
Image 组件提供了默认的加载中提示，支持通过 loading 自定义内容。
```tsx
import React from "react";
import { Image } from 'ashe-design';
import { Loading } from 'ashe-design';
const App = () => {
  const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
      width="100"
      height="100"
    />
    <Image
      width="80"
      height="80"
      loading={<Loading className="nut-icon-loading" />}
    />
  </>
}
export default App;

```

## Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 图标名称或图片链接               | String | -                |
| color        | 图标颜色                         | String | -                |
| size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| tag          | HTML 标签                        | String | 'i'              |

## Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
