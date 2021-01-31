import React, { useEffect } from 'react'
import Quizlist from './Quizlist'
import classes from './QuizListContainer.module.scss'
import { connect } from 'react-redux'
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
import { NavLink } from 'react-router-dom'

const QuizListContainer = ({
  userId = 'root',
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
          <NavLink to={'/quiz/' + quizItem + `/${userId}`}>
            {quiz[0].quizName}
          </NavLink>
          {userId !== 'root' ? (
            <div
              className={cls.join(' ')}
              onClick={() => deleteQuizSaga(quizItem, userId)}
            ></div>
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

const mapStateToProps = (state) => {
  return {
    quizzes: getQuizzesSelector(state),
    isLoading: quizzesIsLoadingSelector(state),
    userEmail: getUserEmailSelector(state),
  }
}
const mapDispatchToProps = {
  getQuizzesSaga,
  deleteQuizSaga,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizListContainer)
