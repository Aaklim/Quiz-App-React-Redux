import Axios from 'axios'
import { authRegisterSaga } from '../Redux/actioncreators/actioncreators'

const instance = Axios.create({
  baseURL: 'https://quiz-app-react-redux.firebaseio.com/',
})

export const Api = {
  async getQuizes(userId) {
    const path = userId === 'root' ? 'EOg9Cn9Q0TO3whrVIxkH1YEMoiF2' : userId
    try {
      console.log('UserIdGEtQuizes', userId)
      const response = await instance.get(`/${path}.json`)
      console.log('ResponseQuizes', response.data)
      return response.data
    } catch (e) {
      console.log('GetQuizesError', e)
    }
  },
  async getQuize(id, userId) {
    console.log('GetQuiz-Payload-userId', typeof userId)
    console.log('GetQuiz-Payload-id', id)
    const root = userId === 'root' ? 'EOg9Cn9Q0TO3whrVIxkH1YEMoiF2' : userId
    console.log('ROOT', root)
    try {
      const response = await instance.get(`/${root}/${id}.json`)
      return response.data
    } catch (e) {
      console.log('GetQuizError', e)
    }
  },
  async createQuiz(quiz, userId) {
    console.log('CreateQuizProps', quiz, userId)
    try {
      const response = await instance.post(`/${userId}.json`, quiz)
      return response.data
    } catch (e) {
      console.log('createQuizError', e)
    }
  },
  async deleteQuiz(quizId, userId) {
    console.log('DeleteQuiz-quizId', quizId)
    console.log('DeleteQuiz-userId', userId)
    try {
      const response = await instance.delete(`/${userId}/${quizId}.json`)
      console.log('deleteQuiz', response)
      return response
    } catch (e) {
      console.log('DeletequizError', e)
    }
  },
  async authLogin({ email, password }) {
    const data = {
      email,
      password,
      returnSecureToken: true,
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      console.log('authLogin', data)
      const response = await Axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcuG-UZAT_0wSJC6zYt1pObzPPWkBx_tc',
        JSON.stringify(data),
        options,
      )
      return response
    } catch (error) {
      return error
    }
  },
  async authRegisterSaga({ email, password }) {
    const data = {
      email,
      password,
      returnSecureToken: true,
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      console.log('authRegister', data)
      const response = await Axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcuG-UZAT_0wSJC6zYt1pObzPPWkBx_tc',
        JSON.stringify(data),
        options,
      )
      return response
    } catch (error) {
      return error
    }
  },
}
