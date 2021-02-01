import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import quizListReducer from './quizListReducer'
import authReducer from './authReducer'
import quizReducer from './quizReducer'
import quizCreatorReducer from './quizCreatorReducer'

const rootReducer = combineReducers({
  quizList: quizListReducer,
  quiz: quizReducer,
  auth: authReducer,
  quizCreator: quizCreatorReducer,
  form: formReducer,
})
export default rootReducer
