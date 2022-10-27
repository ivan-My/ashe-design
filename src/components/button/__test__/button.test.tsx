import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../button'
import '@testing-library/jest-dom'

describe('Button Snap', () => {
  it('render GlButton -- props disabled', () => {
    const component = render(<Button color={'red'}>按钮</Button>)
    expect(component).toMatchSnapshot()
  })
})
