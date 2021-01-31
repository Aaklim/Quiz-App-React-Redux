export const getQuizzesSelector = (state) => state.quizList.quizzes
export const quizzesIsLoadingSelector = (state) =>
  state.quizList.quizesIsLoading
export const getQuizSelector = (state) => state.quiz
export const getQuizCreatorStateSelector = (state) => state.quizCreator.quiz
export const getAuthErrorSelector = (state) => state.auth.error
export const getAuthorizedSelector = (state) => !!state.auth.token
export const getFormStateSelector = (state) => state.form
export const getUserIdSelector = (state) => state.auth.userId
export const getUserEmailSelector = (state) => state.auth.email
