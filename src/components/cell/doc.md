# Cell组件

## 基础用法

```tsx

import React from 'react'
import { Loading, Cell } from 'ashe-design'

const CellDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <Cell title="我是标题" />
                <Cell title="我是标题" desc="我是秒啊的" extra="我是最右边的" />
                <Cell title="我是标题" desc="我是秒啊的" extra={<Loading />} />
            </div>
        </>
    )
}

export default CellDemo

```

## Props

| 参数           | 说明                         | 类型     | 默认值              |
|--------------|----------------------------|--------|------------------|
| title        | 图标名称或图片链接                  | String | -                |
| desc         | 图标颜色                       | String | -                |
| extra        | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标             | String | 'nutui-iconfont' |
| tag          | HTML 标签                    | String | 'i'              |

## Events

| 事件名   | 说明      | 回调参数         |
|-------|---------|--------------|
| click | 点击图标时触发 | event: Event |
