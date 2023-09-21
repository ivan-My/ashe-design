# Loading组件

## 介绍

Loading 加载中

## 基础用法

```tsx
import * as React from 'react'
import { Button, Cell, Loading } from 'ashe-design'

const App = () => {
    return <div>
        <Cell
            title={
                <div>
                    <Loading type="flash" size="mini" />
                    <Loading type="circle" />
                    <Loading type="rotate" />
                    <Loading type="change" />
                </div>
            }
        />
    </div>
}
export default App

```

## 与Mask遮罩结合使用

```tsx
import * as React from 'react'
import { Button, Loading } from 'ashe-design'

const App = () => {
    const [show, setShow] = React.useState(false)
    const WrapperStyle = {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return <div>
        <Button onClick={() => setShow(true)}>全屏显示</Button>
        <Mask visible={show} onClick={() => setShow(false)}>
            <div className="wrapper" style={WrapperStyle}>
                <Loading type="rotate" color="white" size={25}>
                            <span style={{ color: 'white', fontSize: '14px' }}>
                                加载中...
                            </span>
                </Loading>
            </div>
        </Mask>
    </div>
}
export default App

```

## Props

| 参数           | 说明                         | 类型      | 可选值              | 默认值   |
|--------------|----------------------------|---------|------------------|-------|
| show         | 是否显示加载动画                   | Boolean | --               | false |
| type         | 图标颜色                       | String  | -                |       |
| size         | 图标大小，如 '20px' '2em' '2rem' | String  | -                |       |
| class-prefix | 类名前缀，用于使用自定义图标             | String  | 'nutui-iconfont' |       |
| tag          | HTML 标签                    | String  | 'i'              |       |

## Events

| 事件名   | 说明      | 回调参数         |
|-------|---------|--------------|
| click | 点击图标时触发 | event: Event |
