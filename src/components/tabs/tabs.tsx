import React, { FC, useEffect, useRef, useState } from 'react'
import { TabsProps } from './interface'
import { TabPane } from '@/components/tabs/tabpane'

const classPrefix = 'ashe-tabs'

const defaultProps = {
    active: 0,
} as TabsProps

function useRefs() {
    const refs = React.useRef<HTMLDivElement[]>([])
    const setRefs = React.useCallback(
        (index: number) => (el: HTMLDivElement) => {
            if (el) refs.current[index] = el
        },
        []
    )
    const reset = React.useCallback(() => {
        refs.current = []
    }, [])

    return [refs.current, setRefs as any, reset]
}

export const Tabs: FC<Partial<TabsProps>> & {
    TabPane: typeof TabPane
} = (props) => {
    const { active, children } = { ...defaultProps, ...props }
    const [value, setValue] = useState(active)

    const tabTitles = useRef<any[]>([])
    const [titleRefs, setTitleRefs] = useRefs()

    const getTitles = () => {
        const titles: any[] = []
        React.Children.forEach(children, (child: any, idx) => {
            if (React.isValidElement(child)) {
                const props: any = child?.props
                if (props?.title || props?.value) {
                    titles.push({
                        title: props.title,
                        value: props.value || idx,
                        disabled: props.disabled,
                        children: props.children,
                    })
                }
            }
        })
        tabTitles.current = titles
        return titles
    }
    const [lineTranslateLeft, setLineTranslateLeft] = useState<number>(0)

    useEffect(() => {
        const title = titleRefs?.[0]
        setLineTranslateLeft(title.offsetLeft + title.offsetWidth / 2)
    })
    getTitles()
    const handelChange = (index: number) => {
        const title = titleRefs?.[index]
        setLineTranslateLeft(title.offsetLeft + title.offsetWidth / 2)
        setValue(index)
    }

    return (
        <div className={classPrefix}>
            <div className={`${classPrefix}__wrap `}>
                {tabTitles &&
                    tabTitles.current.map((item, index) => {
                        return (
                            <div
                                ref={setTitleRefs(index)}
                                className={`${classPrefix}__tab  ${
                                    index === value && ' ashe-tabs--active'
                                }`}
                                key={index}
                                onClick={() => handelChange(index)}
                            >
                                <div className={`${classPrefix}__title`}>
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                <div
                    className={`${classPrefix}__line`}
                    style={{
                        transform: `translateX(${lineTranslateLeft}px) translateX(-50%)`,
                    }}
                />
            </div>

            <div className={`${classPrefix}_panes `}>
                {tabTitles &&
                    tabTitles.current.map((item, index) => {
                        if (index !== value) return null
                        return (
                            <div className={`${classPrefix}__pane`} key={index}>
                                {item.children}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

Tabs.defaultProps = defaultProps
Tabs.displayName = 'AsheTabs'
Tabs.TabPane = TabPane
