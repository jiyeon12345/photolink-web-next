import { Control, Controller, RegisterOptions } from 'react-hook-form'
import Input from './Input'
import ErrorMessage from './ErrorMessage'

type InputControllerProps = {
  control: Control<any>
  name: string
  rules?: Partial<RegisterOptions>
  type?: string
  placeholder?: string
}

function InputController({ control, name, rules, type, placeholder }: InputControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <Input type={type} field={field} placeholder={placeholder} />
          <ErrorMessage error={fieldState.error?.message} />
        </>
      )}
    />
  )
}

export default InputController
