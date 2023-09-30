import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import { Mask } from '@/components/ashe.react'
import { render } from '@/utils/render'
import { DialogComponent, DialogProps } from './interface'

const classPrefix = 'ashe-dialog'
const defaultProps = {} as DialogProps

const BaseDialog: ForwardRefRenderFunction<unknown, Partial<DialogProps>> = (
    props,
    ref
) => {
    const { children } = { ...defaultProps, ...props }
    const [visible, setVisible] = useState(true)
    return (
        <div className={classPrefix}>
            <Mask visible={visible} onClick={() => setVisible(false)}>
                <div className={`${classPrefix}__wrapper`}>
                    <div className={`${classPrefix}__content`}>这里是正文</div>
                </div>
            </Mask>
        </div>
    )
}

export const Dialog: DialogComponent = forwardRef(BaseDialog) as DialogComponent

Dialog.show = function () {
    const element = document.createElement('div')
    document.body.appendChild(element)
    render(<BaseDialog />, element)
}

Dialog.defaultProps = defaultProps
Dialog.displayName = 'AsheDialog'
