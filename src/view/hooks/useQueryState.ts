const useQueryState = () => {
  const pathname = window.location.href

  function syncQueryParamUrl(queryParam: string, value: string) {
    const url = new URL(pathname)

    url.searchParams.set(queryParam, value)
    window.history.pushState({}, '', url)
  }

  return { syncQueryParamUrl }
}

export default useQueryState
