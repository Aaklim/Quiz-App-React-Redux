/* eslint-disable no-shadow */
import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import PropTypes from 'prop-types'
import {
  getQuizCreatorStateSelector,
  getUserIdSelector,
} from '../../Redux/selectors/selectors'
import {
  addQuestionToQuiz,
  createQuizSaga,
} from '../../Redux/actioncreators/actioncreators'
import QuizCreatorForm from './QuizCreatorForm'

const QuizCreatorContainer = ({
  quiz,
  addQuestionToQuiz,
  reset,
  createQuizSaga,
  userId,
}) => {
  const quizLength = quiz.length
  const submitHandler = (e) => {
    const questionItem = {
      quizName: e.quizName,
      question: e.question,
      rightAnswerId: Number(e.rightAnswer),
      id: quizLength + 1,
      answers: [
        { id: 1, text: e.answer1 },
        { id: 2, text: e.answer2 },
        { id: 3, text: e.answer3 },
        { id: 4, text: e.answer4 },
      ],
    }
    addQuestionToQuiz(questionItem)
    reset('quizCreatorform')
  }
  const createQuiz = (e) => {
    e.preventDefault()
    createQuizSaga(quiz, userId)
  }
  return (
    <QuizCreatorForm
      onSubmit={(e) => submitHandler(e)}
      createQuiz={createQuiz}
      quizLength={quizLength}
    />
  )
}

const mapStateToProps = (state) => ({
  quiz: getQuizCreatorStateSelector(state),
  userId: getUserIdSelector(state),
})

QuizCreatorContainer.propTypes = {
  quiz: PropTypes.array,
  addQuestionToQuiz: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  createQuizSaga: PropTypes.func.isRequired,
  userId: PropTypes.string,
}

QuizCreatorContainer.defaultProps = {
  quiz: [],
  userId: null,
}

const mapDispatchToProps = {
  addQuestionToQuiz,
  reset,
  createQuizSaga,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizCreatorContainer)
