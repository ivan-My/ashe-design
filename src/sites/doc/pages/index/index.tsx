import React from 'react'
import { Link } from 'react-router-dom'
const Index = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                textAlign: 'center',
                fontSize: '48px',
                lineHeight: '400px',
            }}
        >
            <Link to={'/components/readme'}>欢迎使用ashe-design</Link>
        </div>
    )
}

export default Index
