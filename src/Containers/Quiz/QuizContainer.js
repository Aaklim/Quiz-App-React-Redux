import React, { useEffect } from 'react'
import classes from './Quiz.module.scss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
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

const QuizContainer = (props) => {
  console.log('QuizContainer', props)
  useEffect(() => {
    const id = props.match.params.id
    const userId = props.match.params.userId

    props.getQuizeSaga(id, userId)
  }, [])

  const createTimeoutAfterAnswer = (time) => {
    const timeout = window.setTimeout(() => {
      if (isQuizFinished()) {
        props.setQuizIsFinished()
      } else {
        props.toggleActiveQuestion()
      }

      window.clearTimeout(timeout)
    }, time)
  }
  const isQuizFinished = () => {
    return props.quizstate.activeQuestion + 1 === props.quizstate.quiz.length
  }
  const onAnswerClickhandler = (answerId) => {
    if (props.quizstate.answerState) {
      const key = Object.keys(props.quizstate.answerState)[0]
      if (props.quizstate.answerState[key] === 'success') {
        return
      }
    }

    const question = props.quizstate.quiz[props.quizstate.activeQuestion]
    const results = props.quizstate.results
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      props.setAnswerToState({
        answerState: { [answerId]: 'success' },
        results,
      })
      createTimeoutAfterAnswer(1500)
    } else {
      results[question.id] = 'error'
      props.setAnswerToState({
        answerState: { [answerId]: 'error' },
        results,
      })
      createTimeoutAfterAnswer(1500)
    }
  }
  const onRetryClickHandler = () => {
    props.retryQuiz()
  }

  return props.quizstate.quiz.length === 0 ? (
    <Loader />
  ) : (
    <div className={classes.Quiz}>
      <div className={classes.QuizWrapper}>
        <div className={classes.quizTitle}>Ответьте на все вопросы</div>

        {props.quizstate.isFinished ? (
          <FinishedQuiz
            results={props.quizstate.results}
            quiz={props.quizstate.quiz}
            onRetry={onRetryClickHandler}
          />
        ) : (
          <ActiveQuiz
            answers={
              props.quizstate.quiz[props.quizstate.activeQuestion].answers
            }
            question={
              props.quizstate.quiz[props.quizstate.activeQuestion].question
            }
            onAnswerClick={onAnswerClickhandler}
            quizLength={props.quizstate.quiz.length}
            answerNumber={props.quizstate.activeQuestion + 1}
            state={props.quizstate.answerState}
          />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quizstate: getQuizSelector(state),
  }
}
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
