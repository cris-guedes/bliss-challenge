import styled, { css } from 'styled-components'

export const Container = styled.div``
export const Hug = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  gap: 3rem;
  color: white;
  padding: 1rem;
`
export const RetryCard = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  width: 15rem;
  height: 10rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray500};
  `}
  font-size:2rem;
`
export const Icon = styled.div`
  font-size: 4rem;
`
