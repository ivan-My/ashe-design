# Tag
元素排列中保持相同的宽度。



## 基础用法

```tsx

import React from 'react';
import { Tag } from 'ashe-design';

 const App = () => {
  return (
    <div>
      <Tag>按钮1</Tag>
      <Tag>按钮2</Tag>
      <Tag>按钮3</Tag>
    </div>
  );
};
export default App;

```



## Props

| 属性 | 说明                       | 类型                                                                  | 默认值                            |
| --- |--------------------------|---------------------------------------------------------------------|--------------------------------|
| direction | 间距方向                     | ` vertical \|   horizontal`                                         | horizontal |
| align | 交叉轴对齐方式                  | `start \| end \|center \| baseline`                                 | `-`                            |
| justify | 主轴对齐方式                   | `start  \| end \| center \| between \| around \| evenly \| stretch` | `-`                            |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean / false`                                                   | `-`                            |



## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                | 默认值 | 描述 |
|-------------------| --- | --- |
| \--ashe-space-gap | `8px` | 间距大小 |