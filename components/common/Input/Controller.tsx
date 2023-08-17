import { Control, Controller, RegisterOptions } from 'react-hook-form'

type InputControllerProps = {
  control: Control
  name: string
  rules: Partial<RegisterOptions>
}

function InputController({ control, name, rules }: InputControllerProps) {
  return <Controller />
}

export default InputController
