import { useState } from 'react'

import useQuestions from '@/view/hooks/useQuestions'
import useDebounce from '@/view/hooks/useDebounce'

import InputSearch from '@/view/components/InputSearch'
import Loader from '@/view/components/Loader'
import QuestionList from '@/view/components/QuestionList'
import useQueryParams from '@/view/hooks/useQueryParams'
import useQueryState from '@/view/hooks/useQueryState'

import * as S from './styles'

function Questions() {
  const { operations, models } = useComponent()

  return (
    <S.Container>
      <S.Head>
        <InputSearch
          autoFocus={models.isFocused}
          search={models.search}
          handleChange={operations.handleSearch}
        />
      </S.Head>
      <S.Main>
        {!models.data && models.isLoading && <Loader />}
        {models.data && (
          <QuestionList
            loadMore={operations.fetchNextPage}
            questions={models.data.pages}
          />
        )}
      </S.Main>
    </S.Container>
  )
}

function useComponent() {
  const { loadQuestions } = useQuestions()

  const { syncQueryParamUrl } = useQueryState()

  const query = useQueryParams()

  const LIMIT = 10

  const filter = query.get('filter')

  const isFocused = filter === ''

  const [search, setSearch] = useState<string | null>(filter)

  const debouncedSearch = useDebounce(search, 500)

  function handleSearch(value: string) {
    syncQueryParamUrl('filter', value)

    setSearch(value)
  }

  const { data, isLoading, fetchNextPage } = loadQuestions({
    filter: debouncedSearch,
    limit: LIMIT
  })

  return {
    operations: { handleSearch, fetchNextPage },
    models: { data, isLoading, isFocused, search }
  }
}

export default Questions
