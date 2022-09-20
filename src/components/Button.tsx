import {ButtonContainer, ButtonVariant} from './Button.styles'

interface ButtonProps{
  variant?: ButtonVariant
}

export function Button({variant = 'orange'}: ButtonProps){
  return(
    <ButtonContainer variant={variant}/>
  )
}