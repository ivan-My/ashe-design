import React, { useState } from 'react'
import { Cell } from '../cell/cell'
import { Loading } from '../loading/loading'
import { List } from './list'

const App = () => {
    const [list, setList] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)

    const loadMore = (done: () => void) => {
        setTimeout(() => {
            const curLen = list.length
            for (let i = curLen; i < curLen + 15; i++) {
                list.push(`${i}`)
            }
            if (list.length >= 100) {
                setHasMore(false)
            } else {
                setList([...list])
            }
            done()
        }, 1500)
    }

    return (
        <div className="content">
            <div className="title">上拉加载更多</div>
            <List
                hasMore={hasMore}
                onLoadMore={loadMore}
                loadTxt={<Loading>加载中</Loading>}
            >
                {list.map((item, index) => {
                    return <Cell key={index} title={item} />
                })}
            </List>
        </div>
    )
}

export default App
