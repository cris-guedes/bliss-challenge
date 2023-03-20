import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white400};
  `}
  font-size:3rem;
`
