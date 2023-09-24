# InfiniteScroll组件

### 介绍

列表滚动到底部自动加载更多数据。

### 安装

```ts
import { Infiniteloading } from './infiniteloading'
```

### 基础用法

```tsx
import React, { useEffect, useState } from 'react'

import { Cell, List } from 'ashe-design'

const App = () => {
    const [list, setList] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)

    const loadMore = (done: () => void) => {
        setTimeout(() => {
            const curLen = list.length
            for (let i = curLen; i < curLen + 10; i++) {
                list.push(`${i}`)
            }
            if (list.length >= 30) {
                setHasMore(false)
            } else {
                setList([...list])
            }
            done()
        }, 1500)
    }

    const init = () => {
        for (let i = 0; i < 10; i++) {
            list.push(`${i}`)
        }
        setList([...list])
    }
    useEffect(() => {
        setTimeout(init, 1500)
    }, [])
    return (
        <>
            <div className="content">
                <div className="title">上拉加载更多</div>
                <List hasMore={hasMore} onLoadMore={loadMore}>
                    {list.map((item, index) => {
                        return (
                            <Cell
                                className="infiniteLi"
                                key={index}
                                title={item}
                            />
                        )
                    })}
                </List>
            </div>
        </>
    )
}

export default App

```

## API

### Props

| 参数            | 说明                                  | 类型      | 默认值            |
|---------------|-------------------------------------|---------|----------------|
| hasMore       | 是否还有更多数据                            | Boolean | `true`         |
| threshold     | 距离底部多远加载                            | Number  | `200`          |
| useWindow     | 将滚动侦听器添加到 window 否则侦听组件的父节点         | Boolean | `true`         |
| useCapture    | 是否使用捕获模式 true 捕获 false 冒泡           | Boolean | `false`        |
| containerId   | 在 useWindow 属性为 false 的时候，自定义设置节点ID | String  | `''`           |
| loadMoreTxt   | “没有更多数”据展示文案                        | String  | `'哎呀，这里是底部了啦'` |
| isOpenRefresh | 是否开启下拉刷新                            | Boolean | `false`        |
| pullIcon      | 下拉刷新                                | String  | ''             |
| pullTxt       | 下拉刷新提示文案                            | String  | `松手刷新`         |
| loadIcon      | 上拉加载                                | String  | ''             |
| loadTxt       | 上拉加载提示文案                            | String  | `加载中...`       |

### Events

| 事件名            | 说明        | 回调参数              |
|----------------|-----------|-------------------|
| onLoadMore     | 继续加载的回调函数 | done 函数，用于关闭加载中状态 |
| onScrollChange | 实时监听滚动高度  | 滚动高度              |
| onRefresh      | 下拉刷新事件回调  | done 函数，用于关闭加载中状态 |
