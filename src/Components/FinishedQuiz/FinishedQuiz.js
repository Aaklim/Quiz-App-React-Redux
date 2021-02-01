import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'

const FinishedQuiz = ({ results, quiz, onRetry, match }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total += 1
    }
    return total
  }, 0)
  const quizzesPath = match.params.userId === 'root' ? '/' : '/user-quizzes'
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const cls = [
            'fas',
            results[quizItem.id] === 'error'
              ? 'fa-times'
              : `fa-check ${classes.correct} `,
            classes[results[quizItem.id]],
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
        {quiz.length}
      </div>
      <div className={classes.buttons}>
        <Button onClick={onRetry} styleType="primary">
          repeat
        </Button>
        <Link to={quizzesPath}>
          <Button styleType="success">Quizzes</Button>
        </Link>
      </div>
    </div>
  )
}
FinishedQuiz.propTypes = {
  results: PropTypes.objectOf(PropTypes.string).isRequired,
  onRetry: PropTypes.func.isRequired,
  quiz: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
}
export default withRouter(FinishedQuiz)
