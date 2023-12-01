import React from 'react'
import { Image } from './image'
import { Loading } from '../loading/loading'
import Grid from '../grid'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
const ImageDemo = () => {
    return (
        <div className="content">
            <div className="title">基础用法</div>
            <Image src={src} height={100} width={100} />

            <div className="title">填充模式</div>
            <Grid>
                {fits.map((item, key) => {
                    return (
                        <Grid.Item text={item} key={key}>
                            <Image
                                src={src}
                                fit={item}
                                height={100}
                                width={100}
                            />
                        </Grid.Item>
                    )
                })}
            </Grid>
            <div className="title">圆形图片</div>
            <Grid>
                {fits.map((item, key) => {
                    return (
                        <Grid.Item text={item} key={key}>
                            <Image
                                src={src}
                                fit={item}
                                height={100}
                                width={100}
                                radius="50%"
                            />
                        </Grid.Item>
                    )
                })}
            </Grid>
            <div className="title">加载中提示</div>
            <Grid>
                <Grid.Item text="默认">
                    <Image height={100} width={100} lazy />
                </Grid.Item>
                <Grid.Item text="错误">
                    <Image height={100} width={100} src="1.png" />
                </Grid.Item>
                <Grid.Item text="自定义">
                    <Image
                        height={100}
                        width={100}
                        lazy
                        loading={<Loading />}
                    />
                </Grid.Item>
            </Grid>
            <div className="title">图片懒加载</div>
            <Grid columns={2}>
                {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((item, index) => {
                    return (
                        <Grid.Item key={item}>
                            <Image height={100} width={100} src={src} lazy />
                        </Grid.Item>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ImageDemo
