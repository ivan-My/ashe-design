import { useRef } from 'react'
import Schema from 'async-validator'
import { FieldItem, Callbacks, FormInstance, FieldEntity } from './interface'
/**
 * 用于存储表单的数据
 */
class FormStore {
    private store: FieldItem = {} // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}

    private fieldEntities: FieldEntity[] = [] // 所有的组件实例

    // 成功和失败的回调
    private callbacks: Callbacks<any> = {}

    private errList: any[] = []

    private dependenciesMap = new Map()

    // 收集所有需要批量更新的
    private shouldList: FieldEntity[] = []

    setCallback = (callback: Callbacks) => {
        this.callbacks = {
            ...this.callbacks,
            ...callback,
        }
    }

    registerField = (field: FieldEntity) => {
        if (field.shouldUpdate) {
            this.shouldList.push(field)
        } else {
            this.fieldEntities.push(field)
        }
        return () => {
            this.fieldEntities = this.fieldEntities.filter(
                (item) => item !== field
            )
            if (this.store) {
                delete this.store[field.name]
            }
        }
    }

    setFieldValue = (values: FieldItem) => {
        this.store = {
            ...this.store,
            ...values,
        }
    }

    getFieldValue = (name: string) => {
        return this.store[name]
    }

    setFieldsValue = (newStore: FieldItem) => {
        const prevStore = this.store
        this.setFieldValue(newStore)
        this.execShouldUpdate(prevStore)

        const { onValuesChange } = this.callbacks
        onValuesChange && onValuesChange(newStore, this.store)
        this.fieldEntities.forEach((enetity: FieldEntity) => {
            const { name, dependencies } = enetity
            const key = Object.keys(newStore)[0]
            if (key === name) {
                if (dependencies) {
                    ;(dependencies || []).forEach((dependency) => {
                        this.dependenciesMap.set(dependency, name)
                    })
                }

                this.validateKey(key)
                enetity.onStoreChange()
            }
        })
    }

    getFieldValues = () => {
        return this.store
    }

    execShouldUpdate = (prevStore: FieldItem) => {
        this.shouldList.forEach((should) => {
            if (typeof should.shouldUpdate === 'function') {
                const fx = should.shouldUpdate(prevStore, this.store)
                if (fx) {
                    should.onStoreChange()
                }
            } else {
                should.onStoreChange()
            }
        })
    }

    validateKey = (key: string) => {
        let depValue = ''
        if (this.dependenciesMap.has(key)) {
            depValue = this.dependenciesMap.get(key)
        }
        const err: any = []
        this.errList.length = 0
        this.fieldEntities.forEach((entity: FieldEntity) => {
            if (entity.name === key || entity.name === depValue) {
                const { name, rules = [] } = entity
                const descriptor: any = {}
                if (rules.length) {
                    // 多条校验规则
                    if (rules.length > 1) {
                        descriptor[name] = []
                        rules.forEach((v: any) => {
                            descriptor[name].push(v)
                        })
                    } else {
                        descriptor[name] = rules[0]
                    }
                }
                const validator = new Schema(descriptor)
                validator.validate({ [name]: this.store[name] }, (errors) => {
                    if (errors) {
                        err.push(...errors)
                        this.errList.push(...errors)
                    }
                    entity.onStoreChange()
                })
            }
        })
        //   return err
    }

    validate = () => {
        const err: any = []
        this.errList.length = 0
        this.fieldEntities.forEach((entity: FieldEntity) => {
            const { name, rules = [] } = entity
            const descriptor: any = {}
            if (rules.length) {
                // 多条校验规则
                if (rules.length > 1) {
                    descriptor[name] = []
                    rules.forEach((v: any) => {
                        descriptor[name].push(v)
                    })
                } else {
                    descriptor[name] = rules[0]
                }
            }
            const validator = new Schema(descriptor)
            validator.validate({ [name]: this.store[name] }, (errors) => {
                if (errors) {
                    err.push(...errors)
                    this.errList.push(...errors)
                }
                entity.onStoreChange()
            })
        })
        return err
    }

    submit = () => {
        const err = this.validate()
        if (err.length === 0) {
            this.callbacks.onFinish?.(this.store)
        } else if (err.length > 0) {
            this.callbacks.onFinishFailed?.(err)
        }
    }

    resetFields = () => {
        Object.keys(this.store).forEach((key) => {
            this.setFieldsValue({ [key]: '' })
        })
    }

    // 设置初始化store值
    innerSetInitialValues = (values: any) => {
        this.store = {
            ...this.store,
            ...values,
        }
    }

    getForm = () => {
        return {
            setCallback: this.setCallback,
            registerField: this.registerField,
            setFieldValue: this.setFieldValue,
            getFieldValue: this.getFieldValue,
            setFieldsValue: this.setFieldsValue,
            getFieldsValue: this.getFieldValues,
            resetFields: this.resetFields,
            submit: this.submit,
            errList: this.errList,
            fieldEntities: this.fieldEntities,
            innerSetInitialValues: this.innerSetInitialValues,
        }
    }
}

export const useForm = (form?: FormInstance) => {
    const formRef = useRef<any>()
    if (!formRef.current) {
        if (form) {
            formRef.current = form
        } else {
            const formStore = new FormStore()
            formRef.current = formStore.getForm()
        }
    }
    return [formRef.current]
}
