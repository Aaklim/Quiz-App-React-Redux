import { GET_QUIZES, TOGGLE_QUIZES_IS_LOADING } from '../actions/actions';

const initialstate = { quizes: [], quizesIsLoading: false };

function quizListReducer(state = initialstate, action) {
  switch (action.type) {
    case GET_QUIZES:
      return {
        ...state,
        quizes: action.payload,
      };
    case TOGGLE_QUIZES_IS_LOADING:
      return {
        ...state,
        quizesIsLoading: !state.quizesIsLoading,
      };
    default:
      return state;
  }
}
export default quizListReducer;
