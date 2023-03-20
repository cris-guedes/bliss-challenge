import * as S from './styles'

type Props = {
  isOpenned: boolean
  closeModal?: () => void
  children: React.ReactNode
}

const Modal = ({ children, isOpenned, closeModal }: Props) => {
  if (!isOpenned) {
    return null
  }

  return (
    <S.Wrapper>
      <div>{children}</div>
    </S.Wrapper>
  )
}

export default Modal
