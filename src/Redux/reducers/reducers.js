import { combineReducers } from 'redux';
import quizListReducer from './quizListReducer';
import authReducer from './authReducer';
import quizReducer from './quizReducer';

export const rootReducer = combineReducers({
  quizList: quizListReducer,
  quiz: quizReducer,
  auth: authReducer,
});
