#  InfiniteScroll组件

### 介绍

列表滚动到底部自动加载更多数据。

### 安装
```ts
import { Infiniteloading } from './infiniteloading'
```


### 基础用法


```tsx
import React, { useState, useEffect } from 'react'
import { Infiniteloading } from './infiniteloading'

const InfiniteScrollDemo = () => {
  const [defultList, setDefultList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  useEffect(() => {
    init()
  }, [])

  const loadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = defultList.length
      for (let i = curLen; i < curLen + 10; i++) {
        defultList.push(`${i}`)
      }
      if (defultList.length >= 50) {
        setHasMore(false)
      } else {
        setDefultList([...defultList])
      }
      done()
    }, 500)
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defultList.push(`${i}`)
    }
    setDefultList([...defultList])
  }

  return (
    <>
      <div className="demo">
        <ul className="infiniteUl" id="scroll">
          <Infiniteloading
            containerId="scroll"
            useWindow={false}
            hasMore={hasMore}
            onLoadMore={loadMore}
            loadTxt={'正在加载更多的数据...'}
          >
            {defultList.map((item, index) => {
              return (
                <li className="infiniteLi" key={index}>
                  {item}
                </li>
              )
            })}
          </Infiniteloading>
        </ul>
      </div>
    </>
  )
}
export default InfiniteScrollDemo
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| hasMore         | 是否还有更多数据               | Boolean | `true`                |
| threshold         | 距离底部多远加载 | Number | `200`               |
| useWindow | 将滚动侦听器添加到 window 否则侦听组件的父节点     | Boolean | `true` |
| useCapture          | 是否使用捕获模式 true 捕获 false 冒泡                        | Boolean | `false`            |
| containerId          | 在 useWindow 属性为 false 的时候，自定义设置节点ID                        | String | `''`            |
| loadMoreTxt          | “没有更多数”据展示文案                        | String | `'哎呀，这里是底部了啦'`            |
| isOpenRefresh        | 是否开启下拉刷新                         | Boolean | `false`                |
| pullIcon        | 下拉刷新                       | String | ''                |
| pullTxt        | 下拉刷新提示文案                         | String | `松手刷新`                |
| loadIcon        | 上拉加载                  | String | ''            |
| loadTxt        | 上拉加载提示文案                         | String | `加载中...`                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onLoadMore | 继续加载的回调函数 | done 函数，用于关闭加载中状态 |
| onScrollChange | 实时监听滚动高度 | 滚动高度 |
| onRefresh  | 下拉刷新事件回调 | done 函数，用于关闭加载中状态 |
