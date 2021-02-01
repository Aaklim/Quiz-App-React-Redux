import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import PropTypes from 'prop-types'
import classes from './QuizCreator.module.scss'
import Button from '../../Components/UI/Button/Button'
import MyInput from '../../Components/UI/Input/MyInput'
import validate from '../../form/controls'
import MySelect from '../../Components/UI/Select/MySelect'

const QuizCreatorForm = ({ handleSubmit, quizLength, invalid, createQuiz }) => (
  <div className={classes.QuizCreator}>
    <div className={classes.content}>
      <h1>Quiz creator</h1>
      <Form onSubmit={handleSubmit}>
        {!quizLength ? (
          <Field name="quizName" component={MyInput} label="Quiz name" />
        ) : null}
        <Field name="question" component={MyInput} label="Question" />
        <Field name="answer1" component={MyInput} label="Answer 1" />
        <Field name="answer2" component={MyInput} label="Answer 2" />
        <Field name="answer3" component={MyInput} label="Answer 3" />
        <Field name="answer4" component={MyInput} label="Answer 4" />
        <Field name="rightAnswer" component={MySelect} label="Correct answer" />
        <Button styleType="primary" type="submit" disabled={invalid}>
          Add question
        </Button>
        <Button styleType="success" disabled={!quizLength} onClick={createQuiz}>
          Create Quiz
        </Button>
      </Form>
    </div>
  </div>
)
QuizCreatorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  quizLength: PropTypes.number.isRequired,
  invalid: PropTypes.bool.isRequired,
  createQuiz: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'quizCreatorform',
  initialValues: { rightAnswer: '1' },
  validate,
})(QuizCreatorForm)
