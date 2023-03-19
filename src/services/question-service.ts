import { TQuestion } from '@/shared/types/question'
import httpProvider from '@/services/api'
import resourses from '@/services/api/rersources'

class QuestionsService {
  async loadQuestions(
    params: QuestionsService.loadQuestions
  ): Promise<TQuestion[]> {
    const { data } = await httpProvider.get(resourses.questions, {
      params
    })
    return data
  }
  async loadQuestionsById(
    params: QuestionsService.loadById
  ): Promise<TQuestion> {
    const { data } = await httpProvider.get(
      `${resourses.questions}/${params.id}`
    )
    return data
  }

  async updateQuestion(params: QuestionsService.updateQuestion) {
    return await httpProvider.put(`${resourses.questions}/${params.id}`, params)
  }
}

export namespace QuestionsService {
  export type loadQuestions = {
    limit: number
    offset: number
    filter: string
  }
  export type loadById = {
    id: string
  }
  export type updateQuestion = TQuestion
}

export default new QuestionsService()
