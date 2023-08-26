import React from 'react'
import Grid from './index'
import './demo.scss'

const data = [
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: '测试',
    img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
]

const GridDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Grid columns={3}>
          <Grid.Item text="测试">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
          </Grid.Item>
          <Grid.Item text="测试">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
          </Grid.Item>
          <Grid.Item text="测试">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
          </Grid.Item>
        </Grid>
        <h2>自定义行数</h2>
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
