import { Control, Controller, RegisterOptions } from 'react-hook-form'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import { InputSize, StyledController } from './styled'

type InputControllerProps = {
  control: Control<any>
  name: string
  rules?: Partial<RegisterOptions>
  type?: string
  placeholder?: string
  $size?: InputSize
}

function InputController({ control, name, rules, type, placeholder, $size }: InputControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <StyledController>
          <Input $size={$size} type={type} field={field} placeholder={placeholder} />
          <ErrorMessage error={fieldState.error?.message} />
        </StyledController>
      )}
    />
  )
}

export default InputController
