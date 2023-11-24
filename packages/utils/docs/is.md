# Grid宫格

用于分隔成等宽区块进行页面导航。

## 基础用法

```tsx 

import React from 'react'
import { Grid } from 'ashe-design'

export default () => {
    return (
        <Grid>
            <Grid.Item text="文字" />
            <Grid.Item text="文字" />
            <Grid.Item text="文字" />
        </Grid>
    )
}
```

## 自定义行数

```tsx
import React from 'react'
import { Grid } from 'ashe-design'

export default () => {
    return (
        <Grid columns={4}>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
            <Grid.Item text="文字"><Dongdong /></Grid.Item>
        </Grid>
    )
}

```

## Grid/Props

| 属性        | 说明              | 类型                   | 默认值      |
|-----------|-----------------|----------------------|----------|
| columns   | 列数              | _number_ \| string   | 3        |
| gap       | 格子之间的间距，默认单位为px | number \| string     | 0        |
| center    | 是否将格子内容居中显示     | boolean              | true     |
| square    | 是否将格子固定为正方形     | boolean              | false    |
| reverse   | 内容翻转            | boolean              | false    |
| direction | 格子内容排列的方向       | horizontal  vertical | vertical |
| onClick   | 宫格子项点击事件        | (index) => void      | -        |

`

## Grid.Item/Props

| 属性      | 说明      | 类型                        | 默认值 |
|---------|---------|---------------------------|-----|
| text    | 文字      | string   \|     ReactNode | -   |
| onClick | 点击格子时触发 | (event: Event) => void    | -   |

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/configprovider)。

| 名称                                | 说明     | 默认值          |
|-----------------------------------|--------|--------------|
| --ashe-grid-border-color          | 边框颜色   | #f5f6f7      |
| --ashe-grid-item-content-padding  | 内边距    | 16px 8px     |
| --ashe-grid-item-content-bg-color | 背景     | $white       |
| --ashe-grid-item-text-margin      | 外边距    | 8px          |
| --ashe-grid-item-text-color       | 文字颜色   | $gray1       |
| --ashe-grid-item-text-font-size   | 文字字体大小 | $font-size-1 |

