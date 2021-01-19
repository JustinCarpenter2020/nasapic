import {
  AppState
} from '../AppState'
import {
  apodApi
} from './AxiosService'
class PictureService {
  async searchApod (query) {
    try {
      const res = await apodApi.get('apod?api_key=yLbSh3LgrkRWbB63RHZy7Bv4HXXj4B9DxIX9Y536&date=' + query)
      console.log(res.data)
      AppState.picture = res.data
    } catch (error) {
      console.error(error)
    }
  }
}
export const pictureService = new PictureService()
