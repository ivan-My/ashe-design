import React, {
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { EllipsisProps } from './interface'
import { withNativeProps } from '@/utils/native-props'

const classPrefix = `ashe-ellipsis`
const defaultProps = {
  content: '',
  direction: 'end',
  lineHeight: '20',
  rows: 1,
} as EllipsisProps
export const Ellipsis: FunctionComponent<
  Partial<EllipsisProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { content, direction, lineHeight, rows } = { ...defaultProps, ...props }
  let container: any = null
  let maxHeight = 0 // 当行的最大高度
  const root = useRef(null)
  const [exceeded, setExceeded] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const ellipsis = useRef<any>()
  useLayoutEffect(() => {
    if (content) {
      createContainer()
    }
  }, [content])

  const createContainer = () => {
    if (!root.current) return
    const originStyle = window.getComputedStyle(root.current)
    container = document.createElement('div')
    const styleNames: string[] = Array.prototype.slice.apply(originStyle)
    styleNames.forEach((name) => {
      container.style.setProperty(name, originStyle.getPropertyValue(name))
    })
    container.style.position = 'fixed'
    container.style.left = '999999px'
    container.style.top = '999999px'
    container.style.zIndex = '-1000'
    container.style.height = 'auto'
    container.style.minHeight = 'auto'
    container.style.maxHeight = 'auto'
    container.style.textOverflow = 'clip'
    container.style.whiteSpace = 'normal'
    container.style.webkitLineClamp = 'unset'
    container.style.display = 'block'

    const lineH = pxToNumber(
      originStyle.lineHeight === 'normal' ? lineHeight : originStyle.lineHeight
    )

    maxHeight = Math.floor(
      lineH * (Number(rows) + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom)
    )
    container.innerText = content
    document.body.appendChild(container)
    calcEllipse()
    document.body.removeChild(container)
  }
  const calcEllipse = () => {
    if (container.offsetHeight <= maxHeight) {
      setExceeded(false)
    } else {
      setExceeded(true)
      const end = content.length
      const middle = Math.floor((0 + end) / 2)
    }
  }

  const pxToNumber = (value: string | null | number) => {
    if (!value) return 0
    const match = (value as string).match(/^\d*(\.\d*)?/)
    return match ? Number(match[0]) : 0
  }
  return withNativeProps(
    props,
    <div className={classPrefix} ref={root}>
      {content}
    </div>
  )
}

Ellipsis.defaultProps = defaultProps
Ellipsis.displayName = 'AsheEllipsis'
