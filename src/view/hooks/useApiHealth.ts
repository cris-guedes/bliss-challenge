import { useEffect, useState } from 'react'
import healthService from '@/services/health-service'

function useQuestions() {
  const [apiIsready, setApiIsready] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    checkApiIsReady()
  }, [])

  async function checkApiIsReady() {
    setIsLoading(true)
    try {
      const { data, status } = await healthService.checkStatus()
      if (status == 503) {
        setApiIsready(false)
        return false
      } else {
        setApiIsready(true)
        return true
      }
    } catch (e) {
      setApiIsready(false)
      throw new Error('')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    apiIsready
  }
}

export default useQuestions
