import { useInfiniteQuery, useMutation, useQuery } from 'react-query'

import questionService from '@/services/question-service'
import { queryClient } from '@/shared/configs/queryClient'
import { TQuestion } from '@/shared/types/question'

function useQuestions() {
  const update = useMutation(questionService.updateQuestion, {
    onSuccess: () => queryClient.invalidateQueries(['question', 'questions'])
  })

  function loadQuestions(params: UseQuestion.loadQuestions) {
    const { filter, limit } = params
    const fetchQuestions = ({ pageParam = 0 }) =>
      questionService.loadQuestions({
        filter,
        limit,
        offset: pageParam * limit
      })
    return useInfiniteQuery(['questions', params], fetchQuestions, {
      getNextPageParam: (_, pages) => pages.length
    })
  }

  function loadDetails(params: UseQuestion.loadDetails) {
    return useQuery(['question', params], () =>
      questionService.loadQuestionsById(params)
    )
  }

  function updateQuestion(params: UseQuestion.updateQuestion) {
    update.mutate(params)
  }

  return {
    loadQuestions,
    loadDetails,
    updateQuestion
  }
}

export namespace UseQuestion {
  export type loadQuestions = {
    limit: number
    filter: string
  }
  export type loadDetails = {
    id: string
  }
  export type updateQuestion = TQuestion
}

export default useQuestions
