# Toast轻提示

轻提示组件，支持各个场景下调用方法。

## 基础用法

```tsx
import React from 'react'
import { Toast } from 'ashe-design'

export default () => {
  return (
    <div
      onClick={() =>
        Toast.show({
          content: '提示内容',
        })
      }
    >
      文字提示
    </div>
  )
}
```

## 自定义图标
```tsx
import React from 'react'
import { Toast,Loading } from 'ashe-design'

export default () => {
  return (
    <div
      onClick={() =>
        Toast.show({
          content: '加载中...',
          icon: <Loading show type="rotate" color={'white'} />,
        })
      }
    >
      文字提示
    </div>
  )
}
```

## 自定义位置
```tsx
import React from 'react'
import { Toast } from 'ashe-design'

export default () => {
  return (
    <div
      onClick={() =>
        Toast.show({
          content: '加载中...', 
          position: 'top',
        })
      }
    >
      顶部展示
    </div>
  )
}
```


## 自定义高度
```tsx
import React from 'react'
import { Toast } from 'ashe-design'

export default () => {
  return (
    <div
      onClick={() =>
        Toast.show({
          content: '加载中...',
          contentStyle: {
            top: '20%',
          }
        })
      }
    >
      顶部展示
    </div>
  )
}
```
## 背景不滚动
```tsx
import React from 'react'
import { Toast } from 'ashe-design'

export default () => {
  return (
    <div
      onClick={() =>
        Toast.show({
          content: '提示内容',
          lockScroll: true,
        })
      }
    >
      背景不滚动
    </div>``
  )
}
```



## Props

| 属性 | 说明 | 类型                                                             | 默认值             |
| --- | --- |----------------------------------------------------------------|-----------------|
| content | Toast文本内容 | string | React.ReactNode | - |
| duration | 展示时长（秒）<br>值为 0 时，toast 不会自动消失 | number                                                       | 1.5             |
| position | toast展示位置 | top \| center \| bottom                                  | center          |
| icon | 自定义标 | React.ReactNode | -               |
| contentStyle | 自定义内容区样式 | React.CSSProperties                                          | -               |
| lockScroll | 背景是否锁定 | boolean                                                      | false           |
| onClose | 关闭时触发的事件 | () => void                                                   | () => void      |

## Events

| 方法名    | 说明              | 参数 |
|--------|-----------------| --- |
| hiade  | 主动关闭显示中的`Toast` | `-` |


### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明                 | 默认值       |
| --- |--------------------|-----------|
| \--nutui-toast-text-font-size | toast内容文字大小      | 14px      |
| \--nutui-toast-font-color | toast文字颜色        | #fff      |
| \--nutui-toast-inner-padding | toast内容区padding值 | 12px 15px |
| \--nutui-toast-inner-bg-color | toast内容区背景色      | rgba(0, 0, 0, 0.8)    |
| \--nutui-toast-inner-border-radius | toast内容区圆角值      | 6px       |
| \ --ashe-toast-inner-top | toast所在位置        | 50%       |

