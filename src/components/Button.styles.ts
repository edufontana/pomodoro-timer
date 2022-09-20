import styled from 'styled-components'

export type ButtonVariant = 'red' |  'blue' | 'orange'

interface ButtonProps{
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${props => props.theme.secondary};
  height: 11rem;
  width: 11rem;
`