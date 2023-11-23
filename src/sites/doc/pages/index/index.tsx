import React from 'react'
import { Link } from 'react-router-dom'
const Index = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                textAlign: 'center',
                fontSize: '48px',
                lineHeight: '300px',
            }}
        >
            <Link to={'/components/readme'}>开始使用</Link>
        </div>
    )
}

export default Index
