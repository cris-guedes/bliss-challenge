import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const EmailInput = styled.input`
  font-weight: 600;
  outline: 0 none;
  padding: 1rem;

  border-radius: 1.5rem;
  color: white
    ${({ theme }) => css`
      background: ${theme.colors.white20};
      font-size: ${theme.font.sizes.medium};
      border: solid 0.1rem ${theme.colors.gray900};
    `};
`

export const CloseButton = styled.button`
  padding: 1rem;
  width: 10rem;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    background: ${theme.colors.danger500};
  `}
`

export const SubmitButton = styled.button`
  width: 10rem;
  padding: 1rem;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    background: ${theme.colors.success};
  `}
`

export const AreaButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`
