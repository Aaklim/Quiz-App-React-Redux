import React, { useEffect } from 'react'
import Quizlist from './Quizlist'
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
  console.log('QuizContainer-props', userId)
  useEffect(() => {
    console.log('UsEFFECT')
    getQuizesSaga(userId)
  }, [userId, getQuizesSaga])

  const renderQuizes = (quizes) => {
    if (!quizes) return <h1>No Quizes</h1>
    return Object.keys(quizes).map((quizItem, index) => {
      const quiz = quizes[quizItem]
      console.log('Quiz', quiz)
      console.log('QuizItem', quizItem)
      return (
        <li
          key={index}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <NavLink to={'/quiz/' + quizItem + `/${userId}`}>
            {quiz[0].quizName}
          </NavLink>
          {userId !== 'root' ? (
            <div
              style={{ display: 'inline-block', marginLeft: '15px' }}
              onClick={() => deleteQuizSaga(quizItem, userId)}
            >
              Delete
            </div>
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
