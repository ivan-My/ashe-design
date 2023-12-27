import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import ReactDOM from 'react-dom'
import { QRCodeCanvas } from 'qrcode.react'
import './index.scss'
import { getComponentName } from '@/sites/doc/utils/util'

export interface CodePopoverProps {
    text?: React.ReactNode
    popoverClass?: string
}

export default function CodePopover(
    props: PropsWithChildren<CodePopoverProps>
) {
    const { text, children, popoverClass = '' } = props
    const url = location.origin + '/react/demo.html#/' + getComponentName()
    const domRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState<[number, number]>([0, 0])
    const [visible, setVisible] = useState(false)

    const updatePosition = useCallback(() => {
        const rect = domRef.current?.getBoundingClientRect()
        const { left = 0, width = 0, bottom = 0 } = rect || {}
        setPosition([left + width / 2, bottom])
    }, [])

    useEffect(() => {
        if (visible) {
            updatePosition()
            window.addEventListener('scroll', updatePosition)
        }
        return () => {
            if (visible) {
                window.removeEventListener('scroll', updatePosition)
            }
        }
    }, [visible])

    function renderPopover() {
        return ReactDOM.createPortal(
            visible ? (
                <div
                    className={`home-code-popover ${popoverClass}`}
                    style={{ left: position[0], top: position[1] }}
                >
                    <div className="home-code-popover-content">
                        {text}
                        {url && <QRCodeCanvas value={url} className="code" />}
                    </div>
                </div>
            ) : null,
            document.body
        )
    }
    return (
        <div
            className={`home-code-popover-inner`}
            ref={domRef}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {renderPopover()}
        </div>
    )
}
