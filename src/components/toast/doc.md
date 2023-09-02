# Toast轻提示

轻提示组件，支持各个场景下调用方法。

## 基础用法

```tsx
import React from 'react'
import { Toast } from 'ashe-design'

export default ()=> {
  return (
    <div onClick={() => Toast.text('文字提示')}>文字提示</div>
  )
}
```

## 自定义高度
```tsx
import React from 'react'
import { Toast } from 'ashe-design'

export default ()=> {
  return (
    <div  onClick={  ()=>Toast.text('文字提示', {
          center: false,
          bottom: '30%',
        })
    }>文字提示</div>
  )
}


```

## API

## Props

| 参数           | 说明                         | 类型     | 默认值              |
|--------------|----------------------------|--------|------------------|
| name         | 图标名称或图片链接                  | String | -                |
| color        | 图标颜色                       | String | -                |
| size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标             | String | 'nutui-iconfont' |
| tag          | HTML 标签                    | String | 'i'              |

## Events

| 事件名   | 说明      | 回调参数         |
|-------|---------|--------------|
| click | 点击图标时触发 | event: Event |
