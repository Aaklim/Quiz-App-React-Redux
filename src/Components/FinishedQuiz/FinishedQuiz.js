import React from 'react'
import classes from './FinishedQuiz.module.scss'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import { withRouter } from 'react-router-dom'

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)
  const quizzesPath =
    props.match.params.userId === 'root' ? '/' : '/user-quizzes'
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fas',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]],
          ]

          return (
            <li key={index}>
              <div className={classes.answers}>
                <strong>{index + 1}. </strong>
                {quizItem.question}
              </div>
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      <div className={classes.rightAnswers}>
        Correct <span className={classes.success}>{successCount}</span> from{' '}
        {props.quiz.length}
      </div>
      <div className={classes.buttons}>
        <Button onClick={props.onRetry} type="primary">
          repeat
        </Button>
        <Link to={quizzesPath}>
          <Button type="success">Quizzes</Button>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(FinishedQuiz)
