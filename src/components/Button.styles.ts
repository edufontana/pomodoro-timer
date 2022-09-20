import styled from 'styled-components'

export type ButtonVariant = 'red' | 'blue' | 'orange'

interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme['green-500']};
  height: 11rem;
  width: 11rem;
`
