import * as React from 'react'
import { Form } from './form'
import { Input } from '../input/input'

const customValidator = (rule: any, value: string) => {
  return /^\d+$/.test(value)
}
const FormDemo = () => {
  const [form] = Form.useForm()
  return (
    <>
      <div className="demo">
        <h6>基础用法</h6>
        <Form>
          <Form.Item label="姓名" name="username">
            <Input placeholder="请输入姓名" type="text" />
          </Form.Item>
          <Form.Item label="年龄" name="age">
            <Input placeholder="请输入年龄" type="text" />
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default FormDemo
