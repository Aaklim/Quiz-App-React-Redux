import { ADD_QUESTION_TO_QUIZ } from '../actions/actions';

const initialstate = {
  quiz: [],
};

const quizCreatorReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_QUIZ:
      return {
        ...state,
        quiz: [...state.quiz, action.payload],
      };
    default:
      return state;
  }
};

export default quizCreatorReducer;
