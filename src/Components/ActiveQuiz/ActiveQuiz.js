import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => (
  <div className={classes.ActiveQuiz}>
    <div className={classes.Question}>
      <div className={classes.title}>
        <strong>{props.answerNumber}.</strong> {props.question}
      </div>
      <div className={classes.questionNumber}>
        {props.answerNumber} of {props.quizLength}
      </div>
    </div>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
)

export default ActiveQuiz
