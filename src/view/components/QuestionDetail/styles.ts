import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type Props = {
  disabled: boolean
  isChosed: boolean
}

export const Container = styled.div`
  margin: auto;
`

export const Content = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  width: 60rem;
  display: flex;
  margin-bottom: 10rem;

  flex-direction: column;
`
export const QuestionArea = styled.div``

export const OptionsArea = styled.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
`
export const OptionCard = styled.div`
  padding: 1rem;
`

export const TextQuestion = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
  font-weight:500;
`

export const TextOptions = styled.h6`
  ${({ theme }) => css`
    color: ${theme.colors.white400};
    font-size: ${theme.font.sizes.large};
  `}
`

export const GoBack = styled(Link)`
  font-size: 3rem;
`
export const Image = styled.img`
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 8rem;
`
export const Foot = styled.div``

export const Votes = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.white400};
    font-size: ${theme.font.sizes.small};
  `}
`

export const LastUpdate = styled.h6``

export const ImageContainer = styled.div`
  margin-bottom: 1rem;
`
export const OptionHug = styled.button<Props>`
  cursor: not-allowed;
  border-radius: 0.5rem;
  flex: 1;
  ${({ theme, disabled, isChosed }) => css`
    background: ${isChosed ? theme.colors.success : theme.colors.gray800};
    opacity: ${disabled ? 0.4 : 1};

    ${!disabled &&
    css`
      &&:hover {
        opacity: 0.9;
      }
      cursor: pointer;
    `}
  `}

  display: flex;
  width: 100%;
`
