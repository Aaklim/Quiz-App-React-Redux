import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import {
  getQuizCreatorStateSelector,
  getUserIdSelector,
} from '../../Redux/selectors/selectors'
import {
  addQuestionToQuiz,
  createQuizSaga,
} from '../../Redux/actioncreators/actioncreators'
import QuizCreatorForm from './QuizCreatorForm'

const QuizCreatorContainer = (props) => {
  const quizLength = props.quiz.length
  const submitHandler = (e) => {
    const questionItem = {
      quizName: e.quizName,
      question: e.question,
      rightAnswerId: Number(e.rightAnswer),
      id: quizLength + 1,
      answers: [
        { id: 1, text: e.answer1 },
        { id: 2, text: e.answer2 },
        { id: 3, text: e.answer3 },
        { id: 4, text: e.answer4 },
      ],
    }
    props.addQuestionToQuiz(questionItem)
    props.reset('quizCreatorform')
  }
  const createQuiz = (e) => {
    e.preventDefault()
    props.createQuizSaga(props.quiz, props.userId)
  }
  return (
    <QuizCreatorForm
      onSubmit={(e) => submitHandler(e)}
      createQuiz={createQuiz}
      quizLength={quizLength}
    />
  )
}

const mapStateToProps = (state) => ({
  quiz: getQuizCreatorStateSelector(state),
  userId: getUserIdSelector(state),
})
const mapDispatchToProps = {
  addQuestionToQuiz,
  reset,
  createQuizSaga,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizCreatorContainer)
