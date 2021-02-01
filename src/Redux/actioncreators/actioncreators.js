import {
  GET_QUIZZES_SAGA,
  TOGGLE_QUIZZES_IS_LOADING,
  GET_QUIZZES,
  GET_QUIZE_SAGA,
  GET_QUIZE,
  SET_ANSWER_TO_STATE,
  SET_QUIZ_IS_FINISHED,
  TOGGLE_ACTIVE_QUESTION,
  RETRY_QUIZ,
  ADD_QUESTION_TO_QUIZ,
  CREATE_QUIZ_SAGA,
  AUTH_GET_EMAIL_PASSWORD,
  AUTH_GET_EMAIL_PASSWORD_SAGA,
  AUTH_LOGIN_SAGA,
  AUTH_LOGIN,
  AUTH_REGISTER_SAGA,
  AUTH_GET_TOKEN,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SAGA,
  AUTH_GET_USER_ID,
  AUTH_AUTO_LOGOUT_SAGA,
  DELETE_QUIZ_SAGA,
  CLEAN_QUIZ_CREATOR,
} from '../actions/actions'

/// ///QuizesList section
export const getQuizzesSaga = (userId) => ({
  type: GET_QUIZZES_SAGA,
  payload: userId,
})
export const getQuizzes = (quizzes) => ({
  type: GET_QUIZZES,
  payload: quizzes,
})
export const toggleQuizzesIsLoading = () => ({
  type: TOGGLE_QUIZZES_IS_LOADING,
})

/// /Quize section
export const getQuizeSaga = (id, userId) => ({
  type: GET_QUIZE_SAGA,
  payload: { id, userId },
})
export const getQuiz = (quiz) => ({
  type: GET_QUIZE,
  payload: quiz,
})
export const setAnswerToState = (answer) => ({
  type: SET_ANSWER_TO_STATE,
  payload: answer,
})
export const setQuizIsFinished = () => ({
  type: SET_QUIZ_IS_FINISHED,
})
export const toggleActiveQuestion = () => ({
  type: TOGGLE_ACTIVE_QUESTION,
})
export const retryQuiz = () => ({
  type: RETRY_QUIZ,
})

/// QuizCreator section

export const addQuestionToQuiz = (question) => ({
  type: ADD_QUESTION_TO_QUIZ,
  payload: question,
})

export const cleanQuizCreator = () => ({
  type: CLEAN_QUIZ_CREATOR,
})

export const createQuizSaga = (quiz, userId) => ({
  type: CREATE_QUIZ_SAGA,
  payload: { quiz, userId },
})
// Delete Quiz
export const deleteQuizSaga = (quizId, userId) => ({
  type: DELETE_QUIZ_SAGA,
  payload: { quizId, userId },
})

//  AUTH section

export const authGetEmailPasswordSaga = (email, password) => ({
  type: AUTH_GET_EMAIL_PASSWORD_SAGA,
  payload: { email, password },
})

export const authGetEmailPassword = (payload) => ({
  type: AUTH_GET_EMAIL_PASSWORD,
  payload,
})

export const authLoginSaga = (email, password) => ({
  type: AUTH_LOGIN_SAGA,
  payload: { email, password },
})
export const authLogin = (payload) => ({
  type: AUTH_LOGIN,
  payload,
})

export const authRegisterSaga = (email, password) => ({
  type: AUTH_REGISTER_SAGA,
  payload: { email, password },
})
export const authGetToken = (token) => ({
  type: AUTH_GET_TOKEN,
  payload: token,
})
export const authGetUserId = (userId) => ({
  type: AUTH_GET_USER_ID,
  payload: userId,
})
export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
})
export const authLogoutSaga = () => ({
  type: AUTH_LOGOUT_SAGA,
})
export const authLogout = () => ({
  type: AUTH_LOGOUT,
})
export const authAutologoutSaga = (time) => ({
  type: AUTH_AUTO_LOGOUT_SAGA,
  payload: time,
})
