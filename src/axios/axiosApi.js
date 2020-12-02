import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://quiz-app-react-redux.firebaseio.com/',
});

export const Api = {
  async getQuizes() {
    try {
      const response = await instance.get('/quizes.json');
      return response.data;
    } catch (e) {
      console.log('GetQuizError', e);
    }
  },
};
