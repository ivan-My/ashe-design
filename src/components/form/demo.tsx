import * as React from 'react'
import { Form } from './form'
import Input from '../input'

const customValidator = (rule: any, value: string) => {
  return /^\d+$/.test(value)
}
const initValue = {
  username: 'aaa',
  age: 'bbbb',
}
const FormDemo = () => {
  const [form] = Form.useForm()
  console.log(form)

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Form
          onFinish={(obj: object) => {
            return console.log(obj)
          }}
          initialValues={initValue}
          form={form}
        >
          <Form.Item label="姓名" name="username">
            <Input
              className="nut-input-text"
              placeholder="请输入姓名"
              type="text"
            />
          </Form.Item>
          <Form.Item label="姓名" name="age">
            <Input
              className="nut-input-text"
              placeholder="请输入年龄"
              type="text"
            />
          </Form.Item>
          <input type="submit" value="提交" />
          <input type="reset" value="重置表单数据" />
          <div
            onClick={() => {
              form.resetFields()
            }}
          >
            清空
          </div>
        </Form>
      </div>
    </>
  )
}

export default FormDemo
