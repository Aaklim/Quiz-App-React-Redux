import { combineReducers } from 'redux';
import quizListReducer from './quizListReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
  quizList: quizListReducer,
  auth: authReducer,
});
