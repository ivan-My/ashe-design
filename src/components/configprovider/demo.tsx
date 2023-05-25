import React from 'react'
import { ConfigProvider } from './configprovider'
import { Button } from '../button/button'

const ConfigProviderDemo = () => {
  const theme = {
    asheButtonDefaultColor: 'red',
  }
  return (
    <div>
      <ConfigProvider theme={theme}>
        <Button>按钮</Button>
      </ConfigProvider>
    </div>
  )
}

export default ConfigProviderDemo
