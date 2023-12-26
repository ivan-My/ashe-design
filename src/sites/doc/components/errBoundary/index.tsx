import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export const ErrBoundary = (props: any) => {
    const fallbackRender = ({ error }: any) => {
        return (
            <div role="alert">
                <p>组件错误</p>
                <pre style={{ color: 'red' }}>{error.message}</pre>
            </div>
        )
    }
    return (
        <ErrorBoundary fallbackRender={fallbackRender}>
            {props.children}
        </ErrorBoundary>
    )
}
