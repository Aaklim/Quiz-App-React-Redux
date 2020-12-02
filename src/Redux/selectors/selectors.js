export const getQuizesSelector = (state) => {
  return state.quizList.quizes;
};

export const quizesIsLoadingSelector = (state) => {
  return state.quizList.quizesIsLoading;
};
