import React, { Suspense } from 'react'

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @param data
 * @returns element
 */
const lazyLoad = (
    Comp: React.LazyExoticComponent<any>,
    data?: any
): React.ReactNode => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Comp {...data} />
        </Suspense>
    )
}

export default lazyLoad
