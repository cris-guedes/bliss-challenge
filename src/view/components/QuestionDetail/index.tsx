import useQuestions from '@/view/hooks/useQuestions'
import { TQuestion } from '@/shared/types/question'

import * as S from './styles'
import { useState } from 'react'

type Props = {
  question: TQuestion
}

function QuestionDetail({ question }: Props) {
  const [isVoted, setIsVoted] = useState(false)
  const [optionChosed, setOptionChoses] = useState(-1)

  const { updateQuestion } = useQuestions()

  function handleClick(optionIndex: number) {
    const updatedQuestion = { ...question }

    const choice = updatedQuestion.choices[optionIndex]

    choice.votes++

    updateQuestion(updatedQuestion)

    setOptionChoses(optionIndex)

    setIsVoted(true)
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
            <S.OptionHug
              isChosed={index === optionChosed}
              disabled={isVoted}
              key={index}
              onClick={() => handleClick(index)}
            >
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
