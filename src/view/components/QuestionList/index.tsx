import { TQuestion } from '@/shared/types/question'
import InfinityScroll from '../InfinityScroll'
import QuestionCard from '../QuestionCard'

import * as S from './styles'

type Props = {
  questions: TQuestion[][]
  loadMore(): void
}

function QuestionList({ questions = [], loadMore }: Props) {
  return (
    <S.Container>
      {questions.map((questionList) =>
        questionList.map((question, index) => {
          if (index === questionList.length - 2) {
            return (
              <div key={question.id}>
                <QuestionCard question={question} />{' '}
                <InfinityScroll loadMore={loadMore} />
              </div>
            )
          } else {
            return (
              <div key={question.id}>
                <QuestionCard question={question} />
              </div>
            )
          }
        })
      )}
    </S.Container>
  )
}

export default QuestionList
