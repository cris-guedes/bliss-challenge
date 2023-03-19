import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    &&:hover {
      opacity: 0.6;
      background: ${theme.colors.gray200};
    }
  `}

  cursor: pointer;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 3px 6px 1px rgba(0, 0, 0, 0.05);
  display: flex;
`

export const QuestionArea = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray100};
  `}
  font-weight:500;
  color: #333333;
  flex: 1.5;
  padding: 2rem;
  background: ;
`

export const TextQuestion = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
export const AreaImage = styled.div``
