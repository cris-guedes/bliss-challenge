import httpProvider from '@/services/api'
import resourses from '@/services/api/rersources'

class HealthService {
  async checkStatus() {
    const request = await httpProvider.get(resourses.health)
    return request
  }
}

export default new HealthService()
