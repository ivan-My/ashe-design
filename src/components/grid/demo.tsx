import React from 'react'
import Grid from './index'
import './demo.scss'

const data = [
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
        title: '测试',
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
]

const GridDemo = () => {
    return (
        <>
            <div className=" content grid-content">
                <div className="title">基础用法</div>
                <Grid columns={3}>
                    <Grid.Item text="测试">
                        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
                    </Grid.Item>
                    <Grid.Item text="测试">
                        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
                    </Grid.Item>
                    <Grid.Item text="测试">
                        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
                    </Grid.Item>
                </Grid>
                <div className="title">自定义行数</div>
                <Grid columns={4}>
                    {data.map((item, key) => {
                        return (
                            <Grid.Item
                                text={item.title}
                                key={key}
                                onClick={() => {
                                    console.log(key)
                                }}
                            >
                                <img src={item.img} alt="" />
                            </Grid.Item>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}

export default GridDemo
