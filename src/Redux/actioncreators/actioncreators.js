import {
  GET_QUIZES_SAGA,
  TOGGLE_QUIZES_IS_LOADING,
  GET_QUIZES,
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
