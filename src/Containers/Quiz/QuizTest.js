import React, { Component } from 'react'
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz'
import Loader from '../../Components/UI/Loader/Loader'
import classes from './Quiz.module.scss'

export class QuizTest extends Component {
  onAnswerClickhandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      })
    }
  }

  onRetryClickHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      answerState: null,
      activeQuestion: 0,
    })
  }
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    if (this.props.quiz.length === 0) {
      return <Loader />
    }
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <div className={classes.quizTitle}>Ответьте на все вопросы</div>

          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.onRetryClickHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickhandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}

export default QuizTest
