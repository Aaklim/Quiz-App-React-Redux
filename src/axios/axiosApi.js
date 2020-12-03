import Axios from 'axios';
import { getQuizes } from '../Redux/actioncreators/actioncreators';

const instance = Axios.create({
  baseURL: 'https://quiz-app-react-redux.firebaseio.com/',
});

export const Api = {
  async getQuizes() {
    try {
      const response = await instance.get('/quizes.json');
      return response.data;
    } catch (e) {
      console.log('GetQuizesError', e);
    }
  },
  async getQuize(id) {
    try {
      const response = await instance.get(`/quizes/${id}.json`);
      return response.data;
    } catch (e) {
      console.log('GetQuizError', e);
    }
  },
};
