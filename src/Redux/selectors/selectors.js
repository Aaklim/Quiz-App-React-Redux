export const getQuizesSelector = (state) => {
  return state.quizList.quizes;
};

export const quizesIsLoadingSelector = (state) => {
  return state.quizList.quizesIsLoading;
};
export const getQuizSelector = (state) => {
  return state.quiz;
};
export const getQuizCreatorStateSelector = (state) => {
  return state.quizCreator.quiz;
};
