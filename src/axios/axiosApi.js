import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://quiz-app-react-redux.firebaseio.com/',
})

const Api = {
  async getQuizzes(userId) {
    const path = userId === 'root' ? 'EOg9Cn9Q0TO3whrVIxkH1YEMoiF2' : userId
    try {
      const response = await instance.get(`/${path}.json`)
      return response.data
    } catch (e) {
      return e
    }
  },
  async getQuize(id, userId) {
    const root = userId === 'root' ? 'EOg9Cn9Q0TO3whrVIxkH1YEMoiF2' : userId
    try {
      const response = await instance.get(`/${root}/${id}.json`)
      return response.data
    } catch (e) {
      return e
    }
  },
  async createQuiz(quiz, userId) {
    try {
      const response = await instance.post(`/${userId}.json`, quiz)
      return response.data
    } catch (e) {
      return e
    }
  },
  async deleteQuiz(quizId, userId) {
    try {
      const response = await instance.delete(`/${userId}/${quizId}.json`)
      return response
    } catch (e) {
      return e
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

export default Api
