import * as React from 'react'
import { Form, Input } from '@/components/ashe.react.build'

const FormDemo = () => {
    return (
        <>
            <div className="content">
                <div className="title">基础用法</div>
                <Form
                    onFinish={(obj: object) => {
                        console.log(obj)
                    }}
                    onValuesChange={(a, b) => {
                        // console.log(a, b)
                    }}
                >
                    <Form.Item
                        label="姓名"
                        name="username"
                        rules={[{ required: true, message: '必须输入' }]}
                    >
                        <Input placeholder="请输入姓名" type="text" />
                    </Form.Item>

                    <Form.Item
                        label="年龄"
                        name="age"
                        getValueFromEvent={(e) => {
                            return e.target.value
                        }}
                    >
                        <input type="text" />
                    </Form.Item>

                    <Form.Item
                        label="组别"
                        name="group"
                        getValueFromEvent={(e) => {
                            return e.target.value
                        }}
                        initialValue="bb"
                    >
                        <select name="group">
                            <option value="jack">jack</option>
                            <option value="jaaa">jaaa</option>
                            <option value="bb">bb</option>
                        </select>
                    </Form.Item>

                    <Form.Item
                        label="上传"
                        name="upload"
                        getValueFromEvent={(e) => {
                            console.log(e.target.files[0])
                            return e.target.files[0]
                        }}
                    >
                        <input type="file" />
                    </Form.Item>

                    <input type="submit" value="提交" />
                </Form>
            </div>
        </>
    )
}

export default FormDemo
