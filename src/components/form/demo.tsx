import * as React from 'react'
import { Input, Form } from '@/components/ashe.react.build'

const customValidator = (rule: any, value: string) => {
  return /^\d+$/.test(value)
}

const valueRangeValidator = (rule: any, value: string) => {
  return /^(\d{1,2}|1\d{2}|200)$/.test(value)
}
const FormDemo = () => {
  const [form] = Form.useForm()
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Form
          onFinish={(obj: object) => {
            console.log(obj)
          }}
          form={form}
        >
          <Form.Item
            label="姓名"
            name="username"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input
              className="nut-input-text"
              placeholder="请输入姓名"
              type="text"
            />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输年龄' }]}
          >
            <Input
              className="nut-input-text"
              placeholder="请输年龄"
              type="text"
            />
          </Form.Item>

          <Form.Item shouldUpdate>
            {(val: any) => {
              // console.log('age执行了/....')
              const age = val.age
              if (age === '18') {
                return <div>age执行了 18</div>
              }
              return <div>age执行了440000</div>
            }}
          </Form.Item>

          {/*<Form.Item*/}
          {/*  label="姓名"*/}
          {/*  name="username"*/}
          {/*  rules={[{ required: true, message: '请输入姓名' }]}*/}
          {/*>*/}
          {/*  <Input*/}
          {/*    className="nut-input-text"*/}
          {/*    placeholder="请输入姓名"*/}
          {/*    type="text"*/}
          {/*  />*/}
          {/*</Form.Item>*/}
          {/*<Form.Item*/}
          {/*  shouldUpdate={(prev: any, next: any) => {*/}
          {/*    return prev.username !== next.username*/}
          {/*  }}*/}
          {/*>*/}
          {/*  {(val: any) => {*/}
          {/*    const name = val.username*/}
          {/*    // console.log('username执行了/....')*/}
          {/*    if (name === '22') {*/}
          {/*      return <div> username22220000</div>*/}
          {/*    }*/}
          {/*    return <div>username440000</div>*/}
          {/*  }}*/}
          {/*  {(val: any) => {*/}
          {/*    const name = val.username*/}
          {/*    // console.log('username执行了/....')*/}
          {/*    if (name === '22') {*/}
          {/*      return <div> username 22220000</div>*/}
          {/*    }*/}
          {/*    return <div>username440000</div>*/}
          {/*  }}*/}
          {/*</Form.Item>*/}

          <input type="submit" value="提交" />
        </Form>
      </div>
    </>
  )
}

export default FormDemo
