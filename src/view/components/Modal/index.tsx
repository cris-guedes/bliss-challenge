import * as S from './styles'

type Props = {
  isOpenned: boolean
  closeModal?: () => void
  children: React.ReactNode
}

const Modal = ({ children, isOpenned, closeModal }: Props) => {
  //const contentRef = useRef<HTMLDivElement>(null)

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
