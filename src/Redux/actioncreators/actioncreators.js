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
} from '../actions/actions';

//////QuizesList section
export const getQuizesSaga = () => {
  return {
    type: GET_QUIZES_SAGA,
  };
};
export const getQuizes = (quizes) => {
  return {
    type: GET_QUIZES,
    payload: quizes,
  };
};
export const toggleQuizesIsLoading = () => {
  return {
    type: TOGGLE_QUIZES_IS_LOADING,
  };
};

////Quize section
export const getQuizeSaga = (id) => {
  return {
    type: GET_QUIZE_SAGA,
    payload: id,
  };
};
export const getQuiz = (quiz) => {
  return {
    type: GET_QUIZE,
    payload: quiz,
  };
};
export const setAnswerToState = (answer) => {
  return {
    type: SET_ANSWER_TO_STATE,
    payload: answer,
  };
};
export const setQuizIsFinished = () => {
  return {
    type: SET_QUIZ_IS_FINISHED,
  };
};
export const toggleActiveQuestion = () => {
  return {
    type: TOGGLE_ACTIVE_QUESTION,
  };
};
export const retryQuiz = () => {
  return {
    type: RETRY_QUIZ,
  };
};

///QuizCreator

export const addQuestionToQuiz = (question) => {
  console.log('Fromdispacth', question);
  return {
    type: ADD_QUESTION_TO_QUIZ,
    payload: question,
  };
};

export const createQuizSaga = (quiz) => {
  return {
    type: CREATE_QUIZ_SAGA,
    payload: quiz,
  };
};
