import React, { FunctionComponent } from 'react'

export interface CollapseProps {}

const defaultProps = {} as CollapseProps
export const Collapse: FunctionComponent<
    Partial<CollapseProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { children } = { ...defaultProps, ...props }
    return <div className="ashe-collapse">Collapse</div>
}

Collapse.defaultProps = defaultProps
Collapse.displayName = 'AsheCollapse'
