import theme from '@/view/styles/theme'
import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Button = styled.button`
  cursor: pointer;
  ${({}) => css`
    background-color: ${theme.colors.white400};
  `}
  &&:hover {
    opacity: 5;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 100px;
  height: 30px;
`
export const Image = styled.img``
