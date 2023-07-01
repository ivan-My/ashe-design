import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { animated } from '@react-spring/web'
import classNames from 'classnames'
import { useGesture } from '@use-gesture/react'
import { withNativeProps } from '@/utils/native-props'

const classPrefix = 'ashe-elevator'

interface ElevatorData {
  name: string
  id: number | string
  [key: string]: string | number
}
export interface ElevatorProps {
  height: number | string
  list: any[]
  sticky: boolean
  showKeys: boolean
  floorKey: string
  onClickIndex: (key: string) => void
}
const defaultProps = {
  height: '200px',
  list: [] as any[],
  sticky: false,
  showKeys: true,
  floorKey: 'title',
} as ElevatorProps

export const Elevator: FunctionComponent<
  Partial<ElevatorProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { height, list, sticky, floorKey, showKeys, onClickIndex } = {
    ...defaultProps,
    ...props,
  }
  const [scrollY, setScrollY] = useState(0)
  const [currentKey, setCurrentKey] = useState('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const listview = useRef<HTMLDivElement>(null)
  const initData = {
    anchorIndex: 0,
    listHeight: [] as number[],
    listGroup: [] as Element[],
    scrollY: 0,
  }
  const state = useRef(initData)

  const calculateHeight = () => {
    let height = 0
    state.current.listHeight.push(height)
    for (let i = 0; i < state.current.listGroup.length; i++) {
      const item = state.current.listGroup[i]
      height += item.clientHeight
      state.current.listHeight.push(height)
    }
  }

  const bind = useGesture({
    onDragStart: ({ target, offset }) => {
      console.log('target=', target)
    },
    onDragEnd: ({ offset }) => {
      console.log('offset=', offset)
    },
  })
  const setListGroup = () => {
    if (listview.current) {
      const els = listview.current.querySelectorAll('.ashe-elevator_list_item')
      els.forEach((el: Element) => {
        if (el != null && !state.current.listGroup.includes(el)) {
          state.current.listGroup.push(el)
        }
      })
    }
  }
  const listViewScroll = (e: Event) => {
    const { listHeight } = state.current
    if (!listHeight.length) {
      // 2.根据元素的clientHeight计算出所有的值
      calculateHeight()
    }
    const target = e.target as Element
    const { scrollTop } = target
    state.current.scrollY = scrollTop
    setScrollY(scrollTop)
    for (let i = 0; i < listHeight.length - 1; i++) {
      const height1 = listHeight[i]
      const height2 = listHeight[i + 1]
      // 3.通过scrollTop,对比是否在前一个和后一个元素的clientHeight之间
      if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
        setCurrentIndex(i)
        return
      }
    }
    console.log('22222')
    // setCurrentIndex(listHeight.length - 2)
  }
  const handleClickIndex = (key: string, index: number) => {
    setCurrentIndex(index)
    onClickIndex && onClickIndex(key)
  }
  useEffect(() => {
    if (listview.current) {
      // 1, 获取到列表所有元素
      setListGroup()
      listview.current.addEventListener('scroll', listViewScroll)
    }
  }, [listview])

  return withNativeProps(
    props,
    <div className="ashe-elevator">
      {sticky && scrollY > 0 ? (
        <div className={`${classPrefix}_list_fixed`}>
          <span className={`${classPrefix}_list_fixed_title`}>
            {list[currentIndex][floorKey]}
          </span>
        </div>
      ) : null}
      <div
        className={`${classPrefix}_list`}
        style={{ height: Number.isNaN(+height) ? height : `${height}px` }}
      >
        <div className={`${classPrefix}_list_inner`} ref={listview}>
          {list.map((item: any, idx: number) => {
            return (
              <div className={`${classPrefix}_list_item`} key={idx}>
                <div className={`${classPrefix}_list_item_code`}>
                  {item.title}
                </div>
                <>
                  {item.list.map((subitem: ElevatorData) => {
                    return (
                      <div key={subitem.id} onClick={() => {}}>
                        {subitem.name}
                      </div>
                    )
                  })}
                </>
              </div>
            )
          })}
        </div>
      </div>
      {showKeys && (
        <div className={`${classPrefix}_bars`}>
          <animated.div
            className={`${classPrefix}_bars_inner`}
            // {...bind()}
            style={{ touchAction: 'pan-y' }}
          >
            {list.map((item, index) => {
              return (
                <div
                  className={classNames({
                    [`${classPrefix}_bars_inner_item`]: true,
                    [`${classPrefix}_bars_inner_item--active`]:
                      item[floorKey] === list[currentIndex][floorKey],
                  })}
                  key={index}
                  data-index={index}
                  onClick={() => handleClickIndex(item[floorKey], index)}
                >
                  {item[floorKey]}
                </div>
              )
            })}
          </animated.div>
        </div>
      )}
    </div>
  )
}

Elevator.defaultProps = defaultProps
Elevator.displayName = 'AsheElevator'
