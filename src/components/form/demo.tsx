import * as React from 'react'
import { Input, Form } from '@/components/ashe.react.build'

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
                    onValuesChange={(a, b) => {
                        // console.log(a, b)
                    }}
                    form={form}
                >
                    <Form.Item
                        label="姓名"
                        name="username"
                        rules={[{ required: true, message: '请输入姓名' }]}
                    >
                        <Input placeholder="请输入姓名" type="text" />
                    </Form.Item>

                    <input type="submit" value="提交" />
                </Form>
            </div>
        </>
    )
}

export default FormDemo
