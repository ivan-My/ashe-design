import React, {
  HTMLInputTypeAttribute,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef, useEffect
} from 'react'
import {IComponent}from '../../utils/typeing'
// import './input.scss'

export interface InputProps extends IComponent{
  type?:HTMLInputTypeAttribute,
  defaultValue?:any
  placeholder?:string
  disabled?:boolean
  ref?: any
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export type InputRef = {
  clear: () => void
  focus: () => void
  blur: () => void
}
const defaultProps = {
  type:'text',
  defaultValue:'',
  placeholder:''

} as InputProps

export const Input = forwardRef<InputRef,InputProps>((p,ref) =>{
  const props = { ...defaultProps, ...p }
  const [value, setValue] = useState(props.defaultValue)
  const nativeInputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('')
    },
    focus: () => {
      nativeInputRef.current?.focus()
    },
    blur: () => {
      nativeInputRef.current?.blur()
    }
  }))

  useEffect(() =>{
  },[value])

  return (
    <div className={'gl-input'}>
      <input
        className={'gl-input-element'}
        ref={nativeInputRef}
        type='text'
        value={value}
        disabled={props.disabled}
        onChange={e => {
          props.onChange?.(e)
          setValue(e.target.value)
        }}
        placeholder={props.placeholder}
        onFocus={e => {
          props.onFocus?.(e)
        }}
        onBlur={e => {
          props.onBlur?.(e)
        }}
      />
    </div>
  )
})

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
