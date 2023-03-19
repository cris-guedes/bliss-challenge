import useQuestions from '@/view/hooks/useQuestions'
import { TQuestion } from '@/shared/types/question'

import * as S from './styles'

type Props = {
  question: TQuestion
}

function QuestionDetail({ question }: Props) {
  const { updateQuestion } = useQuestions()

  function handleClick(optionIndex: number) {
    const updatedQuestion = { ...question }

    const choice = updatedQuestion.choices[optionIndex]

    choice.votes++

    updateQuestion(updatedQuestion)
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.GoBack to={'/questions'}>←</S.GoBack>
          <S.QuestionArea>
            <S.TextQuestion>{question.question}</S.TextQuestion>
          </S.QuestionArea>
        </S.Header>
        <S.ImageContainer>
          <S.Image src={question.image_url} />
        </S.ImageContainer>

        <S.OptionsArea>
          {question.choices.map((choice, index) => (
            <S.OptionHug key={index} onClick={() => handleClick(index)}>
              <S.OptionCard>
                <S.TextOptions>{choice.choice} </S.TextOptions>
                <S.Votes>Votes: {choice.votes}</S.Votes>
              </S.OptionCard>
            </S.OptionHug>
          ))}
        </S.OptionsArea>
      </S.Content>
    </S.Container>
  )
}

export default QuestionDetail
