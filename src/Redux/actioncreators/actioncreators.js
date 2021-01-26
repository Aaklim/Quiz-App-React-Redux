import {
  GET_QUIZES_SAGA,
  TOGGLE_QUIZES_IS_LOADING,
  GET_QUIZES,
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

//////QuizesList section
export const getQuizesSaga = (userId) => {
  return {
    type: GET_QUIZES_SAGA,
    payload: userId,
  }
}
export const getQuizes = (quizes) => {
  return {
    type: GET_QUIZES,
    payload: quizes,
  }
}
export const toggleQuizesIsLoading = () => {
  return {
    type: TOGGLE_QUIZES_IS_LOADING,
  }
}

////Quize section
export const getQuizeSaga = (id, userId) => {
  return {
    type: GET_QUIZE_SAGA,
    payload: { id, userId },
  }
}
export const getQuiz = (quiz) => {
  return {
    type: GET_QUIZE,
    payload: quiz,
  }
}
export const setAnswerToState = (answer) => {
  return {
    type: SET_ANSWER_TO_STATE,
    payload: answer,
  }
}
export const setQuizIsFinished = () => {
  return {
    type: SET_QUIZ_IS_FINISHED,
  }
}
export const toggleActiveQuestion = () => {
  return {
    type: TOGGLE_ACTIVE_QUESTION,
  }
}
export const retryQuiz = () => {
  return {
    type: RETRY_QUIZ,
  }
}

///QuizCreator section

export const addQuestionToQuiz = (question) => {
  console.log('Fromdispacth', question)
  return {
    type: ADD_QUESTION_TO_QUIZ,
    payload: question,
  }
}

export const cleanQuizCreator = () => {
  return {
    type: CLEAN_QUIZ_CREATOR,
  }
}

export const createQuizSaga = (quiz, userId) => {
  return {
    type: CREATE_QUIZ_SAGA,
    payload: { quiz, userId },
  }
}
// Delete Quiz
export const deleteQuizSaga = (quizId, userId) => {
  return {
    type: DELETE_QUIZ_SAGA,
    payload: { quizId, userId },
  }
}

//  AUTH section

export const authGetEmailPasswordSaga = (email, password) => {
  return {
    type: AUTH_GET_EMAIL_PASSWORD_SAGA,
    payload: { email, password },
  }
}

export const authGetEmailPassword = (payload) => {
  return {
    type: AUTH_GET_EMAIL_PASSWORD,
    payload,
  }
}

export const authLoginSaga = (email, password) => {
  return {
    type: AUTH_LOGIN_SAGA,
    payload: { email, password },
  }
}
export const authLogin = (payload) => {
  return {
    type: AUTH_LOGIN,
    payload,
  }
}

export const authRegisterSaga = (email, password) => {
  return {
    type: AUTH_REGISTER_SAGA,
    payload: { email, password },
  }
}
export const authGetToken = (token) => {
  return {
    type: AUTH_GET_TOKEN,
    payload: token,
  }
}
export const authGetUserId = (userId) => {
  return {
    type: AUTH_GET_USER_ID,
    payload: userId,
  }
}
export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}
export const authLogoutSaga = () => {
  return {
    type: AUTH_LOGOUT_SAGA,
  }
}
export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  }
}
export const authAutologoutSaga = (time) => {
  return {
    type: AUTH_AUTO_LOGOUT_SAGA,
    payload: time,
  }
}
