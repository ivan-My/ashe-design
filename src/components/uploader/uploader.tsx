import React, { FunctionComponent } from 'react'
import { UploaderProps } from './interface'

const classPrefix = 'ashe-uploader'
const defaultProps = {} as UploaderProps
export const Uploader: FunctionComponent<
    Partial<UploaderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { children } = { ...defaultProps, ...props }
    return <div className="ashe-uploader">Uploader</div>
}

Uploader.defaultProps = defaultProps
Uploader.displayName = 'AsheUploader'
