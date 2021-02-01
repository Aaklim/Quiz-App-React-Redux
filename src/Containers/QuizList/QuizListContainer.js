/* eslint-disable no-shadow */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Quizlist from './Quizlist'
import classes from './QuizListContainer.module.scss'
import {
  getQuizzesSelector,
  quizzesIsLoadingSelector,
  getUserEmailSelector,
} from '../../Redux/selectors/selectors'
import {
  getQuizzesSaga,
  deleteQuizSaga,
} from '../../Redux/actioncreators/actioncreators'
import Loader from '../../Components/UI/Loader/Loader'

const QuizListContainer = ({
  userId,
  deleteQuizSaga,
  isLoading,
  getQuizzesSaga,
  quizzes,
  userEmail,
}) => {
  useEffect(() => {
    getQuizzesSaga(userId)
  }, [userId, getQuizzesSaga])
  const cls = [classes.delete, 'fas fa-times']

  const renderQuizzes = (quizzes) => {
    if (!quizzes) return <h1 className={classes.emptyQuizess}>No Quizzes</h1>
    return Object.keys(quizzes).map((quizItem, index) => {
      const quiz = quizzes[quizItem]
      return (
        <li key={index}>
          <NavLink to={`/quiz/${quizItem}/${userId}`}>
            {quiz[0].quizName}
          </NavLink>
          {userId !== 'root' ? (
            <div
              className={cls.join(' ')}
              onClick={() => deleteQuizSaga(quizItem, userId)}
            />
          ) : null}
        </li>
      )
    })
  }

  return isLoading ? (
    <Loader />
  ) : (
    <Quizlist
      quizzes={renderQuizzes(quizzes)}
      userId={userId}
      userEmail={userEmail}
    />
  )
}
QuizListContainer.propTypes = {
  userId: PropTypes.string,
  deleteQuizSaga: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getQuizzesSaga: PropTypes.func.isRequired,
  quizzes: PropTypes.objectOf(PropTypes.array),
  userEmail: PropTypes.string.isRequired,
}
QuizListContainer.defaultProps = {
  userId: 'root',
  quizzes: null,
}

const mapStateToProps = (state) => ({
  quizzes: getQuizzesSelector(state),
  isLoading: quizzesIsLoadingSelector(state),
  userEmail: getUserEmailSelector(state),
})
const mapDispatchToProps = {
  getQuizzesSaga,
  deleteQuizSaga,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizListContainer)
