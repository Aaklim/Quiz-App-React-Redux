import { combineReducers } from 'redux';
import quizListReducer from './quizListReducer';
import authReducer from './authReducer';
import quizReducer from './quizReducer';
import quizCreatorReducer from './quizCreatorReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  quizList: quizListReducer,
  quiz: quizReducer,
  auth: authReducer,
  quizCreator: quizCreatorReducer,
  form: formReducer,
});
