import { useRef } from 'react'
import Schema from 'async-validator'
import { Store, Callbacks, FormInstance, FieldEntity } from './interface'
/**
 * 用于存储表单的数据
 */
class FormStore {
  private store: Store = {} // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}

  private fieldEntities: FieldEntity[] = [] // 所有的组件实例

  // 成功和失败的回调
  private callbacks: Callbacks<any> = {}

  private errList: any[] = []

  private map = new Map()

  // 收集所有需要批量更新的
  private shouldList: FieldEntity[] = []

  constructor() {
    this.callbacks = {
      onFinish: () => {},
      onFinishFailed: () => {},
    }
  }

  registerField = (field: FieldEntity) => {
    if (field.shouldUpdate) {
      this.shouldList.push(field)
    } else {
      this.fieldEntities.push(field)
    }
  }

  getFieldValue = (name: string) => {
    return this.store[name]
  }

  setFieldsValue = (newStore: any) => {
    const prevStore = this.store
    this.store = {
      ...this.store,
      ...newStore,
    }
    this.fieldEntities.forEach((enetity: FieldEntity) => {
      const { name, dependencies } = enetity
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          if (dependencies) {
            ;(dependencies || []).forEach((dependency) => {
              this.map.set(dependency, name)
            })
          }

          this.shouldUpdate(prevStore)
          this.validateKey(key)

          enetity.onStoreChange()
        }
      })
    })
  }

  shouldUpdate = (prevStore: Store) => {
    this.shouldList.forEach((should) => {
      if (should.shouldUpdate && typeof should.shouldUpdate !== 'boolean') {
        const fx = should.shouldUpdate(prevStore, this.store)
        // const d = should.children.map((item) => {
        //   console.log(item)
        // })
        if (fx) {
          should.onStoreChange()
        }
      } else {
        const e = should.children(this.store)
        should.onStoreChange()
        should.onValueChange(e)
      }
      // typeof should.children === 'function' && should.children(this.store)
    })
  }

  validateKey = (key: string) => {
    let is = ''
    if (this.map.has(key)) {
      is = this.map.get(key)
    }
    const err: any = []
    this.errList.length = 0
    this.fieldEntities.forEach((entity: FieldEntity) => {
      if (entity.name === key || entity.name === is) {
        const { name, rules = [] } = entity
        const descriptor: any = {}
        if (rules.length) {
          // 多条校验规则
          if (rules.length > 1) {
            descriptor[name] = []
            rules.map((v: any) => {
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
            // 表单项更新
          }
          entity.onStoreChange()
        })
      }
    })
    return err
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
          rules.map((v: any) => {
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
          // 表单项更新
        }
        entity.onStoreChange()
      })
    })
    return err
  }

  setCallback = (callback: Callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    }
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
    this.store = values
  }

  getFieldValues = () => {
    return this.store
  }

  getForm = () => {
    return {
      setCallback: this.setCallback,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldValues,
      setFieldsValue: this.setFieldsValue,
      resetFields: this.resetFields,
      submit: this.submit,
      store: this.store,
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
