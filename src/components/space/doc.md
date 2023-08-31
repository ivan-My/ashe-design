#  Space间距
元素排列中保持相同的宽度。

##  基础用法

```tsx
import React from 'react'
import { Space } from 'ashe-design';
const App = () => {
  return (
    <Space >
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  )
}
export default App
```



## Props

| 参数         | 说明                    | 类型                                                                                         | 默认值              |
|--------------|-------------------------|--------------------------------------------------------------------------------------------|------------------|
| direction    | 间距方向  | 'vertical'｜ 'horizontal' |'horizontal' |
| align        |交叉轴对齐方式| 'start'｜'end'｜'center'｜'baseline' | -                
| justify | 主轴对齐方式 | 'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch' ｜ 'nutui-iconfont' | 
| onClick          | 点击事件  | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | -                |
| wrap          | 是否自动换行，仅在 horizontal 时有效  | boolean  / false                                                                           |                  |

## CSS 变量

| 属性             | 说明               | 默认值      |
| ---------------- | ------------------ | ----------- |
| --ashe-space-gap          | 间距大小           | `8px`       |
| --ashe-space-horizontal | 水平方向的间距大小 | `8px`   |
| --ashe-space-vertical   | 垂直方向的间距大小 | `8px`   |
