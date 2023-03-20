import { useParams } from 'react-router-dom'

import useQuestions from '@/view/hooks/useQuestions'
import QuestionDetail from '@/view/Components/QuestionDetail'

import * as S from '../Details/styles'
import Loader from '@/view/Components/Loader'

function Details() {
  const { id } = useParams()

  const { loadDetails } = useQuestions()

  if (!id) return <></>

  const { data: question, isLoading } = loadDetails({ id })

  return (
    <S.Container>
      {!question && isLoading && <Loader />}

      {question && <QuestionDetail question={question} />}
    </S.Container>
  )
}

export default Details
