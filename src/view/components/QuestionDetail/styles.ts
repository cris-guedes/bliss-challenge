import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

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
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
  `}
  flex:1;
  &&:hover {
    opacity: 0.9;
  }
  cursor: pointer;
  border-radius: 0.5rem;
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
export const OptionHug = styled.div`
  display: flex;
  width: 100%;
`
