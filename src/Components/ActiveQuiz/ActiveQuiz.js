import React from 'react'
import PropTypes from 'prop-types'
import classes from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = ({
  answerNumber,
  question,
  quizLength,
  answers,
  onAnswerClick,
  state,
}) => (
  <div className={classes.ActiveQuiz}>
    <div className={classes.Question}>
      <div className={classes.title}>
        <strong>{answerNumber}.</strong> {question}
      </div>
      <div className={classes.questionNumber}>
        {answerNumber} of {quizLength}
      </div>
    </div>
    <AnswersList
      answers={answers}
      onAnswerClick={onAnswerClick}
      state={state}
    />
  </div>
)
ActiveQuiz.propTypes = {
  answerNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  quizLength: PropTypes.number.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string),
}
ActiveQuiz.defaultProps = {
  state: null,
}

export default ActiveQuiz
