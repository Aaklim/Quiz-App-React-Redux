import {
  GET_QUIZE,
  SET_ANSWER_TO_STATE,
  SET_QUIZ_IS_FINISHED,
  TOGGLE_ACTIVE_QUESTION,
  RETRY_QUIZ,
} from '../actions/actions';

const initialstate = {
  results: {},
  isFinished: false,
  answerState: null,
  activeQuestion: 0,
  quiz: [],
};
const quizReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_QUIZE:
      return {
        results: {},
        isFinished: false,
        answerState: null,
        activeQuestion: 0,
        quiz: [...action.payload],
      };
    case SET_ANSWER_TO_STATE:
      console.log('QuizFrom', action.payload);
      return {
        ...state,
        answerState: action.payload.answerState,
        results: action.payload.results,
      };

    case TOGGLE_ACTIVE_QUESTION:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1,
        answerState: null,
      };
    case SET_QUIZ_IS_FINISHED:
      return {
        ...state,
        isFinished: true,
      };
    case RETRY_QUIZ:
      return {
        ...state,
        results: {},
        isFinished: false,
        answerState: null,
        activeQuestion: 0,
      };
    default:
      return state;
  }
};

export default quizReducer;
