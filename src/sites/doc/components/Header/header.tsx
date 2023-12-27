import React, { useMemo, useState } from 'react'
import replace from 'react-string-replace'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Cell } from '@/components/cell/cell'
import { Input } from '@/components/input/input'
import { nav } from '@/config.json'
import { black, github, white } from './svg'
import { navList } from './config'
import './header.scss'

// @ts-ignore
const data = nav.flatMap((item) => item.packages.filter((item) => item.name))

function matchElementsWithA(input: string) {
    if (input == '') return
    return data.filter((element) => {
        const lowerName = element.name.toLowerCase() // 获取对象中的"name"字段并转换为小写
        const lowerInput = input.toLowerCase()
        return lowerName.includes(lowerInput) // 检查"name"字段是否包含输入
    })
}

const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [val, setValue] = useState('')
    const [searchValue, setSearchValue] = useState([])
    const [theme, setTheme] = useState(false)
    const locationKey = useMemo(() => {
        return pathname.includes('resource')
            ? 'resource'
            : pathname.includes('components')
            ? 'components'
            : null
    }, [pathname])

    const onChange = (e: string) => {
        const data: any = matchElementsWithA(e)
        setValue(e)
        setSearchValue(data)
    }
    const onCell = (item: any) => {
        navigate(`/components/${item.name.toLocaleLowerCase()}`)
        setSearchValue([])
        setValue('')
    }
    const HighlightedText = (item: any, highlight: string) => {
        const highlightedText = replace(
            item.name,
            new RegExp(`(${highlight})`, 'gi'),
            (match) => <span className="highlighted">{match}</span>
        )
        return (
            <>
                <span style={{ marginRight: '5px' }}>{item.cName}</span>
                {highlightedText.map((item: any, index) => (
                    <span key={index}>{item}</span>
                ))}
            </>
        )
    }

    const onSwitch = () => {
        setTheme(!theme)
        if (theme) {
            document.body.removeAttribute('ashe-theme')
        } else {
            document.body.setAttribute('ashe-theme', 'dark')
        }
    }
    const renderNav = () => {
        return (
            <ul>
                {navList.map((item) => {
                    const isActive = locationKey === item.key
                    if (item.key == 'theme') {
                        return (
                            <li onClick={() => onSwitch()} key={item.key}>
                                {theme ? black() : white()}
                            </li>
                        )
                    }
                    if (item.key == 'github') {
                        return (
                            <li key={item.key}>
                                <a
                                    href="https://github.com/ivan-My/ashe-design"
                                    target="_blank"
                                >
                                    {github()}
                                </a>
                            </li>
                        )
                    }

                    return (
                        <li key={item.key}>
                            <div
                                onClick={() => {
                                    if (!isActive) {
                                        navigate(item.path)
                                    }
                                }}
                                className={isActive ? 'active' : ''}
                            >
                                {item.name}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    const renderSearchValue = () => {
        if (!searchValue || searchValue.length === 0) {
            return null
        }
        return (
            <div className={'ashe-search-panel'}>
                <Cell title={`搜索到${searchValue.length}个结果`} style={{}} />
                {searchValue.map((item: any, index: number) => {
                    return (
                        <Cell
                            title={HighlightedText(item, val)}
                            key={index}
                            onClick={() => onCell(item)}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <div className={'ashe-header'}>
            <div className="ashe-header-logo">
                <Link to={'/'}>Ashe design</Link>
            </div>
            <div className={'ashe-search'}>
                <Input
                    defaultValue={val}
                    placeholder={'在 Ashe中搜索'}
                    onChange={(e) => onChange(e)}
                />
                {renderSearchValue()}
            </div>
            <div className="ashe-header-nav">{renderNav()}</div>
        </div>
    )
}

export default Header
