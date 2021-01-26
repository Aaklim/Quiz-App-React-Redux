import { ADD_QUESTION_TO_QUIZ, CLEAN_QUIZ_CREATOR } from '../actions/actions'

const initialstate = {
  quiz: [],
}

const quizCreatorReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_QUIZ:
      return {
        ...state,
        quiz: [...state.quiz, action.payload],
      }
    case CLEAN_QUIZ_CREATOR:
      return { ...initialstate }

    default:
      return state
  }
}

export default quizCreatorReducer
