import { useMutation } from 'react-query'
import shareService from '@/services/share-service'

function useShare() {
  const mutation = useMutation(shareService.share)
  function share(params: ShareService.Share) {
    return mutation.mutate(params)
  }

  return {
    share
  }
}

export namespace ShareService {
  export type Share = {
    destination_email: string
    content_url: string
  }
}

export default useShare
