import React, { useEffect } from 'react'
import Quizlist from './Quizlist'
import classes from './QuizListContainer.module.scss'
import { connect } from 'react-redux'
import {
  getQuizesSelector,
  quizesIsLoadingSelector,
} from '../../Redux/selectors/selectors'
import {
  getQuizesSaga,
  deleteQuizSaga,
} from '../../Redux/actioncreators/actioncreators'
import Loader from '../../Components/UI/Loader/Loader'
import { NavLink } from 'react-router-dom'

const QuizListContainer = ({
  userId = 'root',
  deleteQuizSaga,
  isLoading,
  getQuizesSaga,
  quizes,
}) => {
  useEffect(() => {
    getQuizesSaga(userId)
  }, [userId, getQuizesSaga])
  const cls = [classes.delete, 'fas fa-times']

  const renderQuizes = (quizes) => {
    if (!quizes) return <h1>No Quizes</h1>
    return Object.keys(quizes).map((quizItem, index) => {
      const quiz = quizes[quizItem]
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

  return isLoading ? <Loader /> : <Quizlist quizes={renderQuizes(quizes)} />
}

const mapStateToProps = (state) => {
  return {
    quizes: getQuizesSelector(state),
    isLoading: quizesIsLoadingSelector(state),
  }
}
const mapDispatchToProps = {
  getQuizesSaga,
  deleteQuizSaga,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizListContainer)
