import { GET_QUIZZES, TOGGLE_QUIZZES_IS_LOADING } from '../actions/actions'

const initialstate = { quizzes: {}, quizzesIsLoading: false }

function quizListReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_QUIZZES:
      return {
        ...state,
        quizzes: action.payload,
      }
    case TOGGLE_QUIZZES_IS_LOADING:
      return {
        ...state,
        quizzesIsLoading: !state.quizzesIsLoading,
      }
    default:
      return state
  }
}
export default quizListReducer
