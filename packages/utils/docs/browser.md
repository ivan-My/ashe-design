# Form 表单
用于数据录入、校验，支持输入框、单选框、复选框等类型。

## 基础用法


```tsx
import  React from "react";
import { Form, Input } from 'ashe-design'

const App = () => {
  return (
    <>
      <Form>
        <Form.Item label='姓名' name="username">
          <Input
            className="nut-input-text"
            placeholder='请输入姓名'
            type="text"
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```


## dependencies
```tsx

import * as React from 'react'
import { Input, Form } from 'ashe-design'

const App = () => {
  const [form] = Form.useForm()
  return (
    <>
      <div className="content">

        <Form
          onFinish={(obj: object) => {
            console.log(obj)
          }}
          form={form}
        >
          <Form.Item label="密码" name="pass1">
            <Input
              className="nut-input-text"
              placeholder="请输入密码"
              type="text"
            />
          </Form.Item>
          <Form.Item
            label="在此密码"
            name="pass2"
            dependencies={['pass1']}
            rules={[
              {
                required: true,
                message: '请输入密码22',
              },
              {
                validator: (rule: any, value: string) => {
                  return form.getFieldValue('pass1') === value
                },
                message: '两次输入密码不一致',
              },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder="请再次输入密码"
              type="text"
            />
          </Form.Item>
          <input type="submit" value="提交" />
        </Form>
      </div>
    </>
  )
}

export default App

```

## shouldUpdate
```tsx

import * as React from 'react'
import { Input, Form } from 'ashe-design'

const App = () => {
  const [form] = Form.useForm()
  return (
    <>
      <div className="content">

        <Form
          onFinish={(obj: object) => {
            console.log(obj)
          }}
          form={form}
        >
          <Form.Item label="姓名" name="text" >
            <Input
              placeholder="test"
              type="text"
              onChange={(e) => {
                console.log(e)
              }}
            />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输年龄' }]}
            noStyle
          >
            <Input
              placeholder="请输年龄"
              type="text"
            />
          </Form.Item>

          <Form.Item shouldUpdate noStyle>
            {(val: any) => {
              const age = val.age
              if (age === '18') {
                return <div>age执行了 18</div>
              }
              return <div>age执行了440000</div>
            }}
          </Form.Item>

          <Form.Item
            label="姓名"
            name="username"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input
              placeholder="请输入姓名"
              type="text"
            />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prev: any, next: any) => {
              return prev.username !== next.username
            }}
          >
            {(val: any) => {
              const name = val.username
              if (name === '22') {
                return <div> username22220000</div>
              }
              return <div>username440000</div>
            }}
          </Form.Item>
          <input type="submit" value="提交" />
        </Form>
      </div>
    </>
  )
}

export default App

```

## Form Props

| 参数           | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| from         | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建  | FormInstance | -                |
| color        | 图标颜色                         | String | -                |
| size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标     | String | 'nutui-iconfont' |
| tag          | HTML 标签                        | String | 'i'              |

## Form Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onFinish  | 校验成功后触发 | 表单数据 |
| onFinishFailed  | 任一表单项被校验失败后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |


## Form.Item Props

| 参数               | 说明                         | 类型             | 默认值  |
|--------------------|--------------------------------|------------------|---------|
| required           | 必填表单项 label 的红色星标 | boolean          | `false` |
| name               | 在使用表单校验功能的情况下，该属性是必填的 | string           | -       |
| labelWidth        | 表单项 label 宽度，默认单位为`px` | number \| string | `90px`  |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right`                  | string           | `left`  |
| initialValue | 设置子元素默认值                  | string           | -  |

## Form.Item Rule 数据结构

使用 Form.Item 的`rules`属性可以定义校验规则，可选属性如下:

| 键名      | 说明                   | 类型 |
|-----------|------------------------|----------|
| required  | 是否为必选字段       | boolean |
| message   | 错误提示文案           | string |

## Form 实例 Methods

Form.useForm()创建 Form 实例，用于管理所有数据状态。

| 方法名           | 说明 | 参数 | 返回值  |
|------------------|-----------------------------|-----|---------|
| getFieldValue | 获取对应字段名的值 | - | (name: NamePath) => any |
| setFieldsValue | 设置表单的值 | - | (values) => void |
| resetFields | 重置表单提示状态 | - | () => void |
| submit | 提交表单进行校验的方法 | - | Promise |

