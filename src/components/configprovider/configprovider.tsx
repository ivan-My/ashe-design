import React, {
    createContext,
    CSSProperties,
    FunctionComponent,
    useMemo,
} from 'react'

import { camelToSnake } from '@/utils/camel-to-snake'

export interface ConfigProviderProps {
    theme?: Record<string, string>

    [key: string]: any
}

const defaultProps = {} as ConfigProviderProps

const ConfigContext = createContext<ConfigProviderProps | null>(null)

function convertThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
    const cssVars: Record<string, string | number> = {}
    Object.keys(themeVars).forEach((key) => {
        cssVars[`--${camelToSnake(key)}`] = themeVars[key]
    })
    return cssVars
}

export const ConfigProvider: FunctionComponent<
    Partial<ConfigProviderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { children, ...config } = { ...defaultProps, ...props }
    const theme = config.theme || {}
    const style = useMemo<CSSProperties | undefined>(
        () => convertThemeVarsToCSSVars(theme),
        [theme]
    )
    return (
        <ConfigContext.Provider
            value={{
                ...config,
            }}
        >
            <div style={style}> {children}</div>
        </ConfigContext.Provider>
    )
}

ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'AsheConfigProvider'
