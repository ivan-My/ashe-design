import { BasicComponent } from '@/utils/typeing'

export interface FormProps extends BasicComponent {
  /**
   * 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
   */
  from: any
  /**
   * 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
   */
  form: any
  /**
   * label的位置
   * 可选值 top/left/right
   */
  labelPosition: string | number
  /**
   * 表单分组名称
   */
  formGroupTitle: string
  // 必选项星标位置
  starPositon: string
  /**
   * 表单校验成功回调
   */
  onFinish: (obj: object) => void
  /**
   * 表单校验失败回调
   */
  onFinishFailed: (value: []) => void
}
