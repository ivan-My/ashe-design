import React, { useState } from 'react'
import replace from 'react-string-replace'
import { Link, NavLink, useMatch, useNavigate } from 'react-router-dom'
import { Cell, Input } from '@/components/ashe.react'
import { nav } from '@/config.json'
import './header.scss'

const navList = [
    {
        name: '首页',
        path: '/guide/installation',
    },
    {
        name: '组件',
        path: '/components/readme',
    },
    {
        name: 'hooks',
        path: '/hooks/hook1',
    },
]

const data = nav.flatMap((item) => item.packages.filter((item) => item.name))

function matchElementsWithA(input: string) {
    if (input == '') return
    return data.filter((element) => {
        const lowerName = element.name.toLowerCase() // 获取对象中的"name"字段并转换为小写
        const lowerInput = input.toLowerCase()
        return lowerName.includes(lowerInput) // 检查"name"字段是否包含输入
    })
}

const Header = ({ searchValue, setSearchValue }: any) => {
    const match = useMatch('/components/*')
    const navigate = useNavigate()
    const [val, setValue] = useState('')

    const onChange = (e: string) => {
        const data = matchElementsWithA(e)
        setValue(e)
        setSearchValue(data)
    }
    const onCell = (item: any) => {
        navigate(`/components/${item.name}`)
        setSearchValue([])
        window.scroll({ top: 0 })
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

    const renderSearchValue = () => {
        if (!searchValue) {
            return null
        }

        return (
            <div className={'search-panel'}>
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

    const renderNav = () => {
        return navList.map((item, key) => {
            let status = false
            if (item.name === '组件' && match) {
                status = true
            }
            return (
                <li key={key}>
                    <NavLink to={item.path} className={status ? 'active' : ''}>
                        {item.name}
                    </NavLink>
                </li>
            )
        })
    }
    return (
        <div className={'doc-header'}>
            <div className="header-logo">
                <Link to={'/'}>Ashe design</Link>
            </div>
            <div className={'search'}>
                <Input
                    defaultValue={val}
                    placeholder={'搜索组件'}
                    onChange={(e) => onChange(e)}
                />
                {renderSearchValue()}
            </div>
            <div className="header-nav">
                <ul>
                    {renderNav()}
                    <li>
                        <a
                            href="https://github.com/ivan-My/ashe-design"
                            target="_blank"
                        >
                            {' '}
                            github
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
