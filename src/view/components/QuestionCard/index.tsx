import { useNavigate } from 'react-router-dom'
import { TQuestion } from '@/shared/types/question'

import * as S from './styles'

type Props = {
  question: TQuestion
}

function QuestionCard({ question }: Props) {
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/questions/${question.id}`)
  }

  return (
    <S.Container onClick={handleClick}>
      <S.Content>
        <S.AreaImage>
          <img src={question.thumb_url} />
        </S.AreaImage>
        <S.QuestionArea>
          <S.TextQuestion>{question.question}</S.TextQuestion>
        </S.QuestionArea>
      </S.Content>
    </S.Container>
  )
}

export default QuestionCard
