import httpProvider from '@/services/api'
import resourses from '@/services/api/rersources'

class ShareService {
  async share(params: ShareService.share): Promise<string> {
    const { data } = await httpProvider.post<string>(resourses.share, {
      params
    })

    return data
  }
}

export namespace ShareService {
  export type share = {
    destination_email: string
    content_url: string
  }
}

export default new ShareService()
