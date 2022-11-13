import * as React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../button'
import '@testing-library/jest-dom'

describe('Button Snap', () => {
  it('render Button -- props disabled', () => {
    const component = render(<Button disabled={true}>按钮</Button>)
    expect(component).toMatchSnapshot()
  })
  it('render Button -- props color', () => {
    const component = render(<Button color="red">按钮</Button>)
    expect(component).toMatchSnapshot()
  })
  it('render Button -- props className', () => {
    const component = render(<Button className="btn">按钮</Button>)
    expect(component).toMatchSnapshot()
  })
})
