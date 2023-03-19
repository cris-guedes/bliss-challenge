import styled, { css } from 'styled-components'

export const Container = styled.div``
export const Input = styled.input`
  font-weight: 600;
  outline: 0 none;
  padding: 1rem;
  color: #333333;
  border-radius: 1.5rem;
  width: 60rem;

  ${({ theme }) => css`
    background: ${theme.colors.white20};
    font-size: ${theme.font.sizes.medium};
    border: solid 0.1rem ${theme.colors.gray900};
  `}
`
