import React from 'react'
import Markdown from '@/sites/doc/components/Markdown'

const LoadCon = (props: any) => {
    console.log(props)
    return <Markdown element={props.element} />
}
export default LoadCon
