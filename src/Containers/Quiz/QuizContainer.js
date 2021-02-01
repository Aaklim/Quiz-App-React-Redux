/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from './Quiz.module.scss'
import {
  getQuizeSaga,
  setAnswerToState,
  setQuizIsFinished,
  toggleActiveQuestion,
  retryQuiz,
} from '../../Redux/actioncreators/actioncreators'
import { getQuizSelector } from '../../Redux/selectors/selectors'
import Loader from '../../Components/UI/Loader/Loader'
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz'
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz'

const QuizContainer = ({
  match: {
    params: { id, userId },
  },
  getQuizeSaga,
  setQuizIsFinished,
  retryQuiz,
  setAnswerToState,
  toggleActiveQuestion,
  quizstate: { activeQuestion, quiz, answerState, results, isFinished },
}) => {
  useEffect(() => {
    getQuizeSaga(id, userId)
  }, [id, userId, getQuizeSaga])

  const isQuizFinished = () => activeQuestion + 1 === quiz.length
  const createTimeoutAfterAnswer = (time) => {
    const timeout = window.setTimeout(() => {
      if (isQuizFinished()) {
        setQuizIsFinished()
      } else {
        toggleActiveQuestion()
      }

      window.clearTimeout(timeout)
    }, time)
  }

  const onAnswerClickhandler = (answerId) => {
    if (answerState) {
      const key = Object.keys(answerState)[0]
      if (answerState[key] === 'success') {
        return
      }
    }

    const currentQuestion = quiz[activeQuestion]

    if (currentQuestion.rightAnswerId === answerId) {
      if (!results[currentQuestion.id]) {
        results[currentQuestion.id] = 'success'
      }
      setAnswerToState({
        answerState: { [answerId]: 'success' },
        results,
      })
      createTimeoutAfterAnswer(1500)
    } else {
      results[currentQuestion.id] = 'error'
      setAnswerToState({
        answerState: { [answerId]: 'error' },
        results,
      })
      createTimeoutAfterAnswer(1500)
    }
  }
  const onRetryClickHandler = () => {
    retryQuiz()
  }

  return quiz.length === 0 ? (
    <Loader />
  ) : (
    <div className={classes.Quiz}>
      <div className={classes.QuizWrapper}>
        <div className={classes.quizTitle}>Answer all questions</div>

        {isFinished ? (
          <FinishedQuiz
            results={results}
            quiz={quiz}
            onRetry={onRetryClickHandler}
          />
        ) : (
          <ActiveQuiz
            answers={quiz[activeQuestion].answers}
            question={quiz[activeQuestion].question}
            onAnswerClick={onAnswerClickhandler}
            quizLength={quiz.length}
            answerNumber={activeQuestion + 1}
            state={answerState}
          />
        )}
      </div>
    </div>
  )
}
QuizContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  getQuizeSaga: PropTypes.func.isRequired,
  setAnswerToState: PropTypes.func.isRequired,
  setQuizIsFinished: PropTypes.func.isRequired,
  toggleActiveQuestion: PropTypes.func.isRequired,
  retryQuiz: PropTypes.func.isRequired,
  quizstate: PropTypes.shape({
    activeQuestion: PropTypes.number,
    quiz: PropTypes.arrayOf(
      PropTypes.shape({
        answers: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
          }),
        ),

        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        rightAnswerId: PropTypes.number.isRequired,
      }),
    ).isRequired,
    answerState: PropTypes.objectOf(PropTypes.string),
    results: PropTypes.objectOf(PropTypes.string),
    isFinished: PropTypes.bool.isRequired,
  }),
}

QuizContainer.defaultProps = {
  quizstate: PropTypes.shape({
    activeQuestion: 0,
    answerState: null,
    results: {},
  }),
}

const mapStateToProps = (state) => ({
  quizstate: getQuizSelector(state),
})
const mapDispatchToProps = {
  getQuizeSaga,
  setAnswerToState,
  setQuizIsFinished,
  toggleActiveQuestion,
  retryQuiz,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(QuizContainer)
