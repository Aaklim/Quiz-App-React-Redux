import React from 'react'
import classes from './FinishedQuiz.module.scss'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

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
        Правильно {successCount} из {props.quiz.length}
      </div>
      <div className={classes.buttons}>
        <Button onClick={props.onRetry} type="primary">
          repeat
        </Button>
        <Link to="/userQuizes">
          <Button type="success">Quizess</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz
