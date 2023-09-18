import React, { useState, useEffect } from 'react'
import { Infiniteloading } from './infiniteloading'
import './demo.scss'

const InfiniteScrollDemo = () => {
    const [defultList, setDefultList] = useState<string[]>([])
    const [customList, setCustomList] = useState<string[]>([])
    const [refreshList, setRefreshList] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [customHasMore, setCustomHasMore] = useState(true)
    const [refreshHasMore, setRefreshHasMore] = useState(true)

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

    const refreshLoadMore = (done: () => void) => {
        setTimeout(() => {
            const curLen = refreshList.length
            for (let i = curLen; i < curLen + 10; i++) {
                refreshList.push(`${i}`)
            }
            if (refreshList.length >= 30) {
                setRefreshHasMore(false)
            } else {
                setRefreshList([...refreshList])
            }
            done()
        }, 500)
    }

    const customLoadMore = (done: () => void) => {
        setTimeout(() => {
            const curLen = customList.length
            for (let i = curLen; i < curLen + 10; i++) {
                customList.push(`${i}`)
            }
            if (customList.length >= 30) {
                setCustomHasMore(false)
            } else {
                setCustomList([...customList])
            }
            done()
        }, 500)
    }

    const refresh = (done: () => void) => {
        setTimeout(() => {
            console.log('刷新成功')
            done()
        }, 1000)
    }
    const init = () => {
        for (let i = 0; i < 10; i++) {
            defultList.push(`${i}`)
            customList.push(`${i}`)
            refreshList.push(`${i}`)
        }
        setDefultList([...defultList])
        setCustomList([...customList])
        setRefreshList([...refreshList])
    }
    return (
        <>
            <div className="content">
                <h4>上拉加载更多</h4>
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

                <h4>上拉加载更多</h4>
                <ul className="infiniteUl" id="refreshScroll">
                    <Infiniteloading
                        pullIcon="JD"
                        containerId="refreshScroll"
                        useWindow={false}
                        isOpenRefresh
                        hasMore={refreshHasMore}
                        onLoadMore={refreshLoadMore}
                        onRefresh={refresh}
                    >
                        {refreshList.map((item, index) => {
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
